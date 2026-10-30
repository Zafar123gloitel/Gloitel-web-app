# Shared API hooks

Client components can read the same endpoint without duplicating effects, loading/error state,
AbortController cleanup, or pagination loops. No provider or additional dependency is required.

```tsx
import { useCaseStudies } from '@/hooks/useCaseStudies';

const { caseStudies, loading, error, refetch } = useCaseStudies();
// Retry button: onClick={() => void refetch()}
```

For a single response (including server-paginated tables):

```tsx
import { useApi, useApiList } from '@/hooks/useApi';

const { data, pagination, loading, error, refetch } = useApi<Job[]>(
  `/api/jobs?scope=all&page=${page}&limit=20`,
);

// Fetch every page, 100 items per request:
const { data: jobs } = useApiList<Job>('/api/jobs?scope=all');

// A null URL disables a query, useful for create/edit screens:
const job = useApi<Job>(id ? `/api/jobs/${id}` : null);
```

Identical URL strings and pagination modes share an in-flight request and data across mounted
components. Different query parameters (including public/admin scope) remain separate. Data is
revalidated when a new subscriber joins after 30 seconds, or when `refetch()` is called. After
the last consumer unmounts, the request is aborted and cached data is removed. This is in-memory
sharing within the current tab, not persistent or cross-tab caching. All-pages and single-page
queries have separate entries. Errors are strings; list hooks return an empty array until loaded.

Use the common client inside submit/click handlers or non-component helpers:

```tsx
import { apiRequest } from '@/lib/api';

await apiRequest('/api/jobs', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});

await apiRequest('/api/career/apply', { method: 'POST', body: formData });
```

Successful writes invalidate related list/detail queries and refresh mounted consumers. Login
and logout invalidate all query data. The client handles JSON and API errors; handlers retain
UI-specific submitting state, toast messages, navigation, and confirmations. `FormData` requests
must omit `Content-Type` so the browser can set the multipart boundary.

These hooks belong in client components. Server components continue using the existing database
helpers. Verify the shared request behavior with `node --test tests/api-client.test.js`.
