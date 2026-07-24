import React, { ReactNode } from "react";

interface IconCardProps {
  name: string;
  logo?: string;
  icontype?: boolean;
  Icon?: ReactNode;
  icon?: ReactNode;
}

const IconCard = ({
  name,
  logo,
  icontype = true,
  Icon,
  icon,
}: IconCardProps) => {
  const iconNode = Icon || icon;
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[10px] border border-white/10",

        "bg-[linear-gradient(114deg, rgba(28, 57, 142, 0.40) 0%, rgba(55, 42, 172, 0.20) 50%, rgba(55, 42, 172, 0.00) 100%)]",

        "shadow-[0_22px_40px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out",
        "hover:border-blue-500/80",

        // Top Glow
        "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2",
        "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",

        // Background Glow
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[10px]",
        "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
        "after:opacity-80",

        "w-full max-w-[250px] ",
      ].join(" ")}
    >
      <div className="relative z-10 flex flex-col items-center p-8">
        {icontype ? (
          <div
            className={[
              "relative",
              "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[40%] before:-translate-x-1/2",
              "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
              "after:pointer-events-none after:absolute after:inset-0 ",
              "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
              "after:opacity-80",

              "inline-flex h-16 w-16 items-center justify-center rounded-sm border border-white/10",
              "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
              "group-hover:bg-blue-600 ",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {iconNode ? (
              typeof iconNode === "function" ? (
                React.createElement(iconNode as any, {
                  className: "h-7 w-7 text-white",
                })
              ) : (
                iconNode
              )
            ) : (
              <div className="h-7 w-7 rounded-full bg-white/20" />
            )}
          </div>
        ) : (
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-700 group-hover:scale-110">
            <img
              src={logo}
              alt={name}
              className="h-full w-full object-contain"
            />
          </div>
        )}

        <h3 className="mt-8 text-center  text-lg ">{name}</h3>
      </div>
    </div>
  );
};

export default IconCard;
