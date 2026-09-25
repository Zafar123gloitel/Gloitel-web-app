import { requireAuth } from '@/lib/auth';
import {
  caseStudyError,
  getCaseStudies,
  serializeCaseStudy,
  uploadCaseStudyImage,
  validateCaseStudy,
  type CaseStudyDocument,
} from '@/lib/caseStudies';
import type { Filter } from 'mongodb';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const unauthorized = await requireAuth(request);
  if (unauthorized) return unauthorized;
  try {
    const fields = validateCaseStudy(await request.json());
    for (const field of ['thumbnail', 'banner'] as const)
      if (fields[field]) fields[field] = await uploadCaseStudyImage(fields[field], field);
    const now = new Date().toISOString();
    const study = { ...fields, createdAt: now, updatedAt: now };
    const { insertedId } = await (await getCaseStudies()).insertOne(study);
    return Response.json(
      {
        success: true,
        message: 'Case study created successfully',
        data: serializeCaseStudy({ ...study, _id: insertedId }),
      },
      { status: 201 },
    );
  } catch (error) {
    return caseStudyError(error);
  }
}

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const all = params.get('scope') === 'all';
    if (all) {
      const unauthorized = await requireAuth(request);
      if (unauthorized) return unauthorized;
    }
    const positiveInteger = (value: string | null, fallback: number, max: number) => {
      const number = Number(value);
      return Number.isInteger(number) && number > 0 ? Math.min(number, max) : fallback;
    };
    const page = positiveInteger(params.get('page'), 1, 100000);
    const limit = positiveInteger(params.get('limit'), 20, 100);
    const filter: Filter<CaseStudyDocument> = all ? {} : { status: 'published' };
    const status = params.get('status');
    if (all && status && ['draft', 'published', 'scheduled'].includes(status))
      filter.status = status as 'draft' | 'published' | 'scheduled';
    const category = params.get('category')?.trim();
    if (category) filter.category = category;
    const search = params.get('search')?.trim();
    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      filter.$or = ['title', 'Description', 'excerpt', 'category', 'industry', 'service'].map(
        field => ({ [field]: { $regex: escaped, $options: 'i' } }),
      );
    }
    const collection = await getCaseStudies();
    const [studies, total] = await Promise.all([
      collection
        .find(filter)
        .sort({ createdAt: -1, _id: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray(),
      collection.countDocuments(filter),
    ]);
    return Response.json({
      success: true,
      data: studies.map(serializeCaseStudy),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return caseStudyError(error);
  }
}
