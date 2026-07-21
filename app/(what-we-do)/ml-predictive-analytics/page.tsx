"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import { ArrowRight } from "lucide-react";
import { BgSquare2 } from "../../component/BgSquare";
import StrategyBadge from "../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../component/SectionHeads";
import GlowPanel from "../../component/GlowPanel";
import {
  aiSolutionsData,
  executionStepFive,
  executionStepFour,
  executionStepOne,
  executionStepThree,
  executionStepTwo,
  outcomesData2,
} from "../components/data";
import PurposeCard from "../components/PurposeCard";
import Discover from "../components/Discover";
import Assess from "../components/Assess";
import AI_Solutions from "../components/AI_Solutions";
import Not_Every_Problem from "../../component/Not_Every_Problem";
import Execution_Plan from "../components/Execution_Plan";

const page = () => {
  return (
    <div>
      <section>
        <HeroSection
          badgeText="AI Agents & Automation"
          title="AI Agents that Take Action, Not Just Instructions."
          description="We design and deploy production-ready AI agents that can make decisions, interact with systems, and automate complex workflows with minimal human intervention."
          image="/images/What-we-do/Rectangle 1.png"
          imageAlt="Hero Image"
          video="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          primaryButton={{
            href: "/contact",
            text: "Discuss Your Automation Use Case",
          }}
          secondaryButton={{
            href: "/case-studies",
            text: "Explore Agentic AI",
            icon: <ArrowRight className="w-4 h-4" />,
          }}
        />
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="What You Walk Away With" />
            </span>
            <MiddleSectionHeads
              SectionHead="A Clear AI Roadmap backed by "
              SectionSubHead=" Business Value"
              SectionDescription="Leave with a prioritized plan, validated opportunities, and a practical roadmap designed to deliver measurable business outcomes."
            />
          </div>
        </div>

        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-2 gap-4 ">
            {outcomesData2.map((item) => (
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
        <GlowPanel />
      </section>
      <section className="flex flex-col mt-20 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="What We Build" />
          </span>
          <MiddleSectionHeads
            SectionHead="AI Systems Built for"
            SectionSubHead=" Real Business Workflows."
            SectionDescription="We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments."
          />
        </div>
        <section className="w-[80%]  mx-auto">
          <Discover
            badgeText={executionStepOne.badgeText}
            title={executionStepOne.title}
            description={executionStepOne.description}
            buttonText={executionStepOne.buttonText}
            buttonLink={executionStepOne.buttonLink}
            image={executionStepOne.image}
            imageAlt={executionStepOne.imageAlt}
          />
          <Assess
            badgeText={executionStepTwo.badgeText}
            title={executionStepTwo.title}
            description={executionStepTwo.description}
            buttonText={executionStepTwo.buttonText}
            buttonLink={executionStepTwo.buttonLink}
            image={executionStepTwo.image}
            imageAlt={executionStepTwo.imageAlt}
          />
          <Discover
            badgeText={executionStepThree.badgeText}
            title={executionStepThree.title}
            description={executionStepThree.description}
            buttonText={executionStepThree.buttonText}
            buttonLink={executionStepThree.buttonLink}
            image={executionStepThree.image}
            imageAlt={executionStepThree.imageAlt}
          />
          <Assess
            badgeText={executionStepFour.badgeText}
            title={executionStepFour.title}
            description={executionStepFour.description}
            buttonText={executionStepFour.buttonText}
            buttonLink={executionStepFour.buttonLink}
            image={executionStepFour.image}
            imageAlt={executionStepFour.imageAlt}
          />
          <Discover
            badgeText={executionStepFive.badgeText}
            title={executionStepFive.title}
            description={executionStepFive.description}
            buttonText={executionStepFive.buttonText}
            buttonLink={executionStepFive.buttonLink}
            image={executionStepFive.image}
            imageAlt={executionStepFive.imageAlt}
          />
        </section>
      </section>
      <section>
        <AI_Solutions
          badge={aiSolutionsData.badge}
          title={aiSolutionsData.title}
          description={aiSolutionsData.description}
          tabs={aiSolutionsData.tabs}
          technologies={aiSolutionsData.technologies}
        />
      </section>
      <section>
        <Not_Every_Problem />
      </section>
      <section>
        <Execution_Plan
          badgeText="Production-Ready GenAI starts here"
          title="From Prototype to Production"
          description="Turn promising experiments into reliable systems with the guardrails, observability, 
and engineering needed to scale with confidence."
          buttonText="Build Your GenAI System with Us"
          buttonLink="/contact"
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
