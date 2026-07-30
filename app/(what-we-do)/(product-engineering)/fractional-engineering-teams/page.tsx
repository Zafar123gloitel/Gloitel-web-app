"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  fractionalTeamHeroData,
  showcaseItems2,
  podsData,
  integrationPrinciplesData,
  teamValuesData,
  teamSectionHead,
  scaleReadinessIndicators,
  scaleReadinessSectionHead,
} from "../data";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import PodCard from "../../components/PodCard";
import { CardShowcase } from "../../../../components";
import Business from "../../components/Business";
import Strategy from "../../components/Strategy";
import Execution_Plan from "../../../uiComponents/Execution_Plan";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection {...fractionalTeamHeroData} />

      <section className=" overflow-hidden">
        <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="What a Fractional Engineering Team Is" />
            </span>
            <MiddleSectionHeads
              SectionHead="Dedicated Engineers. Embedded Execution."
              SectionDescription="Dedicated engineers who integrate into your workflows, collaborate with your team, and deliver consistently without the overhead of traditional hiring."
            />
          </div>
        </div>
        <section className="w-full  sm:w-[80%] -mt-20 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={showcaseItems2}
            cardHeight="h-[230px]  max-w-[230px] "
            gridClassName="gap-y-28"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-5 mt-3 text-muted "
          />
        </section>
      </section>

      <section className=" overflow-hidden">
        <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="Our Approach" />
            </span>
            <MiddleSectionHeads
              SectionHead="Diagnose Before You Deploy"
              SectionDescription="We run a structured Discovery Sprint - a fixed-scope, 3–4 week engagement that maps your workflows, assesses feasibility, and delivers a prioritized AI roadmap."
            />
          </div>
        </div>
        <section className="w-full  sm:w-[90%] -mt-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podsData.map((pod, i) => (
              <PodCard key={i} {...pod} />
            ))}
          </div>
        </section>
      </section>
      <Business
        badgeText="How We Integrate with Your Team"
        sectionHead="Working as One Team, Not an External Vendor"
        sectionSubHead=""
        sectionDescription="From onboarding to reporting, our engineers integrate directly into your workflow to ensure fast collaboration, clear communication, and consistent delivery."
        data={integrationPrinciplesData}
      />
      <section>
        <div className="flex flex-col items-center mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={teamSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={teamSectionHead.title}
              SectionSubHead=""
              SectionDescription={teamSectionHead.description}
            />
          </div>
          <section className=" w-full sm:w-[80%] mt-5 px-6 sm:px-0  mx-auto ">
            <CardShowcase
              items={teamValuesData}
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
      <section>
        <Strategy
          cardData={scaleReadinessIndicators}
          SectionHead={scaleReadinessSectionHead.title}
          SectionSubHead=""
          SectionDescription={scaleReadinessSectionHead.description}
          StrategyBadgeText={scaleReadinessSectionHead.badgeText}
        />
      </section>
      <Execution_Plan
        badgeText="Let's Build Together"
        title="Dedicated Engineers. Faster Execution."
        description="From product iteration to large-scale development, our fractional teams provide the expertise and flexibility needed to support your next stage of growth."
        buttonText="Build Your Pod"
        buttonLink="/contact"
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
