import { user } from "./users";

export type Feed = {
  id: string;
  user: {
    image: string;
    name: string;
  };
  time: string;
  content: string;
  stats?: {
    kind: "kcal" | "km" | "mins" | "points";
    value: number;
  }[];
  images?: string[];
  reactions?: {
    emoji: string;
    count: number;
  }[];
};

export const feeds = [
  {
    id: "feed-mustapha-1",
    user: user.mustapha,
    time: "less than a second ago",
    content:
      '"No exceptional person ever lived like an average person" #blessed',
    images: [
      "/mustapha-car-1.png",
      "/mustapha-car-2.png",
      "/mustapha-car-3.png",
      "/mustapha-car-4.png",
    ],
    reactions: [
      {
        emoji: "🥵",
        count: 10,
      },
    ],
  },
  {
    id: "feed-vincent-1",
    user: user.vincent,
    time: "2 mins ago",
    content: "Touch some grass, it’s good for you. #nature #grass",
    stats: [
      {
        kind: "kcal",
        value: 2.45,
      },
    ],
    images: ["/touch-grass.jpg"],
  },
  {
    id: "feed-zaki-1",
    user: user.zaki,
    time: "8 mins ago",
    content:
      "Looking forward to Team 400 ‘s internal team discussion. #excited #wanttobethere",
    stats: [
      {
        kind: "kcal",
        value: 242.3,
      },
    ],
    images: ["/excited.png"],
    reactions: [
      {
        emoji: "💀",
        count: 1,
      },
    ],
  },
  {
    id: "feed-matthew-1",
    user: user.matthew,
    time: "32 mins ago",
    content:
      "Smashed it at bowling, the wall couldn’t keep up. #strike #bowling",
    stats: [
      {
        kind: "kcal",
        value: 836.7,
      },
      {
        kind: "points",
        value: 142,
      },
    ],
  },
  {
    id: "feed-vincent-2",
    user: user.vincent,
    time: "2 hours ago",
    content:
      "Went on a biking trip all around the city, never felt so alive! #madlad",
    stats: [
      {
        kind: "kcal",
        value: 1125.5,
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
    images: ["/me-biking 1.png"],
    reactions: [
      {
        emoji: "👍",
        count: 5,
      },
    ],
  },
  {
    id: "feed-mustapha-2",
    user: user.mustapha,
    time: "12 hours ago",
    content:
      "The higher we are placed, the more humbly we should walk. #blessed",
    images: ["/humbled.png"],
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
] satisfies Feed[];
