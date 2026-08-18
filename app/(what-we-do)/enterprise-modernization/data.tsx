// import { AnalyticsIcon, ChecklistIcon, CodeIcon, DatabaseIcon, HeroArrowRightIcon, LinkIcon, MonitorIcon, RefreshCcwIcon, ShieldIcon, WorkflowIcon } from "../../component/SvgIcon";

/* Non-exported data retained for reference.
const appModernizationHeroData = {
  badgeText: "App Modernization",
  title: "Modernize Your Application Without Rebuilding Everything",
  description:
    "The most dangerous approach to app modernization is the full rewrite. It takes 2-3x longer than estimated, costs more than projected, and still leaves you with many of the same problems - just in a newer language. We take a different approach: incremental modernization that delivers value at every step.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Discovery and validation workshop",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Get a Modernization Assessment",
    href: "/contact",
  },
  secondaryButton: {
    text: "See What's Possible",
    href: "/about",
    icon: <HeroArrowRightIcon />,
  },
};

const phasedApproachSectionHead = {
  badgeText: "Our Default Approach",
  title: "A Phased Path to Application Modernization",
  description:
    "Every phase is designed to deliver progress while maintaining stability - allowing your applications to evolve without disrupting ongoing operations.",
};

const phasedApproachData = [
  {
    step: 1,
    title: "Business Continuity",
    description: "The business keeps running throughout the transition.",
    icon: <ShieldIcon size={25} className="text-white" />,
  },
  {
    step: 2,
    title: "Validated Progress",
    description:
      "Each modernized component is tested and validated before the next begins.",
    icon: <ChecklistIcon size={26} className="text-white" />,
  },
  {
    step: 3,
    title: "Incremental Change",
    description:
      "Risk is distributed across many small changes, not one large one.",
    icon: <RefreshCcwIcon size={26} className="text-white" />,
  },
  {
    step: 4,
    title: "Flexible Direction",
    description: "You can pause or pivot at any point without losing progress.",
    icon: <WorkflowIcon size={26} className="text-white" />,
  },
];

const constraintsSectionHead = {
  badgeText: "What We Address",
  title: "Modernization that Targets the Real Application Constraints",
  description:
    "We address the technical limitations that impact performance, maintainability, and delivery speed - improving your application incrementally while keeping business operations running smoothly.",
};

const applicationConstraintsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <CodeIcon size={25} className="text-white" />,
    title: "Code Quality & Technical Debt Reduction",
    description:
      "Systematic reduction of technical debt through refactoring, test coverage, documentation improvements, and code review standards that prevent future debt.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MonitorIcon size={25} className="text-white" />,
    title: "UI Modernization",
    description:
      "Upgrade aging frontend interfaces to modern architectures with React or Vue, responsive design, accessibility improvements, and performance optimization.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <LinkIcon size={25} className="text-white" />,
    title: "API Layer Modernization",
    description:
      "Introduce a clean API layer between your legacy backend and modern frontends/integrations. REST or GraphQL APIs that let you evolve the frontend independently of the backend.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DatabaseIcon size={25} className="text-white" />,
    title: "Database Modernization",
    description:
      "Migrate from deprecated database versions, add proper indexing, introduce query optimization, implement connection pooling, and design for read/write separation where needed.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <RefreshCcwIcon size={25} className="text-white" />,
    title: "Framework & Runtime Upgrades",
    description:
      "Upgrade application frameworks and language runtimes — handling breaking changes, dependency conflicts, and regression testing so upgrades don't break production.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnalyticsIcon size={25} className="text-white" />,
    title: "Performance Optimization",
    description:
      "Profile and fix the actual bottlenecks. Caching layers, query optimization, CDN configuration, lazy loading, and server-side rendering improvements.",
  },
];

const strategySectionHead = {
  badgeText: "Modernization Process",
  title: "A Strategy for Progress, Not Disruption",
  description:
    "Modernization happens in phases - each step building on the last to strengthen your application, validate outcomes, and keep the business moving forward.",
};

const auditPhaseData2 = {
  badgeText: "Phase 01",
  title: "Audit (2 weeks)",
  description:
    "Full codebase analysis: tech debt inventory, security vulnerabilities, performance bottlenecks, and dependency risk. Delivered as a prioritized modernization roadmap.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/audit.png",
  imageAlt: "Codebase audit",
};

const foundationPhaseData = {
  badgeText: "Phase 02",
  title: "Foundation (4 weeks)",
  description:
    "Establish the foundation: test infrastructure, CI/CD pipeline, monitoring, and the first components of the modern architecture.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/foundation.png",
  imageAlt: "Foundation setup",
};

const migrationPhaseData = {
  badgeText: "Phase 03",
  title: "Incremental Migration",
  description:
    "Systematic migration of components from legacy to modern architecture, validated at each step.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/migration.png",
  imageAlt: "Incremental migration",
};

const sunsetPhaseData = {
  badgeText: "Phase 04",
  title: "Sunset Legacy",
  description:
    "Cut over to the modernized system, decommission legacy components, and validate end-to-end.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/sunset.png",
  imageAlt: "Legacy sunset",
};

const technologiesModernizedData = {
  badge: "Technologies We Modernize From and To",

  title: "Modern Platforms. Familiar Foundations.",

  description:
    "We help organizations transition from aging technologies to modern platforms - preserving what works while enabling future growth.",

  tabs: ["From", "To", "Databases"],

  technologies: {
    From: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PHP 5/7",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143204/Gloitel/icon/php_nkkee6.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "jQuery",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143340/Gloitel/icon/jquery_mcjtdt.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AngularJS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143838/Gloitel/icon/angularjs_omz8pi.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Java EE",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143838/Gloitel/icon/java_c2a3tr.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: ".NET Framework",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143837/Gloitel/icon/net_gp9otv.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Classic ASP",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143838/Gloitel/icon/asp_i5p19a.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Ruby on Rails (old)",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143840/Gloitel/icon/ruby-on-rails_eaj8r2.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Legacy Node versions",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785143838/Gloitel/icon/node_ewpmtv.png",
      },
    ],

    To: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "React/Next.js",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/next_urdukq.webp",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "TypeScript",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144523/Gloitel/icon/typescript_qce4ug.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Python/FastAPI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960667/Gloitel/icon/fastApi_bwbwom.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: ".NET 8",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144522/Gloitel/icon/.net8_y2lcz8.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Node 20+",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144522/Gloitel/icon/.net8_y2lcz8.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Modern Java (Spring Boot 3)",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144523/Gloitel/icon/modern-java_kvtlpp.png",
      },
    ],

    Databases: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "MySQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144985/Gloitel/icon/mysql_ioyrw1.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PostgreSQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860001/Gloitel/icon/postgre_aq8ajb.svg",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "SQL Server",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144985/Gloitel/icon/sqlserver_opat8t.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "PostgreSQL/Azure SQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144986/Gloitel/icon/sql_eegaqv.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Oracle migrations",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144985/Gloitel/icon/oraclemigrations_pmqdcq.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "MongoDB upgrades",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785145218/Gloitel/icon/mongodb_vxcmnq.png",
      },
    ],
  },
};

const cloudMigrationHeroData = {
  badgeText: "Cloud Migration",
  title: "Move to the Cloud. Do It Right the First Time.",
  description:
    "Cloud migration projects fail when they're treated as infrastructure projects. They succeed when they're treated as architecture redesign opportunities. We help you move to the cloud with a target state that's genuinely better — not just the same system on different hardware.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Cloud migration",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Plan Your Cloud Migration",
    href: "/contact",
  },
  secondaryButton: {
    text: "Cloud Readiness Assessment",
    href: "/about",
    icon: <WorkflowIcon size={25} className="text-white" />,
  },
};

const migrationApproachSectionHead = {
  badgeText: "Migration Approaches We Use",
  title: "Choosing the Right Migration Path",
  description:
    "Every workload has different requirements. We choose the right migration strategy based on business priorities, technical constraints, and long-term goals.",
};

const migrationApproachData = [
  {
    step: 1,
    title: "Lift & Shift",
    description:
      "Move existing workloads to the cloud with minimal changes. Fastest path to cloud, best for workloads that aren't being actively developed.",
    icon: <CodeIcon size={25} className="text-white" />,
  },
  {
    step: 2,
    title: "Replatform",
    description:
      "Move to the cloud with targeted optimizations and cloud-native capabilities. More work than lift & shift, with greater benefits.",
    icon: <MonitorIcon size={25} className="text-white" />,
  },
  {
    step: 3,
    title: "Refactor/Re-architect",
    description:
      "Redesign for cloud-native architecture using serverless and managed services. Most effort, best long-term outcome. Recommended for product workloads.",
    icon: <LinkIcon size={25} className="text-white" />,
  },
];

const cloudCoverageSectionHead = {
  badgeText: "What We Cover",
  title: "Comprehensive Cloud Migration Coverage",
  description:
    "We address every layer of the migration journey - from architecture and automation to optimization and resilience - ensuring a secure and scalable transition to the cloud.",
};

const cloudCoverageData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Cloud provider selection and architecture design (AWS vs GCP vs Azure)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Infrastructure-as-code (Terraform, Pulumi) for reproducible environments",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Network architecture — VPCs, subnets, security groups, and private connectivity",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Database migration — zero-downtime strategies, replication, cutover planning",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Container orchestration – ECS, GKE, AKS, or Kubernetes for scalable and efficient workload management.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "CI/CD pipeline migration to modernize deployment workflows and enable faster, more reliable software releases.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Security configuration — IAM, secrets management, compliance controls",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Cost optimization — right-sizing, reserved instances, spot capacity",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Monitoring & observability — CloudWatch, Grafana, Datadog setup",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Disaster recovery & backup configuration to ensure rapid recovery and business continuity.",
  },
];

const migrationStrategySectionHead = {
  badgeText: "Zero-Downtime Migration Strategy",
  title: "A Controlled Path to the Cloud",
  description:
    "We reduce uncertainty through a phased migration strategy that prioritizes reliability and reversibility.",
};

const migrationStrategySteps = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 1,
    title: "Replicate production to cloud environment",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 2,
    title: "Run in parallel with traffic mirroring",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 3,
    title: "Validate cloud environment matches production",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 4,
    title: "Gradual traffic shifting (10% → 25% → 50% → 100%)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 5,
    title: "Maintain rollback capability until fully validated",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    step: 6,
    title: "Decommission old environment",
  },
];

const cloudPlatformsData = {
  badge: "Cloud Platforms",

  title: "Built on Trusted Cloud Platforms",

  description:
    "From compute and storage to networking and security, we leverage proven cloud services to build scalable, resilient, and production-ready environments.",

  tabs: ["AWS", "Google Cloud", "Azure"],

  technologies: {
    AWS: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "EC2",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220511/Gloitel/icon/ec2_jxd9hn.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "ECS/EKS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220510/Gloitel/icon/ecs_nkk5pq.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "RDS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220506/Gloitel/icon/rds_qpyrum.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Lambda",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960619/Gloitel/icon/AWS_Lambda_cmuj6h.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "S3",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960601/Gloitel/icon/S3_n3dent.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "CloudFront",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220504/Gloitel/icon/cloudefront_jciwbv.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Route 53",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220500/Gloitel/icon/route53_bidt6r.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Secrets Manager",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220499/Gloitel/icon/secrets-manager_wg7t1w.png",
      },
    ],

    "Google Cloud": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "GKE",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/gke_q0yrnd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cloud Run",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/cloudrun_o7vmgs.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cloud SQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/cloudsql_lzoobz.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Pub/Sub",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960685/Gloitel/icon/Google_PubSub_j2vhtu.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "BigQuery",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960635/Gloitel/icon/BigQuery_dgjvnk.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Firebase",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960671/Gloitel/icon/firebase_cf9k34.png",
      },
    ],

    Azure: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AKS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/ask_xj5plr.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "App Service",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220525/Gloitel/icon/app-service_cu5anj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Azure SQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220524/Gloitel/icon/azure-sql_uvazbj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Azure OpenAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220519/Gloitel/icon/azure-openai_a7qgyj.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cosmos DB",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220519/Gloitel/icon/cosmos-db_zqp3xm.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Event Hub",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220514/Gloitel/icon/event-hub_uo5mx7.png",
      },
    ],
  },
};

const microservicesHeroData = {
  badgeText: "Microservices Architecture",
  title: "Break the Monolith. Don't Break the Business.",
  description:
    "Microservices aren't the right answer for every problem. But when your monolith is genuinely limiting your deployment velocity, scaling options, or team autonomy - a well-planned decomposition changes everything. We've done this enough times to know what works.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Microservices architecture",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Assess Your Architecture",
    href: "/contact",
  },
  secondaryButton: {
    text: "Book a Technical Call",
    href: "/about",
    icon: <DatabaseIcon size={25} className="text-white" />,
  },
};

const signalsSectionHead = {
  badgeText: "Is Microservices Right for You?",
  title: "Recognize the Signals Before You Re-Architect",
  description:
    "Microservices introduce complexity and operational overhead. These indicators help determine whether decomposition will unlock meaningful business and engineering value - or whether a modular monolith remains the better choice.",
};

const signalsData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <RefreshCcwIcon size={25} className="text-white" />,
    description: "Deployment of one module requires the whole system",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnalyticsIcon size={25} className="text-white" />,
    description: "Different parts of your system have different scaling needs",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ShieldIcon size={25} className="text-white" />,
    description: "Multiple teams conflicting in the same codebase",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <ChecklistIcon size={25} className="text-white" />,
    description: "You need different technologies for different workloads",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <WorkflowIcon size={25} className="text-white" />,
    description: "Failure in one area cascades down everything else",
  },
];

const decompositionApproachSectionHead = {
  badgeText: "Our Decomposition Approach",
  title: "A Structured Path to Microservices",
  description:
    "We don't rewrite everything at once. Our methodology prioritizes clear boundaries, incremental delivery, and controlled migration to reduce risk at every stage.",
};

const domainDrivenDesignData = {
  badgeText: "Step 01",
  title: "Domain-Driven Design",
  description:
    "We start with business domains, not technical layers. Services are defined by business capability, not by database tables or API endpoints. This is the difference between microservices that stay manageable and ones that become distributed monoliths.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/domain-driven-design.png",
  imageAlt: "Domain-driven design",
};

const incrementalExtractionData = {
  badgeText: "Step 02",
  title: "Incremental Extraction",
  description:
    "We identify the services with the most independent scaling needs and the clearest domain boundaries first. Each service is extracted, tested, and deployed independently before moving to the next.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/incremental-extraction.png",
  imageAlt: "Incremental extraction",
};

const antiCorruptionLayerData = {
  badgeText: "Step 03",
  title: "Anti-Corruption Layer",
  description:
    "During migration, we build interfaces between the legacy monolith and new services so both can coexist and evolve independently. Clean boundaries from day one.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/anti-corruption-layer.png",
  imageAlt: "Anti-corruption layer",
};

const buildingBlocksSectionHead = {
  badgeText: "What We Design and Build",
  title: "The Building Blocks of Modern Microservices",
  description:
    "We architect the systems, integrations, and operational capabilities that enable independently deployable services to scale reliably over time.",
};

const buildingBlocksData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Service boundary definition and domain mapping for clearly defined business capabilities.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "API contracts between services (REST/GraphQL/gRPC) to ensure consistent communication.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Asynchronous communication patterns (event-driven architecture with message queues)",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Service discovery and load balancing across distributed environments.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title: "Distributed tracing and observability for end-to-end visibility.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Circuit breakers and resilience patterns to improve fault tolerance.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "API gateway design for secure and streamlined access management workflows.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Data isolation strategy - each service owns its data to maintain clear ownership boundaries.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    title:
      "Deployment pipeline per service (independent CI/CD) for autonomous deployments.",
  },
];

const techStackSectionHead = {
  badgeText: "Technologies & Stack",
  title: "The Technology Stack behind Modern Microservices",
  description:
    "From orchestration and service communication to observability and traffic management, we use battle-tested technologies that enable microservices to scale, evolve, and operate reliably in production.",
};

const techStackData = {
  tabs: [
    "Orchestration",
    "Communication",
    "Service Mesh",
    "API Gateway",
    "Observability",
  ],

  technologies: {
    Orchestration: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Kubernetes",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960569/Gloitel/icon/Kubernetes_fuqbbd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "ECS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220510/Gloitel/icon/ecs_nkk5pq.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Cloud Run",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785220490/Gloitel/icon/cloudrun_o7vmgs.png",
      },
    ],

    Communication: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "REST",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960600/Gloitel/icon/RESTAPIs_aldign.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "gRPC",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230211/Gloitel/icon/grpc_hlwe7c.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "GraphQL",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762860000/Gloitel/icon/graph_v7lrwc.webp",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Apache Kafka",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960567/Gloitel/icon/Kafka_wmgb4v.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "RabbitMQ",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960592/Gloitel/icon/RabbitMQ_om1s1r.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS SQS",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960621/Gloitel/icon/AWS_SQS_ylmsp7.png",
      },
    ],

    "Service Mesh": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Istio",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230201/Gloitel/icon/istio_rvnswh.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Linkerd",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230209/Gloitel/icon/linkerd_qf7orp.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS App Mesh",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230210/Gloitel/icon/aws_krfgez.png",
        class: "",
      },
    ],

    "API Gateway": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Kong",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230201/Gloitel/icon/kong_ii0zff.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS API Gateway",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230200/Gloitel/icon/aws-api-gateway_cipauu.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "NGINX",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230200/Gloitel/icon/nginx_etsnvx.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Traefik",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230200/Gloitel/icon/traefik_lrwp9k.png",
      },
    ],

    Observability: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Jaeger",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230867/Gloitel/icon/jaeger_zsjugm.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Zipkin",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230940/Gloitel/icon/zipkin_neig2a.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "OpenTelemetry",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230216/Gloitel/icon/opentelemetry_g1tqde.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Grafana",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960688/Gloitel/icon/Grafana_gti3tp.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Prometheus",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785230215/Gloitel/icon/prometheus_hzanpt.png",
      },
    ],
  },
};

const microservicesCTAData = {
  badgeText: "Ready to Modernize?",
  title: "Build the Next Version of Your Architecture",
  description:
    "Whether you're validating the need for decomposition or planning the migration itself, we'll help you move forward with clarity and confidence.",
  buttonText: "Architecture Review",
  buttonLink: "/contact",
};

const processAutomationHeroData = {
  badgeText: "Process Automation",
  title: "Automate the Work that Shouldn't Need Humans",
  description:
    "Not every process needs AI. Some just need to be automated. We assess what each process requires - whether it's a simple rule-based workflow, an integration script, or an intelligent agent - and build the right solution.",
  image: "/images/What-we-do/Rectangle 1.png",
  imageAlt: "Process automation",
  video:
    "https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4",
  primaryButton: {
    text: "Identify Your Automation Opportunities",
    href: "/contact",
  },
  secondaryButton: {
    text: "Process Audit",
    href: "/about",
    icon: <CodeIcon size={25} className="text-white" />,
  },
};

const processCategoriesSectionHead = {
  badgeText: "Process Categories We Automate",
  title: "The Right Automation for Every Process",
  description:
    "We assess how work moves through your organization and design automation strategies that improve efficiency, reduce errors, and adapt to operational complexity.",
};

const processCategoriesData = [
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <MonitorIcon size={25} className="text-white" />,
    title: "Structured Data Workflows",
    description:
      "Repeatable, rule-based processes with structured inputs. Data entry automation, report generation, data validation, system synchronization, and scheduled jobs.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <LinkIcon size={25} className="text-white" />,
    title: "Document Processing",
    description:
      "Extract structured data from documents, classify them, route them, and trigger downstream actions. Handles PDFs, emails, scanned documents, and forms.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <DatabaseIcon size={25} className="text-white" />,
    title: "Integration Automation",
    description:
      "Connect systems that don't talk to each other. Event-driven integrations that keep data in sync across CRM, ERP, HRIS, and custom applications without manual export/import.",
  },
  {
    id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
    icon: <AnalyticsIcon size={25} className="text-white" />,
    title: "AI-Powered Process Automation",
    description:
      "For processes where the inputs are unstructured, the rules are complex, or exceptions are common. AI agents that understand context, handle edge cases, and escalate to humans appropriately.",
  },
];

const automationApproachSectionHead = {
  badgeText: "Our Automation Assessment Process",
  title: "A Structured Approach to Process Automation",
  description:
    "We evaluate, prioritize, and implement automation opportunities through a structured methodology designed to maximize business value and drive successful execution.",
};

const processInventoryData = {
  badgeText: "Step 01",
  title: "Process Inventory",
  description:
    "Document all candidate processes: volume, frequency, error rate, current time cost, and exception rate.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/process-inventory.png",
  imageAlt: "Process inventory",
};
*/

// export const automationScoringData = {
//   badgeText: "Step 02",
//   title: "Automation Suitability Scoring",
//   description:
//     "Score each process on: rule clarity, exception frequency, data structure, and integration complexity, and business impact.",
//   buttonText: "View more",
//   buttonLink: "/",
//   image: "/images/What-we-do/automation-scoring.png",
//   imageAlt: "Automation suitability scoring",
// };

/* Non-exported data retained for reference.
const buildVsBuyData = {
  badgeText: "Step 03",
  title: "Build vs Buy Decision",
  description:
    "Evaluate whether off-the-shelf tools (Zapier, Make, Power Automate) are sufficient or whether custom development is warranted.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/build-vs-buy.png",
  imageAlt: "Build vs buy decision",
};

const phasedImplementationData = {
  badgeText: "Step 04",
  title: "Phased Implementation",
  description:
    "Build the highest-value automations first. Each automation is monitored, validated, and documented before moving to the next.",
  buttonText: "View more",
  buttonLink: "/",
  image: "/images/What-we-do/phased-implementation.png",
  imageAlt: "Phased implementation",
};

const automationTechStackData = {
  badgeText: "Tools & Technologies",
  title: "Built with Trusted Automation Technologies",
  description:
    "Our solutions integrate best-in-class tools across orchestration, integration, document AI, and custom development to drive operational efficiency.",

  tabs: [
    "Workflow Automation",
    "RPA Tools",
    "Integration",
    "Document AI",
    "Custom AI",
  ],

  technologies: {
    "Workflow Automation": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "n8n",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235402/Gloitel/icon/n8n_xavhu4.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Apache Airflow",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785144523/Gloitel/icon/node20_dh5p3f.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Prefect",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Prefect_mvrwp7.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Temporal",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Temporal_vbpzdd.png",
      },
    ],

    "RPA Tools": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "UiPath",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/UiPath_vmxwvy.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Automation Anywhere",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Automation_Anywhere_sgocbh.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Power Automate",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Power_Automate_rw3zgj.png",
      },
    ],

    Integration: [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "MuleSoft",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/MuleSoft_ojuoj2.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Boomi",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/Boomi_afnhgd.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS Step Functions",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235401/Gloitel/icon/AWS_Step_Functions_rgqccv.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Zapier",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/Zapier_bfnkkq.png",
      },
    ],

    "Document AI": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "AWS Textract",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/AWS_Textract_whg1md.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Google Document AI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/Google_Document_AI_fw5vfo.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Azure Form Recognizer",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1785235416/Gloitel/icon/Azure_Form_Recognizer_tfbhx0.png",
      },
    ],

    "Custom AI": [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "LangChain",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960570/Gloitel/icon/langChain_kugupr.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "OpenAI",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960583/Gloitel/icon/openai_wwedph.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Anthropic",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960642/Gloitel/icon/claude_sszoov.png",
      },
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        name: "Custom Python pipelines",
        logo: "https://res.cloudinary.com/dsqu6pi0d/image/upload/v1784960588/Gloitel/icon/python_afmdty.png",
      },
    ],
  },
};

const processAutomationCTAData = {
  badgeText: "Ready to Automate?",
  title: "Transform Manual Work into Intelligent Operations",
  description:
    "Whether you're exploring simple workflows or enterprise-wide automation, we'll help you identify the right opportunities and implement solutions that create lasting operational impact.",
  buttonText: "Automate Your Processes",
  buttonLink: "/contact",
};
*/
