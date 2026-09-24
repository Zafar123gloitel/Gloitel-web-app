# Jobs API

Jobs are stored in MongoDB's `jobs` collection. Browser requests use the admin session cookie set by `/api/auth/login`.

| Method | Endpoint                              | Access                                     | Purpose                       |
| ------ | ------------------------------------- | ------------------------------------------ | ----------------------------- |
| GET    | `/api/jobs?page=1&limit=20`           | Public                                     | List active jobs only         |
| GET    | `/api/jobs?scope=all&page=1&limit=20` | Admin                                      | List active and inactive jobs |
| POST   | `/api/jobs`                           | Admin                                      | Create job                    |
| GET    | `/api/jobs/:id`                       | Public for active jobs; admin for inactive | Get job                       |
| PUT    | `/api/jobs/:id`                       | Admin                                      | Replace editable fields       |
| PATCH  | `/api/jobs/:id`                       | Admin                                      | Change status                 |
| DELETE | `/api/jobs/:id`                       | Admin                                      | Delete job                    |

Create or PUT body: `{ "title": "Engineer", "department": "Engineering", "location": "Remote", "type": "full-time", "status": "active", "description": "Job details" }`. Types: `full-time`, `part-time`, `contract`, `internship`. Status: `active` or `inactive`. Omitted status on create defaults to `active`. PATCH body: `{ "status": "inactive" }`.

Responses contain `success` and job `data`; list responses also contain `pagination`. Public career listing and detail pages query active jobs from this collection, so inactive jobs are hidden and their detail pages return 404. The admin page can import jobs previously stored in that browser's localStorage using its **Import saved jobs** button.
