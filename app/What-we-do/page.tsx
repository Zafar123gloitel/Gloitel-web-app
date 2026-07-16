"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import StrategyBadge from "../../components/StrategyBadge";
import ProblemCard from "../../components/ProblemCard";
import { problems, RankData } from "./components/data";
import { BgSquare2 } from "../component/BgSquare";
import { MiddleSectionHeads } from "../component/SectionHeads";
import { Card, CardShowcase } from "../../components";
import { showcaseItems } from "./components/showcaseItems ";
import Discover from "./components/Discover";
import Assess from "./components/Assess";
import { discoverData } from "./components/data";
import { assessData } from "./components/data";
import Business from "./components/Business";
import Strategy from "./components/Strategy";
import Result from "../component/Result";
import TimeLine from "./components/TimeLine";
import Asked_Q from "./components/Asked_Q";
import Execution_Plan from "./components/Execution_Plan";

export default function WhatWeDoPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden  px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
            type="video/mp4"
          />
        </video>
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem]  ">
            <div className="grid min-h-[680px] grid-cols-1 items-center gap-10  px-6 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-14">
              <div className="relative z-10 max-w-2xl">
                <StrategyBadge text="AI Development Services" />
                <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
                  Define Your AI Roadmap Before You Build
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                  Most AI initiatives fail before they begin because of
                  misdirected effort. We help you identify where AI should be
                  applied first so every decision is grounded in business value.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-100"
                  >
                    Book a Strategy Session
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/12"
                  >
                    Download a Sample Roadmap
                    <Download size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/images/What-we-do/Rectangle 1.png"
                  alt="AI strategy meeting"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Who This Is For" />
          </span>
          <MiddleSectionHeads
            SectionHead="Built for Teams Ready to move"
            SectionSubHead=" beyond AI Experimentation"
            SectionDescription="Designed for organizations that want to invest in AI strategically, align initiatives with business outcomes, and prioritize the right opportunities before committing resources."
          />
        </div>
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 w-[80%] mx-auto ">
        {problems.map((item, index) => (
          <ProblemCard key={index} title={item.title} />
        ))}
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="Our Approach" />
            </span>
            <MiddleSectionHeads
              SectionHead="Diagnose Before You Deploy"
              SectionDescription="We run a structured Discovery Sprint - a fixed-scope, 3–4 week engagement that maps your workflows, assesses feasibility, and delivers a prioritized AI roadmap."
            />
          </div>
        </div>
        <section className="w-[80%] mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={showcaseItems}
          />
        </section>
      </section>
      <Discover
        badgeText={discoverData.badgeText}
        title={discoverData.title}
        description={discoverData.description}
        cardTitle={discoverData.cardTitle}
        image={discoverData.image}
        imageAlt={discoverData.imageAlt}
      />
      <Assess
        badgeText={assessData.badgeText}
        title={assessData.title}
        description={assessData.description}
        cardTitle={assessData.cardTitle}
        image={assessData.image}
        imageAlt={assessData.imageAlt}
      />
      <Discover
        badgeText={RankData.badgeText}
        title={RankData.title}
        description={RankData.description}
        cardTitle={RankData.cardTitle}
        image={RankData.image}
        imageAlt={RankData.imageAlt}
      />
      <Assess
        badgeText={assessData.badgeText}
        title={assessData.title}
        description={assessData.description}
        cardTitle={assessData.cardTitle}
        image={assessData.image}
        imageAlt={assessData.imageAlt}
      />
      <Business />

      <Strategy />
      <TimeLine />
      <Asked_Q />
      <Execution_Plan />
    </>
  );
}
