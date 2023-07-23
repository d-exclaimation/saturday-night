import { InferProps, page } from "@d-exclaimation/next";
import Post from "./post";

const examples = [
  {
    user: {
      image: "/zaki.png",
      name: "Zaki",
    },
    time: "8 mins ago",
    content:
      "Looking forward to Team 400 ‘s internal team discussion. #excited #wanttobethere",
    stats: [
      {
        kind: "kcal",
        value: 1042.3,
      },
    ],
    image: "/excited.png",
    reactions: [
      {
        emoji: "💀",
        count: 1,
      },
    ],
  },
  {
    user: {
      image: "/matthew.png",
      name: "Matthew Minish",
    },
    time: "32 mins ago",
    content:
      "Smashed it at bowling, the wall couldn’t keep up. #strike #bowling",
    stats: [
      {
        kind: "kcal",
        value: 4136.7,
      },
      {
        kind: "points",
        value: 142,
      },
    ],
  },
  {
    user: {
      image: "/vincent.png",
      name: "vincent",
    },
    time: "2 hours ago",
    content:
      "Went on a biking trip all around the city, never felt so alive! #madlad",
    stats: [
      {
        kind: "kcal",
        value: 2125.5,
      },
      {
        kind: "km",
        value: 25.5,
      },
      {
        kind: "mins",
        value: 120,
      },
    ],
    image: "/me-biking 1.png",
    reactions: [
      {
        emoji: "👍",
        count: 5,
      },
    ],
  },
  {
    user: {
      image: "/mustapha.png",
      name: "Mustapha",
    },
    time: "12 hours ago",
    content:
      "The higher we are placed, the more humbly we should walk. #blessed",
    image: "/humbled.png",
    reactions: [
      {
        emoji: "🥵",
        count: 1,
      },
      {
        emoji: "🥶",
        count: 1,
      },
      {
        emoji: "🤯",
        count: 1,
      },
    ],
  },
] satisfies InferProps<typeof Post>[];

export default page(() => {
  return (
    <div className="w-full md:w-2xl flex flex-col items-start justify-center md:my-2 p-4 bg-white rounded-md shadow">
      <div className="flex items-center gap-2 w-[100%]">
        <img
          className="w-5 px-1 aspect-square md:w-6"
          src="/threads.svg"
          alt="threads"
        />
        <span className="font-semibold text-lg md:text-xl">Feeds</span>
      </div>
      <div className="flex flex-col my-4 mx-4 px-4 border-l-2 border-black/20">
        {examples.map((post, i) => (
          <Post key={`post-${i}`} {...post} />
        ))}
      </div>
    </div>
  );
});

export const runtime = "edge";
