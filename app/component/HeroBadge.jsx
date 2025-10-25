import React from "react";
export const HeroBadge = ({ HomeHeroBadge, HomeSubHeroBadge }) => {
  return (
    <div className="mb-6">
      <div className="backdrop-blur-md bg-white/5 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-300 ring-1 ring-white/10 flex items-center sm:items-center gap-2 sm:gap-3">
        {/* Main Badge */}
        <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {HomeHeroBadge}
        </div>

        {/* Sub Badge / Label */}
        <span className="text-gray-300 text-sm sm:text-base">
          {HomeSubHeroBadge}
        </span>
      </div>
    </div>
  );
};
export const HeroBadge2 = ({ HomeHeroBadge, HomeSubHeroBadge }) => {
  return (
    <div className="mb-6">
      <div className="backdrop-blur-md bg-white/5 rounded-lg px-1.5 py-1.5 text-sm sm:text-sm lg:text-[12px] text-gray-300 ring-1 ring-white/10 flex items-center sm:items-center gap-2 sm:gap-3">
        {/* Main Badge */}
        <div className="inline-block rounded-lg bg-blue-600 px-2 py-1 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {HomeHeroBadge}
        </div>

        {/* Sub Badge / Label */}
        <span className="text-gray-300 text-sm sm:text-sm lg:text-[12px]">
          {HomeSubHeroBadge}
        </span>
      </div>
    </div>
  );
};
