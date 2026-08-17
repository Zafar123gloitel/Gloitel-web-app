import Image from "next/image";
import React from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import ProblemCard from "../../../components/ProblemCard";
import { GlowButton, WhiteButton } from "../../component/Button";
import { ArrowUpIcon } from "lucide-react";
import { ArrowRightIcon } from "../../component/SvgIcon";

interface DiscoverProps {
  badgeText: string;
  title: string;
  subtitle?:string
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
  subtitle,
  description,
  cardTitle,
  buttonText,
  buttonLink,
  image,
  imageAlt = "Section Image",
}: DiscoverProps) => {
  return (
    <section className="discover-section mt-16  md:mt-24.25 overflow-hidden m-auto flex max-w-8xl xl:mx-20 flex-col justify-between gap-33.25 px-6 py-10 sm:px-10 lg:flex-row lg:px-14 lg:py-14">
      {/* Left Content */}
      <div className="discover-text flex-1">
        <span className="mb-6 block">
          <StrategyBadge text={badgeText} />
        </span>

 <span className="flex gap-5">  <h2 className="mb-6 text-5xl sm:text-[48px] text-title font-semibold">{title}</h2>
          <h3 className="mb-6 text-4xl sm:text-[35px] text-description font-semibold">{subtitle}</h3></span>

        <p className=" leading-4 sm:leading-8 text-sm sm:text-[20px] text-description">
          {description}
        </p>

        {cardTitle && (
          <div className="mt-10  inline-block">
            <ProblemCard title={cardTitle} />
          </div>
        )}
        {buttonText && buttonLink && (
          <WhiteButton
            buttonText={buttonText}
            buttonLink={buttonLink}
            icon={<ArrowRightIcon size={20}/>}
            className="mt-4"
          />
        )}
      </div>

      {/* Right Image */}
      <div className="flex-1 lg:max-w-[50%]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] shadow-[0_0_60px_rgba(255,255,255,0.25)]">
          <Image
            src={image}
            alt={imageAlt}
            width={455}
            height={445}
            className="h-full w-full rounded-[24px] object-contain "
            unoptimized
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Discover;
