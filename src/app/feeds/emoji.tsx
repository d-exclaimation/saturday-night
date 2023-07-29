"use client";

import { rc } from "@d-exclaimation/next";
import { useState } from "react";

type Props = {
  emoji: string;
  count: number;
};

export default rc<Props>(({ emoji, count: initial }) => {
  const [count, setCount] = useState(initial);
  return (
    <button
      className="flex items-center gap-1 py-0.5 px-2 rounded-lg bg-black/5 hover:bg-black/10 transition-all"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      <span className="text-sm">{emoji}</span>
      <span className="font-semibold text-sm">{count}</span>
    </button>
  );
});
