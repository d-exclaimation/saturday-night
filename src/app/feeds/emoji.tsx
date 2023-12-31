"use client";

import { rc } from "@d-exclaimation/next";
import { useRef, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

type Props = {
  emoji: string;
  count: number;
};

export default rc<Props>(({ emoji, count: initial }) => {
  const timeoutRef = useRef<NodeJS.Timeout | number | undefined>();
  const [count, setCount] = useState(initial);
  const [isExploding, setExploding] = useState(false);
  return (
    <>
      <button
        className="flex items-center gap-1 py-0.5 px-2 rounded-lg bg-black/5 hover:bg-black/10 transition-all"
        onClick={() => {
          if (isExploding) return;
          setCount((prev) => prev + 1);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setExploding(true);
        }}
      >
        <span
          data-exploding={isExploding}
          className="text-sm data-[exploding=true]:animate-pop transition-all"
        >
          {emoji}
        </span>
        <span className="font-semibold text-sm">{count}</span>
      </button>

      <div
        data-show={isExploding}
        className="fixed -z-60 data-[show=true]:z-60 data-[show=true]:opacity-100 transition-opacity opacity-0 inset-0 flex items-center justify-center bg-black/40 backdrop-blur transition-all"
      >
        {isExploding && (
          <ConfettiExplosion
            zIndex={90}
            onComplete={() => setExploding(false)}
          />
        )}
        <div
          data-show={isExploding}
          className="absolute z-200 transition-all data-[show=true]:animate-gold-plating"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute rounded-full w-32 h-32 bg-cyan blur-2xl"></span>
            <span className="relative text-9xl">{emoji}</span>
          </div>
        </div>
      </div>
    </>
  );
});
