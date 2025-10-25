// components/AutoScrollCarousel.jsx
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "PATH IAS ACADEMY",
    subTitle: "Empowering Aspirants, Achieving Success",
    feature1: "30% Increase in Sales",
    feature2: "40% Student Enroll",
    img: "https://framerusercontent.com/images/pMiSBwtwN397rFL9N8KTEX8wDU.png",
  },
  {
    title: "CGMMSSY",
    subTitle: "A mobile medical unit with doctors treating patients",
    feature1: "Checkups 80% +",
    feature2: "50% trust increase",
    img: "https://framerusercontent.com/images/AGgIXLwrdADrcAN9TYYPJSYNH6E.png",
  },
  {
    title: "EXPERTEETH",
    subTitle: "Increase Your smile with Experteeth",
    feature1: "60% Increased Traffic",
    feature2: "35% Growth in Sales",
    img: "https://framerusercontent.com/images/pMiSBwtwN397rFL9N8KTEX8wDU.png",
  },
  {
    title: "HRM TECHNOLOGY",
    subTitle: "Driving Growth with Advanced Cloud & IT Solutions!",
    feature1: "20% Market Share",
    feature2: "45% Enhanced Visibility",
    img: "https://framerusercontent.com/images/5xYMR1T1DkyCoDosC7CqnaSjiJg.png",
  },
];

const AutoScroll = () => {
  return (
    <div className="relative overflow-hidden w-full py-6 sm:py-10">
      {/* Scrolling Container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex justify-center lg:justify-start px-3 sm:px-5 bg-black"
          >
            {/* Card */}
            <div className="relative w-72 sm:w-80 md:w-120 h-full rounded-4xl overflow-hidden p-3 bg-neutral-950 border border-white/5 ">
              {/* Image */}
              <Image
                width={1920}
                height={1080}
                src={feature.img}
                alt="Project"
                className="w-full h-[470px] object-cover rounded-3xl"
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 m-5 bg-neutral-950 p-4 bg rounded-xl">
                {/* Title */}
                <h3 className="text-base sm:text-md md:text-lg font-medium text-white uppercase mb-2">
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
        ))}
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

export default AutoScroll;
