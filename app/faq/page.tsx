import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { heroImages } from "@/lib/images";
import { faqs } from "@/lib/cafi";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | CAFI",
  description:
    "Plainspoken answers to what contractors actually ask CAFI: what it is, how it works, who it serves, what it costs, how fast it funds, and how it compares to a bank loan or factoring.",
  alternates: { canonical: "/faq" }
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        id="ld-faq"
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" }
          ])
        ]}
      />

      <PageHero
        eyebrow="FAQ"
        title={<>Straight answers from the desk.</>}
        intro="What contractors, GCs, and government primes actually ask CAFI. If your question is not below, call 915.772.6333 or 888.686.2234. Se Habla Español."
        image={heroImages.contact}
        imageAlt="Phone on a contractor desk with paperwork"
      />

      <section className="bg-cream">
        <div className="container-edge py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Side nav */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <span className="eyebrow">On this page</span>
                <ul className="mt-5 space-y-3 border-l border-forest/15 pl-4">
                  {faqs.map((group) => (
                    <li key={group.category}>
                      <a
                        href={`#${slugify(group.category)}`}
                        className="font-serif text-base text-forest-deep hover:text-gold"
                      >
                        {group.category}
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-ghost arrow mt-10 inline-flex"
                >
                  Ask CAFI directly
                </Link>
              </div>
            </aside>

            <div className="lg:col-span-9">
              {faqs.map((group) => (
                <section
                  key={group.category}
                  id={slugify(group.category)}
                  className="mt-12 first:mt-0"
                >
                  <span className="eyebrow">Category</span>
                  <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
                    {group.category}
                  </h2>

                  <dl className="mt-8 divide-y divide-forest/15 border-y border-forest/15">
                    {group.items.map((item) => (
                      <details
                        key={item.q}
                        className="group py-5"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <summary className="flex cursor-pointer items-baseline justify-between gap-6 list-none">
                          <dt
                            className="font-serif text-xl text-forest-deep group-open:text-gold md:text-2xl"
                            itemProp="name"
                          >
                            {item.q}
                          </dt>
                          <span
                            className="mt-1 inline-block font-serif text-3xl leading-none text-gold transition group-open:rotate-45"
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </summary>
                        <dd
                          className="mt-4 max-w-prose font-sans text-[1.05rem] leading-relaxed text-ink/85"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <p itemProp="text">{item.a}</p>
                        </dd>
                      </details>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-cream">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-cream md:text-4xl">
              Did not find it? Ask the desk.
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              Two-page application. Approval in 1 to 2 business days. Funding inside 24 to 48
              hours. Se Habla Español.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link href="/contact" className="btn-gold arrow">
              Contact CAFI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
