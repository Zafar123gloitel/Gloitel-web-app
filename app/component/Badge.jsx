import React from "react";

export const LeftBadge = ({
  HomeAboutBadge,
  AboutBadge,
  AboutBadge2,
  WorkBadge,
  TestimonialBadge,
  JoinUsNowBadge,
  FaqBadge,
}) => {
  return (
    <div className="w-fit text-center backdrop-blur-md bg-gray-900/50 px-4 py-2 rounded-md shadow-lg mb-6">
      <h2 className="text-xs sm:text-sm text-white font-medium">
        <span className="bg-white w-2 h-2 rounded-full inline-block mr-2"></span>
        {HomeAboutBadge}
        {AboutBadge}
        {AboutBadge2}
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
      <div className="w-fit text-center backdrop-blur-md bg-gray-900/50 px-4 py-2 rounded-md shadow-lg mb-6">
        <h2 className="text-xs sm:text-sm text-white font-medium">
          <span className="bg-white w-2 h-2 rounded-full inline-block mr-2"></span>
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
