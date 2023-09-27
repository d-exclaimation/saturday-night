import { page } from "@d-exclaimation/next";
import AdaptiveLink from "../(components)/adaptive-link";

const profile = {
  name: "Saturday",
  image: "/members/U04T77KA6MT.webp",
  bio: "The official team for Saturday, a software built for modern teams creating new standard for personalised teams, exhibitions, and activities.",
  about: [
    {
      icon: "/location.svg",
      value: "210 Armagh Street, Christchurch Central, 8011",
    },
    { icon: "/area.svg", value: "Christchurch, New Zealand" },
    { icon: "/ping-pong.svg", value: "Software Development" },
  ],
};

export default page(() => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-start min-w-full md:min-w-[unset] min-h-[100dvh] xl:min-h-[unset] xl:justify-center xl:items-start gap-4 py-4">
      <div className="w-full md:w-xl flex flex-col items-start justify-center md:my-2 p-4 bg-white rounded-md md:shadow">
        {/* About */}
        <div className="w-full mt-2 px-2 flex flex-col items-start justify-start">
          <AdaptiveLink
            href="/feeds"
            className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm ml-auto hover:bg-red-200 active:bg-red-200"
          >
            Back
          </AdaptiveLink>
          <img
            className="relative w-16 h-16 md:h-20 md:w-20 aspect-square rounded-full object-cover"
            src={profile.image}
          />

          <div className="w-full flex items-end justify-between gap-2">
            <div className="flex flex-col items-start justify-center gap-0.5">
              <h3 className="flex items-center text-base md:text-lg leading-none font-bold mt-1">
                <img
                  className="w-4 h-4 p-0.5 rounded-full bg-indigo-2 mr-1.5"
                  src="/hash.svg"
                />{" "}
                {profile.name}
              </h3>
              <p className="text-xs md:text-sm leading-none text-black/50 max-w-[90%]">
                {profile.bio}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center mr-auto my-3">
            <span className="text-xs flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber" />
              1,642 Followers
            </span>

            <span className="text-xs flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-green" />
              10 Members
            </span>
          </div>
          <div className="flex gap-2 items-center mr-auto mt-1">
            <button className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm  hover:bg-blue-200 active:bg-blue-200">
              Edit Profile
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

        <div className="w-full flex flex-col px-2 gap-1.5">
          <h4 className="font-semibold text-sm mt-1">
            Send a team invite link to a friend
          </h4>
          <div className="w-full flex items-center rounded-md px-2 py-0.5 bg-slate-50/40 border border-black/10 py-1 text-sm">
            <a className="text-black/60 decoration-black/50 underline max-w-[80%] truncate">
              https://saturday.fitness/prod/teamInvite?token=83kjajd12
            </a>

            <button className="ml-auto rounded-md p-1 bg-[#eef3f6] text-sm  hover:bg-blue-200 active:bg-blue-200">
              <img src="/copy.svg" className="w-5 h-5" />
            </button>
            <button className="ml-2 rounded-md p-1 bg-[#eef3f6] text-sm  hover:bg-amber-200 active:bg-amber-200">
              <img src="/reload.svg" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
