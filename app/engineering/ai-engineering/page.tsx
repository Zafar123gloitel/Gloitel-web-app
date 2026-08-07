"use client";

import React from "react";
import EngineeringHeroSection from "../../component/EngineeringHeroSection";
import {
  aiEcosystemData,
  aiEngineeringCTAData,
  aiEngineeringHeroData,
  aiEngineeringNotData,
  aiSystemsData,
  aiSystemsSectionHead,
} from "./data";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import { CardShowcase } from "../../../components";
import { showcaseItems } from "../../(what-we-do)/components/showcaseItems ";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import {
  aiSolutionsData,
  Real_World,
} from "../../(what-we-do)/components/data";
import GlowPanel from "../../component/GlowPanel";
import Strategy from "../../(what-we-do)/components/Strategy";
import Execution_Plan from "../../uiComponents/Execution_Plan";

const page = () => {
  return (
    <div>
      <EngineeringHeroSection
        badgeText={aiEngineeringHeroData.badgeText}
        title={aiEngineeringHeroData.title}
        description={aiEngineeringHeroData.description}
        image={aiEngineeringHeroData.image}
        imageAlt={aiEngineeringHeroData.imageAlt}
        primaryButton={aiEngineeringHeroData.primaryButton}
        secondaryButton={aiEngineeringHeroData.secondaryButton}
      />

      <section className=" overflow-hidden">
        <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={aiSystemsSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={aiSystemsSectionHead.title}
              SectionDescription={aiSystemsSectionHead.description}
            />
          </div>
          <section className="w-full  sm:w-[90%] mt-20 mx-auto">
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={aiSystemsData}
              cardHeight="h-[300px]   max-w-[350px] "
              gridClassName="gap-y-28"
              titleClassName="text-[32px] leading-8 "
              descriptionClassName="text-[18px] leading-7 mt-5  text-muted "
            />
          </section>
        </div>
      </section>
      <section className="w-full">
        <AI_Solutions
          badge={aiEcosystemData.badge}
          title={aiEcosystemData.title}
          description={aiEcosystemData.description}
          tabs={aiEcosystemData.tabs}
          technologies={aiEcosystemData.technologies}
        />
      </section>
      <GlowPanel />
      <Strategy
        cardData={aiEngineeringNotData.items}
        SectionHead={aiEngineeringNotData.heading}
        SectionSubHead={" "}
        SectionDescription={aiEngineeringNotData.description}
        StrategyBadgeText={aiEngineeringNotData.badgeText}
      />
      <Execution_Plan
        badgeText={aiEngineeringCTAData.badgeText}
        title={aiEngineeringCTAData.title}
        description={aiEngineeringCTAData.description}
        buttonText={aiEngineeringCTAData.buttonText}
        buttonLink={aiEngineeringCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
