import "server-only";
import { pipeline } from "./kv.server";
import { members } from "./members";

export const queryReviews = async () => {
  try {
    const res = await pipeline<string | undefined>(
      members.map(({ id }) => ["GET", `reviews:${id}`])
    );

    const reviewsByMembers = res
      .map(({ result }) => (result ? parseInt(result, 10) : 0))
      .map((n) => (isNaN(n) ? 0 : n))
      .map((review, i) => ({ ...members[i], review }));

    const baseSum = reviewsByMembers.reduce(
      (sum, { review }) => sum + review,
      0
    );

    return {
      sum: baseSum,
      members: reviewsByMembers,
    };
  } catch (e) {
    return {
      sum: 0,
      members: members.map(({ id, name }) => ({ id, name, review: 0 })),
    };
  }
};

export const calculateOdds = (
  id: string,
  { sum: base, members }: Awaited<ReturnType<typeof queryReviews>>
) => {
  const member = members.find((m) => m.id === id);
  if (!member) return members.map(({ id, name }) => ({ id, name, odds: 0 }));

  return members.map(({ review, id, name }) => {
    if (id === member.id) return { id, name, odds: 0 };

    const sum = base - review;
    const totalWeight = members
      .filter((m) => m.id !== id)
      .reduce(
        (acc, { review }) =>
          acc +
          (review === 0
            ? sum * (members.length - 1)
            : Math.round(sum / review)),
        0
      );

    if (totalWeight === 0)
      return { id, name, odds: Math.round(100 / (members.length - 1)) };

    const weight =
      member.review === 0 ? sum * (members.length - 1) : sum / member.review;
    return {
      id,
      name,
      odds: Math.round((weight * 100) / totalWeight),
    };
  });
};
