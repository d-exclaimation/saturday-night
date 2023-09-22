"use client";
import { rc } from "@d-exclaimation/next";
import { useState } from "react";

export default rc(() => {
  const [tab, setTab] = useState<"posts" | "tagged">("posts");
  return (
    <div className="w-full flex items-center gap-1 px-4 pt-4 z-20">
      <button
        className="group relative flex items-center justify-center w-fit px-3 py-1 text-black/50 data-[active=true]:text-black data-[active=true]:font-medium"
        data-active={tab === "posts"}
        onClick={() => setTab("posts")}
      >
        <span className="px-3 py-1 rounded-md hover:bg-slate-300/30">
          Posts
        </span>
        {tab === "posts" && (
          <div className="absolute top-full w-full h-[2px] bg-blue rounded-full z-30" />
        )}
      </button>
      <button
        className="group relative flex items-center justify-center w-fit px-3 py-1 text-black/50 data-[active=true]:text-black data-[active=true]:font-medium"
        data-active={tab === "tagged"}
        onClick={() => setTab("tagged")}
      >
        <span className="px-3 py-1 rounded-md hover:bg-slate-300/30">
          Tagged
        </span>
        {tab === "tagged" && (
          <div className="absolute top-full w-full h-[2px] bg-blue rounded-full z-30" />
        )}
      </button>
    </div>
  );
});
