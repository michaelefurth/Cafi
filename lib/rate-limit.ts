type Entry = { count: number; resetAt: number };

const buckets = new Map<string, Entry>();

/**
 * Simple in-memory IP rate limiter.
 * - Resets per serverless function instance, which is acceptable for a low-volume
 *   contact form. Swap to Upstash Redis if traffic grows.
 * - Default: 5 requests per 10 minutes per IP.
 */
export function rateLimit(
  ip: string,
  { limit = 5, windowMs = 10 * 60 * 1000 } = {}
): { ok: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = buckets.get(ip);

  if (!entry || entry.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= limit) {
    return { ok: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { ok: true, retryAfterSeconds: 0 };
}
