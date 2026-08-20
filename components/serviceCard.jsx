// components/ServiceCard.js
import Image from 'next/image';
import Link from 'next/link';
import { HorizontalDivider } from './SectionDivider';

export default function ServiceCard({ image, title, description, buttons = [], badge }) {
  return (
    <div className='flex flex-col justify-between rounded-3xl border-2 border-gray-400/10 from-blue-900/20 via-indigo-800/20 to-transparent p-6 pb-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition'>
      {/* Image */}
      <div className='relative h-64 w-full overflow-hidden rounded-2xl'>
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className='h-full w-full object-cover'
          unoptimized
          loading='lazy'
        />
      </div>

      {/* Content */}
      <div className='mt-5 flex-1'>
        <div className='flex items-center gap-2'>
          <h3 className='text-title text-xl font-semibold'>{title}</h3>
          {badge && (
            <span className='text-title rounded-full bg-blue-600 px-2 py-0.5 text-xs'>{badge}</span>
          )}
        </div>
        <HorizontalDivider />
        <p className='text-md sm:text-md md:text-md mt-3 leading-relaxed text-gray-400'>
          {description}
        </p>
      </div>

      {/* Buttons */}
      {buttons.length > 0 && (
        <div className='mt-6 flex flex-wrap gap-3'>
          {buttons.map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              className={`rounded-md px-5 py-2 text-sm font-medium transition ${
                btn.primary
                  ? 'text-title bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-blue-800'
                  : 'bg-[#1e293b] text-gray-200 hover:bg-[#334155]'
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
