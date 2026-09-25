export async function login(email: string, password: string): Promise<void> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json().catch(() => null);
  if (response.status === 401 || response.status === 403)
    throw new Error('Invalid admin email or password.');
  if (!response.ok) throw new Error('Login is unavailable. Please try again.');
  if (result?.data?.user?.role !== 'admin')
    throw new Error('This account does not have admin access.');
}

export async function logout(): Promise<void> {
  const response = await fetch('/api/auth/logout', { method: 'POST' });
  if (!response.ok) throw new Error('Could not log out. Please try again.');
}
