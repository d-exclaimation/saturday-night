"use client";

import { rc } from "@d-exclaimation/next";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

type Props = {
  emoji: string;
  onClick: () => void;
};

export default rc<Props>(({ emoji, onClick }) => {
  const [isExploding, setExploding] = useState(false);
  return (
    <>
      <button
        className="flex items-center rounded-lg transition-all"
        onClick={() => {
          if (isExploding) return;
          onClick();
          setExploding(true);
        }}
      >
        <span className="text-base px-2 py-1 rounded-md hover:bg-black/5">
          {emoji}
        </span>
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
