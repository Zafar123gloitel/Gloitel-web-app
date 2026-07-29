import React from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import { GlowButton } from "../../../components";

interface ExecutionPlanProps {
  badgeText?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  onclick(data?: any): void;
  videoUrl?: string;
  className?: string;
}

const Execution_Plan = ({
  badgeText,
  title,
  description,
  buttonText,
  buttonLink,
  onclick,
  videoUrl = "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  className = "",
}: ExecutionPlanProps) => {
  return (
    <section
      className={`relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}
    >
      <video
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div className="flex items-center justify-center gap-10 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="relative z-10 max-w-2xl text-center">
              <StrategyBadge text={badgeText} />

              <h1 className="mt-7 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
                {title}
              </h1>

              <p className="mt-6 text-[16px] leading-7 text-white/45 sm:text-base">
                {description}
              </p>

              <div className="mt-8">
                <GlowButton
                  buttonText={buttonText}
                  buttonLink={buttonLink}
                  onClick={onclick}
                  target="_self"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Execution_Plan;
