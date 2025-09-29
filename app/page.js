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
import { BgSquare2 } from "./component/BgSquare";
import ServiceCard from "./component/serviceCard";

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

  const stages = [
    {
      id: 1,
      title: "Next.js",
      stage: "Stage 1",
      description:
        "Build ultra-fast, SEO-friendly web apps with Next.js – featuring SSR, static optimization, and powerful API routes.",
      img: "https://framerusercontent.com/images/TT6inEjH042cegW9mZpIAdTOB4.webp",
    },
    {
      id: 2,
      title: "React Native",
      stage: "Stage 2",
      description:
        "Build high-performance iOS & Android apps with one codebase using React Native — fast, efficient, and cross-platform.",
      img: "https://framerusercontent.com/images/A7afpKmzesQoc3afvwjgMGf76A.webp",
    },
    {
      id: 3,
      title: "Node.JS",
      stage: "Stage 3",
      description:
        "Power your backend with Node.js — fast, scalable, and perfect for real-time data and high-performance APIs.",
      img: "https://framerusercontent.com/images/sRTbLby6EsdVJrKUoIgeMGv5yNQ.webp",
    },
    {
      id: 4,
      title: "PostgreSQL",
      stage: "Stage 4",
      description:
        "Supercharge data management with PostgreSQL — fast, scalable, and reliably open-source.",
      img: "https://framerusercontent.com/images/9tmtYa5n6CwXLNYnMCDs7r8cvus.svg",
    },
    {
      id: 5,
      title: "GraphQL",
      stage: "Stage 5",
      description:
        "Fetch only what you need with GraphQL — flexible queries for faster, more efficient apps.",
      img: "https://framerusercontent.com/images/5DdXHxN6sQskQMiojqV3qGi3we8.png?scale-down-to=512",
    },
    {
      id: 6,
      title: "Nest.JS",
      stage: "Stage 6",
      description:
        "Build scalable, maintainable backends with NestJS — a TypeScript-ready, modular Node.js framework.",
      img: "https://framerusercontent.com/images/duUmo28KDZoXPsjdrEKonCFKGI.png",
    },
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
        "https://framerusercontent.com/images/QAmXciA1RA8AHgzbcI1iz87ro.jpg?scale-down-to=512",
      title: "Cloud & DevOps Solutions",
      description:
        "Leverage cloud infrastructure and CI/CD pipelines to ensure speed, flexibility, and operational efficiency.",
    },
    {
      image:
        "https://framerusercontent.com/images/JRAKWKlMtuarIVCJ574VvX8hUDQ.png?scale-down-to=512",
      title: "Industry-Specific Solutions",
      description:
        "From healthcare to retail, we provide domain-specific technology solutions that address unique industry challenges.",
    },
    {
      image:
        "https://framerusercontent.com/images/MZ7PJfNe8bTL7jL3HQ09V23IaI.jpg?scale-down-to=512",
      title: "UI/UX Design & Development",
      description:
        "Create intuitive, user-focused designs that enhance engagement and provide seamless digital experiences.",
    },
    {
      image:
        "https://framerusercontent.com/images/gqfCqc2W90G8IMBLWr8hZSk0s.jpg?scale-down-to=512",
      title: "AI & Data-Driven Insights",
      description:
        "Unlock the power of data with advanced analytics, machine learning, and automation to drive smarter decisions.",
      badge: "NEW",
    },
  ];

  return (
    <>
      <Hero />
      {/* About Sections */}
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left: Image */}
          <HomeAboutImg ImgLink="https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024" />

          {/* Right: Content */}

          <HomeAboutContent
            HomeAboutBadge="Gloitel Vision"
            homeAboutHeading="Empowering Businesses"
            HomeAboutSubHeading="with  Innovation"
            HomeAboutDescription="Gloitel is a leading IT company offering website development, mobile apps, and AI solutions. We create innovative, scalable, and smart digital experiences for businesses."
            HomeAboutFeatures={[
              {
                title: "Web & App Development",
              },
              {
                title: "AI-Powered Solutions",
              },
              {
                title: "Custom IT Services",
              },
            ]}
            ButtonText="View About Gloitel"
            Buttonlink="/about"
            HomeAboutTexts="Trusted by 50 agencies for excellence."
          />
        </div>
      </section>
      <HorizontalDivider />
      <Result />
      <HorizontalDivider />
      <HowWeWork />
      <HorizontalDivider />
      <Technology />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className=" gap-10 lg:gap-16 items-start">
          {/* TOP */}
          <div className="flex flex-col w-4xl">
            <LeftBadge WorkBadge="Gloitel Benefits" />
            <LeftSectionHead2
              SectionHead="Smart Solutions. Tangible Results."
              SectionSubHead="We turn your goals into measurable results."
            />
            <div className="mt-3 sm:mt-4 flex flex-wrap items-end gap-2 sm:gap-3 relative z-10">
              {benefitsBadge.map((text, idx) => (
                <span
                  key={idx}
                  className="px-5 py-3 rounded-md bg-white/5 text-xs sm:text-sm text-gray-300"
                >
                  {text.title}
                </span>
              ))}
              <WhiteButton ButtonText="Contact Now" Buttonlink="/contact" />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10">
          <BgSquare2 />
          {/* HEADER */}
          <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 text-center">
            {/* Badge */}
            <CenterBadge TechnologyBadge="Portfolio" />
            <MiddleSectionHeads
              SectionHead="Our Selected Projects"
              SectionSubHead="That Propel Your Websit!"
              SectionDescription="Explore our curated work, showcasing collaborations with visionary clients across diverse industries."
            />

            {/* CTA */}
            <GlowButton ButtonText="View Portfolio" Buttonlink="/creation" />
          </div>

          {/* GRID */}
          <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
            {/* Thumbnail with Play Button */}
            <div className="mt-12 w-full h-full px-40">
              <div className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10 cursor-pointer">
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src="https://framerusercontent.com/images/yV5q5tRVYanZRx5SyKhVIHDbi0.jpg?scale-down-to=1024"
                    alt="Video Thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-blue-600/90 rounded-full shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-10 h-10"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GRID */}

      <HorizontalDivider />
      <LaunchYourSite />
      <HorizontalDivider />
      <Testimonial />
      <HorizontalDivider />
      <FAQPage />
      <JoinUsNow />
      {/* <CardSwipe /> */}
    </>
  );
};

export default HomePage;
