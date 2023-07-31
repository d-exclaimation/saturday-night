type User = {
  image: string;
  name: string;
};

export const user = {
  saturday: {
    image: "/saturday.png",
    name: "Friends at Saturday",
  },
  zaki: {
    image: "/zaki.png",
    name: "Zaki",
  },
  matthew: {
    image: "/matthew.png",
    name: "Matthew Minish",
  },
  vincent: {
    image: "/vincent.png",
    name: "vincent",
  },
  mustapha: {
    image: "/mustapha.png",
    name: "Mustapha",
  },
} satisfies Record<string, User>;
