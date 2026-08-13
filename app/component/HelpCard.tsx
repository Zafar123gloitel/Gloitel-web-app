"use client";

import React, { useState } from "react";
import Image from "next/image";

import { BgSquare2 } from "./BgSquare";
import StrategyBadge from "../../components/StrategyBadge";
import { MiddleSectionHeads } from "./SectionHeads";
import {
    Card,
    CardDescription,
    CardIcon,
    CardTitle,
} from "../../components";

interface SocialIcon {
    id: number;
    type: string;
}

interface HelpCardItem {
    id: number;
    image: string;
    imageAlt?: string;
    heading: string;
    subheading: string;
    cardDescription: string;
    icons: SocialIcon[];
}

interface HelpCardProps {
    badgeText: string;
    title: string;
    description: string;

    // Tabs
    tabs: string[];

    // Cards grouped by tab
    data: Record<string, HelpCardItem[]>;
}

const HelpCard = ({
    badgeText,
    title,
    description,
    tabs,
    data,
}: HelpCardProps) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activeTab = tabs[activeTabIndex];

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index);
    };

    // LinkedIn Icon
    const LinkedInIcon = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="35"
                viewBox="0 0 37 35"
                fill="none"
            >
                <path
                    d="M7.59387 3.79883C7.59337 4.80584 7.19285 5.77141 6.48043 6.48311C5.76801 7.19482 4.80205 7.59437 3.79504 7.59387C2.78803 7.59336 1.82246 7.19285 1.11075 6.48043C0.399047 5.76801 -0.000503029 4.80205 4.75303e-07 3.79504C0.00050398 2.78803 0.40102 1.82246 1.11344 1.11075C1.82586 0.399047 2.79182 -0.000503029 3.79883 4.75303e-07C4.80584 0.00050398 5.77141 0.40102 6.48312 1.11344C7.19482 1.82586 7.59437 2.79182 7.59387 3.79883ZM7.70778 10.4055H0.113908V34.1743H7.70778V10.4055ZM19.7061 10.4055H12.1502V34.1743H19.6301V21.7014C19.6301 14.753 28.6858 14.1075 28.6858 21.7014V34.1743H36.1848V19.1195C36.1848 7.40592 22.7816 7.84257 19.6301 13.5949L19.7061 10.4055Z"
                    fill="white"
                />
            </svg>
        );
    };

    return (
        <section className="relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center">
            {/* Background */}
            <BgSquare2 />

            {/* Heading */}
            <div className="relative flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2">
                <span>
                    <StrategyBadge text={badgeText} />
                </span>

                <MiddleSectionHeads
                    SectionHead={title}
                    SectionDescription={description}
                />
            </div>

            {/* ================= TABS ================= */}
            <div className="relative mt-14 flex w-full justify-center px-4">
                <div
                    className="
            flex
            w-[90%]
            max-w-6xl
            gap-4
            overflow-x-auto
            pb-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
                >
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => handleTabClick(index)}
                            className={`
                shrink-0
                whitespace-nowrap
                rounded-lg
                border
                px-5
                py-2.5
                text-sm
                transition-all
                duration-300

                ${activeTabIndex === index
                                    ? "border-blue-500 bg-blue-600 text-title shadow-[0_0_20px_rgba(37,99,235,.35)]"
                                    : "border-white/15 bg-transparent text-description hover:border-blue-500"
                                }
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* ================= DESKTOP CARDS ================= */}
            <div className="relative mt-14 hidden w-full overflow-hidden lg:block">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                        transform: `translateX(-${activeTabIndex * 100}%)`,
                    }}
                >
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className="min-w-full shrink-0 px-5"
                        >
                            <div className="flex flex-wrap items-stretch justify-center gap-5">
                                {data[tab]?.map((card) => (
                                    <Card
                                        key={card.id}
                                        className="w-full max-w-[410px]"
                                    >
                                        <div className="flex min-h-[400px] flex-col items-center justify-center overflow-hidden p-6">

                                            {/* Logo */}
                                            <div className="flex h-[240px] w-[240px] items-center justify-center rounded-full bg-white shadow-[0_0_45px_rgba(37,99,235,0.45)]">
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    src={card.image}
                                                    alt={card.imageAlt}
                                                    className="h-full w-full rounded-full object-contain p-8"
                                                    unoptimized
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="mt-6 flex flex-col items-center gap-4 text-center">
                                                <CardTitle className="text-3xl">
                                                    {card.heading}
                                                </CardTitle>

                                                <CardTitle className="text-xl text-blue-600">
                                                    {card.subheading}
                                                </CardTitle>

                                                <CardDescription>
                                                    {card.cardDescription}
                                                </CardDescription>
                                            </div>
                                            {/* Icons */}
                                            <div className="mt-6 flex items-center justify-center gap-4">
                                                {card.icons.map((icon) => (
                                                    <CardIcon key={icon.id}>
                                                        {icon.type === "linkedin" && (
                                                            <LinkedInIcon />
                                                        )}
                                                    </CardIcon>
                                                ))}
                                            </div>

                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    ))}
                </div>

            </div>

            {/* ================= MOBILE CARDS ================= */}
            <div className="mt-14 rounded-3xl border-white/10 bg-surface-2 p-4 lg:hidden">
                <div
                    key={activeTab}
                    className="grid animate-fadeIn grid-cols-1 justify-items-center gap-4 sm:grid-cols-2"
                >
                    {data[activeTab]?.map((card) => (
                        <Card
                            key={card.id}
                            className="w-full max-w-[410px]"
                        >
                            <div className="flex min-h-[450px] flex-col items-center justify-center overflow-hidden p-6">
                                {/* Image */}
                                <div className="flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full bg-white">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src={card.image}
                                        alt={card.imageAlt || card.heading}
                                        className="h-full w-full rounded-full object-cover p-3 shadow-xl"
                                        unoptimized
                                    />
                                </div>

                                {/* Content */}
                                <div className="mt-6 flex flex-col items-center gap-4 text-center">
                                    <CardTitle className="text-3xl">
                                        {card.heading}
                                    </CardTitle>

                                    <CardTitle className="text-xl text-blue-600">
                                        {card.subheading}
                                    </CardTitle>

                                    <CardDescription>
                                        {card.cardDescription}
                                    </CardDescription>
                                </div>

                                {/* Icons */}
                                <div className="mt-10 flex items-center justify-center gap-4">
                                    {card.icons.map((icon) => (
                                        <CardIcon key={icon.id}>
                                            {icon.type === "linkedin" && (
                                                <LinkedInIcon />
                                            )}
                                        </CardIcon>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpCard;