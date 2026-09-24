import { verifyToken } from '@/lib/auth';
import { getJobs, jobError, jobId, serializeJob, validateJob } from '@/lib/jobs';

export const runtime = 'nodejs';
type Context = { params: Promise<{ id: string }> };
const notFound = () => Response.json({ success: false, message: 'Job not found' }, { status: 404 });

export async function GET(request: Request, context: Context) {
  try {
    const _id = jobId((await context.params).id);
    const job = await (await getJobs()).findOne({ _id });
    if (!job || (job.status !== 'active' && !(await verifyToken(request)))) return notFound();
    return Response.json({ success: true, data: serializeJob(job) });
  } catch (error) {
    return jobError(error);
  }
}

export async function PUT(request: Request, context: Context) {
  try {
    if (!(await verifyToken(request)))
      return Response.json({ success: false, message: 'Admin session required' }, { status: 401 });
    const _id = jobId((await context.params).id);
    const fields = validateJob(await request.json());
    const job = await (
      await getJobs()
    ).findOneAndUpdate(
      { _id },
      { $set: { ...fields, updatedAt: new Date() } },
      { returnDocument: 'after' },
    );
    return job ? Response.json({ success: true, data: serializeJob(job) }) : notFound();
  } catch (error) {
    return jobError(error);
  }
}

export async function PATCH(request: Request, context: Context) {
  try {
    if (!(await verifyToken(request)))
      return Response.json({ success: false, message: 'Admin session required' }, { status: 401 });
    const _id = jobId((await context.params).id);
    const body = await request.json();
    if (!body || typeof body !== 'object' || !['active', 'inactive'].includes(body.status))
      return Response.json(
        { success: false, message: 'Status must be active or inactive' },
        { status: 400 },
      );
    const job = await (
      await getJobs()
    ).findOneAndUpdate(
      { _id },
      { $set: { status: body.status, updatedAt: new Date() } },
      { returnDocument: 'after' },
    );
    return job ? Response.json({ success: true, data: serializeJob(job) }) : notFound();
  } catch (error) {
    return jobError(error);
  }
}

export async function DELETE(request: Request, context: Context) {
  try {
    if (!(await verifyToken(request)))
      return Response.json({ success: false, message: 'Admin session required' }, { status: 401 });
    const _id = jobId((await context.params).id);
    const result = await (await getJobs()).deleteOne({ _id });
    return result.deletedCount ? Response.json({ success: true }) : notFound();
  } catch (error) {
    return jobError(error);
  }
}
