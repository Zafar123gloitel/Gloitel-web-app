import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import CareerApplicationForm from '@/components/career/CareerApplicationForm';
import { jobDetailsData } from './data';

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobDetailsData[slug];
  const BriefcaseIcon = () => (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='3' y='7' width='18' height='13' rx='2' stroke='currentColor' strokeWidth='1.5' />
      <path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' stroke='currentColor' strokeWidth='1.5' />
      <path d='M3 12h18' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  );

  const ClockIcon = () => (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='1.5' />
      <path d='M12 7v5l3.5 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  );

  const LocationIcon = () => (
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <circle cx='12' cy='9.5' r='2.2' fill='currentColor' />
    </svg>
  );

  const iconMap = {
    briefcase: BriefcaseIcon,
    clock: ClockIcon,
    location: LocationIcon,
  };

  if (!job) {
    notFound();
  }

  return (
    <main className='relative mt-20 overflow-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <video
        className='absolute inset-0 h-full w-full object-cover'
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          type='video/mp4'
        />
      </video>
      <section className='relative z-10 mx-auto max-w-7xl'>
        <div className='mx-auto flex max-w-4xl flex-col items-center text-center'>
          <div className='mb-4 flex items-center gap-2 text-sm'>
            <Link href='/career' className='text-white/55 transition hover:text-white'>
              Career
            </Link>
            <span className='text-white/30'>›</span>
            <span className='text-white/85'>{job.title}</span>
          </div>

          <MiddleSectionHeads SectionHead={job.title} SectionDescription={job.tagline} />

          <div className='mt-6 flex flex-wrap items-center justify-center gap-3 text-sm'>
            {job.tags.map(item => {
              const IconComponent = iconMap[item.icon];
              return (
                <span
                  key={item.label}
                  className='flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-1.5 text-blue-300'
                >
                  <span className='text-blue-400'>
                    <IconComponent />
                  </span>
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]'>
          <article className='space-y-10'>
            <section className='p-6'>
              <h2 className='text-2xl font-semibold text-white'>Job Description</h2>
              <p className='mt-4 leading-7 text-white/65'>{job.jobDescription}</p>
            </section>

            <section className='p-6'>
              <h2 className='text-2xl font-semibold text-white'>Key Responsibilities</h2>
              <ul className='mt-5 space-y-3 text-white/70'>
                {job.keyResponsibilities.map(item => (
                  <li key={item} className='flex gap-3'>
                    <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className='p-6'>
              <h2 className='text-2xl font-semibold text-white'>Skills & Experience</h2>
              <ul className='mt-5 space-y-3 text-white/70'>
                {job.skillsExperience.map(item => (
                  <li key={item} className='flex gap-3'>
                    <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className='p-6'>
              <h2 className='text-2xl font-semibold text-white'>
                Preferred Qualifications (Optional)
              </h2>
              <ul className='mt-5 space-y-3 text-white/70'>
                {job.preferredQualifications.map(item => (
                  <li key={item} className='flex gap-3'>
                    <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className='lg:sticky lg:top-8 lg:self-start'>
            <div className='rounded-[28px] border border-white/10 bg-[#090d1a]/95 p-5 shadow-[0_0_60px_rgba(0,0,0,0.45)] sm:p-8'>
              <h2 className='text-2xl font-semibold text-white'>Apply for This Position</h2>
              <p className='mt-2 text-sm leading-6 text-white/60'>
                Share your details and resume with us. Our team will review your application and get
                in touch if your profile matches the opportunity.
              </p>
              <div className='mt-6'>
                <CareerApplicationForm compact={true} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
