'use client';

export default function GlowPanel() {
  return (
    <div className='feature-fade-mask-bottom relative mt-10 w-full'>
      <div
        className='absolute top-0 bottom-0 left-1/2 -translate-x-1/2'
        style={{
          width: '120%',
          height: '40vh',
          background: 'radial-gradient(circle at center, rgba(0,90,355,0.9), rgba(0,0,0,0) 80%)',
          opacity: 0.7,
        }}
      />
      <div className='h-50'>
        <div className='absolute top-[60px] left-0 z-0 h-60 w-[45%] rotate-[50deg] -skew-y-[50deg] rounded-t-2xl border-t border-l border-white/10 bg-[#050505] sm:left-0 md:left-30 lg:left-55'></div>
        <div className='absolute top-[60px] right-0 z-0 h-60 w-[45%] -rotate-[50deg] skew-y-[50deg] rounded-t-2xl border-t border-r border-white/10 bg-[#050505] sm:right-0 md:right-30 lg:right-55'></div>
      </div>
    </div>
  );
}
