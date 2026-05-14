import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Team | CAFI",
  description:
    "The CAFI team operates out of El Paso, Texas. Real people, real tenure, and a direct line for contractors across Texas, Arizona, and New Mexico."
};

type Member = {
  name: string;
  role: string;
  tenure: string;
  bio: string;
  initials: string;
};

const team: Member[] = [
  {
    name: "Dennis Williams",
    role: "Sales and Client Outreach",
    tenure: "Long-tenured at CAFI",
    bio: "Dennis is the first call for most CAFI contractors. He works directly with construction and service contractors across the Southwest, walks through the two-page application with them, and stays on the phone through the first funding.",
    initials: "DW"
  },
  {
    name: "CAFI Underwriting",
    role: "Underwriting and Receivable Verification",
    tenure: "30+ years on Southwest work",
    bio: "The CAFI underwriting team verifies primes, contracts, and pay applications. Their job is to look at the receivable, not pull your books apart.",
    initials: "UW"
  },
  {
    name: "CAFI Operations",
    role: "Funding, Wires, and Client Service",
    tenure: "Headquartered in El Paso",
    bio: "Operations runs the funding desk. Wires, ACH, lien waivers, and the day-to-day work of getting capital under a contractor inside 24 to 48 hours of approval.",
    initials: "OP"
  }
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={<>The people who answer the phone in El Paso.</>}
        intro="CAFI does not run a call center. The same team underwrites, funds, and follows up. Dennis Williams handles sales and client outreach and is usually the first voice contractors hear."
        image={heroImages.team}
        imageAlt="Team meeting in an office setting"
      />

      <section className="bg-cream">
        <div className="container-edge py-24">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="flex flex-col bg-cream-warm">
                <div className="flex aspect-[4/5] items-end bg-forest-deep p-8 text-cream">
                  <div>
                    <div className="font-serif text-7xl text-gold-warm">{m.initials}</div>
                    <div className="mt-4 text-xs uppercase tracking-widest text-cream/70">{m.tenure}</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="font-serif text-2xl font-semibold text-forest-deep">{m.name}</h2>
                  <p className="mt-1 text-sm uppercase tracking-widest text-gold">{m.role}</p>
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/80">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-prose text-sm leading-relaxed text-ink/60">
            CAFI is adding individual team photos and bios as the new site rolls out. To talk to
            a specific team member today, call CAFI at 915.772.6333 or 888.686.2234.
          </p>
        </div>
      </section>

      <section className="bg-gold">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Ask for Dennis. Or anyone on the CAFI desk.
            </h2>
            <p className="mt-4 text-lg text-forest-deep/85">
              The team is in El Paso. Se Habla Español.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-forest-deep px-7 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-forest-dark arrow"
            >
              Contact CAFI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
