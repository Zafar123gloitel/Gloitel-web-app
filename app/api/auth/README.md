# Admin authentication

There is no registration API. Create an admin account directly in MongoDB with the local command below; it hashes the password in the format required by the login API:

```bash
pnpm admin:create
```

Run it from the project directory and enter the admin name, email and password when prompted. The password is hidden while typing and must contain 12–128 characters. The command uses `MONGODB_URI` from `.env` and refuses duplicate emails. Keep `.env` and database credentials private.

Set `AUTH_SECRET` (at least 32 random characters) for login and token verification. The admin login page uses `POST /api/auth/login` with `{ "email": "admin@example.com", "password": "your-password" }`. A successful login sets a 7-day `HttpOnly`, `SameSite=Strict` session cookie; it is `Secure` in production. The token is not returned to browser JavaScript. Browser requests send the cookie automatically to `GET /api/auth/verify` and protected admin APIs. `POST /api/auth/logout` clears the cookie. Invalid or expired sessions return `401`.

All blog API methods and `GET /api/career/apply` require an admin token. Public contact and career application submissions remain available to visitors.
