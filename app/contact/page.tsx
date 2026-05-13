import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact CAFI | El Paso, Texas",
  description:
    "CAFI is headquartered in El Paso at 6044 Gateway Blvd E, Suite 544. Call 915.772.6333 or 888.686.2234. Se Habla Español."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to CAFI about your next contract.</>}
        intro="Pick up the phone, send a note, or stop by the El Paso office. We are direct, and we answer."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2200&q=80"
        imageAlt="Phone on a contractor's desk with paperwork"
      />

      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Office</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              CAFI · Headquartered in El Paso
            </h2>
            <address className="mt-7 not-italic text-lg leading-relaxed text-ink/85">
              6044 Gateway Blvd E, Suite 544<br />
              El Paso, TX 79905
            </address>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+19157726333"
                className="block font-serif text-3xl font-bold text-forest-deep hover:text-gold md:text-4xl"
              >
                915.772.6333
              </a>
              <a
                href="tel:+18886862234"
                className="block font-serif text-2xl font-semibold text-forest-deep/85 hover:text-gold"
              >
                888.686.2234
              </a>
              <p className="pt-2 text-xs uppercase tracking-widest text-gold">Se Habla Español</p>
            </div>

            <dl className="mt-10 divide-y divide-forest/15 border-y border-forest/15">
              {[
                ["Hours", "Monday - Friday, 8:00 to 5:00 Mountain Time"],
                ["Languages", "English and Spanish"],
                ["Coverage", "Texas, Arizona, New Mexico"]
              ].map(([k, v]) => (
                <div key={k} className="grid gap-2 py-4 md:grid-cols-3">
                  <dt className="text-xs uppercase tracking-widest text-forest/60">{k}</dt>
                  <dd className="md:col-span-2 text-[1rem] text-ink/80">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="bg-cream-warm p-8 md:p-10">
              <span className="eyebrow">Send a note</span>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-forest-deep md:text-3xl">
                Short form. Real reply.
              </h2>
              <p className="mt-3 text-[1.02rem] text-ink/80">
                Tell CAFI a little about the contract. We will follow up by phone, usually the
                same day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
