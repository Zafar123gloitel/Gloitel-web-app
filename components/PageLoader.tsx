interface PageLoaderProps {
  label?: string;
  className?: string;
}

export default function PageLoader({ label = 'Loading', className = '' }: PageLoaderProps) {
  return (
    <div
      role='status'
      aria-label={label}
      className={`flex min-h-64 w-full items-center justify-center ${className}`}
    >
      <div className='flex flex-col items-center gap-4 text-[#969696]'>
        <div className='relative h-12 w-12'>
          <span className='absolute inset-0 rounded-full border-2 border-white/10' />
          <span className='absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#5b8def] border-r-[#5b8def]' />
          <span className='absolute inset-[7px] animate-pulse rounded-full bg-[#5b8def]/15' />
        </div>
        <div className='flex items-center gap-1.5' aria-hidden='true'>
          <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-[#5b8def]' />
          <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-[#5b8def] [animation-delay:150ms]' />
          <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-[#5b8def] [animation-delay:300ms]' />
        </div>
        <span className='sr-only'>{label}</span>
      </div>
    </div>
  );
}
