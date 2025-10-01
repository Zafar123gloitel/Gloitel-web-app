// components/ProjectShowcase.jsx

import React from "react";

// --- Data for the component ---
const projectData = {
  // Data for the Hero/Tablet Section (Image 1)

  // Data for the Text Sections (Image 2) - Using the MMSSY example
  sections: [
    {
      heading: "Business Requirements",
      items: [
        "Develop a user-friendly website to disseminate information about MMSSY.",
        "Integrate a Management Information System (MIS) for real-time data management and reporting.",
        "Ensure accessibility for stakeholders, including patients, healthcare providers, and administrators.",
      ],
    },
    {
      heading: "Challenges",
      items: [
        "Implementing real-time data tracking for 120 MMUs operating across the state.",
        "Ensuring data accuracy and compliance with healthcare regulations.",
        "Facilitating user engagement across diverse demographics.",
      ],
    },
    {
      heading: "Our Approach",
      items: [
        "Conducted comprehensive research on MMSSY's objectives and target audience.",
        "Collaborated with healthcare professionals to understand workflow and data requirements.",
        "Designed a scalable architecture to accommodate future expansions.",
      ],
    },
  ],
};

// --- Sub-Component for Text Sections (Image 2) ---
const DetailsSection1 = ({ heading }) => (
  <div className="py-8">
    <h2 className="text-3xl font-bold text-white mb-6">{heading}</h2>
    {/* Horizontal line separator */}
  </div>
);
const DetailsSection2 = ({ items }) => (
  <div className="py-8">
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-gray-300">
          <span className="text-lg text-white mr-3">•</span>{" "}
          {/* Simple bullet point */}
          <p className="flex-1 text-base">{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Page Component ---
const ProjectShowcase = () => {
  const { hero, details, sections } = projectData;

  return (
    <div className="min-h-screen  text-white">
      {/* Container for the page content */}
      <main className="container mx-auto px-4 py-12 w-6xl">
        {/* --- 1. Hero / Tablet Showcase (Image 1) --- */}

        {/* --- 2. Project Details and Text Sections (Images 2 & 3) --- */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Details Card - Left Column (Image 3) */}
          <div className="lg:col-span-1">
            {sections.map((section, index) => (
              <DetailsSection1 key={index} {...section} />
            ))}
          </div>

          {/* Text Sections - Right Column (Image 2) */}
          <div className="lg:col-span-2 space-y-10">
            {sections.map((section, index) => (
              <DetailsSection2 key={index} {...section} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectShowcase;
