"use client";
import { CardShowcase } from "../../../components";
import StrategyBadge from "../../../components/StrategyBadge";
import { BgSquare2 } from "../../component/BgSquare";
import EngineeringHeroSection from "../../component/EngineeringHeroSection";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import Execution_Plan from "../../uiComponents/Execution_Plan";

import { aiAgentsData, aiAgentsSectionHead, aiEcosystemData, aiEngineeringCTAData, qaHeroData } from "./data";

export default function Page() {
  return <div><EngineeringHeroSection
    badgeText={qaHeroData.badgeText}
    title={qaHeroData.title}
    description={qaHeroData.description}
    image={qaHeroData.image}
    imageAlt={qaHeroData.imageAlt}
    primaryButton={qaHeroData.primaryButton}
    secondaryButton={qaHeroData.secondaryButton}
  />
    <section className=" overflow-hidden">
      <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={aiAgentsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={aiAgentsSectionHead.title}
            SectionDescription={aiAgentsSectionHead.description}
          />
        </div>
        <section className="w-full  sm:w-[90%] mt-20 mx-auto">
          <CardShowcase
            showStepBadge={false}
            showDivider={false}
            items={aiAgentsData}
            cardHeight="h-[450px]   max-w-[350px] "
            gridClassName="gap-y-28"
            titleClassName="text-[32px]  leading-8 "
            descriptionClassName="text-[18px] leading-7 mt-5  text-description "
            
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
    <Execution_Plan
      badgeText={aiEngineeringCTAData.badgeText}
      title={aiEngineeringCTAData.title}
      description={aiEngineeringCTAData.description}
      buttonText={aiEngineeringCTAData.buttonText}
      buttonLink={aiEngineeringCTAData.buttonLink}
      onclick={() => ({})}
    />
  </div>;
}
