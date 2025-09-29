import React from "react";

export const MiddleSectionHeads = ({
  SectionHead,
  SectionSubHead,
  SectionDescription,
}) => {
  return (
    <div>
      <center>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
          {SectionHead}
        </h3>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-400 mt-2">
          {SectionSubHead}
        </h3>

        <div className="w-lg">
          <p className="my-7 sm:mt-6 sm:text-sm lg:text-md text-gray-400">
            {SectionDescription}
          </p>
        </div>
      </center>
    </div>
  );
};
export const LeftSectionHeads = ({
  SectionHead,
  SectionSubHead,
  SectionDescription,
}) => {
  return (
    <div>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
        {SectionHead}
      </h3>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-400 mt-2">
        {SectionSubHead}
      </h3>

      <div className="w-lg">
        <p className="my-7 sm:mt-6 sm:text-sm lg:text-md text-gray-400">
          {SectionDescription}
        </p>
      </div>
    </div>
  );
};
export const LeftSectionHead2 = ({
  SectionHead,
  SectionSubHead,
  SectionDescription,
}) => {
  return (
    <div>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
        {SectionHead}
      </h3>
      <h3 className="text-2xl sm:text-4xl lg:text-3xl font-medium text-gray-400 mt-2">
        {SectionSubHead}
      </h3>
    </div>
  );
};
