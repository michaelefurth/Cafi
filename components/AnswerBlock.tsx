import { ReactNode } from "react";

/**
 * A short, direct answer block formatted for AI answer engines.
 * Use above the fold or near the top of a page so AI systems can lift
 * the answer cleanly. Question is rendered as the visible heading.
 */
export function AnswerBlock({
  question,
  children,
  level = 2
}: {
  question: string;
  children: ReactNode;
  level?: 2 | 3;
}) {
  const Heading = (level === 3 ? "h3" : "h2") as keyof JSX.IntrinsicElements;
  return (
    <section
      className="border-l-2 border-gold bg-cream-warm p-6 md:p-8"
      itemScope
      itemType="https://schema.org/Question"
    >
      <Heading
        className="font-serif text-xl font-semibold text-forest-deep md:text-2xl"
        itemProp="name"
      >
        {question}
      </Heading>
      <div
        className="mt-3 max-w-prose font-sans text-[1.05rem] leading-relaxed text-ink/85"
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <div itemProp="text">{children}</div>
      </div>
    </section>
  );
}
