"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { LeftBadge } from "./Badge";
import { LeftSectionHeads, MiddleSectionHeads } from "./SectionHeads";
import { ImageCard } from "../uiComponents/ImageCard";
import { GlowButton } from "./Button";
import GlowPanel from "./GlowPanel";
import { Blend, Crosshair, Rocket } from "lucide-react";
import Image from "next/image";

const stages = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Kickoff",
    stage: "Stage 1",
    description:
      "Every project begins with a strong foundation. We align with you to understand your goals, vision, and expectations through in-depth discussions and research, ensuring a clear roadmap for success.",
    points: ["Comprehensive Consultation", "Project Roadmap"],
    icon: <Rocket />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Execution",
    stage: "Stage 2",
    description:
      "With a well-defined strategy, our expert team efficiently brings ideas to life, leveraging cutting-edge technologies and collaboration to deliver seamless implementation.",
    points: ["Seamless Integration", "Real Time Collaboration"],
    icon: <Crosshair />,
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Development & Deliver",
    stage: "Stage 3",
    description:
      "We follow a structured approach to develop, test, and optimize your IT solution, ensuring quality, security, and performance. Most importantly, we deliver on time—exactly as committed! 🚀 plus post-development support.",
    points: ["Ongoing Support", "Documentation"],
    ButtonText: "Book An Appoitnment",
    ButtonTextLink: "/contact",
    icon: <Blend />,
  },
];

const AnimatedCard = ({ children }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: "-100px" }); // no `once: true`

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      // Reset animation when leaving viewport
      controls.start({
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={controls}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const HowWeWork = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-10 lg:pt-10 lg:pb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT */}
        <div className="flex flex-col">
          <LeftBadge WorkBadge="How We Work" />
          <LeftSectionHeads
            SectionHead="From Intelligent Design"
            SectionSubHead="to AI-Powered Launch"
            SectionDescription="We make it easy to bring your ideas to life, guiding you from concept to a fully launched product."
          />

          <div className="mt-2 sm:mt-4 grid gap-4 sm:gap-6">
            {stages.map((item) => (
              <AnimatedCard key={item.id}>
                <div className="relative p-5 sm:p-10 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-800/20 to-transparent opacity-50 rounded-2xl pointer-events-none"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center justify-center px-3 py-3 rounded-lg bg-white/5 text-title shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                      {item.icon}
                    </div>
                    <span className="px-4 py-2 text-xs sm:text-sm rounded-xl bg-blue-600/20 text-gray-300 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                      {item.stage}
                    </span>
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-title relative z-10">
                    {item.title}
                  </h3>
                  <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-2 sm:my-3 relative z-10"></div>
                  <p className="text-gray-400 text-md sm:text-md md:text-base leading-relaxed relative z-10">
                    {item.description}
                  </p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3 relative z-10">
                    {item.points.map((point, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 rounded-md bg-white/10 text-xs sm:text-sm text-gray-300"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  {/* Conditionally render button only for the third card */}
                  {item.ButtonText && item.ButtonTextLink && (
                    <div className="flex justify-start mt-4">
                      <GlowButton
                        ButtonText={item.ButtonText}
                        ButtonLink={item.ButtonTextLink}
                      />
                    </div>
                  )}
                  {item.ButtonText && item.ButtonTextLink && (
                    <div className="absolute -bottom-10 -right-10 opacity-70">
                      <Image
                        src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926076/Gloitel/utils/star_fzn7cv.svg"
                        alt="design"
                        width={180}
                        height={180}
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <ImageCard HowWeWorkImg="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927938/Gloitel/howwework_gzjhr8.webp" />
      </div>
    </section>
  );
};

export default HowWeWork;
