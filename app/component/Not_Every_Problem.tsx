import React from "react";
import { BgSquare2 } from "./BgSquare";
import StrategyBadge from "../../components/StrategyBadge";
import { MiddleSectionHeads } from "./SectionHeads";
import PurposeCard from "../(what-we-do)/components/PurposeCard";
import { BrainCircuit, CircleAlert, Settings } from "lucide-react";

interface NotEveryProblemProps {
  badgeText: string;
  heading: string;
  description: string;
  cards: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  bottomText: string;
}

const Not_Every_Problem = ({
  badgeText,
  heading,
  description,
  cards,
  bottomText,
}: NotEveryProblemProps) => {
  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative  z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5  -mt-[10rem]  w-full sm:w-1/2 lg:w-1/2 text-center">
          {/* Badge */}
          <span>
            <StrategyBadge text={badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={heading}
            SectionDescription={description}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 max-w-[80%] mx-auto -mt-20 lg:-mt-10">
        {cards.map((item, index) => (
          <React.Fragment key={item.id}>
            <PurposeCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              className=""
            />

            {index !== cards.length - 1 && (
              <div
                className={[
                  "inline-flex h-16 min-w-16 items-center justify-center text-title rounded-full",
                  "bg-[#1447E633] text-2xl border border-white",
                ].join(" ")}
              >
                vs
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        className="max-w-[75%] mx-auto mt-10 rounded-2xl flex items-center gap-3 border border-transparent p-3"
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
        <p className="text-title">{bottomText}</p>
      </div>
    </div>
  );
};

export default Not_Every_Problem;
