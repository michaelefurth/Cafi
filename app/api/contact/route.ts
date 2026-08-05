import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  state: string;
  message: string;
  website?: string;
};

const TO = process.env.CONTACT_TO_EMAIL ?? "contact@cafi-usa.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "CAFI Website <noreply@cafi-usa.com>";

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function clean(v: string, max: number) {
  return v.trim().slice(0, max);
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  return real ?? "unknown";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const limit = rateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Honeypot: real users never fill this hidden field.
  if (isString(raw.website) && raw.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const required: Array<keyof ContactPayload> = ["name", "company", "phone", "email", "state"];
  for (const key of required) {
    if (!isString(raw[key]) || (raw[key] as string).trim() === "") {
      return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 });
    }
  }

  const payload: ContactPayload = {
    name: clean(raw.name as string, 120),
    company: clean(raw.company as string, 160),
    phone: clean(raw.phone as string, 40),
    email: clean(raw.email as string, 160),
    state: clean(raw.state as string, 40),
    message: isString(raw.message) ? clean(raw.message, 4000) : ""
  };

  if (!isEmail(payload.email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No backend configured. Log and accept so the form does not bounce in preview.
    console.warn("[contact] RESEND_API_KEY not set. Skipping email send.", {
      ip,
      name: payload.name,
      company: payload.company
    });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  const subject = `New CAFI inquiry — ${payload.company} (${payload.state})`;
  const html = `
    <h2>New CAFI inquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:Inter,Arial,sans-serif;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(payload.company)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(payload.phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>
      <tr><td><strong>State</strong></td><td>${escapeHtml(payload.state)}</td></tr>
      <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</td></tr>
      <tr><td><strong>IP</strong></td><td>${escapeHtml(ip)}</td></tr>
    </table>
  `;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: payload.email,
      subject,
      html
    });
  } catch (err) {
    console.error("[contact] resend send failed", err);
    return NextResponse.json(
      { error: "Could not deliver message. Please call CAFI at 915.772.6333." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
