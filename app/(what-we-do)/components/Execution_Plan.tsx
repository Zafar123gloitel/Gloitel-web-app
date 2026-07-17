import React from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import Link from "next/dist/client/link";
import { Download } from "lucide-react";
import { GlowButton } from "../../../components";

const Execution_Plan = () => {
  return (
    <section className="relative isolate overflow-hidden  px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
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
      <div className="mx-auto max-w-7xl ">
        <div className="relative overflow-hidden rounded-[2rem] ">
          <div className="flex justify-center items-center gap-10  px-6 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-14">
            <div className="relative z-10 max-w-2xl text-center">
              <StrategyBadge text="AI Development Services" />
              <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3rem]">
                Define Your AI Roadmap Before You Build
              </h1>

              <p className="mt-6 text-sm leading-7 text-white/45 sm:text-base">
                Most AI initiatives fail before they begin because of
                misdirected effort. We help you identify where AI should be
                applied first so every decision is grounded in business value.
              </p>

              <div className="mt-8  sm:flex-row">
                <GlowButton
                  ButtonText="Book a Strategy Session"
                  Buttonlink="/contact"
                  onClick={() => {}}
                  target="_self"
                  className=""
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
