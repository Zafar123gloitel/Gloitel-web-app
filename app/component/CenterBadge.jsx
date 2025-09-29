import React from "react";

const CenterBadge = ({ content }) => {
  return (
    <center>
      <div className="w-fit text-center backdrop-blur-md bg-gray-900/50 px-4 py-2 rounded-md shadow-lg mb-6">
        <h2 className="text-xs sm:text-sm text-white font-medium">
          <span className="bg-white w-2 h-2 rounded-full inline-block mr-2"></span>
          {content}
        </h2>
      </div>
    </center>
  );
};

export default CenterBadge;
