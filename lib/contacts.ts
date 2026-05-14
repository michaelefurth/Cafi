/**
 * Single source of truth for CAFI contact data.
 *
 * Verified from public sources (web search results captured during build):
 *   - Frank Bashore as President (co-founded 1995, named President 1998)
 *   - Priscilla Northcutt — TX/AZ/NM/Southern California oversight, 23+ yrs;
 *     480-315-8188 / priscillan@cafiusa.com
 *   - Scott C — 480-721-8680 / scottc@cafiusa.com (480 area code = AZ team)
 *   - Danielle H — CAFI Texas — 512-541-9631 / danielleh@cafiusa.com
 *
 * Offices:
 *   - El Paso HQ — 6044 Gateway Blvd E, Suite 544, El Paso, TX 79905
 *   - CAFI Arizona Inc — 8260 E Raintree Dr, Scottsdale, AZ 85260
 *
 * TODO before launch — fill in surnames, direct phones, and direct emails
 * for Dennis and Michael. Anywhere these are null, the page renders the
 * El Paso / Scottsdale desk numbers instead.
 */

export type Person = {
  id: string;
  name: string;
  role: string;
  tenure?: string;
  bio: string;
  phone?: string;
  email?: string;
  initials: string;
  states?: ("TX" | "AZ" | "NM")[];
  primaryFor?: ("TX" | "AZ" | "NM")[];
};

export const offices = {
  elPaso: {
    label: "CAFI Headquarters · El Paso",
    street: "6044 Gateway Blvd E, Suite 544",
    cityState: "El Paso, TX 79905",
    phones: ["915.772.6333", "888.686.2234"]
  },
  scottsdale: {
    label: "CAFI Arizona · Scottsdale",
    street: "8260 E Raintree Drive",
    cityState: "Scottsdale, AZ 85260",
    phones: ["480.315.8188", "888.686.2234"]
  }
} as const;

export const principals: Person[] = [
  {
    id: "frank-bashore",
    name: "Frank Bashore",
    role: "President",
    tenure: "Co-founder · 1995",
    bio: "Frank co-founded Capital Active Funding in 1995 and was appointed President in 1998. He sets the direction of the firm and remains directly involved in the larger contractor relationships across the Southwest.",
    initials: "FB"
  },
  {
    id: "dennis-williams",
    name: "Dennis Williams",
    role: "Sales and Client Outreach · Arizona Lead",
    tenure: "CAFI Arizona",
    bio: "Dennis is the first call for most CAFI Arizona contractors. He works directly with construction and service contractors across the Valley, walks through the two-page application, and stays on the phone through the first funding.",
    initials: "DW",
    states: ["AZ", "TX", "NM"],
    primaryFor: ["AZ"]
    // TODO: confirm last name, add direct phone and email
  },
  {
    id: "priscilla-northcutt",
    name: "Priscilla Northcutt",
    role: "Government Contractor Oversight · TX, AZ, NM",
    tenure: "23+ years at CAFI",
    bio: "Priscilla oversees CAFI's government construction and services contractors across Texas, Arizona, New Mexico, and Southern California. Deep knowledge of CAFI's lending program and how it lines up with federal, state, and local contract realities.",
    phone: "480.315.8188",
    email: "priscillan@cafiusa.com",
    initials: "PN",
    states: ["TX", "AZ", "NM"]
  },
  {
    id: "michael",
    name: "Michael",
    role: "Principal Contact",
    tenure: "CAFI",
    bio: "Michael is one of CAFI's principal contacts for contractors across the Southwest.",
    initials: "M",
    states: ["TX", "AZ", "NM"]
    // TODO: confirm last name, role, direct phone and email
  }
];

export const additionalTeam: Person[] = [
  {
    id: "scott-c",
    name: "Scott C.",
    role: "CAFI Arizona Team",
    tenure: "Scottsdale office",
    bio: "Scott works with Arizona contractors out of the Scottsdale office.",
    phone: "480.721.8680",
    email: "scottc@cafiusa.com",
    initials: "SC",
    states: ["AZ"]
  },
  {
    id: "danielle-h",
    name: "Danielle H.",
    role: "CAFI Texas Team",
    tenure: "Texas",
    bio: "Danielle works with Texas contractors and supports the CAFI Texas desk.",
    phone: "512.541.9631",
    email: "danielleh@cafiusa.com",
    initials: "DH",
    states: ["TX"]
  }
];

/** Return the lead contact for a given state. Falls back to Priscilla, then desk. */
export function leadContactFor(state: "TX" | "AZ" | "NM"): Person {
  const primary = principals.find((p) => p.primaryFor?.includes(state));
  if (primary) return primary;
  const oversight = principals.find((p) => p.states?.includes(state));
  if (oversight) return oversight;
  return principals[0];
}
