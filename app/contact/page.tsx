import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { heroImages } from "@/lib/images";
import { offices, principals } from "@/lib/contacts";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact CAFI | El Paso, Texas and Scottsdale, Arizona",
  description:
    "CAFI is headquartered in El Paso, with the CAFI Arizona office in Scottsdale. Call 915.772.6333, 888.686.2234, or reach Dennis in Arizona and Priscilla on government contractor work."
};

const dennis = principals.find((p) => p.id === "dennis-williams")!;
const priscilla = principals.find((p) => p.id === "priscilla-northcutt")!;
const frank = principals.find((p) => p.id === "frank-bashore")!;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        id="ld-contact"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title={<>Talk to CAFI about your next contract.</>}
        intro="Pick up the phone, send a note, or stop by the El Paso or Scottsdale office. Dennis Williams leads CAFI Arizona client outreach. Priscilla Northcutt oversees CAFI's government construction and services contractors across Texas, Arizona, and New Mexico."
        image={heroImages.contact}
        imageAlt="Phone on a contractor's desk with paperwork"
      />

      {/* Direct lines */}
      <section className="bg-cream-warm">
        <div className="container-edge py-20">
          <span className="eyebrow">Principal contacts</span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
            Direct lines into the desk.
          </h2>

          <div className="mt-10 grid gap-px bg-forest/15 md:grid-cols-3">
            <ContactCard
              name={dennis.name}
              role="CAFI Arizona · Sales and Client Outreach"
              phone={dennis.phone}
              email={dennis.email}
              fallbackPhone="480.315.8188"
            />
            <ContactCard
              name={priscilla.name}
              role="Government Contractors · TX, AZ, NM"
              phone={priscilla.phone}
              email={priscilla.email}
            />
            <ContactCard
              name={frank.name}
              role="President"
              phone={frank.phone}
              email={frank.email}
              fallbackPhone="915.772.6333"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edge grid gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Offices</span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Two desks. Same team.
            </h2>

            <div className="mt-10 grid gap-10">
              {[offices.elPaso, offices.scottsdale].map((office) => (
                <div key={office.label}>
                  <p className="text-xs uppercase tracking-widest text-gold">{office.label}</p>
                  <address className="mt-3 not-italic font-serif text-xl leading-snug text-forest-deep">
                    {office.street}
                    <br />
                    {office.cityState}
                  </address>
                  <ul className="mt-4 space-y-1">
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
              ))}
            </div>

            <p className="mt-10 text-xs uppercase tracking-widest text-gold">Se Habla Español</p>

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

function ContactCard({
  name,
  role,
  phone,
  email,
  fallbackPhone
}: {
  name: string;
  role: string;
  phone?: string;
  email?: string;
  fallbackPhone?: string;
}) {
  const phoneToShow = phone ?? fallbackPhone;
  return (
    <div className="bg-cream-warm p-8">
      <div className="font-serif text-2xl font-semibold text-forest-deep">{name}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-gold">{role}</div>

      <div className="mt-6 space-y-3">
        {phoneToShow && (
          <div>
            <div className="text-[10px] uppercase tracking-widest text-forest/60">Phone</div>
            <a
              href={`tel:+1${phoneToShow.replace(/\D/g, "")}`}
              className="font-serif text-xl font-semibold text-forest-deep hover:text-gold"
            >
              {phoneToShow}
            </a>
            {!phone && (
              <span className="ml-2 text-xs text-ink/50">· desk line</span>
            )}
          </div>
        )}
        <div>
          <div className="text-[10px] uppercase tracking-widest text-forest/60">Email</div>
          {email ? (
            <a
              href={`mailto:${email}`}
              className="font-serif text-base text-forest-deep hover:text-gold"
            >
              {email}
            </a>
          ) : (
            <Link href="/contact" className="font-serif text-base text-forest-deep hover:text-gold">
              Contact via form
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
