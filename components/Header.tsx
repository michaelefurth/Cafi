"use client";

import Link from "next/link";
import { useState } from "react";

const primary = [
  { href: "/funding", label: "Funding" },
  { href: "/texas", label: "Texas" },
  { href: "/arizona", label: "Arizona" },
  { href: "/new-mexico", label: "New Mexico" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="container-edge flex items-center justify-between py-5">
        <Link href="/" className="flex items-baseline gap-3" aria-label="CAFI home">
          <span className="font-serif text-2xl font-bold tracking-tight text-forest-deep">
            CAFI
          </span>
          <span className="hidden text-[10px] uppercase tracking-widest text-forest/60 sm:inline">
            Capital · Active · Funding
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-forest-deep transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+18886862234"
            className="font-sans text-sm font-semibold text-forest-deep hover:text-gold"
          >
            888.686.2234
          </a>
          <Link
            href="/funding#apply"
            className="bg-gold px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-forest-deep transition hover:bg-gold-warm"
          >
            Apply
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-forest-deep lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-forest-deep" />
            <span className="block h-0.5 w-6 bg-forest-deep" />
            <span className="block h-0.5 w-6 bg-forest-deep" />
          </div>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-forest/10 bg-cream-warm lg:hidden">
          <div className="container-edge flex flex-col gap-1 py-6">
            {primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-forest/10 py-3 font-sans text-base text-forest-deep"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+19157726333"
                className="font-sans text-sm font-semibold text-forest-deep"
              >
                915.772.6333
              </a>
              <a
                href="tel:+18886862234"
                className="font-sans text-sm font-semibold text-forest-deep"
              >
                888.686.2234
              </a>
              <Link
                href="/funding#apply"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-gold px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-forest-deep"
              >
                Apply for Working Capital
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
