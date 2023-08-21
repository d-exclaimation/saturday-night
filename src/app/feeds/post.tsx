import { Feed } from "@/lib/data/feeds";
import { rc } from "@d-exclaimation/next";
import Link from "next/link";
import Emoji from "./emoji";

type Props = Feed;

export default rc<Props>(
  ({ id, content, user, time, images, stats, reactions, locations }) => {
    return (
      <div className="flex flex-col gap-2 pb-4 max-w-full">
        <div className="w-full flex items-center gap-2 -translate-x-8">
          <img
            className="aspect-square w-8 h-8 rounded-full ring-6 ring-white"
            src={user.image}
            alt="profile"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-2 items-center">
              <span className="font-medium max-w-[20ch] truncate text-sm md:text-base">
                {user.name}
              </span>
              <span className="font-light max-w-[20ch] truncate text-xs md:text-sm">
                {time}
              </span>
            </div>
            {locations && (
              <span className="font-light text-xs truncate max-w-[40ch]">
                {locations}
              </span>
            )}
          </div>
        </div>
        <Link className="max-w-[90%]" href={`/feeds/${id}`}>
          <p className="w-full">{content}</p>
        </Link>
        {stats && (
          <div className="flex flex-col py-1 gap-2">
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
        )}
        {images && (
          <div className="flex items-center justify-start gap-2 max-w-[min(600px,95%)] overflow-x-auto">
            {images.map((image, i) => (
              <img
                className="w-auto h-auto block aspect-ratio-auto max-w-[300px] max-h-[300px] py-1 rounded-2xl"
                key={`image-${image}-${i}`}
                loading="lazy"
                src={image}
              />
            ))}
          </div>
        )}
        {reactions && (
          <div className="flex items-center gap-2">
            {reactions.map((reaction, i) => (
              <Emoji key={`reaction-${i}`} {...reaction} />
            ))}
          </div>
        )}
      </div>
    );
  }
);
