"use client";

import type { Dashboard } from "@/lib/relax/dash.server";
import { rc } from "@d-exclaimation/next";
import { useEffect, useRef, useState } from "react";

const SPEED = 700;

const Counter = rc<{ count: number; max: number }>(({ count, max }) => {
  const targetRef = useRef(count);
  const intervalRef = useRef<number | NodeJS.Timeout>();
  const currentRef = useRef(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delay = SPEED / targetRef.current;
    intervalRef.current = setInterval(() => {
      if (currentRef.current >= targetRef.current)
        return clearInterval(intervalRef.current);
      setCurrent((prev) => prev + 1);
      currentRef.current++;
    }, delay);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span
      className="text-xl font-semibold
      data-[level='0']:text-red-600 data-[level='1']:text-orange-600
      data-[level='2']:text-amber-600 data-[level='3']:text-lime-600
      data-[level='4']:text-green-600 data-[level='5']:text-teal-600"
      data-level={Math.round((5 * count) / max)}
    >
      {current}
    </span>
  );
});

type ChartProps = Dashboard["dash"][number][
  | "reviewees"
  | "reviewings"][number] & { max: number };

const Chart = rc<ChartProps>(({ max, ...member }) => {
  const stat = "reviewee" in member ? member.reviewee : member.reviewer;
  const height = Math.max(0.1, (5 * stat) / max);
  return (
    <div className="flex flex-col w-[8%] items-center justify-end h-full gap-1">
      <span className="text-xs font-light text-black/50">{stat}%</span>
      <span
        key={`chart-${member.id}-${new Date().toISOString()}`}
        className="w-full rounded-md h-20 animate-rise 
        data-[level='0']:bg-red data-[level='1']:bg-orange
        data-[level='2']:bg-amber data-[level='3']:bg-lime 
        data-[level='4']:bg-green data-[level='5']:bg-teal"
        data-height={`${height.toFixed(2)}rem`}
        data-level={Math.round(height)}
        style={{
          height: `${height.toFixed(2)}rem`,
        }}
      />
      <img
        className="w-[90%] aspect-square rounded-full object-cover"
        src={`/members/${member.id}.webp`}
      />
    </div>
  );
});

type Props = Dashboard["dash"][number] & {
  max: number;
};
export default rc<Props>(({ id, reviewings, reviewees, avg, max }) => {
  const [kind, setKind] = useState<"reviewing" | "reviewed">("reviewing");

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row items-center justify-between px-4 pt-1">
        <div className="flex flex-row items-end gap-1">
          {kind === "reviewing" ? (
            <>
              <span className="font-light text-sm mr-1 text-black/60 mb-1">
                Average
              </span>
              <Counter
                key={`${kind}-${id}-${new Date().toISOString()}`}
                count={Math.round(avg[kind])}
                max={max}
              />
              <span className="font-light text-xs text-black/60 mb-1">%</span>
            </>
          ) : (
            <>
              <span className="font-light text-sm mr-0.5 text-black/60 mb-1">
                Likely by
              </span>
              <span
                key={`${kind}-$${id}-${new Date().toISOString()}`}
                className="font-semibold text-indigo-400 mb-0.5 animate-glint"
              >
                {
                  reviewees.reduce(
                    (likely, { name, reviewer }) =>
                      likely.max < reviewer ? { max: reviewer, name } : likely,
                    { max: 0, name: "" }
                  ).name
                }
              </span>
            </>
          )}
        </div>
        <div className="flex flex-row items-center justify-around gap-2 px-0.5 py-0.5 rounded bg-slate-200/40">
          <button
            className="text-xs px-2 py-1 rounded transition-all text-black/50 data-[active=true]:bg-white data-[active=true]:text-black data-[active=true]:shadow"
            data-active={kind === "reviewing"}
            onClick={() => setKind("reviewing")}
          >
            Reviewing
          </button>
          <button
            className="text-xs px-2 py-1 rounded transition-all text-black/50 data-[active=true]:bg-white data-[active=true]:text-black data-[active=true]:shadow"
            data-active={kind === "reviewed"}
            onClick={() => setKind("reviewed")}
          >
            Reviewed by
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around h-40 mx-4 pb-2 mb-2">
        {(kind === "reviewing" ? reviewings : reviewees).map((member) => (
          <Chart key={`odd-${id}-${member.id}`} {...member} max={max} />
        ))}
      </div>
    </div>
  );
});
