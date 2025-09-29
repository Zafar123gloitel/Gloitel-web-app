"use client";

import React, { useState } from "react";

import { FAQPage } from "../component/Faq";
import JoinUsNow from "../component/JoinUsNow";
import { GlowButton } from "../component/Button";
import ContactForm from "../component/ContactForm";
import { HeroHeading, HeroVideoBg, HeroViideoBg } from "../component/HeroHead";

const AboutPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const stages = [
    {
      id: 1,
      name: "CGMMSSY",
      date: 2018,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 2,
      name: "PATH IAS ACADEMY",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 3,
      name: "HRM TECHNOLOGY",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 4,
      name: "Experteeth",
      date: 2023,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 5,
      name: "Godhaar",
      date: 2025,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 6,
      name: "Fitbattle",
      date: 2025,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 7,
      name: "VIADYAM (HMS)",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
    {
      id: 8,
      name: "STAFFEASE (CRM)",
      date: 2024,
      image:
        "https://framerusercontent.com/images/mwSqQ9UKMvUvejak30qlmlWS8.jpeg?scale-down-to=1024",
    },
  ];

  return (
    <>
      <section className="relative isolate sm:px-6 lg:px-8 py-16 lg:py-30 w-full h-full overflow-hidden">
        {/* Background Video */}
        <HeroVideoBg />

        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10">
          {/* Intro */}
          <HeroHeading />

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <GlowButton CreationBuild="Build your Project" />
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
