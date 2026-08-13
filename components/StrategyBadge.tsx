import React from "react";

interface StrategyBadgeProps {
  text?: string;
}

export default function StrategyBadge({
  text = "AI Strategy & Consulting",
}: StrategyBadgeProps) {
  return (
    <span className="relative inline-flex w-fit rounded-xl overflow-hidden p-[2px]">
      <div className="absolute inset-[-200%] animate-spin-slow blur-md opacity-90 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_325deg,#1d4ed8_335deg,#2563eb_342deg,#3b82f6_348deg,#60a5fa_354deg,transparent_360deg)]" />

      <div className="relative z-10 inline-flex items-center gap-3 rounded-[10px] border-2 border-white/20 bg-[#0B1128] px-6 py-3">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="text-[14px] text-title xl:text-[16px]">{text}</span>
      </div>
    </span>
  );
}
