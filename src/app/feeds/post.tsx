import { rc } from "@d-exclaimation/next";

type Props = {
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
  image?: string;
  reactions?: {
    emoji: string;
    count: number;
  }[];
};

export default rc<Props>(({ content, user, time, image, stats, reactions }) => {
  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="w-full flex items-center gap-2 -translate-x-8">
        <img
          className="aspect-square w-8 h-8 rounded-full ring-6 ring-white"
          src={user.image}
          alt="profile"
        />
        <span className="font-medium">{user.name}</span>
        <span className="font-light text-sm">{time}</span>
      </div>
      <p className="">{content}</p>
      {stats && (
        <div className="flex flex-col py-1 gap-2">
          {stats.map((stat, i) => (
            <div key={`stat-${i}`} className="flex items-center gap-1">
              <img
                className="aspect-square w-6 h-6 mr-1"
                src={`/${stat.kind}.svg`}
                alt={stat.kind}
              />
              <span className="font-bold text-lg">{stat.value}</span>
              <span className="font-light text-sm">{stat.kind}</span>
            </div>
          ))}
        </div>
      )}
      {image && (
        <img
          className="w-auto h-auto block aspect-ratio-auto max-w-[300px] py-1"
          src={image}
        />
      )}
      {reactions && (
        <div className="flex items-center gap-2">
          {reactions.map((reaction, i) => (
            <button
              key={`reaction-${i}`}
              className="flex items-center gap-1 py-0.5 px-2 rounded-lg bg-black/5 hover:bg-black/10 transition-all"
            >
              <span className="text-sm">{reaction.emoji}</span>
              <span className="font-semibold text-sm">{reaction.count}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
