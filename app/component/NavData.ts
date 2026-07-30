export const links = [
  { href: "/", label: "Home" },

  {
    href: "/ai-strategy-consulting",   // 👈 add this
    label: "What we do",
    megaMenu: "whatWeDo",
  },

  {
    href: "/industries",
    label: "Industries",
    megaMenu: "industries",
  },

  {
    href: "/engineering",
    label: "Engineering",
    megaMenu: "engineering",
  },

  {
    href: "/about",
    label: "About us",
    megaMenu: "aboutUs",
  },

  {
    href: "/career",
    label: "Career",
    megaMenu: "career",
  },

  { href: "/contact", label: "Contact" },
];

  // Each key maps to an array of groups. Each group has a title and items.
export  const megaMenus = {
    whatWeDo: {
      width: "w-[1150px]",
      columns: "grid-cols-5",
      groupsSpan: "col-span-4 grid-cols-4",
      image: "/images/megananu.png",
      groups: [
        {
          title: "AI & Intelligent Systems",
          items: [
            {
              label: "AI Strategy & Consulting",
              href: "/ai-strategy-consulting",
            },
            { label: "Generative AI & LLMs", href: "/generative-ai-llms" },
            { label: "AI Agents & Automation", href: "/ai-agents-automation" },
            {
              label: "ML & Predictive Analytics",
              href: "/ml-predictive-analytics",
            },
            { label: "AI Integration", href: "/ai-integration" },
          ],
        },
        {
          title: "Product Engineering",
          items: [
            { label: "Discovery & Validation", href: "/discovery-validation" },
            { label: "MVP Development", href: "/mvp-development" },
            { label: "Platform Scaling", href: "/platform-scaling" },
            {
              label: "Fractional Engineering Teams",
              href: "/fractional-engineering-teams",
            },
          ],
        },
        {
          title: "Enterprise Modernization",
          items: [
            { label: "App Modernization", href: "/app-modernization" },
            { label: "Cloud Migration", href: "/cloud-migration" },
            {
              label: "Microservices Architecture",
              href: "/microservices-architecture",
            },
            { label: "Process Automation", href: "/process-automation" },
          ],
        },
        {
          title: "Digital Experience Design",
          items: [
            { label: "UX Research & Strategy", href: "/ux-research-strategy" },
            { label: "UI/UX Design", href: "/ui-ux-design" },
            { label: "Design Systems", href: "/design-systems" },
            {
              label: "ML & Predictive Analytics",
              href: "/ml-predictive-analytics",
            },
            { label: "CX Optimization", href: "/cx-optimization" },
          ],
        },
      ],
    },

    industries: {
      width: "w-[1150px]",
      columns: "grid-cols-5",
      groupsSpan: "col-span-4 grid-cols-4",
      image: "/images/megananu.png",
      groups: [
        {
          title: "Domain & Industries",
          items: [
            {
              label: "Healthcare & Medtech",
              href: "/industries/healthcare-medtech",
            },
            { label: "Finance & Banking", href: "/industries/finance-banking" },
            {
              label: "E-Commerce & Retail",
              href: "/industries/ecommerce-retail",
            },
            {
              label: "Real Estate & PropTech",
              href: "/industries/real-estate-proptech",
            },
            { label: "EdTech", href: "/industries/edtech" },
            {
              label: "Digital Marketing",
              href: "/industries/digital-marketing",
            },
          ],
        },
      ],
    },

    engineering: {
      width: "w-[1150px]",
 columns: "grid-cols-5",
      groupsSpan: "col-span-4 grid-cols-4",
      image: "/images/megananu.png",
      groups: [
        {
          title: "Types of Engineering",
          items: [
            { label: "AI Engineering", href: "/engineering/ai-engineering" },
            {
              label: "Frontend Engineering",
              href: "/engineering/frontend-engineering",
            },
            {
              label: "Backend Engineering",
              href: "/engineering/backend-engineering",
            },
            {
              label: "Mobile Engineering",
              href: "/engineering/mobile-engineering",
            },
            {
              label: "Full Stack Engineering",
              href: "/engineering/full-stack-engineering",
            },
            { label: "DevOps & Cloud", href: "/engineering/devops-cloud" },
            { label: "QA Engineering", href: "/engineering/qa-engineering" },
            { label: "IoT Engineering", href: "/engineering/iot-engineering" },
            {
              label: "Business Analysis",
              href: "/engineering/business-analysis",
            },
          ],
        },
      ],
    },

    aboutUs: {
      width: "w-[1150px]",
 columns: "grid-cols-5",
      groupsSpan: "col-span-4 grid-cols-4",
      image: "/images/megananu.png",
      groups: [
        {
          title: "Company",
          items: [
            { label: "Who We Are", href: "/about/who-we-are" },
            { label: "Our Journey", href: "/about/our-journey" },
            { label: "Mission & Vision", href: "/about/mission-vision" },
            { label: "What We Believe", href: "/about/what-we-believe" },
          ],
        },
        {
          title: "Expertise",
          items: [
            { label: "Our Expertise", href: "/about/our-expertise" },
            {
              label: "Industries We Serve",
              href: "/about/industries-we-serve",
            },
            {
              label: "Technology Ecosystem",
              href: "/about/technology-ecosystem",
            },
          ],
        },
        {
          title: "People",
          items: [
            { label: "Our Team", href: "/about/our-team" },
            { label: "Our Culture", href: "/about/our-culture" },
            {
              label: "Client Testimonials",
              href: "/about/client-testimonials",
            },
          ],
        },
      ],
    },

    career: {
      width: "w-[1150px]",
 columns: "grid-cols-5",
      groupsSpan: "col-span-4 grid-cols-4",
      image: "/images/megananu.png",
      groups: [
        {
          title: "Why Gloitel",
          items: [
            { label: "Why Join Gloitel", href: "/career/why-join-gloitel" },
            { label: "Benefits & Perks", href: "/career/benefits-perks" },
          ],
        },
        {
          title: "Opportunities",
          items: [
            { label: "Open Opportunities", href: "/career/open-opportunities" },
            { label: "Internships", href: "/career/internships" },
          ],
        },
        {
          title: "Hiring",
          items: [
            { label: "Our Hiring Process", href: "/career/our-hiring-process" },
            { label: "Employee Stories", href: "/career/employee-stories" },
          ],
        },
        {
          title: "Apply",
          items: [
            {
              label: "View Open Positions",
              href: "/career/view-open-positions",
            },
            { label: "Apply Now", href: "/career/apply-now" },
          ],
        },
      ],
    },
  };