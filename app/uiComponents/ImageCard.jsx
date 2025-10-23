import Image from "next/image";
import React from "react";

export const ImageCard = ({ HowWeWorkImg }) => {
  return (
    <>
      <div className="relative h-full">
        <div className="sticky top-24">
          <div className="p-2 backdrop-blur-md max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl shadow-lg shadow-indigo-500/50 bg-gray-800/30 w-full">
            <Image
              width={1920}
              height={1080}
              src={HowWeWorkImg}
              alt="About section"
              className="w-full h-auto rounded-3xl shadow-xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </>
  );
};
