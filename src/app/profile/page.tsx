import AdaptiveLink from "@/app/(components)/adaptive-link";
import { feeds } from "@/lib/data/feeds";
import { page } from "@d-exclaimation/next";
import PreviewPost from "./preview-post";
import Tabs from "./tabs";

const profile = {
  name: "Vincent",
  image: "/members/U04T77KA6MT.webp",
  email: "vno16@uclive.ac.nz",
  connected: true,
  about: [
    {
      icon: "/location.svg",
      value: "210 Armagh Street, Christchurch Central, 8011",
    },
    { icon: "/area.svg", value: "Christchurch, New Zealand" },
    { icon: "/date.svg", value: "April 29, 2002" },
    { icon: "/ping-pong.svg", value: "Basketball, Disc Golf" },
  ],
  goals: [
    {
      kind: "Steps",
      primary: "4,892",
      secondary: "of 6,000 steps",
      percent: Math.round((4892 * 100) / 6000),
      icon: "/steps.svg",
      colors: {
        ring: "stroke-blue",
        text: "text-blue",
        bg: "bg-blue",
      },
      weekly: [5267, 2012, 3231, 1000, 400, 5420, 4892],
      goal: 6000,
      href: "/profile/steps",
    },
    {
      kind: "Floors climbed",
      primary: "147",
      secondary: "of 500 floors",
      percent: Math.round((147 * 100) / 500),
      icon: "/floor-climbed.svg",
      colors: {
        ring: "stroke-red",
        text: "text-red",
        bg: "bg-red",
      },
      weekly: [360, 210, 62, 134, 500, 126, 147],
      goal: 500,
      href: "/profile/floors",
    },
  ],
  stats: [
    {
      kind: "Active calories",
      primary: "2,046",
      secondary: "kcal",
      icon: "/calories.svg",
      colors: {
        border: "border-orange",
      },
    },

    {
      kind: "Average heartrate",
      primary: "112",
      secondary: "BPM",
      icon: "/heart-rate.svg",
      colors: {
        border: "border-rose",
      },
    },

    {
      kind: "Active time",
      primary: "17,567",
      secondary: "secs",
      icon: "/active-time.svg",
      colors: {
        border: "border-blue-600",
      },
    },

    {
      kind: "Distance",
      primary: "43,123",
      secondary: "m",
      icon: "/distance.svg",
      colors: {
        border: "border-green",
      },
    },
  ],
  teams: {
    managed: ["Team A", "Team B", "Team C"],
    joined: ["Team D", "Team E", "Team F"],
  },
};

export default page(() => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-start min-w-full md:min-w-[unset] min-h-[100dvh] xl:min-h-[unset] xl:justify-center xl:items-start gap-4 py-4">
      {/* Profile */}
      <div className="w-full md:w-xl flex flex-col items-start justify-center md:my-2 p-4 bg-white rounded-md md:shadow">
        {/* About */}
        <div className="w-full mt-2 px-2 flex flex-col items-start justify-start">
          <AdaptiveLink
            href="/profile/familiar"
            className="rounded-md px-2 opacity-0 py-1 bg-[#eef3f6] text-sm ml-auto hover:bg-red-200 active:bg-red-200"
          >
            Back
          </AdaptiveLink>
          <img
            className="relative w-16 h-16 md:h-20 md:w-20 aspect-square rounded-full object-cover"
            src={profile.image}
          />

          <div className="w-full flex items-end justify-between gap-2">
            <div className="flex flex-col items-start justify-center gap-0.5">
              <h3 className="text-base md:text-lg leading-none font-bold mt-1">
                {profile.name}
              </h3>
              <span className="text-xs md:text-sm leading-none text-black/50">
                {profile.email}
              </span>
            </div>
            {profile.connected ? (
              <div className="flex flex-row items-center justify-center gap-1 rounded-full bg-[#6DCFF6] px-1 py-0.5 md:px-2 md:py-0">
                <img src="/garmin.svg" className="p-0.5 h-4 w-4" />
                <span className="text-xs md:text-sm leading-none text-white mr-1">
                  Connected
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex gap-2 items-center mr-auto mt-2">
            <button className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm  hover:bg-blue-200 active:bg-blue-200">
              Edit Profile
            </button>
            <button className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm  hover:bg-fuchsia-200 active:bg-fuchsia-200">
              Settings
            </button>
          </div>
        </div>

        <div className="w-full bg-slate-200/50 h-[1px] mb-2 mt-3 mx-1" />

        {/* About */}
        <div className="w-full flex flex-col px-2 gap-1">
          <h3 className="font-semibold mt-1">About</h3>

          {profile.about.map(({ icon, value }, i) => (
            <div className="flex gap-2 items-center" key={`about-${i}`}>
              <img src={icon} className="w-4 h-4" />
              <span className="text-xs md:text-sm leading-none text-black/50">
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full bg-slate-200/50 h-[1px] mb-2 mt-3 mx-1" />

        {/* Daily Goals */}
        <div className="w-full flex flex-col px-2 gap-2">
          <h3 className="font-semibold mb-1">Daily Goals</h3>
          {profile.goals.map(
            (
              { kind, primary, secondary, percent, colors, icon, weekly, goal },
              i
            ) => (
              <div
                key={`summary-${i}`}
                className="w-full flex flex-col md:flex-row justify-between"
              >
                <div className="w-full flex flex-row-reverse gap-2 items-center justify-end">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs md:text-sm leading-none font-semibold text-black/60 capitalize">
                      {kind}
                    </span>
                    <span
                      className={`text-lg md:text-xl font-bold ${colors.text}`}
                    >
                      {primary}
                    </span>
                    <span className="text-xs md:text-sm text-black/40">
                      {secondary}
                    </span>
                  </div>

                  <div className="relative flex items-center justify-center w-20 h-20">
                    <svg className="relative w-20 h-20" viewBox="0 0 37 37">
                      <g
                        style={{
                          transform: "scale(0.75) rotate(-90deg)",
                          transformOrigin: "50%",
                        }}
                      >
                        <circle
                          stroke-width="6"
                          r="15.915"
                          cx="50%"
                          cy="50%"
                          className={`opacity-30 fill-none ${colors.ring}`}
                        />
                        <circle
                          stroke-width="6"
                          r="15.915"
                          cx="50%"
                          cy="50%"
                          className={`stroke-cap-round fill-none animate-progress ${colors.ring}`}
                          stroke-dasharray={`${percent}, 100`}
                        />
                      </g>
                    </svg>

                    <img src={icon} className="absolute w-7 h-7" />
                  </div>
                </div>
                <div className="relative flex w-[unset] h-16 items-end justify-end gap-0.5">
                  {weekly.map((stat, index) => {
                    const height = Math.min(
                      4,
                      Math.max((stat * 4) / goal, 1)
                    ).toFixed(2);
                    const date = new Date(
                      Date.now() - (weekly.length - index) * 1000 * 3600 * 24
                    ).toLocaleDateString("en-NZ", {
                      weekday: "short",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                    return (
                      <div
                        key={`step-${index}`}
                        className="relative w-4 flex flex-col items-center justify-end"
                      >
                        <span
                          className={`absolute bg-opacity-10 w-4 rounded-full ${colors.bg}`}
                          style={{
                            height: "4rem",
                          }}
                        />
                        <span
                          className={`relative w-4 rounded-full animate-rise ${colors.bg}`}
                          data-height={height}
                          style={{
                            height: `${height}rem`,
                          }}
                        />
                        <div
                          className={`absolute peer group cursor-pointer top-0 w-4 h-4 rounded-full 
                          hover:scale-110 hover:p-0.5 transition-all flex items-center 
                          justify-center p-1 animate-fade-in ${colors.bg}`}
                          style={{
                            animationDelay: "0.5s",
                          }}
                        >
                          <span className="w-full h-full rounded-full bg-white group-hover:bg-transparent transition-all" />
                        </div>

                        <div
                          className="absolute origin-top-right -z-10 top-5 right-5 opacity-0 hidden md:flex
                          data-[first-half=true]:right-[unset] data-[first-half=true]:left-5 data-[first-half=true]:origin-top-left
                        bg-white rounded-b-md rounded-tl-md shadow-md peer-hover:opacity-100 peer-hover:z-10
                          h-max w-max transition-all flex-col items-start p-2 ring ring-slate-200"
                          data-first-half={index < weekly.length / 2}
                        >
                          <span className="text-xs font-light mb-1">
                            {date}
                          </span>
                          <span className="font-bold text-lg md:text-xl">
                            {stat}
                          </span>
                          <span className="text-xs font-medium text-black/60">
                            86% of goal
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>

        <div className="w-full bg-slate-200/50 h-[1px] mb-2 mt-3 mx-1" />

        {/* Daily Summary */}
        <div className="w-full flex flex-col px-2 gap-1">
          <h3 className="font-semibold mb-1">Daily Summary</h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-2">
            {profile.stats.map(
              ({ icon, primary, secondary, kind, colors }, i) => (
                <div
                  key={`stat-${i}`}
                  className="w-full md:h-40 flex flex-row md:flex-col items-center md:items-start md:justify-between py-4 px-2 md:px-6 gap-3 md:gap-0"
                >
                  <div
                    className={`p-3 h-16 w-16 rounded-full border-6 border-opacity-60 ${colors.border}`}
                  >
                    <img src={icon} className="w-full h-full aspect-square" />
                  </div>
                  <div className="md:w-full flex-col">
                    <h3 className="text-base md:text-lg leading-none font-bold mt-1">
                      {primary}{" "}
                      <span className="text-xs md:text-sm leading-none text-black/60">
                        {secondary}
                      </span>
                    </h3>
                    <span className="text-xs md:text-sm leading-none text-black/50">
                      {kind}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="w-full md:w-xl flex flex-col items-start justify-center md:my-2  bg-white rounded-md md:shadow">
        <Tabs />
        <span className="mx-4 mb-2 w-[calc(100%-2rem)] h-[1px] bg-black/10 translate-y-[0.5px]" />

        <div className="w-full flex flex-col px-4 py-3 z-10 max-h-[112dvh] md:h-[112dvh] z-10 overflow-auto">
          {feeds.length > 0 ? (
            <div className="w-[calc(100%-3.5rem)] mx-7 px-1 pb-10 border-l border-black/15 flex flex-col items-start justify-start">
              {feeds.map((post, i) => (
                <PreviewPost
                  key={`post-${i}`}
                  i={i}
                  {...post}
                  shouldSuperAnimate={false}
                />
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col gap-1 items-center justify-center">
              <img
                className="max-w-[10rem] aspect-auto opacity-60 py-4"
                src="/empty-state.png"
              />
              <span className="text-black/50 text-lg font-medium">
                Enjoying the vast emptiness of space?
              </span>

              <a className="text-black/50 text-sm underline md:mb-[40%]">
                &larr; Not really? Start following!
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export const runtime = "edge";
