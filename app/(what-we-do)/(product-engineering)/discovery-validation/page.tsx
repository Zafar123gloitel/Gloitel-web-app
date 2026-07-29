"use client";

import HeroSection from "../../components/HeroSection";
import Business from "../../components/Business";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import Strategy from "../../components/Strategy";
import TimeLine from "../../components/TimeLine";
import Asked_Q from "../../components/Asked_Q";
import Execution_Plan from "../../components/Execution_Plan";
import GlowPanel from "../../../component/GlowPanel";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import ProblemCard from "../../../../components/ProblemCard";
import {
  heroSectionData,
  whoThisIsForData,
  discoverPhaseData,
  assessPhaseData,
  prioritizePhaseData,
  enablePhaseData,
  outcomesData,
  strategyCards,
  noteveryproduct,
} from "../data";
import { CardShowcase } from "../../../../components";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection {...heroSectionData} />

      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text="What Discovery Actually Delivers" />
            </span>
            <MiddleSectionHeads
              SectionHead="The Outputs of Discovery"
              SectionDescription="These outputs provide the clarity needed to align teams, define scope, and make confident product decisions."
            />
          </div>
        </div>

        <section className="grid grid-cols-1 -mt-20 gap-6 md:grid-cols-2 w-[80%] mx-auto">
          {whoThisIsForData.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className="overflow-hidden py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text="The Discovery Process" />
            </span>
            <MiddleSectionHeads
              SectionHead="A Structured Process for Product Decision-Making"
              SectionDescription="Follow a structured four-week discovery process that transforms research, user insights, and assumptions into clear product decisions, MVP priorities, and an actionable roadmap."
            />
          </div>
        </div>

        <section className=" -mt-40 gap-6  md:w-[80%] mx-auto ">
          <Discover
            badgeText={discoverPhaseData.badgeText}
            title={discoverPhaseData.title}
            description={discoverPhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={discoverPhaseData.image}
            imageAlt={discoverPhaseData.imageAlt}
          />

          <Assess
            badgeText={assessPhaseData.badgeText}
            title={assessPhaseData.title}
            description={assessPhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={assessPhaseData.image}
            imageAlt={assessPhaseData.imageAlt}
          />

          <Discover
            badgeText={prioritizePhaseData.badgeText}
            title={prioritizePhaseData.title}
            description={prioritizePhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={prioritizePhaseData.image}
            imageAlt={prioritizePhaseData.imageAlt}
          />

          <Assess
            badgeText={enablePhaseData.badgeText}
            title={enablePhaseData.title}
            description={enablePhaseData.description}
            buttonText={discoverPhaseData.buttonText}
            buttonLink={discoverPhaseData.buttonLink}
            image={enablePhaseData.image}
            imageAlt={enablePhaseData.imageAlt}
          />
        </section>
      </section>

      <Business
        badgeText="Deliverables The Outputs That Guide"
        sectionHead="The Outputs That Guide 
Product Decisions"
        sectionSubHead=""
        sectionDescription="A practical set of research, strategy, and planning deliverables that help align stakeholders, define priorities, and guide the product build with clarity."
        data={outcomesData}
      />

      <GlowPanel />

      <Strategy
        cardData={strategyCards}
        SectionHead="Indicators Your Product Needs Validation"
        SectionSubHead=""
        SectionDescription="These common signs suggest your product direction, user needs, or priorities require validation before moving into design and engineering."
        StrategyBadgeText="When to Run Discovery"
      />

      <section className=" overflow-hidden">
        <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="When Discovery Is Probably Not Needed" />
            </span>
            <MiddleSectionHeads
              SectionHead="Not Every Product Needs Discovery"
              SectionDescription="Discovery is most valuable when uncertainty exists. If key decisions have already been validated, it may be time to move directly into execution."
            />
          </div>
        </div>
        <section className="w-full  sm:w-[80%] -mt-20 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={noteveryproduct}
            cardHeight="h-[263px]  max-w-[330px] "
            gridClassName="h-full"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-6 mt-3 text-muted "
          />
        </section>
      </section>

      <Execution_Plan
        badgeText="Ready for Clarity?"
        title="Know What to Build and Why"
        description="Reduce uncertainty, align stakeholders, and define a roadmap for execution."
        buttonText="Run a Discovery Sprint with Us"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
