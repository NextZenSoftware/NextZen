# Admin workspace setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. In Authentication > Users, create the admin account with email and password.
4. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only; never expose it to the browser)
   - `ADMIN_EMAILS` as a comma-separated allowlist of approved admin emails
5. Start the app and open `/admin/login`.

The public enquiry API uses the service role only on the server. Row-level security is enabled on the enquiries table, and the admin API verifies both the Supabase session and the configured email allowlist before reading or updating records.
