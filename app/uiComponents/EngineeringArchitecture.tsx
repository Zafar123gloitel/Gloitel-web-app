"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { BgSquare2 } from "../component/BgSquare";
import StrategyBadge from "../../components/StrategyBadge";
import { MiddleSectionHeads } from "../component/SectionHeads";
import { Card, CardDescription, CardIcon, CardTitle } from "../../components";

export type CardPosition =
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export interface ArchitectureCard {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  position: CardPosition;
}

interface EngineeringArchitectureProps {
  image: string;
  imageAlt?: string;
  imageWidth?: string;
  imageHeight?: string;

  cardWidth?: string;

  positions: Record<CardPosition, string>;

  data: ArchitectureCard[];
  titledata: {
    badgeText: string;
    title: string;
    description: string;
  };
}

export default function EngineeringArchitecture({
  image,
  imageAlt = "Architecture",
  imageWidth = "w-[260px]",
  imageHeight = "h-[520px]",
  cardWidth = "w-[290px]",
  positions,
  data,
  titledata,
}: EngineeringArchitectureProps) {
  function CardItem({
    item,
    side,
    cardWidth,
  }: {
    item: ArchitectureCard;
    side: "left" | "right";
    cardWidth: string;
  }) {
    return (
      <div className={`relative ${cardWidth}`}>
        <div className="relative ">
          {side === "left" ? (
            <>
              {/* Blue Dot (Card ke paas) */}
              <div className="absolute left-full top-1/2 ml-14  h-6 w-6 -translate-y-1/2 rounded-full border border-blue-500 bg-blue-900/30" />

              {/* Dashed Line (Image ki taraf) */}
              <div className="absolute left-[calc(100%+5rem)] top-1/2 h-px w-40 border-t border-dashed border-white/20" />
            </>
          ) : (
            <>
              {/* Blue Dot (Card ke paas) */}
              <div className="absolute -z-10 right-full top-1/2 mr-3 h-6 w-6 -translate-y-1/2 rounded-full border border-blue-500 bg-blue-900/30" />

              {/* Dashed Line (Image ki taraf) */}
              <div className="absolute right-[calc(100%+2.25rem)] top-1/2 h-px w-40 border-t border-dashed border-white/20" />
            </>
          )}
          <Card className=" h-[350px] w-[350px] ">
            <CardIcon className="text-blue-500">{item.icon}</CardIcon>
            <CardTitle className=" mt-4 leading-[1.25] text-4xl ">
              {item.title}
            </CardTitle>
            <CardDescription className="text-description  mt-5 leading-6 ">
              {item.description}
            </CardDescription>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <section className=" overflow-hidden w-full">
      <div className="flex flex-col items-center  mt-10 justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-70 w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={titledata.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={titledata.title}
            SectionDescription={titledata.description}
          />
        </div>
      </div>
      <section className="hidden -mt-40 lg:grid grid-cols-[1fr_auto_1fr] items-center gap-20 max-w-[1600px] mx-auto py-24">
        <div className="relative">
          {data
            .filter((item) => item.position.includes("left"))
            .map((item) => (
              <div
                key={item.id}
                className={`absolute ${positions[item.position]}`}
              >
                <CardItem item={item} side="left" cardWidth={cardWidth} />
              </div>
            ))}
        </div>
        {/* Phone */}
        <div className="relative flex justify-center z-10">
          <div className={`relative ${imageWidth} ${imageHeight}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative">
          {data
            .filter((item) => item.position.includes("right"))
            .map((item) => (
              <div
                key={item.id}
                className={`absolute ${positions[item.position]}`}
              >
                <CardItem item={item} side="right" cardWidth={cardWidth} />
              </div>
            ))}
        </div>
      </section>
      {/* ---------------- Mobile & Tablet ---------------- */}
      <div className="flex lg:hidden flex-col -mt-40 p-10 items-center gap-10 w-full">
        {/* Phone Image */}
        <div className={`relative ${imageWidth} ${imageHeight}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
          {data.map((item) => (
            <Card key={item.id} className="w-full min-h-[320px]">
              <CardIcon className="text-blue-500">
                {item.icon}
              </CardIcon>

              <CardTitle className="mt-4 text-3xl text-title">
                {item.title}
              </CardTitle>

              <CardDescription className="mt-5  leading-6">
                {item.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
