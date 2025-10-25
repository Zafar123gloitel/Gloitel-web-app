import React from "react";
import Hero from "./component/Hero";
import { HomeAboutContent, HomeAboutImg } from "./component/About";
import Result from "./component/Result";
import HowWeWork from "./component/HowWeWork";
import Technology from "./component/Technology";
import { HorizontalDivider } from "./component/SectionDivider";
import LaunchYourSite from "./component/LaunchYourSite";
import Testimonial from "./component/Testimonial";
import { FAQPage } from "./component/Faq";
import JoinUsNow from "./component/JoinUsNow";
import {
  LeftSectionHead2,
  LeftSectionHeads,
  MiddleSectionHeads,
} from "./component/SectionHeads";
import { CenterBadge, LeftBadge } from "./component/Badge";
import { GlowButton, WhiteButton } from "./component/Button";
import { BgSquare2, BgSquare3 } from "./component/BgSquare";
import ServiceCard from "./component/serviceCard";
import Image from "next/image";

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
        "https://framerusercontent.com/images/yV5q5tRVYanZRx5SyKhVIHDbi0.jpg?scale-down-to=1024",
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
        "https://framerusercontent.com/images/QAmXciA1RA8AHgzbcI1iz87ro.jpg?scale-down-to-512",
      title: "Cloud & DevOps Solutions",
      description:
        "Leverage cloud infrastructure and CI/CD pipelines to ensure speed, flexibility, and operational efficiency.",
    },
    {
      image:
        "https://framerusercontent.com/images/JRAKWKlMtuarIVCJ574VvX8hUDQ.png?scale-down-to-512",
      title: "Industry-Specific Solutions",
      description:
        "From healthcare to retail, we provide domain-specific technology solutions that address unique industry challenges.",
    },
    {
      image:
        "https://framerusercontent.com/images/MZ7PJfNe8bTL7jL3HQ09V23IaI.jpg?scale-down-to-512",
      title: "UI/UX Design & Development",
      description:
        "Create intuitive, user-focused designs that enhance engagement and provide seamless digital experiences.",
    },
    {
      image:
        "https://framerusercontent.com/images/gqfCqc2W90G8IMBLWr8hZSk0s.jpg?scale-down-to-512",
      title: "AI & Data-Driven Insights",
      description:
        "Unlock the power of data with advanced analytics, machine learning, and automation to drive smarter decisions.",
      badge: "NEW",
    },
  ];

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
              HomeAboutTexts="Trusted by 50 agencies for excellence."
            />
          </div>

          {/* Image */}
          <div className="order-2 md:order-1">
            <HomeAboutImg ImgLink="https://framerusercontent.com/images/Qnjbg5sx80zqC8P7TMF9g3DgCA.jpeg?scale-down-to=1024" />
          </div>
        </div>
      </section>

      <HorizontalDivider />

      <Result />
      <HorizontalDivider />
      <HowWeWork />
      <HorizontalDivider />
      <Technology />

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
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-md bg-white/5 text-xs sm:text-sm text-gray-300"
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
                className={i === 0 ? "col-span-1 md:col-span-2" : "col-span-1"}
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
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
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
          <div className="mt-10 sm:mt-12 w-full px-4 sm:px-8 md:px-16">
            <div className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10 cursor-pointer">
              <div className="relative w-full pt-[56.25%]">
                <Image
                  width={1920}
                  height={1080}
                  src="https://framerusercontent.com/images/yV5q5tRVYanZRx5SyKhVIHDbi0.jpg?scale-down-to-1024"
                  alt="Video Thumbnail"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-blue-600/90 rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HorizontalDivider />
      <LaunchYourSite />
      <HorizontalDivider />
      <Testimonial />
      <HorizontalDivider />
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default HomePage;
