import { page } from "@d-exclaimation/next";
import Link from "next/link";

export default page(() => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center min-w-screen min-h-[100dvh] bg-white">
      <section className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center relative mb-4 animate-enters">
          <div className="absolute -z-20 w-48 h-48 md:w-60 md:h-60 border border-black/20 animate-droplet ![animation-delay:1s] rounded-full"></div>
          <div className="absolute -z-20 w-48 h-48 md:w-60 md:h-60 border border-black/20 animate-droplet ![animation-delay:2s] rounded-full"></div>
          <div className="absolute -z-20 w-48 h-48 md:w-60 md:h-60 border border-black/20 animate-droplet ![animation-delay:3s] rounded-full"></div>
          <div className="absolute z-10 w-48 h-48 md:w-60 md:h-60 translate-x-1/3 blur-2xl bg-red-400/20 rounded-full  [-webkit-transform:translate3d(var(--tw-translate-x),0,0)]"></div>
          <div className="absolute z-10 w-48 h-48 md:w-60 md:h-60 overflow-clip -translate-x-1/3 blur-2xl bg-fuchsia-400/20 rounded-full  [-webkit-transform:translate3d(var(--tw-translate-x),0,0)]"></div>
          <div className="w-24 h-24 md:w-28 md:h-28 z-50 md:p-1 bg-white rounded-full relative">
            <img className="relative" src="/saturday.png" />
          </div>
        </div>

        <h2 className="font-semibold animate-enters ![animation-delay:0.1s] text-2xl md:text-3xl leading-none mb-4">
          Saturday Night
        </h2>

        <h4 className="text-4xl md:text-7xl animate-enters ![animation-delay:0.15s] font-extrabold text-center mb-6 md:mb-8">
          A better way to
          <br /> play sports
        </h4>

        <p className="text-sm md:text-base animate-enters ![animation-delay:0.2s] text-black/50 max-w-[90vw] text-center flex flex-wrap mb-6">
          Early preview of planned features of Saturday. <br />
          Not all features are available yet.
        </p>

        <a
          className="animate-enters ![animation-delay:0.25s] group cursor-pointer mb-4 flex items-center justify-center relative"
          href="https://saturday.team"
        >
          <span
            className="absolute px-8 py-2 rounded opacity-0
            bg-gradient-to-tr from-fuchsia-400/60 to-red-400/60 
            group-hover:opacity-100 group-hover:blur-md 
            group-active:opacity-100 group-active:blur-md 
            transition-all duration-700 text-transparent"
          >
            Live App
          </span>
          <span
            className="px-8 py-2 rounded bg-indigo-50 transition-all
				  group-hover:bg-red-950 group-active:bg-red-950
				  group-hover:text-white group-active:text-white relative"
          >
            Live App
          </span>
        </a>

        <Link
          className="animate-enters ![animation-delay:0.25s] group cursor-pointer mb-4 flex items-center justify-center relative"
          href="/feeds2"
        >
          <span className="z-10 peer px-2 py-1 group-hover:underline transition-all text-sm relative">
            Feeds
          </span>
          <span
            className="absolute text-sm text-transparent bg-clip-text
            bg-gradient-to-tr from-fuchsia-300 to-red-300
            group-hover:blur-lg group-active:blur-lg 
            peer-hover:blur-lg peer-active:blur-lg 
            transition-all duration-700"
          >
            Feeds
          </span>
        </Link>
      </section>

      <div className="h-[10vh]"></div>
    </div>
  );
});

export const runtime = "edge";
