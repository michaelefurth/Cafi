import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AnswerBlock } from "@/components/AnswerBlock";
import { JsonLd } from "@/components/JsonLd";
import { heroImages } from "@/lib/images";
import { projectAssurance } from "@/lib/cafi";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Project Assurance | Keep Your Subs Funded and Compliant at Zero Cost",
  description:
    "CAFI Project Assurance keeps a general contractor's subcontractors funded and compliant on the job, at zero cost to the GC. Subs funded in 24 to 48 hours, lien-waiver compliance packaged, draws stay clean.",
  alternates: { canonical: "/project-assurance" }
};

export default function ProjectAssurancePage() {
  return (
    <>
      <JsonLd
        id="ld-project-assurance"
        data={[
          serviceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Project Assurance", path: "/project-assurance" }
          ])
        ]}
      />

      <PageHero
        eyebrow="For general contractors"
        title={<>Keep your subs funded and compliant. At zero cost to you.</>}
        intro={projectAssurance.summary}
        image={heroImages.caseStudies}
        imageAlt="General contractor reviewing subcontractor draws on a job site"
      />

      {/* AEO answer block */}
      <section className="bg-cream">
        <div className="container-edge py-16">
          <AnswerBlock question="What is CAFI Project Assurance?">
            <p>
              CAFI Project Assurance is a funds-control program for general contractors. CAFI
              keeps your subcontractors funded and compliant on your jobs at zero cost to you. Subs
              get funded in 24 to 48 hours on approved invoices, lien-waiver compliance is packaged
              for your draws, and nothing touches your books. Your terms and your process do not
              change.
            </p>
          </AnswerBlock>
        </div>
      </section>

      {/* The stat + problem */}
      <section className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <div className="font-serif text-7xl font-bold text-gold-warm md:text-8xl">
              {projectAssurance.stat.value}
            </div>
            <p className="mt-4 max-w-xs text-lg leading-relaxed text-cream/80">
              {projectAssurance.stat.label}. An underfunded sub is a schedule risk on your job.
            </p>
          </div>
          <div className="lg:col-span-8 lg:pl-8">
            <span className="eyebrow text-gold-warm">The problem</span>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-cream md:text-4xl">
              When a sub runs out of cash between pay apps, three things happen.
            </h2>
            <ol className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
              {projectAssurance.problem.map((p, i) => (
                <li key={p} className="flex items-baseline gap-5 py-5">
                  <span className="font-serif text-2xl text-gold-warm">{i + 1}</span>
                  <span className="font-serif text-xl text-cream md:text-2xl">{p}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-cream/80">
              CAFI eliminates all three. Funded subs stay focused. You never play banker.
            </p>
          </div>
        </div>
      </section>

      {/* What the GC gets */}
      <section className="bg-cream">
        <div className="container-edge py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">What the GC gets</span>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
              {projectAssurance.tagline}
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-forest/15 md:grid-cols-2 lg:grid-cols-3">
            {projectAssurance.benefits.map((b, i) => (
              <article key={b.h} className="bg-cream-warm p-8">
                <div className="font-serif text-2xl font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold text-forest-deep">{b.h}</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/80">{b.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it is different from factoring */}
      <section className="bg-cream-warm">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">The frame</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
              This is funds control, not factoring.
            </h2>
          </div>
          <div className="prose-editorial lg:col-span-7 lg:pl-8">
            <p>
              Project Assurance is in the same family as invoice financing, but the right way to
              think about it is funds control. CAFI manages the disbursement flow, packages the
              compliance, and funds the subs directly. Funded subs, compliant lien waivers, clean
              draws.
            </p>
            <p>
              No debt. Nothing touches your books. Your payment terms do not change and your
              process does not change. CAFI has been doing this for 30 years, and has funded subs
              on projects including Fort Bliss ($40M+), Cowboys Stadium, Marlins Stadium, and VA
              hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Become the GC funded subs want to work with.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-forest-deep/85">
              Zero cost to you. Ask CAFI for a one-pager you can share directly with your subs.
              Se Habla Español.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <div className="flex flex-col items-start gap-4 md:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-forest-deep px-7 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-forest-dark arrow"
              >
                Talk to CAFI
              </Link>
              <a
                href="tel:+19157726333"
                className="font-serif text-2xl font-semibold text-forest-deep"
              >
                915.772.6333
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
