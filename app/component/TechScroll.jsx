// components/AutoScrollCarousel.jsx
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
  {
    img: "https://framerusercontent.com/images/Q75jFbpr6aUT83QVHuut6NzSQ.jpg",
  },
  {
    img: "https://framerusercontent.com/images/gLSdJmYYVAc1De8bHWeCrIa7S28.png",
  },
];

const TechScroll = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-scroll whitespace-nowrap">
        {sites1.map((feature, i) => (
          <div
            key={i}
            className="flex justify-center h-80 lg:justify-start sm:m-5 rounded-3xl p-2 bg-gray-800/30"
          >
            <div className="relative w-md h-full rounded-3xl overflow-hidden  shadow-lg shadow-black/40 bg-black/50">
              {/* Image */}
              <img
                src={feature.img}
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex animate-scroll-right whitespace-nowrap">
        {sites2.map((feature, i) => (
          <div
            key={i}
            className="flex justify-center h-80 lg:justify-start sm:m-5 rounded-3xl p-2 bg-gray-800/30"
          >
            <div className="relative w-md h-full rounded-3xl overflow-hidden  shadow-lg shadow-black/40 bg-black/50">
              {/* Image */}
              <img
                src={feature.img}
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroll;
