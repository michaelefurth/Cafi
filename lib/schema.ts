/**
 * JSON-LD structured data for AEO (Answer Engine Optimization).
 *
 * Output via <script type="application/ld+json"> in the relevant page. AI search
 * engines and traditional crawlers both pull from this. Keep one schema per page
 * (or per logical section) and avoid duplicating @ids.
 */

import { CAFI, allFaqs } from "@/lib/cafi";
import { offices, principals } from "@/lib/contacts";

const elPasoHQ = offices.elPaso;
const scottsdale = offices.scottsdale;
const sameAs = [
  "https://www.linkedin.com/company/cafi-business-finance",
  "https://www.facebook.com/CAFIUSA/",
  "https://www.bbb.org/us/tx/el-paso/profile/financing/capital-active-funding-inc-0895-99124700"
];

const organizationId = `${CAFI.url}#organization`;
const elPasoId = `${CAFI.url}#office-el-paso`;
const scottsdaleId = `${CAFI.url}#office-scottsdale`;

/** Site-wide Organization + FinancialService. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "FinancialService"],
    "@id": organizationId,
    name: CAFI.brandName,
    legalName: CAFI.legalName,
    alternateName: ["CAFI USA", "Capital Active Funding"],
    url: CAFI.url,
    foundingDate: String(CAFI.yearFounded),
    slogan: "Control is the product. Funding is the feature.",
    description:
      "CAFI is a cash-management and funds-control program for commercial construction and service contractors. Approved invoices become working capital in 24 to 48 hours. Not a loan, no debt on the books. 30+ years across Texas, Arizona, and New Mexico.",
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Arizona" },
      { "@type": "State", name: "New Mexico" }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: elPasoHQ.street,
      addressLocality: "El Paso",
      addressRegion: "TX",
      postalCode: "79905",
      addressCountry: "US"
    },
    telephone: "+1-915-772-6333",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-888-686-2234",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        areaServed: ["TX", "AZ", "NM"]
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-480-315-8188",
        contactType: "sales",
        contactOption: "TollFree",
        areaServed: ["AZ"],
        availableLanguage: ["English", "Spanish"]
      }
    ],
    sameAs,
    location: [{ "@id": elPasoId }, { "@id": scottsdaleId }]
  };
}

export function localBusinessSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": elPasoId,
      name: "CAFI Headquarters (El Paso)",
      parentOrganization: { "@id": organizationId },
      address: {
        "@type": "PostalAddress",
        streetAddress: elPasoHQ.street,
        addressLocality: "El Paso",
        addressRegion: "TX",
        postalCode: "79905",
        addressCountry: "US"
      },
      telephone: "+1-915-772-6333",
      url: `${CAFI.url}/contact`,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.7574,
        longitude: -106.4187
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": scottsdaleId,
      name: "CAFI Arizona (Scottsdale)",
      parentOrganization: { "@id": organizationId },
      address: {
        "@type": "PostalAddress",
        streetAddress: scottsdale.street,
        addressLocality: "Scottsdale",
        addressRegion: "AZ",
        postalCode: "85260",
        addressCountry: "US"
      },
      telephone: "+1-480-315-8188",
      url: `${CAFI.url}/arizona`,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.6193,
        longitude: -111.9203
      }
    }
  ];
}

/** Service schema for the working-capital program. */
export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "CAFI Working Capital",
    serviceType: "Accounts receivable working capital advance",
    provider: { "@id": organizationId },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Arizona" },
      { "@type": "State", name: "New Mexico" }
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Commercial construction and service contractors performing on government, state, and local contracts"
    },
    description:
      "CAFI advances funds against approved invoices and pay applications so commercial construction and service contractors can mobilize the next phase before the prime pays the last one. Approval in 1 to 2 business days. Funding in 24 to 48 hours. No financial statements required. No tax returns required. Not a loan, no debt on the books.",
    feesAndCommissionsSpecification:
      "A small fee out of the invoice when it pays. No upfront cost. No annual fees. No long-term lock-in contracts."
  };
}

/** Reusable BreadcrumbList factory. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${CAFI.url}${item.path}`
    }))
  };
}

/** FAQPage schema sourced from lib/cafi.ts. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs().map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
}

/** WebSite + SearchAction (often promoted in AI answer engines). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${CAFI.url}#website`,
    url: CAFI.url,
    name: CAFI.brandName,
    publisher: { "@id": organizationId },
    inLanguage: "en-US"
  };
}

/** Helper: serialize one or more schema objects as a single JSON-LD <script> string. */
export function jsonLd(schemas: object | object[]): string {
  const data = Array.isArray(schemas) ? schemas : [schemas];
  return JSON.stringify(data.length === 1 ? data[0] : data);
}
