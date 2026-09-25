import 'server-only';

import { MongoClient, ObjectId, type Collection, type WithId } from 'mongodb';

export type JobStatus = 'active' | 'inactive';
export type JobDocument = {
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  status: JobStatus;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
export class JobInputError extends Error {}
let collectionPromise: Promise<Collection<JobDocument>> | undefined;

export function getJobs() {
  collectionPromise ??= (async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not configured');
    const client = await new MongoClient(uri).connect();
    try {
      const collection = client.db().collection<JobDocument>('jobs');
      await collection.createIndex({ status: 1, createdAt: -1 });
      return collection;
    } catch (error) {
      await client.close();
      throw error;
    }
  })().catch(error => {
    collectionPromise = undefined;
    throw error;
  });
  return collectionPromise;
}

export function validateJob(body: unknown): Omit<JobDocument, 'createdAt' | 'updatedAt'> {
  if (!body || typeof body !== 'object' || Array.isArray(body))
    throw new JobInputError('Request body must be a JSON object');
  const input = body as Record<string, unknown>;
  const text = (key: string, max: number) => {
    const value = input[key];
    if (typeof value !== 'string' || !value.trim() || value.length > max)
      throw new JobInputError(`${key} must be 1 to ${max} characters`);
    return value.trim();
  };
  const title = text('title', 150);
  const department = text('department', 100);
  const location = text('location', 150);
  const description = text('description', 20000);
  const type = input.type;
  const status = input.status ?? 'active';
  if (!['full-time', 'part-time', 'contract', 'internship'].includes(String(type)))
    throw new JobInputError('Invalid job type');
  if (status !== 'active' && status !== 'inactive')
    throw new JobInputError('Status must be active or inactive');
  return { title, department, location, description, type: type as JobDocument['type'], status };
}

export function jobId(id: string) {
  if (!/^[a-f\d]{24}$/i.test(id)) throw new JobInputError('Invalid job ID');
  return new ObjectId(id);
}

export function serializeJob({ _id, ...job }: WithId<JobDocument>) {
  return { ...job, id: _id.toHexString() };
}

export function jobError(error: unknown) {
  if (error instanceof JobInputError || error instanceof SyntaxError)
    return Response.json(
      {
        success: false,
        message:
          error instanceof SyntaxError ? 'Invalid JSON body' : (error as JobInputError).message,
      },
      { status: 400 },
    );
  return Response.json({ success: false, message: 'Job request failed' }, { status: 500 });
}
