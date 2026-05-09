"use client";
import React, { useRef } from "react";
import Hero from "./component/Hero";
import { HomeAboutContent, HomeAboutImg } from "./component/About";
import Result from "./component/Result";
import PortfolioCard from "./component/PortfolioCard";
import HowWeWork from "./component/HowWeWork";
import Technology from "./component/Technology";
import { HorizontalDivider } from "./component/SectionDivider";
import LaunchYourSite from "./component/LaunchYourSite";
import Testimonial from "./component/Testimonial";
import { FAQPage } from "./component/Faq";
import JoinUsNow from "./component/JoinUsNow";
import { LeftSectionHead2, MiddleSectionHeads } from "./component/SectionHeads";
import { CenterBadge, LeftBadge } from "./component/Badge";
import { GlowButton, WhiteButton } from "./component/Button";
import { BgSquare3 } from "./component/BgSquare";
import ServiceCard from "./component/serviceCard";
import GlowPanel from "./component/GlowPanel";
import { useScroll } from "framer-motion";

const HomePage = () => {
  const benefitsBadge = [
    { title: "Digital Transformation" },
    { title: "Industry Expertise" },
    { title: "Scalable Solutions" },
    { title: "SEO Optimized" },
    { title: "Smart Automation" },
    { title: "Increased Engagement" },
    { title: "Customer Experience" },
    { title: "Secure" },
    { title: "Cloud Enabled" },
  ];

  const services = [
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/custom_msnsx2.webp",
      title: "Custom Software Development",
      description:
        "Build secure, scalable, and high-performing web and mobile applications tailored to your business needs.",
      buttons: [
        { label: "Book an Appointment", href: "/contact", primary: true },
        { label: "What is Landin?", href: "/about", primary: false },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/cloud_xlrfwt.webp",
      title: "Cloud & DevOps Solutions",
      description:
        "Leverage cloud infrastructure and CI/CD pipelines to ensure speed, flexibility, and operational efficiency.",
    },
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/industry_phvtru.webp",
      title: "Industry-Specific Solutions",
      description:
        "From healthcare to retail, we provide domain-specific technology solutions that address unique industry challenges.",
    },
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860905/Gloitel/uiux_y66ojs.webp",
      title: "UI/UX Design & Development",
      description:
        "Create intuitive, user-focused designs that enhance engagement and provide seamless digital experiences.",
    },
    {
      image:
        "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860904/Gloitel/ai_lai6ov.avif",
      title: "AI & Data-Driven Insights",
      description:
        "Unlock the power of data with advanced analytics, machine learning, and automation to drive smarter decisions.",
      badge: "NEW",
    },
  ];
  const listRef = useRef(null);

  // Single scroll tracker for entire section
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
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

          {/* Image */}
          <div className="order-2 md:order-1">
            <HomeAboutImg ImgLink="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928286/Gloitel/aboutgloitel_h4ba1t.webp" />
          </div>
        </div>
      </section>

      <HorizontalDivider />
      <Result />

      <HowWeWork />
      <HorizontalDivider />
      <Technology />

      <HorizontalDivider />
      {/* Benefits & Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col gap-10 lg:gap-16 items-start">
          {/* Benefits */}
          <div className="flex flex-col w-full max-w-4xl">
            <LeftBadge WorkBadge="Gloitel Benefits" />
            <LeftSectionHead2
              SectionHead="Smart Solutions. Tangible Results."
              SectionSubHead="We turn your goals into measurable results."
            />

            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              {benefitsBadge.map((text, idx) => (
                <span
                  key={idx}
                  className="px-3 sm:px-3 py-2 sm:py-1.5 rounded-md bg-white/5 text-xs sm:text-sm text-gray-400 border-2 border-gray-400/10"
                >
                  {text.title}
                </span>
              ))}
              <WhiteButton ButtonText="Contact Now" Buttonlink="/contact" />
            </div>
          </div>
          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {services.map((service, i) => (
              <div
                key={i}
                className={i === 0 ? "col-span-1 md:col-span-2 " : "col-span-1"}
              >
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
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
        <BgSquare3 />
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 text-center">
            <CenterBadge TechnologyBadge="Portfolio" />
            <MiddleSectionHeads
              SectionHead="Our Selected Projects"
              SectionSubHead="That Propel Your Website!"
              SectionDescription="Explore our curated work, showcasing collaborations with visionary clients across diverse industries."
            />
            <GlowButton
              ButtonText="View Portfolio"
              Buttonlink="/creation"
              className="mt-6 sm:mt-8"
            />
          </div>

          {/* Thumbnail */}

          <div
            ref={listRef}
            className="relative w-full h-180 overflow-scroll hide-scrollbar portfolio-fade-bottom"
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
