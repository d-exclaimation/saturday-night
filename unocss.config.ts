import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  rules: [
    ["animate-bounce", { animation: "bounce 1s infinite backwards" }],
    ["animate-rise", { animation: "rise 0.5s cubic-bezier(0.5, 0, 1, 1)" }],
    ["animate-glint", { animation: "glint 0.5s cubic-bezier(0.5, 0, 1, 1)" }],
    [
      /animate-(\w+)/,
      ([_, p]) => ({
        animation: `${p} 6s ease-in-out infinite backwards`,
      }),
    ],
  ],
  shortcuts: {
    "nav-command":
      "fixed w-[95%] md:w-72 bottom-6 md:bottom-[unset] md:left-5 md:top-16 ring-1 ring-slate-300 flex flex-col items-center justify-center opacity-0 -z-60 translate-y-full md:translate-y-0 md:-translate-x-full text-sm md:text-base font-light bg-white px-1 font-medium overflow-hidden rounded-lg md:rounded-md p-1 shadow-md data-[show=true]:translate-x-0 data-[show=true]:z-60 data-[show=true]:opacity-100 data-[show=true]:translate-y-0 transition-all duration-500",
    "nav-command-header": "flex w-full items-center px-2 pt-2 pb-1",
    "nav-header-icon": "w-6 mr-2",
    "nav-header-text":
      "text-base text-slate-800 font-semibold hover:underline active:underline",
    "nav-header-close":
      "rounded-md px-2 py-1 bg-[#eef3f6] text-sm ml-auto hover:bg-red-200 active:bg-red-200",
    "nav-divider": "bg-slate-300 w-full h-[1px] my-2",
    "nav-section-text-container": "w-full flex flex-col",
    "nav-section-text": "text-sm px-2 py-1 text-slate-400",
    "nav-action":
      "focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-2 py-1.5 rounded-md hover:bg-slate-100 w-full flex items-center",
    "nav-action-icon": "w-4 h-4 mr-2",
    "nav-action-secondary": "ml-auto text-xs text-slate-400",
  },
});
