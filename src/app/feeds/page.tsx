import { page } from "@d-exclaimation/next";

export default page(() => {
  return (
    <div className="min-w-xl flex flex-col items-start justify-center p-4 bg-white rounded-md shadow">
      <div className="flex items-center gap-2 w-[100%]">
        <img
          className="w-5 px-1 aspect-square md:w-6"
          src="/threads.svg"
          alt="threads"
        />
        <span className="font-semibold text-lg md:text-xl">Feeds</span>
      </div>
      <div className="flex flex-col my-4 mx-2 px-4 border-l border-black">
        {[...Array.from({ length: 10 })].map((_, i) => (
          <div key={`post-${i}`}>Hello world</div>
        ))}
      </div>
    </div>
  );
});
