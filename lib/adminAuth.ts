import { apiRequest, ApiError } from './api';

export async function login(email: string, password: string): Promise<void> {
  try {
    const result = await apiRequest<{ user?: { role?: string } }>('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (result.data?.user?.role !== 'admin')
      throw new Error('This account does not have admin access.');
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.status === 401 || error.status === 403)
        throw new Error('Invalid admin email or password.', { cause: error });
      throw new Error('Login is unavailable. Please try again.', { cause: error });
    }
    throw error;
  }
}

export async function logout(): Promise<void> {
  await apiRequest('/api/auth/logout', { method: 'POST' });
}
