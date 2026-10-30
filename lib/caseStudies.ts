import 'server-only';

import { Buffer } from 'node:buffer';
import { MongoClient, MongoServerError, ObjectId, type Collection, type WithId } from 'mongodb';

export class CaseStudyInputError extends Error {}

export type CaseStudyFields = Partial<{
  title: string;
  Description: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  banner: string;
  category: string;
  industry: string;
  service: string;
  liveWebsiteLink: string;
  status: 'draft' | 'published' | 'scheduled';
  publishDate: string;
}>;
export type CaseStudyDocument = CaseStudyFields & { createdAt: string; updatedAt: string };

let collectionPromise: Promise<Collection<CaseStudyDocument>> | undefined;

export function getCaseStudies() {
  if (!collectionPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not configured');
    const client = new MongoClient(uri);
    collectionPromise = (async () => {
      try {
        await client.connect();
        const collection = client.db().collection<CaseStudyDocument>('caseStudies');
        await collection.createIndex({ slug: 1 }, { unique: true });
        return collection;
      } catch (error) {
        collectionPromise = undefined;
        await client.close();
        throw error;
      }
    })();
  }
  return collectionPromise;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function validateCaseStudy(body: unknown, partial = false): CaseStudyFields {
  if (!isObject(body)) throw new CaseStudyInputError('Request body must be a JSON object');
  const result: CaseStudyFields = {};
  const limits = {
    title: 100,
    Description: 500,
    slug: 100,
    excerpt: 10000,
    content: 1000000,
    thumbnail: 7000000,
    banner: 7000000,
    category: 100,
    industry: 100,
    service: 100,
    liveWebsiteLink: 2000,
    publishDate: 100,
  } as const;
  for (const field of Object.keys(limits) as (keyof typeof limits)[]) {
    if (body[field] === undefined) continue;
    const value = body[field];
    if (typeof value !== 'string' || value.length > limits[field]) {
      throw new CaseStudyInputError(
        `${field} must be text with at most ${limits[field]} characters`,
      );
    }
    result[field] = value.trim();
  }
  if (body.status !== undefined) {
    if (!['draft', 'published', 'scheduled'].includes(String(body.status)))
      throw new CaseStudyInputError('Status must be draft, published or scheduled');
    result.status = body.status as CaseStudyFields['status'];
  }
  if (!partial) {
    result.status ??= 'draft';
    if (result.status === 'scheduled' && !result.publishDate)
      throw new CaseStudyInputError('Scheduled case studies require publishDate');
    result.publishDate ||= new Date().toISOString();
  }
  for (const field of ['title', 'slug', 'category', 'industry', 'service'] as const) {
    if ((!partial || field in result) && !result[field])
      throw new CaseStudyInputError(`${field} is required`);
  }
  if ('slug' in result && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(result.slug ?? ''))
    throw new CaseStudyInputError(
      'Slug must contain lowercase letters, numbers and single hyphens',
    );
  if ('publishDate' in result) {
    const date = new Date(result.publishDate ?? '');
    if (Number.isNaN(date.getTime())) throw new CaseStudyInputError('Invalid publishDate');
    result.publishDate = date.toISOString();
  }
  if (result.status === 'scheduled' && !result.publishDate)
    throw new CaseStudyInputError('Scheduled case studies require publishDate');
  if (result.liveWebsiteLink) {
    try {
      const url = new URL(result.liveWebsiteLink);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Unsupported protocol');
    } catch {
      throw new CaseStudyInputError('liveWebsiteLink must be an HTTP(S) URL');
    }
  }
  for (const field of ['thumbnail', 'banner'] as const) {
    const value = result[field];
    if (!value) continue;
    if (/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(value)) {
      if (Buffer.from(value.split(',')[1], 'base64').length > 5 * 1024 * 1024)
        throw new CaseStudyInputError(`${field} must be at most 5 MB`);
      continue;
    }
    try {
      const url = new URL(value);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Unsupported protocol');
    } catch {
      throw new CaseStudyInputError(
        `${field} must be an HTTP(S) URL or PNG, JPEG or WEBP data URL`,
      );
    }
  }
  if (
    !partial &&
    result.status !== 'draft' &&
    (!result.content || !result.excerpt || !result.Description)
  )
    throw new CaseStudyInputError(
      'Content, excerpt and description are required to publish or schedule a case study',
    );
  if (partial && Object.keys(result).length === 0)
    throw new CaseStudyInputError('No case study fields provided');
  return result;
}

export function caseStudyId(id: string) {
  if (!/^[a-f\d]{24}$/i.test(id)) throw new CaseStudyInputError('Invalid case study ID');
  return new ObjectId(id);
}

export async function uploadCaseStudyImage(value: string, field: 'thumbnail' | 'banner') {
  if (!value.startsWith('data:image/')) return value;
  const { CloudinaryService } = await import('@/lib/cloudinary');
  const result = await CloudinaryService.uploadMedia(
    value,
    `Gloitel/Case Studies/${field}`,
    'image',
  );
  return result.secure_url;
}

export function serializeCaseStudy({ _id, ...study }: WithId<CaseStudyDocument>) {
  return { ...study, id: _id.toHexString() };
}

export function caseStudyError(error: unknown) {
  if (error instanceof CaseStudyInputError || error instanceof SyntaxError)
    return Response.json(
      {
        success: false,
        message:
          error instanceof SyntaxError
            ? 'Invalid JSON body'
            : (error as CaseStudyInputError).message,
      },
      { status: 400 },
    );
  if (error instanceof MongoServerError && error.code === 11000)
    return Response.json(
      { success: false, message: 'A case study with this slug already exists' },
      { status: 409 },
    );
  return Response.json({ success: false, message: 'Case study request failed' }, { status: 500 });
}
