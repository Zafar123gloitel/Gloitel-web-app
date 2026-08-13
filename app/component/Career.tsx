"use client"

import { useRef } from "react";
import Assess from "../(what-we-do)/components/Assess";
import PurposeCard from "../(what-we-do)/components/PurposeCard";
import { CardShowcase } from "../../components";
import HeroSection from "../../components/HeroSection";
import StrategyBadge from "../../components/StrategyBadge";
import { BgSquare2 } from "./BgSquare";
import GlowPanel from "./GlowPanel";
import { MiddleSectionHeads } from "./SectionHeads";
import TestimonialCard from "./TestimonialCard";
import ArchitectureCircle from "../uiComponents/ArchitectureCircle";
import { fullStackComplianceData } from "../engineering/full-stack-engineering/data";
import { AiAgentsIndustriesdata, AiExecutionServicesdata, aiInfrastructureData, aiInfrastructureSectionHead, aiRoadmapData, CareerFinalCtadata, diagnoseBeforeDeployData, heroData } from "../career/data";
import Execution_Plan from "../uiComponents/Execution_Plan";
import { TestimonialButton } from "../../components/atoms/button/Button";

export const CareerHero = () => {

    return (
        <section>
            <HeroSection {...heroData} />
        </section>
    );
};

export const AiRoadmapSection = () => {

    return (
        <section id="ai-roadmap">
            <GlowPanel />
            <Assess
                badgeText={aiRoadmapData.badgeText}
                title={aiRoadmapData.title}
                description={aiRoadmapData.description}
                image={aiRoadmapData.image}
                imageAlt={aiRoadmapData.imageAlt}
            />

            <CardShowcase
                items={aiRoadmapData.features}
                showDivider={false}
                showStepBadge={false}
                gridClassName={""}
                cardClassName={""}
                cardHeight={"h-[263px] w-[302px]"}
                titleClassName={"text-[28px]"}
                descriptionClassName={"text-[14px] text-description "}
                iconClassName={""}
            />
        </section>
    );
};

export const AiExecutionServices = () => {


    return (
        <section>
            <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
                <BgSquare2 />
                <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
                    <span>
                        <StrategyBadge text={AiExecutionServicesdata.badgeText} />
                    </span>
                    <MiddleSectionHeads
                        SectionHead={AiExecutionServicesdata.title}
                        SectionSubHead=""
                        SectionDescription={AiExecutionServicesdata.description}
                    />
                </div>
            </div>

            <div className="sm:w-[80%] -mt-10 mx-auto">
                <div className="grid grid-cols-1  gap-4 p-5 ">
                    {AiExecutionServicesdata.services.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4">

                            <PurposeCard

                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                list={item.list}
                                buttonText={item.buttonText}
                                buttonLink={item.buttonLink}
                                viewText={item.viewText}
                                viewLink={item.viewLink}
                            />

                        </div>
                    ))}
                </div>
                <div className="mx-auto text-center mt-5 ">                <a
                    href={"/career"}
                    className="group inline-flex items-center gap-2 text-[11px] text-description transition-colors duration-300 hover:text-title"
                >
                    <span className="text-xl">{"View all open positions"}</span>

                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                        <path
                            d="M5 12H19"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />

                        <path
                            d="M13 6L19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a></div>
            </div>
        </section>
    );
};

export const DiagnoseBeforeDeploy = () => {

    return (
        <section>
            <section className=" overflow-hidden">
                <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
                    <BgSquare2 />
                    <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
                        {/* Badge */}
                        <span>
                            <StrategyBadge text={diagnoseBeforeDeployData.badgeText} />
                        </span>
                        <MiddleSectionHeads
                            SectionHead={diagnoseBeforeDeployData.title}
                            SectionDescription={diagnoseBeforeDeployData.description}
                        />
                    </div>
                    <section className="w-full  sm:w-[90%] mt-20 mx-auto">
                        <CardShowcase
                            showStepBadge
                            showDivider={false}
                            items={diagnoseBeforeDeployData.steps}
                            cardHeight="h-[300px]   max-w-[300px] "
                            gridClassName="gap-y-28"
                            titleClassName="text-[32px] leading-8 "
                            descriptionClassName="text-[18px] leading-7 mt-5  text-description "
                        />
                    </section>
                </div>
            </section>
        </section>
    );
};

export const AiAgentsIndustries = () => {

    const testimonialsRef = useRef(null);

    const scrollTestimonials = (direction) => {

        console.log("first")
        if (!testimonialsRef.current) return;

        const container = testimonialsRef.current;

        // First card ko find karo
        const firstCard = container.firstElementChild;

        if (!firstCard) return;

        // Card width + gap
        const cardWidth = firstCard.getBoundingClientRect().width;
        const gap = 24;

        const scrollAmount = cardWidth + gap;

        container.scrollTo({
            left:
                direction === "right"
                    ? container.scrollLeft + scrollAmount
                    : container.scrollLeft - scrollAmount,
            behavior: "smooth",
        });

    };

    return (
        <section id="industries-we-serve"
        >
            <section className="my-20 w-full">
                {/* Section Heading */}
                <div className="relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center">
                    <BgSquare2 />

                    <div className="-mt-10 mb-52 flex w-full flex-col items-center justify-center gap-6.5 text-center sm:w-1/2 lg:w-1/2">
                        <span>
                            <StrategyBadge
                                text={AiAgentsIndustriesdata.badgeText}
                            />
                        </span>

                        <MiddleSectionHeads
                            SectionHead={AiAgentsIndustriesdata.title}
                            SectionSubHead=""
                            SectionDescription={
                                AiAgentsIndustriesdata.description
                            }
                        />
                    </div>
                </div>

                {/* Testimonials */}
                <div className="relative z-10 -mt-20">
                    {/* Navigation Buttons */}
                    <div className="mb-8 flex justify-end gap-4 px-5 sm:px-10 lg:px-20">
                        {/* LEFT BUTTON */}

                        <TestimonialButton
                            className="h-12 min-w-12"
                            ariaLabel="Previous testimonials"
                            onClick={() => scrollTestimonials("left")}
                        />

                        <TestimonialButton
                            className="h-12 min-w-12"
                            direction="right"
                            ariaLabel="Next testimonials"
                            onClick={() => scrollTestimonials("right")}
                        />
                    </div>

                    {/* Cards Container */}
                    <div
                        ref={testimonialsRef}
                        className="flex gap-5 overflow-x-auto w-[90%] mx-auto "
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {AiAgentsIndustriesdata.testimonials.map((testimonial, index) => (
                            <div
                                key={`${testimonial.name}-${index}`}
                                className="  shrink-0 "
                            >
                                <TestimonialCard
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                    description={testimonial.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    );
};

export const ProductionReadyAi = () => {

    const positions = {
        top: "lg:top-2 lg:left-1/2 lg:-translate-x-1/2",
        leftTop: "lg:left-8 xl:left-24 2xl:left-40 lg:top-52",
        rightTop: "lg:right-8 xl:right-24 2xl:right-40 lg:top-52",
        leftBottom: "lg:left-8 xl:left-24 2xl:left-40 lg:bottom-52",
        bottom: "lg:bottom-2 lg:left-1/2 lg:-translate-x-1/2",
        rightBottom: "lg:right-8 xl:right-24 2xl:right-40 lg:bottom-52",
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
                <BgSquare2 />
                <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
                    <span>
                        <StrategyBadge text={aiInfrastructureSectionHead.badgeText} />
                    </span>
                    <MiddleSectionHeads
                        SectionHead={aiInfrastructureSectionHead.title}
                        SectionDescription={aiInfrastructureSectionHead.description}
                    />
                </div>
            </div>
            <section className="flex items-center  mb-10">
                <ArchitectureCircle
                    data={aiInfrastructureData}
                    image="/images/hrm.png"
                    positions={positions}
                />
            </section>
        </section>
    );
};

export const CareerFinalCta = () => {

    return (
        <section>
            <Execution_Plan
                badgeText={CareerFinalCtadata.badgeText}
                title={CareerFinalCtadata.title}
                description={CareerFinalCtadata.description}
                buttonText={CareerFinalCtadata.buttonText}
                buttonLink={CareerFinalCtadata.buttonLink}
                onclick={() => ({})}
            />
        </section>
    );
};