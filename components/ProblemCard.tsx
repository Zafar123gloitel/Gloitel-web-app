import React from "react";

interface ProblemCardProps {
  title: string;
}

const ProblemCard = ({ title }: ProblemCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-[1px] ">
      {/* Blue top glow */}
      <div className="absolute left-1/2 top-0 h-[8px] w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[2px]" />

      {/* Card */}
      <div className="relative flex h-full min-h-[86px] items-center justify-center rounded-2xl border border-white/10 bg-[#080B18] px-8 text-center transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_0_35px_rgba(37,99,235,.18)]">
        <p className=" text[12px] sm:text-[20px] font-normal leading-relaxed text-white/90">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProblemCard;
