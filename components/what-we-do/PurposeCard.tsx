// import React from "react";
// import { Card, CardIcon } from "../../../components";

// interface purposeCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   className: string;
// }

// const PurposeCard = ({
//   icon,
//   title,
//   description,
//   className,
// }: purposeCardProps) => {
//   return (

// <Card className="flex items-center">
//   <div className="flex w-full items-center justify-center gap-6 px-6 ">

//     {/* Icon */}
//     <CardIcon className="h-14 w-14 shrink-0">
//       {icon}
//     </CardIcon>

//     {/* Content */}
//     <div>
//       <h3 className="text-xl font-semibold text-title md:text-[32px]">
//         {title}
//       </h3>

//       <p className="mt-2 text-[14px] leading-6 text-gray-400 md:text-[16px]">
//         {description}
//       </p>
//     </div>

//   </div>
// </Card>

//   );
// };

// export default PurposeCard;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardIcon } from '@/components';

interface PurposeCardProps {
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  className?: string;
  // Details
  list?: string[];

  // Apply button
  buttonText?: string;
  buttonLink?: string;

  // View details
  viewText?: string;
  viewLink?: string;
}

const PurposeCard = ({
  icon,
  image,
  imageAlt = '',
  title,
  description,
  className,
  list,
  viewText,
  viewLink,
  buttonLink,
  buttonText,
}: PurposeCardProps) => {
  const content = (
    <div>
      <h3 className='text-title text-[24px]'>{title}</h3>

      <p className='text-description mt-2 text-[16px] leading-6'>{description}</p>
    </div>
  );

  const imageBlock = image ? (
    <div className='relative h-[173px] w-[182px] shrink-0 overflow-hidden'>
      <Image
        src={image}
        alt={imageAlt}
        objectFit='cover'
        fill
        className='object-cover'
        unoptimized
        loading='lazy'
      />
    </div>
  ) : null;

  const iconBlock = icon ? <CardIcon className='h-14 w-14 shrink-0'>{icon}</CardIcon> : null;

  const viewBox = viewText ? (
    <Link
      href={viewLink || '#'}
      className='group text-title absolute bottom-5 left-12 inline-flex items-center gap-3 text-[14px] font-normal transition-all duration-300 md:text-[16px]'
    >
      <span>{viewText}</span>

      {/* Arrow */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='transition-transform duration-300 group-hover:translate-x-1'
        aria-hidden='true'
      >
        <path d='M5 12h14' />
        <path d='m13 6 6 6-6 6' />
      </svg>
    </Link>
  ) : null;

  const listBox = list ? (
    <>
      {list.length > 0 && (
        <ul className='w-full shrink-0 space-y-1.5 text-[12px] text-gray-300 md:w-[120px]'>
          {list.map((item, index) => (
            <li key={`${item}-${index}`} className='relative flex items-start gap-2'>
              <span className='mt-[6px] h-1 w-1 shrink-0 rounded-full bg-white/70' />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  ) : null;

  const buttonBox = buttonText ? (
    <>
      {buttonText && (
        <div className='flex shrink-0 flex-col items-start gap-2 md:items-center'>
          {/* Apply Button */}
          {buttonText && (
            <Link
              href={buttonLink || '#'}
              className='group text-title inline-flex min-w-[100px] items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-[11px] font-medium shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]'
            >
              <span>{buttonText}</span>

              <svg
                width='13'
                height='13'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='transition-transform duration-300 group-hover:translate-x-0.5'
              >
                <path
                  d='M7 17L17 7'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
                <path
                  d='M8 7H17V16'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          )}

          {/* View Details */}
          {viewText && (
            <Link
              href={viewLink || '#'}
              className='group text-title hover:text-title inline-flex items-center gap-2 text-[11px] transition-colors duration-300'
            >
              <span>{viewText}</span>

              <svg
                width='15'
                height='15'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='transition-transform duration-300 group-hover:translate-x-1'
              >
                <path d='M5 12H19' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />

                <path
                  d='M13 6L19 12L13 18'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          )}
        </div>
      )}
    </>
  ) : null;

  return (
    <Card className={`flex w-full items-center ${className ?? ''}`}>
      <div className='flex w-full flex-col items-center justify-between gap-6 px-0 sm:flex-row sm:px-6'>
        {image ? (
          // Image case: text left, image right
          <span className='flex w-full flex-col-reverse items-center justify-between gap-6 pb-10 md:flex-row'>
            {content}
            {imageBlock}
            {viewBox}
          </span>
        ) : (
          // Icon case: icon left, text right
          <>
            {iconBlock}
            {content}
            {listBox}
            {buttonBox}
          </>
        )}
      </div>
    </Card>
  );
};

export default PurposeCard;
