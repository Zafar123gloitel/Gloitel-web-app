"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  appModernizationHeroData,
  cloudCoverageData,
  cloudCoverageSectionHead,
  cloudMigrationHeroData,
  cloudPlatformsData,
  migrationApproachData,
  migrationApproachSectionHead,
  migrationStrategySectionHead,
  migrationStrategySteps,
  phasedApproachData,
  phasedApproachSectionHead,
  technologiesModernizedData,
} from "../data";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import { CardShowcase } from "../../../../components";
import { whoThisIsForData } from "../../(product-engineering)/data";
import ProblemCard from "../../../../components/ProblemCard";
import { steps } from "framer-motion";
import AI_Solutions from "../../components/AI_Solutions";
import Execution_Plan from "../../components/Execution_Plan";

const page = () => {
  return (
    <div>
      <HeroSection {...cloudMigrationHeroData} />
      <section className=" overflow-hidden">
        <div className="flex flex-col items-center  mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={migrationApproachSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={migrationApproachSectionHead.title}
              SectionDescription={migrationApproachSectionHead.description}
            />
          </div>
        </div>
        <section className="w-full  sm:w-[80%] -mt-20 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={migrationApproachData}
            cardHeight="h-[330px]  max-w-[330px] "
            gridClassName="gap-y-28"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-5 mt-3 text-muted "
          />
        </section>
      </section>
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={cloudCoverageSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={cloudCoverageSectionHead.title}
              SectionDescription={cloudCoverageSectionHead.description}
            />
          </div>
        </div>

        <section className="grid grid-cols-1 -mt-20 gap-6 md:grid-cols-2 w-[80%] mx-auto">
          {cloudCoverageData.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={migrationStrategySectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={migrationStrategySectionHead.title}
              SectionDescription={migrationStrategySectionHead.description}
            />
          </div>
        </div>

        <section className="grid grid-cols-1 -mt-20 gap-6 px-10  w-full  md:w-[80%] sm:mx-auto">
          {migrationStrategySteps.map((item, index) => (
            <ProblemCard
              key={index}
              title={item.title}
              step
              number={index + 1}
              isLast={index === migrationStrategySteps.length - 1}
            />
          ))}
        </section>
      </section>
      <section className="w-full">
        <AI_Solutions
          badge={cloudPlatformsData.badge}
          title={cloudPlatformsData.title}
          description={cloudPlatformsData.description}
          tabs={cloudPlatformsData.tabs}
          technologies={cloudPlatformsData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText="Don't Just Move. Modernize."
        title="Build Better Than Before"
        description="Don't replicate yesterday's limitations. Design a cloud environment optimized for efficiency, flexibility, and future demands."
        buttonText="Start Your Cloud Migration"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
