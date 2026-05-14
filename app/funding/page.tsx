import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Funding | How CAFI Advances Working Capital",
  description:
    "CAFI advances working capital against approved invoices and pay applications. Two-page application. Approval in one to two business days. Funding inside 24 to 48 hours."
};

const steps = [
  {
    n: "01",
    h: "Two-page application",
    p: "Fill out the CAFI application. Plain English, the kind you can complete from the truck. No tax returns. No financial statements. Send it back with a copy of your contract and one approved pay application or invoice."
  },
  {
    n: "02",
    h: "We do the diligence on the receivable",
    p: "CAFI verifies the prime, the contract, and the approved billing. We do not pull your books apart. We look at what is owed to you, by whom, and on what schedule."
  },
  {
    n: "03",
    h: "Approval in one to two business days",
    p: "Most contractors hear back from CAFI inside one to two business days. The conversation is direct, the terms are clear, and the paperwork is short."
  },
  {
    n: "04",
    h: "Funding inside 24 to 48 hours",
    p: "Once approved, working capital is advanced inside 24 to 48 hours. Future pay applications and invoices can be funded on a recurring basis with no new application."
  }
];

const qualifies = [
  {
    h: "Approved pay applications",
    p: "AIA G702 / G703 pay applications, or equivalent schedule of values billing, signed off by your prime or owner."
  },
  {
    h: "Open invoices on government, state, and local contracts",
    p: "Federal task orders, GSA invoices, USACE billing, state DOT invoices, county and municipal invoices. CAFI is SAM registered and familiar with prompt payment realities."
  },
  {
    h: "Commercial accounts receivable",
    p: "Receivables billed to credit-worthy commercial primes or owners. CAFI verifies the obligor and advances against the approved invoice."
  },
  {
    h: "Mobilization and payroll for the next phase",
    p: "Advances sized for what the job actually requires, not just the receivable on the desk."
  }
];

const doesNot = [
  "Three years of audited financial statements",
  "Personal tax returns",
  "A 12-tab application",
  "A loan officer who has never been on a job site",
  "Fees buried in the back of a 40-page agreement"
];

export default function FundingPage() {
  return (
    <>
      <PageHero
        eyebrow="Funding"
        title={<>Working capital, advanced against the work you already won.</>}
        intro="CAFI is not a bank. CAFI advances funds against your approved receivables, so you can mobilize the next phase before the prime pays the last one."
        image={heroImages.funding}
        imageAlt="Approved pay application paperwork on a construction job site desk"
      />

      {/* How it works */}
      <section className="bg-cream">
        <div className="container-edge py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">How it works</span>
              <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
                Four steps. No theater.
              </h2>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80">
                CAFI&apos;s process was built by people who have read a pay application and signed
                a lien waiver. It moves at the speed of a job site, not a credit committee.
              </p>
            </div>
            <ol className="lg:col-span-8 lg:pl-8">
              {steps.map((s) => (
                <li key={s.n} className="grid gap-4 border-t border-forest/15 py-8 md:grid-cols-12">
                  <div className="md:col-span-2">
                    <span className="font-serif text-3xl font-bold text-gold">{s.n}</span>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-serif text-2xl text-forest-deep">{s.h}</h3>
                    <p className="mt-3 max-w-prose text-[1.02rem] leading-relaxed text-ink/80">{s.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What qualifies */}
      <section id="qualify" className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow text-gold-warm">What qualifies</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-cream md:text-5xl">
              The receivables CAFI advances against.
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-cream/80">
              If you are billing a credit-worthy prime or government entity on government, state,
              local, or qualified commercial work, CAFI can almost certainly fund you.
            </p>
          </div>
          <dl className="lg:col-span-7 lg:pl-8">
            {qualifies.map((q) => (
              <div key={q.h} className="border-t border-cream/15 py-7">
                <dt className="font-serif text-xl text-gold-warm">{q.h}</dt>
                <dd className="mt-3 max-w-prose text-[1.02rem] leading-relaxed text-cream/80">{q.p}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What CAFI does not require */}
      <section className="bg-cream-warm">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">What CAFI does not require</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
              The list of things we will not ask for.
            </h2>
          </div>
          <ul className="lg:col-span-7 lg:pl-8">
            {doesNot.map((d) => (
              <li
                key={d}
                className="flex items-baseline gap-4 border-t border-forest/15 py-5 font-serif text-xl text-forest-deep"
              >
                <span className="text-gold">✕</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Apply</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
              Send the application. Get a real answer.
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80">
              Choose your state below to download the CAFI contractor application. If you are in
              New Mexico, call CAFI directly and we will walk you through the same paperwork.
            </p>
            <div className="mt-8 space-y-2 font-serif text-2xl text-forest-deep">
              <a href="tel:+19157726333" className="block hover:text-gold">915.772.6333</a>
              <a href="tel:+18886862234" className="block hover:text-gold">888.686.2234</a>
              <p className="mt-2 text-base font-sans uppercase tracking-widest text-gold">Se Habla Español</p>
            </div>
          </div>
          <div className="grid gap-px bg-forest/15 lg:col-span-7 lg:pl-8 lg:bg-transparent">
            <div className="grid gap-px bg-forest/15 sm:grid-cols-3">
              {[
                { state: "Texas", abbr: "TX", href: "/applications/cafi-tx-contractor-application.pdf" },
                { state: "Arizona", abbr: "AZ", href: "/applications/cafi-az-contractor-application.pdf" },
                { state: "New Mexico", abbr: "NM", href: "/contact" }
              ].map((s) => (
                <Link
                  key={s.abbr}
                  href={s.href}
                  className="group block bg-cream p-8 transition hover:bg-forest-deep hover:text-cream"
                >
                  <div className="font-serif text-4xl font-bold text-gold group-hover:text-gold-warm">
                    {s.abbr}
                  </div>
                  <div className="mt-3 font-serif text-xl text-forest-deep group-hover:text-cream">
                    {s.state}
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-widest text-forest/60 group-hover:text-cream/70">
                    {s.abbr === "NM" ? "Call CAFI →" : "Download application →"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
