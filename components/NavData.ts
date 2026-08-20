import { label } from "framer-motion/client";

export const links = [
  { href: "/", label: "Home" },


  {
    label: "What we do",
    megaMenu: "whatWeDo",
  },

  {
    href: "/industries/healthcare-medtech",
    label: "Industries",
    megaMenu: "industries",
  },

  {
    href: "/engineering/ai-engineering",
    label: "Engineering",
    megaMenu: "engineering",
  },

  {
    href: "/about",
    label: "About us",
    megaMenu: "about",
  },


  {
    href: "/career",
    label: "Career",
    megaMenu: "career",
  },
  {
    href: "/resources",
    label: "Resources",
  },

  { href: "/contact", label: "Contact" },
];

// Each key maps to an array of groups. Each group has a title and items.
export const megaMenus = {
  whatWeDo: {
    width: "w-[1150px]",
    columns: "grid-cols-5",
    groupsSpan: "col-span-4 grid-cols-4",
    image: "/images/megananu.png",
    groups: [
      {
        title: "AI & Intelligent Systems",
        href: "/ai-intelligent-systems",
        items: [
          {
            label: "AI Strategy & Consulting",
            href: "/ai-intelligent-systems/ai-strategy-consulting",
          },
          {
            label: "Generative AI & LLMs",
            href: "/ai-intelligent-systems/generative-ai-llms",
          },
          {
            label: "AI Agents & Automation",
            href: "/ai-intelligent-systems/ai-agents-automation",
          },
          {
            label: "ML & Predictive Analytics",
            href: "/ai-intelligent-systems/ml-predictive-analytics",
          },
          {
            label: "AI Integration",
            href: "/ai-intelligent-systems/ai-integration",
          },
        ],
      },
      {
        title: "Product Engineering",
        href: "/product-engineering",
        items: [
          {
            label: "Discovery & Validation",
            href: "/product-engineering/discovery-validation",
          },
          {
            label: "MVP Development",
            href: "/product-engineering/mvp-development",
          },
          {
            label: "Platform Scaling",
            href: "/product-engineering/platform-scaling",
          },
          {
            label: "Fractional Engineering Teams",
            href: "/product-engineering/fractional-engineering-teams",
          },
        ],
      },
      {
        title: "Enterprise Modernization",
        href: "/enterprise-modernization",
        items: [
          {
            label: "App Modernization",
            href: "/enterprise-modernization/app-modernization",
          },
          {
            label: "Cloud Migration",
            href: "/enterprise-modernization/cloud-migration",
          },
          {
            label: "Microservices Architecture",
            href: "/enterprise-modernization/microservices-architecture",
          },
          {
            label: "Process Automation",
            href: "/enterprise-modernization/process-automation",
          },
        ],
      },
      {
        title: "Digital Experience Design",
        href: "/digital-experience-design",
        items: [
          {
            label: "UX Research & Strategy",
            href: "/digital-experience-design/ux-research-strategy",
          },
          {
            label: "UI/UX Design",
            href: "/digital-experience-design/ui-ux-design",
          },
          {
            label: "Design Systems",
            href: "/digital-experience-design/design-systems",
          },
          {
            label: "ML & Predictive Analytics",
            href: "/ai-intelligent-systems/ml-predictive-analytics",
          },
          {
            label: "CX Optimization",
            href: "/digital-experience-design/cx-optimization",
          },
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

  about: {
    width: "w-[1150px]",
    columns: "grid-cols-5",
    groupsSpan: "col-span-4 grid-cols-4",
    image: "/images/megananu.png",
    groups: [
      {
        title: "Company",
        items: [
          { label: "Who We Are", href: "/about#who-we-are" },
          { label: "Our Journey", href: "/about#our-journey" },
          { label: "Mission & Vision", href: "/about#mission-vision" },
          { label: "What We Believe", href: "/about#what-we-believe" },
        ],
      },
      {
        title: "Expertise",
        items: [
          { label: "Our Expertise", href: "/about#our-expertise" },
          { label: "Work Celebrate", href: "/about#work-celebrate" },
          {
            label: "Industries We Serve",
            href: "/about#industries-we-serve",
          },
          {
            label: "Technology Ecosystem",
            href: "/about#technology-ecosystem",
          },
        ],
      },
      {
        title: "People",
        items: [
          { label: "Our Team", href: "/about#our-team" },
          { label: "Our Culture", href: "/about#our-culture" },
          {
            label: "Client Testimonials",
            href: "/about#client-testimonials",
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
          {
            label: "Why Join Gloitel",
            href: "/career#why-join-gloitel",
          },
          {
            label: "Benefits & Perks",
            href: "/career#benefits-perks",
          },
        ],
      },
      {
        title: "Opportunities",
        items: [
          {
            label: "Open Opportunities",
            href: "/career#open-opportunities",
          },
          {
            label: "Internships",
            href: "/career#internships",
          },
        ],
      },
      {
        title: "Hiring",
        items: [
          {
            label: "Our Hiring Process",
            href: "/career#our-hiring-process",
          },
          {
            label: "Employee Stories",
            href: "/career#employee-stories",
          },
        ],
      },
      {
        title: "Apply",
        items: [
          {
            label: "View Open Positions",
            href: "/career#view-open-positions",
          },
          {
            label: "Apply Now",
            href: "/career#apply-now",
          },
        ],
      },
    ],
  },
};
