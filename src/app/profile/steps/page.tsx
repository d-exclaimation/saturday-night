import AdaptiveLink from "@/app/(components)/adaptive-link";
import { page } from "@d-exclaimation/next";

const data = [
  31, 100, 50, 12, 25, 12, 64, 31, 100, 50, 31, 25, 12, 64, 1, 25, 12, 64, 31,
  100, 50, 71, 25, 12, 64, 31, 100, 50, 1, 25, 12, 64, 64,
];

export default page(() => {
  return (
    <div className="w-full md:w-2xl flex flex-col items-start justify-center md:my-2 p-4 bg-white rounded-md shadow">
      <div className="flex items-center gap-2 w-[100%]">
        <img
          className="w-5 px-1 aspect-square md:w-6"
          src="/steps.svg"
          alt="threads"
        />
        <span className="font-semibold text-lg md:text-xl">Steps</span>
        <AdaptiveLink
          href="/profile"
          className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm ml-auto hover:bg-red-200 active:bg-red-200"
        >
          Back
        </AdaptiveLink>
      </div>

      <div className="flex items-start mt-4 justify-start gap-6 w-full">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="relative w-20 h-20" viewBox="0 0 37 37">
            <g
              style={{
                transform: "scale(0.75) rotate(-90deg)",
                transformOrigin: "50%",
              }}
            >
              <circle
                stroke-width="10"
                r="15.915"
                cx="50%"
                cy="50%"
                className="opacity-30 fill-none stroke-blue"
              />
              <circle
                stroke-width="10"
                r="15.915"
                cx="50%"
                cy="50%"
                className="stroke-cap-round fill-none animate-progress stroke-blue"
                stroke-dasharray={`${80}, 100`}
              />
            </g>
          </svg>
          <span className="absolute text-sm font-bold text-blue">80</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-light">Today</span>
          <span className="font-bold text-2xl md:text-3xl">
            4,892
            <span className="ml-1.5 text-xs font-extralight text-black/60">
              steps
            </span>
          </span>
          <span className="text-xs mt-1 text-black/60">
            <span className="text-emerald">+16.7%</span> from yesterday
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-light">Goal</span>
          <span className="font-bold text-2xl md:text-3xl">
            6,000
            <span className="ml-1.5 text-xs font-extralight text-black/60">
              steps/day
            </span>
          </span>
          <span className="text-xs mt-1 text-black/60">
            since{" "}
            {new Date(Date.now() - 3600_000 * 24 * 40).toLocaleDateString(
              "en-NZ",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-light">Accumulated</span>
          <span className="font-bold text-2xl md:text-3xl">
            232,412
            <span className="ml-1.5 text-xs font-extralight text-black/60">
              total steps
            </span>
          </span>
          <span className="text-xs mt-1 text-black/60">for the past year</span>
        </div>
      </div>

      <div className="relative flex w-full h-40 items-end gap-0.5">
        {data.map((i, index) => (
          <div
            key={`step-${i}`}
            className="relative flex-1 flex flex-col items-center justify-end"
          >
            <span
              className="relative bg-blue w-4 rounded-full animate-rise"
              data-height={Math.max((i * 8) / 100, 2).toFixed(2)}
              style={{
                height: `${Math.max((i * 8) / 100, 2).toFixed(2)}rem`,
              }}
            />
            <div
              className="absolute peer group cursor-pointer top-0 w-4 aspect-square rounded-full 
              bg-blue hover:scale-120 hover:bg-white hover:p-0.5 transition-all flex items-center 
              justify-center p-1 animate-fade-in"
              style={{
                animationDelay: "0.5s",
              }}
            >
              <span className="w-full h-full rounded-full bg-white group-hover:bg-blue transition-all" />
            </div>

            <div
              className="absolute origin-top-right -z-10 top-5 right-5 opacity-0 
              data-[first-half=true]:right-[unset] data-[first-half=true]:left-5 data-[first-half=true]:origin-top-left
              bg-white rounded-b-md rounded-tl-md shadow-md peer-hover:opacity-100 peer-hover:z-10
              h-max w-max transition-all flex flex-col items-start p-2 ring ring-slate-200"
              data-first-half={index < data.length / 2}
            >
              <span className="text-xs font-light mb-1">
                {new Date(
                  Date.now() - (data.length - index) * 1000 * 3600 * 24
                ).toLocaleDateString("en-NZ", {
                  weekday: "short",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="font-bold text-lg md:text-xl">
                {Math.round(i * 50)}
              </span>
              <span className="text-sm">Steps</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const runtime = "edge";
