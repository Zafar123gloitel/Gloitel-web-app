import React from "react";
import HeroBadge from "../component/HeroBadge";

export const IntroHead = ({
  HomeHeroBadge,
  HomeSubHeroBadge,
  main,
  sub,
  description,
}) => {
  return (
    <div className="flex flex-col w-full text-center">
      <div className="flex justify-center mb-6">
        <HeroBadge
          HomeHeroBadge={HomeHeroBadge}
          HomeSubHeroBadge={HomeSubHeroBadge}
        />
      </div>

      <h3 className="text-4xl sm:text-5xl lg:text-[5rem] text-white">
        {main}
        <br /> {sub}
      </h3>

      <div className="lg:w-1/3 mx-auto">
        <p className="mt-4 sm:mt-6 text-base text-gray-400">{description}</p>
      </div>
    </div>
  );
};
