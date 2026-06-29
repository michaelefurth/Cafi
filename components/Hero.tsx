import Link from "next/link";
import { heroImages } from "@/lib/images";
import { positioning } from "@/lib/cafi";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep text-cream">
      <div className="absolute inset-0">
        <img
          src={heroImages.home}
          alt="Commercial construction job site at golden hour in the Southwest"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/55 to-forest-deep/95" />
      </div>

      <div className="container-edge relative grid min-h-[80vh] grid-cols-1 items-end gap-12 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <div className="flex items-center gap-4 text-gold-warm">
            <span className="block h-px w-12 bg-gold" />
            <span className="font-sans text-xs uppercase tracking-widest">
              {positioning.badge}
            </span>
          </div>

          <h1 className="mt-8 font-serif text-[2.4rem] font-bold leading-[1.03] tracking-tight text-cream md:text-6xl lg:text-7xl">
            Control is the product.{" "}
            <span className="text-gold-warm">Funding is the feature.</span>
          </h1>

          <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-cream/85 md:text-2xl">
            CAFI puts contractors in control of their cash cycle. Approved invoices become
            working capital in 24 to 48 hours. Not a loan. No debt on the books.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/funding#apply" className="btn-gold arrow">
              Apply for Working Capital
            </Link>
            <Link
              href="/funding"
              className="font-sans text-sm font-semibold uppercase tracking-wider text-cream/85 hover:text-gold-warm"
            >
              How CAFI funds contractors
            </Link>
          </div>
        </div>

        <div className="lg:col-span-3 lg:justify-self-end">
          <div className="grid grid-cols-3 gap-px bg-cream/15 text-cream lg:grid-cols-1">
            {[
              ["30+", "Years exclusively in construction"],
              ["$1B+", "Funded across all programs"],
              ["99%+", "Collected"]
            ].map(([n, t]) => (
              <div key={t} className="bg-forest-deep/80 p-6">
                <div className="font-serif text-3xl font-bold text-gold-warm md:text-4xl">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-cream/70">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
