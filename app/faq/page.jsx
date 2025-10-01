import React from "react";
import { FAQPage } from "../component/Faq";
const page = () => {
  return (
    <div>
      <section className="relative sm:px-6 lg:px-8 py-16 lg:py-30">
        {/* Background Video */}
        <video
          src="https://framerusercontent.com/assets/lr4LSmXa1klevAvb0jf1i2zsDE.mp4"
          type="video/mp4"
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="relative">
          <FAQPage />
        </div>
      </section>
    </div>
  );
};

export default page;
