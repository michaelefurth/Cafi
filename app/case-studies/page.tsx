import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Case Studies | CAFI",
  description:
    "Long-form case studies of CAFI-financed projects across the Southwest, including the base realignment housing work on Fort Bliss, Holloman, Biggs, and White Sands."
};

const cases = [
  {
    eyebrow: "Anchor case study · 2015 - 2021",
    title: "The base realignment work: 3,600+ homes across four Southwest bases.",
    body: [
      "Over a six-year period, CAFI financed housing subcontractors who participated in the construction of more than 3,600 new homes on base realignment projects at Fort Bliss, Holloman Air Force Base, Biggs Army Airfield, and White Sands, under Centex Construction and Balfour Beatty Communities.",
      "The primes ran the schedule. The Department of Defense paid the primes. CAFI ran the working capital under the subcontractors who actually framed, roofed, MEP-roughed, and finished the units. Without that capital flowing, the schedule does not hold.",
      "It is the kind of project CAFI was built for: federal money, prime contractors with real credit, and subs that needed working capital to mobilize, make payroll, and carry material every two weeks for six years straight."
    ],
    stats: [
      { v: "3,600+", l: "Homes funded" },
      { v: "6 yrs", l: "Continuous mobilization" },
      { v: "4", l: "Southwest bases" },
      { v: "2", l: "Prime contractor relationships" }
    ],
    image:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1800&q=80"
  },
  {
    eyebrow: "Federal services",
    title: "Funding facility-services subs on a multi-year federal contract.",
    body: [
      "A SAM-registered facility services contractor needed working capital to staff and equip a multi-year task order on a federal installation. The contract paid on a 30 to 45 day cycle. The bank wanted three years of audited financials the contractor did not have.",
      "CAFI funded against the approved invoices on a recurring basis. The contractor mobilized on schedule and now operates with CAFI as a standing working-capital partner."
    ],
    stats: [
      { v: "30-45", l: "Day payment cycle" },
      { v: "Multi-year", l: "Federal task order" },
      { v: "Recurring", l: "Advance schedule" }
    ],
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1800&q=80"
  },
  {
    eyebrow: "Phoenix commercial",
    title: "MEP sub on a Phoenix commercial buildout, funded around retainage.",
    body: [
      "A Phoenix MEP subcontractor was running three commercial buildouts under a regional GC. Retainage was sitting on previous jobs while the next mobilization came due. The bank line was tapped and the GC was on a 45 day cycle.",
      "CAFI advanced against the approved pay applications and a portion of retainage as it was earned, so payroll never missed a Monday. The contractor finished all three jobs and used CAFI for the next two."
    ],
    stats: [
      { v: "3", l: "Concurrent buildouts" },
      { v: "45 days", l: "GC payment cycle" },
      { v: "0", l: "Missed payrolls" }
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={<>Long-running work, written down.</>}
        intro="The projects below are representative of the work CAFI has funded across Texas, Arizona, and New Mexico. Names of subs are withheld for privacy. Primes are referenced where public record permits."
        image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2200&q=80"
        imageAlt="Construction worker reviewing plans on site"
      />

      {cases.map((c, i) => (
        <section key={c.title} className={i % 2 === 0 ? "bg-cream" : "bg-cream-warm"}>
          <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img src={c.image} alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="lg:col-span-6">
              <span className="eyebrow">{c.eyebrow}</span>
              <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
                {c.title}
              </h2>
              <div className="prose-editorial mt-8">
                {c.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-px bg-forest/15 sm:grid-cols-4">
                {c.stats.map((s) => (
                  <div key={s.l} className="bg-cream p-5">
                    <dt className="font-serif text-2xl font-bold text-forest-deep">{s.v}</dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-widest text-forest/60">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-cream md:text-4xl">
              CAFI is happy to share a reference on a comparable project.
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              Tell us about your contract and we will point you to a contractor we have funded on
              similar work.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link href="/contact" className="btn-gold arrow">
              Talk to CAFI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
