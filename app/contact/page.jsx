'use client';

import { GlowButton } from '@/components';
import { HeroVideoBg } from '@/components/HeroHead';
import { IntroHead } from '@/uiComponents/Heading';
import { useRef } from 'react';

const ContactPage = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'auto', block: 'center' });
  };
  return (
    <>
      <section className='relative isolate h-full w-full overflow-hidden py-16 sm:px-6 lg:px-8 lg:py-30'>
        {/* Background Video */}
        <HeroVideoBg />

        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center pt-15 sm:pt-20 md:pt-20 lg:pt-20'>
          {/* Intro */}
          <div className='flex w-full flex-col gap-4 px-5 text-center lg:px-20'>
            <IntroHead
              HomeHeroBadge='24/7'
              HomeSubHeroBadge="Let's Work Together"
              main='Any Questions Rising?'
              sub='We are All Here.'
              description='Whether you have a question, need assistance,
 or want to start a new project, our team is here to help.'
            />
            <GlowButton buttonText='Fill The Form Out' buttonlink={'#form'} />
          </div>
          <div ref={formRef} className='w-full'>
            <ContactForm />
          </div>
        </div>
        <GlowPanel />
      </section>
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default ContactPage;
