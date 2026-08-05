import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AnswerBlock } from "@/components/AnswerBlock";
import { JsonLd } from "@/components/JsonLd";
import { heroImages } from "@/lib/images";
import { positioning } from "@/lib/cafi";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About CAFI | 30+ Years of Cash Management for Southwest Contractors",
  description:
    "CAFI is a cash-management and funds-control program for commercial construction and service contractors. El Paso roots, Scottsdale office, 30+ years across Texas, Arizona, and New Mexico.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="ld-about"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ])}
      />

      <PageHero
        eyebrow="About CAFI"
        title={<>30+ years putting Southwest contractors in control of their cash cycle.</>}
        intro="CAFI was founded in El Paso to fund the contractors banks turned away. Three decades later, that is still the job. Control is the product. Funding is the feature."
        image={heroImages.about}
        imageAlt="El Paso skyline at dusk"
      />

      <section className="bg-cream">
        <div className="container-edge py-16">
          <AnswerBlock question="What is CAFI?">
            <p>{positioning.notWeAre}</p>
          </AnswerBlock>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">The story</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
              El Paso roots. Southwest reach.
            </h2>
          </div>
          <div className="prose-editorial lg:col-span-7 lg:pl-8">
            <p>
              CAFI was started in El Paso in 1995 by people who had spent enough time around
              contractors to know what a bank line could and could not do. The work CAFI took on
              then is the same work CAFI takes on now: putting commercial construction and
              service contractors in control of their cash cycle so they can mobilize the next
              job before the prime pays the last one.
            </p>
            <p>
              From day one, the focus has been government, state, and local contracts. The kind
              of work that pays reliably but slowly, where a 30 or 45 day cycle is normal and a
              60 day cycle is not unusual. The kind of work that gets bid by minority-owned,
              veteran-owned, women-owned, Native American-owned, and DBE contractors who simply
              cannot wait that long without help.
            </p>
            <p>
              In the 2000s, CAFI expanded into Arizona with an office in Scottsdale. The
              relationships built across Phoenix with ASA Arizona, AMCA, and the ASBA SCALE
              program are now in their third decade. New Mexico work followed the Southwest
              federal corridor, particularly on Holloman Air Force Base and White Sands Missile
              Range.
            </p>
            <p>
              CAFI has been SAM/CCR registered with the U.S. Federal Government for more than 30
              years. Commitment letters and Funding Availability letters are accepted by federal
              agencies. CAFI has processed over 50,000 invoices, funded more than $1 billion, and
              collected 99%+. The phone is still answered in El Paso.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-gold-warm">What CAFI believes</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-cream md:text-5xl">
              Contractors should be in control of when they get paid.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <ul className="divide-y divide-cream/15 border-y border-cream/15">
              {[
                "If you won the contract, you should get to perform on it.",
                "A pay app is a real document. A receivable is a real asset.",
                "Control is the product. Funding is the feature.",
                "A two-page application is enough to start a conversation.",
                "24 to 48 hours is a job-site timeline. So we use it.",
                "Minority-owned, veteran-owned, women-owned, and DBE contractors deserve funding partners that show up."
              ].map((p) => (
                <li key={p} className="py-6 font-serif text-xl text-cream md:text-2xl">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream-warm">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Want to know who you would actually work with?
            </h2>
            <p className="mt-4 text-lg text-ink/75">Meet the CAFI team.</p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link href="/team" className="btn-outline arrow">
              See the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
