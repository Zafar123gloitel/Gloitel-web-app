"use client";

// import HeroSection from "../../components/HeroSection";
import {
  auditPhaseData,
  executionPhaseData,
  handoffPhaseData,
  platformHeroSection,
  principlesData,
  roadmapPhaseData,
  scalingIndicators,
  scalingSolutions,
} from "./data";
// import Strategy from "../../components/Strategy";
import { BgSquare2 } from "components/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "components/SectionHeads";
// import PurposeCard from "../../components/PurposeCard";
import Execution_Plan from "uiComponents/Execution_Plan";
import HeroSection from "@/components/HeroSection";
import Assess from "@/components/what-we-do/Assess";
import Business from "@/components/what-we-do/Business";
import Discover from "@/components/what-we-do/Discover";
import PurposeCard from "@/components/what-we-do/PurposeCard";
import Strategy from "@/components/what-we-do/Strategy";
// import Business from "../../components/Business";
// import Assess from "../../components/Assess";
// import Discover from "../../components/Discover";

const page = () => {
  return (
    <div>
      <HeroSection {...platformHeroSection} />
      <section>
        <Strategy
          cardData={scalingIndicators}
          SectionHead="Indicators that 
It's Time to Scale"
          SectionSubHead=""
          SectionDescription="As products evolve, the systems that once supported rapid growth can begin to slow it down. These indicators reveal when it's time  to scale intentionally."
          StrategyBadgeText="When You Know It's Time to Scale"
        />
      </section>
      <section>
        <div className="flex flex-col items-center mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="How we Help you Scale" />
            </span>
            <MiddleSectionHeads
              SectionHead="Engineering for the 
Next Stage of Growth"
              SectionSubHead=""
              SectionDescription="From infrastructure and databases to engineering processes, we focus 
on the areas that matter most for sustainable scale."
            />
          </div>
        </div>

        <div className="sm:w-[80%] -mt-20 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-5 ">
            {scalingSolutions.map((item) => (
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
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text="Our Scaling Process" />
            </span>
            <MiddleSectionHeads
              SectionHead="A Structured Approach to Scaling"
              SectionDescription="We assess, prioritize, and execute improvements in phases—helping your platform scale without disrupting day-to-day operations."
            />
          </div>
        </div>

        <section className="-mt-40 gap-6 md:w-[80%] xl:w-[90%] mx-auto   ">
          <Discover
            badgeText={auditPhaseData.badgeText}
            title={auditPhaseData.title}
            description={auditPhaseData.description}
            buttonText={auditPhaseData.buttonText}
            buttonLink={auditPhaseData.buttonLink}
            image={auditPhaseData.image}
            imageAlt={auditPhaseData.imageAlt}
          />

          <Assess
            badgeText={roadmapPhaseData.badgeText}
            title={roadmapPhaseData.title}
            description={roadmapPhaseData.description}
            buttonText={roadmapPhaseData.buttonText}
            buttonLink={roadmapPhaseData.buttonLink}
            image={roadmapPhaseData.image}
            imageAlt={roadmapPhaseData.imageAlt}
          />

          <Discover
            badgeText={executionPhaseData.badgeText}
            title={executionPhaseData.title}
            description={executionPhaseData.description}
            buttonText={executionPhaseData.buttonText}
            buttonLink={executionPhaseData.buttonLink}
            image={executionPhaseData.image}
            imageAlt={executionPhaseData.imageAlt}
          />

          <Assess
            badgeText={handoffPhaseData.badgeText}
            title={handoffPhaseData.title}
            description={handoffPhaseData.description}
            buttonText={handoffPhaseData.buttonText}
            buttonLink={handoffPhaseData.buttonLink}
            image={handoffPhaseData.image}
            imageAlt={handoffPhaseData.imageAlt}
          />
        </section>
      </section>

      <Business
        badgeText="Research Deliverables"
        sectionHead="Outputs of the Research Process"
        sectionSubHead=""
        sectionDescription="A structured set of deliverables designed to capture insights, 
communicate findings, and provide clear direction for product and UX teams."
        data={principlesData}
      />
      <Execution_Plan
        badgeText="Scale without Starting Over"
        title="Built for Today. Ready for Tomorrow."
        description="Modernize the architecture, processes, and infrastructure your team depends on as complexity grows."
        buttonText="Start with a Technical Audit"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
