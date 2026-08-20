'use client';
import React, { use } from 'react';
import { FAQPage } from '@/components/Faq';
import JoinUsNow from '@/components/JoinUsNow';
import {
  ProjectShowcase,
  ProjectShowcaseFourth,
  ProjectShowcaseSecond,
} from '@/components/ProjectShowcase';
import { IntroHead2 } from 'uiComponents/Heading';
import Image from 'next/image';
import projects from './data.json';
import { GlowButton } from '@/components/Button';
import GlowPanel from '@/components/GlowPanel';
import { usePathname } from 'next/navigation';

const Portfolio = ({ params }) => {
  const { id } = use(params); // unwrap params safely

  const project = projects.find(p => p.id === Number(id));
  if (!project) return <p>Project not found</p>;

  // Logical groupings
  const firstSections = [
    { title: 'Business Requirements', points: project.BusinessRequirements },
    { title: 'Challenges', points: project.Challenges },
    { title: 'Our Approach', points: project.OurApproach },
  ];
  const secondSections = [
    { title: 'UI/UX Design Process', points: project.DesignProcess },
    { title: 'Planning & Development', points: project.PlanningDevelopment },
  ];
  const thirdSections = [
    { title: 'Design Process', points: project.ProjectDeliveryResults }, // already an array
  ];
  const fourthSections = [
    {
      title: `What is ${project.title}`,
      points: Array.isArray(project.what) ? project.what : [project.what],
    },
    { title: 'How it Works', points: project.how }, // project.how is already an array
  ];

  const fifthSections = [
    { title: `What makes ${project.title} Stands Out`, points: project.why }, // already an array
  ];

  const sixthSections = [
    { title: `Benefits For ${project.industry}`, points: project.benefits }, // already an array
  ];
  return (
    <>
      <section className='relative mx-auto w-full overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-28'>
        {/* Background video */}
        <video
          src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          type='video/mp4'
          className='absolute top-0 left-0 z-0 h-full w-full object-cover'
          autoPlay
          muted
          loop
          playsInline
          unoptimized='true'
        />

        {/* Main content */}
        <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center pt-10 sm:pt-16 md:pt-20 lg:pt-24'>
          {/* GRID SECTION */}
          <div className='grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2'>
            {/* LEFT SIDE: Project Overview */}
            <div className='flex flex-col gap-6'>
              <IntroHead2
                HomeHeroBadge='CASE STUDY'
                HomeSubHeroBadge='Project Overview'
                main={project.name}
                description={project.description}
              />

              {/* Tags */}
              <div className='my-4 flex flex-wrap gap-3'>
                {project.tag.map((tag, index) => (
                  <span
                    key={index}
                    className='rounded-xl border border-neutral-500/20 bg-blue-900/20 px-4 py-2 text-sm backdrop-blur-2xl sm:text-base'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Info Card */}
            <div className='flex w-full justify-center lg:justify-end'>
              <div className='relative flex w-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6 shadow-xl backdrop-blur-3xl sm:w-[90%] sm:p-8 md:p-10 lg:w-[85%] xl:w-[80%]'>
                {/* Project Info */}
                <div>
                  {[
                    { label: 'Project Type', value: project.projectType },
                    { label: 'Industry', value: project.industry },
                    { label: 'Tech Stack', value: project.techStack },
                  ].map((item, index) => (
                    <div className='mb-4' key={index}>
                      <p className='mb-1 text-sm text-gray-400 sm:text-base'>{item.label}</p>
                      <h3 className='text-title text-sm break-words sm:text-base'>
                        {Array.isArray(item.value) ? item.value.join(', ') : item.value}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Background image */}
                <div className='absolute -right-10 -bottom-10 opacity-70'>
                  <Image
                    src='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926076/Gloitel/utils/star_fzn7cv.svg'
                    alt='design'
                    width={180}
                    height={180}
                    unoptimized
                    loading='lazy'
                  />
                </div>

                {/* Button */}
                <div className='mt-4 flex'>
                  <GlowButton
                    ButtonText='View Live Website'
                    Buttonlink={project.liveUrl}
                    target='_blank'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE SECTIONS */}
          {/* IMAGE SECTIONS */}
          {Number(id) >= 1 &&
            Number(id) <= 4 &&
            [project.imageFir, project.imageSec, project.imageThir, project.imageFor].map(
              (img, idx) =>
                img && (
                  <div key={idx} className='mt-10 w-full max-w-6xl'>
                    <div className='relative w-full overflow-hidden rounded-2xl pt-[56.25%]'>
                      <Image
                        src={img}
                        alt={project.name}
                        fill
                        className='rounded-2xl object-cover'
                        unoptimized
                        loading='lazy'
                      />
                    </div>

                    {/* Only first 4 images for id 1-4 */}
                    {idx === 0 && <ProjectShowcase sections={firstSections} />}
                    {idx === 1 && <ProjectShowcase sections={secondSections} />}
                    {idx === 2 && <ProjectShowcaseSecond sections={thirdSections} />}
                  </div>
                ),
            )}

          {Number(id) >= 5 &&
            Number(id) <= 8 &&
            [
              project.imageFir,
              project.imageSec,
              project.imageThir,
              project.imageFor,
              ...(project.additionalImages || []),
            ].map(
              (img, idx) =>
                img && (
                  <div key={idx} className='mt-10 w-full max-w-6xl'>
                    <div className='relative w-full overflow-hidden rounded-2xl pt-[56.25%]'>
                      <Image
                        src={img}
                        alt={project.name}
                        fill
                        className='rounded-2xl object-cover'
                        unoptimized
                        loading='lazy'
                      />
                    </div>

                    {/* Only render ProjectShowcaseThird for id 5-8 */}
                    {idx === 0 && <ProjectShowcaseFourth sections={fourthSections} />}
                    {idx === 1 && (
                      // <ProjectShowcaseThird sections={fifthSections} />
                      <ProjectShowcaseFourth sections={fifthSections} />
                    )}
                    {idx === 2 && <ProjectShowcaseFourth sections={sixthSections} />}
                  </div>
                ),
            )}
        </div>
        <GlowPanel />
      </section>
      {/* Bottom Sections */}
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default Portfolio;
