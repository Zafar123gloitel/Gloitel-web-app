import React from 'react';
import { HeroBadge } from './HeroBadge';

export const HeroVideoBg = () => {
  return (
    <div>
      <video
        src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
        type='video/mp4'
        className='absolute top-0 left-0 z-0 h-full w-full object-cover'
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
    <div className='flex w-full flex-col text-center'>
      <div className='mb-6 flex justify-center'>
        <div className='rounded-lg bg-white/5 px-1.5 py-1.5 text-sm text-gray-300 ring-1 ring-white/10 backdrop-blur-md'>
          <div className='text-title mr-3 inline-block rounded-lg bg-blue-600 px-3 py-1 font-medium shadow'>
            Explore
          </div>
          Our Homegrown Products
        </div>
      </div>
      <h3 className='text-title text-4xl sm:text-5xl lg:text-[5rem]'>
        Check Out Some <br />
        Extra-Ordinary Work.
      </h3>
      <div className='mx-auto lg:w-1/3'>
        <p className='mt-4 text-base text-gray-400 sm:mt-6'>
          From startups to established brands, we create tailored solutions that drive success and
          make a real impact.
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
    <div className='w-full'>
      <div className='flex'>
        <HeroBadge HomeHeroBadge={HomeHeroBadge} HomeSubHeroBadge={HomeSubHeroBadge} />
      </div>

      <h3 className='text-title text-3xl sm:text-3xl lg:text-[3.5rem]'>{HomeHeroHeading}</h3>
      <h3 className='text-title text-3xl sm:text-3xl lg:text-[3.5rem]'>{HomeHeroSubHeading}</h3>

      <div className='lg:w-1/2'>
        <p className='mt-4 text-base text-gray-400 sm:mt-6'>{HomeHeroDescription}</p>
      </div>
    </div>
  );
};
