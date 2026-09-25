/* eslint-disable no-console -- CLI command reports account creation and errors. */
import { randomBytes, scrypt as scryptCallback } from 'node:crypto';
import { promisify } from 'node:util';
import { MongoClient, MongoServerError } from 'mongodb';

process.loadEnvFile('.env');

const name = (process.env.ADMIN_NAME ?? '').trim();
const email = (process.env.ADMIN_EMAIL ?? '').trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD ?? '';

if (!name || name.length > 100) throw new Error('Name must be 1 to 100 characters');
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
  throw new Error('Enter a valid email address');
if (password.length < 12 || password.length > 128) {
  throw new Error('Password must be 12 to 128 characters');
}
if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not configured');

const salt = randomBytes(16);
const hash = await promisify(scryptCallback)(password, salt, 64);
const client = new MongoClient(process.env.MONGODB_URI);
try {
  await client.connect();
  const users = client.db().collection('users');
  await users.createIndex({ email: 1 }, { unique: true });
  await users.insertOne({
    name,
    email,
    passwordHash: `${salt.toString('hex')}:${hash.toString('hex')}`,
    role: 'admin',
    createdAt: new Date(),
  });
  console.log(`Admin account created: ${email}`);
} catch (error) {
  if (error instanceof MongoServerError && error.code === 11000) {
    console.error('An account with this email already exists');
    process.exitCode = 1;
  } else {
    throw error;
  }
} finally {
  await client.close();
}
