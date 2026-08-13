"use client";

import Image from "next/image";
import styles from "./PortfolioCard.module.css";
import { useTransform, motion } from "framer-motion";
import Link from "next/link";
import { HorizontalDivider, VerticalDivider } from "./SectionDivider";

const PortfolioCard = ({ i, color, scrollProgress }) => {
  const portfolio = [
    {
      title: "CGMMSSY",
      year: "2018",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926541/Gloitel/cgmmsy/one_ygajrf.svg",
      link: "/portfolio/1",
      tag: ["Website", "CRM"],
    },
    {
      title: "PATH IAS ACADEMY",
      year: "2024",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926539/Gloitel/pathias/one_btremr.webp",
      link: "/portfolio/2",
      tag: ["Website", "UI/UX Design"],
    },
    {
      title: "HRM TECHNOLOGY",
      year: "2024",
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926537/Gloitel/hrm/one_r0srni.webp",
      link: "/portfolio/3",
      tag: ["Dental Care", "Landing Page"],
    },
  ];
  // Card scale linked to parent scroll

  const translateY = useTransform(
    scrollProgress,
    [i * 0.2, i * 0.2 + 0.3],
    [50, 0],
  );
  // Image zoom
  const imageScale = useTransform(scrollProgress, [0, 1], [1.5, 1]);

  return (
    <div>
      {portfolio?.map((item, i) => (
        <div key={i} className={styles.cardContainer}>
          <motion.div
            style={{
              y: translateY,
            }}
            className="mt-10 sm:mt-12 w-full px-4 sm:px-8 md:px-16 top-[25%]"
          >
            <div className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl overflow-hidden border border-white/10 cursor-pointer bg-black/40 backdrop-blur shadow-xl">
              <div className="relative w-full pt-[46.25%] rounded-2xl overflow-hidden">
                <Link href={item?.link}>
                  {/* IMAGE ZOOM WRAPPER */}
                  <motion.div
                    className="absolute inset-0 w-full"
                    style={{ scale: imageScale }}
                  >
                    <Image
                      width={1920}
                      height={1080}
                      src={item?.image}
                      alt="image"
                      className="object-cover w-full h-full rounded-2xl"
                      unoptimized
                    />
                  </motion.div>

                  {/* BOTTOM HEADING OVERLAY */}
                  <div
                    style={{ scale: imageScale }}
                    className="w-[99%] m-2 bg-black backdrop-blur-lg px-5 flex items-center justify-between rounded-xl"
                  >
                    <div
                      className="flex items-center gap-4 bg-gray-800/20 
        border border-neutral-500/20 
        rounded-xl 
        backdrop-blur-2xl 
        py-2 px-4 
        text-sm sm:text-base"
                    >
                      <h2 className="text-title text-lg tracking-wide">
                        {item?.title}
                      </h2>

                      <span className="text-gray-400 text-md font-normal">
                        {item?.year}
                      </span>
                    </div>
                    <VerticalDivider />
                    <div className="w-[40%] h-10 bg-black/40 rounded-xl p-1 shadow-inner-glow overflow-hidden">
                      <div className="progress-fill"></div>
                    </div>
                    <VerticalDivider />
                    <div className="flex flex-wrap gap-3 my-4">
                      {item?.tag?.map((t, i) => (
                        <span
                          key={i}
                          className="
        bg-gray-800/20 
        border border-neutral-500/20 
        rounded-xl 
        backdrop-blur-2xl 
        py-2 px-4 
        text-sm sm:text-base
      "
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;
