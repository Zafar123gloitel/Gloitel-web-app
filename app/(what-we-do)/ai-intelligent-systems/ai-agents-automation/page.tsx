"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import ProblemCard from "../../../../components/ProblemCard";
import Image from "next/image";
import { CardShowcase } from "../../../../components";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import GlowPanel from "../../../component/GlowPanel";
import Strategy from "../../components/Strategy";
import IconCard from "../../../../components/card-showcase/IconCard";
import AI_Solutions from "../../../uiComponents/AI_Solutions";
import Execution_Plan from "../../../uiComponents/Execution_Plan";
import { Agent_Projects, ai_agents_designed, aiAgentTechnologyData, ApproachStepFive, ApproachStepFour, ApproachStepOne, ApproachStepThree, ApproachStepTwo, industries } from "./data";

const page = () => {
  const problems = [
    {
      title:
        "Browse the web, query databases, call APIs, and write/execute code",
    },
    {
      title:
        "Break a complex goal into sub-tasks and orchestrate them in sequence",
    },
    {
      title:
        "YDecide when to ask a human for input and when to proceed autonomously",
    },
    {
      title:
        "Maintain long-term memory across sessions and learn from feedback",
    },
  ];

  return (
    <div className="overflow-hidden">
      <section>
        <HeroSection
          badgeText="AI Agents & Automation"
          title="AI Agents that Take Action, Not Just Instructions."
          description="We design and deploy production-ready AI agents that can make decisions, interact with systems, and automate complex workflows with minimal human intervention."
          image="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613040/Gloitel/what%20we%20do/AI_Agents_Automation_pjmzaj.png"
          imageAlt="Hero Image"
          video="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          primaryButton={{
            href: "/contact",
            text: "Discuss Your Automation Use Case",
          }}
          secondaryButton={{
            href: "/case-studies",
            text: "Explore Agentic AI",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            ),
          }}
        />
      </section>

      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full -mt-10  gap-6.5 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="How AI Agents Work" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents that Think through Tasks and Execute them"
              SectionSubHead=" "
              SectionDescription="Unlike traditional AI assistants, agents can interact with systems, break 
down complex objectives, and take actions across multiple steps to 
achieve outcomes."
            />
          </div>
        </div>
        <div className="relative h-[400px] mb-16 overflow-hidden w-[80%]  mx-auto">
          <Image
            src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613039/Gloitel/what%20we%20do/How_AI_Agents_Work_zed02c.png"
            alt="Problem"
            fill
            className="object-cover rounded-2xl h-full w-full  bg-white"
          />
        </div>

        <section className="grid grid-cols-1 mb-10  gap-6 md:grid-cols-2 w-[80%] mx-auto ">
          {problems.map((item, index) => (
            <ProblemCard key={index} title={item.title} />
          ))}
        </section>
      </section>
      <section className="h-full ">
        <div className="flex flex-col mt-40 items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="What We Build" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents Designed for Real Business Workflows"
              SectionSubHead=""
              SectionDescription="We design and build production-ready generative AI solutions - from intelligent assistants and document processing systems to RAG platforms, workflow automation, and private LLM deployments."
            />
          </div>
          <section className="w-[90%] mt-20 mx-auto ">
            <CardShowcase
              items={ai_agents_designed}
              showDivider={true}
              showStepBadge={false}
              cardClassName="max-h-[511px] max-w-[350px]  "
              gridClassName="h-full"
              titleClassName="text-[28px] "
              descriptionClassName="text-[16px] leading-6 mt-5 text-description "
              iconClassName=""
            />
          </section>
        </div>
      </section>
      <section className="my-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full mb-52 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="Industries We Serve" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Agents Driving Results Across Industries."
              SectionSubHead=" "
              SectionDescription="From finance and healthcare to legal and real estate, we deploy AI agents that automate workflows, streamline operations, and support 
faster decision-making."
            />
          </div>
        </div>

        <div className="flex flex-wrap -mt-20 gap-6 justify-center">
          {industries.map((item) => (
            <IconCard
              key={item.id}
              name={item.name}
              icontype={true}
              Icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section>
        <AI_Solutions
          badge={aiAgentTechnologyData.badge}
          title={aiAgentTechnologyData.title}
          description={aiAgentTechnologyData.description}
          tabs={aiAgentTechnologyData.tabs}
          technologies={aiAgentTechnologyData.technologies}
        />
      </section>
      <section className="flex flex-col mt-20 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="gap-6.5 flex flex-col -mt-10  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="How We Approach Agent Design" />
          </span>
          <MiddleSectionHeads
            SectionHead="A Structured Approach to Building Production-Ready AI Agents."
            SectionSubHead=""
            SectionDescription="Every successful agent starts with a clear process. From workflow 
            analysis and tool design to testing and supervision, we follow a structured methodology to build agents that perform in real-world environments."
          />
        </div>
        <section className="w-full md:w-[80%]  mx-auto">
          <Discover
            badgeText={ApproachStepOne.badgeText}
            title={ApproachStepOne.title}
            description={ApproachStepOne.description}
            buttonText={ApproachStepOne.buttonText}
            buttonLink={ApproachStepOne.buttonLink}
            image={ApproachStepOne.image}
            imageAlt={ApproachStepOne.imageAlt}
          />
          <Assess
            badgeText={ApproachStepTwo.badgeText}
            title={ApproachStepTwo.title}
            description={ApproachStepTwo.description}
            buttonText={ApproachStepTwo.buttonText}
            buttonLink={ApproachStepTwo.buttonLink}
            image={ApproachStepTwo.image}
            imageAlt={ApproachStepTwo.imageAlt}
          />
          <Discover
            badgeText={ApproachStepThree.badgeText}
            title={ApproachStepThree.title}
            description={ApproachStepThree.description}
            buttonText={ApproachStepThree.buttonText}
            buttonLink={ApproachStepThree.buttonLink}
            image={ApproachStepThree.image}
            imageAlt={ApproachStepThree.imageAlt}
          />
          <Assess
            badgeText={ApproachStepFour.badgeText}
            title={ApproachStepFour.title}
            description={ApproachStepFour.description}
            buttonText={ApproachStepFour.buttonText}
            buttonLink={ApproachStepFour.buttonLink}
            image={ApproachStepFour.image}
            imageAlt={ApproachStepFour.imageAlt}
          />
          <Discover
            badgeText={ApproachStepFive.badgeText}
            title={ApproachStepFive.title}
            description={ApproachStepFive.description}
            buttonText={ApproachStepFive.buttonText}
            buttonLink={ApproachStepFive.buttonLink}
            image={ApproachStepFive.image}
            imageAlt={ApproachStepFive.imageAlt}
          />
        </section>
      </section>
      <section>
        <GlowPanel />
        <Strategy
          cardData={Agent_Projects}
          SectionHead={"The Challenges that Derail Agent Initiatives"}
          SectionSubHead={""}
          SectionDescription={
            "Building AI agents is not just about models and automation. Without the right processes, oversight, observability, and safeguards, even promising agent initiatives can struggle to deliver results in production."
          }
          StrategyBadgeText={"What Makes Agent Projects Fail"}
        />
      </section>
      <section>
        <Execution_Plan
          badgeText="Move Beyond Reactive AI"
          title="Deploy Agents that 
Think, Decide, and Act"
          description="From multi-agent orchestration to autonomous workflow execution, we design 
AI systems that operate reliably, securely, and with the right level of human oversight."
          buttonText="Design Your Agent System with Us"
          buttonLink="/contact"
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
