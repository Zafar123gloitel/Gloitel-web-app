"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import { ArrowRight } from "lucide-react";
import { BgSquare2 } from "../../../component/BgSquare";
import StrategyBadge from "../../../../components/StrategyBadge";
import { MiddleSectionHeads } from "../../../component/SectionHeads";
import GlowPanel from "../../../component/GlowPanel";
import {
  aiSolutionsDataJson,
  validationTestingStep,
  modelDevelopmentSelectionStep,
  dataAssessmentStep,
  featureEngineeringStep,
  baselineBenchmarkingStep,
  outcomesData2,
} from "../../components/data";
import PurposeCard from "../../components/PurposeCard";
import Discover from "../../components/Discover";
import Assess from "../../components/Assess";
import AI_Solutions from "../../components/AI_Solutions";
import Not_Every_Problem from "../../../component/Not_Every_Problem";
import Execution_Plan from "../../components/Execution_Plan";

const page = () => {
  return (
    <div className="overflow-hidden">
      <section>
        <HeroSection
          badgeText="ML & Predictive Analytics"
          title="Models Built for Your Data. Validated on Your Metrics."
          description="General-purpose AI answers general questions. If your business has specific prediction needs - demand forecasting, churn prediction, fraud detection, quality control - you need models trained on your data, optimized for your outcomes."
          image="/images/What-we-do/Rectangle 1.png"
          imageAlt="Hero Image"
          video="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          primaryButton={{
            href: "/contact",
            text: "Discuss Your Prediction Challenge",
          }}
          secondaryButton={{
            href: "/case-studies",
            text: "Explore ML Case Studies",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1316_55059)">
                  <path
                    d="M11.333 15.3664L16.6719 9.99971L11.333 4.63304C11.2848 4.56972 11.2235 4.5175 11.1534 4.47992C11.0832 4.44233 11.0058 4.42026 10.9264 4.41519C10.8469 4.41012 10.7674 4.42218 10.693 4.45054C10.6186 4.47891 10.5512 4.52292 10.4954 4.5796C10.4395 4.63627 10.3964 4.70429 10.3691 4.77905C10.3418 4.85381 10.3309 4.93356 10.3371 5.01291C10.3433 5.09225 10.3665 5.16934 10.4051 5.23895C10.4437 5.30856 10.4968 5.36907 10.5608 5.41637L14.5552 9.44415H3.92743C3.78009 9.44415 3.63878 9.50268 3.53459 9.60687C3.43041 9.71105 3.37188 9.85236 3.37188 9.99971C3.37188 10.147 3.43041 10.2884 3.53459 10.3925C3.63878 10.4967 3.78009 10.5553 3.92743 10.5553H14.5552L10.5608 14.583C10.4569 14.6877 10.3988 14.8292 10.3993 14.9767C10.3999 15.1241 10.4589 15.2653 10.5635 15.3691C10.6682 15.473 10.8097 15.5311 10.9572 15.5306C11.1046 15.53 11.2458 15.471 11.3497 15.3664H11.333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1316_55059">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(0 1 -1 0 20 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
          }}
        />
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text="ML Solutions We Build" />
            </span>
            <MiddleSectionHeads
              SectionHead="Purpose-Built Models. Measurable Outcomes."
              SectionSubHead=""
              SectionDescription="Custom machine learning solutions designed to improve forecasting, automate decisions, detect anomalies, and unlock value from 
complex datasets."
            />
          </div>
        </div>

        <div className="sm:w-[80%] -mt-10 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-5 ">
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
      </section>
      <section className="flex flex-col mt-30 items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Our ML Development Process" />
          </span>
          <MiddleSectionHeads
            SectionHead="Built, Tested, and Validated for Production"
            SectionSubHead=" "
            SectionDescription="Every model follows a rigorous process of data assessment, feature engineering, validation, and monitoring to ensure 
measurable business outcomes."
          />
        </div>
        <section className="w-[80%]  mx-auto">
          <Discover
            badgeText={dataAssessmentStep.badgeText}
            title={dataAssessmentStep.title}
            description={dataAssessmentStep.description}
            buttonText={dataAssessmentStep.buttonText}
            buttonLink={dataAssessmentStep.buttonLink}
            image={dataAssessmentStep.image}
            imageAlt={dataAssessmentStep.imageAlt}
          />
          <Assess
            badgeText={baselineBenchmarkingStep.badgeText}
            title={baselineBenchmarkingStep.title}
            description={baselineBenchmarkingStep.description}
            buttonText={baselineBenchmarkingStep.buttonText}
            buttonLink={baselineBenchmarkingStep.buttonLink}
            image={baselineBenchmarkingStep.image}
            imageAlt={baselineBenchmarkingStep.imageAlt}
          />
          <Discover
            badgeText={featureEngineeringStep.badgeText}
            title={featureEngineeringStep.title}
            description={featureEngineeringStep.description}
            buttonText={featureEngineeringStep.buttonText}
            buttonLink={featureEngineeringStep.buttonLink}
            image={featureEngineeringStep.image}
            imageAlt={featureEngineeringStep.imageAlt}
          />
          <Assess
            badgeText={modelDevelopmentSelectionStep.badgeText}
            title={modelDevelopmentSelectionStep.title}
            description={modelDevelopmentSelectionStep.description}
            buttonText={modelDevelopmentSelectionStep.buttonText}
            buttonLink={modelDevelopmentSelectionStep.buttonLink}
            image={modelDevelopmentSelectionStep.image}
            imageAlt={modelDevelopmentSelectionStep.imageAlt}
          />
          <Discover
            badgeText={validationTestingStep.badgeText}
            title={validationTestingStep.title}
            description={validationTestingStep.description}
            buttonText={validationTestingStep.buttonText}
            buttonLink={validationTestingStep.buttonLink}
            image={validationTestingStep.image}
            imageAlt={validationTestingStep.imageAlt}
          />
        </section>
      </section>
      <section>
        <AI_Solutions
          badge={aiSolutionsDataJson.badge}
          title={aiSolutionsDataJson.title}
          description={aiSolutionsDataJson.description}
          tabs={aiSolutionsDataJson.tabs}
          technologies={aiSolutionsDataJson.technologies}
        />
      </section>
      <section>
        <Not_Every_Problem />
      </section>
      <section>
        <Execution_Plan
          badgeText="Start Your ML Initiative"
          title="Build ML Systems that Measurable Outcomes"
          description="Whether you're exploring your first ML use case or scaling existing models, we help you build solutions that create real operational impact."
          buttonText="Talk to Our ML Team"
          buttonLink="/contact"
          onclick={() => undefined}
        />
      </section>
    </div>
  );
};

export default page;
