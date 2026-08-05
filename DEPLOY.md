# Deploying CAFI to Vercel

The site is a standard Next.js 15 app. Static pages prerender at build time; the
contact form is a Node.js route handler (`/api/contact`) and runs serverless.

## One-time setup

1. **Create a Vercel account** at https://vercel.com (free Hobby tier covers this site).
2. **Import the GitHub repo:**
   - Dashboard → Add New → Project → Import from GitHub
   - Select `michaelefurth/Cafi`
   - Framework Preset: Next.js (auto-detected)
   - Root directory: `./`
   - Build command: `next build` (default)
   - Install command: `npm install` (default)
3. **Add environment variables** in Project → Settings → Environment Variables:

   | Key | Example value | Notes |
   |---|---|---|
   | `RESEND_API_KEY` | `re_xxxxx` | Get one at https://resend.com/api-keys |
   | `CONTACT_TO_EMAIL` | `contact@cafi-usa.com` | Inbox that receives inquiries |
   | `CONTACT_FROM_EMAIL` | `CAFI Website <noreply@cafi-usa.com>` | Domain must be verified in Resend |

   Mark all three as available to Production, Preview, and Development.

4. **Verify the sending domain in Resend.** In Resend, add `cafi-usa.com`, copy the
   DNS records (SPF, DKIM, DMARC), and add them to wherever cafi-usa.com DNS is
   managed. Resend will not deliver mail until the domain is verified.

5. **Custom domain:** Project → Settings → Domains → add `cafi-usa.com` and
   `www.cafi-usa.com`. Vercel will give you the A / CNAME records to set in DNS.
   Set one as primary and 301 the other to it.

## Branch workflow

- `main` is auto-deployed to production at the assigned domain.
- Every PR gets a preview deployment with the same env vars (set scope: Preview).
- The current feature branch `claude/cafi-usa-redesign-cB7dP` will get its own
  preview URL once Vercel is connected.

## Local dev

```
cp .env.example .env.local
# Fill in RESEND_API_KEY if you want to test the contact form end-to-end.
npm install
npm run dev
```

Without `RESEND_API_KEY`, the contact form returns success and logs the
submission to the server console — useful for UI work without standing up email.

## Security posture

- CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
  Permissions-Policy, and Cross-Origin-* headers are set in `next.config.js`.
- No third-party scripts. No analytics by default. Add Plausible or Fathom (both
  CSP-friendly) when ready.
- Contact form has server-side validation, length limits, a honeypot field, and
  in-memory IP rate limiting (5 / 10 min). Replace with Upstash if traffic grows.
- Images are served from `/public/images/` only. No external CDN, no
  hotlinks, no remote image patterns allowed by next/image.
- `npm audit` is clean as of the most recent commit. Re-run before each release.
