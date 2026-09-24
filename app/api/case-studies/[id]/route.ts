import { requireAuth } from '@/lib/auth';
import {
  caseStudyError,
  caseStudyId,
  getCaseStudies,
  serializeCaseStudy,
  validateCaseStudy,
  type CaseStudyDocument,
} from '@/lib/caseStudies';
import type { Filter } from 'mongodb';

export const runtime = 'nodejs';
type Context = { params: Promise<{ id: string }> };
const notFound = () =>
  Response.json({ success: false, message: 'Case study not found' }, { status: 404 });

export async function GET(request: Request, context: Context) {
  try {
    const id = (await context.params).id;
    const isId = /^[a-f\d]{24}$/i.test(id);
    const filter: Filter<CaseStudyDocument> = isId ? { _id: caseStudyId(id) } : { slug: id };
    const unauthorized = await requireAuth(request);
    if (unauthorized) filter.status = 'published';
    const study = await (await getCaseStudies()).findOne(filter);
    return study ? Response.json({ success: true, data: serializeCaseStudy(study) }) : notFound();
  } catch (error) {
    return caseStudyError(error);
  }
}

export async function PUT(request: Request, context: Context) {
  const unauthorized = await requireAuth(request);
  if (unauthorized) return unauthorized;
  try {
    const _id = caseStudyId((await context.params).id);
    const changes = validateCaseStudy(await request.json(), true);
    const collection = await getCaseStudies();
    const existing = await collection.findOne({ _id });
    if (!existing) return notFound();
    validateCaseStudy({ ...existing, ...changes });
    const study = await collection.findOneAndUpdate(
      { _id },
      { $set: { ...changes, updatedAt: new Date().toISOString() } },
      { returnDocument: 'after' },
    );
    return study
      ? Response.json({
          success: true,
          message: 'Case study updated successfully',
          data: serializeCaseStudy(study),
        })
      : notFound();
  } catch (error) {
    return caseStudyError(error);
  }
}
export const PATCH = PUT;

export async function DELETE(request: Request, context: Context) {
  const unauthorized = await requireAuth(request);
  if (unauthorized) return unauthorized;
  try {
    const _id = caseStudyId((await context.params).id);
    const { deletedCount } = await (await getCaseStudies()).deleteOne({ _id });
    return deletedCount
      ? Response.json({ success: true, message: 'Case study deleted successfully' })
      : notFound();
  } catch (error) {
    return caseStudyError(error);
  }
}
