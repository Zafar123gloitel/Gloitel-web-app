import React from "react";

const HeroBadge = ({ HomeHeroBadge, HomeSubHeroBadge }) => {
  return (
    <div className="hidden sm:flex mb-6">
      <div className="backdrop-blur-md bg-white/5 rounded-lg px-1.5 py-1.5 text-sm text-gray-300 ring-1 ring-white/10 ">
        <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 mr-3 font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {HomeHeroBadge}
        </div>
        {HomeSubHeroBadge}
      </div>
    </div>
  );
};

export default HeroBadge;
