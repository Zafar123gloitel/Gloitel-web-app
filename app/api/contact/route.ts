import { MongoClient } from 'mongodb';

const collectionName = 'contact_submissions';

let clientPromise: Promise<MongoClient> | undefined;

function getMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }

  clientPromise ??= new MongoClient(uri).connect();

  return clientPromise;
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
