import { blogError, getBlogs, serializeBlog, validateBlog } from '@/lib/blogs';

export const runtime = 'nodejs';

// The existing admin login is client-only; these routes need server authentication before deployment.
export async function POST(request: Request) {
  try {
    const fields = validateBlog(await request.json());
    const now = new Date().toISOString();
    const blog = { ...fields, createdAt: now, updatedAt: now };
    const collection = await getBlogs();
    const { insertedId } = await collection.insertOne(blog);
    return Response.json(
      {
        success: true,
        message: 'Blog created successfully',
        data: serializeBlog({ ...blog, _id: insertedId }),
      },
      { status: 201 },
    );
  } catch (error) {
    return blogError(error);
  }
}

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const positiveInteger = (value: string | null, fallback: number, max: number) => {
      const number = Number(value);
      return Number.isInteger(number) && number > 0 ? Math.min(number, max) : fallback;
    };
    const page = positiveInteger(params.get('page'), 1, 100000);
    const limit = positiveInteger(params.get('limit'), 20, 100);
    const collection = await getBlogs();
    const [blogs, total] = await Promise.all([
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
      data: blogs.map(serializeBlog),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return blogError(error);
  }
}
