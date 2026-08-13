// components/AutoScrollCarousel.jsx
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const features = [
  {
    title: "PATH IAS ACADEMY",
    subTitle: "Empowering Aspirants, Achieving Success",
    feature1: "30% Increase in Sales",
    feature2: "40% Student Enroll",
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854146/Gloitel/ias_rtnewu.jpg",
  },
  {
    title: "CGMMSSY",
    subTitle: "A mobile medical unit with doctors treating patients",
    feature1: "Checkups 80% +",
    feature2: "50% trust increase",
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854146/Gloitel/cgmmsy_wndztr.jpg",
  },
  {
    title: "EXPERTEETH",
    subTitle: "Increase Your smile with Experteeth",
    feature1: "60% Increased Traffic",
    feature2: "35% Growth in Sales",
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854147/Gloitel/expeerteeth_fqbfyp.png",
  },
  {
    title: "HRM TECHNOLOGY",
    subTitle: "Driving Growth with Advanced Cloud & IT Solutions!",
    feature1: "20% Market Share",
    feature2: "45% Enhanced Visibility",
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762854146/Gloitel/hrm_huocfz.jpg",
  },
];

const AutoScroll = () => {
  return (
    <div className="overflow-hidden relative w-full">
      <Marquee
        gradient={true} // adds subtle fade edges
        gradientColor={[0, 0, 0]} // black fade for dark backgrounds
        speed={70} // control scroll speed
        pauseOnHover={true} // stops when hovered
        loop={0} // infinite scroll
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex justify-center lg:justify-start px-3 sm:px-5 bg-black"
          >
            {/* Card */}
            <div className="relative w-72 h-[470px] sm:w-80 md:w-120  rounded-4xl overflow-hidden p-3 bg-neutral-950 border border-white/5 ">
              <div className="bg-black h-full rounded-2xl">
                {/* Image */}
                <div className="relative w-full h-[330px] rounded-t-3xl rounded-b-md overflow-hidden">
                  <Image
                    width={1920}
                    height={1080}
                    src={feature.img ?? "dummy.jpg"}
                    alt="Project"
                    className="w-full h-full object-cover"
                    unoptimized
                  />

                  {/* Fade overlay (only bottom 10%) */}
                  <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 m-5 bg-neutral-950 p-4 bg rounded-xl">
                  {/* Title */}
                  <h3 className="text-base sm:text-md md:text-lg font-medium text-title uppercase mb-2">
                    {feature.title}
                  </h3>
                  <hr className="border-white/10 mb-2" />

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-400">
                    {feature.subTitle}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 text-xs sm:text-sm font-medium rounded-md bg-white/5 text-gray-400 border border-white/5">
                      {feature.feature1}
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm font-medium rounded-md bg-white/5 text-gray-400 border border-white/5">
                      {feature.feature2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

export default AutoScroll;
