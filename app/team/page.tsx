import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { heroImages } from "@/lib/images";
import { additionalTeam, offices, principals, type Person } from "@/lib/contacts";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Team | CAFI",
  description:
    "The CAFI team: Frank Bashore (President), Dennis Williams (Arizona lead), Priscilla Northcutt, and Michael. Headquartered in El Paso with the CAFI Arizona office in Scottsdale."
};

export default function TeamPage() {
  return (
    <>
      <JsonLd
        id="ld-team"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" }
        ])}
      />
      <PageHero
        eyebrow="Team"
        title={<>The principals behind CAFI.</>}
        intro="CAFI does not run a call center. The same team underwrites, funds, and follows up. Frank Bashore, Dennis Williams, Priscilla Northcutt, and Michael are the principal contacts across the Southwest."
        image={heroImages.team}
        imageAlt="Team meeting in an office setting"
      />

      <section className="bg-cream">
        <div className="container-edge py-24">
          <span className="eyebrow">Principals</span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
            The people who answer the phone.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {principals.map((p) => (
              <PersonCard key={p.id} person={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-warm">
        <div className="container-edge py-24">
          <span className="eyebrow">CAFI Texas and CAFI Arizona desks</span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
            Direct lines into the state offices.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {additionalTeam.map((p) => (
              <PersonCard key={p.id} person={p} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-2">
          <Office office={offices.elPaso} />
          <Office office={offices.scottsdale} />
        </div>
      </section>

      <section className="bg-gold">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Ask for Dennis in Arizona. Ask for Priscilla on government work. Or call the El Paso desk.
            </h2>
            <p className="mt-4 text-lg text-forest-deep/85">Se Habla Español.</p>
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

function PersonCard({ person, compact = false }: { person: Person; compact?: boolean }) {
  return (
    <article className="flex flex-col bg-cream-warm">
      <div className={`flex bg-forest-deep p-8 text-cream ${compact ? "aspect-[2/1] items-end" : "aspect-[4/5] items-end"}`}>
        <div>
          <div className={`font-serif text-gold-warm ${compact ? "text-5xl" : "text-7xl"}`}>{person.initials}</div>
          {person.tenure && (
            <div className="mt-4 text-xs uppercase tracking-widest text-cream/70">{person.tenure}</div>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-serif text-2xl font-semibold text-forest-deep">{person.name}</h3>
        <p className="mt-1 text-sm uppercase tracking-widest text-gold">{person.role}</p>
        <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/80">{person.bio}</p>

        <dl className="mt-6 space-y-1.5 text-[0.95rem]">
          {person.phone ? (
            <Row k="Direct">
              <a href={`tel:+1${person.phone.replace(/\D/g, "")}`} className="text-forest-deep hover:text-gold">
                {person.phone}
              </a>
            </Row>
          ) : (
            <Row k="Phone">
              <a href="tel:+19157726333" className="text-forest-deep hover:text-gold">
                915.772.6333
              </a>{" "}
              <span className="text-ink/55">· El Paso desk</span>
            </Row>
          )}
          {person.email ? (
            <Row k="Email">
              <a href={`mailto:${person.email}`} className="text-forest-deep hover:text-gold">
                {person.email}
              </a>
            </Row>
          ) : (
            <Row k="Email">
              <Link href="/contact" className="text-forest-deep hover:text-gold">
                Contact via form
              </Link>
            </Row>
          )}
        </dl>
      </div>
    </article>
  );
}

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] gap-3">
      <dt className="text-xs uppercase tracking-widest text-forest/60">{k}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Office({ office }: { office: typeof offices.elPaso | typeof offices.scottsdale }) {
  return (
    <div>
      <span className="eyebrow">{office.label}</span>
      <address className="mt-4 not-italic font-serif text-2xl leading-snug text-forest-deep">
        {office.street}
        <br />
        {office.cityState}
      </address>
      <ul className="mt-6 space-y-2">
        {office.phones.map((p) => (
          <li key={p}>
            <a
              href={`tel:+1${p.replace(/\D/g, "")}`}
              className="font-serif text-xl font-semibold text-forest-deep hover:text-gold"
            >
              {p}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
