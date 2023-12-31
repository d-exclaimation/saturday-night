"use client";

import { feeds } from "@/lib/data/feeds";
import { page } from "@d-exclaimation/next";
import { useEffect, useState } from "react";
import Post from "./post";

export default page(() => {
  const [isOn, setOn] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.shiftKey && e.key === "e") {
        setOn((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="w-full min-h-[100dvh]  flex items-center justify-center">
      <div className="w-full md:w-3xl min-h-full flex flex-col items-start justify-start md:my-2 md:my-8 py-2 bg-white rounded-lg shadow-md">
        <div className="w-full flex items-center justify-center py-3 bg-white/75 backdrop-blur sticky top-0 z-20">
          <h2 className="text-2xl font-semibold">Feeds</h2>
        </div>

        <div className="w-[calc(100%-3.5rem)] mx-7 px-1 pb-10 border-l border-black/15 flex flex-col items-start justify-start">
          {feeds.map((post, i) => (
            <Post key={`post-${i}`} i={i} {...post} shouldSuperAnimate={isOn} />
          ))}
        </div>
      </div>
    </div>
  );
});

export const runtime = "edge";
