import { feeds } from "@/lib/data/feeds";
import { user } from "@/lib/data/users";
import { page } from "@d-exclaimation/next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Emoji from "../emoji";

export default page<{ P: { id: string } }>(({ params: { id } }) => {
  const feed = feeds.find((feed) => feed.id === id);
  if (!feed) {
    redirect("/feeds");
  }

  return (
    <div className="w-full md:w-2xl flex flex-col items-start justify-center md:my-2 p-4 bg-white rounded-md shadow">
      <div className="flex items-center gap-2 w-[100%] pb-4">
        <img
          className="aspect-square w-8 h-8 rounded-full ring-6 ring-white"
          src={feed.user.image}
          alt={feed.user.name}
        />
        <span className="font-semibold text-lg md:text-xl">
          {feed.user.name}
        </span>
        <span className="font-light text-sm">{feed.time}</span>

        <Link
          href="/feeds"
          className="rounded-md px-3 py-2 bg-[#eef3f6] text-sm ml-auto hover:bg-red-200 active:bg-red-200"
        >
          Back
        </Link>
      </div>
      <div className="flex flex-col gap-2 px-2 max-w-full">
        <p className="">{feed.content}</p>
        {feed.stats && (
          <div className="flex flex-col py-1 gap-2">
            {feed.stats.map((stat, i) => (
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
        {feed.images && (
          <div className="flex items-center gap-2 max-w-[min(600px,95%)] overflow-x-auto">
            {feed.images.map((image) => (
              <img
                className="w-auto h-auto block aspect-ratio-auto max-w-[300px] max-h-[300px] py-1 rounded-2xl"
                key={`image-${image}`}
                src={image}
              />
            ))}
          </div>
        )}
        {feed.reactions && (
          <div className="flex items-center gap-2">
            {feed.reactions.map((reaction, i) => (
              <Emoji key={`reaction-${i}`} {...reaction} />
            ))}
          </div>
        )}
      </div>

      <span className="bg-slate-300 w-full h-[1px] my-4" />

      <div className="flex flex-col w-full gap-2">
        {[
          { ...user.zaki, content: "/my-honest-reaction.gif" },
          { ...user.vincent, content: "/my-honest-reaction-ryan-gosling.gif" },
        ].map((user) => (
          <div
            key={user.name}
            className="w-full flex items-start justify-start px-4 bg-white"
          >
            <img
              className="aspect-square w-6 h-6 rounded-full ring-6 ring-white flex-shrink-0"
              src={user.image}
              alt={user.name}
            />
            <div className="pl-2 flex-1 flex flex-col items-start justify-start w-full">
              <div className="w-full flex items-center gap-2 pb-1">
                <span className="font-semibold text-sm">{user.name}</span>
                <span className="font-light text-xs">
                  less than a second ago
                </span>
              </div>
              <img
                className="w-auto h-auto block aspect-ratio-auto max-w-[300px] max-h-[300px] py-1 rounded-2xl"
                loading="lazy"
                src={user.content}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
