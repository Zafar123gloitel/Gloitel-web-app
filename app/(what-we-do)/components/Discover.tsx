import Image from "next/image";
import React from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import ProblemCard from "../../../components/ProblemCard";
import { GlowButton, WhiteButton } from "../../component/Button";
import { ArrowUpIcon } from "lucide-react";

interface DiscoverProps {
  badgeText: string;
  title: string;
  description: string;
  cardTitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image: string;
  imageAlt?: string;
}

const Discover = ({
  badgeText,
  title,
  description,
  cardTitle,
  buttonText,
  buttonLink,
  image,
  imageAlt = "Section Image",
}: DiscoverProps) => {
  return (
    <section className="discover-section m-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:px-14 lg:py-14">
      {/* Left Content */}
      <div className="discover-text flex-1">
        <span className="mb-6 block">
          <StrategyBadge text={badgeText} />
        </span>

        <h2 className="mb-4 text-4xl font-semibold">{title}</h2>

        <p className="text-base leading-7 text-[#555]">{description}</p>

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

      {/* Right Image */}
      <div className="flex-1 lg:max-w-[50%]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
          <Image
            src="/images/What-we-do/Rectangle 1.png"
            alt="AI strategy meeting"
            width={455}
            height={445}
            className="rounded-[24px] object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Discover;
