"use client";

import React, { useState } from "react";
import {
  AboutAboutContent,
  AboutAboutImg1,
  AboutAboutImg2,
} from "../component/About";
import Link from "next/link";
import TechScroll from "../component/TechScroll";
import { CenterBadge } from "../component/Badge";
import { FAQPage } from "../component/Faq";
import JoinUsNow from "../component/JoinUsNow";
import { BgSquare2, BgSquare3 } from "../component/BgSquare";
import { GlowButton } from "../component/Button";
import { IntroHead } from "../uiComponents/Heading";

const AboutPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const stages = [
    {
      id: 1,
      name: "Mr.Durgesh Sahu",
      role: "Director",
      image: "images/durgesh.avif",
    },
    {
      id: 2,
      name: "Dr(Major) Rakesh Sharma",
      role: "Sr.Medical Auditor",
      image: "images/2nd.avif",
    },
    {
      id: 3,
      name: "Mr. Janak Sahu",
      role: "Admin & MIS Head",
      image: "images/3rd.avif",
    },
    {
      id: 4,
      name: "Mr. Shippu Sharma",
      role: "Senior Software Engineer",
      image: "images/4th.avif",
    },
    {
      id: 5,
      name: "Er. Zafaryab Khan",
      role: "Project Lead",
      image: "images/5th.avif",
    },
    // {
    //   id: 6,
    //   name: "Mr. Sandeep",
    //   role: "Project Manager",
    //   image: "images/3rd.avif",
    // },
  ];

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full h-full  overflow-hidden">
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

        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10 text-center pt-15 sm:pt-20 md:pt-20 lg:pt-20">
          {/* Intro */}
          <IntroHead
            HomeHeroBadge="2025"
            HomeSubHeroBadge="Dig Deep About Us"
            main="Learn More About Gloitel"
            sub="Let's Deep Dive!"
            description="Whether you have a question, need assistance,
            or want to start a new project, our team is here to help."
          />

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center rounded-md bg-white px-5 py-2.5 text-md text-black shadow-lg hover:bg-indigo-500 hover:text-white transition"
            >
              Connect With Us
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto text-center backdrop-blur-md bg-white/10 px-5 py-2.5 rounded-md shadow-lg text-md text-white"
            >
              What is Gloitel?
            </Link>
          </div>

          {/* Thumbnail with Play Button */}
          <div className="mt-10 w-full sm:w-3/4 lg:w-2/3">
            <div
              className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <div className="relative w-full pt-[56.25%]">
                <img
                  src="https://img.youtube.com/vi/AMzVBmvh1Z0/maxresdefault.jpg"
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

          {/* Modal Video */}
          {showVideo && (
            <>
              {/* Disable background scroll */}
              <style jsx global>{`
                body {
                  overflow: hidden;
                }
              `}</style>

              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-6"
                onClick={() => setShowVideo(false)}
              >
                {/* Stop propagation so clicking inside doesn’t close modal */}
                <div
                  className="relative w-full max-w-4xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* ❌ Close Button */}
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute -top-4 -right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                    aria-label="Close video"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* ✅ YouTube Video iframe */}
                  <iframe
                    key={showVideo ? "video-playing" : "video-stopped"} // forces remount
                    src={
                      showVideo
                        ? "https://www.youtube.com/embed/AMzVBmvh1Z0?autoplay=1"
                        : ""
                    }
                    title="Gloitel Introduction Video"
                    className="w-full h-[60vh] sm:h-[70vh] rounded-2xl shadow-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* About Section 1 */}
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-1 md:order-2">
            <AboutAboutContent
              AboutBadge="Gloitel Vision"
              AboutHeading="Empowering Businesses"
              AboutSubHeading="with Innovation"
              AboutContents1={[
                {
                  title: "Your Vision, Our Expertise",
                  text: "We craft digital experiences that drive success, delivering seamless IT solutions in HealthTech, AI, Cloud, and more.",
                },
                {
                  title: "Innovation Meets Excellence",
                  text: "From data intelligence to business automation, we deliver modern, scalable, and future-ready technologies that elevate your operations.",
                },
              ]}
              ButtonText="Book an Appointment"
              Buttonlink="/contact"
              HomeAboutTexts="200+ Agencies Rated"
            />
          </div>
          <div className="order-2 md:order-1">
            <AboutAboutImg1 ImgLink="https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024" />
          </div>
        </div>
      </section>

      {/* About Section 2 */}
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AboutAboutContent
            AboutBadge="Gloitel Mission"
            AboutHeading="Smarter Solutions with"
            AboutSubHeading="AI-Powered Precision"
            AboutContents2={[
              {
                title: "AI-Driven Innovation, Every Step of the Way",
                text: "From concept to completion, we integrate AI-driven insights to streamline processes, enhance efficiency, and bring your vision to life effortlessly.",
              },
              {
                title: "Beyond Just Delivery – Continuous AI Support",
                text: "Our commitment doesn’t end at launch. With AI-powered monitoring, automated updates, and real-time optimizations, we ensure your systems evolve with your needs.",
              },
            ]}
            ButtonText="Book an Appointment"
            Buttonlink="/contact"
            HomeAboutTexts="900+ People Rated"
          />
          <AboutAboutImg2 ImgLink="https://framerusercontent.com/images/hZgGlHpPFf0bbzHL7dI9MolatA.jpeg?scale-down-to=1024" />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
        <BgSquare3 />
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 text-center">
            <CenterBadge TestimonialBadge="Testimonial" />

            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">
              Customer Reviews About
            </h3>
            <h3 className="text-lg sm:text-2xl lg:text-4xl font-medium text-gray-400 mt-2">
              Work, Usability and Design.
            </h3>

            <p className="my-6 sm:text-sm lg:text-base text-gray-400">
              Hear from our happy clients! See how we’ve helped them achieve
              their goals and create lasting impact.
            </p>
          </div>
          <GlowButton ButtonText="Book a 15 Min Call" Buttonlink="/contact" />

          {/* Team Grid */}
          {/* grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 w-full">
            {stages.map((item) => (
              <div
                key={item.id}
                className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 sm:h-72 lg:h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute inset-x-0 bottom-0 m-3 sm:m-5 rounded-xl bg-gradient-to-r from-blue-950/60 to-black/80 p-3 sm:p-4 backdrop-blur-md flex justify-between items-center">
                  <div>
                    <h3 className="text-sm sm:text-md font-semibold text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {item.role}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-7 sm:w-9 h-7 sm:h-9 rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <div className="relative flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
        <BgSquare3 />
        <div className="flex flex-col justify-center w-full sm:w-3/4 lg:w-1/2 text-center">
          <CenterBadge AboutOurCulture="Our Culture" />
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">
            Work, Celebrate &
          </h3>
          <h3 className="text-xl sm:text-3xl lg:text-5xl font-medium text-gray-400 mt-2">
            Grow Together
          </h3>
          <p className="my-6 sm:text-sm lg:text-base text-gray-400">
            Snapshot of our lively workplace—office life, celebrations, team
            outings, and bonding events.
          </p>
          <GlowButton ButtonText="View About GLoitel" Buttonlink="/about" />
        </div>

        <div className="overflow-x-auto scrollbar-hide mt-12 w-full">
          <TechScroll />
        </div>
      </div>

      {/* FAQ + CTA */}
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default AboutPage;
