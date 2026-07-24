import React from "react";

interface BusinessCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const BusinessCard = ({ icon, title, className }: BusinessCardProps) => {
  return (
    <div>
      <div className="group relative w-[80%] mt-4 mx-auto overflow-hidden rounded-2xl p-[1px]">
        {/* Blue top glow */}
        <div className="absolute left-1/2 top-0 h-[8px] w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[2px]" />

        {/* Card */}
        <div className="relative flex h-full min-h-[66px] gap-5 items-center  rounded-2xl border border-white/10 bg-surface-card p-6 md:p-[32px] transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_0_35px_rgba(37,99,235,.18)]">
          <div
            className={[
              "relative",
              "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[20%] before:-translate-x-1/2",
              "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
              "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
              "after:opacity-80",

              "inline-flex  min-h-14 h-10 min-w-14  items-center justify-center rounded-full border border-white/10",
              "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
              "transition-all duration-300 ease-out",
              "group-hover:bg-blue-600 ",
              "group-hover:scale-[1.04]",

              className,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {icon}
          </div>
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-relaxed text-white/90">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
