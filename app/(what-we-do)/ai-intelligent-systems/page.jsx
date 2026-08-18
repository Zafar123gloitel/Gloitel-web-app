"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import { CardShowcase } from "../../../components";
import Discover from "../components/Discover";
import Assess from "../components/Assess";
import GlowPanel from "../../component/GlowPanel";
import Strategy from "../components/Strategy";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import { ArrowRightIcon, InfoIcon } from "../../component/SvgIcon";
import { aiClarityData, aiEngagementSectionHead, aiGapData, aiGapSectionHead, aiIntelligentSystemsCTAData, aiIntelligentSystemsHeroData, aiPilotData, aiPracticeAreasData, aiPracticeAreasSectionHead, aiTechStackLandingData, discoverySprintData, productionScaleData } from "./data";
import ImageCard from "../../component/ImageCard";



const page = () => {
  return <div>
    <section>
      <HeroSection
        badgeText={aiIntelligentSystemsHeroData.badgeText}
        title={aiIntelligentSystemsHeroData.title}
        description={aiIntelligentSystemsHeroData.description}
        image={aiIntelligentSystemsHeroData.image}
        imageAlt={aiIntelligentSystemsHeroData.imageAlt}
        video={aiIntelligentSystemsHeroData.video}
        primaryButton={aiIntelligentSystemsHeroData.primaryButton}
        secondaryButton={aiIntelligentSystemsHeroData.secondaryButton}
      />
    </section>
    <section className=" overflow-hidden">
      <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={aiGapSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={aiGapSectionHead.title}
            SectionDescription={aiGapSectionHead.description}
          />
        </div>
        <section className="w-full  sm:w-[90%] mt-20 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={aiGapData}
            cardHeight="h-[300px]   max-w-[300px] "
            gridClassName="gap-y-28"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-5 mt-3 text-description "
          />
          <div
            className="max-w-[75%] mx-auto mt-4 rounded-2xl flex items-center gap-3 border border-transparent p-3"
            style={{
              background: `
                linear-gradient(#080B18, #080B18) padding-box,
                linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
              `,
            }}
          >
            <span className="inline-flex h-12 min-w-12 items-center text-2xl text-title bg-[#1447E633] justify-center rounded-full ">
              <InfoIcon className="h-5 w-5 text-blue-400" />
            </span>
            <p className="text-title">
              {"We diagnose before we build. Engineering starts only after we've defined where AI will create measurable business impact and long-term value."}
            </p>
          </div>
        </section>
      </div>
    </section>
    <section className="overflow-hidden py-20 lg:py-20">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={aiPracticeAreasSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={aiPracticeAreasSectionHead.title}
            SectionDescription={aiPracticeAreasSectionHead.description}
          />
        </div>
      </div>

      <div className=" -mt-10 flex justify-center items-center flex-wrap gap-6  ">
        {aiPracticeAreasData.map((item) => (
            <ImageCard
              key={item.id}
              className={""}
              cradClass={"w-[25rem] min-h-[550px]"}
              padding={"px-4"}
              cardtitle={item.title}
              carddescription={item.description}
              buttintext={item.buttonText}
              buttonurl={item.buttonLink}
              buttonicon={<ArrowRightIcon />}
              image={item.image}
            />
        ))}
      </div>
    </section>
    <div className="">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={aiEngagementSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={aiEngagementSectionHead.title}
            SectionDescription={aiEngagementSectionHead.description}
          />
        </div>
      </div>
      <Discover
        badgeText={discoverySprintData.badgeText}
        title={discoverySprintData.title}
        description={discoverySprintData.description}
        cardTitle={discoverySprintData.cardTitle}
        image={discoverySprintData.image}
        imageAlt={discoverySprintData.imageAlt}
      />
      <Assess
        badgeText={aiPilotData.badgeText}
        title={aiPilotData.title}
        description={aiPilotData.description}
        cardTitle={aiPilotData.cardTitle}
        image={aiPilotData.image}
        imageAlt={aiPilotData.imageAlt}
      />
      <Discover
        badgeText={productionScaleData.badgeText}
        title={productionScaleData.title}
        description={productionScaleData.description}
        cardTitle={productionScaleData.cardTitle}
        image={productionScaleData.image}
        imageAlt={productionScaleData.imageAlt}
      />

    </div>
    <GlowPanel />
    <Strategy
      cardData={aiClarityData.items}
      SectionHead={aiClarityData.title}
      SectionSubHead={""}
      SectionDescription={
        aiClarityData.description
      }
      StrategyBadgeText={aiClarityData.badgeText}
    />
    <section>
      <AI_Solutions
        badge={aiTechStackLandingData.badge}
        title={aiTechStackLandingData.title}
        description={aiTechStackLandingData.description}
        tabs={aiTechStackLandingData.tabs}
        technologies={aiTechStackLandingData.technologies}
      />
    </section>
    <section className="overflow-hidden py-20 lg:py-20">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={"Our Engagement Model"} />
          </span>
          <MiddleSectionHeads
            SectionHead={"From Discovery to Production-Ready AI"}
            SectionDescription={"A structured approach that validates opportunities, proves value, and scales successful AI initiatives with confidence."}
          />
        </div>
      </div>


    </section>
    <section>
      <Execution_Plan
        badgeText={aiIntelligentSystemsCTAData.badgeText}
        title={aiIntelligentSystemsCTAData.title}
        description={aiIntelligentSystemsCTAData.description}
        buttonText={aiIntelligentSystemsCTAData.buttonText}
        buttonLink={aiIntelligentSystemsCTAData.buttonLink}
        onclick={() => undefined}
      />
    </section>
  </div>
};

export default page;
