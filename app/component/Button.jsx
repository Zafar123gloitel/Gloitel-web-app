"use client";
import Link from "next/link";
import React from "react";

export const GlowButton = ({ ButtonText, Buttonlink, onClick, target }) => {
  const hasLink = Buttonlink && Buttonlink.trim() !== "" && Buttonlink !== "#";

  if (!hasLink) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          disabled
          className="
            cursor-not-allowed
            border-3 border-white/10
            relative rounded-lg
            bg-muted
            px-3 py-2
            text-md sm:text-md
            text-muted-foreground
            opacity-70
          "
        >
          Link Not Available
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        onClick={onClick}
        target={target}
        href={Buttonlink}
        className="
          border-3 border-white/10
          relative rounded-lg
          bg-blue-700
          px-3 py-2
          text-md sm:text-md
          text-white
          shadow-[0_0_25px_rgba(59,30,246,0.6)]
          transition duration-300 ease-in-out
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-indigo-500
          hover:shadow-[0_0_25px_rgba(59,30,246,0.9)]
        "
      >
        {ButtonText}

        <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 blur-xl opacity-70 animate-pulse" />
      </Link>
    </div>
  );
};
export const WhiteButton = ({ ButtonText, Buttonlink }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href={Buttonlink || "#"}
        className="relative rounded-md bg-white px-3 py-2 sm:py-2 md:py-3 lg:py-1 text-xs sm:text-lg text-black transition duration-300 ease-in-out"
      >
        {ButtonText}
        <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 blur-xl opacity-70 animate-pulse"></span>
      </Link>
    </div>
  );
};

export const HeaderButton = ({ ButtonText, Buttonlink, onClick }) => {
  return (
    <div className="w-full">
      <Link
        href={Buttonlink}
        onClick={onClick}
        className="inline-block w-full text-center border-3 border-white/10 rounded-lg bg-blue-700 px-3 py-2 text-md sm:text-md text-white 
                 shadow-[0_0_25px_rgba(59,30,246,0.6)]
                 transition duration-300 ease-in-out
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 hover:shadow-[0_0_25px_rgba(59,30,246,0.9)]"
      >
        {ButtonText}
        <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 blur-xl opacity-70 animate-pulse"></span>
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
        className="rounded-lg bg-white px-5 py-2.5 text-sm  text-black shadow-lg duration-300 hover:bg-white/80 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {FirstHeroButtonText}
      </Link>
      <div className="backdrop-blur-md bg-white/10 px-5 py-2.5 rounded-lg shadow-lg hover:opacity-80 duration-300 ">
        <Link href={SecondHeroButtonLink} className="text-sm  text-white">
          {SecondHeroButtonText}
        </Link>
      </div>
    </div>
  );
};
