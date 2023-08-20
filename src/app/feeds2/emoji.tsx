"use client";

import { rc } from "@d-exclaimation/next";

type Props = {
  emoji: string;
  count: number;
  onClick: () => void;
  isExploding: boolean;
};

export default rc<Props>(({ emoji, count, onClick, isExploding }) => {
  return (
    <button
      className="flex items-center gap-1 py-0.5 px-2 rounded-lg bg-black/5 hover:bg-black/10 transition-all"
      onClick={onClick}
    >
      <span
        data-exploding={isExploding}
        className="text-sm data-[exploding=true]:animate-pop transition-all"
      >
        {emoji}
      </span>
      <span className="font-semibold text-sm">{count}</span>
    </button>
  );
});
