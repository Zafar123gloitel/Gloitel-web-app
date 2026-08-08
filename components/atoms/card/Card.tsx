import { relative } from "path";
import React from "react";

interface StepBadgeProps {
  number: number;
}

export function Card({
  children,
  className = "",
  padding = "p-5 sm:p-6",
  elevated = true,
}) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[28px] border border-white/20",
        "bg-[linear-gradient(114deg, rgba(28, 57, 142, 0.40) 0%, rgba(55, 42, 172, 0.20) 50%, rgba(55, 42, 172, 0.00) 100%)]",
        "shadow-[0_22px_40px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out",
        " hover:border-blue-500/80",
        "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2",
        "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
        "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
        "after:opacity-80",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={[padding, "relative z-10"].filter(Boolean).join(" ")}>
        {children}
      </div>
    </article>
  );
}

export function StepBadge({ number }: StepBadgeProps) {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full  blur-xl scale-125" />

      {/* Rotating Border */}
      <div className="relative inline-flex rounded-full  p-[1.5px] overflow-hidden">
        {/* Button */}
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#FFFFFF4D] bg-[#1447E633] text-3xl font-light text-white shadow-[0_0_35px_rgba(37,99,235,.45)]">
          {number}
        </div>
      </div>
    </div>
  );
}

export function CardIcon({ children, className = "" }) {
  return (
    <div
      className={[
        "relative",
        "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[20%] before:-translate-x-1/2",
        "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
        "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
        "after:opacity-80",

        "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10",
        "text-white shadow-[0_12px_28px_rgba(15,23,42,0.24)]",
        "transition-all duration-300 ease-out",
        "group-hover:bg-blue-600 ",
        "group-hover:scale-[1.04]",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export function CardDivider({ className = "" }) {
  return (
    <div
      className={[
        "h-px w-full bg-gradient-to-r from-transparent via-white/35 to-transparent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export function CardTitle({
  children,
  className = "text-[28px] font-normal leading-8 tracking-[-0.04em] text-white text-left",
}) {
  return (
    <h3 className={["", className].filter(Boolean).join(" ")}>{children}</h3>
  );
}

export function CardDescription({
  children,
  className = "text-[16px]  text-muted  leading-7 text-left",
}) {
  return (
    <p className={["", className].filter(Boolean).join(" ")}>{children}</p>
  );
}

export function CardMeta({ children, className = "" }) {
  return (
    <div
      className={[
        "text-xs uppercase tracking-[0.22em] text-white/40",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
