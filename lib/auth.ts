import 'server-only';

import { Buffer } from 'node:buffer';
import { createHmac, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { MongoClient, ObjectId, type Collection } from 'mongodb';

const scrypt = promisify(scryptCallback);
export const AUTH_COOKIE_NAME = 'gloitel_admin_session';
export const TOKEN_LIFETIME = 60 * 60 * 24 * 7;
type User = {
  email: string;
  name: string;
  passwordHash: string;
  role: 'admin';
  createdAt: Date;
};
let usersPromise: Promise<Collection<User>> | undefined;

async function users() {
  if (!usersPromise) {
    usersPromise = (async () => {
      const uri = process.env.MONGODB_URI;
      if (!uri) throw new Error('MONGODB_URI is not configured');
      const client = await new MongoClient(uri).connect();
      try {
        const collection = client.db().collection<User>('users');
        await collection.createIndex({ email: 1 }, { unique: true });
        return collection;
      } catch (error) {
        await client.close();
        throw error;
      }
    })().catch(error => {
      usersPromise = undefined;
      throw error;
    });
  }
  return usersPromise;
}

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) throw new Error('AUTH_SECRET must be at least 32 characters');
  return value;
}

function encode(value: string) {
  return Buffer.from(value).toString('base64url');
}
function sign(data: string) {
  return createHmac('sha256', secret()).update(data).digest('base64url');
}
function publicUser(user: { _id: ObjectId; email: string; name: string; role: string }) {
  return { id: user._id.toHexString(), email: user.email, name: user.name, role: user.role };
}

export async function authenticate(body: unknown) {
  secret();
  if (!body || typeof body !== 'object' || Array.isArray(body))
    throw new AuthInputError('Invalid request body');
  const input = body as Record<string, unknown>;
  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  const password = input.password;
  if (!email || typeof password !== 'string')
    throw new AuthInputError('Email and password are required');
  const user = await (await users()).findOne({ email });
  if (!user || user.role !== 'admin') return null;
  const [salt, stored] = user.passwordHash.split(':');
  const actual = (await scrypt(password, Buffer.from(salt, 'hex'), 64)) as Buffer;
  const expected = Buffer.from(stored, 'hex');
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;
  const now = Math.floor(Date.now() / 1000);
  const payload = encode(
    JSON.stringify({ sub: user._id.toHexString(), iat: now, exp: now + TOKEN_LIFETIME }),
  );
  const header = encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const unsigned = `${header}.${payload}`;
  return {
    token: `${unsigned}.${sign(unsigned)}`,
    expiresIn: TOKEN_LIFETIME,
    user: publicUser(user),
  };
}

export async function verifyToken(request: Request) {
  secret();
  const cookie = request.headers
    .get('cookie')
    ?.split(';')
    .map(part => part.trim())
    .find(part => part.startsWith(`${AUTH_COOKIE_NAME}=`));
  if (!cookie) return null;
  const token = cookie.slice(AUTH_COOKIE_NAME.length + 1);
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const unsigned = `${parts[0]}.${parts[1]}`;
  const expected = Buffer.from(sign(unsigned));
  const provided = Buffer.from(parts[2]);
  if (expected.length !== provided.length || !timingSafeEqual(expected, provided)) return null;
  try {
    const header = JSON.parse(Buffer.from(parts[0], 'base64url').toString());
    const claims = JSON.parse(Buffer.from(parts[1], 'base64url').toString());
    if (
      header.alg !== 'HS256' ||
      !ObjectId.isValid(claims.sub) ||
      !Number.isInteger(claims.exp) ||
      claims.exp <= Date.now() / 1000
    )
      return null;
    const user = await (await users()).findOne({ _id: new ObjectId(claims.sub) });
    return user?.role === 'admin' ? publicUser(user) : null;
  } catch {
    return null;
  }
}

export async function requireAuth(request: Request) {
  const user = await verifyToken(request);
  if (!user)
    return Response.json(
      { success: false, message: 'Valid admin session required' },
      { status: 401 },
    );
  return null;
}

export class AuthInputError extends Error {}
export function authError(error: unknown) {
  if (error instanceof AuthInputError || error instanceof SyntaxError)
    return Response.json(
      {
        success: false,
        message:
          error instanceof SyntaxError ? 'Invalid JSON body' : (error as AuthInputError).message,
      },
      { status: 400 },
    );
  return Response.json(
    { success: false, message: 'Authentication request failed' },
    { status: 500 },
  );
}
