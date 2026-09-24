import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Briefcase, Activity, Globe } from 'lucide-react';
import { getCaseStudies } from '@/lib/caseStudies';
import BlogContentMarkdown from '@/components/BlogContentMarkdown';
import { ArrowRightIcon } from '@/components/SvgIcon';
import { BgSquare2 } from '@/components/BgSquare';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import StrategyBadge from '@/components/StrategyBadge';
import Execution_Plan from '@/uiComponents/Execution_Plan';
import ImageCard from '@/components/ImageCard';

export const dynamic = 'force-dynamic';

const fallbackImage =
  'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png';

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = await getCaseStudies();
  const document = await collection.findOne({ slug, status: 'published' });
  if (!document) notFound();

  const study = {
    title: String(document.title || ''),
    category: String(document.category || ''),
    description: String(document.excerpt || document.Description || ''),
    industry: String(document.industry || ''),
    services: String(document.service || ''),
    liveWebsite: document.liveWebsiteLink
      ? {
          label: new URL(String(document.liveWebsiteLink)).hostname,
          href: String(document.liveWebsiteLink),
        }
      : null,
    heroImage: String(document.thumbnail || fallbackImage),
    content: String(document.content || ''),
  };
  const relatedDocuments = await collection
    .find({ status: 'published', slug: { $ne: slug } })
    .sort({ createdAt: -1 })
    .limit(3)
    .toArray();
  const relatedStudies = relatedDocuments.map(item => ({
    slug: String(item.slug || ''),
    title: String(item.title || ''),
    description: String(item.excerpt || item.Description || ''),
    category: String(item.category || ''),
    cardImage: String(item.thumbnail || fallbackImage),
  }));

  return (
    <main className='min-h-screen text-white'>
      <article className='relative bg-black/50 px-5 pt-28 pb-24'>
        <video
          className='fixed top-0 left-0 -z-10 h-full w-full object-cover'
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
        <div className='mx-auto max-w-6xl'>
          <nav
            aria-label='Breadcrumb'
            className='mb-8 flex items-center justify-center gap-2 text-xs text-gray-500'
          >
            <Link href='/resources' className='shrink-0 transition hover:text-white'>
              Resources
            </Link>
            <span className='shrink-0 text-white/30'>›</span>
            <Link href='/resources/case-studies' className='shrink-0 transition hover:text-white'>
              Case Study
            </Link>
            <span className='shrink-0 text-white/30'>›</span>
            <span aria-current='page' className='truncate text-white/70'>
              {study.title}
            </span>
          </nav>

          {/* Title block */}
          <div className='mx-auto max-w-2xl text-center'>
            <span className='inline-block rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-gray-300'>
              • {study.category}
            </span>

            <h1 className='mt-6 text-4xl font-medium tracking-tight sm:text-5xl'>{study.title}</h1>

            <p className='mt-5 text-sm leading-6 text-gray-400'>{study.description}</p>
          </div>

          {/* Meta row */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12'>
            <div className='flex items-center gap-3'>
              <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-300'>
                <Briefcase size={16} />
              </span>
              <div>
                <p className='text-[10px] tracking-wide text-gray-500 uppercase'>Industry</p>
                <p className='text-sm font-medium text-white'>{study.industry}</p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-300'>
                <Activity size={16} />
              </span>
              <div>
                <p className='text-[10px] tracking-wide text-gray-500 uppercase'>Services</p>
                <p className='text-sm font-medium text-white'>{study.services}</p>
              </div>
            </div>

            {study.liveWebsite && (
              <div className='flex items-center gap-3'>
                <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-300'>
                  <Globe size={16} />
                </span>
                <div>
                  <p className='text-[10px] tracking-wide text-gray-500 uppercase'>Live Website</p>
                  <Link
                    href={study.liveWebsite.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm font-medium text-[#5b8def] hover:underline'
                  >
                    {study.liveWebsite.label}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Hero image */}
          <div className='relative mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/40'>
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              priority
              unoptimized
              className='object-cover'
            />
          </div>

          {/* Content */}
          <div className='mx-auto mt-14 max-w-6xl space-y-12'>
            <h2 className='text-2xl leading-tight font-medium sm:text-[26px]'>Project Overview</h2>
            <BlogContentMarkdown content={study.content} />
          </div>
        </div>
      </article>

      {/* More case studies */}
      {relatedStudies.length > 0 && (
        <section className='bg-black px-5 pb-20 sm:px-8 lg:px-12'>
          <div className='w-full'>
            <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
              <BgSquare2 />

              <div className='flex w-full flex-col items-center justify-center gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
                <span>
                  <StrategyBadge text={'Explore'} />
                </span>

                <MiddleSectionHeads
                  SectionHead={'More Case Studies'}
                  SectionSubHead=''
                  SectionDescription={'Explore more of our work across different industries.'}
                />
              </div>

              <div className='mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3'>
                {relatedStudies.map(card => (
                  <ImageCard
                    key={card.slug}
                    cradClass={''}
                    className={'w-full'}
                    buttintext={'Explore'}
                    cardtitle={card.title}
                    carddescription={card.description}
                    buttonurl={`/resources/case-studies/${card.slug}`}
                    category={card.category}
                    buttonicon={<ArrowRightIcon />}
                    image={card.cardImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      <Execution_Plan
        badgeText={'Stay Ahead. Keep Building.'}
        title={"Let's Build Your Success Story"}
        description={'Partner with us to turn your ideas into impactful digital products.'}
        buttonText={'Start a Project'}
        buttonLink='/contact'
      />
    </main>
  );
}
