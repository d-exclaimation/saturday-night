import { feeds } from "@/lib/data/feeds";
import { page } from "@d-exclaimation/next";
import AdaptiveLink from "../(components)/adaptive-link";
import Emoji from "../feeds/emoji";

export default page(() => {
  return (
    <div className="w-full min-h-[100dvh]  flex items-center justify-center">
      <div className="w-full md:w-3xl min-h-full flex flex-col items-start justify-start md:my-2 md:my-8 py-2 bg-white rounded-lg shadow-md">
        <div className="w-full flex items-center justify-center py-3 bg-white/75 backdrop-blur sticky top-0 z-20">
          <h2 className="text-2xl font-semibold">For you</h2>
        </div>

        <div className="w-[calc(100%-3.5rem)] mx-7 px-1 pb-10 border-l border-black/15 flex flex-col items-start justify-start">
          {feeds.map(
            (
              { user, time, content, images, reactions, activity, stats },
              i
            ) => (
              <div
                key={`post-${i}`}
                className="flex flex-col w-full px-2 md:px-6 py-1"
              >
                <div className="flex flex-row min-w-full items-center -translate-x-9 md:-translate-x-13">
                  <div className="p-2 bg-white rounded-full shrink-0">
                    <img src={user.image} className="w-8 h-8 rounded-full" />
                  </div>
                  <span className="min-w-fit text-sm md:text-base font-semibold">
                    {user.name}
                  </span>
                  <span className="ml-1 md:ml-2 min-w-fit text-xs text-black/50">
                    {time}
                  </span>
                </div>

                <p className="max-w-full text-sm md:text-base">{content}</p>

                {stats && (
                  <div className="w-full max-w-lg flex flex-col p-1 px-2 mb-2 mt-3 mx-1 bg-slate-200/20 rounded-md ring-1 ring-slate-300/40 h-fit">
                    {activity && (
                      <div className="w-full flex py-1">
                        <span className="text-black/40 text-sm">
                          {activity}
                        </span>
                      </div>
                    )}
                    <div className="w-full h-fit py-1 grid grid-cols-2 md:grid-cols-3 gap-1">
                      {stats.map((stat, i) => (
                        <div
                          key={`stat-${i}`}
                          className="flex items-center gap-1"
                        >
                          <img
                            className="aspect-square w-6 h-6 mr-1"
                            src={`/${stat.kind}.svg`}
                            alt={stat.kind}
                          />
                          <span className="font-bold text-lg">
                            {stat.value}
                          </span>
                          <span className="font-light text-sm">
                            {stat.kind}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {images && images.length && (
                  <div className="flex gap-1 w-full pt-6 pb-4 md:py-6 px-3">
                    <img
                      src={images[0]}
                      className="transition-all duration-700 max-w-[250px] max-h-[250px] md:max-w-[38rem] md:max-h-[38rem]
                        object-cover rounded-md shadow-2xl rotate-1 data-[odd=true]:-rotate-1"
                      data-odd={i % 2 === 0}
                    />
                  </div>
                )}

                <div className="flex max-w-full flex-wrap items-center gap-2 mt-2">
                  {(reactions ?? []).map((reaction, i) => (
                    <Emoji key={`reaction-${i}`} {...reaction} />
                  ))}

                  <div className="flex items-center gap-1 py-0.5 px-2 rounded-lg bg-black/5 hover:bg-black/10 transition-all">
                    <img
                      src="/add-reaction.svg"
                      className="w-5 h-5 opacity-60"
                    />
                  </div>

                  <AdaptiveLink
                    href="/for-you"
                    className="ml-auto flex items-center gap-1 text-black/50 hover:text-black/75 active:text-black/75"
                  >
                    <span className="mr-1">💬</span>
                    <span className="text-sm">5 comments</span>
                  </AdaptiveLink>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
});

export const runtime = "edge";
