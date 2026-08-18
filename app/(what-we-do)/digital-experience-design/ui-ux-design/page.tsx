"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import {
  designHandoffData,
  designProcessSectionHead,
  designStandardsData,
  designStandardsSectionHead,
  discoveryResearchData,
  interactivePrototypeData,
  uxDesignCTAData,
  uxDesignHeroData,
  visualDesignData,
  whatWeDesignData,
  whatWeDesignSectionHead,
  wireframingData,
} from "./data";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import ImageCard from "../../components/ImageCard";
import Execution_Plan from "../../../uiComponents/Execution_Plan";
import Business from "../../components/Business";

const page = () => {
  return (
    <div>
      <HeroSection {...uxDesignHeroData} />
      <section className="overflow-hidden py-20 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={designProcessSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={designProcessSectionHead.title}
              SectionDescription={designProcessSectionHead.description}
            />
          </div>
        </div>

        <section className=" -mt-40 gap-6  md:w-[90%] mx-auto ">
          <Discover
            badgeText={discoveryResearchData.badgeText}
            title={discoveryResearchData.title}
            description={discoveryResearchData.description}
            buttonText={discoveryResearchData.buttonText}
            buttonLink={discoveryResearchData.buttonLink}
            image={discoveryResearchData.image}
            imageAlt={discoveryResearchData.imageAlt}
          />

          <Assess
            badgeText={visualDesignData.badgeText}
            title={visualDesignData.title}
            description={visualDesignData.description}
            buttonText={visualDesignData.buttonText}
            buttonLink={visualDesignData.buttonLink}
            image={visualDesignData.image}
            imageAlt={visualDesignData.imageAlt}
          />

          <Discover
            badgeText={wireframingData.badgeText}
            title={wireframingData.title}
            description={wireframingData.description}
            buttonText={wireframingData.buttonText}
            buttonLink={wireframingData.buttonLink}
            image={wireframingData.image}
            imageAlt={wireframingData.imageAlt}
          />
          <Assess
            badgeText={visualDesignData.badgeText}
            title={visualDesignData.title}
            description={visualDesignData.description}
            buttonText={visualDesignData.buttonText}
            buttonLink={visualDesignData.buttonLink}
            image={visualDesignData.image}
            imageAlt={visualDesignData.imageAlt}
          />
          <Discover
            badgeText={interactivePrototypeData.badgeText}
            title={interactivePrototypeData.title}
            description={interactivePrototypeData.description}
            buttonText={interactivePrototypeData.buttonText}
            buttonLink={interactivePrototypeData.buttonLink}
            image={interactivePrototypeData.image}
            imageAlt={interactivePrototypeData.imageAlt}
          />
          <Assess
            badgeText={designHandoffData.badgeText}
            title={designHandoffData.title}
            description={designHandoffData.description}
            buttonText={designHandoffData.buttonText}
            buttonLink={designHandoffData.buttonLink}
            image={designHandoffData.image}
            imageAlt={designHandoffData.imageAlt}
          />
        </section>
      </section>
      <section className="overflow-hidden py-20 lg:py-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={whatWeDesignSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={whatWeDesignSectionHead.title}
              SectionDescription={whatWeDesignSectionHead.description}
            />
          </div>
        </div>

        <div className=" -mt-10 flex justify-center items-center flex-wrap gap-6  ">
          {whatWeDesignData.map((item) => (
            <ImageCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <Business
        badgeText={designStandardsSectionHead.badgeText}
        sectionHead={designStandardsSectionHead.title}
        sectionSubHead=""
        sectionDescription={designStandardsSectionHead.description}
        data={designStandardsData}
      />
      <Execution_Plan
        badgeText={uxDesignCTAData.badgeText}
        title={uxDesignCTAData.title}
        description={uxDesignCTAData.description}
        buttonText={uxDesignCTAData.buttonText}
        buttonLink={uxDesignCTAData.buttonLink}
        onclick={() => ({})}
      />
    </div>
  );
};

export default page;
