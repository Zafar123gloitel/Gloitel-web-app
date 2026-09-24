/* eslint-disable no-console -- CLI command reports seeded and skipped case studies. */
/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node CLI uses CommonJS. */
const { readFileSync } = require('node:fs');
const { MongoClient } = require('mongodb');

process.loadEnvFile('.env');

const source = JSON.parse(
  readFileSync(require.resolve('../app/(website)/portfolio/[id]/data.json'), 'utf8'),
);

// The supplied resources/stages entries, in the same order as the existing portfolio details.
const entries = [
  {
    year: 2018,
    slug: 'cgmmssy',
    title: 'CGMMSSY',
    category: 'Web & App Development',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867021/Gloitel/portfolio/cgmmssy_oww8hb.svg',
  },
  {
    year: 2024,
    slug: 'path-ias-academy',
    title: 'PATH IAS ACADEMY',
    category: 'Business',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867010/Gloitel/portfolio/pathias_usuts5.webp',
  },
  {
    year: 2024,
    slug: 'hrm-technology',
    title: 'HRM TECHNOLOGY',
    category: 'Website',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867011/Gloitel/portfolio/hrm_wwb6ki.svg',
  },
  {
    year: 2023,
    slug: 'experteeth',
    title: 'Experteeth',
    category: 'Website',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762867007/Gloitel/portfolio/experteeth_zk1kdv.webp',
  },
  {
    year: 2025,
    slug: 'godhaar',
    title: 'Godhaar',
    category: 'Website & Mobile App',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927323/Gloitel/portfolio/godhaar_vljbzt.jpg',
  },
  {
    year: 2025,
    slug: 'fitbattle',
    title: 'Fitbattle',
    category: 'Mobile App & Website',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866980/Gloitel/portfolio/fitbattle_esztbn.webp',
  },
  {
    year: 2024,
    slug: 'viadyam-hms',
    title: 'VIADYAM (HMS)',
    category: 'HMS',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866990/Gloitel/portfolio/vidyam_vemacx.webp',
  },
  {
    year: 2024,
    slug: 'staffease-crm',
    title: 'STAFFEASE (CRM)',
    category: 'CRM',
    thumbnail:
      'https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762866991/Gloitel/portfolio/staffease_d4vmhj.webp',
  },
];

function markdownSection(heading, value) {
  if (!value || (Array.isArray(value) && value.length === 0)) return '';
  const body = Array.isArray(value)
    ? [...new Set(value.map(item => item.trim()).filter(Boolean))]
        .map(item => `- ${item}`)
        .join('\n')
    : value.trim();
  return body ? `## ${heading}\n\n${body}` : '';
}

function buildCaseStudies() {
  if (source.length !== entries.length)
    throw new Error('Portfolio source count changed; review seed mapping');
  const now = new Date().toISOString();
  return entries.map((entry, index) => {
    const project = source[index];
    const intro = project.description?.trim() || project.what?.trim();
    if (!intro || !project.industry || !project.projectType)
      throw new Error(`Incomplete portfolio data for ${entry.title}`);
    const content = [
      `Project year: ${entry.year}.`,
      markdownSection('Project Overview', project.what || intro),
      markdownSection('Business Requirements', project.BusinessRequirements),
      markdownSection('Challenges', project.Challenges),
      markdownSection('Our Approach', project.OurApproach),
      markdownSection('Design Process', project.DesignProcess),
      markdownSection('Planning and Development', project.PlanningDevelopment),
      markdownSection('Project Delivery and Results', project.ProjectDeliveryResults),
      markdownSection('How It Works', project.how),
      markdownSection('Why It Matters', project.why),
      markdownSection('Benefits', project.benefits),
    ]
      .filter(Boolean)
      .join('\n\n');
    return {
      slug: entry.slug,
      title: entry.title,
      category: entry.category,
      thumbnail: entry.thumbnail,
      Description: intro.slice(0, 500),
      excerpt: intro,
      content,
      industry: project.industry.trim(),
      service: project.projectType.trim(),
      liveWebsiteLink: project.liveUrl?.trim() || '',
      status: 'published',
      publishDate: now,
      createdAt: now,
      updatedAt: now,
    };
  });
}

async function main() {
  const studies = buildCaseStudies();
  if (process.argv.includes('--dry-run')) {
    for (const study of studies) console.log(`Ready: ${study.title} (${study.slug})`);
  } else {
    if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not configured');
    const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
    try {
      await client.connect();
      const collection = client.db().collection('caseStudies');
      await collection.createIndex({ slug: 1 }, { unique: true });
      for (const study of studies) {
        const result = await collection.updateOne(
          { slug: study.slug },
          { $setOnInsert: study },
          { upsert: true },
        );
        console.log(`${result.upsertedCount ? 'Added' : 'Already exists'}: ${study.title}`);
      }
    } finally {
      await client.close();
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
