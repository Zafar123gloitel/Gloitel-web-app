import React from 'react';
import FeatureScroll from './FeatureScroll';
import { HeroButton } from './Button';
import { HomeHeroHeading } from './HeroHead';

const Hero = () => {
  return (
    <div className='relative max-h-full w-full overflow-hidden px-5 py-32 sm:px-5 sm:py-32 md:px-23 md:pt-40 lg:px-0 lg:py-15'>
      {/* Background Video */}
      <video
        src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
        type='video/mp4'
        className='absolute top-0 left-0 z-0 h-full w-full object-cover'
        autoPlay
        muted
        loop
        playsInline
      />
      <div className='absolute top-20 right-0 z-30 hidden h-full items-center justify-end overflow-hidden 2xl:flex'>
        <video
          src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/human-vid_xpbx1j.mp4'
          type='video/mp4'
          className='clip-curve h-full w-[700px] object-cover'
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Overlay for better text readability */}
      <div className='absolute top-0 left-0 z-5 h-full w-full bg-black/40' />

      {/* Content Wrapper */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center sm:items-start sm:space-y-8 sm:px-6 sm:text-left lg:px-52 lg:pt-20'>
        {/* Hero Heading */}
        <HomeHeroHeading
          HomeHeroBadge='Gloitel'
          HomeSubHeroBadge='Technology made with Trust'
          HomeHeroHeading='Next-Gen AI. Save Time.'
          HomeHeroSubHeading='Skyrocket Impact.'
          HomeHeroDescription='Leverage the power of AI to streamline tasks, reduce manual effort, and maximize productivity.'
        />
        {/* Buttons */}
        <div className='flex w-full flex-col justify-center sm:w-auto sm:flex-row sm:justify-start'>
          <HeroButton
            FirstHeroButtonText='Connect With Us1'
            FirstHeroButtonLink='/contact'
            SecondHeroButtonText='What is Gloitel?'
            SecondHeroButtonLink='/about'
          />
        </div>

        {/* Feature Scroll Wrapper */}
        <div className='relative z-25 w-full overflow-hidden sm:w-auto'>
          <div className='feature-fade-mask relative'>
            <FeatureScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
