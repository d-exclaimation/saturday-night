"use client";

import { rc } from "@d-exclaimation/next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdaptiveLink from "./adaptive-link";

const sections = [
  {
    name: "Social",
    actions: [
      {
        name: "Feeds",
        href: "/feeds2",
        icon: "/nav/star.svg",
        shortcut: "new",
      },
      { name: "Create Post", href: "/new-post", icon: "/nav/plus.svg" },
    ],
  },
  {
    name: "Activities",
    actions: [
      {
        name: "My Activites",
        href: "https://saturday.team/userActivities",
        icon: "/nav/activity.svg",
        shortcut: "live",
      },
      {
        name: "Create Activity",
        href: "https://saturday.team/createActivity",
        icon: "/nav/plus.svg",
        shortcut: "live",
      },
    ],
  },

  {
    name: "Friends",
    actions: [
      {
        name: "Connections",
        href: "/connections",
        icon: "/nav/emoji.svg",
        shortcut: "live",
      },
      {
        name: "Search Users",
        href: "https://saturday.team/searchUsers",
        icon: "/nav/search.svg",
        shortcut: "live",
      },
    ],
  },

  {
    name: "Teams",
    actions: [
      {
        name: "Search Teams",
        href: "https://saturday.team/searchTeams",
        icon: "/nav/search.svg",
        shortcut: "live",
      },
      {
        name: "Create Team",
        href: "https://saturday.team/new",
        icon: "/nav/plus.svg",
        shortcut: "live",
      },
    ],
  },

  {
    name: "Account",
    actions: [
      {
        name: "Profile",
        href: "/profile",
        icon: "/nav/profile.svg",
      },

      {
        name: "Dashboard",
        href: "/relax",
        icon: "/nav/ping-pong.svg",
      },
      {
        name: "Logout",
        href: "https://saturday.team/logout",
        icon: "/nav/logout.svg",
        shortcut: "live",
      },
    ],
  },
];

export default rc(() => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
      if (e.metaKey && e.key === "k") setShow((prev) => !prev);
    };

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [router]);

  return (
    <>
      <button
        className="fixed z-50 bottom-6 right-5 md:right-[unset] md:bottom-[unset] md:top-3 md:left-5 
        rounded-lg group flex flex-col-reverse md:flex-row items-center gap-1 p-1 md:py-0 md:px-1.5 
        bg-white border border-slate-500/50 active:scale-95 overflow-hidden md:border-slate-300"
        onClick={() => setShow((prev) => !prev)}
      >
        <div className="w-8 h-8 flex flex-col items-center justify-around py-1 md:scale-70">
          <span
            className="w-6 h-[2px] rounded-full bg-black transition-all data-[show=true]:rotate-45 data-[show=true]:translate-x-1 data-[show=true]:-translate-y-[0.25px] origin-top-left"
            data-show={typeof window !== "undefined" && show}
          ></span>
          <span
            className="w-6 h-[2px] rounded-full bg-black transition-all data-[show=true]:opacity-0 data-[show=true]:translate-x-1/4"
            data-show={typeof window !== "undefined" && show}
          ></span>
          <span
            className="w-6 h-[2px] rounded-full bg-black transition-all data-[show=true]:-rotate-45 data-[show=true]:translate-x-1 data-[show=true]:translate-y-[0.25px] origin-bottom-left"
            data-show={typeof window !== "undefined" && show}
          ></span>
        </div>
        <span className="hidden md:inline text-sm font-medium mr-2">
          Navigate
        </span>
      </button>
      <div
        className="fixed inset-0 bg-black/5 transition-all backdrop-blur-md md:backdrop-blur-[1px] -z-40 opacity-0 data-[show=true]:opacity-100 data-[show=true]:z-40"
        un-cloak
        data-show={typeof window !== "undefined" && show}
        onClick={() => setShow(false)}
      />

      {/* Command Palette */}
      <div
        className="fixed w-[95%] md:w-72 bottom-4 md:bottom-[unset] md:left-5 md:top-16 ring-1 ring-slate-300 flex flex-col items-center justify-center opacity-0 -z-60 translate-y-full md:translate-y-0 md:-translate-x-full text-sm md:text-base font-light bg-white px-1 font-medium overflow-hidden rounded-lg md:rounded-md p-1 shadow-md data-[show=true]:translate-x-0 data-[show=true]:z-60 data-[show=true]:opacity-100 data-[show=true]:translate-y-0 transition-all duration-500"
        un-cloak
        data-show={typeof window !== "undefined" && show}
      >
        <div className="nav-command-header">
          <img className="nav-header-icon" src="/saturday.png" />
          <Link href="/" className="nav-header-text">
            Saturday
          </Link>
          <button className="nav-header-close" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
        <span className="nav-divider" />

        {sections.map((section, i) => (
          <>
            <div
              key={`${section.name}-${i}`}
              className="nav-section-text-container"
            >
              <span className="text-sm px-2 py-1 text-slate-400">
                {section.name}
              </span>
              {section.actions.map(({ name, icon, href, shortcut }, i) => (
                <AdaptiveLink
                  href={href}
                  key={`${section.name}-${name}-${i}`}
                  className="focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-2 py-1.5 rounded-md hover:bg-slate-100 w-full flex items-center"
                  onClick={() => setShow(false)}
                >
                  <img src={icon} className="w-4 h-4 mr-2" />
                  {name}
                  {shortcut && (
                    <span className="ml-auto text-xs text-slate-400">
                      {shortcut}
                    </span>
                  )}
                </AdaptiveLink>
              ))}
            </div>
            {i < sections.length - 1 && (
              <span
                key={`${section.name}-divider`}
                className="bg-slate-300 w-full h-[1px] my-2"
              />
            )}
          </>
        ))}

        <div className="h-1" />
      </div>
    </>
  );
});
