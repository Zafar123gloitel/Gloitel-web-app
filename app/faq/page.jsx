import React from "react";
import { FAQPage } from "../component/Faq";
import JoinUsNow from "../component/JoinUsNow";
const page = () => {
  return (
    <div>
      <section className="relative sm:px-6 lg:px-8 py-30 sm:py-16 lg:py-30 ">
        {/* Background Video */}
        <video
          src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          type="video/mp4"
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
          unoptimized="true"
        ></video>

        <div className="relative">
          <FAQPage />
        </div>
        <JoinUsNow />
      </section>
    </div>
  );
};

export default page;
