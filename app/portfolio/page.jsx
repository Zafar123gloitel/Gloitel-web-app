"use client";

import React, { useState } from "react";
import { FAQPage } from "../component/Faq";
import JoinUsNow from "../component/JoinUsNow";
import Link from "next/link";
import ProjectShowcase from "../component/ProjectShowcase";
import { IntroHead2 } from "../uiComponents/Heading";
import Image from "next/image";

const AboutPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const stages = [
    {
      id: 1,
      name: "CGMMSSY",
      date: 2018,
      tag: "Web & App Development",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 2,
      name: "PATH IAS ACADEMY",
      date: 2024,
      tag: "Business",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 3,
      name: "HRM TECHNOLOGY",
      date: 2024,
      tag: "Website",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 4,
      name: "Experteeth",
      date: 2023,
      tag: "Website",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 5,
      name: "Godhaar",
      date: 2025,
      tag: "Website & Mobile App",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 6,
      name: "Fitbattle",
      date: 2025,
      tag: "Mobile App & Website",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 7,
      name: "VIADYAM (HMS)",
      date: 2024,
      tag: "HMS",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 8,
      name: "STAFFEASE (CRM)",
      date: 2024,
      tag: "CRM",
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
  ];

  return (
    <>
      <section className="relative sm:px-6 lg:px-8 py-16 lg:py-30 w-full h-full overflow-hidden">
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

        <div className="flex flex-col items-center justify-center min-h-[60vh] relative z-10 pt-15 sm:pt-20 md:pt-20 lg:pt-20">
          {/* Intro */}
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center ">
            {/* Left Section */}
            <div className="flex flex-col w-full">
              <IntroHead2
                HomeHeroBadge="CASE STUDY"
                HomeSubHeroBadge="Project Overview"
                main="CGMMSSY"
                description="Mukhyamantri Slum Swasthya Yojna (MMSSY) is a healthcare initiative by Municipal Corporation Durg to provide free medical services to urban slum dwellers through Mobile Medical Units (MMUs)."
              />
            </div>

            {/* Right Section */}
            <div className="flex jutsify-center">
              <div className="bg-gradient-to-br from-[#0a0a20] to-[#1a1a40] p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md">
                {/* Project Type */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">Project Type</p>
                  <h3 className="text-white text-lg font-semibold">
                    Web & Mobile App Development
                  </h3>
                </div>

                {/* Industry */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">Industry</p>
                  <h3 className="text-white text-lg font-semibold">
                    Healthcare (CG Govt.)
                  </h3>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-gray-400 text-sm mb-1">Tech Stack</p>
                  <h3 className="text-white text-lg font-semibold">
                    Java,, HTML, CSS
                  </h3>
                </div>

                {/* View Live Website Button */}
                <Link
                  href="https://www.cgmmssy.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  View Live Website
                </Link>
              </div>
            </div>
          </div>

          {/* Thumbnail with Play Button */}
          <div className="mt-10 w-full sm:w-3/4 lg:w-full max-w-6xl">
            <div
              className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <div className="relative w-full pt-[56.25%]">
                <Image
                  width={1920}
                  height={1080}
                  src="https://framerusercontent.com/images/xpGwa96hllxRWE5U9jMJospzp6U.svg"
                  alt="Video Thumbnail"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-blue-600/90 rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-8 sm:w-10 h-8 sm:h-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProjectShowcase />
        </div>
      </section>
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default AboutPage;
