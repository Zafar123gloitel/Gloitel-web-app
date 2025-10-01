"use client";

import React, { useState } from "react";

import { FAQPage } from "../component/Faq";
import JoinUsNow from "../component/JoinUsNow";
import { GlowButton } from "../component/Button";
import ContactForm from "../component/ContactForm";
import { HeroVideoBg } from "../component/HeroHead";
import { IntroHead } from "../uiComponents/Heading";

const AboutPage = () => {
  return (
    <>
      <section className="relative isolate sm:px-6 lg:px-8 py-16 lg:py-30 w-full h-full overflow-hidden">
        {/* Background Video */}
        <HeroVideoBg />

        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10 pt-15 sm:pt-20 md:pt-20 lg:pt-20">
          {/* Intro */}
          <div className="flex flex-col w-full text-center px-5 lg:px-20">
            <IntroHead
              HomeHeroBadge="24/7"
              HomeSubHeroBadge="Let's Work Together"
              main="Any Questions Rising?"
              sub="We are All Here."
              description="Whether you have a question, need assistance,
 or want to start a new project, our team is here to help."
            />
          </div>
          <ContactForm />
        </div>
      </section>
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default AboutPage;
