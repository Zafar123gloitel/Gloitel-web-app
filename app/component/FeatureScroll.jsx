// components/AutoScrollCarousel.jsx
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const logo = [
  {
    link: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928121/Gloitel/featurescroll/experteeth_xisrqz.webp",
  },
  {
    link: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928156/Gloitel/featurescroll/glowel_hak4d9.webp",
  },
  {
    link: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928124/Gloitel/featurescroll/travel_lkxxcs.webp",
  },
  {
    link: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928121/Gloitel/featurescroll/experteeth_xisrqz.webp",
  },
  {
    link: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928130/Gloitel/featurescroll/fitbattle_k54old.webp",
  },
];

const FeatureScroll = () => {
  return (
    <center>
      <div className="relative overflow-hidden w-115">
        <Marquee
          gradient={true} // adds subtle fade edges
          gradientColor={[0, 0, 0]} // black fade for dark backgrounds
          speed={30} // control scroll speed
          loop={0} // infinite scroll
        >
          {logo.map((img, i) => (
            <div key={i} className="w-full relative overflow-hidden  ">
              <Image
                width={320}
                height={280}
                src={img.link}
                alt="Project"
                className="w-40 object-cover"
                unoptimized
              />
            </div>
          ))}
        </Marquee>
      </div>
    </center>
  );
};

export default FeatureScroll;
