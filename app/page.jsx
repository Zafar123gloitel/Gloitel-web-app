'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import { WhoWeAre } from '@/components/About';
import { LoadingSection } from '@/components/LoadingSection';
import { useScroll } from 'framer-motion';
import StrategyBadge from '@/components/StrategyBadge';
import { HorizontalDivider } from '@/components/SectionDivider';
import { LeftSectionHead2, MiddleSectionHeads } from '@/components/SectionHeads';
import { WhiteButton } from '@/components';
import { BgSquare3 } from '@/components/BgSquare';
import GlowPanel from '@/components/GlowPanel';
// import HowWeWork from '@/components/HowWeWork';
import { GlowButton } from '@/components/Button';
import ServiceCard from '@/components/serviceCard';
import HowWeWork from '@/components/HowWeWork';

const Result = dynamic(() => import('@/components/Result'), {
  loading: () => <LoadingSection minHeight='min-h-[280px]' />,
});

const Technology = dynamic(() => import('@/components/Technology'), {
  loading: () => <LoadingSection minHeight='min-h-[420px]' />,
});

const PortfolioCard = dynamic(() => import('@/components/PortfolioCard'), {
  loading: () => <LoadingSection minHeight='min-h-[560px]' />,
});

const LaunchYourSite = dynamic(() => import('@/components/LaunchYourSite'), {
  loading: () => <LoadingSection minHeight='min-h-[260px]' />,
});

const Testimonial = dynamic(() => import('@/components/Testimonial'), {
  loading: () => <LoadingSection minHeight='min-h-[360px]' />,
});

const FAQPage = dynamic(() => import('@/components/Faq').then(mod => mod.FAQPage), {
  loading: () => <LoadingSection minHeight='min-h-[420px]' />,
});

const JoinUsNow = dynamic(() => import('@/components/JoinUsNow'), {
  loading: () => <LoadingSection minHeight='min-h-[220px]' />,
});

const HomePage = () => {
  const benefitsBadge = [
    { title: 'Digital Transformation' },
    { title: 'Industry Expertise' },
    { title: 'Scalable Solutions' },
    { title: 'SEO Optimized' },
    { title: 'Smart Automation' },
    { title: 'Increased Engagement' },
    { title: 'Customer Experience' },
    { title: 'Secure' },
    { title: 'Cloud Enabled' },
  ];

  const services = [
    {
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/custom_msnsx2.webp',
      title: 'Custom Software Development',
      description:
        'Build secure, scalable, and high-performing web and mobile applications tailored to your business needs.',
      buttons: [
        { label: 'Book an Appointment', href: '/contact', primary: true },
        { label: 'What is Landin?', href: '/about', primary: false },
      ],
    },
    {
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/cloud_xlrfwt.webp',
      title: 'Cloud & DevOps Solutions',
      description:
        'Leverage cloud infrastructure and CI/CD pipelines to ensure speed, flexibility, and operational efficiency.',
    },
    {
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/industry_phvtru.webp',
      title: 'Industry-Specific Solutions',
      description:
        'From healthcare to retail, we provide domain-specific technology solutions that address unique industry challenges.',
    },
    {
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/uiux_y66ojs.webp',
      title: 'UI/UX Design & Development',
      description:
        'Create intuitive, user-focused designs that enhance engagement and provide seamless digital experiences.',
    },
    {
      image: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860904/Gloitel/ai_lai6ov.avif',
      title: 'AI & Data-Driven Insights',
      description:
        'Unlock the power of data with advanced analytics, machine learning, and automation to drive smarter decisions.',
      badge: 'NEW',
    },
  ];
  const listRef = useRef(null);

  // Single scroll tracker for entire section
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start end', 'end start'],
  });

  return (
    <>
      <Hero />

      {/* About Section */}
      {/* <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
         
          <div className="order-1 md:order-2">
            <HomeAboutContent
              HomeAboutBadge="About Gloitel"
              homeAboutHeading="Building Stronger Brands"
              HomeAboutSubHeading="Creating Impressions"
              HomeAboutDescription="Gloitel is a leading IT company offering website development, mobile apps, and AI solutions. We create innovative, scalable, and smart digital experiences for businesses."
              HomeAboutFeatures={[
                { title: "Web & App Development" },
                { title: "AI-Powered Solutions" },
                { title: "Custom IT Services" },
              ]}
              ButtonText="View About Gloitel"
              Buttonlink="/about"
              HomeAboutTexts="Trusted by 50+ agencies for excellence."
            />
          </div>

         
          <div className="order-2 md:order-1">
            <HomeAboutImg ImgLink="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928286/Gloitel/aboutgloitel_h4ba1t.webp" />
          </div>
        </div>
      </section> */}

      <WhoWeAre />

      <HorizontalDivider />
      <Result />

      <HowWeWork />
      <HorizontalDivider />
      <Technology />

      <HorizontalDivider />
      {/* Benefits & Services */}
      <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8'>
        <div className='flex flex-col items-start gap-10 lg:gap-16'>
          {/* Benefits */}
          <div className='flex w-full max-w-4xl flex-col'>
            {/* <LeftBadge WorkBadge="Gloitel Benefits" /> */}
            <StrategyBadge text={'Gloitel Benefits'} />
            <LeftSectionHead2
              SectionHead='Smart Solutions. Tangible Results.'
              SectionSubHead='We turn your goals into measurable results.'
            />

            <div className='mt-3 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-3'>
              {benefitsBadge.map((text, idx) => (
                <span
                  key={idx}
                  className='rounded-md border-2 border-gray-400/10 bg-white/5 px-3 py-2 text-xs text-gray-400 sm:px-3 sm:py-1.5 sm:text-sm'
                >
                  {text.title}
                </span>
              ))}
              <WhiteButton ButtonText='Contact Now' Buttonlink='/contact' />
            </div>
          </div>
          {/* Services */}
          <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3'>
            {services.map((service, i) => (
              <div key={i} className={i === 0 ? 'col-span-1 md:col-span-2' : 'col-span-1'}>
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  buttons={service.buttons}
                  badge={service.badge}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalDivider />

      {/* Portfolio Section */}
      <section className='relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-8'>
        <BgSquare3 />
        <div className='relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center'>
          {/* Header */}
          <div className='flex w-full flex-col items-center text-center sm:w-3/4 lg:w-1/2'>
            {/* <CenterBadge TechnologyBadge="Portfolio" /> */}
            <StrategyBadge text={'Portfolio'} />
            <MiddleSectionHeads
              SectionHead='Our Selected Projects'
              SectionSubHead='That Propel Your Website!'
              SectionDescription='Explore our curated work, showcasing collaborations with visionary clients across diverse industries.'
            />
            <GlowButton
              buttonText='View Portfolio'
              buttonlink='/creation'
              className='mt-6 sm:mt-8'
            />
          </div>

          {/* Thumbnail */}

          <div
            ref={listRef}
            className='hide-scrollbar portfolio-fade-bottom relative h-180 w-full overflow-scroll'
          >
            <PortfolioCard scrollProgress={scrollYProgress} />
          </div>
        </div>
        <GlowPanel />
      </section>
      <LaunchYourSite />
      <HorizontalDivider />
      <Testimonial />
      <FAQPage />

      <JoinUsNow />
    </>
  );
};

export default HomePage;
