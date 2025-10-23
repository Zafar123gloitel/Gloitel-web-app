import Link from "next/link";
import React from "react";
import { CenterBadge } from "./Badge";

const JoinUsNow = () => {
  return (
    <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10">
        {/* Video Container */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          {/* Background video */}
          <video
            src="https://framerusercontent.com/assets/lr4LSmXa1klevAvb0jf1i2zsDE.mp4"
            type="video/mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8">
            {/* Badge */}
            <CenterBadge JoinUsNowBadge="Join Us Now" />
            {/* Headings */}
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-snug">
              Each Project we Undertake
            </h3>
            <h3 className="text-lg sm:text-2xl lg:text-4xl font-medium text-gray-300 mt-2 leading-snug">
              is a Unique Opportunity.
            </h3>

            {/* Paragraph */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl">
              Ready to take the next step? Join us now and start transforming
              your vision into reality with expert support.
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/about"
                className="relative rounded-md bg-blue-700 px-5 py-2.5 text-sm sm:text-base lg:text-lg text-white 
                 transition duration-300 ease-in-out
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 
                 shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              >
                View About Gloitel
                <span className="absolute top-0 left-0 w-full h-1 bg-blue-400 blur-xl opacity-70 animate-pulse"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsNow;
