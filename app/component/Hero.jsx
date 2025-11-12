import React from "react";
import FeatureScroll from "./FeatureScroll";
import { HeroButton } from "./Button";
import { HomeHeroHeading } from "./HeroHead";

const Hero = () => {
  return (
    <div className="relative w-full max-h-full overflow-hidden py-32 px-5 sm:py-32 sm:px-5 md:pt-40 md:px-23 lg:py-15 lg:px-0">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
        type="video/mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute top-20 right-0 h-full justify-end items-center overflow-hidden z-30 hidden 2xl:flex
"
      >
        <video
          src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/human-vid_xpbx1j.mp4"
          type="video/mp4"
          className="w-[700px] h-full object-cover clip-curve"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-5" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center sm:items-start px-4 sm:px-6 lg:px-52 h-full justify-center text-center sm:text-left space-y-6 sm:space-y-8 lg:pt-20">
        {/* Hero Heading */}
        <HomeHeroHeading
          HomeHeroBadge="Gloitel"
          HomeSubHeroBadge="Technology made with Trust"
          HomeHeroHeading="Next-Gen AI. Save Time."
          HomeHeroSubHeading="Skyrocket Impact."
          HomeHeroDescription="Leverage the power of AI to streamline tasks, reduce manual effort, and maximize productivity."
        />
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row  w-full sm:w-auto justify-center sm:justify-start">
          <HeroButton
            FirstHeroButtonText="Connect With Us"
            FirstHeroButtonLink="/contact"
            SecondHeroButtonText="What is Gloitel?"
            SecondHeroButtonLink="/about"
          />
        </div>

        {/* Feature Scroll Wrapper */}
        <div className="relative w-full sm:w-auto overflow-hidden z-25">
          <div className="relative feature-fade-mask">
            <FeatureScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
