import {
  ConnectedSystemsIcon,
  EngineeringHIPAAIcon,
  EngineeringIEC62304Icon,
  IoTGDPRIcon,
  IoTSOC2TypeIIIcon,
  WCAGComplianceIcon,
} from 'components/SvgIcon';
import { ArchitectureItem } from 'uiComponents/ArchitectureCircle';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const iotHeroData = {
  badgeText: 'IoT Engineering',
  title: 'AI Engineering That Ships and Stays Shipped',
  description:
    "Building an AI proof-of-concept takes days. Building one that handles production traffic reliably, costs predictably, and can be debugged when something goes wrong – that's engineering. We've done the latter.",
  image: '/images/Engineering/backend-engineering-hero.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Talk to Our AI Engineers',
    href: '',
  },
  secondaryButton: {
    text: 'View AI Work',
    href: '',
    icon: '',
  },
};

export const fullStackComplianceSectionHead = {
  badgeText: 'Compliance & Standards We Work To',
  title: 'Built on Healthcare Standards from Day One',
  description:
    'Every solution is designed with security, privacy, accessibility, and regulatory compliance at its core – ensuring healthcare systems remain reliable, trusted, and audit-ready.',
};

export const fullStackComplianceData: ArchitectureItem[] = [
  {
    id: createId(),
    position: 'top',
    icon: <EngineeringHIPAAIcon />,
    title: 'HIPAA',
    description:
      'Privacy, Security Rule, and Breach Notification compliance for healthcare data protection.',
  },
  {
    id: createId(),
    position: 'leftTop',
    icon: <IoTGDPRIcon />,
    title: 'GDPR',
    description:
      'Data privacy compliance for healthcare organizations serving patients across the European Union.',
  },
  {
    id: createId(),
    position: 'rightTop',
    icon: <ConnectedSystemsIcon />,
    title: 'HL7 FHIR',
    description:
      'R4 and R5 API integrations enabling secure and standardized healthcare data exchange.',
  },
  {
    id: createId(),
    position: 'leftBottom',
    icon: <WCAGComplianceIcon />,
    title: 'WCAG 2.1 AA',
    description:
      'Accessibility standards that ensure patient-facing experiences are inclusive and usable.',
  },
  {
    id: createId(),
    position: 'rightBottom',
    icon: <EngineeringIEC62304Icon />,
    title: 'IEC 62304',
    description:
      'Medical device software lifecycle processes for safe and compliant product development.',
  },
  {
    id: createId(),
    position: 'bottom',
    icon: <IoTSOC2TypeIIIcon />,
    title: 'SOC 2 Type II',
    description:
      'Security, availability, and confidentiality controls for enterprise-grade healthcare platforms.',
  },
];

export const aiEcosystemData = {
  badge: 'Production AI Engineering Stack',
  title: 'Built on a Modern AI Ecosystem',
  description:
    'From foundation models to observability tools, every layer is chosen for performance, flexibility, and long-term maintainability.',

  tabs: [
    'LLMs',
    'RAG/Orchestration',
    'Vector DBs',
    'ML',
    'MLOps',
    'Serving',
    'Observability',
    'Cloud AI',
  ],

  technologies: {
    LLMs: [
      {
        id: createId(),
        name: 'OpenAI GPT-4o',
        logo: '',
      },
      {
        id: createId(),
        name: 'Claude 3.5 Sonnet',
        logo: '',
      },
      {
        id: createId(),
        name: 'Gemini 1.5 Pro',
        logo: '',
      },
      {
        id: createId(),
        name: 'LLaMA 3',
        logo: '',
      },
      {
        id: createId(),
        name: 'Mistral',
        logo: '',
      },
    ],
    'RAG/Orchestration': [],
    'Vector DBs': [],
    ML: [],
    MLOps: [],
    Serving: [],
    Observability: [],
    'Cloud AI': [],
  },
};

export const aiEngineeringCTAData = {
  badgeText: 'Ready to Build?',
  title: "Let's Build Your Next Healthcare Solution!",
  description:
    "Whether you're launching a digital health platform, integrating with EHR systems, or building AI-powered healthcare tools, we can help you move from concept to compliant, production-ready software.",
  buttonText: 'Build Your Healthcare Solution',
  buttonLink: '/contact',
};
