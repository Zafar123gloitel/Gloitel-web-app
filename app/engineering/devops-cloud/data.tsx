import {
  ArrowRightIcon,
  CloudIcon,
  CodeIcon,
  CostOptimizationIcon,
  MonitorIcon,
  RobotIcon,
  RocketIcon,
  ShieldIcon,
  SunIcon,
} from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
export const devOpsCloudHeroData = {
  badgeText: 'DevOps & Cloud Engineering',
  title: 'The Infrastructure That Makes Everything Else Possible',
  description:
    "Good DevOps engineering is invisible when it's working — deployments that take minutes, staging environments that mirror production, alerts that fire before users notice something is wrong, and infrastructure that can be recreated from a git repo. That's what we build.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1788757671/Gloitel/Product%20Engineering/DevOps_Cloud_Engineering_fg6twm.png',
  imageAlt: '',
  video: '',
  primaryButton: {
    text: 'Talk to Our DevOps Team',
    href: '/about',
  },
  secondaryButton: {
    text: 'Infrastructure Review',
    href: '/about',
    icon: <ArrowRightIcon />,
  },
};
export const aiSystemsSectionHead = {
  badgeText: 'What We Test',
  title: 'Quality Engineering Across Every Layer of Your Product',
  description:
    'From exploratory testing to automated regression and production-scale performance validation, we build quality into the development lifecycle—not just the release checklist',
};

export const aiSystemsData = [
  {
    id: createId(),
    step: 1,
    icon: <RocketIcon />,
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, preview, approval, and production deployment pipelines.',
  },
  {
    id: createId(),
    step: 2,
    icon: <SunIcon />,
    title: 'Container Orchestration',
    description:
      'Docker and Kubernetes infrastructure with Helm, autoscaling, and cluster management.',
  },
  {
    id: createId(),
    step: 3,
    icon: <RobotIcon />,
    title: 'Agent Systems',
    description: 'Coordinated agents with tools, memory, and workflows.',
  },
  {
    id: createId(),
    step: 4,
    icon: <CodeIcon size={30} />,
    title: 'Infrastructure as Code',
    description: 'Reproducible, version-controlled infrastructure with Terraform and Pulumi.',
  },
  {
    id: createId(),
    step: 5,
    icon: <CloudIcon />,
    title: 'Cloud Architecture',
    description: 'Secure AWS, GCP, and Azure architectures built for scale and reliability.',
  },
  {
    id: createId(),
    step: 6,
    icon: <MonitorIcon />,
    title: 'Monitoring & Observability',
    description:
      'Dashboards, alerts, metrics, logs, and distributed tracing for production systems.',
  },
  {
    id: createId(),
    step: 7,
    icon: <CostOptimizationIcon />,
    title: 'Cost Optimization',
    description:
      'Right-sizing, capacity planning, and cloud waste reduction without sacrificing reliability.',
  },
  {
    id: createId(),
    step: 8,
    icon: <ShieldIcon size={30} />,
    title: 'Security Hardening',
    description: 'IAM, secrets management, compliance controls, and CI/CD security scanning.',
  },
];

export const aiEcosystemData = {
  badge: 'DevOps & Cloud Technology Stack',
  title: 'Technologies We Build With',
  description:
    'From delivery automation to infrastructure, observability, and security, we choose proven tools that keep production environments maintainable and repeatable.',

  tabs: ['CI/CD', 'Containers', 'Infrastructure as Code', 'Cloud', 'Monitoring', 'Secrets'],

  technologies: {
    'CI/CD': [
      {
        id: createId(),
        name: 'GitHub Actions',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787039282/Gloitel/icon/GitHub_Actions_k5gpzk.png',
      },
      {
        id: createId(),
        name: 'GitLab CI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789112111/Gloitel/icon/images_psvml0.png',
      },
      {
        id: createId(),
        name: 'CircleCI',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789112181/Gloitel/icon/circleci-logo-black-and-white_gzf5xr.png',
      },
      {
        id: createId(),
        name: 'Jenkins',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789112268/Gloitel/icon/Jenkins_n6pwld.svg',
      },
      {
        id: createId(),
        name: 'Tekton',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789112354/Gloitel/icon/47602533_s0oqp0.png',
      },
    ],
    Containers: [
      {
        id: createId(),
        name: 'Docker',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960661/Gloitel/icon/Docker_aliwyn.png',
      },
      {
        id: createId(),
        name: 'Kubernetes',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png',
      },
      {
        id: createId(),
        name: 'Helm',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789112561/Gloitel/icon/images_zkbb5e.png',
      },
      {
        id: createId(),
        name: 'Kustomize',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789112833/Gloitel/icon/images_ub6uvv.png',
      },
    ],
    'Infrastructure as Code': [
      {
        id: createId(),
        name: 'Terraform',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960607/Gloitel/icon/Terraform_aiqade.png',
      },
      {
        id: createId(),
        name: 'Pulumi',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789113036/Gloitel/icon/pulumi-icon_uztpmk.png',
      },
      {
        id: createId(),
        name: 'AWS CloudFormation',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png',
      },
      {
        id: createId(),
        name: 'CDK',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789113266/Gloitel/icon/90621382_wpar6o.png',
      },
    ],
    Cloud: [
      {
        id: createId(),
        name: 'AWS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960623/Gloitel/icon/AWS_xpwkkz.png',
      },
      {
        id: createId(),
        name: 'Google Cloud ',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960680/Gloitel/icon/GCP_knskhn.png',
      },
      {
        id: createId(),
        name: 'Azure',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960628/Gloitel/icon/azure_lfqjy0.png',
      },
    ],
    Monitoring: [
      {
        id: createId(),
        name: 'Prometheus',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789113603/Gloitel/icon/images_ohm1ez.jpg',
      },
      {
        id: createId(),
        name: 'Grafana',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960688/Gloitel/icon/Grafana_gti3tp.png',
      },
      {
        id: createId(),
        name: 'Datadog',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960660/Gloitel/icon/Datadog_apthol.png',
      },
      {
        id: createId(),
        name: 'New Relic',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789114279/Gloitel/icon/images_cph8xs.png',
      },
      {
        id: createId(),
        name: 'CloudWatch',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789114665/Gloitel/icon/Arch_Amazon-CloudWatch_64_5x_g1kode.png',
      },
    ],
    Secrets: [
      {
        id: createId(),
        name: 'HashiCorp Vault',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789114769/Gloitel/icon/Microsoft.VisualStudio.Services.Icons_mdg45d.png',
      },
      {
        id: createId(),
        name: 'AWS Secrets Manager',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1789114839/Gloitel/icon/603c5ee711f53137719e78ff_603c21886a41f409b6aa1727_AWS_Secrets_Manager_hkrmzo.png',
      },
      {
        id: createId(),
        name: 'Doppler',
        logo: '',
      },
    ],
  },
};

export const devOpsCloudCTAData = {
  badgeText: 'Ready to Improve Your Infrastructure?',
  title: 'Make Your Infrastructure Easier to Ship and Operate',
  description:
    "Whether you're fixing a fragile deployment process, moving to Kubernetes, improving observability, or rebuilding your cloud foundation, we'll help you create infrastructure your team can operate with confidence.",
  buttonText: 'Review Your Infrastructure',
  buttonLink: '/contact',
};
