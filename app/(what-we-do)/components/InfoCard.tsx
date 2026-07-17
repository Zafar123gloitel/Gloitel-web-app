import React, { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  description: string;
  className?: string;
}

const InfoCard = ({ icon, description, className = "" }: InfoCardProps) => {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl",
        "border border-blue-500/30",
        "bg-[#080B18] p-[1px]",
        "w-[20rem]",
        "transition-all duration-300 ease-out",

        // Hover
        "hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.18)]",

        // Top Glow
        "before:pointer-events-none before:absolute before:left-1/2 before:top-0",
        "before:h-[2px] before:w-[60%] before:-translate-x-1/2",
        "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
        "before:transition-all before:duration-300",
        "hover:before:via-red-500",

        // Background Glow
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl",
        "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.06),transparent_26%)]",
        "group-hover:after:bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(248,113,113,0.08),transparent_26%)]",

        className,
      ].join(" ")}
    >
      <div className="relative z-10  min-h-[86px] items-center gap-5 rounded-2xl bg-[#080B18] px-8 py-5">
        {/* Icon */}
        <div
          className={[
            "relative",
            "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[20%] before:-translate-x-1/2",
            "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
            "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
            "after:opacity-80",

            "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10",
            "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
            "transition-all duration-300 ease-out",
            "group-hover:bg-red-600 ",
            "group-hover:before:via-red-500",
            "group-hover:scale-[1.04]",
          ].join(" ")}
        >
          {icon}
        </div>

        {/* Description */}
        <p className="text-[20px] mt-5 leading-[33px] text-white/90">
          {description}
        </p>
      </div>
    </article>
  );
};

export default InfoCard;
