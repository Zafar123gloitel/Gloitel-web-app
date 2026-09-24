import { verifyToken } from '@/lib/auth';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  try {
    const user = await verifyToken(request);
    return user
      ? Response.json({ success: true, data: { user } })
      : Response.json({ success: false, message: 'Valid admin session required' }, { status: 401 });
  } catch {
    return Response.json({ success: false, message: 'Verification failed' }, { status: 500 });
  }
}
