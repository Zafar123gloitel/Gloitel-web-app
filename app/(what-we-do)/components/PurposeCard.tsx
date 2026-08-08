import React from "react";

interface purposeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className: string;
}

const PurposeCard = ({
  icon,
  title,
  description,
  className,
}: purposeCardProps) => {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[16px] border border-white/20",
        "bg-[linear-gradient(114deg, rgba(28, 57, 142, 0.40) 0%, rgba(55, 42, 172, 0.20) 50%, rgba(55, 42, 172, 0.00) 100%)]",
        "shadow-[0_22px_40px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out",
        " hover:border-blue-500/80",
        "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2",
        "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[16px]",
        "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
        "after:opacity-80",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[2px] w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="flex items-center p-5 gap-6">
        {/* Icon */}
        <div
          className={[
            "relative",
            "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[20%] before:-translate-x-1/2",
            "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
            "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
            "after:opacity-80",

            "inline-flex h-14 min-w-14 items-center justify-center rounded-full border border-white/20",
            "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
            "transition-all duration-300 ease-out",
            "group-hover:bg-blue-600 ",
            "group-hover:scale-[1.04]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl md:text-[32px]  font-semibold text-white">
            {title}
          </h3>

          <p className="text-[14px] md:text-[16px] mt-2 leading-6 text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurposeCard;
