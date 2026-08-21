import { CheckIcon, HeroArrowRightIcon } from 'components/SvgIcon';
const createId = () => globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

export const microservicesHeroData = {
  badgeText: 'Microservices Architecture',
  title: "Break the Monolith. Don't Break the Business.",
  description:
    "Microservices aren't the right answer for every problem. But when your monolith is genuinely limiting your deployment velocity, scaling options, or team autonomy - a well-planned decomposition changes everything. We've done this enough times to know what works.",
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966958/Gloitel/Enterprise%20Modernization/Microservices_Architecture_g4ugfy.png',
  imageAlt: 'Microservices architecture',
  video: 'https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4',
  primaryButton: {
    text: 'Assess Your Architecture',
    href: '/contact',
  },
  secondaryButton: {
    text: 'Book a Technical Call',
    href: '/about',
    icon: <HeroArrowRightIcon />,
  },
};

export const signalsSectionHead = {
  badgeText: 'Is Microservices Right for You?',
  title: 'Recognize the Signals Before You Re-Architect',
  description:
    'Microservices introduce complexity and operational overhead. These indicators help determine whether decomposition will unlock meaningful business and engineering value - or whether a modular monolith remains the better choice.',
};

export const signalsData = [
  {
    id: createId(),
    icon: <CheckIcon size={25} className='text-white' />,
    description: 'Deployment of one module requires the whole system',
  },
  {
    id: createId(),
    icon: <CheckIcon size={25} className='text-white' />,
    description: 'Different parts of your system have different scaling needs',
  },
  {
    id: createId(),
    icon: <CheckIcon size={25} className='text-white' />,
    description: 'Multiple teams conflicting in the same codebase',
  },
  {
    id: createId(),
    icon: <CheckIcon size={25} className='text-white' />,
    description: 'You need different technologies for different workloads',
  },
  {
    id: createId(),
    icon: <CheckIcon size={25} className='text-white' />,
    description: 'Failure in one area cascades down everything else',
  },
];

export const decompositionApproachSectionHead = {
  badgeText: 'Our Decomposition Approach',
  title: 'A Structured Path to Microservices',
  description:
    "We don't rewrite everything at once. Our methodology prioritizes clear boundaries, incremental delivery, and controlled migration to reduce risk at every stage.",
};

export const domainDrivenDesignData = {
  badgeText: 'Step 01',
  title: 'Domain-Driven Design',
  description:
    'We start with business domains, not technical layers. Services are defined by business capability, not by database tables or API endpoints. This is the difference between microservices that stay manageable and ones that become distributed monoliths.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966955/Gloitel/Enterprise%20Modernization/Domain-Driven_Design_aijjsd.png',
  imageAlt: 'Domain-driven design',
};

export const incrementalExtractionData = {
  badgeText: 'Step 02',
  title: 'Incremental Extraction',
  description:
    'We identify the services with the most independent scaling needs and the clearest domain boundaries first. Each service is extracted, tested, and deployed independently before moving to the next.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966955/Gloitel/Enterprise%20Modernization/Incremental_Extraction_ttocbg.png',
  imageAlt: 'Incremental extraction',
};

export const antiCorruptionLayerData = {
  badgeText: 'Step 03',
  title: 'Anti-Corruption Layer',
  description:
    'During migration, we build interfaces between the legacy monolith and new services so both can coexist and evolve independently. Clean boundaries from day one.',
  buttonText: 'View more',
  buttonLink: '/',
  image:
    'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786966956/Gloitel/Enterprise%20Modernization/Anti-Corruption_Layer_pqgo4y.png',
  imageAlt: 'Anti-corruption layer',
};

export const buildingBlocksSectionHead = {
  badgeText: 'What We Design and Build',
  title: 'The Building Blocks of Modern Microservices',
  description:
    'We architect the systems, integrations, and operational capabilities that enable independently deployable services to scale reliably over time.',
};

export const buildingBlocksData = [
  {
    id: createId(),
    title:
      'Service boundary definition and domain mapping for clearly defined business capabilities.',
  },
  {
    id: createId(),
    title: 'API contracts between services (REST/GraphQL/gRPC) to ensure consistent communication.',
  },
  {
    id: createId(),
    title: 'Asynchronous communication patterns (event-driven architecture with message queues)',
  },
  {
    id: createId(),
    title: 'Service discovery and load balancing across distributed environments.',
  },
  {
    id: createId(),
    title: 'Distributed tracing and observability for end-to-end visibility.',
  },
  {
    id: createId(),
    title: 'Circuit breakers and resilience patterns to improve fault tolerance.',
  },
  {
    id: createId(),
    title: 'API gateway design for secure and streamlined access management workflows.',
  },
  {
    id: createId(),
    title:
      'Data isolation strategy - each service owns its data to maintain clear ownership boundaries.',
  },
  {
    id: createId(),
    title: 'Deployment pipeline per service (independent CI/CD) for autonomous deployments.',
  },
];

export const techStackSectionHead = {
  badgeText: 'Technologies & Stack',
  title: 'The Technology Stack behind Modern Microservices',
  description:
    'From orchestration and service communication to observability and traffic management, we use battle-tested technologies that enable microservices to scale, evolve, and operate reliably in production.',
};

export const techStackData = {
  tabs: ['Orchestration', 'Communication', 'Service Mesh', 'API Gateway', 'Observability'],

  technologies: {
    Orchestration: [
      {
        id: createId(),
        name: 'Kubernetes',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png',
      },
      {
        id: createId(),
        name: 'ECS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220510/Gloitel/icon/ecs_nkk5pq.png',
      },
      {
        id: createId(),
        name: 'Cloud Run',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/cloudrun_o7vmgs.png',
      },
    ],

    Communication: [
      {
        id: createId(),
        name: 'REST',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960600/Gloitel/icon/RESTAPIs_aldign.png',
      },
      {
        id: createId(),
        name: 'gRPC',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230211/Gloitel/icon/grpc_hlwe7c.png',
      },
      {
        id: createId(),
        name: 'GraphQL',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/graph_v7lrwc.webp',
      },
      {
        id: createId(),
        name: 'Apache Kafka',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Kafka_wmgb4v.png',
      },
      {
        id: createId(),
        name: 'RabbitMQ',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960592/Gloitel/icon/RabbitMQ_om1s1r.png',
      },
      {
        id: createId(),
        name: 'AWS SQS',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960621/Gloitel/icon/AWS_SQS_ylmsp7.png',
      },
    ],

    'Service Mesh': [
      {
        id: createId(),
        name: 'Istio',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230201/Gloitel/icon/istio_rvnswh.png',
      },
      {
        id: createId(),
        name: 'Linkerd',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230209/Gloitel/icon/linkerd_qf7orp.png',
      },
      {
        id: createId(),
        name: 'AWS App Mesh',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230210/Gloitel/icon/aws_krfgez.png',
        class: '',
      },
    ],

    'API Gateway': [
      {
        id: createId(),
        name: 'Kong',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230201/Gloitel/icon/kong_ii0zff.png',
      },
      {
        id: createId(),
        name: 'AWS API Gateway',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230200/Gloitel/icon/aws-api-gateway_cipauu.png',
      },
      {
        id: createId(),
        name: 'NGINX',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230200/Gloitel/icon/nginx_etsnvx.png',
      },
      {
        id: createId(),
        name: 'Traefik',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230200/Gloitel/icon/traefik_lrwp9k.png',
      },
    ],

    Observability: [
      {
        id: createId(),
        name: 'Jaeger',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230867/Gloitel/icon/jaeger_zsjugm.png',
      },
      {
        id: createId(),
        name: 'Zipkin',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230940/Gloitel/icon/zipkin_neig2a.png',
      },
      {
        id: createId(),
        name: 'OpenTelemetry',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230216/Gloitel/icon/opentelemetry_g1tqde.png',
      },
      {
        id: createId(),
        name: 'Grafana',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960688/Gloitel/icon/Grafana_gti3tp.png',
      },
      {
        id: createId(),
        name: 'Prometheus',
        logo: 'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230215/Gloitel/icon/prometheus_hzanpt.png',
      },
    ],
  },
};

export const microservicesCTAData = {
  badgeText: 'Ready to Modernize?',
  title: 'Build the Next Version of Your Architecture',
  description:
    "Whether you're validating the need for decomposition or planning the migration itself, we'll help you move forward with clarity and confidence.",
  buttonText: 'Architecture Review',
  buttonLink: '/contact',
};
