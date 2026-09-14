// Admin authentication helper
// Simple localStorage-based auth for demo admin panel

export const ADMIN_CREDENTIALS = {
  email: 'admin@gloitel.com',
  password: 'admin123',
};

const TOKEN_KEY = 'gloitel_admin_token';
const TOKEN_VALUE = 'gloitel_admin_authenticated';

export function login(email: string, password: string): boolean {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, TOKEN_VALUE);
    }
    return true;
  }
  return false;
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(TOKEN_KEY) === TOKEN_VALUE;
}
