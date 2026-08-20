"use client";
// import Business from "../../(what-we-do)/components/Business";
// import PurposeCard from "../../(what-we-do)/components/PurposeCard";
import StrategyBadge from "../../../components/StrategyBadge";
import { BgSquare2 } from "components/BgSquare";
import EngineeringHeroSection from "components/EngineeringHeroSection";
import { MiddleSectionHeads } from "components/SectionHeads";
import EngineeringArchitecture from "uiComponents/EngineeringArchitecture";
import Execution_Plan from "uiComponents/Execution_Plan";
import {
  architectureData,
  mobileAgentsSectionHead,
  mobileEngineeringCTAData,
  mobileEngineeringHeroData,
  mobileProcessData,
  mobileProcessSectionHead,
  mobileRoadmapData,
  mobileRoadmapSectionHead,
} from "./data";
import PurposeCard from "@/components/what-we-do/PurposeCard";
import Business from "@/components/what-we-do/Business";

export default function Page() {
  const architecturePositions = {
    leftTop: "lg:left-8 xl:left-24 2xl:left-30 lg:-top-90",
    rightTop: "lg:right-8 xl:right-24 2xl:right-40 lg:-top-90",
    leftBottom: "lg:left-8 xl:left-24 2xl:left-30 lg:-bottom-90",
    rightBottom: "lg:right-8 xl:right-24 2xl:right-40 lg:-bottom-90",
  };
  return (
    <div>
      <EngineeringHeroSection
        badgeText={mobileEngineeringHeroData.badgeText}
        title={mobileEngineeringHeroData.title}
        description={mobileEngineeringHeroData.description}
        image={mobileEngineeringHeroData.image}
        imageAlt={mobileEngineeringHeroData.imageAlt}
        primaryButton={mobileEngineeringHeroData.primaryButton}
        secondaryButton={mobileEngineeringHeroData.secondaryButton}
      />
      <section className="flex items-center -mt-10">
        <EngineeringArchitecture
          image="/images/iPhone 16 Plus Dark.png"
          imageWidth="w-[260px]"
          imageHeight="h-[760px]"
          cardWidth="w-[320px]"
          positions={architecturePositions}
          data={architectureData}
          titledata={mobileAgentsSectionHead}
        />
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={mobileProcessSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={mobileProcessSectionHead.title}
              SectionSubHead=""
              SectionDescription={mobileProcessSectionHead.description}
            />
          </div>
        </div>

        <div className="sm:w-[80%] -mt-10 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-5 ">
            {mobileProcessData.map((item) => (
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
      <section>
        <Business
          badgeText={mobileRoadmapSectionHead.badgeText}
          sectionHead={mobileRoadmapSectionHead.title}
          sectionSubHead=""
          sectionDescription={mobileRoadmapSectionHead.description}
          data={mobileRoadmapData}
        />
      </section>

      <section>
        <Execution_Plan
          badgeText={mobileEngineeringCTAData.badgeText}
          title={mobileEngineeringCTAData.title}
          description={mobileEngineeringCTAData.description}
          buttonText={mobileEngineeringCTAData.buttonText}
          buttonLink={mobileEngineeringCTAData.buttonLink}
          onclick={() => ({})}
        />
      </section>
    </div>
  );
}
