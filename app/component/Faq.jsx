"use client";

import { useState } from "react";
import { LeftBadge } from "./Badge";

export const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl shadow-md mb-7">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left font-medium text-white focus:outline-none"
      >
        <span>{question}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="px-7 pb-7 text-white/60">{answer}</p>}
    </div>
  );
};

export const FAQPage = () => {
  const faqs = [
    {
      question: "What services does your IT company provide?",
      answer:
        "We offer website development, mobile app development, AI solutions, and IT consulting to help businesses grow digitally.",
    },
    {
      question: "Do you provide custom website and app development?",
      answer:
        "Yes! We build custom websites and mobile apps tailored to your specific needs and business goals.",
    },
    {
      question: "How does AI enhance your services?",
      answer:
        "We use AI-powered solutions for automation, chatbots, data analysis, and personalized user experiences to improve efficiency and engagement.",
    },
    {
      question: "Can you redesign my existing website or app?",
      answer:
        "Absolutely! We can revamp your website or app with modern design, better performance, and enhanced user experience.",
    },
    {
      question: "Do you offer cloud solutions and hosting services?",
      answer:
        "Yes! We provide cloud hosting, AWS, Azure, and other cloud-based solutions for secure and scalable performance.",
    },
    {
      question: " How do I get started?",
      answer: " How do I get started?",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 min-h-screen flex items-center ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-6xl">
        {/* Left Side - Heading */}
        <div className="lg:col-span-5 flex flex-col ">
          {/* Badge */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <LeftBadge FaqBadge="FAQ" />

            {/* Headings */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
              Frequently
            </h3>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-400 mt-2">
              Asked Questions
            </h3>

            {/* Description */}
            <div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-2xl">
                Have questions? Our FAQ section has you covered with quick
                answers to the most common inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Questions */}
        <div className="lg:col-span-7">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
