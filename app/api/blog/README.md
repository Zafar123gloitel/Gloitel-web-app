# Blog API

Uses `MONGODB_URI` and the `blogs` collection. Slugs have a unique database index.
Requests and responses use JSON. Successful responses contain `success: true` and
the blog in `data`, with MongoDB's ID exposed as `id` for the existing editor.

| Method      | URL                         | Purpose                                         |
| ----------- | --------------------------- | ----------------------------------------------- |
| POST        | `/api/blog`                 | Create a blog                                   |
| GET         | `/api/blog?page=1&limit=20` | List blogs, including drafts, with pagination   |
| GET         | `/api/blog/:id`             | Get one blog                                    |
| PATCH / PUT | `/api/blog/:id`             | Update supplied fields; preserve omitted fields |
| DELETE      | `/api/blog/:id`             | Delete a blog                                   |

Example create body (matches `BlogEditor`'s saved post):

```json
{
  "title": "Building better products",
  "Description": "A practical product engineering guide",
  "slug": "building-better-products",
  "excerpt": "How we approach product engineering.",
  "content": "# Introduction\nArticle content goes here.",
  "thumbnail": "https://example.com/blog.jpg",
  "category": "Technology",
  "author": { "name": "Shubham Sahu", "image": "" },
  "status": "published",
  "publishDate": "2026-09-23T10:00:00.000Z",
  "allowComments": true,
  "featured": false
}
```

`title` and `slug` are required. Status defaults to `draft`; published and scheduled
blogs also require `content` and `excerpt`. Scheduled blogs require `publishDate`.
Scheduling stores status and date only; this API does not run a publishing job.
`Description` retains the editor's capital D. Optional `imageAlt`, `seo`, `social`,
`schema`, and `settings` match the existing `BlogPost` shape. Nested objects replace
the corresponding object when supplied in an update. IDs and timestamps are server-owned.

`thumbnail` accepts an HTTP(S) URL or the editor's PNG/JPEG/WEBP base64 data URL
(up to 5 MB decoded). Data URLs are stored in MongoDB; this API does not upload images
to Cloudinary. Send an empty string to remove the thumbnail.

Errors: `400` invalid fields/JSON/ID, `404` missing blog, `409` duplicate slug,
`500` database failure. Error bodies contain `success: false` and `message`.

Admin blog create, edit, listing and delete actions use these routes. Existing localStorage
blogs are not automatically migrated. Case studies still use their separate localStorage flow.
The current admin login is client-only: these endpoints have no server authentication.
Add server-side administrator authentication before exposing them publicly.

Run offline API checks with `node --test tests/blog-api.test.js`.
