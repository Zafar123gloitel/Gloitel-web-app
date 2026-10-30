import { apiAllPages, apiRequest, onApiInvalidation, type ApiResult } from './api';

type Snapshot = { result?: ApiResult<unknown>; loading: boolean; error: string };
const initial: Snapshot = { loading: true, error: '' };
const disabled: Snapshot = { loading: false, error: '' };
type Entry = {
  url: string;
  allPages: boolean;
  snapshot: Snapshot;
  listeners: Set<() => void>;
  controller?: AbortController;
  pending?: Promise<void>;
  updated: number;
  cleanup?: ReturnType<typeof setTimeout>;
};
const entries = new Map<string, Entry>();
export const apiKey = (url: string, allPages: boolean) => `${allPages ? 'all' : 'one'}:${url}`;
function entryFor(url: string, allPages: boolean) {
  const key = apiKey(url, allPages);
  let entry = entries.get(key);
  if (!entry) {
    entry = { url, allPages, snapshot: initial, listeners: new Set(), updated: 0 };
    entries.set(key, entry);
  }
  return entry;
}
function publish(entry: Entry, snapshot: Snapshot) {
  entry.snapshot = snapshot;
  entry.listeners.forEach(listener => listener());
}
function load(entry: Entry): Promise<void> {
  if (entry.pending) return entry.pending;
  const controller = new AbortController();
  entry.controller = controller;
  publish(entry, { ...entry.snapshot, loading: true, error: '' });
  entry.pending = (
    entry.allPages
      ? apiAllPages(entry.url, controller.signal)
      : apiRequest(entry.url, { signal: controller.signal })
  )
    .then(result => {
      if (controller.signal.aborted) return;
      entry.updated = Date.now();
      publish(entry, { result, loading: false, error: '' });
    })
    .catch(error => {
      if (!controller.signal.aborted)
        publish(entry, {
          loading: false,
          error: error instanceof Error ? error.message : 'Could not load data.',
        });
    })
    .finally(() => {
      if (entry.controller === controller) entry.pending = undefined;
    });
  return entry.pending;
}
export function subscribeApi(url: string, allPages: boolean, listener: () => void) {
  const entry = entryFor(url, allPages);
  clearTimeout(entry.cleanup);
  entry.listeners.add(listener);
  if (!entry.updated || Date.now() - entry.updated >= 30_000) void load(entry);
  return () => {
    entry.listeners.delete(listener);
    if (entry.listeners.size) return;
    // Allow Strict Mode's immediate re-subscription without cancelling a shared request.
    entry.cleanup = setTimeout(() => {
      if (entry.listeners.size) return;
      entry.controller?.abort();
      entry.pending = undefined;
      // Discard unused data, including authenticated responses, on unmount.
      entries.delete(apiKey(url, allPages));
    }, 0);
  };
}
export function getApiSnapshot(url: string | null, allPages: boolean) {
  return url ? (entries.get(apiKey(url, allPages))?.snapshot ?? initial) : disabled;
}
export function getApiServerSnapshot(enabled: boolean) {
  return enabled ? initial : disabled;
}
export function refreshApi(url: string | null, allPages: boolean) {
  return url ? load(entryFor(url, allPages)) : Promise.resolve();
}
onApiInvalidation(path => {
  for (const [key, entry] of entries) {
    const pathname = entry.url.split('?')[0];
    if (pathname !== path && !pathname.startsWith(`${path}/`)) continue;
    entry.controller?.abort();
    entry.pending = undefined;
    entry.updated = 0;
    publish(entry, initial);
    if (entry.listeners.size) void load(entry);
    else {
      clearTimeout(entry.cleanup);
      entries.delete(key);
    }
  }
});
