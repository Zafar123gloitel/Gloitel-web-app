import Image from "next/image";
import React from "react";

export const ImageCard = ({ HowWeWorkImg }) => {
  return (
    <>
      <div className=" h-full">
        <div className="sticky top-24 ">
          <div className="absolute bottom-0 sm:bottom-0 md:bottom-0 lg:bottom-0 translate-x-0 md:translate-x-50 lg:translate-x-30 w-[40%] sm:w-[40%] md:w-[50%] lg:w-[50%] h-[50px] bg-blue-700 blur-[30px] rounded-full pointer-events-none" />
          <div className="p-3 backdrop-blur-md w-full sm:w-4/5 md:w-full lg:w-full h-auto md:h-1/2 rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 ring-1 ring-white/5">
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
