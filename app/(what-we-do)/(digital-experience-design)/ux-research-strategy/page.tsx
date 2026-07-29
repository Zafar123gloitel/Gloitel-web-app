"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import ArchitectureCircle from "../../components/ArchitectureCircle";
import ProblemCard from "../../../../components/ProblemCard";
import Strategy from "../../components/Strategy";
import Execution_Plan from "../../components/Execution_Plan";
import {
  assumptionsData,
  assumptionsSectionHead,
  deliverablesData,
  deliverablesSectionHead,
  researchMethodsData,
  researchMethodsSectionHead,
  uxResearchCTAData,
  uxResearchHeroData,
} from "../data";
import Business from "../../components/Business";

const page = () => {
  const positions = {
    top: "lg:top-0 lg:left-1/2 -translate-x-1/2",
    leftTop: "lg:left-0 xl:left-10 2xl:left-30 lg:top-40",
    rightTop: "lg:right-0 xl:right-10 2xl:right-30 lg:top-40",
    leftBottom: "lg:left-0 xl:left-10 2xl:left-30 lg:bottom-40",
    bottom: "lg:-bottom-5 lg:left-1/2 -translate-x-1/2",
    rightBottom: "lg:right-0 xl:right-10 2xl:right-30 lg:bottom-40",
  };

  return (
    <div>
      <HeroSection {...uxResearchHeroData} />
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={researchMethodsSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={researchMethodsSectionHead.title}
              SectionDescription={researchMethodsSectionHead.description}
            />
          </div>
        </div>

        <section className="flex items-center -mt-10 ">
          <ArchitectureCircle
            data={researchMethodsData}
            image="/images/hrm.png"
            positions={positions}
          />
          ;
        </section>
      </section>
      <Business
        badgeText={deliverablesSectionHead.badgeText}
        sectionHead={deliverablesSectionHead.title}
        sectionSubHead=""
        sectionDescription={deliverablesSectionHead.description}
        data={deliverablesData}
      />
      <section className="my-20">
        <Strategy
          cardData={assumptionsData}
          SectionHead={assumptionsSectionHead.title}
          SectionSubHead=""
          SectionDescription={assumptionsSectionHead.description}
          StrategyBadgeText={assumptionsSectionHead.badgeText}
        />
      </section>
      <Execution_Plan
        badgeText={uxResearchCTAData.badgeText}
        title={uxResearchCTAData.title}
        description={uxResearchCTAData.description}
        buttonText={uxResearchCTAData.buttonText}
        buttonLink={uxResearchCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
