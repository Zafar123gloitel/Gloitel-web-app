import Image from "next/image";
import React from "react";

export const ImageCard = ({ HowWeWorkImg }) => {
  return (
    <>
      <div className="relative h-full">
        <div className="sticky top-24 ">
          <div className="absolute  bottom-0 translate-x-30 w-[50%] h-[200px] bg-blue-700 blur-[30px] rounded-full pointer-events-none" />
          <div className="p-2 backdrop-blur-md max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl bg-gray-800/20 w-full border border-gray-300/10">
            {/* Image */}
            <Image
              width={1920}
              height={1080}
              src={HowWeWorkImg}
              alt="About section"
              className="w-full h-auto rounded-3xl shadow-xl ring-1 border border-gray-300/10"
              unoptimized
            />
          </div>

          {/* External Bottom Glow */}
        </div>
      </div>
    </>
  );
};
