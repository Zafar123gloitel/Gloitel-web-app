"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import StrategyBadge from "../../components/StrategyBadge";
import { MiddleSectionHeads } from "./SectionHeads";

interface ButtonProps {
  text: string;
  href: string;
  icon?: React.ReactNode;
}

interface EngineeringHeroSectionProps {
  badgeText: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: ButtonProps;
  secondaryButton: ButtonProps;
}

const EngineeringHeroSection = ({
  badgeText,
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
}: EngineeringHeroSectionProps) => {
  return (
    <section className="font-dmSans relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto mt-20 w-full lg:w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <StrategyBadge text={badgeText} />

          <MiddleSectionHeads
            SectionHead={title}
            SectionSubHead=""
            SectionDescription={description}
          />
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={primaryButton.href}
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-100"
          >
            {primaryButton.text}
            {primaryButton.icon}
          </Link>

          <Link
            href={secondaryButton.href}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-title transition hover:border-white/20 hover:bg-white/15"
          >
            {secondaryButton.text}
            {secondaryButton.icon}
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative mx-auto mb-16 mt-12 h-[400px] w-[80%] overflow-hidden rounded-2xl bg-white">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="rounded-2xl object-cover"
          unoptimized
        />
      </div>
    </section>
  );
};

export default EngineeringHeroSection;
