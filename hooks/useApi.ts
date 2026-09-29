'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { getApiServerSnapshot, getApiSnapshot, refreshApi, subscribeApi } from '@/lib/apiStore';
import type { ApiResult } from '@/lib/api';

/** Same URL + pagination mode shares one request and snapshot across mounted consumers. */
export function useApi<T>(url: string | null, { allPages = false }: { allPages?: boolean } = {}) {
  const subscribe = useCallback(
    (listener: () => void) =>
      url
        ? subscribeApi(url, allPages, listener)
        : () => {
            /* Disabled queries have no subscription to clean up. */
          },
    [url, allPages],
  );
  const snapshot = useSyncExternalStore(
    subscribe,
    useCallback(() => getApiSnapshot(url, allPages), [url, allPages]),
    useCallback(() => getApiServerSnapshot(Boolean(url)), [url]),
  );
  const refetch = useCallback(() => refreshApi(url, allPages), [url, allPages]);
  const result = snapshot.result as ApiResult<T> | undefined;
  return {
    data: result?.data,
    pagination: result?.pagination,
    loading: snapshot.loading,
    error: snapshot.error,
    refetch,
  };
}
const emptyList: never[] = [];
export function useApiList<T>(url: string | null) {
  const query = useApi<T[]>(url, { allPages: true });
  return { ...query, data: query.data ?? emptyList };
}
