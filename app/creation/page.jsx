"use client";

import React, { useState } from "react";

import { FAQPage } from "../component/Faq";
import JoinUsNow from "../component/JoinUsNow";
import { GlowButton } from "../component/Button";

const AboutPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const stages = [
    {
      id: 1,
      name: "CGMMSSY",
      date: 2018,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 2,
      name: "PATH IAS ACADEMY",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 3,
      name: "HRM TECHNOLOGY",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 4,
      name: "Experteeth",
      date: 2023,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 5,
      name: "Godhaar",
      date: 2025,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 6,
      name: "Fitbattle",
      date: 2025,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 7,
      name: "VIADYAM (HMS)",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 8,
      name: "STAFFEASE (CRM)",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
  ];

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

        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          {/* Intro */}
          <div className="flex flex-col w-full text-center">
            <div className="flex justify-center mb-6">
              <div className="backdrop-blur-md bg-white/5 rounded-lg px-1.5 py-1.5 text-sm text-gray-300 ring-1 ring-white/10">
                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 mr-3 font-medium text-white shadow">
                  Explore
                </div>
                Our Homegrown Products
              </div>
            </div>

            <h3 className="text-4xl sm:text-5xl lg:text-[5rem] text-white">
              Check Out Some <br />
              Extra-Ordinary Work.
            </h3>

            <div className="lg:w-1/3 mx-auto">
              <p className="mt-4 sm:mt-6 text-base text-gray-400">
                From startups to established brands, we create tailored
                solutions that drive success and make a real impact.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <GlowButton CreationBuild="Build your Project" />
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-6xl">
            {stages.map((item) => (
              <div
                key={item.id}
                className=" relative group bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10"
              >
                {/* Image with zoom on hover */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[450px] object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Bottom overlay */}
                <div className="absolute flex justify-between items-center inset-x-0 bottom-0 m-5 rounded-xl bg-gradient-to-r from-blue-950 to-black p-4">
                  <div>
                    <h3 className="text-md font-semibold text-white mb-1">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-300 bg-gradient-to-r from-blue-950/60 to-black/80 px-3 py-1 rounded-md">
                    {item.date}
                  </p>
                </div>

                {/* Hover reveal div (top-right slide down) */}
                <div className="absolute top-0 right-0 m-4 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="bg-[radial-gradient(circle_at_center,_rgba(0,0,80,0.9),_rgba(0,0,0,1))] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg">
                    Web & App Development
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default AboutPage;
