import { feeds } from "@/lib/data/feeds";
import { page } from "@d-exclaimation/next";
import Post from "./post";
export default page(async () => {
  return (
    <div className="w-full md:w-2xl flex flex-col items-start justify-center md:my-2 p-4 bg-white rounded-md shadow">
      <div className="flex items-center gap-2 w-[100%]">
        <img
          className="w-5 px-1 aspect-square md:w-6"
          src="/threads.svg"
          alt="threads"
        />
        <span className="font-semibold text-lg md:text-xl">Feeds</span>
      </div>
      <div className="flex flex-col my-4 mx-4 px-4 max-w-full border-l-2 border-black/20">
        {feeds.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
});

export const runtime = "edge";
