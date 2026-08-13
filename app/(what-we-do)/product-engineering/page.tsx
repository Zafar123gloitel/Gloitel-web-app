"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import { CardShowcase } from "../../../components";
import { showcaseItems } from "../components/showcaseItems ";
import ImageCard from "../components/ImageCard";
import { deliverablesData, whatWeDesignData, whatWeDesignSectionHead } from "../digital-experience-design/data";
import Discover from "../components/Discover";
import { aiSolutionsDataJson, assessData, discoverData, notIncludedData, RankData } from "../components/data";
import Assess from "../components/Assess";
import GlowPanel from "../../component/GlowPanel";
import Strategy from "../components/Strategy";
import AI_Solutions from "../../uiComponents/AI_Solutions";
import Execution_Plan from "../../uiComponents/Execution_Plan";
import Business from "../components/Business";
import { productAudienceData, productAudienceSectionHead, productEngineeringCTAData, productEngineeringHeroData, productionGradeData, productionGradeSectionHead, productPracticeData, productPracticeSectionHead, productStruggleData, productStruggleNote, productTechStackData,  } from "./data";


const page = () => {
  return <div>
    <section>
      <HeroSection
        badgeText={productEngineeringHeroData.badgeText}
        title={productEngineeringHeroData.title}
        description={productEngineeringHeroData.description}
        image={productEngineeringHeroData.image}
        imageAlt={productEngineeringHeroData.imageAlt}
        video={productEngineeringHeroData.video}
        primaryButton={productEngineeringHeroData.primaryButton}
        secondaryButton={productEngineeringHeroData.secondaryButton}
      />
    </section>
    <section>
      <GlowPanel />
      <Strategy
        cardData={productStruggleData.items}
        SectionHead={productStruggleData.heading}
        SectionSubHead={""}
        SectionDescription={productStruggleData.description}
        StrategyBadgeText={productStruggleData.badgeText}
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
         {productStruggleNote.icon}
        </span>
        <p className="text-title">{productStruggleNote.text}</p>
      </div>
    </section>
    <section className="overflow-hidden py-20 lg:py-20">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={productPracticeSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={productPracticeSectionHead.title}
            SectionDescription={productPracticeSectionHead.description}
          />
        </div>
      </div>

      <div className=" -mt-10 flex justify-center items-center flex-wrap gap-6  ">
        {productPracticeData.map((item) => (
          <ImageCard key={item.id} data={item} />
        ))}
      </div>
    </section>

    <section>
      <Business
        badgeText={productionGradeSectionHead.badgeText}
        sectionHead={productionGradeSectionHead.title}
        sectionSubHead=""
        sectionDescription={productionGradeSectionHead.description}
        data={productionGradeData}
      />
    </section>


    <section>
      <AI_Solutions
        badge={productTechStackData.badge}
        title={productTechStackData.title}
        description={productTechStackData.description}
        tabs={productTechStackData.tabs}
        technologies={productTechStackData.technologies}
      />
    </section>
    <section className=" overflow-hidden">
      <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={productAudienceSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={productAudienceSectionHead.title}
            SectionDescription={productAudienceSectionHead.description}
          />
        </div>
        <section className="w-full  sm:w-[90%] mt-20 mx-auto">
          <CardShowcase
            showStepBadge
            showDivider={false}
            items={productAudienceData}
            cardHeight="h-[250px]   max-w-[300px] "
            gridClassName="gap-y-28"
            titleClassName="text-[28px] leading-8 "
            descriptionClassName="text-[16px] leading-5 mt-3 text-description "
          />

        </section>
      </div>
    </section>
    <section>
      <Execution_Plan
        badgeText={productEngineeringCTAData.badgeText}
        title={productEngineeringCTAData.title}
        description={productEngineeringCTAData.description}
        buttonText={productEngineeringCTAData.buttonText}
        buttonLink={productEngineeringCTAData.buttonLink}
        onclick={() => undefined}
      />
    </section>
  </div>
};

export default page;
