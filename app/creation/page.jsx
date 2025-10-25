"use client";

import React, { useState } from "react";
import { IntroHead } from "../uiComponents/Heading";
import { GlowButton } from "../component/Button";
import Image from "next/image";
import { FAQPage } from "../component/Faq";
import JoinUsNow from "../component/JoinUsNow";
import Link from "next/link";

const stages = [
  {
    id: 1,
    name: "CGMMSSY",
    date: 2018,
    tag: "Web & App Development",
    image:
      "https://framerusercontent.com/images/xpGwa96hllxRWE5U9jMJospzp6U.svg",
  },
  {
    id: 2,
    name: "PATH IAS ACADEMY",
    date: 2024,
    tag: "Business",
    image:
      "https://framerusercontent.com/images/WfXfrFIeWPtyBBmXf14nAzqCE.png?scale-down-to=1024",
  },
  {
    id: 3,
    name: "HRM TECHNOLOGY",
    date: 2024,
    tag: "Website",
    image:
      "https://framerusercontent.com/images/fhFIzqKcEbZrZEuZTInMKwucsFc.svg",
  },
  {
    id: 4,
    name: "Experteeth",
    date: 2023,
    tag: "Website",
    image:
      "https://framerusercontent.com/images/C5BtcnDdyt5U227QLVwbdEVdM.png?scale-down-to=1024",
  },
  {
    id: 5,
    name: "Godhaar",
    date: 2025,
    tag: "Website & Mobile App",
    image: "https://framerusercontent.com/images/UNOYejz09VOe19GlGZe2MTL3o.jpg",
  },
  {
    id: 6,
    name: "Fitbattle",
    date: 2025,
    tag: "Mobile App & Website",
    image:
      "https://framerusercontent.com/images/XwhaCXBj4aGEbb9myT3ElIE5g8.jpg?scale-down-to=1024",
  },
  {
    id: 7,
    name: "VIADYAM (HMS)",
    date: 2024,
    tag: "HMS",
    image:
      "https://framerusercontent.com/images/YGKXMWSnAKUEMWVlTKsVPgZI.jpg?scale-down-to=1024",
  },
  {
    id: 8,
    name: "STAFFEASE (CRM)",
    date: 2024,
    tag: "CRM",
    image:
      "https://framerusercontent.com/images/ALlFj508wPfIsL4uR1HqpQ5OQ8w.jpg?scale-down-to=1024",
  },
];
const CreationPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <section className="relative isolate sm:px-6 lg:px-8 py-16 lg:py-30 w-full h-full overflow-hidden">
        {/* Background Video */}
        <video
          src="https://framerusercontent.com/assets/lr4LSmXa1klevAvb0jf1i2zsDE.mp4"
          type="video/mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10 pt-15 sm:pt-20 md:pt-20 lg:pt-20">
          {/* Intro */}
          <div className="flex flex-col w-full text-center">
            <IntroHead
              HomeHeroBadge="Explore"
              HomeSubHeroBadge="Our Homegrown Products"
              main="Check Out Some"
              sub="Extra-Ordinary Work."
              description="From startups to established brands, we create 
              tailored solutions that drive success and make a real impact."
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <GlowButton ButtonText="Build your Project" Buttonlink="/contact" />
          </div>

          {/* Grid */}
          <div className="w-2/3 sm:w-full lg:w-6xl mt-12 lg:px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {stages.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.id}`} // dynamic route
                className="relative group bg-gradient-to-r from-gray-950/90 to-black/80 
                 p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden 
                 border border-white/10 cursor-pointer"
              >
                {/* Image */}
                <Image
                  width={1920}
                  height={1080}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl 
                   transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                {/* Bottom overlay */}
                <div
                  className="absolute flex justify-between items-center inset-x-0 bottom-0 
                      m-3 sm:m-5 rounded-lg sm:rounded-xl 
                      bg-gradient-to-r from-blue-950 to-black p-2 sm:p-4"
                >
                  <div>
                    <h3 className="text-sm sm:text-md font-semibold text-white mb-0.5 sm:mb-1">
                      {item.name}
                    </h3>
                  </div>
                  <p
                    className="text-xs sm:text-sm text-gray-300 
                      bg-gradient-to-r from-blue-950/60 to-black/80 
                      px-2 sm:px-3 py-0.5 sm:py-1 rounded-md"
                  >
                    {item.date}
                  </p>
                </div>

                {/* Reveal div (hover for desktop, click for mobile) */}
                <div
                  className={`
          absolute top-0 right-0 m-2 sm:m-4 transition-all duration-500 ease-out
          group-hover:translate-y-0 group-hover:opacity-100
        `}
                >
                  <div
                    className="bg-[radial-gradient(circle_at_center,_rgba(0,0,80,0.9),_rgba(0,0,0,1))] 
                        text-white text-xs sm:text-sm font-medium 
                        px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg shadow-lg"
                  >
                    {item.tag}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default CreationPage;
