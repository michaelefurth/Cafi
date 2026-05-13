import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light" }: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";
  const titleColor = tone === "dark" ? "text-cream" : "text-forest-deep";
  const introColor = tone === "dark" ? "text-cream/75" : "text-ink/70";

  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`max-w-3xl font-serif text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {intro && <p className={`max-w-prose text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  );
}
