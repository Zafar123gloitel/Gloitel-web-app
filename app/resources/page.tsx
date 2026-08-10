"use client"

import React from 'react'
import HeroSection from '../../components/HeroSection'
import { heroCards } from './data'
import Assess from '../(what-we-do)/components/Assess';
import { aiPilotData } from '../(what-we-do)/ai-intelligent-systems/data';
import GlowPanel from '../component/GlowPanel';
import { BgSquare2 } from '../component/BgSquare';
import StrategyBadge from '../../components/StrategyBadge';
import { mobileProcessData, mobileProcessSectionHead } from '../engineering/mobile-engineering/data';
import { MiddleSectionHeads } from '../component/SectionHeads';
import PurposeCard from '../(what-we-do)/components/PurposeCard';
import { caseStudies } from '../(what-we-do)/components/data';
import ImageCard from '../component/ImageCard';
import { Card, CardIcon, CardTitle } from '../../components';
import Execution_Plan from '../uiComponents/Execution_Plan';



const page = () => {

    const cardPositions = {
        "top-left": "left-4 top-4",
        "top-right": "right-4 top-4",
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <HeroSection
                    badgeText='ekfjiok'
                    image="/images/What-we-do/Rectangle 1.png"
                    video="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
                    imageAlt="AI and intelligent systems"
                    title='Welcome to our website'
                    description='
                This is a sample description for the hero section. You can customize it as per your needs.
                '
                    primaryButton={{
                        text: 'Get Started',
                        href: '/get-started',
                    }}
                    secondaryButton={{
                        text: 'Learn More',
                        href: '/learn-more',
                    }}
                    cardPositions={cardPositions}
                    heroCards={heroCards}
                />

            </div>
            <section className="font-dmSans relative isolate overflow-hidden -mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <GlowPanel />
                <Assess
                    badgeText={aiPilotData.badgeText}
                    title={aiPilotData.title}
                    description={aiPilotData.description}
                    image={aiPilotData.image}
                    imageAlt={aiPilotData.imageAlt}
                />
            </section>
            <section className='mb-10' >
                <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh]  relative z-10">
                    <BgSquare2 />
                    <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
                        {/* Badge */}
                        <span>
                            <StrategyBadge text={mobileProcessSectionHead.badgeText} />
                        </span>
                        <MiddleSectionHeads
                            SectionHead={mobileProcessSectionHead.title}
                            SectionSubHead=""
                            SectionDescription={mobileProcessSectionHead.description}
                        />
                    </div>
                </div>

                <div className=" md:px-10 -mt-10 mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-5 ">
                        {mobileProcessData.map((item) => (
                            <PurposeCard
                                key={item.id}
                                image={"/images/megananu.png"}
                                imageAlt={item.title}
                                view='View Case Study'
                                title={item.title}
                                description={item.description}
                                className=""
                            />
                        ))}
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center mb-10 mt-20 justify-center mx-auto min-h-[60vh] relative z-10">
                <BgSquare2 />
                <div className="flex flex-col gap-6.5 -mt-10 w-full sm:w-1/2 lg:w-1/2 text-center">
                    {/* Badge */}
                    <span>
                        <StrategyBadge text="Case Study Highlights" />
                    </span>
                    <MiddleSectionHeads
                        SectionHead="Real Results from Production AI Deployments."
                        SectionSubHead="  "
                        SectionDescription="Explore how organizations across healthcare, financial services, and e-commerce are using production-ready AI systems to improve efficiency, reduce costs, and accelerate business outcomes."
                    />
                </div>
                <section className="mt-20 p-5 mx-auto flex flex-wrap justify-center gap-3">
                    {caseStudies.map((card) => (
                        <ImageCard
                            key={card.id}
                            className={"w-[21rem]"}
                            padding={"px-4"}
                            cardtitle={card.title}
                            carddescription={card.description}
                            buttintext={card.cta}
                            buttonurl={card.href}
                            buttonicon={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14" />
                                <path d="m13 6 6 6-6 6" />
                            </svg>}
                            image={card.image}
                        />
                    ))}
                </section>
            </div>
            <section className='mb-10' >
                <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh]  relative z-10">
                    <BgSquare2 />
                    <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
                        {/* Badge */}
                        <span>
                            <StrategyBadge text={mobileProcessSectionHead.badgeText} />
                        </span>
                        <MiddleSectionHeads
                            SectionHead={mobileProcessSectionHead.title}
                            SectionSubHead=""
                            SectionDescription={mobileProcessSectionHead.description}
                        />
                    </div>
                </div>

                <div className="md:px-10 -mt-10 mx-auto">
                    <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 p-5">
                        {mobileProcessData.map((item) => (
                            <div key={item.id} className="flex border p-2 justify-center  border-[#c2c2c260] rounded-2xl items-start gap-3">
                                <CardIcon className='h-10 w-10 ' >{item.icon}</CardIcon>
                                <CardTitle className=" text-md md:text-lg text-white ">{item.title}</CardTitle>
                                <CardIcon>{item.icon}</CardIcon>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Execution_Plan
                badgeText="Production-Ready GenAI starts here"
                title="From Prototype to Production"
                description="Turn promising experiments into reliable systems with the guardrails, observability, 
and engineering needed to scale with confidence."
                buttonText="Build Your GenAI System with Us"
                buttonLink="/contact"
                onclick={() => ({})}
            />
        </div>
    )
}

export default page