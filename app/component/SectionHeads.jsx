import React from "react";

export const MiddleSectionHeads = ({
  SectionHead,
  SectionSubHead,
  SectionDescription,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-0 max-w-4xl mx-auto mb-8">
      {/* Section Head */}
      <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
        {SectionHead}
      </h3>

      {/* Section Sub Head */}
      <h4 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-gray-400 mt-2">
        {SectionSubHead}
      </h4>

      {/* Description */}
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-3/4 mt-4 sm:mt-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
          {SectionDescription}
        </p>
      </div>
    </div>
  );
};

export const LeftSectionHeads = ({
  SectionHead,
  SectionSubHead,
  SectionDescription,
}) => {
  return (
    <div className="flex flex-col items-start text-left px-2 sm:px-2 lg:px-0 max-w-4xl">
      {/* Section Head */}
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
        {SectionHead}
      </h3>

      {/* Section Sub Head */}
      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-400 mt-2">
        {SectionSubHead}
      </h4>

      {/* Description */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-md text-gray-400 leading-relaxed">
        {SectionDescription}
      </p>
    </div>
  );
};

export const LeftSectionHead2 = ({ SectionHead, SectionSubHead }) => {
  return (
    <div>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
        {SectionHead}
      </h3>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-400 mt-2">
        {SectionSubHead}
      </h3>
    </div>
  );
};
