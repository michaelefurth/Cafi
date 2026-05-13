"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
      <Field label="Name" name="name" required />
      <Field label="Company" name="company" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Select label="State" name="state" options={["Texas", "Arizona", "New Mexico", "Other"]} />
      <TextArea label="Tell CAFI about the contract" name="message" />
      <button type="submit" className="btn-gold arrow mt-2 self-start">
        Send to CAFI
      </button>
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
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass()}>{label}</span>
      <input type={type} name={name} required={required} className={inputClass()} />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className={labelClass()}>{label}</span>
      <select name={name} className={inputClass()}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className={labelClass()}>{label}</span>
      <textarea name={name} rows={5} className={inputClass()} />
    </label>
  );
}
