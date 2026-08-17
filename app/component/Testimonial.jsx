import React from "react";
import FeatureScroll from "./FeatureScroll";
import { GlowButton } from "./Button";
import { CenterBadge } from "./Badge";
import { BgSquare3 } from "./BgSquare";
import { MiddleSectionHeads } from "./SectionHeads";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Rocket,
  Spline,
  WandSparkles,
} from "lucide-react";
import Image from "next/image";
import GlowPanel from "./GlowPanel";

const Testimonial = () => {
  const stages = [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: "Reerth (Electronics-based Product)",
      name: "Staish Kashyap",
      role: "CEO",
      description:
        "Our website is sleek, fast, and user-friendly—perfectly aligned with our vision. The team nailed our brand and delivered a high-performing platform.",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865924/Gloitel/user/satish_hargcz.webp",
      link: "https://bni-raipur.in/en-IN/memberdetails?encryptedMemberId=cAXuT0G5qYZ5FBgbFbtsgQ%3D%3D&name=Satish+Kumar+Kashyap",
      icon: <Spline />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: "Path ISA (Educational Platform)",
      name: "Dr. Hamid Khan",
      role: "Founder",
      description:
        "They delivered a dynamic, intuitive platform that makes learning easy. Smooth experience and exactly what we needed!",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865921/Gloitel/user/hamid_umised.webp",
      link: "https://www.linkedin.com/in/dr-hamid-khan-59923a14a/?originalSubdomain=in&original_referer=https%3A%2F%2Fgloitel.framer.website%2F",
      icon: <Linkedin />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: "HRM Technologies (IT & Cloud Services)",
      name: "Rajeshwar Agarwal",
      role: "Director",
      description:
        "Our website now mirrors our cloud expertise—sleek design, robust backend, and seamless performance. Exceptional work!",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865920/Gloitel/user/rajeshwar_ldbq5n.webp",
      link: "https://rocketreach.co/rajeshwar-agarwal-email_60747941",
      icon: <Rocket />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: "Experteeth (Dental Services)",
      name: "Manish Agrawal",
      role: "Founder",
      description:
        "Our new website is clean, modern, and patient-friendly—covering everything from bookings to services. Couldn't be happier!",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865920/Gloitel/user/manish_m3citd.webp",
      link: "https://www.instagram.com/experteeth_official/",
      icon: <Instagram />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: "Samriddhi Agro (Agriculture Products)",
      name: "Ritendra Nayak",
      role: "Owner",
      description:
        "They perfectly captured our agro-business — the site is attractive, informative, and runs flawlessly. A big boost to our online presence!",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865919/Gloitel/user/ritendra_qk2pd3.webp",
      link: "https://www.indiamart.com/samridhi-agro-industries/enquiry.html",
      icon: <WandSparkles />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: "Sapradha (School Sports Management)",
      name: "Dr. Sowmya Raghubir",
      role: "Chairman",
      description:
        "Our website is now a one-stop hub for managing schools and sports events — seamless registrations, schedules, and updates. Outstanding work!",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865917/Gloitel/user/sowmya_bjugxb.webp",
      link: "https://www.linkedin.com/in/dr-sowmya-raghubir-5447a231/?originalSubdomain=in",
      icon: <Linkedin />,
    },
  ];
  return (
    <section className="relative isolate px-4 sm:px-6 lg:px-8 py-5 lg:py-15 overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto relative z-10">
        <BgSquare3 />
        {/* HEADER */}
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
          <div className="relative w-full sm:w-auto overflow-hidden z-25">
            <div className="relative feature-fade-mask">
              <FeatureScroll />
            </div>
          </div>
          <GlowButton ButtonText="View About Gloitel" Buttonlink="/about" />
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {stages.map((item) => (
            <Link
              key={item.id}
              href={item.link ?? "#"}
              className="group relative h-full"
            >
              <div
                className="relative flex flex-col justify-between h-full p-6 sm:p-8 
                   rounded-2xl bg-black/40 backdrop-blur-md shadow-lg 
                   overflow-hidden border border-white/10 transition-transform 
                   hover:scale-[1.02] duration-300"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-800/20 to-transparent opacity-50 rounded-2xl pointer-events-none"></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[80px] bg-blue-700/90 blur-[7px] rounded-full pointer-events-none" />
                <div className="flex justify-between gap-3 relative z-10">
                  {/* Left column: Avatar + Stars */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 overflow-hidden border border-white/10 shadow-md">
                      <Image
                        width={1920}
                        height={1080}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-row gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          fill="#FFFFFF"
                          className="w-4 h-4"
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {/* Right column: Icon */}
                  <div className="w-6 h-6 text-description transition-colors duration-300 group-hover:text-title">
                    {item.icon}
                  </div>
                </div>

                {/* Middle Section (Review) */}
                <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed relative z-10 flex-grow">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-4 relative z-10"></div>

                {/* Bottom Section (Name, Role, Title) */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 py-2">
                    <h3 className="text-title font-semibold text-sm sm:text-md">
                      {item.name}
                    </h3>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <p className="text-title font-semibold text-sm sm:text-md">
                      {item.role}
                    </p>
                  </div>
                  <h4 className="text-gray-400 text-xs sm:text-sm">
                    {item.title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <GlowPanel />
    </section>
  );
};

export default Testimonial;
