import Link from "next/link";
import { ReactNode } from "react";
import { PageHero } from "./PageHero";
import type { Person } from "@/lib/contacts";
import { offices } from "@/lib/contacts";

export type StateContent = {
  abbr: "TX" | "AZ" | "NM";
  name: string;
  eyebrow: string;
  heroTitle: ReactNode;
  heroIntro: ReactNode;
  heroImage: string;
  heroImageAlt: string;
  pillars: { label: string; value: string }[];
  affiliations: string[];
  topProjects: { title: string; detail: string; year?: string }[];
  resume: { client: string; scope: string }[];
  testimonials: { quote: string; attribution: string }[];
  lending: { heading: string; body: string }[];
  applicationHref?: string;
  applicationLabel?: string;
  notes?: ReactNode;
  leadContact?: Person;
  office?: typeof offices.elPaso | typeof offices.scottsdale;
};

export function StatePage({ content }: { content: StateContent }) {
  const {
    abbr,
    name,
    eyebrow,
    heroTitle,
    heroIntro,
    heroImage,
    heroImageAlt,
    pillars,
    affiliations,
    topProjects,
    resume,
    testimonials,
    lending,
    applicationHref,
    applicationLabel,
    notes,
    leadContact,
    office
  } = content;

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={heroTitle}
        intro={heroIntro}
        image={heroImage}
        imageAlt={heroImageAlt}
      />

      {/* Pillars */}
      <section className="bg-cream-warm">
        <div className="container-edge grid grid-cols-1 gap-px overflow-hidden border-y border-forest/10 md:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.label} className="bg-cream-warm p-8 md:p-10">
              <div className="font-serif text-3xl font-bold text-forest-deep md:text-4xl">{p.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-widest text-forest/60">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Contact */}
      {leadContact && (
        <section className="bg-cream">
          <div className="container-edge grid gap-10 py-20 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="flex aspect-square w-full items-end bg-forest-deep p-8 text-cream">
                <div>
                  <div className="font-serif text-7xl text-gold-warm">{leadContact.initials}</div>
                  {leadContact.tenure && (
                    <div className="mt-4 text-xs uppercase tracking-widest text-cream/70">
                      {leadContact.tenure}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 lg:pl-8">
              <span className="eyebrow">Your CAFI {abbr} contact</span>
              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
                Ask for {leadContact.name.split(" ")[0]}.
              </h2>
              <p className="mt-3 text-sm uppercase tracking-widest text-gold">{leadContact.role}</p>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80">{leadContact.bio}</p>

              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-forest/60">Phone</dt>
                  <dd className="mt-1">
                    {leadContact.phone ? (
                      <a
                        href={`tel:+1${leadContact.phone.replace(/\D/g, "")}`}
                        className="font-serif text-2xl font-semibold text-forest-deep hover:text-gold"
                      >
                        {leadContact.phone}
                      </a>
                    ) : (
                      <a
                        href={`tel:+1${(office?.phones[0] ?? "915.772.6333").replace(/\D/g, "")}`}
                        className="font-serif text-2xl font-semibold text-forest-deep hover:text-gold"
                      >
                        {office?.phones[0] ?? "915.772.6333"}
                      </a>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-forest/60">Email</dt>
                  <dd className="mt-1">
                    {leadContact.email ? (
                      <a
                        href={`mailto:${leadContact.email}`}
                        className="font-serif text-lg text-forest-deep hover:text-gold"
                      >
                        {leadContact.email}
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="font-serif text-lg text-forest-deep hover:text-gold"
                      >
                        Contact via form
                      </Link>
                    )}
                  </dd>
                </div>
                {office && (
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-forest/60">Office</dt>
                    <dd className="mt-1 font-serif text-lg leading-snug text-forest-deep">
                      {office.street}
                      <br />
                      {office.cityState}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Affiliations */}
      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">CAFI {abbr}</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
              On the ground in {name}.
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80">
              CAFI funds contractors performing on the federal, state, and local contracts that
              keep {name} building. Below are the credentials, memberships, and relationships
              that put CAFI on the right side of the table.
            </p>
            {applicationHref && (
              <div className="mt-8">
                <a
                  href={applicationHref}
                  className="btn-gold arrow"
                  download
                >
                  {applicationLabel ?? `Download ${abbr} contractor application`}
                </a>
              </div>
            )}
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <ul className="divide-y divide-forest/10 border-y border-forest/10">
              {affiliations.map((a) => (
                <li key={a} className="flex items-start gap-4 py-5">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                  <span className="text-[1.05rem] leading-relaxed text-ink/85">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Top Projects */}
      <section className="bg-forest-deep text-cream">
        <div className="container-edge py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-gold-warm">Top projects</span>
              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-cream md:text-5xl">
                Where CAFI {abbr} dollars have shown up.
              </h2>
            </div>
            <Link href="/case-studies" className="btn-ghost arrow text-gold-warm">
              Full case studies
            </Link>
          </div>
          <div className="mt-14 grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
            {topProjects.map((p) => (
              <article key={p.title} className="bg-forest-deep p-8">
                {p.year && (
                  <div className="text-xs uppercase tracking-widest text-gold-warm">{p.year}</div>
                )}
                <h3 className="mt-2 font-serif text-xl font-semibold text-cream">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/75">{p.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Resume */}
      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Project resume</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              A partial list of primes CAFI {abbr} has funded under.
            </h2>
          </div>
          <div className="lg:col-span-8 lg:pl-8">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-forest/20 text-xs uppercase tracking-widest text-forest/60">
                  <th className="py-3 pr-4 font-medium">Client / Prime</th>
                  <th className="py-3 font-medium">Scope</th>
                </tr>
              </thead>
              <tbody>
                {resume.map((row) => (
                  <tr key={row.client} className="border-b border-forest/10 align-baseline">
                    <td className="py-4 pr-6 font-serif text-lg text-forest-deep">{row.client}</td>
                    <td className="py-4 text-[0.95rem] leading-relaxed text-ink/75">{row.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-warm">
        <div className="container-edge py-24">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
            In the words of {name} contractors.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.attribution} className="border-l-2 border-gold pl-6">
                <blockquote className="font-serif text-xl leading-relaxed text-forest-deep md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm uppercase tracking-widest text-forest/70">
                  {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Lending */}
      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Construction lending in {name}</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
              What CAFI {abbr} actually advances against.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <dl className="divide-y divide-forest/15 border-y border-forest/15">
              {lending.map((row) => (
                <div key={row.heading} className="grid gap-3 py-6 md:grid-cols-12">
                  <dt className="font-serif text-xl text-forest-deep md:col-span-4">
                    {row.heading}
                  </dt>
                  <dd className="text-[1.02rem] leading-relaxed text-ink/80 md:col-span-8">
                    {row.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {notes && (
        <section className="bg-cream-warm">
          <div className="container-edge max-w-prose py-16 text-sm leading-relaxed text-ink/70">
            {notes}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl font-bold leading-[1.1] text-cream md:text-5xl">
              Funding the next mobilization in {name}.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-cream/80">
              {leadContact
                ? `Talk to ${leadContact.name.split(" ")[0]} or apply today. Two-page application. Approval in one to two business days. Funding inside 24 to 48 hours. Se Habla Español.`
                : "Two-page application. Approval in one to two business days. Funding inside 24 to 48 hours. Se Habla Español."}
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <div className="flex flex-col items-start gap-4 md:items-end">
              <Link href="/funding#apply" className="btn-gold arrow">
                Apply for Working Capital
              </Link>
              {(() => {
                const phone =
                  leadContact?.phone ?? office?.phones[0] ?? "915.772.6333";
                return (
                  <a
                    href={`tel:+1${phone.replace(/\D/g, "")}`}
                    className="font-serif text-2xl font-semibold text-gold-warm"
                  >
                    {phone}
                  </a>
                );
              })()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
