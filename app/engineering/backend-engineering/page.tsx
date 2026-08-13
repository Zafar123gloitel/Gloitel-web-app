"use client";


import { CardShowcase } from "../../../components";
import StrategyBadge from "../../../components/StrategyBadge";
import { BgSquare2 } from "../../component/BgSquare";
import EngineeringHeroSection from "../../component/EngineeringHeroSection";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import {
  backendAgentsData,
  backendAgentsSectionHead,
  backendEngineeringCTAData,
  backendEngineeringHeroData,
  backendTechStackData,
} from "./data";


export default function Page() {
  return (
    <div>
      {" "}
      <EngineeringHeroSection
        badgeText={backendEngineeringHeroData.badgeText}
        title={backendEngineeringHeroData.title}
        description={backendEngineeringHeroData.description}
        image={backendEngineeringHeroData.image}
        imageAlt={backendEngineeringHeroData.imageAlt}
        primaryButton={backendEngineeringHeroData.primaryButton}
        secondaryButton={backendEngineeringHeroData.secondaryButton}
      />
      <section className="w-full">
        <AI_Solutions
          badge={backendTechStackData.badge}
          title={backendTechStackData.title}
          description={backendTechStackData.description}
          tabs={backendTechStackData.tabs}
          technologies={backendTechStackData.technologies}
        />
      </section>
      <div className="flex flex-col mt-24 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col -mt-10 w-full gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={backendAgentsSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={backendAgentsSectionHead.title}
            SectionSubHead=""
            SectionDescription={backendAgentsSectionHead.description}
          />
        </div>
        <section className="p-5 sm:p-0  sm:max-w-[90%] -mt-5 mx-auto">
          <CardShowcase
            items={backendAgentsData}
            showDivider={true}
            showStepBadge={false}
            cardHeight="h-[411px] max-w-[411px] "
            gridClassName="gap-y-6"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-6 mt-3 text-description "
          />
        </section>
      </div>
      <Execution_Plan
        badgeText={backendEngineeringCTAData.badgeText}
        title={backendEngineeringCTAData.title}
        description={backendEngineeringCTAData.description}
        buttonText={backendEngineeringCTAData.buttonText}
        buttonLink={backendEngineeringCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
}
