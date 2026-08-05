"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  if (status === "ok") {
    return (
      <div className="border-l-2 border-gold bg-cream p-6">
        <p className="font-serif text-xl text-forest-deep">Thank you.</p>
        <p className="mt-2 text-[1rem] text-ink/80">
          CAFI received your note. Someone from the El Paso desk will be in touch shortly. If you
          need to talk today, call 915.772.6333.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Could not send. Please call CAFI at 915.772.6333.");
      }

      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error.");
    }
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      {/* Honeypot: real users do not fill this. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <Field label="Name" name="name" required maxLength={120} autoComplete="name" />
      <Field label="Company" name="company" required maxLength={160} autoComplete="organization" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" required maxLength={40} autoComplete="tel" />
        <Field label="Email" name="email" type="email" required maxLength={160} autoComplete="email" />
      </div>
      <Select label="State" name="state" options={["Texas", "Arizona", "New Mexico", "Other"]} />
      <TextArea label="Tell CAFI about the contract" name="message" maxLength={4000} />

      <button
        type="submit"
        disabled={submitting}
        className="btn-gold arrow mt-2 self-start disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send to CAFI"}
      </button>

      {status === "error" && error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <p className="text-xs text-ink/55">
        By submitting, you agree to be contacted by CAFI about your inquiry. CAFI does not share
        contractor information.
      </p>
    </form>
  );
}

function labelClass() {
  return "text-xs uppercase tracking-widest text-forest/70";
}
function inputClass() {
  return "mt-2 w-full border border-forest/20 bg-cream px-4 py-3 font-sans text-base text-forest-deep placeholder:text-forest/40 focus:border-gold focus:outline-none";
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
  autoComplete
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className={labelClass()}>{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className={inputClass()}
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className={labelClass()}>{label}</span>
      <select name={name} className={inputClass()} defaultValue={options[0]}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  name,
  maxLength
}: {
  label: string;
  name: string;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className={labelClass()}>{label}</span>
      <textarea name={name} rows={5} maxLength={maxLength} className={inputClass()} />
    </label>
  );
}
