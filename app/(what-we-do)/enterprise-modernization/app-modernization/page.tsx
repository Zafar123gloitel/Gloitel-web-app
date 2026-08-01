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
  applicationConstraintsData,
  appModernizationHeroData,
  auditPhaseData2,
  constraintsSectionHead,
  foundationPhaseData,
  migrationPhaseData,
  phasedApproachData,
  phasedApproachSectionHead,
  strategySectionHead,
  sunsetPhaseData,
  technologiesModernizedData,
} from "../data";
import AI_Solutions from "../../../uiComponents/AI_Solutions";
import Execution_Plan from "../../../uiComponents/Execution_Plan";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection {...appModernizationHeroData} />
      <section>
        <div className="flex flex-col items-center mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={constraintsSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={constraintsSectionHead.title}
              SectionSubHead=""
              SectionDescription={constraintsSectionHead.description}
            />
          </div>
          <section className=" w-full sm:w-[90%] mt-5 px-6 sm:px-0  mx-auto ">
            <CardShowcase
              items={applicationConstraintsData}
              showDivider={true}
              showStepBadge={false}
              cardClassName="h-[411px] max-w-[350px] gap-y-6 "
              gridClassName="h-full"
              titleClassName="text-[28px] leading-8 "
              descriptionClassName="text-[16px] leading-6 mt-3 text-muted "
            />
          </section>
        </div>
      </section>
      <section className=" overflow-hidden">
        <div className="flex flex-col items-center  mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={phasedApproachSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={phasedApproachSectionHead.title}
              SectionDescription={phasedApproachSectionHead.description}
            />
          </div>
        </div>
        <section className="w-full  sm:w-[90%] -mt-20 lg:-mt-10 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={phasedApproachData}
            cardHeight="h-[263px]  max-w-[330px] "
            gridClassName="h-full gap-y-30 "
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] xl:text-[18px] leading-6 mt-3 text-muted "
          />
        </section>
      </section>
      <section className="overflow-hidden py-20 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={strategySectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={strategySectionHead.title}
              SectionDescription={strategySectionHead.description}
            />
          </div>
          <section className="  gap-6 md:w-[90%]  mx-auto ">
            <Discover
              badgeText={auditPhaseData2.badgeText}
              title={auditPhaseData2.title}
              description={auditPhaseData2.description}
              buttonText={auditPhaseData2.buttonText}
              buttonLink={auditPhaseData2.buttonLink}
              image={auditPhaseData2.image}
              imageAlt={auditPhaseData2.imageAlt}
            />

            <Assess
              badgeText={foundationPhaseData.badgeText}
              title={foundationPhaseData.title}
              description={foundationPhaseData.description}
              buttonText={foundationPhaseData.buttonText}
              buttonLink={foundationPhaseData.buttonLink}
              image={foundationPhaseData.image}
              imageAlt={foundationPhaseData.imageAlt}
            />

            <Discover
              badgeText={migrationPhaseData.badgeText}
              title={migrationPhaseData.title}
              description={migrationPhaseData.description}
              buttonText={migrationPhaseData.buttonText}
              buttonLink={migrationPhaseData.buttonLink}
              image={migrationPhaseData.image}
              imageAlt={migrationPhaseData.imageAlt}
            />

            <Assess
              badgeText={sunsetPhaseData.badgeText}
              title={sunsetPhaseData.title}
              description={sunsetPhaseData.description}
              buttonText={sunsetPhaseData.buttonText}
              buttonLink={sunsetPhaseData.buttonLink}
              image={sunsetPhaseData.image}
              imageAlt={sunsetPhaseData.imageAlt}
            />
          </section>
        </div>
      </section>
      <section className="w-full">
        <AI_Solutions
          badge={technologiesModernizedData.badge}
          title={technologiesModernizedData.title}
          description={technologiesModernizedData.description}
          tabs={technologiesModernizedData.tabs}
          technologies={technologiesModernizedData.technologies}
        />
      </section>
      <Execution_Plan
        badgeText="Ready to Modernize?"
        title="Modernize Without Starting Over"
        description="Modernize incrementally with a strategy that delivers value at 
every phase without disrupting the business."
        buttonText="Book a Modernization Audit"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
