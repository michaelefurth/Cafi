import type { Metadata } from "next";
import { StatePage, type StateContent } from "@/components/StatePage";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "CAFI New Mexico | Holloman, White Sands, and NM Contractors",
  description:
    "CAFI has a long history funding contractors on Holloman Air Force Base, White Sands Missile Range, and commercial work across New Mexico, part of a 30+ year Southwest track record."
};

const content: StateContent = {
  abbr: "NM",
  name: "New Mexico",
  eyebrow: "CAFI New Mexico · Holloman · White Sands",
  heroTitle: <>Long-running work on New Mexico federal installations.</>,
  heroIntro:
    "CAFI has funded subcontractors on Holloman Air Force Base, White Sands Missile Range, and commercial construction work across New Mexico for decades. Part of the same 30+ year track record on Southwest federal projects.",
  heroImage: heroImages.newMexico,
  heroImageAlt: "Southwest desert construction site near White Sands",
  pillars: [
    { value: "30+", label: "Years on Southwest federal work" },
    { value: "2", label: "Major federal installations served" },
    { value: "Centex", label: "Prime relationship on base housing" },
    { value: "Balfour Beatty", label: "Prime relationship on base housing" }
  ],
  affiliations: [
    "Long history funding subcontractors on Holloman Air Force Base and White Sands Missile Range",
    "Project history under Centex Construction and Balfour Beatty Communities on base realignment housing",
    "SAM/CCR registered with the U.S. Federal Government for 30+ years",
    "Member, National Association of Women in Construction (NAWIC)",
    "Active funding partner on New Mexico commercial and federal subcontract work"
  ],
  topProjects: [
    {
      year: "2015 - 2021",
      title: "Holloman AFB housing subcontracts",
      detail:
        "CAFI funded subcontractors who participated in the construction of new family housing under Centex Construction and Balfour Beatty Communities on Holloman."
    },
    {
      year: "Multi-year",
      title: "White Sands Missile Range support",
      detail:
        "Working capital for facilities, services, and small construction contractors performing on White Sands task orders and base support contracts."
    },
    {
      year: "Ongoing",
      title: "Las Cruces commercial work",
      detail:
        "Subcontract and prime financing for contractors working on retail, healthcare, and tenant improvement projects in Las Cruces and southern New Mexico."
    }
  ],
  resume: [
    { client: "Centex Construction", scope: "Subcontractor working capital, Holloman housing phases" },
    { client: "Balfour Beatty Communities", scope: "Subcontractor financing, base realignment housing" },
    { client: "White Sands prime contractors", scope: "AR advances on facility services and small construction" },
    { client: "New Mexico commercial GCs", scope: "MEP, finish, and TI subcontract financing" }
  ],
  testimonials: [
    {
      quote:
        "We were the subs on the Holloman housing work. CAFI funded us through every phase, on schedule.",
      attribution: "Housing subcontractor · Holloman AFB"
    },
    {
      quote:
        "Getting paid on a federal task order is a calendar problem. CAFI solves the calendar.",
      attribution: "Services contractor · White Sands"
    }
  ],
  lending: [
    {
      heading: "Federal pay applications and invoices",
      body: "CAFI advances against approved pay applications and invoices on Holloman, White Sands, and other federal contracts. SAM registered, familiar with prompt payment."
    },
    {
      heading: "Subcontract receivables under base primes",
      body: "Working capital for subs performing under Centex, Balfour Beatty Communities, and other primes on New Mexico federal contracts."
    },
    {
      heading: "Commercial pay applications",
      body: "Las Cruces and statewide commercial subcontracts. Standard AIA-style billing or equivalent."
    }
  ],
  notes: (
    <p>
      New Mexico contractor resources, including local affiliations and the New Mexico contractor
      application, are being expanded. To talk to CAFI about a New Mexico project today, call
      915.772.6333 or 888.686.2234.
    </p>
  )
};

export default function Page() {
  return <StatePage content={content} />;
}
