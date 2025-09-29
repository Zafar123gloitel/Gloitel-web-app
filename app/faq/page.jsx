import React from "react";
import { FAQPage } from "../component/Faq";
import { GlowButton } from "../component/Button";

const page = () => {
  return (
    <div>
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
        </div>
        <FAQPage />
      </section>
    </div>
  );
};

export default page;
