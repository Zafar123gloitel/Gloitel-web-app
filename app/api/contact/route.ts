import { requireAuth } from '@/lib/auth';
import { MongoClient } from 'mongodb';

const collectionName = 'contact_submissions';

let clientPromise: Promise<MongoClient> | undefined;

function getMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }

  clientPromise ??= new MongoClient(uri).connect().catch(error => {
    clientPromise = undefined;
    throw error;
  });

  return clientPromise;
}

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const unauthorized = await requireAuth(request);
    if (unauthorized) return unauthorized;

    const params = new URL(request.url).searchParams;
    const positiveInteger = (value: string | null, fallback: number, max: number) => {
      const parsed = Number(value);
      return Number.isInteger(parsed) && parsed > 0 ? Math.min(parsed, max) : fallback;
    };
    const page = positiveInteger(params.get('page'), 1, 100000);
    const limit = positiveInteger(params.get('limit'), 20, 100);
    const collection = (await getMongoClient()).db().collection(collectionName);
    const [contacts, total] = await Promise.all([
      collection
        .find({})
        .sort({ createdAt: -1, _id: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray(),
      collection.countDocuments(),
    ]);

    return Response.json({
      success: true,
      data: contacts.map(({ _id, ...contact }) => ({ ...contact, id: _id.toString() })),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch {
    return Response.json(
      { success: false, message: 'Failed to retrieve contacts' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fields = ['firstName', 'lastName', 'email', 'country', 'companyType', 'message'] as const;

    const contact = Object.fromEntries(
      fields.map(field => [field, typeof body[field] === 'string' ? body[field].trim() : '']),
    ) as Record<(typeof fields)[number], string>;

    if (fields.some(field => !contact[field])) {
      return Response.json(
        {
          success: false,
          message: 'All fields are required',
        },
        { status: 400 },
      );
    }

    const client = await getMongoClient();

    await client
      .db()
      .collection(collectionName)
      .insertOne({
        ...contact,
        createdAt: new Date(),
      });

    return Response.json({
      success: true,
      message: 'Contact form submitted successfully',
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: 'Failed to submit contact form',
      },
      { status: 500 },
    );
  }
}
