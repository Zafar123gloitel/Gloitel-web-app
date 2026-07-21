"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import StrategyBadge from "../../../components/StrategyBadge";
import ProblemCard from "../../../components/ProblemCard";
import {
  heroSectionData,
  outcomesData,
  problems,
  RankData,
} from "../components/data";
import { BgSquare2 } from "../../component/BgSquare";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import { Card, CardShowcase } from "../../../components";
import { showcaseItems } from "../components/showcaseItems ";
import Discover from "../components/Discover";
import Assess from "../components/Assess";
import { discoverData } from "../components/data";
import { assessData } from "../components/data";
import Business from "../components/Business";
import Strategy from "../components/Strategy";
import Result from "../../component/Result";
import TimeLine from "../components/TimeLine";
import Asked_Q from "../components/Asked_Q";
import Execution_Plan from "../components/Execution_Plan";
import HeroSection from "../components/HeroSection";
import { notIncludedData } from "../components/data";
import GlowPanel from "../../component/GlowPanel";

export default function WhatWeDoPage() {
  return (
    <>
      <HeroSection {...heroSectionData} />
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
            cardHeight="h-[230px]  max-w-[230px] "
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
      <Business
        badgeText="What You Walk Away With"
        sectionHead="A Clear AI Roadmap backed by "
        sectionSubHead="Business Value"
        sectionDescription="Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes."
        data={outcomesData}
      />
      <GlowPanel />
      <Strategy
        cardData={notIncludedData}
        SectionHead={"Strategy before"}
        SectionSubHead={"Solutions"}
        SectionDescription={
          "Every recommendation is grounded in business impact and feasibility. We do not start with technology, products, or predetermined solutions."
        }
        StrategyBadgeText={"What This Is Not"}
      />
      <TimeLine />
      <Asked_Q />
      <Execution_Plan
        badgeText="AI Development Services"
        title="Define Your AI Roadmap Before You Build"
        description="Most AI initiatives fail before they begin because of misdirected effort. We help you identify where AI should be applied first so every decision is grounded in business value."
        buttonText="Book a Strategy Session"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </>
  );
}
