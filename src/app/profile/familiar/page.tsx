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
    },
    {
      kind: "Floors climbed",
      primary: "147",
      secondary: "of 500 floors",
      percent: Math.round((147 * 100) / 500),
      icon: "/floor-climbed.svg",
    },
  ],
  stats: [
    {
      kind: "Active calories",
      primary: "2,046",
      secondary: "kcal",
      icon: "/calories.svg",
    },

    {
      kind: "Average heartrate",
      primary: "112",
      secondary: "BPM",
      icon: "/heart-rate.svg",
    },

    {
      kind: "Active time",
      primary: "17,567",
      secondary: "secs",
      icon: "/active-time.svg",
    },

    {
      kind: "Distance",
      primary: "43,123",
      secondary: "m",
      icon: "/distance.svg",
    },
  ],
  teams: {
    managed: ["Team A", "Team B", "Team C"],
    joined: ["Team D", "Team E", "Team F"],
  },
};

export default page(() => {
  return (
    <div className="v-stack xl:flex-row items-center justify-start min-w-full md:min-w-[unset] min-h-[100dvh] xl:min-h-[unset] xl:justify-center xl:items-start gap-4 py-4">
      {/* Profile */}
      <div className="v-stack w-full md:w-xl items-start justify-center md:my-2 p-4 bg-white rounded-md md:shadow">
        {/* Display */}
        <section className="v-stack profile-display-section">
          <div className="h-stack profile-form-actions">
            <AdaptiveLink
              href="/profile/colourful"
              className="action-sm action-danger"
            >
              Back
            </AdaptiveLink>
          </div>
          <img className="profile-picture" src={profile.image} />

          <div className="v-stack profile-display-content">
            <div className="v-stack profile-display-info">
              <h3 className="profile-title">{profile.name}</h3>
              <span className="profile-caption">{profile.email}</span>
            </div>
            {profile.connected ? (
              <div className="h-stack profile-display-badge">
                <img src="/garmin.svg" className="profile-display-badge-icon" />
                <span className="profile-display-badge-text">Connected</span>
              </div>
            ) : null}
          </div>
        </section>

        <div className="profile-divider" />

        {/* About */}
        <section className="v-stack profile-section">
          <h3 className="profile-section-title">About</h3>
          {profile.about.map(({ icon, value }, i) => (
            <div className="h-stack profile-about-field" key={`about-${i}`}>
              <img src={icon} className="profile-about-icon" />
              <span className="profile-caption">{value}</span>
            </div>
          ))}
          <div className="h-stack profile-form-actions">
            <button className="action-sm action-active">Settings</button>
            <button className="action-sm action-active">Edit Profile</button>
          </div>
        </section>

        <div className="profile-divider" />

        {/* Daily Goals */}
        <section className="v-stack profile-section">
          <h3 className="profile-section-title">Daily Goals</h3>
          {profile.goals.map(
            ({ kind, primary, secondary, percent, icon }, i) => (
              <div key={`goals-${i}`} className="h-flipped-stack profile-goals">
                <div className="v-stack profile-goals-content">
                  <span className="profile-caption profile-goals-type">
                    {kind}
                  </span>
                  <span className="profile-goals-value">{primary}</span>
                  <span className="profile-goals-target">{secondary}</span>
                </div>

                <div className="profile-goals-ring-container">
                  <svg className="profile-goals-ring-svg" viewBox="0 0 37 37">
                    <g className="profile-goals-ring-g">
                      <circle
                        stroke-width="6"
                        r="15.915"
                        cx="50%"
                        cy="50%"
                        className="profile-goals-ring-circle"
                      />
                      <circle
                        stroke-width="6"
                        r="15.915"
                        cx="50%"
                        cy="50%"
                        className="profile-goals-ring-progress"
                        stroke-dasharray={`${percent}, 100`}
                      />
                    </g>
                  </svg>

                  <img src={icon} className="profile-goals-icon" />
                </div>
              </div>
            )
          )}
        </section>

        <div className="profile-divider" />

        {/* Daily Summary */}
        <div className="v-stack profile-section">
          <h3 className="profile-section-title">Daily Summary</h3>
          <div className="profile-summary-grid">
            {profile.stats.map(({ icon, primary, secondary, kind }, i) => (
              <div key={`summary-${i}`} className="h-stack profile-summary">
                <div className="profile-summary-icon-container">
                  <img src={icon} className="profile-summary-icon" />
                </div>
                <div className="v-stack profile-summary-text">
                  <h3 className="profile-title">
                    {primary}{" "}
                    <span className="profile-caption">{secondary}</span>
                  </h3>
                  <span className="profile-caption">{kind}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="v-stack items-center min-w-full md:min-w-[unset] w-max h-max">
        <div className="w-full md:w-xl v-stack items-start justify-center md:my-2 p-6 bg-white rounded-md md:shadow">
          <div className="h-stack items-center gap-1 w-[100%] mb-3">
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
              className="group w-full h-stack items-center py-2 px-3 rounded border border-black/5 gap-3 hover:bg-slate-100 active:bg-slate-100"
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
        <div className="w-full md:w-xl v-stack items-start justify-center md:my-2 p-6 bg-white rounded-md md:shadow">
          <div className="h-stack items-center gap-1 w-[100%] mb-3">
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
              className="group w-full h-stack items-center py-2 px-3 rounded border border-black/5 gap-3 hover:bg-slate-100 active:bg-slate-100"
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
