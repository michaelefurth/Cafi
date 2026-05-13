import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { SectionHeading } from "@/components/SectionHeading";
import { StateCard } from "@/components/StateCard";

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
      <Hero />
      <TrustBand />

      {/* The Problem */}
      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The problem"
              title={<>You won the bid. The bank still won&rsquo;t fund the job.</>}
            />
          </div>
          <div className="prose-editorial lg:col-span-7 lg:pl-8">
            <p>
              Contractors lose contracts they could have won. They stall on contracts they did
              win. Not because the work is wrong, but because banks will not extend the working
              capital it takes to mobilize, make payroll, buy materials, and carry receivables
              until the prime cuts a check.
            </p>
            <p>
              Pay applications run 30, 45, sometimes 60 days behind. Retainage sits on the table
              for months. Meanwhile the next mobilization is already due. Subs and suppliers do
              not wait.
            </p>
            <p>
              CAFI was built for the contractor a bank turns down. We have been on this side of
              the desk for 30 years, and we understand what a pay app, a lien waiver, and a
              schedule of values actually look like.
            </p>
          </div>
        </div>
      </section>

      {/* What CAFI does */}
      <section className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="What CAFI does"
              title={<>Working capital, advanced against your approved receivables.</>}
            />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="max-w-prose text-lg leading-relaxed text-cream/85">
              CAFI provides working capital and short-term accounts receivable financing to
              commercial construction and service contractors performing on government, state, and
              local contracts. We advance funds against approved invoices and pay applications,
              so you can mobilize the next phase before the prime pays the last one.
            </p>

            <dl className="mt-12 grid gap-px bg-cream/10 sm:grid-cols-2">
              {[
                ["No financial statements required.", "We do not ask for three years of audited financials. We look at the receivable and the prime."],
                ["No tax returns required.", "Your tax return is your business. The contract is ours."],
                ["Two-page application.", "Plain English, the kind a project manager can complete from the truck."],
                ["Approval in one to two business days.", "Funding inside 24 to 48 hours of approval. No theater."]
              ].map(([term, detail]) => (
                <div key={term} className="bg-forest-deep p-7">
                  <dt className="font-serif text-xl text-gold-warm">{term}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-cream/75">{detail}</dd>
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

      {/* Who CAFI serves */}
      <section className="bg-cream-warm">
        <div className="container-edge grid gap-12 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who CAFI serves"
              title={<>The contractors building the Southwest.</>}
              intro="CAFI funds the contractors banks were never built for, and the contractors who carry the federal, state, and local work that gets the Southwest built."
            />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <ul className="divide-y divide-forest/15 border-t border-forest/15">
              {audiences.map((a, i) => (
                <li key={a} className="flex items-baseline justify-between gap-6 py-5">
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-xl text-forest-deep md:text-2xl">{a}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* State sections */}
      <section className="bg-cream">
        <div className="container-edge py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Regions"
              title={<>Three states. One desk in El Paso.</>}
              intro="CAFI runs out of El Paso and funds contractors across the Southwest. The work, the bases, and the people are different in each state. The discipline is the same."
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
              image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
              bullets={[
                "Fort Bliss, Biggs Army Airfield, McGregor Range",
                "BBB Paso del Norte, Greater El Paso Chamber, NAWIC",
                "SAM/CCR registered with the federal government 30+ years"
              ]}
            />
            <StateCard
              abbr="AZ"
              name="Arizona"
              years="22+ years in Phoenix"
              href="/arizona"
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
              bullets={[
                "Phoenix and statewide commercial contractors",
                "ASA Arizona, AMCA, Greater Phoenix Chamber",
                "Banking partner of the ASBA SCALE program"
              ]}
            />
            <StateCard
              abbr="NM"
              name="New Mexico"
              years="Southwest federal track record"
              href="/new-mexico"
              image="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1600&q=80"
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
            <span className="eyebrow">Case study · Base realignment</span>
            <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-cream md:text-5xl">
              Six years. Four bases. 3,600 homes funded from the sub side.
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
              <Link href="/case-studies" className="btn-ghost arrow">
                Read the full case study
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/6] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1600&q=80"
                alt="Framing crew on a Southwest residential build"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark via-forest-deep/30 to-transparent p-8">
                <div className="grid grid-cols-3 gap-6 text-cream">
                  <div>
                    <div className="font-serif text-3xl font-bold text-gold-warm">3,600+</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/75">Homes funded</div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-gold-warm">6 yrs</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/75">Continuous mobilization</div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-gold-warm">4</div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/75">Southwest bases</div>
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
              <a href="tel:+19157726333" className="font-serif text-3xl font-bold text-forest-deep md:text-4xl">
                915.772.6333
              </a>
              <a href="tel:+18886862234" className="font-serif text-2xl font-semibold text-forest-deep/80">
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
