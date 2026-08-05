import Link from "next/link";
import { audiences } from "@/lib/cafi";

// Optional deep links for audiences that have a dedicated page.
const audienceLinks: Record<string, { href: string; label: string }> = {
  "General Contractor": { href: "/project-assurance", label: "See CAFI Project Assurance" }
};

export function AudienceGrid() {
  return (
    <div className="grid gap-px bg-forest/15 md:grid-cols-2">
      {audiences.map((a, i) => {
        const link = audienceLinks[a.role];
        return (
          <article key={a.role} className="flex flex-col bg-cream-warm p-7 md:p-9">
            <div className="text-xs uppercase tracking-widest text-gold">
              {String(i + 1).padStart(2, "0")} · For
            </div>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-forest-deep md:text-3xl">
              {a.role}
            </h3>
            <p className="mt-4 text-xs uppercase tracking-widest text-forest/60">The pain</p>
            <p className="mt-2 font-serif text-lg leading-relaxed text-ink/80">{a.pain}</p>
            <p className="mt-5 text-xs uppercase tracking-widest text-forest/60">CAFI&apos;s angle</p>
            <p className="mt-2 font-serif text-lg leading-relaxed text-forest-deep">{a.angle}</p>
            {link && (
              <Link href={link.href} className="btn-ghost arrow mt-6 self-start">
                {link.label}
              </Link>
            )}
          </article>
        );
      })}
    </div>
  );
}
