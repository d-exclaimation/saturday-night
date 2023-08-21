"use client";

import { type feeds } from "@/lib/data/feeds";
import { rc } from "@d-exclaimation/next";
import Link from "next/link";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import Emoji from "./emoji";

export default rc<
  (typeof feeds)[number] & { i: number; shouldSuperAnimate: boolean }
>(
  ({
    id,
    user,
    time,
    content,
    stats,
    activity,
    images,
    reactions,
    shouldSuperAnimate,
    i,
  }) => {
    const [emojis, setEmojis] = useState(reactions ?? []);
    const [explodingEmoji, setExplodingEmoji] = useState<string | undefined>();
    return (
      <div className="flex flex-col w-full px-2 md:px-6 py-1">
        <div className="flex flex-row min-w-full items-center -translate-x-9 md:-translate-x-13">
          <div className="p-2 bg-white rounded-full shrink-0">
            <img src={user.image} className="w-8 h-8 rounded-full" />
          </div>
          <span className="min-w-fit text-sm md:text-base font-semibold">
            {user.name}
          </span>
          <span className="ml-1 md:ml-2 min-w-fit text-xs text-black/50">
            {time}
          </span>
        </div>

        <Link href={`/feeds2/${id}`} className="w-full flex flex-col group">
          <p className="max-w-full text-sm md:text-base group-hover:underline underline-black/30">
            {content}
          </p>

          {stats && (
            <div className="w-full max-w-lg flex flex-col p-1 px-2 mb-2 mt-3 mx-1 bg-slate-200/20 rounded-md ring-1 ring-slate-300/40 h-fit">
              {activity && (
                <div className="w-full flex py-1">
                  <span className="text-black/40 text-sm">{activity}</span>
                </div>
              )}
              <div className="w-full h-fit py-1 grid grid-cols-2 md:grid-cols-3 gap-1">
                {stats.map((stat, i) => (
                  <div key={`stat-${i}`} className="flex items-center gap-1">
                    <img
                      className="aspect-square w-6 h-6 mr-1"
                      src={`/${stat.kind}.svg`}
                      alt={stat.kind}
                    />
                    <span className="font-bold text-lg">{stat.value}</span>
                    <span className="font-light text-sm">{stat.kind}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {images && images.length && (
            <div className="flex gap-1 w-full pt-6 pb-4 md:py-6 px-3">
              <img
                src={images[0]}
                className="transition-all duration-700 max-w-[250px] max-h-[250px] md:max-w-[38rem] md:max-h-[38rem]
              object-cover rounded-md shadow-2xl rotate-1 data-[odd=true]:-rotate-1"
                data-odd={i % 2 === 0}
              />
            </div>
          )}
        </Link>

        <div className="flex max-w-full flex-wrap items-center gap-2 mt-2">
          {emojis.map((reaction, i) => (
            <Emoji
              key={`reaction-${i}`}
              {...reaction}
              isExploding={explodingEmoji === reaction.emoji}
              onClick={() => {
                setExplodingEmoji(reaction.emoji);
                setEmojis((emojis) =>
                  emojis.map((emoji) =>
                    emoji.emoji === reaction.emoji
                      ? { ...emoji, count: emoji.count + 1 }
                      : emoji
                  )
                );
              }}
            />
          ))}

          <div className="relative group ml-auto">
            <div
              className="absolute gap-2 py-1.5 -z-50 opacity-0 right-0 origin-top-right transition-all duration-500 
              rounded-md shadow group-hover:opacity-100 group-hover:z-50 bg-white/60 backdrop-blur-md 
              group-hover:-translate-y-[calc(100%+0.25rem)] flex items-center px-2"
            >
              {["👍", "🔥", "🤡", "💪", "👏", "🍆"].map((emoji) => (
                <button
                  className="flex items-center rounded-lg transition-all"
                  onClick={() => {
                    setExplodingEmoji(emoji);
                    setEmojis((reactions) => {
                      if (
                        !reactions.find((reaction) => reaction.emoji === emoji)
                      ) {
                        return [...reactions, { emoji, count: 1 }];
                      }
                      return reactions.map((reaction) =>
                        reaction.emoji === emoji
                          ? { ...reaction, count: reaction.count + 1 }
                          : reaction
                      );
                    });
                  }}
                >
                  <span className="text-base px-2 py-1 rounded-md hover:bg-black/5">
                    {emoji}
                  </span>
                </button>
              ))}
            </div>
            <button className="relative flex items-center gap-1 py-0.5 px-2 rounded-lg bg-black/5 hover:bg-black/10 transition-all">
              <img src="/add-reaction.svg" className="w-5 h-5 opacity-60" />
            </button>
          </div>
        </div>
        <div
          data-show={!!explodingEmoji && shouldSuperAnimate}
          className="fixed -z-60 data-[show=true]:z-60 data-[show=true]:opacity-100 transition-opacity opacity-0 inset-0 flex items-center justify-center bg-black/40 backdrop-blur transition-all"
        >
          {explodingEmoji && shouldSuperAnimate && (
            <ConfettiExplosion
              zIndex={90}
              onComplete={() => setExplodingEmoji(undefined)}
            />
          )}
          <div
            data-show={!!explodingEmoji && shouldSuperAnimate}
            className="absolute z-200 transition-all data-[show=true]:animate-gold-plating"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute rounded-full w-40 h-40 bg-gradient-to-r from-sky to-indigo blur-2xl"></span>
              <span className="relative text-9xl">{explodingEmoji}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
