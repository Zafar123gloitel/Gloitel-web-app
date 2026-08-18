"use client";

import Business from "../../(what-we-do)/components/Business";
import Strategy from "../../(what-we-do)/components/Strategy";
import StrategyBadge from "../../../components/StrategyBadge";
import { BgSquare2 } from "../../component/BgSquare";
import EngineeringHeroSection from "../../component/EngineeringHeroSection";
import GlowPanel from "../../component/GlowPanel";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import {
  financeComplianceData,
  financeComplianceSectionHead,
} from "../../industries/data";
import ArchitectureCircle from "../../uiComponents/ArchitectureCircle";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import {
  aiEngineeringHeroData,
  aiEngineeringNotData,
} from "../ai-engineering/data";
import { fullStackComplianceData, fullStackComplianceSectionHead, fullStackHeroData, fullStackRoadmapData, fullStackRoadmapSectionHead, } from "./data";

export default function Page() {
  const positions = {
    top: "lg:top-2 lg:left-1/2 lg:-translate-x-1/2",
    leftTop: "lg:left-8 xl:left-24 2xl:left-40 lg:top-52",
    rightTop: "lg:right-8 xl:right-24 2xl:right-40 lg:top-52",
    leftBottom: "lg:left-8 xl:left-24 2xl:left-40 lg:bottom-52",
    bottom: "lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2",
    rightBottom: "lg:right-8 xl:right-24 2xl:right-40 lg:bottom-52",
  };
  return (
    <div>
      <EngineeringHeroSection
        badgeText={fullStackHeroData.badgeText}
        title={fullStackHeroData.title}
        description={fullStackHeroData.description}
        image={fullStackHeroData.image}
        imageAlt={fullStackHeroData.imageAlt}
        primaryButton={fullStackHeroData.primaryButton}
        secondaryButton={fullStackHeroData.secondaryButton}
      />
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={fullStackComplianceSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={fullStackComplianceSectionHead.title}
              SectionDescription={fullStackComplianceSectionHead.description}
            />
          </div>
        </div>

        <section className="flex items-center -mt-10">
          <ArchitectureCircle
            data={fullStackComplianceData}
            image="/images/hrm.png"
            positions={positions}
          />
        </section>
        <section>
          <Business
            badgeText={fullStackRoadmapSectionHead.badgeText}
            sectionHead={fullStackRoadmapSectionHead.title}
            sectionSubHead=""
            sectionDescription={fullStackRoadmapSectionHead.description}
            data={fullStackRoadmapData}
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

        <section>
          <Execution_Plan
            badgeText="Production AI Starts with Integration"
            title="Turn AI Capabilities into 
Business Infrastructure"
            description="Deploy AI into products and enterprise systems with the infrastructure, safeguards, 
and monitoring required to scale confidently."
            buttonText="Talk to Our Integration Team"
            buttonLink="/contact"
            onclick={() => ({})}
          />
        </section>
      </section>
    </div>
  );
}
