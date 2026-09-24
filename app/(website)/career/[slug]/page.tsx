import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import CareerApplicationForm from '@/components/career/CareerApplicationForm';
import { getJobs, jobId } from '@/lib/jobs';

export const dynamic = 'force-dynamic';

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!/^[a-f\d]{24}$/i.test(slug)) notFound();
  const job = await (await getJobs()).findOne({ _id: jobId(slug), status: 'active' });
  if (!job) notFound();

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
          <MiddleSectionHeads SectionHead={job.title} SectionDescription={job.department} />
          <div className='mt-6 flex flex-wrap justify-center gap-3 text-sm'>
            {[job.department, job.type.replace('-', ' '), job.location].map(label => (
              <span
                key={label}
                className='rounded-full border border-blue-500/40 bg-blue-500/5 px-4 py-1.5 text-blue-300'
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className='mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]'>
          <article className='p-6'>
            <h2 className='text-2xl font-semibold text-white'>Job Description</h2>
            <p className='mt-4 leading-7 whitespace-pre-wrap text-white/65'>{job.description}</p>
          </article>
          <aside className='lg:sticky lg:top-8 lg:self-start'>
            <div className='rounded-[28px] border border-white/10 bg-[#090d1a]/95 p-5 shadow-[0_0_60px_rgba(0,0,0,0.45)] sm:p-8'>
              <h2 className='text-2xl font-semibold text-white'>Apply for This Position</h2>
              <p className='mt-2 text-sm leading-6 text-white/60'>
                Share your details and resume with us. Our team will review your application and get
                in touch if your profile matches the opportunity.
              </p>
              <div className='mt-6'>
                <CareerApplicationForm compact={true} jobId={slug} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
