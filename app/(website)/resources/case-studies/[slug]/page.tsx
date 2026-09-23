import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Briefcase, Activity, Globe } from 'lucide-react';
import { ArrowRightIcon } from '@/components/SvgIcon';
import { BgSquare2 } from '@/components/BgSquare';
import { MiddleSectionHeads } from '@/components/SectionHeads';
import StrategyBadge from '@/components/StrategyBadge';
import Execution_Plan from '@/uiComponents/Execution_Plan';
import ImageCard from '@/components/ImageCard';

const caseStudies = [
  {
    slug: 'experteeth-dental-clinic',
    category: 'Healthcare',
    title: 'Experteeth Dental Clinic',
    description:
      'A modern dental website designed to improve patient trust, treatment discovery, and appointment booking. Built for a seamless patient experience.',
    industry: 'Healthcare',
    services: 'Web Design & Dev',
    liveWebsite: { label: 'experteeth.in', href: 'https://experteeth.in' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    overview:
      'Experteeth Dental Clinic provides professional dental care and treatments. The client needed a modern digital presence that could clearly showcase treatments, introduce the clinic and doctors, educate patients, and make appointment booking easier. Gloitel designed and developed a responsive website focused on usability, accessibility, clear information architecture, and a professional healthcare experience.',
    problemStatement: {
      intro:
        "The existing digital presence did not effectively communicate the clinic's services or build enough confidence among new patients. Users also faced difficulty finding relevant treatment information and quickly contacting the clinic.",
      subheading: 'Key challenges included:',
      items: [
        'Limited online visibility',
        'Unclear treatment information',
        'Difficult appointment journey',
        'Weak mobile experience',
        'Lack of structured content',
        'Need for stronger patient trust',
      ],
    },
    solutionStatement: {
      intro:
        'We created a clean, patient-focused website with simple navigation and a clear content hierarchy. The experience was designed to help visitors quickly understand available treatments, learn about the clinic, and book appointments.',
      subheading: 'Key Solutions',
      items: [
        'Clear treatment and service pages',
        'Simplified appointment booking flow',
        'Doctor and clinic profile sections',
        'Patient testimonials',
        'Dental health blog',
        'Mobile-responsive interface',
        'SEO-friendly page structure',
        'Clear contact and inquiry options',
      ],
    },
    impact:
      'The redesigned website created a stronger digital presence, simplified access to treatment information, improved mobile usability, and provided patients with an easier inquiry and appointment experience.',
  },
  {
    slug: 'pathshala-academy',
    category: 'Education',
    title: 'Pathshala Academy',
    description:
      'A comprehensive learning platform to simplify class management and enhance student engagement.',
    industry: 'Education',
    services: 'Product Design & Dev',
    liveWebsite: { label: 'pathshala-academy.in', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    overview:
      'Pathshala Academy needed a platform that simplified class management for teachers while keeping students more engaged.',
    problemStatement: {
      intro:
        'Class scheduling, attendance, and communication were spread across disconnected tools, creating extra work for teachers and confusion for students.',
      subheading: 'Key challenges included:',
      items: [
        'Fragmented class scheduling',
        'Manual attendance tracking',
        'Inconsistent communication',
        'Low student engagement',
      ],
    },
    solutionStatement: {
      intro:
        'A unified learning platform that brings class management, content delivery, and student engagement into one place.',
      subheading: 'Key Solutions',
      items: [
        'Centralized class scheduling',
        'Digital attendance tracking',
        'In-app announcements and messaging',
        'Interactive learning modules',
      ],
    },
    impact:
      'Teachers save time on administrative work, and students engage more consistently with course material.',
  },
  {
    slug: 'gloitel-care',
    category: 'Healthcare',
    title: 'Gloitel Care',
    description:
      'A centralized healthcare management platform designed to streamline Mobile Medical Unit operations.',
    industry: 'Healthcare',
    services: 'Platform Engineering',
    liveWebsite: { label: 'gloitelcare.in', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    overview:
      'Gloitel Care needed a centralized platform to manage the day-to-day operations of Mobile Medical Units across multiple locations.',
    problemStatement: {
      intro:
        'Coordinating mobile medical units across regions was largely manual, making it hard to track visits, patient records, and resource allocation in real time.',
      subheading: 'Key challenges included:',
      items: [
        'No real-time unit visibility',
        'Manual patient record tracking',
        'Inefficient resource allocation',
        'Inconsistent regional reporting',
      ],
    },
    solutionStatement: {
      intro:
        'A centralized management platform that gives coordinators real-time visibility into unit locations, patient interactions, and operational status.',
      subheading: 'Key Solutions',
      items: [
        'Real-time unit tracking',
        'Digital patient record capture',
        'Resource allocation dashboard',
        'Regional reporting tools',
      ],
    },
    impact:
      'Operations became easier to coordinate and monitor, improving service consistency across regions.',
  },
  {
    slug: 'nashamukti',
    category: 'Mobile App',
    title: 'NashaMukti',
    description:
      'A productivity platform to help teams manage tasks, collaborate, and deliver projects faster.',
    industry: 'Mobile App',
    services: 'App Design & Dev',
    liveWebsite: { label: 'nashamukti.app', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    overview:
      'NashaMukti needed a mobile-first platform to help teams manage tasks, collaborate, and deliver projects faster.',
    problemStatement: {
      intro:
        'Task tracking and team collaboration were fragmented, slowing down project delivery and making progress hard to measure.',
      subheading: 'Key challenges included:',
      items: [
        'Fragmented task tracking',
        'Poor team visibility',
        'Slow project delivery',
        'No mobile-first workflow',
      ],
    },
    solutionStatement: {
      intro:
        'A mobile productivity app that unifies task management and team collaboration in a single, intuitive workflow.',
      subheading: 'Key Solutions',
      items: [
        'Unified task board',
        'Real-time team collaboration',
        'Progress tracking dashboards',
        'Mobile-first interface',
      ],
    },
    impact:
      'Teams now deliver projects faster with clearer visibility into task status and ownership.',
  },
  {
    slug: 'bookmyq',
    category: 'SaaS',
    title: 'BookMyQ',
    description:
      'A comprehensive, highly scalable B2B SaaS platform that streamlines complex appointment scheduling, resource allocation, and daily operations.',
    industry: 'SaaS',
    services: 'Platform Engineering',
    liveWebsite: { label: 'bookmyq.io', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    overview:
      'BookMyQ needed a scalable B2B SaaS platform to handle complex appointment scheduling and resource allocation for growing clients.',
    problemStatement: {
      intro:
        'Existing scheduling tools could not scale with client complexity, leading to double-bookings, resource conflicts, and operational bottlenecks.',
      subheading: 'Key challenges included:',
      items: [
        'Frequent double-bookings',
        'Resource allocation conflicts',
        'Poor scalability',
        'Operational bottlenecks',
      ],
    },
    solutionStatement: {
      intro:
        'A highly scalable scheduling platform that handles complex resource allocation and daily operations across multiple client environments.',
      subheading: 'Key Solutions',
      items: [
        'Scalable multi-tenant architecture',
        'Smart resource allocation engine',
        'Conflict-free scheduling',
        'Operational dashboards',
      ],
    },
    impact:
      'Clients can now scale their scheduling operations reliably, with fewer conflicts and better resource utilization.',
  },
  {
    slug: 'smart-attendance',
    category: 'Enterprise',
    title: 'Smart Attendance',
    description:
      'A comprehensive, geo-aware attendance and HR management platform built to streamline workforce operations.',
    industry: 'Enterprise',
    services: 'Platform Engineering',
    liveWebsite: { label: 'smartattendance.io', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    overview:
      'Smart Attendance needed a geo-aware platform to streamline attendance tracking and HR operations for a distributed workforce.',
    problemStatement: {
      intro:
        'Manual attendance tracking across multiple sites led to inaccuracies and made HR reporting slow and error-prone.',
      subheading: 'Key challenges included:',
      items: [
        'Manual, error-prone attendance',
        'No geo-verification',
        'Slow HR reporting',
        'Multi-site inconsistency',
      ],
    },
    solutionStatement: {
      intro:
        'A geo-aware attendance and HR management platform that automates tracking and simplifies workforce reporting.',
      subheading: 'Key Solutions',
      items: [
        'Geo-verified check-ins',
        'Automated attendance logs',
        'HR reporting dashboards',
        'Multi-site workforce view',
      ],
    },
    impact:
      'HR teams gained accurate, real-time attendance data and significantly reduced manual reporting effort.',
  },
  {
    slug: 'smart-task',
    category: 'SaaS',
    title: 'Smart Task',
    description:
      'A comprehensive, Apple-inspired business management and employee collaboration platform.',
    industry: 'SaaS',
    services: 'Product Design & Dev',
    liveWebsite: { label: 'smarttask.io', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869099/Gloitel/Resource%20F/Case_Studies_aueuxl.png',
    overview:
      'Smart Task needed a clean, intuitive business management platform to improve employee collaboration.',
    problemStatement: {
      intro:
        "The client's existing tools were cluttered and inconsistent, making day-to-day collaboration harder than it needed to be.",
      subheading: 'Key challenges included:',
      items: [
        'Cluttered, inconsistent tools',
        'Low adoption from employees',
        'Fragmented communication',
        'Difficult onboarding',
      ],
    },
    solutionStatement: {
      intro:
        'An Apple-inspired, minimal business management platform focused on clarity and ease of collaboration.',
      subheading: 'Key Solutions',
      items: [
        'Minimal, guided interface',
        'Unified team workspace',
        'Streamlined onboarding flow',
        'Consistent design system',
      ],
    },
    impact:
      'Teams adopted the platform quickly thanks to its clean design, improving day-to-day collaboration.',
  },
  {
    slug: 'gloitel-smart-tracking',
    category: 'SaaS',
    title: 'Gloitel Smart Tracking',
    description:
      'A comprehensive real-time fleet and workforce tracking platform that delivers actionable insights and operational visibility.',
    industry: 'SaaS',
    services: 'Platform Engineering',
    liveWebsite: { label: 'smarttracking.gloitel.in', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785498263/Gloitel/what-we-do/financial-services_oba4c7.png',
    overview:
      'Gloitel Smart Tracking needed a real-time fleet and workforce tracking platform to improve operational visibility.',
    problemStatement: {
      intro:
        'The client lacked real-time visibility into fleet location and workforce activity, making planning and response reactive rather than proactive.',
      subheading: 'Key challenges included:',
      items: [
        'No real-time fleet visibility',
        'Reactive operational planning',
        'Delayed incident response',
        'Fragmented reporting',
      ],
    },
    solutionStatement: {
      intro:
        'A real-time tracking platform that surfaces actionable insights on fleet and workforce operations.',
      subheading: 'Key Solutions',
      items: [
        'Live fleet and workforce map',
        'Actionable operational insights',
        'Automated alerts',
        'Unified reporting dashboard',
      ],
    },
    impact:
      'The client gained proactive visibility into operations, improving planning and response times.',
  },
  {
    slug: 'skillmentor',
    category: 'Education',
    title: 'SkillMentor',
    description:
      'An online learning platform focused on career growth with expert-led courses and certifications.',
    industry: 'Education',
    services: 'Product Design & Dev',
    liveWebsite: { label: 'skillmentor.io', href: '#' },
    heroImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    cardImage:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788869098/Gloitel/Resource%20F/Blogs_Articles_h7tdgp.png',
    overview:
      'SkillMentor needed an online learning platform focused on career growth through expert-led courses and certifications.',
    problemStatement: {
      intro:
        'Learners lacked a single, structured place to access expert-led courses and track certification progress toward career goals.',
      subheading: 'Key challenges included:',
      items: [
        'Scattered course content',
        'No certification tracking',
        'Low learner engagement',
        'Unclear career pathways',
      ],
    },
    solutionStatement: {
      intro:
        'A learning platform built around expert-led courses, clear progress tracking, and certification pathways.',
      subheading: 'Key Solutions',
      items: [
        'Structured course catalog',
        'Certification progress tracking',
        'Expert-led video modules',
        'Career pathway guidance',
      ],
    },
    impact:
      'Learners engage more consistently and complete certification pathways at a higher rate.',
  },
];

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find(item => item.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies.filter(item => item.slug !== slug).slice(0, 3);

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

            <div className='flex items-center gap-3'>
              <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-300'>
                <Globe size={16} />
              </span>
              <div>
                <p className='text-[10px] tracking-wide text-gray-500 uppercase'>Live Website</p>
                <Link
                  href={study.liveWebsite.href}
                  target='_blank'
                  className='text-sm font-medium text-[#5b8def] hover:underline'
                >
                  {study.liveWebsite.label}
                </Link>
              </div>
            </div>
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
            <div>
              <h2 className='text-2xl leading-tight font-medium sm:text-[26px]'>
                Project Overview
              </h2>
              <p className='mt-4 text-sm leading-7 text-gray-400'>{study.overview}</p>
            </div>

            <div>
              <h2 className='text-2xl leading-tight font-medium sm:text-[26px]'>
                Problem Statement
              </h2>
              <p className='mt-4 text-sm leading-7 text-gray-400'>{study.problemStatement.intro}</p>
              <p className='mt-5 text-sm font-medium text-white'>
                {study.problemStatement.subheading}
              </p>
              <ul className='mt-3 space-y-2'>
                {study.problemStatement.items.map((item, index) => (
                  <li key={index} className='flex items-start gap-2 text-sm text-gray-400'>
                    <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl leading-tight font-medium sm:text-[26px]'>
                Solution Statement
              </h2>
              <p className='mt-4 text-sm leading-7 text-gray-400'>
                {study.solutionStatement.intro}
              </p>
              <p className='mt-5 text-sm font-medium text-white'>
                {study.solutionStatement.subheading}
              </p>
              <ul className='mt-3 space-y-2'>
                {study.solutionStatement.items.map((item, index) => (
                  <li key={index} className='flex items-start gap-2 text-sm text-gray-400'>
                    <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl leading-tight font-medium sm:text-[26px]'>Impact</h2>
              <p className='mt-4 text-sm leading-7 text-gray-400'>{study.impact}</p>
            </div>
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
                    buttintext={'Read Article'}
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
