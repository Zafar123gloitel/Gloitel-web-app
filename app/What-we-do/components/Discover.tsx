import Image from "next/image";
import React from "react";
import StrategyBadge from "../../../components/StrategyBadge";
import ProblemCard from "../../../components/ProblemCard";

const Discover = () => {
  return (
    <section className="discover-section m-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:px-14 lg:py-14">
      <div className="discover-text">
        <span style={{ display: "block", marginBottom: "25px" }}>
          <StrategyBadge text="Our Approach" />
        </span>
        <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>Discover</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
          Map workflows, decision points, and value creation/loss across the
          business.
        </p>
        <div className="mt-10 inline-block">
          <ProblemCard title="Current-state workflow map and value leakage analysis" />
        </div>
      </div>
      <div
        className="discover-image"
        style={{
          flex: 1,
          maxWidth: "50%",
          textAlign: "right",
        }}
      >
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
