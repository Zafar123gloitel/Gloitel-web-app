import React from "react";

interface StrategyBadgeProps {
  text?: string;
}

export default function StrategyBadge({
  text = "AI Strategy & Consulting",
}: StrategyBadgeProps) {
  return (
    <div className="relative inline-flex rounded-xl p-[2px] overflow-hidden">
      <div className="absolute inset-[-200%] animate-spin-slow blur-md opacity-90 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_325deg,#1d4ed8_335deg,#2563eb_342deg,#3b82f6_348deg,#60a5fa_354deg,transparent_360deg)]" />

      <div className="relative z-10 inline-flex items-center gap-3 rounded-[10px] bg-[#0B1128] px-6 py-3 border border-white/20 border-2">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="text-white">{text}</span>
      </div>
    </div>
  );
}
