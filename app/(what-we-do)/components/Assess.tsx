import Image from "next/image";
import React from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import ProblemCard from "../../../components/ProblemCard";
import { WhiteButton } from "../../component/Button";
import { ArrowUpIcon } from "lucide-react";

interface AssessProps {
  badgeText: string;
  title: string;
  description: string;
  cardTitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image: string;
  imageAlt?: string;
}

const Assess = ({
  badgeText,
  title,
  description,
  cardTitle,
  buttonText,
  buttonLink,
  image,
  imageAlt = "Section Image",
}: AssessProps) => {
  return (
    <section className="discover-section lg:flex-row-reverse mt-16  md:mt-24.25 overflow-hidden m-auto flex max-w-7xl flex-col justify-between gap-33.25 px-6 py-10 sm:px-10  lg:px-14 lg:py-14">
      {/* Content */}
      <div className="flex-1">
        <span className="mb-6 block">
          <StrategyBadge text={badgeText} />
        </span>

        <h2 className="mb-6 text-5xl sm:text-[48px] font-semibold">{title}</h2>

        <p className="leading-4 sm:leading-8 text-sm sm:text-[20px] text-muted">
          {description}
        </p>

        {cardTitle && (
          <div className="mt-10 inline-block">
            <ProblemCard title={cardTitle} />
          </div>
        )}
        {buttonText && buttonLink && (
          <WhiteButton
            buttonText={buttonText}
            buttonLink={buttonLink}
            icon={<ArrowUpIcon className="ml-2 h-4 w-4 rotate-90" />}
            className="mt-4"
          />
        )}
      </div>

      {/* Image */}
      <div className="flex-1 lg:max-w-[50%]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
          <Image
            src={image}
            alt={imageAlt}
            width={455}
            height={445}
            className="h-full w-full rounded-[24px] object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Assess;
