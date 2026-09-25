import 'server-only';

import { Buffer } from 'node:buffer';
import { MongoClient, MongoServerError, ObjectId, type Collection, type WithId } from 'mongodb';

export class BlogInputError extends Error {}

type BlogFields = Partial<
  Record<
    | 'title'
    | 'Description'
    | 'slug'
    | 'excerpt'
    | 'content'
    | 'thumbnail'
    | 'banner'
    | 'imageAlt'
    | 'category'
    | 'status'
    | 'publishDate'
    | 'allowComments'
    | 'featured'
    | 'author'
    | 'seo'
    | 'social'
    | 'schema'
    | 'settings',
    string | boolean | Record<string, string | boolean>
  >
>;
type BlogDocument = BlogFields & { createdAt: string; updatedAt: string };

let collectionPromise: Promise<Collection<BlogDocument>> | undefined;

export function getBlogs() {
  if (!collectionPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not configured');
    const client = new MongoClient(uri);
    collectionPromise = (async () => {
      try {
        await client.connect();
        const collection = client.db().collection<BlogDocument>('blogs');
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

function object(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function text(value: unknown, field: string, limit: number) {
  if (typeof value !== 'string' || value.length > limit) {
    throw new BlogInputError(`${field} must be text with at most ${limit} characters`);
  }
  return value.trim();
}

function image(value: string, field: string) {
  if (!value) return;
  if (/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(value)) {
    if (Buffer.from(value.split(',')[1], 'base64').length <= 5 * 1024 * 1024) return;
    throw new BlogInputError(`${field} must be at most 5 MB`);
  }
  try {
    const url = new URL(value);
    if (url.protocol === 'https:' || url.protocol === 'http:') return;
  } catch {
    // Report the same validation error for malformed and unsupported URLs.
  }
  throw new BlogInputError(`${field} must be an HTTP(S) URL or a PNG, JPEG or WEBP data URL`);
}

/** Whitelist editor fields; never allow callers to set database IDs or timestamps. */
export function validateBlog(body: unknown, partial = false): BlogFields {
  if (!object(body)) throw new BlogInputError('Request body must be a JSON object');
  const result: BlogFields = {};
  const fields = {
    title: 100,
    Description: 20000,
    slug: 100,
    excerpt: 10000,
    content: 1000000,
    thumbnail: 7000000,
    banner: 7000000,
    imageAlt: 500,
    category: 100,
    status: 20,
    publishDate: 100,
  };
  for (const [field, limit] of Object.entries(fields)) {
    if (body[field] !== undefined) result[field] = text(body[field], field, limit);
  }
  for (const field of ['allowComments', 'featured']) {
    if (body[field] !== undefined) {
      if (typeof body[field] !== 'boolean') throw new BlogInputError(`${field} must be boolean`);
      result[field] = body[field];
    }
  }
  const nestedFields = {
    author: ['name', 'image'],
    seo: ['metaTitle', 'metaDescription', 'keywords'],
    social: ['ogTitle', 'ogDescription', 'ogImage'],
    schema: ['type', 'customJsonLd'],
    settings: ['canonicalUrl', 'noIndex'],
  };
  for (const [field, keys] of Object.entries(nestedFields)) {
    const value = body[field];
    if (value === undefined) continue;
    if (!object(value)) throw new BlogInputError(`${field} must be an object`);
    const nested: Record<string, string | boolean> = {};
    for (const key of keys) {
      if (value[key] === undefined) continue;
      if (key === 'noIndex') {
        if (typeof value[key] !== 'boolean') throw new BlogInputError('noIndex must be boolean');
        nested[key] = value[key];
      } else {
        nested[key] = text(value[key], `${field}.${key}`, 20000);
        if (key === 'image' || key === 'ogImage') image(nested[key], `${field}.${key}`);
      }
    }
    result[field] = nested;
  }
  if (!partial) {
    for (const field of ['title', 'Description', 'slug', 'excerpt', 'content', 'category']) {
      result[field] ??= '';
    }
    result.status ??= 'draft';
    result.allowComments ??= true;
    result.featured ??= false;
    if (result.status === 'scheduled' && !result.publishDate) {
      throw new BlogInputError('Scheduled blogs require publishDate');
    }
    result.publishDate ||= new Date().toISOString();
  }
  if ((!partial || 'title' in result) && !result.title)
    throw new BlogInputError('Title is required');
  if ((!partial || 'slug' in result) && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(result.slug))) {
    throw new BlogInputError('Slug must contain lowercase letters, numbers and single hyphens');
  }
  if ('status' in result && !['draft', 'published', 'scheduled'].includes(String(result.status))) {
    throw new BlogInputError('Status must be draft, published or scheduled');
  }
  if ('publishDate' in result) {
    const date = new Date(String(result.publishDate));
    if (!result.publishDate || Number.isNaN(date.getTime()))
      throw new BlogInputError('Invalid publishDate');
    result.publishDate = date.toISOString();
  }
  if ('thumbnail' in result) image(String(result.thumbnail), 'thumbnail');
  if ('banner' in result) image(String(result.banner), 'banner');
  if (!partial && result.status !== 'draft' && (!result.content || !result.excerpt)) {
    throw new BlogInputError('Content and excerpt are required to publish or schedule a blog');
  }
  if (partial && Object.keys(result).length === 0)
    throw new BlogInputError('No blog fields provided');
  return result;
}

export function blogId(id: string) {
  if (!/^[a-f\d]{24}$/i.test(id)) throw new BlogInputError('Invalid blog ID');
  return new ObjectId(id);
}

export async function uploadBlogImage(value: string, field: 'thumbnail' | 'banner') {
  if (!value.startsWith('data:image/')) return value;
  const { CloudinaryService } = await import('@/lib/cloudinary');
  const result = await CloudinaryService.uploadMedia(value, `Gloitel/Blog/${field}`, 'image');
  return result.secure_url;
}

export function serializeBlog({ _id, ...blog }: WithId<BlogDocument>) {
  return { ...blog, id: _id.toHexString() };
}

export function blogError(error: unknown) {
  if (error instanceof BlogInputError || error instanceof SyntaxError) {
    return Response.json(
      {
        success: false,
        message:
          error instanceof SyntaxError ? 'Invalid JSON body' : (error as BlogInputError).message,
      },
      { status: 400 },
    );
  }
  if (error instanceof MongoServerError && error.code === 11000) {
    return Response.json(
      { success: false, message: 'A blog with this slug already exists' },
      { status: 409 },
    );
  }
  return Response.json({ success: false, message: 'Blog request failed' }, { status: 500 });
}
