export function TrustBand() {
  return (
    <section className="border-y border-forest/10 bg-cream-warm">
      <div className="container-edge flex flex-col items-start gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-lg leading-snug text-forest-deep md:text-xl">
          30+ years. Texas, Arizona, New Mexico. Trusted by contractors on Fort Bliss, White Sands,
          Holloman, Biggs Army Airfield, and across the Southwest.
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest text-forest/70">
          <li>SAM registered 30+ yrs</li>
          <li className="text-gold">·</li>
          <li>BBB accredited</li>
          <li className="text-gold">·</li>
          <li>NAWIC member</li>
          <li className="text-gold">·</li>
          <li>ASA Arizona</li>
        </ul>
      </div>
    </section>
  );
}
