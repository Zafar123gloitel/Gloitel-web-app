import StrategyBadge from '@/components/StrategyBadge';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import CareerApplicationForm from '@/components/career/CareerApplicationForm';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/SvgIcon';

export default function ApplyNowPage() {
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
      <section className='relative z-10 mx-auto max-w-5xl'>
        <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
          <StrategyBadge text='Apply Now' />
          <MiddleSectionHeads
            SectionHead='Apply for This Position'
            SectionDescription='Share your details and resume with us. Our team will review your application and get in touch if your profile matches the opportunity.'
          />
        </div>

        <div className='mt-8 rounded-[28px] border border-white/10 bg-[#090d1a]/95 p-5 shadow-[0_0_60px_rgba(0,0,0,0.45)] sm:p-8'>
          <CareerApplicationForm compact={false} />
        </div>
        <Link
          href='/career'
          className='text-title mt-10 flex items-center justify-center gap-2 transition'
        >
          <ArrowRightIcon className='rotate-180' size={20} /> Back to all openings
        </Link>
      </section>
    </main>
  );
}
