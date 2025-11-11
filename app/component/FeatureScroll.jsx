// components/AutoScrollCarousel.jsx
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const logo = [
  { link: "https://framerusercontent.com/images/8eCUvDX0OmqQtXMhw5mzOqg.png" },
  {
    link: "https://framerusercontent.com/images/RCsXIAT64MXqKtjtESd1RB5UXto.png",
  },
  {
    link: "https://framerusercontent.com/images/4OYXnlCAPJrNl3tfm2nmm7oJkw.png",
  },
  {
    link: "https://framerusercontent.com/images/lyJgvWvh86jt2XcHGLqhulc0wQ.png",
  },
  {
    link: "https://framerusercontent.com/images/4xbysOFxJf5RCzvs0GF86QcKik.png",
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
              />
            </div>
          ))}
        </Marquee>
      </div>
    </center>
  );
};

export default FeatureScroll;
