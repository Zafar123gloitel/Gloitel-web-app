export type Pagination = { page: number; limit: number; total: number; totalPages: number };
export type ApiResult<T> = { success: boolean; data: T; message?: string; pagination?: Pagination };

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const invalidationListeners = new Set<(path: string) => void>();
export function onApiInvalidation(listener: (path: string) => void) {
  invalidationListeners.add(listener);
  return () => {
    invalidationListeners.delete(listener);
  };
}
export function invalidateApi(path = '/api') {
  invalidationListeners.forEach(listener => listener(path));
}

/** Shared JSON/error handling. FormData keeps the browser's multipart boundary. */
export async function apiRequest<T = unknown>(
  url: string,
  options: RequestInit = {},
): Promise<ApiResult<T>> {
  const response = await fetch(url, { cache: 'no-store', ...options });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result || result.success !== true) {
    throw new ApiError(
      result?.message || `Request failed (${response.status}). Please try again.`,
      response.status,
    );
  }
  if (options.method && options.method.toUpperCase() !== 'GET') {
    const path = url.split('?')[0];
    const resource = path.startsWith('/api/auth/')
      ? '/api'
      : path.startsWith('/api/career/apply')
        ? '/api/career/apply'
        : path.split('/').slice(0, 3).join('/');
    invalidateApi(resource);
  }
  return result;
}

export async function apiAllPages<T>(url: string, signal?: AbortSignal): Promise<ApiResult<T[]>> {
  const parsed = new URL(url, 'http://local');
  const items: T[] = [];
  let page = 1;
  let totalPages: number;
  do {
    parsed.searchParams.set('page', String(page));
    parsed.searchParams.set('limit', '100');
    const result = await apiRequest<T[]>(`${parsed.pathname}${parsed.search}`, { signal });
    if (!Array.isArray(result.data)) throw new Error('Invalid list response. Please try again.');
    items.push(...result.data);
    totalPages = result.pagination?.totalPages ?? 1;
    if (!Number.isInteger(totalPages) || totalPages < 0)
      throw new Error('Invalid pagination response.');
    page++;
  } while (page <= totalPages);
  return { success: true, data: items };
}
