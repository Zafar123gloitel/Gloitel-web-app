import React from 'react';
import FeatureScroll from './FeatureScroll';
import { GlowButton } from './Button';
import { CenterBadge } from './Badge';
import { BgSquare3 } from './BgSquare';
import { MiddleSectionHeads } from './SectionHeads';
import Link from 'next/link';
import { Instagram, Linkedin, Rocket, Spline, WandSparkles } from 'lucide-react';
import Image from 'next/image';
import GlowPanel from './GlowPanel';
import StrategyBadge from '@/components/StrategyBadge';

const Testimonial = () => {
  const stages = [
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Reerth (Electronics-based Product)',
      name: 'Staish Kashyap',
      role: 'CEO',
      description:
        'Our website is sleek, fast, and user-friendly—perfectly aligned with our vision. The team nailed our brand and delivered a high-performing platform.',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865924/Gloitel/user/satish_hargcz.webp',
      link: 'https://bni-raipur.in/en-IN/memberdetails?encryptedMemberId=cAXuT0G5qYZ5FBgbFbtsgQ%3D%3D&name=Satish+Kumar+Kashyap',
      icon: <Spline />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Path ISA (Educational Platform)',
      name: 'Dr. Hamid Khan',
      role: 'Founder',
      description:
        'They delivered a dynamic, intuitive platform that makes learning easy. Smooth experience and exactly what we needed!',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865921/Gloitel/user/hamid_umised.webp',
      link: 'https://www.linkedin.com/in/dr-hamid-khan-59923a14a/?originalSubdomain=in&original_referer=https%3A%2F%2Fgloitel.framer.website%2F',
      icon: <Linkedin />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'HRM Technologies (IT & Cloud Services)',
      name: 'Rajeshwar Agarwal',
      role: 'Director',
      description:
        'Our website now mirrors our cloud expertise—sleek design, robust backend, and seamless performance. Exceptional work!',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865920/Gloitel/user/rajeshwar_ldbq5n.webp',
      link: 'https://rocketreach.co/rajeshwar-agarwal-email_60747941',
      icon: <Rocket />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Experteeth (Dental Services)',
      name: 'Manish Agrawal',
      role: 'Founder',
      description:
        "Our new website is clean, modern, and patient-friendly—covering everything from bookings to services. Couldn't be happier!",
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865920/Gloitel/user/manish_m3citd.webp',
      link: 'https://www.instagram.com/experteeth_official/',
      icon: <Instagram />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Samriddhi Agro (Agriculture Products)',
      name: 'Ritendra Nayak',
      role: 'Owner',
      description:
        'They perfectly captured our agro-business — the site is attractive, informative, and runs flawlessly. A big boost to our online presence!',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865919/Gloitel/user/ritendra_qk2pd3.webp',
      link: 'https://www.indiamart.com/samridhi-agro-industries/enquiry.html',
      icon: <WandSparkles />,
    },
    {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      title: 'Sapradha (School Sports Management)',
      name: 'Dr. Sowmya Raghubir',
      role: 'Chairman',
      description:
        'Our website is now a one-stop hub for managing schools and sports events — seamless registrations, schedules, and updates. Outstanding work!',
      image:
        'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762865917/Gloitel/user/sowmya_bjugxb.webp',
      link: 'https://www.linkedin.com/in/dr-sowmya-raghubir-5447a231/?originalSubdomain=in',
      icon: <Linkedin />,
    },
  ];
  return (
    <section className='relative isolate overflow-hidden px-4 py-5 sm:px-6 lg:px-8 lg:py-15'>
      <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center'>
        <BgSquare3 />
        {/* HEADER */}
        <div className='flex w-full flex-col items-center text-center sm:w-3/4 lg:w-1/2'>
          {/* Badge */}
          {/* <CenterBadge TestimonialBadge="Testimonials" /> */}
          <StrategyBadge text={'Testimonials'} />

          {/* Headings */}
          <MiddleSectionHeads
            SectionHead='Customer Reviews About'
            SectionSubHead='Work, Usability and Design.'
            SectionDescription='Hear from our happy clients! See how we’ve helped them achieve
            their goals and create lasting impact.'
          />
          <div className='relative z-25 w-full overflow-hidden sm:w-auto'>
            <div className='feature-fade-mask relative'>
              <FeatureScroll />
            </div>
          </div>
          <GlowButton buttonText='View About Gloitel' buttonlink='/about' />
        </div>

        {/* GRID */}
        <div className='mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {stages.map(item => (
            <Link key={item.id} href={item.link ?? '#'} className='group relative h-full'>
              <div className='relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] sm:p-8'>
                {/* Gradient overlay */}
                <div className='pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/40 via-indigo-800/20 to-transparent opacity-50'></div>
                <div className='pointer-events-none absolute -top-10 left-1/2 h-[80px] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/90 blur-[7px]' />
                <div className='relative z-10 flex justify-between gap-3'>
                  {/* Left column: Avatar + Stars */}
                  <div className='flex flex-col gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-md sm:h-14 sm:w-14'>
                      <Image
                        width={1920}
                        height={1080}
                        src={item.image}
                        alt={item.name}
                        className='h-full w-full object-cover'
                        unoptimized
                        loading='lazy'
                      />
                    </div>
                    <div className='flex flex-row gap-1'>
                      {[1, 2, 3, 4, 5].map(i => (
                        <svg
                          key={i}
                          fill='#FFFFFF'
                          className='h-4 w-4'
                          viewBox='0 0 36 36'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z' />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {/* Right column: Icon */}
                  <div className='text-description group-hover:text-title h-6 w-6 transition-colors duration-300'>
                    {item.icon}
                  </div>
                </div>

                {/* Middle Section (Review) */}
                <p className='relative z-10 mt-4 flex-grow text-sm leading-relaxed text-gray-400 sm:text-base'>
                  {item.description}
                </p>

                {/* Divider */}
                <div className='relative z-10 my-4 h-px w-full bg-gradient-to-r from-white/10 to-transparent'></div>

                {/* Bottom Section (Name, Role, Title) */}
                <div className='relative z-10'>
                  <div className='flex items-center gap-2 py-2'>
                    <h3 className='text-title sm:text-md text-sm font-semibold'>{item.name}</h3>
                    <span className='h-1 w-1 rounded-full bg-white'></span>
                    <p className='text-title sm:text-md text-sm font-semibold'>{item.role}</p>
                  </div>
                  <h4 className='text-xs text-gray-400 sm:text-sm'>{item.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <GlowPanel />
    </section>
  );
};

export default Testimonial;
