"use client";
import React, { use } from "react";
import { FAQPage } from "../../component/Faq";
import JoinUsNow from "../../component/JoinUsNow";
import {
  ProjectShowcase,
  ProjectShowcaseFourth,
  ProjectShowcaseSecond,
} from "../../component/ProjectShowcase";
import { IntroHead2 } from "../../uiComponents/Heading";
import Image from "next/image";
import projects from "./data.json";
import { GlowButton } from "../../component/Button";
import GlowPanel from "../../component/GlowPanel";
import { usePathname } from "next/navigation";

const Portfolio = ({ params }) => {
  const { id } = use(params); // unwrap params safely

  const project = projects.find((p) => p.id === Number(id));
  if (!project) return <p>Project not found</p>;

  // Logical groupings
  const firstSections = [
    { title: "Business Requirements", points: project.BusinessRequirements },
    { title: "Challenges", points: project.Challenges },
    { title: "Our Approach", points: project.OurApproach },
  ];
  const secondSections = [
    { title: "UI/UX Design Process", points: project.DesignProcess },
    { title: "Planning & Development", points: project.PlanningDevelopment },
  ];
  const thirdSections = [
    { title: "Design Process", points: project.ProjectDeliveryResults }, // already an array
  ];
  const fourthSections = [
    {
      title: `What is ${project.title}`,
      points: Array.isArray(project.what) ? project.what : [project.what],
    },
    { title: "How it Works", points: project.how }, // project.how is already an array
  ];

  const fifthSections = [
    { title: `What makes ${project.title} Stands Out`, points: project.why }, // already an array
  ];

  const sixthSections = [
    { title: `Benefits For ${project.industry}`, points: project.benefits }, // already an array
  ];
  return (
    <>
      <section className="relative px-4 sm:px-6 lg:px-8 py-28 lg:py-28 w-full mx-auto overflow-hidden">
        {/* Background video */}
        <video
          src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          type="video/mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          unoptimized="true"
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto pt-10 sm:pt-16 md:pt-20 lg:pt-24">
          {/* GRID SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start w-full">
            {/* LEFT SIDE: Project Overview */}
            <div className="flex flex-col gap-6">
              <IntroHead2
                HomeHeroBadge="CASE STUDY"
                HomeSubHeroBadge="Project Overview"
                main={project.name}
                description={project.description}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-3 my-4">
                {project.tag.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/20 border border-neutral-500/20 rounded-xl backdrop-blur-2xl py-2 px-4 text-sm sm:text-base"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Info Card */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="relative bg-black/20 backdrop-blur-3xl p-6 sm:p-8 md:p-10 rounded-2xl w-full sm:w-[90%] lg:w-[85%] xl:w-[80%] flex flex-col gap-4 shadow-xl border border-white/10 overflow-hidden">
                {/* Project Info */}
                <div>
                  {[
                    { label: "Project Type", value: project.projectType },
                    { label: "Industry", value: project.industry },
                    { label: "Tech Stack", value: project.techStack },
                  ].map((item, index) => (
                    <div className="mb-4" key={index}>
                      <p className="text-gray-400 text-sm sm:text-base mb-1">
                        {item.label}
                      </p>
                      <h3 className="text-title text-sm sm:text-base break-words">
                        {Array.isArray(item.value)
                          ? item.value.join(", ")
                          : item.value}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Background image */}
                <div className="absolute -bottom-10 -right-10 opacity-70">
                  <Image
                    src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762926076/Gloitel/utils/star_fzn7cv.svg"
                    alt="design"
                    width={180}
                    height={180}
                    unoptimized
                  />
                </div>

                {/* Button */}
                <div className="flex mt-4">
                  <GlowButton
                    ButtonText="View Live Website"
                    Buttonlink={project.liveUrl}
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE SECTIONS */}
          {/* IMAGE SECTIONS */}
          {Number(id) >= 1 &&
            Number(id) <= 4 &&
            [
              project.imageFir,
              project.imageSec,
              project.imageThir,
              project.imageFor,
            ].map(
              (img, idx) =>
                img && (
                  <div key={idx} className="mt-10 w-full max-w-6xl">
                    <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden">
                      <Image
                        src={img}
                        alt={project.name}
                        fill
                        className="object-cover rounded-2xl"
                        unoptimized
                      />
                    </div>

                    {/* Only first 4 images for id 1-4 */}
                    {idx === 0 && <ProjectShowcase sections={firstSections} />}
                    {idx === 1 && <ProjectShowcase sections={secondSections} />}
                    {idx === 2 && (
                      <ProjectShowcaseSecond sections={thirdSections} />
                    )}
                  </div>
                ),
            )}

          {Number(id) >= 5 &&
            Number(id) <= 8 &&
            [
              project.imageFir,
              project.imageSec,
              project.imageThir,
              project.imageFor,
              ...(project.additionalImages || []),
            ].map(
              (img, idx) =>
                img && (
                  <div key={idx} className="mt-10 w-full max-w-6xl">
                    <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden">
                      <Image
                        src={img}
                        alt={project.name}
                        fill
                        className="object-cover rounded-2xl"
                        unoptimized
                      />
                    </div>

                    {/* Only render ProjectShowcaseThird for id 5-8 */}
                    {idx === 0 && (
                      <ProjectShowcaseFourth sections={fourthSections} />
                    )}
                    {idx === 1 && (
                      // <ProjectShowcaseThird sections={fifthSections} />
                      <ProjectShowcaseFourth sections={fifthSections} />
                    )}
                    {idx === 2 && (
                      <ProjectShowcaseFourth sections={sixthSections} />
                    )}
                  </div>
                ),
            )}
        </div>
        <GlowPanel />
      </section>
      {/* Bottom Sections */}
      <FAQPage />
      <JoinUsNow />
    </>
  );
};

export default Portfolio;
