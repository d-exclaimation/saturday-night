import { calculateOdds, queryReviews } from "@/lib/relax/reviews.server";
import { page } from "@d-exclaimation/next";

export default page(async () => {
  const reviews = await queryReviews();
  const allOdds = reviews.members.map(({ id, ...rest }) => ({
    id,
    ...rest,
    chances: calculateOdds(id, reviews),
  }));

  const maxOdds = Math.max(
    ...allOdds.flatMap(({ chances }) => chances.map((c) => c.odds))
  );

  return (
    <div className="w-full md:w-4xl flex flex-col items-start justify-center md:my-2 p-4">
      <div className="w-full flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
        {allOdds.map(({ id, name, review, chances }) => {
          return (
            <div
              key={`member-stats-${id}`}
              className="flex flex-col w-full gap-1 bg-white rounded-md md:shadow p-1"
            >
              {/* Profile Display */}
              <div
                key={`profile-${id}`}
                className="flex flex-row items-center justify-between w-full p-2"
              >
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={`/members/${id}.webp`}
                  />
                  <div className="ml-2 flex flex-col items-start justify-center gap-1">
                    <span className="font-medium text-sm">{name}</span>
                    <span className="font-light text-xs text-black/60">
                      {id}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row items-end gap-2">
                  <span className="text-xl font-semibold text-blue-400">
                    {review}
                  </span>
                  <span className="font-light text-xs text-black/60 mb-0.5">
                    reviews
                  </span>
                </div>
              </div>

              {/* Stats */}

              <div className="w-full flex flex-row items-center justify-between h-40 px-4 pb-4">
                {chances.map((reviewee) => {
                  const height = Math.max(0.1, (5 * reviewee.odds) / maxOdds);
                  return (
                    <div
                      key={`odd-${id}-${reviewee.id}`}
                      className="flex flex-col w-[8%] items-center justify-end h-full gap-1"
                    >
                      <span className="text-xs font-light text-black/50">
                        {reviewee.odds}%
                      </span>
                      <span
                        className="w-full rounded-md bg-blue h-20"
                        style={{
                          height: `${height.toFixed(2)}rem`,
                          filter: `hue-rotate(${height * 6}deg)`,
                        }}
                      />
                      <img
                        className="w-[90%] aspect-square rounded-full object-cover"
                        src={`/members/${reviewee.id}.webp`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export const revalidate = 0;
export const runtime = "edge";
