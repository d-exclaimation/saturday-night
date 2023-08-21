"use client";

import { feeds } from "@/lib/data/feeds";
import { user } from "@/lib/data/users";
import { page } from "@d-exclaimation/next";
import { redirect } from "next/navigation";
import { useState } from "react";
import Post from "../post";
import Comment from "./comment";

export default page<{ P: { id: string } }>(({ params: { id } }) => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([
    { user: user.matthew, content: "👍", time: "1 minute ago" },
    { user: user.vincent, content: "Hello world", time: "2 hours ago" },
  ]);
  const post = feeds.find((feed) => feed.id === id);
  if (!post) {
    redirect("/feedss");
  }

  return (
    <div className="w-full min-h-[100dvh]  flex items-center justify-center">
      <div className="w-full md:w-3xl min-h-full flex flex-col items-start justify-start md:my-2 md:my-8 py-2 bg-white rounded-lg md:shadow-md">
        <div className="w-[calc(100%-3.5rem)] mx-7 px-1 pb-10 border-l border-black/15 flex flex-col items-start justify-start">
          <Post i={0} {...post} shouldSuperAnimate={false} />
        </div>
        <div className="w-full px-3 py-1 mt-2 flex gap-3">
          <img
            className="aspect-square w-8 h-8 rounded-full ring-6 ring-white"
            src="/vincent.png"
            alt="user-1"
          />
          <textarea
            className="w-[calc(100%-3.25rem)] h-19 text-sm p-2 bg-slate-50 rounded-md resize-none outline-none"
            placeholder="Add comment..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="w-full px-5 py-2 flex justify-end">
          <button
            className="action-md action-active"
            onClick={() => {
              setComments((prev) => [
                { user: user.saturday, content: input, time: "Just now" },
                ...prev,
              ]);
              setInput("");
            }}
          >
            Comment
          </button>
        </div>
        <div className="w-full h-fit my-3 px-4">
          <div className="w-full h-[1px] bg-slate/10"></div>
        </div>
        <div className="py-2 px-4 text-sm">{comments.length} Comments</div>
        <div className="w-[calc(100%-3.5rem)] mx-8 px-1 mb-3 gap-1 border-l border-black/15 flex flex-col items-start justify-start">
          {comments.map((comment, i) => (
            <Comment key={`comment-${i}`} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
});

export const runtime = "edge";
