"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import StrategyBadge from "./StrategyBadge";
import { CardIcon } from "./atoms/card";


export interface HeroCard {
  id: string;
  title: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  icon: string;
}

interface HeroSectionProps {
  badgeText?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  primaryButton: {
    text?: string;
    href?: string;
    icon?: ReactNode;
  };
  secondaryButton: {
    text?: string;
    href?: string;
    icon?: ReactNode;
  };
 heroCards?: HeroCard[];

  cardPositions?: Record<
    HeroCard["position"],
    string
  >;
}

const HeroSection = ({
  badgeText,
  title,
  description,
  image,
  imageAlt = "Hero Image",
  video,
  primaryButton,
  secondaryButton,
  heroCards,
  cardPositions,
}: HeroSectionProps) => {
  return (
    <section className="font-dmSans relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto w-full lg:w-7xl xl:w-[90%]">
        <div className="overflow-hidden rounded-[2rem]">
          <div className="grid min-h-[560px] grid-cols-1 items-center gap-10 px-6 py-10 sm:min-h-[680px] sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-14">
            <div className="max-w-2xl">
              <StrategyBadge text={badgeText} />

              <h1 className="mt-5 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
                {title}
              </h1>

              <p className="mt-6 max-w-xl text-sm text-[16px] leading-7 text-white/45 sm:text-base">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryButton.href || "#"}
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm text-black transition hover:bg-blue-100"
                >
                  {primaryButton.text}
                  {primaryButton.icon}
                </Link>

                <Link
                  href={secondaryButton.href || "#"}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/15"
                >
                  {secondaryButton.text}
                  {secondaryButton.icon}
                </Link>
              </div>
            </div>

            {/* <div className="relative w-full overflow-hidden rounded-[1.4rem]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.4rem]">
                <Image
                  src={image || ""}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div> */}

            <div className="relative aspect-[4/3] z-20 w-full overflow-hidden rounded-[1.4rem]">
              <Image
                src={image || ""}
                alt={imageAlt}
                fill
                className="object-cover"
                unoptimized
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              {/* Floating Cards */}
              {heroCards?.map((card) => (
                <div
                  key={card.id}
                  className={`absolute z-20 ${cardPositions[card.position]} rounded-xl border border-[#1447E6] bg-transparent py-3 px-4 backdrop-blur-sm`}
                >
                  <div className="flex flex-col justify-center   items-center gap-5 text-[#1447E6] ">
                    {/* <CardIcon  type={card.icon} /> */}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: card.icon,
                      }}
                    />

                    <span className="text-sm font-medium text-white">
                      {card.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
