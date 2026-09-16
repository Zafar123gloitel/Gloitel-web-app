import {
  AIAssistedToolsIcon,
  ClinicalWorkflowApplicationsIcon,
  ContextualInquiryIcon,
  EHRIntegrationLayerIcon,
  GDPRIcon,
  HIPAAIcon,
  HL7FHIRIcon,
  HealthDataPlatformsIcon,
  HeroArrowRightIcon,
  IEC62304Icon,
  MedicalDeviceSoftwareIcon,
  PatientEngagementPlatformsIcon,
  SOC2TypeIIIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

import type { ArchitectureItem } from 'uiComponents/ArchitectureCircle';

export const healthcareHeroData = {
  badgeText: 'Healthcare & Medtech',
  title: 'Technology Built for the Stakes of Healthcare',
  description:
    "Healthcare software doesn't just need to work. It needs to be secure, compliant, reliable, and accurate - because the consequences of failure aren't just business issues. We've built for healthcare clients long enough to understand those stakes.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056277/Gloitel/Industries/Healthcare_Medtech_icl3ih.png',
  imageAlt: 'Healthcare and medtech technology',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Talk to Our Healthcare Team',
    href: '/contact',
  },
  secondaryButton: {
    text: 'Healthcare Case Studies',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const healthcareChallengesSectionHead = {
  badgeText: 'Challenges We Solve in Healthcare',
  title: 'The Challenges Behind Modern Healthcare Systems',
  description:
    'Healthcare technology demands security, compliance, accessibility, and seamless data exchange across every touchpoint.',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787056270/Gloitel/Industries/Challenges_We_Solve_in_Healthcare_n38tin.png',
  imageAlt: 'Healthcare challenges',
};

export const healthcareChallengesData = [
  {
    id: createId(),
    text: 'EHR integration complexity (HL7 FHIR, Epic, Cerner, Athenahealth)',
  },
  {
    id: createId(),
    text: 'HIPAA-compliant data architecture and audit trails with secure access controls and governance',
  },
  {
    id: createId(),
    text: 'Patient portal development with accessibility requirements for better patient engagement and experience',
  },
  {
    id: createId(),
    text: 'Clinical workflow digitization and automation across care coordination and operational processes',
  },
  {
    id: createId(),
    text: 'Medical device software (FDA/CE considerations) with compliance-focused development and validation',
  },
  {
    id: createId(),
    text: 'Telehealth platform development for secure virtual care and remote patient interactions',
  },
  {
    id: createId(),
    text: 'AI-assisted clinical decision support with appropriate oversight and healthcare safeguards',
  },
  {
    id: createId(),
    text: 'Healthcare analytics and population health tools for data-driven insights and outcome improvement',
  },
];
export const healthcareSolutionsSectionHead = {
  badgeText: 'Solutions We Build',
  title: 'Technology Solutions for Modern Healthcare',
  description:
    'We design and develop healthcare solutions that improve patient experiences, streamline workflows, and support better clinical outcomes.',
};

export const healthcareSolutionsData = [
  {
    id: createId(),
    icon: <PatientEngagementPlatformsIcon />,
    title: 'Patient Engagement Platforms',
    description:
      'Appointment scheduling, patient portals, telehealth interfaces, and post-care communication tools. Designed for patients of all technical literacy levels.',
  },
  {
    id: createId(),
    icon: <ClinicalWorkflowApplicationsIcon />,
    title: 'Clinical Workflow Applications',
    description:
      'Digitize intake, documentation, care coordination, and discharge workflows. Reduce administrative burden on clinical staff without disrupting care delivery.',
  },
  {
    id: createId(),
    icon: <EHRIntegrationLayerIcon />,
    title: 'EHR Integration Layer',
    description:
      'Connect custom applications to Epic, Cerner, Athenahealth, and other EHR systems via HL7 FHIR APIs. Bidirectional data sync with audit trails.',
  },
  {
    id: createId(),
    icon: <AIAssistedToolsIcon />,
    title: 'AI-Assisted Tools',
    description:
      'Clinical note summarization, prior authorization assistance, clinical documentation improvement, and diagnostic support tools - built with appropriate human oversight.',
  },
  {
    id: createId(),
    icon: <HealthDataPlatformsIcon />,
    title: 'Health Data Platforms',
    description:
      'Collect, store, and analyze data from wearables, IoT devices, and clinical systems. HIPAA-compliant architecture with role-based access control.',
  },
  {
    id: createId(),
    icon: <MedicalDeviceSoftwareIcon />,
    title: 'Medical Device Software',
    description:
      'Custom software for medical devices - adhering to IEC 62304 (software lifecycle), FDA 510(k), and CE marking requirements.',
  },
];

export const healthcareComplianceSectionHead = {
  badgeText: 'Compliance & Standards We Work To',
  title: 'Built on Healthcare Standards from Day One',
  description:
    'Every solution is designed with security, privacy, accessibility, and regulatory compliance at its core - ensuring healthcare systems remain reliable, trusted, and audit-ready.',
};

export const healthcareComplianceData: ArchitectureItem[] = [
  {
    id: createId(),
    position: 'top',
    icon: <HIPAAIcon />,
    title: 'HIPAA',
    description:
      'Privacy, Security Rule, and Breach Notification compliance for healthcare data protection.',
  },
  {
    id: createId(),
    position: 'leftTop',
    icon: <GDPRIcon />,
    title: 'GDPR',
    description:
      'Data privacy compliance for healthcare organizations serving patients across the European Union.',
  },
  {
    id: createId(),
    position: 'rightTop',
    icon: <HL7FHIRIcon />,
    title: 'HL7 FHIR',
    description:
      'R4 and R5 API integrations enabling secure and standardized healthcare data exchange.',
  },
  {
    id: createId(),
    position: 'leftBottom',
    icon: <ContextualInquiryIcon />,
    title: 'WCAG 2.1 AA',
    description:
      'Accessibility standards that ensure patient-facing experiences are inclusive and usable.',
  },
  {
    id: createId(),
    position: 'rightBottom',
    icon: <IEC62304Icon />,
    title: 'IEC 62304',
    description:
      'Medical device software lifecycle processes for safe and compliant product development.',
  },
  {
    id: createId(),
    position: 'bottom',
    icon: <SOC2TypeIIIcon />,
    title: 'SOC 2 Type II',
    description:
      'Security, availability, and confidentiality controls for enterprise-grade healthcare platforms.',
  },
];

export const healthcareTechStackData = {
  badge: 'Healthcare Technology Stack',

  title: 'Purpose-Built Technologies for Healthcare Innovation',

  description:
    'We combine healthcare-specific integrations, secure cloud infrastructure, and advanced AI capabilities to build solutions that meet the demands of modern care delivery.',

  tabs: ['Integrations', 'Cloud', 'AI', 'Security'],

  technologies: {
    Integrations: [
      {
        id: createId(),
        name: 'Epic FHIR',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789541990/Gloitel/icon/images_r80tus.png',
      },
      {
        id: createId(),
        name: 'Cerner',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789542157/Gloitel/icon/logo-cerner-400x495_ouckq4.jpg',
      },
      {
        id: createId(),
        name: 'HL7 v2',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789542637/Gloitel/icon/1693600301667_sz42fp.png',
      },
      {
        id: createId(),
        name: 'SMART on FHIR',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789542883/Gloitel/icon/7401080_usmboz.png',
      },
    ],

    Cloud: [
      {
        id: createId(),
        name: 'AWS HealthLake',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png',
      },
      {
        id: createId(),
        name: 'Google Cloud Healthcare API',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png',
      },
      {
        id: createId(),
        name: 'Azure Health Data Services',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png',
      },
    ],

    AI: [
      {
        id: createId(),
        name: 'OpenAI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png',
      },
      {
        id: createId(),
        name: 'Anthropic (with BAA)',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789543707/Gloitel/icon/anthropic-icon-tdvkiqisswbrmtkiygb0ia_sqdzo4.webp',
      },
      {
        id: createId(),
        name: 'AWS Bedrock',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png',
      },
      {
        id: createId(),
        name: 'Nuance',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789543837/Gloitel/icon/NUAN-f0630393_aexgd8.png',
      },
    ],

    Security: [
      {
        id: createId(),
        name: 'Vault',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789114769/Gloitel/icon/Microsoft.VisualStudio.Services.Icons_mdg45d.png',
      },
      {
        id: createId(),
        name: 'AWS KMS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789543990/Gloitel/icon/6_aws-kms.62bf270314_k34z1g.jpg',
      },
      {
        id: createId(),
        name: 'HIPAA-eligible Infrastructure',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789544221/Gloitel/icon/download_zchtnt.jpg',
      },
    ],
  },
};

export const healthcareCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant production-ready systems.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
