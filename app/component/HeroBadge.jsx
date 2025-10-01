import React from "react";

const HeroBadge = ({ HomeHeroBadge, HomeSubHeroBadge }) => {
  return (
    <div className="mb-6 w-1/ mx-auto">
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

export default HeroBadge;
