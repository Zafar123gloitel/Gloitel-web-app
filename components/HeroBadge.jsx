export const HeroBadge = ({ HomeHeroBadge, HomeSubHeroBadge }) => {
  return (
    <div className='mx-auto mb-6 sm:mx-auto lg:mx-0'>
      <span className='relative inline-flex w-fit overflow-hidden rounded-lg p-[2px]'>
        {/* Rotating gradient border */}
        <div className='animate-spin-slow absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_325deg,#1d4ed8_335deg,#2563eb_342deg,#3b82f6_348deg,#60a5fa_354deg,transparent_360deg)] opacity-90 blur-md' />

        {/* Actual badge content */}
        <div className='relative z-10 flex items-center gap-2 rounded-[10px] bg-white/5 px-1 py-1 text-xs text-gray-300 backdrop-blur-md sm:items-center sm:gap-3 sm:text-xs'>
          {/* Main Badge */}
          <div className='text-title inline-block rounded-lg bg-blue-600 px-3 py-2 font-medium shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'>
            {HomeHeroBadge}
          </div>

          {/* Sub Badge / Label */}
          <span className='mr-2 text-sm text-gray-300 sm:text-base'>{HomeSubHeroBadge}</span>
        </div>
      </span>
    </div>
  );
};
export const HeroBadge2 = ({ HomeHeroBadge, HomeSubHeroBadge }) => {
  return (
    <div className='mb-6'>
      <div className='flex items-center gap-2 rounded-lg bg-white/5 px-1.5 py-1.5 text-sm text-gray-300 ring-1 ring-white/10 backdrop-blur-md sm:items-center sm:gap-3 sm:text-sm lg:text-[12px]'>
        {/* Main Badge */}
        <div className='text-title inline-block rounded-lg bg-blue-600 px-2 py-1 font-semibold shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'>
          {HomeHeroBadge}
        </div>

        {/* Sub Badge / Label */}
        <span className='text-sm text-gray-300 sm:text-sm lg:text-[15px]'>{HomeSubHeroBadge}</span>
      </div>
    </div>
  );
};
