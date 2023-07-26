"use client";

import { rc } from "@d-exclaimation/next";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();

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
        className="fixed z-50 bottom-6 right-5 md:right-[unset] md:bottom-[unset] md:top-3 md:left-5 rounded-lg group
        flex flex-col-reverse md:flex-row items-center gap-1 p-1 bg-white border border-slate-300 active:scale-95 overflow-hidden"
        onClick={() => setShow((prev) => !prev)}
      >
        <div className="w-8 h-8 flex flex-col items-center justify-around py-1">
          <span
            className="w-6 h-[2px] rounded-full bg-black transition-all data-[show=true]:rotate-45 data-[show=true]:translate-x-1 data-[show=true]:-translate-y-[0.25px] origin-top-left"
            data-show={show}
          ></span>
          <span
            className="w-6 h-[2px] rounded-full bg-black transition-all data-[show=true]:opacity-0 data-[show=true]:translate-x-1/4"
            data-show={show}
          ></span>
          <span
            className="w-6 h-[2px] rounded-full bg-black transition-all data-[show=true]:-rotate-45 data-[show=true]:translate-x-1 data-[show=true]:translate-y-[0.25px] origin-bottom-left"
            data-show={show}
          ></span>
        </div>
      </button>
      <div
        className="fixed inset-0 bg-black/5 transition-all backdrop-blur-md md:backdrop-blur-sm -z-40 opacity-0 data-[show=true]:opacity-100 data-[show=true]:z-40"
        data-show={show}
        onClick={() => setShow(false)}
      />

      {/* Command Palette */}
      <div className="nav-command" data-show={show}>
        <div className="nav-command-header">
          <img className="nav-header-icon" src="/saturday.png" />
          <a href="/" className="nav-header-text">
            Saturday
          </a>
          <button className="nav-header-close" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
        <span className="nav-divider" />

        {sections.map((section, i) => (
          <>
            <div key={section.name} className="nav-section-text-container">
              <span className="text-sm px-2 py-1 text-slate-400">
                {section.name}
              </span>
              {section.actions.map(({ name, icon, href, shortcut }) => (
                <a
                  href={href}
                  key={name}
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
