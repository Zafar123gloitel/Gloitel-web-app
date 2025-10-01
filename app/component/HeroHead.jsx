import React from "react";
import { HeroBadge } from "./HeroBadge";

export const HeroVideoBg = () => {
  return (
    <div>
      <video
        src="https://framerusercontent.com/assets/lr4LSmXa1klevAvb0jf1i2zsDE.mp4"
        type="video/mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  );
};

export const HeroHeading = () => {
  return (
    <div className="flex flex-col w-full text-center">
      <div className="flex justify-center mb-6">
        <div className="backdrop-blur-md bg-white/5 rounded-lg px-1.5 py-1.5 text-sm text-gray-300 ring-1 ring-white/10">
          <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 mr-3 font-medium text-white shadow">
            Explore
          </div>
          Our Homegrown Products
        </div>
      </div>
      <h3 className="text-4xl sm:text-5xl lg:text-[5rem] text-white">
        Check Out Some <br />
        Extra-Ordinary Work.
      </h3>
      <div className="lg:w-1/3 mx-auto">
        <p className="mt-4 sm:mt-6 text-base text-gray-400">
          From startups to established brands, we create tailored solutions that
          drive success and make a real impact.
        </p>
      </div>
    </div>
  );
};

export const HomeHeroHeading = ({
  HomeHeroBadge,
  HomeSubHeroBadge,
  HomeHeroHeading,
  HomeHeroSubHeading,
  HomeHeroDescription,
}) => {
  return (
    <div className="flex flex-col w-full">
      <HeroBadge
        HomeHeroBadge={HomeHeroBadge}
        HomeSubHeroBadge={HomeSubHeroBadge}
      />

      <h3 className="text-3xl sm:text-3xl lg:text-[3.5rem] text-white">
        {HomeHeroHeading}
      </h3>
      <h3 className="text-3xl sm:text-3xl lg:text-[3.5rem] text-white">
        {HomeHeroSubHeading}
      </h3>

      <div className="lg:w-1/2">
        <p className="mt-4 sm:mt-6 text-base text-gray-400">
          {HomeHeroDescription}
        </p>
      </div>
    </div>
  );
};
