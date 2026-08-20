import React from 'react';
import { CardIcon } from '@/components';

export const MiddleSectionHeads = ({
  SectionHead = '',
  SectionSubHead = '',
  SectionDescription = '',
  sectionIocn = '',
  headingTag = 'h2',
  subHeadingTag = 'h3',
}) => {
  const HeadingTag = headingTag;
  const SubHeadingTag = subHeadingTag;

  return (
    <div className='mx-auto mb-8 flex max-w-4xl flex-col items-center px-4 text-center md:px-0 lg:px-0'>
      {/* Section Head */}
      <HeadingTag className='text-title text-3xl leading-15.75 font-medium sm:text-3xl md:text-4xl xl:text-[48px]'>
        {SectionHead}
      </HeadingTag>

      {/* Section Sub Head */}
      {SectionSubHead && (
        <SubHeadingTag className='text-3xl leading-15.75 font-medium text-gray-400 sm:text-3xl md:text-3xl xl:text-[48px]'>
          {SectionSubHead}
        </SubHeadingTag>
      )}

      {sectionIocn && <CardIcon>{sectionIocn}</CardIcon>}

      {/* Description */}
      <div className='mt-4 w-full sm:mt-6.5 sm:w-11/12 md:w-10/12 lg:w-[35vw]'>
        <p className='md:text-md text-sm leading-6 text-gray-400 sm:text-base lg:text-[16px]'>
          {SectionDescription}
        </p>
      </div>
    </div>
  );
};

export const LeftSectionHeads = ({
  SectionHead,
  SectionSubHead,
  SectionDescription,
  headingTag = 'h2',
  subHeadingTag = 'h3',
}) => {
  const HeadingTag = headingTag;
  const SubHeadingTag = subHeadingTag;

  return (
    <div className='flex max-w-4xl flex-col items-start px-2 text-left sm:px-2 lg:px-0'>
      {/* Section Head */}
      <HeadingTag className='text-title text-3xl leading-15.75 font-medium sm:text-4xl lg:text-5xl'>
        {SectionHead}
      </HeadingTag>

      {/* Section Sub Head */}
      {SectionSubHead && (
        <SubHeadingTag className='mt-2 text-3xl font-medium text-gray-400 sm:text-4xl lg:text-5xl'>
          {SectionSubHead}
        </SubHeadingTag>
      )}

      {/* Description */}
      <p className='lg:text-md mt-4 text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base'>
        {SectionDescription}
      </p>
    </div>
  );
};

export const LeftSectionHead2 = ({ SectionHead, SectionSubHead }) => {
  return (
    <div>
      <h3 className='text-title text-3xl leading-15.75 font-medium sm:text-4xl lg:text-5xl'>
        {SectionHead}
      </h3>
      <h3 className='mt-2 text-2xl leading-15.75 font-medium text-gray-400 sm:text-3xl lg:text-4xl'>
        {SectionSubHead}
      </h3>
    </div>
  );
};
