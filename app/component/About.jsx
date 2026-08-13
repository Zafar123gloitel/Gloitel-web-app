// import React from "react";
// import { LeftBadge } from "./Badge";
// import { GlowButton } from "./Button";
// import { HorizontalDivider, VerticalDivider } from "./SectionDivider";
// import Image from "next/image";
"use client"
import { Rocket } from "lucide-react";
import { aiEngagementSectionHead, aiPilotData, discoverySprintData } from "../(what-we-do)/ai-intelligent-systems/data";
import Assess from "../(what-we-do)/components/Assess";
import { Button, Card, CardIcon, CardShowcase, CardTitle, GlowButton } from "../../components";
import { mobileEngineeringCTAData, mobileProcessSectionHead } from "../engineering/mobile-engineering/data";
import GlowPanel from "./GlowPanel";
import { BgSquare2, BgSquare3 } from "./BgSquare";
import StrategyBadge from "../../components/StrategyBadge";
import { MiddleSectionHeads } from "./SectionHeads";
import TimelineCard from "../uiComponents/TimelineCard";
import Discover from "../(what-we-do)/components/Discover";
import PurposeCard from "../(what-we-do)/components/PurposeCard";
import { businessAnalysisProcessData, businessAnalysisProcessSectionHead } from "../engineering/business-analysis/data";
import { section } from "framer-motion/client";
import AI_Solutions from "../uiComponents/AI_Solutions";
import { aiEcosystemData } from "../engineering/ai-engineering/data";
import TestimonialCard from "./TestimonialCard";
import Execution_Plan from "../uiComponents/Execution_Plan";
import HelpCard from "./HelpCard";
import { aiBuildProcessSectionHead, aiSystemsData, aiSystemsSectionHead, clientTestimonialsData, clientTestimonialsSectionHead, designTestData, executionPlanSectionHead, helpCards, helpData, hypothesizeData, identifyOpportunitiesData, implementMonitorData, industriesWeServeData, industriesWeServeSectionHead, instrumentMeasureData, modelSelectionData, optimizationProcessSectionHead, scalingSolutions, scalingSolutionsHead, teamCardsData, teamCardsSectionHead, teamCardsTabs, useCaseDefinitionData, whoThisIsForSectionHead, whoThisIsForTimelineData } from "../about/data";
import { CenterBadge } from "./Badge";
import GalleryScroll from "./GalleryScroll";
import IconCard from "../../components/card-showcase/IconCard";
import React, { useRef } from "react";
import { TestimonialButton } from "../../components/atoms/button/Button";


// // FOR HOME PAGE
// export const HomeAboutContent = ({
//   Buttonlink,
//   ButtonText,
//   HomeAboutBadge,
//   homeAboutHeading,
//   HomeAboutSubHeading,
//   HomeAboutDescription,
//   // children,
//   HomeAboutFeatures = [], // array of { icon, title }
//   HomeAboutTexts,
// }) => {
//   return (
//     <div className="flex flex-col">
//       <HomeAboutContentHead
//         HomeAboutBadge={HomeAboutBadge}
//         homeAboutHeading={homeAboutHeading}
//         HomeAboutSubHeading={HomeAboutSubHeading}
//         HomeAboutDescription={HomeAboutDescription}
//         HomeAboutTexts={HomeAboutTexts}
//       />

//       {/* {children}
//       {/* Features List */}
//       {HomeAboutFeatures.length > 0 && (
//         <dl className="mt-6 sm:mt-8 space-y-5 text-gray-400">
//           {HomeAboutFeatures.map((feature, i) => (
//             <div key={i} className="relative">
//               <dt className="flex items-center gap-4 text-sm sm:text-base lg:text-md">
//                 <span className="left-1 w-5 h-5 text-indigo-400">
//                   <svg
//                     className="w-6 h-6 "
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.1609 10.1086L11.3309 14.9386C11.1909 15.0786 11.0009 15.1586 10.8009 15.1586C10.6009 15.1586 10.4109 15.0786 10.2709 14.9386L7.85086 12.5186C7.56086 12.2286 7.56086 11.7486 7.85086 11.4586C8.14086 11.1686 8.62086 11.1686 8.91086 11.4586L10.8009 13.3486L15.1009 9.04859C15.3909 8.75859 15.8709 8.75859 16.1609 9.04859C16.4509 9.33859 16.4509 9.81859 16.1609 10.1086Z"
//                       fill="#1F51FF"
//                     />
//                   </svg>
//                 </span>
//                 {feature.title}
//               </dt>
//             </div>
//           ))}
//         </dl>
//       )}
//       {/* Buttons & Badge */}
//       <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row-reverse md:flex-row items-start sm:items-center gap-4">
//         <GlowButton ButtonText={ButtonText} Buttonlink={Buttonlink} />
//         <VerticalDivider />
//         <div className="ml-0 sm:ml-0 md:ml-5 gap-1">
//           <div className="flex flex-row gap-1">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <svg
//                 key={i}
//                 fill="#FFFFFF"
//                 className="w-4 h-4"
//                 viewBox="0 0 36 36"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   className="clr-i-solid clr-i-solid-path-1"
//                   d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z"
//                 ></path>
//               </svg>
//             ))}
//           </div>
//           <span className="text-gray-400 text-xs sm:text-sm">
//             {HomeAboutTexts}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const HomeAboutContentHead = ({
//   HomeAboutBadge,
//   homeAboutHeading,
//   HomeAboutSubHeading,
//   HomeAboutDescription,
// }) => {
//   return (
//     <div className="flex flex-col w-xl">
//       {/* Badge */}
//       <LeftBadge HomeAboutBadge={HomeAboutBadge} />
//       {/* Headings */}
//       <h3 className="text-3xl sm:text-3xl lg:text-5xl text-title">
//         {homeAboutHeading}
//       </h3>
//       <h3 className="text-3xl sm:text-3xl lg:text-5xl  text-gray-400 mt-2">
//         {HomeAboutSubHeading}
//       </h3>
//       <p className="text-base sm:text-sm lg:text-base  text-gray-400 mt-8">
//         {HomeAboutDescription}
//       </p>
//     </div>
//   );
// };

// export const HomeAboutImg = ({ ImgLink }) => {
//   return (
//     <>
//       <div className=" relative flex justify-center lg:justify-start">
//         <div className="absolute bottom-0 sm:bottom-0 md:bottom-0 lg:bottom-0 translate-x-0 md:translate-x-0 lg:translate-x-30 w-[40%] sm:w-[40%] md:w-[50%] lg:w-[50%] h-[50px] bg-blue-700 blur-[30px] rounded-full pointer-events-none" />
//         <div className="p-3 backdrop-blur-md w-full sm:w-4/5 md:w-full lg:w-full h-auto md:h-1/2 rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 ring-1 ring-white/5">
//           <Image
//             width={1920}
//             height={1080}
//             src={ImgLink}
//             alt="About section"
//             className="w-full h-full rounded-3xl shadow-2xl ring-1 ring-white/5"
//             unoptimized
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// // FOR ABOUT PAGE
// export const AboutAboutContent = ({
//   // ABOUT FIRST HEADING AND SUB HEADING
//   AboutBadge,
//   AboutHeading,
//   AboutSubHeading,
//   AboutContents1 = [], // array of { title, text }
//   AboutContents2 = [], // array of { title, text }
//   ButtonText,
//   Buttonlink,
//   HomeAboutTexts,
//   // ABOUT SECOND HEADING AND SUB HEADING
// }) => {
//   return (
//     <div className="flex flex-col">
//       <AboutAboutContentHead
//         // ABOUT FIRST HEADING AND SUB HEADING
//         AboutBadge={AboutBadge}
//         AboutHeading={AboutHeading}
//         AboutSubHeading={AboutSubHeading}
//       />
//       <HorizontalDivider />
//       {/* Dynamic Content Blocks */}
//       {AboutContents1.map((content, i) => (
//         <div key={i} className="mt-4 sm:mt-6 w-lg">
//           {content.title && (
//             <p className="text-sm sm:text-base lg:text-lg text-title leading-relaxed mb-2">
//               {content.title}
//             </p>
//           )}
//           {content.text && (
//             <p className="text-sm sm:text-sm lg:text-[15px] text-gray-400 leading-relaxed">
//               {content.text}
//             </p>
//           )}
//         </div>
//       ))}
//       {AboutContents2.map((content, i) => (
//         <div key={i} className="mt-4 sm:mt-6 w-lg">
//           {content.title && (
//             <p className="text-sm sm:text-base lg:text-lg text-title leading-relaxed mb-2">
//               {content.title}
//             </p>
//           )}
//           {content.text && (
//             <p className="text-sm sm:text-sm lg:text-[15px] text-gray-400 leading-relaxed">
//               {content.text}
//             </p>
//           )}
//         </div>
//       ))}

//       {/* Buttons & Badge */}
//       <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
//         <GlowButton ButtonText={ButtonText} Buttonlink={Buttonlink} />
//         <VerticalDivider />
//         <div className="ml-5 gap-1">
//           <div className="flex flex-row gap-1">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <svg
//                 key={i}
//                 fill="#FFFFFF"
//                 className="w-4 h-4"
//                 viewBox="0 0 36 36"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   className="clr-i-solid clr-i-solid-path-1"
//                   d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z"
//                 ></path>
//               </svg>
//             ))}
//           </div>

//           <span className="text-gray-400 text-xs sm:text-sm">
//             {HomeAboutTexts}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const AboutAboutContentHead = ({
//   AboutBadge,
//   AboutHeading,
//   AboutSubHeading,
// }) => {
//   return (
//     <div className="flex flex-col">
//       {/* Badge */}
//       <LeftBadge AboutBadge={AboutBadge} />
//       {/* Headings */}
//       <h3 className="text-2xl sm:text-3xl lg:text-5xl  text-title">
//         {AboutHeading}
//       </h3>
//       <h3 className="text-2xl sm:text-3xl lg:text-5xl text-gray-400 mt-2">
//         {AboutSubHeading}
//       </h3>
//     </div>
//   );
// };

// export const AboutAboutImg1 = ({ ImgLink }) => {
//   return (
//     <>
//       <div className="flex justify-center lg:justify-start">
//         <div className="p-3 backdrop-blur-md w-full sm:w-4/5 lg:w-lg rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 ring-1 ring-white/5">
//           <Image
//             width={1920}
//             height={1080}
//             src={ImgLink}
//             alt="About section"
//             className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/5"
//             unoptimized
//           />
//         </div>
//       </div>
//     </>
//   );
// };
// export const AboutAboutImg2 = ({ ImgLink }) => {
//   return (
//     <>
//       <div className="flex justify-center lg:justify-start">
//         <div className="p-3 backdrop-blur-md w-full sm:w-4/5 lg:w-lg rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 ring-1 ring-white/5">
//           <Image
//             width={1920}
//             height={1080}
//             src={ImgLink}
//             alt="About section"
//             className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/5"
//             unoptimized
//           />
//         </div>
//       </div>
//     </>
//   );
// };








/* ---------------------------------------------------------
   FIX #1: id="who-we-are" -> Roadmap intro section (image #2)
--------------------------------------------------------- */
export const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="">
      <GlowPanel />
      <Assess
        badgeText={aiSystemsSectionHead.badgeText}
        title={aiSystemsSectionHead.title}
        description={aiSystemsSectionHead.description}
        image={aiSystemsSectionHead.image}
        imageAlt={aiSystemsSectionHead.imageAlt}
      />

      <CardShowcase
        items={aiSystemsData}
        showDivider={false}
        showStepBadge={false}
        gridClassName={""}
        cardClassName={""}
        cardHeight={"h-[263px] w-[302px]"}
        titleClassName={"text-[28px]"}
        descriptionClassName={"text-[14px] text-description "}
        iconClassName={""}
      />
    </section>
  );
};

/* ---------------------------------------------------------
   id="our-journey" -> Timeline section (image #3) - already correct
--------------------------------------------------------- */
export const OurJourney = () => {

  return (
    <section id="our-journey" className="">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={whoThisIsForSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={whoThisIsForSectionHead.title}
            SectionSubHead=""
            SectionDescription={whoThisIsForSectionHead.description}
          />
        </div>
      </div>
      <div className="sm:w-[80%] -mt-10 mx-auto">
        <div className="relative px-5">
          <div className="absolute left-10 sm:left-1/2 top-20 bottom-20 z-0 w-[0.5px] -translate-x-1/2 bg-white/50" />
          <div className="relative flex flex-col">
            {whoThisIsForTimelineData.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                side={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




export const OurProcess = () => {
  return (
    <section id="our-process" className="">
      <div className="">
        <div className="flex flex-col mt-20 items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5  w-full sm:w-1/2 lg:w-1/2 text-center">
            <span>
              <StrategyBadge text={aiBuildProcessSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={aiBuildProcessSectionHead.title}
              SectionDescription={aiBuildProcessSectionHead.description}
            />
          </div>

          <Discover
            badgeText={useCaseDefinitionData.badgeText}
            title={useCaseDefinitionData.title}
            description={useCaseDefinitionData.description}
            cardTitle={useCaseDefinitionData.cardTitle}
            image={useCaseDefinitionData.image}
            imageAlt={useCaseDefinitionData.imageAlt}
          />
          <Assess
            badgeText={modelSelectionData.badgeText}
            title={modelSelectionData.title}
            description={modelSelectionData.description}
            cardTitle={modelSelectionData.cardTitle}
            image={modelSelectionData.image}
            imageAlt={modelSelectionData.imageAlt}

          />
        </div>
      </div>
    </section>
  );
};



export const OurServices = () => {
  return (
    <section id="our-services" className="">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col w-full gap-6.5 -mt-40 sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={scalingSolutionsHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={scalingSolutionsHead.title}
            SectionSubHead=""
            sectionIocn={scalingSolutionsHead.icon}
            SectionDescription={scalingSolutionsHead.description}
          />
        </div>
      </div>

      <div className="sm:w-[80%] -mt-10 mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-5 ">
          {scalingSolutions.map((item) => (
            <PurposeCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export const OurTeam = () => {
  return (
    <section id="our-team" className="">
      <HelpCard
        badgeText={teamCardsSectionHead.badgeText}
        title={teamCardsSectionHead.title}
        description={teamCardsSectionHead.description}
        data={teamCardsData}
        tabs={teamCardsTabs}
      />
    </section>
  );
};

export const OurCulture = () => {
  return (
    <section
      id="our-culture"
      className="relative flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden"
    >

      <BgSquare2 />

      {/* Section Heading */}
      <div className=" flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2">
        <span>
          <StrategyBadge text={"How we Help you Scale"} />
        </span>

        <MiddleSectionHeads
          SectionHead={"Engineering for the Next Stage of Growth"}
          SectionDescription={"From infrastructure and databases to engineering processes, we focus on the areas that matter most for sustainable scale."}
        />
      </div>

      <div className="overflow-x-auto scrollbar-hide mt-12 w-full">
        <GalleryScroll />
      </div>

    </section>
  );
};




export const OptimizationProcess = () => {
  return (
    <section id="optimization-process" className="">
      <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
        <BgSquare2 />
        <div className="flex flex-col gap-6.5 -mt-44 w-full sm:w-1/2 lg:w-1/2 text-center">
          <span>
            <StrategyBadge text={optimizationProcessSectionHead.badgeText} />
          </span>
          <MiddleSectionHeads
            SectionHead={optimizationProcessSectionHead.title}
            SectionDescription={optimizationProcessSectionHead.description}
          />
        </div>
      </div>

      <div className="sm:w-[95%]  mx-auto flex flex-col gap-16 px-5">
        <Discover
          badgeText={instrumentMeasureData.badgeText}
          title={instrumentMeasureData.title}
          description={instrumentMeasureData.description}
          cardTitle={instrumentMeasureData.cardTitle}
          image={instrumentMeasureData.image}
          imageAlt={instrumentMeasureData.imageAlt}
        />
        <Assess
          badgeText={identifyOpportunitiesData.badgeText}
          title={identifyOpportunitiesData.title}
          description={identifyOpportunitiesData.description}
          cardTitle={identifyOpportunitiesData.cardTitle}
          image={identifyOpportunitiesData.image}
          imageAlt={identifyOpportunitiesData.imageAlt}
        />
        <Discover
          badgeText={hypothesizeData.badgeText}
          title={hypothesizeData.title}
          description={hypothesizeData.description}
          cardTitle={hypothesizeData.cardTitle}
          image={hypothesizeData.image}
          imageAlt={hypothesizeData.imageAlt}
        />
        <Assess
          badgeText={designTestData.badgeText}
          title={designTestData.title}
          description={designTestData.description}
          cardTitle={designTestData.cardTitle}
          image={designTestData.image}
          imageAlt={designTestData.imageAlt}
        />
        <Discover
          badgeText={implementMonitorData.badgeText}
          title={implementMonitorData.title}
          description={implementMonitorData.description}
          cardTitle={implementMonitorData.cardTitle}
          image={implementMonitorData.image}
          imageAlt={implementMonitorData.imageAlt}
        />
      </div>
    </section>
  );
};

/* ---------------------------------------------------------
   id="industries-we-serve" - already correct
--------------------------------------------------------- */
export const IndustriesWeServe = () => {
  return (
    <section id="industries-we-serve">
      <section className="my-20">
        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          <BgSquare2 />
          <div className="flex flex-col gap-6.5 -mt-10 w-full mb-52 sm:w-1/2 lg:w-1/2 text-center">
            {/* Badge */}
            <span>
              <StrategyBadge text={industriesWeServeSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={industriesWeServeSectionHead.title}
              SectionSubHead=" "
              SectionDescription={industriesWeServeSectionHead.description}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mt-20 gap-6 justify-center">
          {industriesWeServeData.map((item, index) => (
            <IconCard
              key={index}
              name={item.title}
              // logo={item.logo}
              icontype={true}
              Icon={item.icon}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export const TechnologyEcosystem = () => {
  return (
    <section id="technology-ecosystem">
      <AI_Solutions
        badge={aiEcosystemData.badge}
        title={aiEcosystemData.title}
        description={aiEcosystemData.description}
        tabs={aiEcosystemData.tabs}
        technologies={aiEcosystemData.technologies}
      />
    </section>
  );
};















export const ClientTestimonials = () => {
  const testimonialsRef = useRef(null);

  const scrollTestimonials = (direction) => {

    console.log("first")
    if (!testimonialsRef.current) return;

    const container = testimonialsRef.current;

    // First card ko find karo
    const firstCard = container.firstElementChild;

    if (!firstCard) return;

    // Card width + gap
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24;

    const scrollAmount = cardWidth + gap;

    container.scrollTo({
      left:
        direction === "right"
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount,
      behavior: "smooth",
    });

  };

  return (
    <section
      id="client-testimonials"
      className="flex min-h-screen items-center justify-center bg-black px-5 py-20"
    >
      <section className="my-20 w-full">
        {/* Section Heading */}
        <div className="relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center">
          <BgSquare2 />

          <div className="-mt-10 mb-52 flex w-full flex-col items-center justify-center gap-6.5 text-center sm:w-1/2 lg:w-1/2">
            <span>
              <StrategyBadge
                text={clientTestimonialsSectionHead.badgeText}
              />
            </span>

            <MiddleSectionHeads
              SectionHead={clientTestimonialsSectionHead.title}
              SectionSubHead=""
              SectionDescription={
                clientTestimonialsSectionHead.description
              }
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative z-10 -mt-20">
          {/* Navigation Buttons */}
          <div className="mb-8 flex justify-end gap-4 px-5 sm:px-10 lg:px-20 ">
            <TestimonialButton
              className="h-12 min-w-12"
              ariaLabel="Previous testimonials"
              onClick={() => scrollTestimonials("left")}
            />

            <TestimonialButton
              className="h-12 min-w-12"
              direction="right"
              ariaLabel="Next testimonials"
              onClick={() => scrollTestimonials("right")}
            />
          </div>

          {/* Cards Container */}
          <div
            ref={testimonialsRef}
            className="flex gap-5 overflow-x-auto w-[90%] mx-auto "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {clientTestimonialsData.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="  shrink-0 "
              >
                <TestimonialCard
                  name={testimonial.name}
                  designation={testimonial.designation}
                  description={testimonial.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export const ExecutionPlanCTA = () => {
  return (
    <section id="execution-plan">
      <Execution_Plan
        badgeText={executionPlanSectionHead.badgeText}
        title={executionPlanSectionHead.title}
        description={executionPlanSectionHead.description}
        buttonText={executionPlanSectionHead.buttonText}
        buttonLink={executionPlanSectionHead.buttonLink}
        onclick={() => ({})}
      />
    </section>
  );
};

