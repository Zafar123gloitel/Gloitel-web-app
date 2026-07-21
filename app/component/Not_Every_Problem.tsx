import React from "react";
import { BgSquare2 } from "./BgSquare";
import StrategyBadge from "../../components/StrategyBadge";
import { MiddleSectionHeads } from "./SectionHeads";
import PurposeCard from "../(what-we-do)/components/PurposeCard";
import { BrainCircuit, CircleAlert, Settings } from "lucide-react";

const Not_Every_Problem = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative  z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-4 -mt-[10rem]  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text="Our Approach" />
          </span>
          <MiddleSectionHeads
            SectionHead="Diagnose Before You Deploy"
            SectionDescription="We run a structured Discovery Sprint - a fixed-scope, 3–4 week engagement that maps your workflows, assesses feasibility, and delivers a prioritized AI roadmap."
          />
        </div>
      </div>

      <div className="flex items-center gap-4 max-w-[80%] mx-auto -mt-10">
        <PurposeCard
          // key={item.id}
          icon={<BrainCircuit className="h-7 w-7" />}
          title={"Machine Learning"}
          description={
            "Best suited for complex prediction problems, pattern recognition, and decision-making scenarios where data-driven intelligence creates measurable business value."
          }
          className=""
        />

        <div
          className={[
            "inline-flex h-16 min-w-16 items-center text-2xl bg-[#1447E633] justify-center rounded-full border border-2 border-white",
            "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          vs
        </div>
        <PurposeCard
          // key={item.id}
          icon={<Settings className="h-7 w-7" />}
          title={"Simpler Alternatives"}
          description={
            "When business rules are clear and outcomes are predictable, simpler solutions often deliver faster implementation, lower costs, and easier maintenance."
          }
          className=""
        />
      </div>
      <div
        className="max-w-[75%] mx-auto mt-4 rounded-2xl flex items-center gap-3 border border-transparent p-3"
        style={{
          background: `
      linear-gradient(#080B18, #080B18) padding-box,
      linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
    `,
        }}
      >
        <span className="inline-flex h-12 min-w-12 items-center text-2xl bg-[#1447E633] justify-center rounded-full ">
          <CircleAlert className="h-5 w-5 text-blue-400" />
        </span>
        <p>
          We've implemented both approaches. The recommendation depends on your
          business goals, data maturity, and operational requirements.,
        </p>
      </div>
    </div>
  );
};

export default Not_Every_Problem;
