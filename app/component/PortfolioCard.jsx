"use client";

import Image from "next/image";
import styles from "./PortfolioCard.module.css";
import { useTransform, motion } from "framer-motion";
import Link from "next/link";

const PortfolioCard = ({ i, color, scrollProgress }) => {
  const portfolio = [
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926541/Gloitel/cgmmsy/one_ygajrf.svg",
      link: "/creation",
    },
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926539/Gloitel/pathias/one_btremr.webp",
      link: "/creation",
    },
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926537/Gloitel/hrm/one_r0srni.webp",
      link: "/creation",
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
            className="mt-10 sm:mt-12 w-full px-4 sm:px-8 md:px-16 origin-top  top-[25%]"
          >
            <div className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl overflow-hidden border border-white/10 cursor-pointer bg-black/40 backdrop-blur shadow-xl">
              <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden">
                <Link href={item?.link}>
                  {/* IMAGE ZOOM WRAPPER */}
                  <motion.div
                    className="absolute inset-0"
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
                  <motion.div
                    style={{ scale: imageScale }}
                    className=" w-full bottom-10 left-50
                 bg-black/60 backdrop-blur-lg 
                 px-5 py-3 rounded-xl 
                 flex items-center gap-3 shadow-lg"
                  >
                    <h2 className="text-white text-lg font-semibold tracking-wide">
                      {item?.title || "HRM TECHNOLOGY"}
                    </h2>

                    <span className="text-gray-300 text-md font-normal">
                      {item?.year || "2024"}
                    </span>
                  </motion.div>
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
