"use client";

import { rc } from "@d-exclaimation/next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  {
    name: "Activities",
    actions: [
      { name: "Feeds", href: "/feeds", icon: "/nav/activity.svg" },
      {
        name: "Create Activity",
        href: "https://saturday.team/createActivity",
        icon: "/nav/plus.svg",
        shortcut: "⇧⌘A",
      },
    ],
  },

  {
    name: "Friends",
    actions: [
      { name: "Connections", href: "/connections", icon: "/nav/emoji.svg" },
      {
        name: "Search Users",
        href: "https://saturday.team/searchUsers",
        icon: "/nav/search.svg",
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
      },
      {
        name: "Create Team",
        href: "https://saturday.team/new",
        icon: "/nav/plus.svg",
        shortcut: "⇧⌘T",
      },
    ],
  },

  {
    name: "Settings",
    actions: [
      {
        name: "Account",
        href: "https://saturday.team/userProfile",
        icon: "/nav/profile.svg",
        shortcut: "⇧⌘P",
      },
      {
        name: "Logout",
        href: "https://saturday.team/logout",
        icon: "/nav/logout.svg",
        shortcut: "⇧⌘Q",
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
      if (e.metaKey && e.shiftKey) {
        sections.map((section) => {
          section.actions.forEach(({ shortcut, href }) => {
            if (shortcut?.includes(e.key)) {
              router.push(href);
            }
          });
        });
      }
    };

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [router]);

  return (
    <>
      <button
        className="fixed z-50 bottom-5 right-5 w-12 h-12 rounded-full ring-1 ring-slate-300 shadow-md active:scale-95"
        onClick={() => setShow((prev) => !prev)}
      >
        <img src="/saturday.png" />
      </button>
      <div
        className="fixed inset-0 bg-black/5 transition-all backdrop-blur-md -z-40 opacity-0 data-[show=true]:opacity-100 data-[show=true]:z-40"
        data-show={show}
        onClick={() => setShow(false)}
      />

      {/* Command Palette */}
      <div
        className="fixed w-[95%] md:w-72 bottom-5 md:right-5 md:bottom-18 ring-1 ring-slate-300
        flex flex-col items-center justify-center opacity-0 -z-60 translate-y-full text-sm md:text-base font-light
        bg-white px-1 font-medium overflow-hidden rounded-lg md:rounded-md p-1 shadow-md
        data-[show=true]:z-60 data-[show=true]:opacity-100 data-[show=true]:translate-y-0 transition-all duration-500"
        data-show={show}
      >
        <div className="flex w-full items-center px-2 pt-2 pb-1">
          <img className="w-6 mr-2" src="/saturday.png" />
          <h3 className="text-base text-slate-800 font-semibold">Saturday</h3>
          <button
            className="rounded-md px-2 py-1 bg-[#eef3f6] text-sm ml-auto hover:bg-red-200 active:bg-red-200"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </div>
        <span className="bg-slate-300 w-full h-[1px] my-2" />

        {sections.map((section, i) => (
          <>
            <div key={section.name} className="w-full flex flex-col">
              <span className="text-sm px-2 py-1 text-slate-400">
                {section.name}
              </span>
              {section.actions.map(({ name, icon, href, shortcut }) => (
                <a
                  href={href}
                  className="focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-2 py-1.5 rounded-md hover:bg-slate-100 w-full flex items-center"
                >
                  <img src={icon} className="w-4 h-4 mr-2" />
                  {name}
                  {shortcut && (
                    <span className="ml-auto text-xs text-slate-400">
                      {shortcut}
                    </span>
                  )}
                </a>
              ))}
            </div>
            {i < sections.length - 1 && (
              <span className="bg-slate-300 w-full h-[1px] my-2" />
            )}
          </>
        ))}

        <div className="h-1" />
      </div>
    </>
  );
});
