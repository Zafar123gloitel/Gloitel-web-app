'use client';

import Asked_Q from '@/components/what-we-do/Asked_Q';

// export const FaqItem = ({ title, description }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-white/5 border border-white/10 rounded-3xl shadow-md mb-7">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex justify-between items-center p-6 text-left font-medium text-title focus:outline-none cursor-pointer"
//       >
//         <span>{title}</span>
//         <span className="text-2xl">{isOpen ? "−" : "+"}</span>
//       </button>
//       {isOpen && <p className="px-7 pb-7 text-description">{description}</p>}
//     </div>
//   );
// };

export const FAQPage = () => {
  const faqs = [
    {
      title: 'What services does your IT company provide?',
      description:
        'We offer website development, mobile app development, AI solutions, and IT consulting to help businesses grow digitally.',
    },
    {
      title: 'Do you provide custom website and app development?',
      description:
        'Yes! We build custom websites and mobile apps tailored to your specific needs and business goals.',
    },
    {
      title: 'How does AI enhance your services?',
      description:
        'We use AI-powered solutions for automation, chatbots, data analysis, and personalized user experiences to improve efficiency and engagement.',
    },
    {
      title: 'Can you redesign my existing website or app?',
      description:
        'Absolutely! We can revamp your website or app with modern design, better performance, and enhanced user experience.',
    },
    {
      title: 'Do you offer cloud solutions and hosting services?',
      description:
        'Yes! We provide cloud hosting, AWS, Azure, and other cloud-based solutions for secure and scalable performance.',
    },
    {
      title: 'How do I get started?',
      description:
        'Simply contact us with your project details, and our team will guide you through the process! ',
    },
  ];

  return (
    // <section className="py-0 px-6 sm:px-12 lg:px-24 lg:pt-0 min-h-screen flex items-center ">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-6xl">
    //     {/* Left Side - Heading */}
    //     <div className="lg:col-span-5 flex flex-col ">
    //       {/* Badge */}
    //       <div className="flex flex-col items-start">
    //         {/* Badge */}
    //         <LeftBadge FaqBadge="How We Work" />

    //         {/* Headings */}
    //         <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-title">
    //           Frequently
    //         </h3>
    //         <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-400 mt-2">
    //           Asked Questions
    //         </h3>

    //         {/* Description */}
    //         <div>
    //           <p className="mt-4 sm:mt-6 text-base sm:text-md text-description max-w-2xl">
    //             Have questions? Our FAQ section has you covered with quick
    //             answers to the most common inquiries.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Side - Questions */}
    //     <div className="lg:col-span-7">
    //       <div className="space-y-4">
    //         {faqs.map((faq, index) => (
    //           <FaqItem
    //             key={index}
    //             title={faq.title}
    //             description={faq.description}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <Asked_Q
        accordionData={faqs}
        badgeText={'How We Work'}
        sectionHead={'Frequently Asked Questions'}
        sectionSubHead=''
        sectionDescription={
          ' Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.'
        }
      />
    </>
  );
};
