import AdaptiveLink from "@/app/(components)/adaptive-link";
import { page } from "@d-exclaimation/next";

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
      },
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
      },
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
            className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm ml-auto hover:bg-red-200 active:bg-red-200"
          >
            Back
          </AdaptiveLink>
          <img
            className="relative w-16 h-16 md:h-20 md:w-20 aspect-square rounded-full object-cover"
            src={profile.image}
          />

          <div className="w-full flex items-end justify-between gap-2">
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-base md:text-lg leading-none font-bold mt-1">
                {profile.name}
              </h3>
              <span className="text-xs md:text-sm leading-none text-black/50">
                {profile.email}
              </span>
            </div>
            {profile.connected ? (
              <div className="flex flex-row items-center justify-center gap-1 rounded-full bg-[#6DCFF6] px-1 py-0.5 md:px-2 md:py-0">
                <img
                  src="/garmin.svg"
                  className="p-0.5 w-3 h-3 md:h-4 md:w-4"
                />
                <span className="text-xs md:text-sm leading-none text-white mr-1">
                  Connected
                </span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-full bg-slate-200/50 h-[1px] mb-1 mt-3 mx-1" />

        {/* About */}
        <div className="w-full flex flex-col px-2 gap-1">
          <div className="flex items-end justify-between mb-1">
            <h3 className="font-semibold">About</h3>
            <div className="flex gap-2 items-center ml-auto mt-2">
              <button className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm  hover:bg-blue-200 active:bg-blue-200">
                Settings
              </button>
              <button className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm  hover:bg-blue-200 active:bg-blue-200">
                Edit Profile
              </button>
            </div>
          </div>
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
        <div className="w-full flex flex-col px-2 gap-1">
          <h3 className="font-semibold mb-1">Daily Goals</h3>
          {profile.goals.map(
            ({ kind, primary, secondary, percent, colors, icon }, i) => (
              <div
                key={`summary-${i}`}
                className="w-full flex items-center justify-between"
              >
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

                  <img src={icon} className="absolute w-8 h-8" />
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
                    className={`p-3 h-16 w-16 rounded-full border-6 border-opacity-60 w-fit ${colors.border}`}
                  >
                    <img src={icon} className="w-full h-full" />
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
      <div className="flex flex-col items-center min-w-full md:min-w-[unset] w-max h-max">
        <div className="w-full md:w-xl flex flex-col items-start justify-center md:my-2 p-6 bg-white rounded-md md:shadow">
          <div className="flex items-center gap-1 w-[100%] mb-3">
            <img
              className="w-6 px-1 aspect-square md:w-7"
              src="/bike.svg"
              alt="threads"
            />
            <span className="font-semibold text-base md:text-lg">
              Your teams
            </span>
          </div>
          {profile.teams.managed.map((team, i) => (
            <div
              key={`managed-${i}`}
              className="group w-full flex items-center py-2 px-3 rounded border border-black/5 gap-3 hover:bg-slate-100 active:bg-slate-100"
            >
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full group-hover:scale-110"
                  src={`https://api.dicebear.com/6.x/shapes/svg?seed=${team}`}
                />
              </div>
              <span className="max-w-[60%] truncate">{team}</span>
            </div>
          ))}
        </div>
        <div className="w-full md:w-xl flex flex-col items-start justify-center md:my-2 p-6 bg-white rounded-md md:shadow">
          <div className="flex items-center gap-1 w-[100%] mb-3">
            <img
              className="w-6 px-1 aspect-square md:w-7"
              src="/ping-pong.svg"
              alt="threads"
            />
            <span className="font-semibold text-base md:text-lg">
              Joined teams
            </span>
          </div>
          {profile.teams.managed.map((team, i) => (
            <div
              key={`joined-${i}`}
              className="group w-full flex items-center py-2 px-3 rounded border border-black/5 gap-3 hover:bg-slate-100 active:bg-slate-100"
            >
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full group-hover:scale-110"
                  src={`https://api.dicebear.com/6.x/shapes/svg?seed=${team}`}
                />
              </div>
              <span className="max-w-[60%] truncate">{team}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export const runtime = "edge";
