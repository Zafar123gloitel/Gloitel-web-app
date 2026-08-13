"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import { CardShowcase } from "../../../../components";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";

import {
  cxCoversData,
  cxCoversSectionHead,
  cxOptimizationCTAData,
  cxOptimizationHeroData,
  cxToolsData,
  designTestData,
  hypothesizeData,
  identifyOpportunitiesData,
  implementMonitorData,
  instrumentMeasureData,
  optimizationProcessSectionHead,
} from "../data";
import AI_Solutions from "../../../uiComponents/AI_Solutions";
import Execution_Plan from "../../../uiComponents/Execution_Plan";

const page = () => {
  return (
    <div>
      <HeroSection {...cxOptimizationHeroData} />
      <section>
        <div className="flex flex-col items-center mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={cxCoversSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={cxCoversSectionHead.title}
              SectionSubHead=""
              SectionDescription={cxCoversSectionHead.description}
            />
          </div>
          <section className=" w-full sm:w-[90%] mt-5 px-6 sm:px-0  mx-auto ">
            <CardShowcase
              items={cxCoversData}
              showDivider={true}
              showStepBadge={false}
              cardClassName="h-[411px] max-w-[350px] gap-y-6 "
              gridClassName="h-full"
              titleClassName="text-[28px] leading-8 "
              descriptionClassName="text-[16px] leading-6 mt-3 text-description "
            />
          </section>
        </div>
      </section>
      <section className="overflow-hidden py-20 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={optimizationProcessSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={optimizationProcessSectionHead.title}
              SectionDescription={optimizationProcessSectionHead.description}
            />
          </div>
        </div>

        <section className=" md:w-[90%]  -mt-40 gap-6  mx-auto ">
          <Discover
            badgeText={instrumentMeasureData.badgeText}
            title={instrumentMeasureData.title}
            description={instrumentMeasureData.description}
            buttonText={instrumentMeasureData.buttonText}
            buttonLink={instrumentMeasureData.buttonLink}
            image={instrumentMeasureData.image}
            imageAlt={instrumentMeasureData.imageAlt}
          />

          <Assess
            badgeText={identifyOpportunitiesData.badgeText}
            title={identifyOpportunitiesData.title}
            description={identifyOpportunitiesData.description}
            buttonText={identifyOpportunitiesData.buttonText}
            buttonLink={identifyOpportunitiesData.buttonLink}
            image={identifyOpportunitiesData.image}
            imageAlt={identifyOpportunitiesData.imageAlt}
          />

          <Discover
            badgeText={hypothesizeData.badgeText}
            title={hypothesizeData.title}
            description={hypothesizeData.description}
            buttonText={hypothesizeData.buttonText}
            buttonLink={hypothesizeData.buttonLink}
            image={hypothesizeData.image}
            imageAlt={hypothesizeData.imageAlt}
          />
          <Assess
            badgeText={designTestData.badgeText}
            title={designTestData.title}
            description={designTestData.description}
            buttonText={designTestData.buttonText}
            buttonLink={designTestData.buttonLink}
            image={designTestData.image}
            imageAlt={designTestData.imageAlt}
          />
          <Discover
            badgeText={implementMonitorData.badgeText}
            title={implementMonitorData.title}
            description={implementMonitorData.description}
            buttonText={implementMonitorData.buttonText}
            buttonLink={implementMonitorData.buttonLink}
            image={implementMonitorData.image}
            imageAlt={implementMonitorData.imageAlt}
          />
        </section>
      </section>
      <section className="w-full">
        <AI_Solutions
          badge={cxToolsData.badge}
          title={cxToolsData.title}
          description={cxToolsData.description}
          tabs={cxToolsData.tabs}
          technologies={cxToolsData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText={cxOptimizationCTAData.badgeText}
        title={cxOptimizationCTAData.title}
        description={cxOptimizationCTAData.description}
        buttonText={cxOptimizationCTAData.buttonText}
        buttonLink={cxOptimizationCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
