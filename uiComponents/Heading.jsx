import React from 'react';
import { HeroBadge, HeroBadge2 } from 'components/HeroBadge';

export const IntroHead = ({ HomeHeroBadge, HomeSubHeroBadge, main, sub, description }) => {
  return (
    <div className='flex w-full flex-col text-center'>
      <div className='mb-6 flex justify-center'>
        <HeroBadge HomeHeroBadge={HomeHeroBadge} HomeSubHeroBadge={HomeSubHeroBadge} />
      </div>

      <h3 className='text-title text-4xl sm:text-5xl lg:text-[5rem]'>
        {main}
        <br /> {sub}
      </h3>

      <div className='mx-auto lg:w-1/3'>
        <p className='mt-4 text-base text-gray-400 sm:mt-6'>{description}</p>
      </div>
    </div>
  );
};
export const IntroHead2 = ({ HomeHeroBadge, HomeSubHeroBadge, main, sub, description }) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='mb-6 flex'>
        <HeroBadge2 HomeHeroBadge={HomeHeroBadge} HomeSubHeroBadge={HomeSubHeroBadge} />
      </div>

      <h3 className='text-title text-5xl sm:text-5xl lg:text-[5rem]'>
        {main}
        <br /> {sub}
      </h3>

      <div className='w-7/8'>
        <p className='mt-4 text-base text-gray-400 sm:mt-6'>{description}</p>
      </div>
    </div>
  );
};
