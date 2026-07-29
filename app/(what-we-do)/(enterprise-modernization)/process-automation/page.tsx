"use client";

import React from "react";
import {
  automationApproachSectionHead,
  phasedImplementationData,
  buildVsBuyData,
  processAutomationHeroData,
  processCategoriesData,
  processCategoriesSectionHead,
  processInventoryData,
  automationTechStackData,
  processAutomationCTAData,
} from "../data";
import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import PurposeCard from "../../components/PurposeCard";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import AI_Solutions from "../../components/AI_Solutions";
import Execution_Plan from "../../components/Execution_Plan";

const page = () => {
  return (
    <div>
      <HeroSection {...processAutomationHeroData} />
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={processCategoriesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={processCategoriesSectionHead.title}
              SectionSubHead=""
              SectionDescription={processCategoriesSectionHead.description}
            />
          </div>
        </div>

        <div className="sm:w-[80%] -mt-10 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-5 ">
            {processCategoriesData.map((item) => (
              <PurposeCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className=""
              />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={automationApproachSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={automationApproachSectionHead.title}
              SectionDescription={automationApproachSectionHead.description}
            />
          </div>
        </div>

        <section className=" -mt-40 gap-6 md:w-[80%] mx-auto   ">
          <Discover
            badgeText={processInventoryData.badgeText}
            title={processInventoryData.title}
            description={processInventoryData.description}
            buttonText={processInventoryData.buttonText}
            buttonLink={processInventoryData.buttonLink}
            image={processInventoryData.image}
            imageAlt={processInventoryData.imageAlt}
          />

          <Assess
            badgeText={phasedImplementationData.badgeText}
            title={phasedImplementationData.title}
            description={phasedImplementationData.description}
            buttonText={phasedImplementationData.buttonText}
            buttonLink={phasedImplementationData.buttonLink}
            image={phasedImplementationData.image}
            imageAlt={phasedImplementationData.imageAlt}
          />

          <Discover
            badgeText={buildVsBuyData.badgeText}
            title={buildVsBuyData.title}
            description={buildVsBuyData.description}
            buttonText={buildVsBuyData.buttonText}
            buttonLink={buildVsBuyData.buttonLink}
            image={buildVsBuyData.image}
            imageAlt={buildVsBuyData.imageAlt}
          />
          <Assess
            badgeText={phasedImplementationData.badgeText}
            title={phasedImplementationData.title}
            description={phasedImplementationData.description}
            buttonText={phasedImplementationData.buttonText}
            buttonLink={phasedImplementationData.buttonLink}
            image={phasedImplementationData.image}
            imageAlt={phasedImplementationData.imageAlt}
          />
        </section>
      </section>
      <section className="w-full">
        <AI_Solutions
          badge={automationTechStackData.badgeText}
          title={automationTechStackData.title}
          description={automationTechStackData.description}
          tabs={automationTechStackData.tabs}
          technologies={automationTechStackData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText={processAutomationCTAData.badgeText}
        title={processAutomationCTAData.title}
        description={processAutomationCTAData.description}
        buttonText={processAutomationCTAData.buttonText}
        buttonLink={processAutomationCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
