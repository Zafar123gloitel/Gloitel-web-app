import React from "react";

const sites1 = [
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

const sites2 = [
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
    <div className="relative overflow-hidden w-full py-6 sm:py-10">
      {/* First Row */}
      <div className="flex animate-scroll whitespace-nowrap gap-4 sm:gap-6 px-4">
        {sites1.map((site, i) => (
          <div
            key={i}
            className="flex justify-center items-center min-w-[230px] sm:min-w-[250px] md:min-w-[380px] h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden bg-gray-800/30 shadow-lg shadow-black/40"
          >
            <img
              src={site.img}
              alt={`Project ${i}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex animate-scroll-right whitespace-nowrap gap-4 sm:gap-6 px-4 mt-6 sm:mt-8">
        {sites2.map((site, i) => (
          <div
            key={i}
            className="flex justify-center items-center min-w-[280px] sm:min-w-[250px] md:min-w-[380px] h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden bg-gray-800/30 shadow-lg shadow-black/40"
          >
            <img
              src={site.img}
              alt={`Project ${i}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroll;
