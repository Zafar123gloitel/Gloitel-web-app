"use client";
import { CardShowcase } from "../../../components";
import StrategyBadge from "../../../components/StrategyBadge";
import { BgSquare2 } from "../../component/BgSquare";
import EngineeringHeroSection from "../../component/EngineeringHeroSection";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import { aiEcosystemData, aiSystemsData, aiSystemsSectionHead, devOpsCloudCTAData, devOpsCloudHeroData } from "./data";

export default function Page() {
  return <div>
    <EngineeringHeroSection
      badgeText={devOpsCloudHeroData.badgeText}
      title={devOpsCloudHeroData.title}
      description={devOpsCloudHeroData.description}
      image={devOpsCloudHeroData.image}
      imageAlt={devOpsCloudHeroData.imageAlt}
      primaryButton={devOpsCloudHeroData.primaryButton}
      secondaryButton={devOpsCloudHeroData.secondaryButton}
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
    <Execution_Plan
      badgeText={devOpsCloudCTAData.badgeText}
      title={devOpsCloudCTAData.title}
      description={devOpsCloudCTAData.description}
      buttonText={devOpsCloudCTAData.buttonText}
      buttonLink={devOpsCloudCTAData.buttonLink}
      onclick={() => ({})}
    />
  </div>;
}
