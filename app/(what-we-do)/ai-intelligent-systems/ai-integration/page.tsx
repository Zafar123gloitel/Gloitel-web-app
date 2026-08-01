"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import HeroSection from "../../components/HeroSection";
import The_Engineering from "../../components/The_Engineering";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import { CardShowcase } from "../../../../components";
import {
  architecturePatternsData,
  deliverablesData,
  engineeringServicesData,
  TechnologiesData,
} from "../../components/data";
import PurposeCard from "../../components/PurposeCard";
import Business from "../../components/Business";
import AI_Solutions from "../../../uiComponents/AI_Solutions";
import Execution_Plan from "../../../uiComponents/Execution_Plan";


const page = () => {
  return (
    <div className="overflow-x-hidden">
      <section>
        <HeroSection
          badgeText="AI Integration"
          title="Connect AI to the Systems that Run Your Business."
          description="Building an AI model is one challenge. Getting it to work reliably inside your product, ERP, CRM, or data platform is another. We handle the engineering that makes AI operational in production."
          image="/images/What-we-do/Rectangle 1.png"
          imageAlt="Hero Image"
          video="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          primaryButton={{
            href: "/contact",
            text: "Discuss Your Integration Needs",
          }}
          secondaryButton={{
            href: "/case-studies",
            text: "Book a Technical Review",
            icon: <ArrowRight className="w-4 h-4" />,
          }}
        />
      </section>
      <section>
        <The_Engineering />
      </section>
      <section>
        <div className="flex flex-col items-center mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="Integration Services" />
            </span>
            <MiddleSectionHeads
              SectionHead="AI Integration Services built for Production"
              SectionSubHead=""
              SectionDescription="From API connectivity and model serving to monitoring, data pipelines, and enterprise platform setup, we build the engineering layer that enables AI systems to operate effectively within real-world business environments."
            />
          </div>
          <section className=" w-full sm:w-[90%] mt-5 px-6 sm:px-0  mx-auto ">
            <CardShowcase
              items={engineeringServicesData}
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
        <div className="flex flex-col items-center justify-center mt-20 mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="Common Integration Patterns" />
            </span>
            <MiddleSectionHeads
              SectionHead="Integration Patterns that Scale with your Business"
              SectionSubHead=""
              SectionDescription="From real-time AI experiences to event-driven automation and retrieval-based systems, we design architectures that align with how your applications and business processes operate."
            />
          </div>
        </div>

        <div className="w-full px-6 sm:px-0 sm:w-[80%] -mt-20 mb-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            {architecturePatternsData.map((item) => (
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
      <section className="w-full">
        <AI_Solutions
          badge={TechnologiesData.badge}
          title={TechnologiesData.title}
          description={TechnologiesData.description}
          tabs={TechnologiesData.tabs}
          technologies={TechnologiesData.technologies}
        />
      </section>
      <section>
        <Business
          badgeText="What We Deliver"
          sectionHead="Deliverables Designed for 
Long-Term Success"
          sectionSubHead=""
          sectionDescription="Every engagement concludes with documented systems, operational safeguards, and implementation assets that help your team manage, scale, and maintain AI capabilities with confidence."
          data={deliverablesData}
        />
      </section>

      <section>
        <Execution_Plan
          badgeText="Production AI Starts with Integration"
          title="Turn AI Capabilities into 
Business Infrastructure"
          description="Deploy AI into products and enterprise systems with the infrastructure, safeguards, 
and monitoring required to scale confidently."
          buttonText="Talk to Our Integration Team"
          buttonLink="/contact"
          onclick={() => ({})}
        />
      </section>
    </div>
  );
};

export default page;
