import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const GalleryOne = [
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441583/Gloitel/gallery/one_eqqgp4.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441583/Gloitel/gallery/two_w8fndt.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441583/Gloitel/gallery/three_zg8a7t.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441583/Gloitel/gallery/four_n4eshm.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441583/Gloitel/gallery/five_fecpl5.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441583/Gloitel/gallery/six_flqrx8.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441584/Gloitel/gallery/seven_cbsr2x.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441582/Gloitel/gallery/eight_nmsvgt.avif",
  },
];

const GalleryTwo = [
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441882/Gloitel/gallery/first_tgn8hx.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441882/Gloitel/gallery/second_ooqrme.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441883/Gloitel/gallery/third_cloax3.jpg",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441883/Gloitel/gallery/fourth_l5kppd.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441883/Gloitel/gallery/fiveth_g84eat.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441884/Gloitel/gallery/sixth_qtf6x7.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441884/Gloitel/gallery/seventh_c96slw.jpg",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441885/Gloitel/gallery/ninth_jpvrxt.avif",
  },
  {
    img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1763441884/Gloitel/gallery/eighth_alonbc.avif",
  },
];

const GalleryScroll = () => {
  return (
    <div className="relative overflow-hidden w-full py-6 sm:py-8">
      {/* First Row */}
      <div className="flex whitespace-nowrap gap-4 sm:gap-4 px-4">
        <Marquee
          gradient={true}
          gradientColor="0, 0, 0"
          speed={50}
          pauseOnHover={false}
          loop={0}
        >
          {GalleryOne.map((site, i) => (
            <div
              key={i}
              className="flex justify-center items-center 
         w-[300px] h-[260px] sm:w-[300px] sm:h-[260px] md:w-[400px] md:h-[330px]
        rounded-2xl overflow-hidden bg-black/20 shadow-lg shadow-black/40 
        border-2 border-white/5 p-2 sm:p-3 md:p-2 m-2"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 bg-gray-800/50">
                <Image
                  width={1920}
                  height={1080}
                  src={site.img}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover rounded-xl"
                  unoptimized
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
          gradientColor="0, 0, 0"
          // black fade for dark backgrounds
          speed={50} // control scroll speed
          pauseOnHover={false} // stops when hovered
          direction="right"
          loop={0} // infinite scroll
        >
          {GalleryTwo.map((site, i) => (
            <div
              key={i}
              className="flex justify-center items-center 
        w-[300px] h-[260px] sm:w-[300px] sm:h-[260px] md:w-[400px] md:h-[330px]
        rounded-2xl overflow-hidden bg-black/20 shadow-lg shadow-black/40 
        border-2 border-white/5 p-2 sm:p-3 md:p-2  m-2"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/5 bg-gray-800/50">
                <Image
                  width={1920}
                  height={1080}
                  src={site.img}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover rounded-xl"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default GalleryScroll;
