"use client";

import { rc } from "@d-exclaimation/next";

export default rc<{
  user: { name: string; image: string };
  time: string;
  content: string;
}>(({ user, content, time }) => {
  return (
    <div className="flex flex-col w-full px-2 py-1">
      <div className="flex flex-row min-w-full items-center -translate-x-8 md:-translate-x-8">
        <div className="p-2 bg-white rounded-full shrink-0">
          <img src={user.image} className="w-6 h-6 rounded-full" />
        </div>
        <span className="min-w-fit text-sm font-semibold">{user.name}</span>
        <span className="ml-1 md:ml-2 min-w-fit text-xs text-black/50">
          {time}
        </span>
      </div>

      <p className="max-w-full text-xs pl-2 md:text-sm">{content}</p>
    </div>
  );
});
