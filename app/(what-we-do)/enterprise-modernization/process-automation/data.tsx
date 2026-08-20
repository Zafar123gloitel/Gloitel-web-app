import {
  AnalyticsIcon,
  DatabaseIcon,
  DocumentIcon,
  HeroArrowRightIcon,
  LinkIcon,
  MonitorIcon,
  SearchIcon,
  SparkleStarIcon,
  WorkflowAutomationIcon,
} from 'components/SvgIcon';

export const processAutomationHeroData = {
  badgeText: 'Process Automation',
  title: "Automate the Work that Shouldn't Need Humans",
  description:
    "Not every process needs AI. Some just need to be automated. We assess what each process requires - whether it's a simple rule-based workflow, an integration script, or an intelligent agent - and build the right solution.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966955/Gloitel/Enterprise%20Modernization/Process_Automation_e8v0mh.png',
  imageAlt: 'Process automation',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Identify Your Automation Opportunities',
    href: '/contact',
  },
  secondaryButton: {
    text: 'Process Audit',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const processCategoriesSectionHead = {
  badgeText: 'Process Categories We Automate',
  title: 'The Right Automation for Every Process',
  description:
    'We assess how work moves through your organization and design automation strategies that improve efficiency, reduce errors, and adapt to operational complexity.',
};

export const processCategoriesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DocumentIcon size={25} className='text-white' />,
    title: 'Structured Data Workflows',
    description:
      'Repeatable, rule-based processes with structured inputs. Data entry automation, report generation, data validation, system synchronization, and scheduled jobs.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SearchIcon size={25} className='text-white' />,
    title: 'Document Processing',
    description:
      'Extract structured data from documents, classify them, route them, and trigger downstream actions. Handles PDFs, emails, scanned documents, and forms.',
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <LinkIcon size={25} className='text-white' />,
    title: 'Integration Automation',
    description:
      "Connect systems that don't talk to each other. Event-driven integrations that keep data in sync across CRM, ERP, HRIS, and custom applications without manual export/import.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <SparkleStarIcon size={25} className='text-white' />,
    title: 'AI-Powered Process Automation',
    description:
      'For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.',
  },
];
export const automationApproachSectionHead = {
  badgeText: 'Our Automation Assessment Process',
  title: 'A Structured Approach to Process Automation',
  description:
    'We evaluate, prioritize, and implement automation opportunities through a structured methodology designed to maximize business value and drive successful execution.',
};

export const processInventoryData = {
  badgeText: 'Step 01',
  title: 'Process Inventory',
  description:
    'Document all candidate processes: volume, frequency, error rate, current time cost, and exception rate.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966954/Gloitel/Enterprise%20Modernization/Process_Inventory_dza6af.png',
  imageAlt: 'Process inventory',
};

export const phasedImplementationData = {
  badgeText: 'Step 02',
  title: 'Automation Suitability Scoring',
  description:
    'Score each process on: rule clarity, exception frequency, data structure, integration complexity, and business impact.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966954/Gloitel/Enterprise%20Modernization/Automation_Suitability_Scoring_nnglaa.png',
  imageAlt: 'Automation Suitability Scoring',
};
export const buildVsBuyData = {
  badgeText: 'Step 03',
  title: 'Build vs Buy Decision',
  description:
    'Evaluate whether off-the-shelf tools (Zapier, Make, Power Automate) are sufficient or whether custom development is warranted.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966954/Gloitel/Enterprise%20Modernization/Build_vs_Buy_Decision_ototp1.png',
  imageAlt: 'Build vs buy decision',
};
export const PhasedImplementation = {
  badgeText: 'Step 04',
  title: 'Phased Implementation',
  description:
    'Build the highest-value automations first. Each automation is monitored, validated, and documented before moving to the next.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966954/Gloitel/Enterprise%20Modernization/Phased_Implementation_ucon5k.png',
  imageAlt: 'Build vs buy decision',
};

export const automationTechStackData = {
  badgeText: 'Tools & Technologies',
  title: 'Built with Trusted Automation Technologies',
  description:
    'Our solutions integrate best-in-class tools across orchestration, integration, document AI, and custom development to drive operational efficiency.',

  tabs: ['Workflow Automation', 'RPA Tools', 'Integration', 'Document AI', 'Custom AI'],

  technologies: {
    'Workflow Automation': [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'n8n',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235402/Gloitel/icon/n8n_xavhu4.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Apache Airflow',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144523/Gloitel/icon/node20_dh5p3f.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Prefect',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Prefect_mvrwp7.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Temporal',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Temporal_vbpzdd.png',
      },
    ],

    'RPA Tools': [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'UiPath',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/UiPath_vmxwvy.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Automation Anywhere',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Automation_Anywhere_sgocbh.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Power Automate',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Power_Automate_rw3zgj.png',
      },
    ],

    Integration: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'MuleSoft',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/MuleSoft_ojuoj2.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Boomi',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Boomi_afnhgd.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'AWS Step Functions',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/AWS_Step_Functions_rgqccv.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Zapier',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/Zapier_bfnkkq.png',
      },
    ],

    'Document AI': [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'AWS Textract',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/AWS_Textract_whg1md.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Google Document AI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/Google_Document_AI_fw5vfo.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Azure Form Recognizer',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/Azure_Form_Recognizer_tfbhx0.png',
      },
    ],

    'Custom AI': [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'LangChain',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'OpenAI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Anthropic',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png',
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: 'Custom Python pipelines',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960588/Gloitel/icon/python_afmdty.png',
      },
    ],
  },
};

export const processAutomationCTAData = {
  badgeText: 'Ready to Automate?',
  title: 'Transform Manual Work into Intelligent Operations',
  description:
    "Whether you're exploring simple workflows or enterprise-wide automation, we'll help you identify the right opportunities and implement solutions that create lasting operational impact.",
  buttonText: 'Automate Your Processes',
  buttonLink: '/contact',
};
