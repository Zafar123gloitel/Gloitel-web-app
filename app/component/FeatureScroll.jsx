// components/AutoScrollCarousel.jsx
import Image from "next/image";
import React from "react";

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
      <div className="relative w-md overflow-hidden">
        <div className="flex animate-scroll w-5xl whitespace-nowrap">
          {logo.map((img, i) => (
            <div key={i} className="w-6xl relative overflow-hidden m-2 ">
              <Image
                width={1920}
                height={1080}
                src={img.link}
                alt="Project"
                className="w-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </center>
  );
};

export default FeatureScroll;
