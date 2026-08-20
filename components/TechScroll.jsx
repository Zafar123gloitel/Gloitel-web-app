import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const GalleryOne = [
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865533/Gloitel/azure_zhbd2i.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865533/Gloitel/aws_nyqmjp.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865534/Gloitel/gemini_emnenb.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865533/Gloitel/supa_upvoa6.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865534/Gloitel/apache_n4fwmt.webp",
  },
];

const GalleryTwo = [
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865722/Gloitel/chatgpt_tg0l1d.png",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865777/Gloitel/powerbi_vvewut.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865724/Gloitel/figma_c8s0de.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865723/Gloitel/firebase_wmr3xd.png",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865722/Gloitel/docker_nmqrzp.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865725/Gloitel/terraform_vzvlbb.webp",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865727/Gloitel/django_clvomp.webp",
  },
];

const TechScroll = () => {
  return (
    <div className="relative overflow-hidden w-full py-6 sm:py-8">
      {/* First Row */}
      <div className="flex whitespace-nowrap gap-4 sm:gap-4 px-4">
        <Marquee
          gradient={true}
          gradientColor={[0, 0, 0]}
          speed={50}
          pauseOnHover={false}
          loop={0}
        >
          {GalleryOne.map((site, i) => (
            <div
              key={i}
              className="flex justify-center items-center 
         w-[300px] h-[260px] sm:w-[300px] sm:h-[260px] md:w-[480px] md:h-[330px]
        rounded-4xl overflow-hidden bg-black/20 shadow-lg shadow-black/40 
        border-2 border-white/5 p-2 sm:p-3 md:p-2 m-2"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-gray-800/50">
                <Image
                  width={1920}
                  height={1080}
                  src={site.img}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover rounded-2xl"
                  unoptimized
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second Row */}
      <div className="flex animate-scroll-right whitespace-nowrap gap-4 sm:gap-6 px-4 mt-6 sm:mt-8">
        <Marquee
          gradient={true} // adds subtle fade edges
          gradientColor={[0, 0, 0]} // black fade for dark backgrounds
          speed={50} // control scroll speed
          pauseOnHover={false} // stops when hovered
          direction="right"
          loop={0} // infinite scroll
        >
          {GalleryTwo.map((site, i) => (
            <div
              key={i}
              className="flex justify-center items-center 
        w-[300px] h-[260px] sm:w-[300px] sm:h-[260px] md:w-[480px] md:h-[330px]
        rounded-4xl overflow-hidden bg-black/20 shadow-lg shadow-black/40 
        border-2 border-white/5 p-2 sm:p-3 md:p-2  m-2"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-gray-800/50">
                <Image
                  width={1920}
                  height={1080}
                  src={site.img}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover rounded-2xl"
                  unoptimized
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechScroll;
