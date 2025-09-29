import React from "react";
import FeatureScroll from "./FeatureScroll";
import { GlowButton } from "./Button";
import { CenterBadge } from "./Badge";
import { BgSquare3 } from "./BgSquare";
import { MiddleSectionHeads } from "./SectionHeads";

const Testimonial = () => {
  const stages = [
    {
      id: 1,
      title: "Reerth (Electronics-based Product)",
      name: "Staish Kashyap",
      role: "CEO",
      description:
        "Our website is sleek, fast, and user-friendly—perfectly aligned with our vision. The team nailed our brand and delivered a high-performing platform.",
      image:
        "https://framerusercontent.com/images/CVxyC6O4rNzCTwwFaxPLfKZvbI.png",
    },
    {
      id: 2,
      title: "Path ISA (Educational Platform)",
      name: "Dr. Hamid Khan",
      role: "Founder",
      description:
        "They delivered a dynamic, intuitive platform that makes learning easy. Smooth experience and exactly what we needed!",
      image:
        "https://framerusercontent.com/images/4I620ynK1R7TN6BYh1FPWmvkGY.jpg",
    },
    {
      id: 3,
      title: "HRM Technologies (IT & Cloud Services)",
      name: "Rajeshwar Agarwal",
      role: "Director",
      description:
        "Our website now mirrors our cloud expertise—sleek design, robust backend, and seamless performance. Exceptional work!",
      image:
        "https://framerusercontent.com/images/hrEHI2jQbr3u9bx4ki6wQ9uN8fU.jpg",
    },
    {
      id: 4,
      title: "Experteeth (Dental Services)",
      name: "Manish Agrawal",
      role: "Founder",
      description:
        "Our new website is clean, modern, and patient-friendly—covering everything from bookings to services. Couldn't be happier!",
      image:
        "https://framerusercontent.com/images/Tj9MWSq6ff0loshbSVdXIPByocY.png",
    },
    {
      id: 5,
      title: "Samriddhi Agro (Agriculture Products)",
      name: "Ritendra Nayak",
      role: "Owner",
      description:
        "They perfectly captured our agro-business — the site is attractive, informative, and runs flawlessly. A big boost to our online presence!",
      image:
        "https://framerusercontent.com/images/rfyfcmfoze8CPRpWcfNvBpzBCM.png",
    },
    {
      id: 6,
      title: "Sapradha (School Sports Management)",
      name: "Dr. Sowmya Raghubir",
      role: "Chairman",
      description:
        "Our website is now a one-stop hub for managing schools and sports events — seamless registrations, schedules, and updates. Outstanding work!",
      image:
        "https://framerusercontent.com/images/rrBUbgduu8o8FWY2EbuqokKd7yI.png",
    },
  ];

  return (
    <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <BgSquare3 />
        <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 text-center">
          {/* Badge */}
          <CenterBadge TestimonialBadge="Testimonials" />

          {/* Headings */}
          <MiddleSectionHeads
            SectionHead="Customer Reviews About"
            SectionSubHead="Work, Usability and Design."
            SectionDescription="Hear from our happy clients! See how we’ve helped them achieve
 their goals and create lasting impact."
          />
          <div>
            <FeatureScroll />
          </div>
          <GlowButton ButtonText="View About Gloitel" Buttonlink="/about" />
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {stages.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg overflow-hidden border border-white/10"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-800/20 to-transparent opacity-50 rounded-2xl pointer-events-none"></div>

              {/* Avatar + Title */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 overflow-hidden border border-white/10 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed relative z-10">
                {item.description}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-4 relative z-10"></div>

              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {item.name}
                </h3>
              </div>
              <h4 className="text-gray-400 text-xs sm:text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
