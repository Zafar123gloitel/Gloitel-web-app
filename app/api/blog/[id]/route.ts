import { blogError, blogId, getBlogs, serializeBlog, validateBlog } from '@/lib/blogs';

export const runtime = 'nodejs';

type Context = { params: Promise<{ id: string }> };
const notFound = () =>
  Response.json({ success: false, message: 'Blog not found' }, { status: 404 });

export async function GET(_request: Request, context: Context) {
  try {
    const _id = blogId((await context.params).id);
    const blog = await (await getBlogs()).findOne({ _id });
    return blog ? Response.json({ success: true, data: serializeBlog(blog) }) : notFound();
  } catch (error) {
    return blogError(error);
  }
}

/** Both update methods accept editor fields; omitted fields remain unchanged. */
export async function PATCH(request: Request, context: Context) {
  try {
    const _id = blogId((await context.params).id);
    const changes = validateBlog(await request.json(), true);
    const collection = await getBlogs();
    const existing = await collection.findOne({ _id });
    if (!existing) return notFound();
    validateBlog({ ...existing, ...changes });
    const blog = await collection.findOneAndUpdate(
      { _id },
      { $set: { ...changes, updatedAt: new Date().toISOString() } },
      { returnDocument: 'after' },
    );
    return blog
      ? Response.json({
          success: true,
          message: 'Blog updated successfully',
          data: serializeBlog(blog),
        })
      : notFound();
  } catch (error) {
    return blogError(error);
  }
}

export const PUT = PATCH;

export async function DELETE(_request: Request, context: Context) {
  try {
    const _id = blogId((await context.params).id);
    const { deletedCount } = await (await getBlogs()).deleteOne({ _id });
    return deletedCount
      ? Response.json({ success: true, message: 'Blog deleted successfully' })
      : notFound();
  } catch (error) {
    return blogError(error);
  }
}
