import Link from "next/link";
import React from "react";
import { CenterBadge } from "./Badge";
import { GlowButton } from "./Button";

const JoinUsNow = () => {
  return (
    <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto relative z-10">
        {/* Video Container */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          {/* Background video */}
          <video
            src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
            type="video/mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            unoptimized="true"
          ></video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8">
            {/* Badge */}
            <CenterBadge JoinUsNowBadge="Join Us Now" />
            {/* Headings */}
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-white">
              Each Project we Undertake
            </h3>
            <h3 className="text-2xl sm:text-2xl lg:text-5xl font-medium text-gray-300">
              is a Unique Opportunity.
            </h3>

            {/* Paragraph */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl">
              Ready to take the next step? Join us now and start transforming
              your vision into reality with expert support.
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton
                ButtonText="Book An Appointment"
                Buttonlink="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsNow;
