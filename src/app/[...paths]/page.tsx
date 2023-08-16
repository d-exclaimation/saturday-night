import { page } from "@d-exclaimation/next";
import Link from "next/link";

export default page(() => {
  return (
    <main className="grid min-w-full min-h-[100dvh] bg-white place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold bg-gradient-to-r bg-clip-text text-transparent from-red-900 to-fuchsia-900">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="relative group flex items-center justify-center">
            <div
              className="absolute group-hover:blur-md group-active:blur-md rounded-md 
              bg-gradient-to-tr from-fuchsia-400/60 to-red-400/60 px-3.5 py-2.5 
              text-sm text-transparent font-medium text-white shadow-sm 
              transition-all duration-700"
            >
              Go back home
            </div>
            <Link
              href="/"
              className="relative rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm 
              font-medium focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-red-950
              group-hover:bg-red-950 group-active:bg-red-950
              group-hover:text-white group-active:text-white"
            >
              Go back home
            </Link>
          </div>
          <a
            href="https://bit.ly/IqT6zt"
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
});

export const runtime = "edge";
