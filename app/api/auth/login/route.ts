import { AUTH_COOKIE_NAME, TOKEN_LIFETIME, authenticate, authError } from '@/lib/auth';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    const data = await authenticate(await request.json());
    if (!data)
      return Response.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 },
      );
    const { token, ...publicData } = data;
    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
    return Response.json(
      { success: true, data: publicData },
      {
        headers: {
          'Set-Cookie': `${AUTH_COOKIE_NAME}=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${TOKEN_LIFETIME}${secure}`,
        },
      },
    );
  } catch (error) {
    return authError(error);
  }
}
