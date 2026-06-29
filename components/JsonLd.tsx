import { jsonLd } from "@/lib/schema";

export function JsonLd({ data, id }: { data: object | object[]; id?: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
