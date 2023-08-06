import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "unocss";

// Navigation Shortcuts
const nav = {
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
};

const preset = {
  "v-stack": "flex flex-col",
  "h-stack": "flex flex-row",
  "v-flipped-stack": "flex flex-col-reverse",
  "h-flipped-stack": "flex flex-row-reverse",
  "action-sm": "rounded-md px-2 py-1 bg-[#eef3f6] text-sm",
  "action-md": "rounded-md px-3 py-2 bg-[#eef3f6] text-sm",
  "action-active": "hover:bg-blue-200 active:bg-blue-200",
  "action-danger": "hover:bg-red-200 active:bg-red-200",
};

// Profile page
const profile = {
  // Generic
  "profile-section": "w-full px-2 gap-1",
  "profile-section-title": "font-semibold mb-1",
  "profile-divider": "w-full bg-slate-200/50 h-[1px] mb-2 mt-3 mx-1",
  "profile-caption": "text-xs md:text-sm leading-none text-black/50",
  "profile-title": "text-base md:text-lg leading-none font-bold mt-1",

  // Display
  "profile-picture":
    "w-24 h-24 md:h-28 md:w-28 aspect-square rounded-full object-cover",
  "profile-display-section": "w-full px-2 items-center justify-center",
  "profile-display-content": "w-full items-center justify-center gap-2",
  "profile-display-info": "items-center justify-center gap-0.5",
  "profile-display-badge":
    "items-center justify-center gap-1 rounded-full bg-[#6DCFF6] px-1 py-0.5 md:px-2 md:py-0",
  "profile-display-badge-icon": "p-0.5 h-4 w-4",
  "profile-display-badge-text":
    "text-xs md:text-sm leading-none text-white mr-1",

  // About
  "profile-about-field": "gap-2 items-center",
  "profile-about-icon": "w-4 h-4",
  "profile-form-actions": "gap-2 items-center ml-auto mt-2",

  // Goals
  "profile-goals": "w-full items-center justify-end gap-3",
  "profile-goals-content": "gap-0.5",
  "profile-goals-type": "font-semibold capitalize",
  "profile-goals-value": "text-lg md:text-xl font-bold text-[#2CA9BC]",
  "profile-goals-target": "text-xs md:text-sm text-black/40",
  "profile-goals-ring-container":
    "relative h-stack items-center justify-center w-20 h-20",
  "profile-goals-ring-svg": "relative w-20 h-20",
  "profile-goals-ring-g":
    "[transform:_scale(75%)_rotate(-90deg)] [transform-origin:50%]",
  "profile-goals-ring-circle": "opacity-30 fill-none stroke-[#2CA9BC]",
  "profile-goals-ring-progress":
    "stroke-cap-round fill-none animate-progress stroke-[#2CA9BC]",
  "profile-goals-icon": "absolute w-6 h-6",

  // Summary
  "profile-summary-grid":
    "w-full grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-2",
  "profile-summary":
    "w-full md:h-40 md:flex-col items-center md:items-start md:justify-between py-4 px-2 md:px-6 gap-3 md:gap-0",
  "profile-summary-icon-container":
    "p-3 h-16 w-16 rounded-full border-6 border-[#2CA9BC]/60",
  "profile-summary-icon": "w-full h-full aspect-square",
  "profile-summary-text": "md:w-full",
};

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  rules: [
    ["animate-bounce", { animation: "bounce 1s infinite backwards" }],
    ["animate-rise", { animation: "rise 0.5s cubic-bezier(0.5, 0, 1, 1)" }],
    ["animate-glint", { animation: "glint 0.5s cubic-bezier(0.5, 0, 1, 1)" }],
    ["animate-progress", { animation: "progress 1s ease-in-out forwards" }],
    [
      /animate-(\w+)/,
      ([_, p]) => ({
        animation: `${p} 6s ease-in-out infinite backwards`,
      }),
    ],
  ],
  shortcuts: {
    ...preset,
    ...nav,
    ...profile,
  },
});
