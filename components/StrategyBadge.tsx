import React from 'react';

interface StrategyBadgeProps {
  text?: string;
}

export default function StrategyBadge({ text = 'AI Strategy & Consulting' }: StrategyBadgeProps) {
  return (
    <span className='relative mb-10 inline-flex w-fit overflow-hidden rounded-xl p-[2px]'>
      <div className='animate-spin-slow absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_325deg,#1d4ed8_335deg,#2563eb_342deg,#3b82f6_348deg,#60a5fa_354deg,transparent_360deg)] opacity-90 blur-md' />

      <div className='relative z-10 inline-flex items-center gap-3 rounded-[10px] border border-white/20 bg-[#0B1128] px-3 py-2'>
        <span className='h-2 w-2 rounded-full bg-white' />
        <span className='text-title text-[14px] xl:text-[16px]'>{text}</span>
      </div>
    </span>
  );
}
