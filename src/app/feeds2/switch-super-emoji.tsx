"use client";

import { rc } from "@d-exclaimation/next";

export default rc<{ isOn: boolean; toggleOn: () => void }>(
  ({ isOn, toggleOn }) => (
    <div className="hidden md:flex fixed bottom-6 gap-2 bg-white rounded-md shadow-md p-2 left-6 items-center justify-center">
      <span className="text-xs font-semibold">Super Emoji</span>
      <button
        data-state={isOn}
        onClick={toggleOn}
        className="peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50 data-[state=true]:bg-blue-500 bg-blue-100"
      >
        <span
          data-state={isOn}
          className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=true]:translate-x-4 translate-x-0"
        ></span>
      </button>
    </div>
  )
);
