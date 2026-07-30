"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  auditPhaseData2,
  cloudCoverageData,
  buildingBlocksSectionHead,
  cloudMigrationHeroData,
  cloudPlatformsData,
  decompositionApproachSectionHead,
  domainDrivenDesignData,
  incrementalExtractionData,
  microservicesHeroData,
  antiCorruptionLayerData,
  signalsData,
  signalsSectionHead,
  strategySectionHead,
  buildingBlocksData,
  techStackSectionHead,
  techStackData,
  microservicesCTAData,
} from "../data";
import Strategy from "../../components/Strategy";
import {
  scaleReadinessIndicators,
  scaleReadinessSectionHead,
} from "../../(product-engineering)/data";
import { CircleAlert } from "lucide-react";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import ProblemCard from "../../../../components/ProblemCard";
import AI_Solutions from "../../../uiComponents/AI_Solutions";
import Execution_Plan from "../../../uiComponents/Execution_Plan";

const page = () => {
  return (
    <div>
      <HeroSection {...microservicesHeroData} />
      <section>
        <Strategy
          cardData={signalsData}
          SectionHead={signalsSectionHead.title}
          SectionSubHead=""
          SectionDescription={signalsSectionHead.description}
          StrategyBadgeText={signalsSectionHead.badgeText}
        />
        <div
          className="max-w-[75%] mx-auto md:-mt-5 lg:-mt-10 mt-5 sm:mt-0 mb-10 rounded-2xl flex items-center gap-3 border border-transparent p-3"
          style={{
            background: `
      linear-gradient(#080B18, #080B18) padding-box,
      linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
    `,
          }}
        >
          <span className="inline-flex h-12 min-w-12 items-center text-2xl bg-[#1447E633] justify-center rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-blue-400"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
          <p className="text-[14px] sm:text-[16px]">
            If these aren't your problems, a well-modularized monolith may serve
            you better.
          </p>
        </div>
      </section>
      <section className="overflow-hidden py-20 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge
                text={decompositionApproachSectionHead.badgeText}
              />
            </span>
            <MiddleSectionHeads
              SectionHead={decompositionApproachSectionHead.title}
              SectionDescription={decompositionApproachSectionHead.description}
            />
          </div>
        </div>

        <section className=" -mt-40 gap-6 md:w-[80%] mx-auto   ">
          <Discover
            badgeText={domainDrivenDesignData.badgeText}
            title={domainDrivenDesignData.title}
            description={domainDrivenDesignData.description}
            buttonText={domainDrivenDesignData.buttonText}
            buttonLink={domainDrivenDesignData.buttonLink}
            image={domainDrivenDesignData.image}
            imageAlt={domainDrivenDesignData.imageAlt}
          />

          <Assess
            badgeText={incrementalExtractionData.badgeText}
            title={incrementalExtractionData.title}
            description={incrementalExtractionData.description}
            buttonText={incrementalExtractionData.buttonText}
            buttonLink={incrementalExtractionData.buttonLink}
            image={incrementalExtractionData.image}
            imageAlt={incrementalExtractionData.imageAlt}
          />

          <Discover
            badgeText={antiCorruptionLayerData.badgeText}
            title={antiCorruptionLayerData.title}
            description={antiCorruptionLayerData.description}
            buttonText={antiCorruptionLayerData.buttonText}
            buttonLink={antiCorruptionLayerData.buttonLink}
            image={antiCorruptionLayerData.image}
            imageAlt={antiCorruptionLayerData.imageAlt}
          />
        </section>
      </section>
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={buildingBlocksSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={buildingBlocksSectionHead.title}
              SectionDescription={buildingBlocksSectionHead.description}
            />
          </div>
        </div>

        <section className="grid grid-cols-1 -mt-20 gap-6 md:grid-cols-2 w-[80%] mx-auto">
          {buildingBlocksData.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className="w-full">
        <AI_Solutions
          badge={techStackSectionHead.badgeText}
          title={techStackSectionHead.title}
          description={techStackSectionHead.description}
          tabs={techStackData.tabs}
          technologies={techStackData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText={microservicesCTAData.badgeText}
        title={microservicesCTAData.title}
        description={microservicesCTAData.description}
        buttonText={microservicesCTAData.buttonText}
        buttonLink={microservicesCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
