import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep text-cream">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/70 to-forest-deep/95" />
      </div>
      <div className="container-edge relative grid grid-cols-1 gap-10 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-9">
          {eyebrow && (
            <div className="flex items-center gap-4 text-gold-warm">
              <span className="block h-px w-12 bg-gold" />
              <span className="font-sans text-xs uppercase tracking-widest">{eyebrow}</span>
            </div>
          )}
          <h1 className="mt-7 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-cream md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-7 max-w-2xl font-serif text-lg leading-relaxed text-cream/85 md:text-xl">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
