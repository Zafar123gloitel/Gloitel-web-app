import { requireAuth } from '@/lib/auth';
import { MongoClient, ObjectId } from 'mongodb';

export const runtime = 'nodejs';

const COLLECTION_NAME = 'job_applications';

let clientPromise: Promise<MongoClient> | undefined;

function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not configured');
  clientPromise ??= new MongoClient(uri).connect().catch(error => {
    clientPromise = undefined;
    throw error;
  });
  return clientPromise;
}

type Context = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: Context) {
  const unauthorized = await requireAuth(request);
  if (unauthorized) return unauthorized;

  try {
    const { id } = await context.params;

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return Response.json({ success: false, message: 'Invalid application ID' }, { status: 400 });
    }

    const client = await getMongoClient();
    const application = await client
      .db()
      .collection(COLLECTION_NAME)
      .findOne({ _id: new ObjectId(id) }, { projection: { 'resume.data': 0 } });

    if (!application) {
      return Response.json({ success: false, message: 'Application not found' }, { status: 404 });
    }

    // If the application has a jobId, fetch the related job details
    let jobDetail: { title: string; department: string; type: string } | null = null;
    if (application.jobId instanceof ObjectId) {
      const job = await client
        .db()
        .collection('jobs')
        .findOne({ _id: application.jobId }, { projection: { title: 1, department: 1, type: 1 } });
      if (job) {
        jobDetail = {
          title: job.title as string,
          department: job.department as string,
          type: job.type as string,
        };
      }
    }

    return Response.json({
      success: true,
      data: {
        ...application,
        _id: application._id.toString(),
        jobDetail,
      },
    });
  } catch {
    return Response.json(
      { success: false, message: 'Failed to retrieve application' },
      { status: 500 },
    );
  }
}
