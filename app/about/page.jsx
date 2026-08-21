'use client';

// import React, { useState } from "react";
// import {
//   AboutAboutContent,
//   AboutAboutImg1,
//   AboutAboutImg2,
// } from "components/About";
// import Link from "next/link";
// import TechScroll from "components/TechScroll";
// import { CenterBadge } from "components/Badge";
// import { FAQPage } from "components/Faq";
// import JoinUsNow from "components/JoinUsNow";
// import { BgSquare2, BgSquare3 } from "components/BgSquare";
// import { GlowButton } from "components/Button";
// import { IntroHead } from "uiComponents/Heading";
// import GlowPanel from "components/GlowPanel";
// import { HorizontalDivider } from "components/SectionDivider";
// import { MiddleSectionHeads } from "components/SectionHeads";
// import GalleryScroll from "components/GalleryScroll";
// import { Linkedin, Twitter } from "lucide-react";

// const AboutPage = () => {
//   const [showVideo, setShowVideo] = useState(false);

//   const stages = [
//     {
//       id: 1,
//       name: "Mr.Durgesh Sahu",
//       role: "Director",
//       image: "images/durgesh.avif",
//       icon: <Linkedin />,
//       link: "https://www.linkedin.com/in/durgesh-sahu-1543068/",
//     },
//     {
//       id: 2,
//       name: "Dr(Major) Rakesh Sharma",
//       role: "Sr.Medical Auditor",
//       image: "images/2nd.avif",
//       icon: <Twitter />,
//       link: "https://in.linkedin.com/",
//     },
//     {
//       id: 3,
//       name: "Mr. Janak Sahu",
//       role: "Admin & MIS Head",
//       image: "images/3rd.avif",
//       icon: <Twitter />,
//       link: "https://in.linkedin.com/",
//     },
//     {
//       id: 4,
//       name: "Mr. Shippu Sharma",
//       role: "Senior Software Engineer",
//       image: "images/4th.avif",
//       icon: <Linkedin />,
//       link: "https://in.linkedin.com/in/shippu-sharma",
//     },
//     {
//       id: 5,
//       name: "Er. Zafaryab Khan",
//       role: "Project Lead",
//       image: "images/5th.avif",
//       icon: <Twitter />,
//       link: "https://in.linkedin.com/",
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section with Video */}
//       <section className="relative isolate px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full h-full z-10  overflow-hidden">
//         {/* Background Video */}
//         <video
//           src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
//           type="video/mp4"
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           muted
//           loop
//           playsInline
//           unoptimized="true"
//         ></video>

//         <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10 text-center pt-15 sm:pt-20 md:pt-20 lg:pt-20">
//           {/* Intro */}
//           <IntroHead
//             HomeHeroBadge="2025"
//             HomeSubHeroBadge="Dig Deep About Us"
//             main="Learn More About Gloitel"
//             sub="Let's Deep Dive!"
//             description="We are a healthtech AI company. The dedicated team of tech-savvy enthusiasts and developers who bring to the table the best IT solutions."
//           />

//           {/* Buttons */}
//           <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
//             <Link
//               href="/contact"
//               className="w-full sm:w-auto text-center rounded-md bg-white px-5 py-2.5 text-md text-black shadow-lg hover:bg-indigo-500 hover:text-title transition"
//             >
//               Connect With Us
//             </Link>
//             <Link
//               href="/about"
//               className="w-full sm:w-auto text-center backdrop-blur-md bg-white/10 px-5 py-2.5 rounded-md shadow-lg text-md text-title"
//             >
//               What is Gloitel?
//             </Link>
//           </div>

//           {/* Thumbnail with Play Button */}
//           <div className="mt-10 w-full sm:w-3/4 lg:w-5/6">
//             <div
//               className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10 cursor-pointer"
//               onClick={() => setShowVideo(true)}
//             >
//               <div className="relative w-full pt-[56.25%]">
//                 <img
//                   src="https://img.youtube.com/vi/AMzVBmvh1Z0/maxresdefault.jpg"
//                   alt="Video Thumbnail"
//                   className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-blue-600/90 rounded-full shadow-lg">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="white"
//                       viewBox="0 0 24 24"
//                       className="w-8 sm:w-10 h-8 sm:h-10"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Modal Video */}
//           {showVideo && (
//             <>
//               {/* Disable background scroll */}
//               <style jsx global>{`
//                 body {
//                   overflow: hidden;
//                 }
//               `}</style>

//               <div
//                 className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-32 p-4 sm:p-6 animate-fadeIn"
//                 onClick={() => setShowVideo(false)}
//               >
//                 {/* Stop propagation so clicking inside doesn’t close modal */}
//                 <div
//                   className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black/30 border border-white/10 shadow-2xl"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   {/* YouTube Iframe */}
//                   <iframe
//                     key={showVideo ? "video-playing" : "video-stopped"}
//                     src={
//                       showVideo
//                         ? "https://www.youtube.com/embed/AMzVBmvh1Z0?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1"
//                         : ""
//                     }
//                     title="Gloitel Presentation"
//                     className="absolute inset-0 w-full h-full rounded-2xl border-none"
//                     style={{
//                       overflow: "hidden",
//                       clipPath: "inset(0 0 0 0 round 12px)",
//                     }}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                   {/* Close Button */}
//                   <button
//                     onClick={() => setShowVideo(false)}
//                     className="absolute top-0 right-0 bg-white/20 hover:bg-white/40 text-title p-2 rounded-full backdrop-blur-sm transition-all duration-200 z-32"
//                     aria-label="Close video"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-5 h-5 sm:w-6 sm:h-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>
//       <HorizontalDivider />
//       {/* About Section 1 */}
// <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 ">
//   <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-30">
//     <div className="order-1 md:order-2">
//       <AboutAboutContent
//         AboutBadge="Gloitel Vision"
//         AboutHeading="Empowering Businesses"
//         AboutSubHeading="with Innovation"
//         AboutContents1={[
//           {
//             title: "Your Vision, Our Expertise",
//             text: "We craft digital experiences that drive success, delivering seamless IT solutions in HealthTech, AI, Cloud, and more.",
//           },
//           {
//             title: "Innovation Meets Excellence",
//             text: "From data intelligence to business automation, we deliver modern, scalable, and future-ready technologies that elevate your operations.",
//           },
//         ]}
//         ButtonText="Book an Appointment"
//         Buttonlink="/contact"
//         HomeAboutTexts="200+ Agencies Rated"
//       />
//     </div>
//     <div className="order-2 md:order-1">
//       <AboutAboutImg1 ImgLink="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928419/Gloitel/aboutone_fulkws.webp" />
//     </div>
//   </div>
// </section>
// <HorizontalDivider />
// {/* About Section 2 */}
// <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
//   <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//     <AboutAboutContent
//       AboutBadge="Gloitel Mission"
//       AboutHeading="Smarter Solutions with"
//       AboutSubHeading="AI-Powered Precision"
//       AboutContents2={[
//         {
//           title: "AI-Driven Innovation, Every Step of the Way",
//           text: "From concept to completion, we integrate AI-driven insights to streamline processes, enhance efficiency, and bring your vision to life effortlessly.",
//         },
//         {
//           title: "Beyond Just Delivery – Continuous AI Support",
//           text: "Our commitment doesn’t end at launch. With AI-powered monitoring, automated updates, and real-time optimizations, we ensure your systems evolve with your needs.",
//         },
//       ]}
//       ButtonText="Book an Appointment"
//       Buttonlink="/contact"
//       HomeAboutTexts="900+ People Rated"
//     />
//     <AboutAboutImg2 ImgLink="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762928416/Gloitel/abouttwo_pic4v5.webp" />
//   </div>
// </section>
//       <HorizontalDivider />
// {/* Team Members Section */}
// <section className="relative isolate px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
//   <BgSquare3 />
//   <div className="flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10">
//     <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 text-center">
//       <CenterBadge TechnologyBadge="Team Members" />
//       <MiddleSectionHeads
//         SectionHead="Meet the Team Making"
//         SectionSubHead="Things Happen Every Day"
//         SectionDescription="Our team is made up of passionate professionals who bring their expertise and creativity to every project."
//       />
//       <GlowButton
//         ButtonText="Book a 15-min call"
//         Buttonlink="/contact"
//         className="mt-6 sm:mt-8"
//       />
//     </div>

//     {/* Team Grid */}
//     {/* grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
//     <div className="mt-12 flex flex-wrap justify-center gap-6 w-full">
//       {stages.map((item) => (
//         <div
//           key={item?.id}
//           className="relative bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-3 rounded-3xl shadow-lg overflow-hidden border border-white/10"
//         >
//           <img
//             src={item?.image}
//             alt={item?.name}
//             className="w-full h-60 sm:h-72 lg:h-[400px] object-cover rounded-2xl border-2 border-gray-500/10"
//           />
//           <div className="absolute inset-x-0 bottom-0 m-3 sm:m-5 rounded-xl bg-gradient-to-r from-gray-900/90 to-black/80 p-3 sm:p-4 backdrop-blur-md flex justify-between items-center border-2 border-gray-500/30">
//             <div>
//               <h3 className="text-sm sm:text-[16px] font-semibold text-title mb-1">
//                 {item?.name}
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-300">
//                 {item?.role}
//               </p>
//             </div>
//             <Link href={item?.link}>
//               <div className="flex items-center justify-center w-10 h-10 px-3 py-3 rounded-lg bg-white/5 text-gray-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] border-2 border-gray-400/20">
//                 {item?.icon}
//               </div>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//       <HorizontalDivider />
//       {/* Culture Section */}

//       {/* FAQ + CTA */}
//       <FAQPage />
//       <JoinUsNow />
//     </>
//   );
// };

// export default AboutPage;

import {
  WhoWeAre,
  OurJourney,
  OurProcess,
  OurServices,
  OurTeam,
  OurCulture,
  OptimizationProcess,
  IndustriesWeServe,
  TechnologyEcosystem,
  ClientTestimonials,
  ExecutionPlanCTA,
} from '@/components/About';
import EngineeringHeroSection from '@/components/EngineeringHeroSection';
import { aiEngineeringHeroData } from './data';

const page = () => {
  return (
    <main className='text-title bg-black'>
      <EngineeringHeroSection
        badgeText={aiEngineeringHeroData.badgeText}
        title={aiEngineeringHeroData.title}
        description={aiEngineeringHeroData.description}
        image={aiEngineeringHeroData.image}
        imageAlt={aiEngineeringHeroData.imageAlt}
        primaryButton={aiEngineeringHeroData.primaryButton}
        secondaryButton={aiEngineeringHeroData.secondaryButton}
      />

      <WhoWeAre />
      <OurJourney />
      <OurProcess />
      <OurServices />
      <OurTeam />
      <OurCulture />
      <OptimizationProcess />
      <IndustriesWeServe />
      <TechnologyEcosystem />
      <ClientTestimonials />
      <ExecutionPlanCTA />
    </main>
  );
};

export default page;
