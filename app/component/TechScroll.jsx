import Image from "next/image";
import React from "react";

const GalleryOne = [
  {
    img: "https://framerusercontent.com/images/1pPSjGU4S4FI7ghr7qYd1SZwjo.webp",
  },
  {
    img: "https://framerusercontent.com/images/SZfiBqTdlaKhnFFYnHIufjnvcEI.png",
  },
  {
    img: "https://framerusercontent.com/images/LII4rONieY4ivMPyQrwL8AEaK3g.jpg",
  },
  {
    img: "https://framerusercontent.com/images/FzYRtwApmvuaW777AABhwZs9W8.jpg",
  },
  {
    img: "https://framerusercontent.com/images/nBetJ5iutsK961pWUYORsGAae0.png",
  },
  {
    img: "https://framerusercontent.com/images/1YCmmthfQqX5jHF3bHBQEi44YhE.webp",
  },
];

const GalleryTwo = [
  {
    img: "https://framerusercontent.com/images/Ec08xgiQaFXy7irJTBteA9eFCRM.webp",
  },
  {
    img: "https://framerusercontent.com/images/3HU1wPFPmG5B27scfFZWhwIpPU.webp",
  },
  {
    img: "https://framerusercontent.com/images/5qvqE8wkAaGTRuhz1Ijav6mJrg.png",
  },
  {
    img: "https://framerusercontent.com/images/BmHiIOOZ8fRIoWY0ciDlhw1nu6E.webp",
  },
  {
    img: "https://framerusercontent.com/images/IxFV6qzk9YxT8sr9XVqGJ1P1SuY.png",
  },
  { img: "https://framerusercontent.com/images/Q75jFbpr6aUT83QVHuut6NzSQ.jpg" },
  {
    img: "https://framerusercontent.com/images/gLSdJmYYVAc1De8bHWeCrIa7S28.png",
  },
];

const TechScroll = () => {
  return (
    <div className="relative overflow-hidden w-full py-6 sm:py-8">
      {/* First Row */}
      <div className="flex animate-scroll whitespace-nowrap gap-4 sm:gap-4 px-4">
        {GalleryOne.map((site, i) => (
          <div
            key={i}
            className="flex justify-center items-center min-w-[230px] sm:min-w-[250px] md:min-w-[400px] h-40 sm:h-52 md:h-80 
             rounded-4xl overflow-hidden bg-black/20 shadow-lg shadow-black/40 
             border-2 border-white/5 p-2 sm:p-3 md:p-2"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-gray-800/50">
              <img
                src={site.img}
                alt={`Project ${i}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex animate-scroll-right whitespace-nowrap gap-4 sm:gap-6 px-4 mt-6 sm:mt-8">
        {GalleryTwo.map((site, i) => (
          <div
            key={i}
            className="flex justify-center items-center min-w-[230px] sm:min-w-[250px] md:min-w-[400px] h-40 sm:h-52 md:h-80 
             rounded-4xl overflow-hidden bg-black/20 shadow-lg shadow-black/40 
             border-2 border-white/5 p-2 sm:p-3 md:p-2"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-gray-800/50">
              <img
                src={site.img}
                alt={`Project ${i}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroll;
