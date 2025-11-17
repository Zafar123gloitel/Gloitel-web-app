import React from "react";

export const LeftBadge = ({
  HomeAboutBadge,
  AboutBadge,
  WorkBadge,
  TestimonialBadge,
  JoinUsNowBadge,
  FaqBadge,
}) => {
  return (
    <div className="relative w-fit text-center backdrop-blur-md bg-gray-900/50 px-4 py-2 rounded-lg shadow-lg mb-6 overflow-hidden border-2 border-gray-600/20">
      {/* Top Blue Glow */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[8px] bg-blue-700/90 blur-[7px] rounded-full pointer-events-none" />

      <h2 className="flex items-center text-xs sm:text-sm text-white font-medium relative z-10">
        <span className="bg-white w-1.5 h-1.5 rounded-full inline-block mr-2"></span>
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
      <div className="relative w-fit text-center backdrop-blur-md bg-gray-900/50 px-4 py-2 rounded-lg shadow-lg mb-6 overflow-hidden border-2 border-gray-600/20">
        {/* Top Blue Glow */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[12px] bg-blue-700/90 blur-[5px] rounded-full pointer-events-none" />
        <h2 className="flex items-center text-xs sm:text-sm text-white font-medium relative z-10">
          <span className="bg-white w-1.5 h-1.5 rounded-full inline-block mr-2"></span>
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
