import Link from "next/link";
import React from "react";
import { CenterBadge } from "./Badge";
import { BgSquare3 } from "./BgSquare";
import { MiddleSectionHeads } from "./SectionHeads";
import { GlowButton } from "./Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Technology = () => {
  const stages = [
    {
      id: 1,
      title: "Next.js",
      stage: "Stage 1",
      description:
        "Build ultra-fast, SEO-friendly web apps with Next.js – featuring SSR, static optimization, and powerful API routes.",
      img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp",
    },
    {
      id: 2,
      title: "React Native",
      stage: "Stage 2",
      description:
        "Build high-performance iOS & Android apps with one codebase using React Native — fast, efficient, and cross-platform.",
      img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/react_cfs5vz.webp",
    },
    {
      id: 3,
      title: "Node.JS",
      stage: "Stage 3",
      description:
        "Power your backend with Node.js — fast, scalable, and perfect for real-time data and high-performance APIs.",
      img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/node_z9ziqo.webp",
    },
    {
      id: 4,
      title: "PostgreSQL",
      stage: "Stage 4",
      description:
        "Supercharge data management with PostgreSQL — fast, scalable, and reliably open-source.",
      img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860001/Gloitel/icon/postgre_aq8ajb.svg",
    },
    {
      id: 5,
      title: "GraphQL",
      stage: "Stage 5",
      description:
        "Fetch only what you need with GraphQL — flexible queries for faster, more efficient apps.",
      img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/graph_v7lrwc.webp",
    },
    {
      id: 6,
      title: "Nest.JS",
      stage: "Stage 6",
      description:
        "Build scalable, maintainable backends with NestJS — a TypeScript-ready, modular Node.js framework.",
      img: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/nest_fxzqfx.webp",
    },
  ];

  return (
    <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
      <BgSquare3 />
      <div className=" flex flex-col items-center justify-center max-w-7xl mx-auto  z-10">
        {/* HEADER */}
        <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 text-center">
          {/* Badge */}
          <CenterBadge TechnologyBadge="Technology" />
          <MiddleSectionHeads
            SectionHead="Unlimited Design Features"
            SectionSubHead="AI-Powered Delivery!"
            SectionDescription="Get unlimited AI-powered design features, giving you the freedom to create without limits."
          />

          {/* CTA */}
          <GlowButton ButtonText="View About Gloitel" Buttonlink="/about" />
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {stages.map((item) => (
            <Link
              key={item.id}
              href={"/contact"} // make sure each item has an href property
              className="group relative p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg overflow-hidden border border-white/10 transition-transform"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-800/20 to-transparent opacity-50 rounded-2xl pointer-events-none"></div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[80px] bg-blue-700/90 blur-[7px] rounded-full pointer-events-none" />

              {/* Stage header */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                  <Image
                    width={1920}
                    height={1080}
                    src={item.img}
                    alt=""
                    className="rounded-full"
                    unoptimized
                  />
                </div>

                {/* Arrow Icon with hover color change */}
                <ArrowUpRight className="w-6 h-6 text-description transition-colors duration-300 group-hover:text-title" />
              </div>

              {/* Title */}
              <h3 className="my-4 sm:my-6 text-md sm:text-lg font-semibold text-title relative z-10">
                {item.title}
              </h3>

              <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-3 relative z-10"></div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed relative z-10">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
1;
