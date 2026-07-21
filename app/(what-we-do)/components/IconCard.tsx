import { LucideIcon } from "lucide-react";

interface IconCardProps {
  name: string;
  logo?: string;
  icontype?: boolean;
  Icon?: LucideIcon;
}

const IconCard = ({ name, logo, icontype = true, Icon }: IconCardProps) => {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[10px] border border-white/10",

        "bg-[linear-gradient(to_left,#372AAC00_0%,#372AAC33_45%,#1C398E66_100%)]",

        "shadow-[0_22px_40px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out",
        "hover:border-blue-500/80",

        // Top Glow
        "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2",
        "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",

        // Background Glow
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[10px]",
        "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
        "after:opacity-80",

        "w-full max-w-[200px] md:max-w-[200px]",
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

              "inline-flex h-14 w-14 items-center justify-center rounded-sm border border-white/10",
              "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
              //   "transition-all duration-300 ease-out",
              "group-hover:bg-blue-600 ",
              //   "group-hover:scale-[1.04]",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {Icon && <Icon className="h-7 w-7 text-white" />}
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

        <h3 className="mt-8 text-center text-nowrap text-lg text-white">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default IconCard;
