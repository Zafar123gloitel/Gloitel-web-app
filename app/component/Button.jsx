"use client";
import Link from "next/link";
import React from "react";

export const GlowButton = ({ ButtonText, Buttonlink }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href={Buttonlink || "#"}
        className="border-3 border-white/10 relative rounded-lg bg-blue-700 px-3 py-2 text-md sm:text-md text-white 
                 shadow-[0_0_25px_rgba(59,30,246,0.6)]
                 transition duration-300 ease-in-out
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        {ButtonText}
        <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 blur-xl opacity-70 animate-pulse"></span>
      </Link>
    </div>
  );
};
export const WhiteButton = ({ ButtonText, Buttonlink }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href={Buttonlink || "#"}
        className="relative rounded-md bg-white px-5 py-2 text-md sm:text-lg text-black transition duration-300 ease-in-out"
      >
        {ButtonText}
        <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 blur-xl opacity-70 animate-pulse"></span>
      </Link>
    </div>
  );
};

export const HeaderButton = ({ GetInTouch }) => {
  return (
    <div>
      <Link
        href="/contact"
        className="hidden lg:inline-block rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 transition"
      >
        {GetInTouch}
      </Link>
    </div>
  );
};
export const HeroButton = ({
  FirstHeroButtonText,
  FirstHeroButtonLink,
  SecondHeroButtonText,
  SecondHeroButtonLink,
}) => {
  return (
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row lg:flex-row gap-4 items-center sm:items-start">
      <Link
        href={FirstHeroButtonLink}
        className="rounded-md bg-white px-5 py-2.5 text-sm  text-black shadow-lg duration-300 hover:bg-white/80 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {FirstHeroButtonText}
      </Link>
      <div className="backdrop-blur-md bg-white/10 px-5 py-2.5 rounded-md shadow-lg hover:opacity-80 duration-300 ">
        <Link href={SecondHeroButtonLink} className="text-sm  text-white">
          {SecondHeroButtonText}
        </Link>
      </div>
    </div>
  );
};
