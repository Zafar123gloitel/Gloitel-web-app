'use client';
import React from 'react';

export const ProjectShowcase = ({ sections }) => {
  if (!sections) return null;

  return (
    <div className='mt-16 w-full space-y-10'>
      {sections.map((section, index) => (
        <div
          key={index}
          className='flex flex-wrap justify-between gap-8 border-b border-neutral-800 pb-8'
        >
          {/* LEFT SIDE: Title */}
          <div className='w-full lg:w-[48%]'>
            <h2 className='text-title mb-4 text-3xl font-bold'>{section.title}</h2>
          </div>

          {/* RIGHT SIDE: Points */}
          <div className='w-full lg:w-[48%]'>
            <ul className='space-y-4'>
              {section.points?.map((point, i) => (
                <li key={i} className='flex items-start text-gray-400'>
                  <span className='text-title mr-3 text-lg'>•</span>
                  <p className='flex-1 text-base'>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProjectShowcaseSecond = ({ sections }) => {
  if (!sections) return null;

  return (
    <div className='mt-16 w-full space-y-10'>
      {sections.map((section, index) => (
        <div
          key={index}
          className='flex flex-col flex-wrap justify-between gap-8 border-b border-neutral-800 pb-8'
        >
          {/* LEFT SIDE: Title */}
          <div className='w-full'>
            <h2 className='text-title mb-4 text-3xl font-bold'>{section.title}</h2>
          </div>

          {/* RIGHT SIDE: Points */}
          <div className='w-full'>
            <ul className='space-y-4'>
              {section.points?.map((point, i) => (
                <li key={i} className='flex items-start text-gray-400'>
                  <p className='flex-1 text-base'>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProjectShowcaseFourth = ({ sections }) => {
  if (!sections) return null;

  return (
    <div className='mt-24 w-full space-y-16'>
      {sections.map((section, index) => (
        <div
          key={index}
          className='flex flex-wrap justify-between gap-8 border-b border-neutral-800 pb-8'
        >
          {/* LEFT SIDE: Title */}
          <div className='w-full lg:w-[48%]'>
            <h2 className='text-title text-3xl font-semibold md:text-3xl'>{section.title}</h2>
          </div>

          {/* RIGHT SIDE: Points or Paragraph */}
          <div className='w-full lg:w-[48%]'>
            {Array.isArray(section.points) ? (
              <ul className='space-y-4'>
                {section.points.map((point, i) => (
                  <li key={i} className='flex items-start text-gray-400'>
                    <span className='text-title mr-3 text-lg'>•</span>
                    <p className='flex-1 text-base'>
                      {typeof point === 'string' ? point : point.text || point}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-base text-gray-400'>{section.points}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProjectShowcaseThird = ({ sections }) => {
  if (!sections) return null;

  return (
    <div className='mt-16 w-full space-y-10'>
      {sections.map((section, index) => (
        <div
          key={index}
          className='flex flex-wrap justify-between gap-8 border-b border-neutral-800 pb-8'
        >
          {/* TITLE */}
          <div className='w-full'>
            <h2 className='text-title mb-4 text-3xl font-bold'>{section.title}</h2>
          </div>

          {/* CONTENT */}
          <div className='w-full'>
            {Array.isArray(section.points) ? (
              <ul className='space-y-4'>
                {section.points.map((point, i) => (
                  <li key={i} className='flex items-start text-gray-400'>
                    <span className='text-title mr-3 text-lg'>•</span>
                    <p className='flex-1 text-base'>{point}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-base text-gray-400'>{section.points}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
