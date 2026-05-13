import Link from "next/link";

const columns = [
  {
    heading: "Funding",
    links: [
      { href: "/funding", label: "How it works" },
      { href: "/funding#apply", label: "Apply" },
      { href: "/funding#qualify", label: "What qualifies" }
    ]
  },
  {
    heading: "Regions",
    links: [
      { href: "/texas", label: "CAFI Texas" },
      { href: "/arizona", label: "CAFI Arizona" },
      { href: "/new-mexico", label: "CAFI New Mexico" }
    ]
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/team", label: "Team" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/contact", label: "Contact" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="container-edge grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="font-serif text-3xl font-bold tracking-tight text-cream">CAFI</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
            Working capital and short-term accounts receivable financing for commercial
            construction and service contractors performing on government, state, and local
            contracts across Texas, Arizona, and New Mexico. 30+ years on Southwest job sites.
          </p>
          <div className="mt-8 space-y-2 font-sans text-sm text-cream/85">
            <p>6044 Gateway Blvd E, Suite 544</p>
            <p>El Paso, TX 79905</p>
            <p>
              <a href="tel:+19157726333" className="hover:text-gold-warm">
                915.772.6333
              </a>
              <span className="mx-2 text-cream/40">·</span>
              <a href="tel:+18886862234" className="hover:text-gold-warm">
                888.686.2234
              </a>
            </p>
            <p className="pt-2 text-gold-warm">Se Habla Español</p>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-gold-warm">{col.heading}</div>
            <ul className="mt-5 space-y-3 font-sans text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/80 transition hover:text-gold-warm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-widest text-gold-warm">Stay direct</div>
          <p className="mt-5 text-sm text-cream/70">
            Talk to CAFI about your next contract. Approval in one to two business days. No
            financial statements. No tax returns.
          </p>
          <Link
            href="/funding#apply"
            className="mt-6 inline-flex items-center gap-2 border border-gold/60 px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-gold-warm transition hover:bg-gold hover:text-forest-deep"
          >
            Apply for Working Capital
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-edge flex flex-col items-start justify-between gap-4 py-6 text-xs text-cream/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CAFI. All rights reserved.</p>
          <p className="uppercase tracking-widest">SAM registered · BBB accredited · NAWIC member</p>
        </div>
      </div>
    </footer>
  );
}
