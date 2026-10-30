import React from 'react';

export const LeftBadge = ({
  HomeAboutBadge,
  AboutBadge,
  WorkBadge,
  TestimonialBadge,
  JoinUsNowBadge,
  FaqBadge,
}) => {
  return (
    <div className='relative mb-6 w-fit overflow-hidden rounded-lg border-2 border-gray-600/20 bg-gray-900/50 px-4 py-2 text-center shadow-lg backdrop-blur-md'>
      {/* Top Blue Glow */}
      <div className='pointer-events-none absolute -top-1 left-1/2 h-[8px] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/90 blur-[7px]' />

      <h2 className='text-title relative z-10 flex items-center text-xs font-medium sm:text-sm'>
        <span className='mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white'></span>
        {HomeAboutBadge}
        {AboutBadge}
        {WorkBadge}
        {TestimonialBadge}
        {JoinUsNowBadge}
        {FaqBadge}
      </h2>
    </div>
  );
};
export const CenterBadge = ({
  ResultsBadge,
  TestimonialBadge,
  JoinUsNowBadge,
  TechnologyBadge,
  LaunchYourSiteBadge,
  AboutOurCulture,
}) => {
  return (
    <center>
      <div className='relative mb-6 w-fit overflow-hidden rounded-lg border-2 border-gray-600/20 bg-gray-900/50 px-4 py-2 text-center shadow-lg backdrop-blur-md'>
        {/* Top Blue Glow */}
        <div className='pointer-events-none absolute -top-1.5 left-1/2 h-[12px] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/90 blur-[5px]' />
        <h2 className='text-title relative z-10 flex items-center text-sm font-normal sm:text-sm'>
          <span className='mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white'></span>
          {AboutOurCulture}
          {TechnologyBadge}
          {JoinUsNowBadge}
          {ResultsBadge}
          {TestimonialBadge}
          {LaunchYourSiteBadge}
        </h2>
      </div>
    </center>
  );
};
