import { verifyToken } from '@/lib/auth';
import { getJobs, jobError, serializeJob, validateJob, type JobDocument } from '@/lib/jobs';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const all = params.get('scope') === 'all';
    if (all && !(await verifyToken(request)))
      return Response.json({ success: false, message: 'Admin session required' }, { status: 401 });
    const parsedPage = Number(params.get('page'));
    const parsedLimit = Number(params.get('limit'));
    const page = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
    const limit =
      Number.isInteger(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 100) : 20;
    const filter: Partial<Pick<JobDocument, 'status'>> = all ? {} : { status: 'active' };
    const collection = await getJobs();
    const [jobs, total] = await Promise.all([
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
      data: jobs.map(serializeJob),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return jobError(error);
  }
}

export async function POST(request: Request) {
  try {
    if (!(await verifyToken(request)))
      return Response.json({ success: false, message: 'Admin session required' }, { status: 401 });
    const fields = validateJob(await request.json());
    const now = new Date();
    const job = { ...fields, createdAt: now, updatedAt: now };
    const { insertedId } = await (await getJobs()).insertOne(job);
    return Response.json(
      { success: true, data: serializeJob({ ...job, _id: insertedId }) },
      { status: 201 },
    );
  } catch (error) {
    return jobError(error);
  }
}
