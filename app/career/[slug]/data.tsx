export interface IJobDetail {
  slug: string;
  title: string;
  tagline: string;
  tags: { icon: 'briefcase' | 'clock' | 'location'; label: string }[];
  jobDescription: string;
  keyResponsibilities: string[];
  skillsExperience: string[];
  preferredQualifications: string[];
}

export const jobDetailsData: Record<string, IJobDetail> = {
  'senior-software-engineer': {
    slug: 'senior-software-engineer',
    title: 'Senior Software Engineer',
    tagline: 'Build scalable applications and contribute to architecture and technical decisions.',
    tags: [
      { icon: 'briefcase', label: 'Engineering' },
      { icon: 'clock', label: 'Full Time' },
      { icon: 'location', label: 'Raipur / Hybrid' },
    ],
    jobDescription:
      'We are looking for a Senior Software Engineer to design, build, and maintain scalable, reliable, and production-ready applications. You will work closely with engineering, product, design, and QA teams to turn complex requirements into practical technical solutions.',
    keyResponsibilities: [
      'Design and develop scalable web and enterprise applications.',
      'Write clean, maintainable, and reusable code.',
      'Contribute to system architecture and technical decisions.',
      'Build and integrate APIs, databases, and backend services.',
      'Review code and maintain engineering quality standards.',
      'Identify and resolve performance and reliability issues.',
      'Collaborate with cross-functional teams throughout development.',
      'Support testing, deployment, and production improvements.',
    ],
    skillsExperience: [
      '3+ years of software development experience.',
      'Strong understanding of programming fundamentals and system design.',
      'Experience with APIs, databases, and modern development frameworks.',
      'Understanding of testing, security, performance, and scalability.',
      'Familiarity with Git and modern development workflows.',
      'Strong problem-solving and communication skills.',
      'Experience with cloud platforms, CI/CD, microservices, or DevOps is a plus.',
    ],
    preferredQualifications: [
      'Experience with cloud platforms (AWS, Azure, or GCP).',
      'Experience with containerization (Docker, Kubernetes).',
      'Exposure to microservices architecture.',
      'Familiarity with DevOps practices and monitoring tools.',
    ],
  },

  'ui-ux-designer': {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    tagline: 'Create intuitive experiences across web, mobile, and enterprise products.',
    tags: [
      { icon: 'briefcase', label: 'Design' },
      { icon: 'clock', label: 'Full Time' },
      { icon: 'location', label: 'Raipur / Hybrid' },
    ],
    jobDescription:
      'We are looking for a UI/UX Designer who can translate business requirements into clear, usable, and visually consistent interfaces. You will work closely with product managers and engineers to design end-to-end experiences for web and mobile platforms.',
    keyResponsibilities: [
      'Design user flows, wireframes, and high-fidelity UI screens.',
      'Conduct user research and usability testing to validate designs.',
      'Maintain and evolve the design system and component library.',
      'Collaborate with developers to ensure accurate implementation.',
      'Translate complex workflows into simple, intuitive interfaces.',
      'Present design concepts and rationale to stakeholders.',
      'Iterate on designs based on user feedback and analytics.',
    ],
    skillsExperience: [
      '2+ years of experience in UI/UX design for digital products.',
      'Proficiency in Figma or similar design tools.',
      'Strong understanding of interaction design and usability principles.',
      'Experience designing for both web and mobile platforms.',
      'Ability to create and maintain design systems.',
      'Good communication and collaboration skills.',
    ],
    preferredQualifications: [
      'Experience designing for enterprise or SaaS products.',
      'Basic understanding of HTML/CSS for design-to-dev handoff.',
      'Experience conducting user interviews or usability studies.',
      'Familiarity with accessibility (WCAG) standards.',
    ],
  },

  'ai-ml-engineer': {
    slug: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    tagline: 'Develop and deploy practical AI solutions for real production environments.',
    tags: [
      { icon: 'briefcase', label: 'AI & Data' },
      { icon: 'clock', label: 'Full Time' },
      { icon: 'location', label: 'Hybrid' },
    ],
    jobDescription:
      'We are looking for an AI/ML Engineer to design, train, and deploy machine learning models that solve real business problems. You will work across the full ML lifecycle — from data preparation to production monitoring — alongside engineering and product teams.',
    keyResponsibilities: [
      'Design, train, and evaluate machine learning and deep learning models.',
      'Build and maintain data pipelines for training and inference.',
      'Deploy models into production using appropriate MLOps practices.',
      'Monitor model performance and retrain as needed.',
      'Collaborate with backend engineers to integrate models into applications.',
      'Experiment with LLMs and other modern AI techniques where applicable.',
      'Document model behavior, assumptions, and limitations clearly.',
    ],
    skillsExperience: [
      '2+ years of experience building and deploying ML models.',
      'Strong Python skills and experience with ML frameworks (PyTorch, TensorFlow, or scikit-learn).',
      'Understanding of data preprocessing, feature engineering, and model evaluation.',
      'Experience working with structured and unstructured data.',
      'Familiarity with APIs for serving models in production.',
      'Strong analytical and problem-solving skills.',
    ],
    preferredQualifications: [
      'Experience with LLMs, RAG pipelines, or vector databases.',
      'Familiarity with MLOps tools (MLflow, Kubeflow, or similar).',
      'Experience with cloud ML platforms (AWS SageMaker, Vertex AI, or Azure ML).',
      'Exposure to distributed training or model optimization techniques.',
    ],
  },

  'backend-engineer': {
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    tagline: 'Design and maintain robust APIs, services, and database systems at scale.',
    tags: [
      { icon: 'briefcase', label: 'Engineering' },
      { icon: 'clock', label: 'Full Time' },
      { icon: 'location', label: 'Raipur / Hybrid' },
    ],
    jobDescription:
      'We are looking for a Backend Engineer to design and build reliable, secure, and high-performing server-side systems. You will own services end-to-end, from API design to database schema and deployment.',
    keyResponsibilities: [
      'Design and implement RESTful or GraphQL APIs.',
      'Build and optimize database schemas and queries.',
      'Ensure application security, scalability, and reliability.',
      'Write automated tests and maintain high code quality.',
      'Collaborate with frontend and product teams on feature delivery.',
      'Debug and resolve production issues in a timely manner.',
      'Participate in code reviews and architecture discussions.',
    ],
    skillsExperience: [
      '2+ years of backend development experience.',
      'Strong knowledge of Node.js, Python, Java, or a similar backend language.',
      'Experience with relational and/or NoSQL databases.',
      'Understanding of authentication, authorization, and API security.',
      'Familiarity with caching, queuing, and background job systems.',
      'Comfortable working with Git and collaborative workflows.',
    ],
    preferredQualifications: [
      'Experience with microservices or event-driven architecture.',
      'Familiarity with Docker and container orchestration.',
      'Exposure to cloud infrastructure (AWS, GCP, or Azure).',
      'Understanding of system design at scale.',
    ],
  },

  'devops-engineer': {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    tagline: 'Own CI/CD pipelines, infrastructure automation, and production reliability.',
    tags: [
      { icon: 'briefcase', label: 'Infrastructure' },
      { icon: 'clock', label: 'Full Time' },
      { icon: 'location', label: 'Remote' },
    ],
    jobDescription:
      'We are looking for a DevOps Engineer to strengthen our infrastructure, deployment pipelines, and system reliability. You will work closely with engineering teams to automate processes and ensure smooth, secure releases.',
    keyResponsibilities: [
      'Build and maintain CI/CD pipelines for multiple services.',
      'Manage cloud infrastructure using infrastructure-as-code tools.',
      'Monitor system health, performance, and set up alerting.',
      'Improve deployment reliability and reduce release friction.',
      'Implement security best practices across infrastructure.',
      'Support engineering teams with environment and tooling needs.',
      'Investigate and resolve production incidents.',
    ],
    skillsExperience: [
      '2+ years of experience in a DevOps or infrastructure role.',
      'Hands-on experience with Docker and Kubernetes.',
      'Experience with infrastructure-as-code (Terraform, CloudFormation, or similar).',
      'Familiarity with CI/CD tools (GitHub Actions, Jenkins, GitLab CI, etc.).',
      'Understanding of networking, security, and cloud architecture basics.',
      'Comfortable working in a Linux environment.',
    ],
    preferredQualifications: [
      'Experience with AWS, GCP, or Azure at a production scale.',
      'Familiarity with observability tools (Prometheus, Grafana, ELK).',
      'Exposure to on-call rotations and incident management.',
      'Scripting experience in Bash, Python, or Go.',
    ],
  },

  'product-manager': {
    slug: 'product-manager',
    title: 'Product Manager',
    tagline: 'Drive product strategy and work closely with engineering and design teams.',
    tags: [
      { icon: 'briefcase', label: 'Product' },
      { icon: 'clock', label: 'Full Time' },
      { icon: 'location', label: 'Raipur / Hybrid' },
    ],
    jobDescription:
      'We are looking for a Product Manager to own product direction from discovery to delivery. You will work with engineering, design, and business stakeholders to define priorities and ship features that create real value.',
    keyResponsibilities: [
      'Define and maintain the product roadmap and priorities.',
      'Gather and translate stakeholder and user requirements into specs.',
      'Work closely with design and engineering through the build cycle.',
      'Analyze product metrics to guide decisions and iterations.',
      'Run sprint planning and manage the product backlog.',
      'Communicate product updates to internal and external stakeholders.',
      'Conduct user research to validate product decisions.',
    ],
    skillsExperience: [
      '2+ years of experience in product management or a related role.',
      'Strong understanding of the software development lifecycle.',
      'Experience writing clear product requirements and user stories.',
      'Comfortable working with data to inform product decisions.',
      'Excellent communication and stakeholder management skills.',
      'Experience with tools like Jira, Notion, or similar.',
    ],
    preferredQualifications: [
      'Experience in a B2B SaaS or enterprise software environment.',
      'Familiarity with UX principles and design collaboration.',
      'Basic understanding of technical architecture and APIs.',
      'Experience with A/B testing or product analytics tools.',
    ],
  },
};
