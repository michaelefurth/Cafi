import Link from "next/link";

type Props = {
  abbr: string;
  name: string;
  href: string;
  years: string;
  image: string;
  bullets: string[];
};

export function StateCard({ abbr, name, href, years, image, bullets }: Props) {
  return (
    <article className="group flex flex-col bg-cream-warm">
      <Link href={href} className="relative block overflow-hidden">
        <img
          src={image}
          alt={`Construction work in ${name}`}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-gold-warm">{years}</div>
            <div className="mt-1 font-serif text-3xl font-bold text-cream md:text-4xl">CAFI {abbr}</div>
          </div>
          <span className="font-serif text-5xl text-cream/30">{abbr}</span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm font-semibold uppercase tracking-widest text-forest-deep">{name}</p>
        <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ink/75">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2.5 inline-block h-1 w-3 flex-shrink-0 bg-gold" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Link href={href} className="btn-ghost arrow mt-7 self-start">
          CAFI {abbr} resources
        </Link>
      </div>
    </article>
  );
}
