const ComingSoon = () => {
  return (
    <section className="relative flex min-h-[500px] mt-20 w-full items-center justify-center overflow-hidden bg-black px-6">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative z-10 max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </div>

        {/* Small Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-blue-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
          WORK IN PROGRESS
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Coming
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Soon
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
          We’re building something exciting behind the scenes.
          This page is currently under development and will be
          available soon.
        </p>

        {/* Progress Line */}
        <div className="mx-auto mt-10 h-px w-56 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-pulse bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/30">
          Stay tuned
        </p>

      </div>
    </section>
  );
};

export default ComingSoon;