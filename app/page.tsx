import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { SectionHeading } from "@/components/SectionHeading";
import { StateCard } from "@/components/StateCard";
import { AnswerBlock } from "@/components/AnswerBlock";
import { AudienceGrid } from "@/components/AudienceGrid";
import { JsonLd } from "@/components/JsonLd";
import { caseStudyImages, stateCardImages } from "@/lib/images";
import { credentials, positioning, projectsList, whatYouGet } from "@/lib/cafi";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CAFI | Cash Management and Funds Control for Contractors",
  description:
    "CAFI puts commercial construction and service contractors in control of their cash cycle. Approved invoices become working capital in 24 to 48 hours. Not a loan. 30+ years across Texas, Arizona, and New Mexico.",
  alternates: { canonical: "/" }
};

const audiences = [
  "Minority-owned businesses",
  "Veteran-owned",
  "Service-disabled veteran-owned",
  "Women-owned",
  "Native American-owned",
  "Disadvantaged Business Enterprises",
  "Small and medium contractors competing for federal, state, and local contracts"
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[serviceSchema(), breadcrumbSchema([{ name: "Home", path: "/" }])]}
        id="ld-home"
      />

      <Hero />
      <TrustBand />

      {/* AEO answer block: short, direct, scrapable. */}
      <section className="bg-cream">
        <div className="container-edge grid gap-8 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AnswerBlock question="What is CAFI?">
              <p>
                CAFI is a cash-management and funds-control program built for commercial
                construction and service contractors. Approved invoices become working capital in
                24 to 48 hours, with no debt on the books. CAFI is not a bank, not a factoring
                company, and not a quick-cash lender. The frame is control over timing, not
                borrowing.
              </p>
            </AnswerBlock>
          </div>
          <div className="lg:col-span-5">
            <AnswerBlock question="How does CAFI work?">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Send the 2-page application. No financial statements, no tax returns.</li>
                <li>CAFI verifies the prime, the contract, and the approved billing.</li>
                <li>Approval in 1 to 2 business days.</li>
                <li>Funds deposited inside 24 to 48 hours.</li>
              </ol>
            </AnswerBlock>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The gap"
              title={<>Winning the bid is the easy part.</>}
            />
          </div>
          <div className="prose-editorial lg:col-span-7 lg:pl-8">
            <p>
              What comes right after is where contractors lose control. Mobilization, payroll,
              materials, and subs are all due before the first draw comes in. Pay applications
              run 30, 45, sometimes 60 days behind. Retainage sits on the table for months.
              Meanwhile the next mobilization is already due. Subs and suppliers do not wait.
            </p>
            <p>
              CAFI is built for that gap. When invoices are approved, you control when that cash
              releases. Not your GC, not the owner, not a slow accounting department. CAFI has
              been on this side of the desk for 30 years and understands what a pay application,
              a lien waiver, and a schedule of values actually look like.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="bg-forest-deep text-cream">
        <div className="container-edge py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-gold-warm">The track record</span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-cream md:text-5xl">
                30 years. One business. Construction.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-cream/75">
              Projects funded include {projectsList.slice(0, -1).join(", ")}, and{" "}
              {projectsList[projectsList.length - 1]}.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px bg-cream/15 md:grid-cols-6">
            {credentials.map((c) => (
              <div key={c.label} className="bg-forest-deep p-6">
                <dt className="font-serif text-3xl font-bold text-gold-warm md:text-4xl">
                  {c.value}
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-widest text-cream/65">
                  {c.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What CAFI does */}
      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What CAFI does"
              title={<>Control over when your approved invoices fund.</>}
            />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="max-w-prose font-serif text-xl leading-relaxed text-ink/85">
              {positioning.notWeAre}
            </p>

            <dl className="mt-10 grid gap-px bg-forest/15 sm:grid-cols-2">
              {whatYouGet.slice(0, 6).map((item) => (
                <div key={item} className="flex items-start gap-3 bg-cream-warm p-5">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 bg-gold" />
                  <dt className="text-[1rem] leading-relaxed text-forest-deep">{item}</dt>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <Link href="/funding" className="btn-ghost arrow">
                See how funding works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Four contractor types */}
      <section className="bg-cream-warm">
        <div className="container-edge py-24 md:py-32">
          <SectionHeading
            eyebrow="Built for four kinds of contractor"
            title={<>The pain CAFI was made to solve.</>}
            intro="Whether you bill the work, oversee the subs who do, supply the materials, or perform on a federal task order, CAFI lines up against the cash-timing pain your business actually carries."
          />
          <div className="mt-14">
            <AudienceGrid />
          </div>
        </div>
      </section>

      {/* Who CAFI serves */}
      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who CAFI serves"
              title={<>The contractors building the Southwest.</>}
              intro="CAFI is especially strong for the contractors banks were never built for, and for the contractors carrying federal, state, and local work."
            />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <ul className="divide-y divide-forest/15 border-t border-forest/15">
              {audiences.map((a, i) => (
                <li key={a} className="flex items-baseline justify-between gap-6 py-5">
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl text-forest-deep md:text-2xl">{a}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* State sections */}
      <section className="bg-cream-warm">
        <div className="container-edge py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Regions"
              title={<>Three states. Two desks. One team.</>}
              intro="CAFI runs out of El Paso and Scottsdale, funding contractors across the Southwest. The work, the bases, and the people are different in each state. The discipline is the same."
            />
            <Link href="/contact" className="btn-ghost arrow">
              Talk to CAFI
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StateCard
              abbr="TX"
              name="Texas"
              years="Headquartered · 30+ years"
              href="/texas"
              image={stateCardImages.texas}
              bullets={[
                "Fort Bliss ($40M+), Biggs Army Airfield, McGregor Range",
                "BBB Paso del Norte, Greater El Paso Chamber, NAWIC",
                "SAM/CCR registered with the federal government 30+ years"
              ]}
            />
            <StateCard
              abbr="AZ"
              name="Arizona"
              years="22+ years in Phoenix · Ask for Dennis"
              href="/arizona"
              image={stateCardImages.arizona}
              bullets={[
                "Dennis Williams leads CAFI Arizona client outreach",
                "Scottsdale office, Phoenix and statewide contractors",
                "ASA Arizona, AMCA, ASBA SCALE banking partner"
              ]}
            />
            <StateCard
              abbr="NM"
              name="New Mexico"
              years="Southwest federal track record"
              href="/new-mexico"
              image={stateCardImages.newMexico}
              bullets={[
                "Holloman Air Force Base, White Sands Missile Range",
                "Base realignment housing under Centex and Balfour Beatty",
                "Part of CAFI's 30+ year Southwest portfolio"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Anchor case study */}
      <section className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-gold-warm">Case study · Base realignment</span>
            <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-cream md:text-5xl">
              Six years. Four bases. 3,600+ homes funded from the sub side.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-cream/80">
              CAFI financed housing subcontractors who participated in the construction of more
              than 3,600 new homes on base realignment projects at Fort Bliss, Holloman, Biggs
              Army Airfield, and White Sands, under Centex Construction and Balfour Beatty
              Communities, over a six-year period.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              The primes ran the schedule. CAFI ran the working capital under the subs that built
              the units. That work is the reason CAFI is still the first call when a Southwest
              base goes vertical.
            </p>
            <div className="mt-10">
              <Link href="/case-studies" className="btn-ghost arrow text-gold-warm">
                Read the full case study
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/6] w-full overflow-hidden">
              <img
                src={caseStudyImages.baseRealignmentAnchor}
                alt="Framing crew on a Southwest residential build"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark via-forest-deep/30 to-transparent p-8">
                <div className="grid grid-cols-3 gap-6 text-cream">
                  <div>
                    <div className="font-serif text-3xl font-bold text-gold-warm">3,600+</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/75">
                      Homes funded
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-gold-warm">6 yrs</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/75">
                      Continuous mobilization
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-gold-warm">4</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/75">
                      Southwest bases
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gold">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl font-bold leading-[1.1] text-forest-deep md:text-5xl">
              Talk to CAFI about your next contract.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-forest-deep/85">
              Two pages. One to two business days. Funding inside 24 to 48 hours. Se Habla Español.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href="tel:+19157726333"
                className="font-serif text-3xl font-bold text-forest-deep md:text-4xl"
              >
                915.772.6333
              </a>
              <a
                href="tel:+18886862234"
                className="font-serif text-2xl font-semibold text-forest-deep/80"
              >
                888.686.2234
              </a>
              <Link
                href="/funding#apply"
                className="mt-3 inline-flex items-center gap-3 bg-forest-deep px-7 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-forest-dark arrow"
              >
                Apply for Working Capital
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
