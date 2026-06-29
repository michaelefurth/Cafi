import type { MetadataRoute } from "next";
import { CAFI } from "@/lib/cafi";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1.0, changeFreq: "monthly" as const },
    { path: "/funding", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/texas", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/arizona", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/new-mexico", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/faq", priority: 0.85, changeFreq: "monthly" as const },
    { path: "/case-studies", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/about", priority: 0.6, changeFreq: "yearly" as const },
    { path: "/team", priority: 0.6, changeFreq: "yearly" as const },
    { path: "/contact", priority: 0.6, changeFreq: "yearly" as const }
  ];

  return pages.map((p) => ({
    url: `${CAFI.url}${p.path}`,
    changeFrequency: p.changeFreq,
    priority: p.priority
  }));
}
