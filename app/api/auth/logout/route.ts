import { AUTH_COOKIE_NAME } from '@/lib/auth';

export async function POST() {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return Response.json(
    { success: true },
    {
      headers: {
        'Set-Cookie': `${AUTH_COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0${secure}`,
      },
    },
  );
}
