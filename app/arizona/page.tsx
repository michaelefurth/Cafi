import type { Metadata } from "next";
import { StatePage, type StateContent } from "@/components/StatePage";

export const metadata: Metadata = {
  title: "CAFI Arizona | Working Capital for Phoenix Contractors",
  description:
    "CAFI has served Arizona contractors for 22+ years, with deep relationships across Phoenix commercial GCs, ASA Arizona, AMCA, and the ASBA SCALE program."
};

const content: StateContent = {
  abbr: "AZ",
  name: "Arizona",
  eyebrow: "CAFI Arizona · 22+ years in Phoenix",
  heroTitle: <>Funding the contractors who build the Valley.</>,
  heroIntro:
    "For 22+ years CAFI has advanced working capital under Arizona commercial contractors performing on government, state, municipal, and private commercial work. A banking partner of the ASBA SCALE program and a member of ASA Arizona and AMCA.",
  heroImage:
    "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=2200&q=80",
  heroImageAlt: "Phoenix commercial construction at golden hour",
  pillars: [
    { value: "22+", label: "Years funding Arizona contractors" },
    { value: "ASA", label: "Member · Arizona Subcontractors Association" },
    { value: "SCALE", label: "Banking partner · ASBA SCALE program" },
    { value: "24-48", label: "Hours to funding after approval" }
  ],
  affiliations: [
    "Accredited member, Better Business Bureau of Central and Northern Arizona",
    "Member, Greater Phoenix Chamber of Commerce",
    "Member, American Subcontractors Association of Arizona (ASA)",
    "Banking partner of the ASBA SCALE program",
    "Member, Associated Minority Contractors of Arizona (AMCA)",
    "SAM/CCR registered with the U.S. Federal Government"
  ],
  topProjects: [
    {
      year: "Ongoing",
      title: "Phoenix commercial GCs",
      detail:
        "CAFI funds MEP, finish trade, sitework, and concrete subs performing under Phoenix-area commercial primes on retail, industrial, multi-family, and TI work."
    },
    {
      year: "Multi-year",
      title: "ADOT prime subcontract work",
      detail:
        "Working capital advanced against approved receivables for subs performing on Arizona Department of Transportation contracts."
    },
    {
      year: "Ongoing",
      title: "Municipal contracts across the Valley",
      detail:
        "City of Phoenix, Mesa, Tempe, and Maricopa County subcontracts. CAFI funds against approved invoices on standard 30 to 60 day cycles."
    },
    {
      year: "Ongoing",
      title: "Federal contracts in Arizona",
      detail:
        "GSA, USACE, and federal facility services contractors. SAM registered, familiar with prompt payment and federal billing realities."
    },
    {
      year: "Ongoing",
      title: "AMCA member contractors",
      detail:
        "Working capital for minority-owned and DBE contractors competing for and performing on prime contracts statewide."
    },
    {
      year: "Annual",
      title: "Contractor events and outreach",
      detail:
        "CAFI participates in ASA Arizona, AMCA, and ASBA SCALE events throughout the year. See the events list below."
    }
  ],
  resume: [
    { client: "Phoenix commercial GCs", scope: "MEP, finish, sitework subcontractor financing" },
    { client: "ADOT prime contractors", scope: "Subcontract receivables, highway and bridge" },
    { client: "City of Phoenix", scope: "Municipal facilities subcontractor financing" },
    { client: "Maricopa County primes", scope: "Site, utilities, and facilities subcontracts" },
    { client: "AMCA member primes", scope: "Minority-owned prime and sub working capital" },
    { client: "USACE / GSA primes", scope: "Federal facility services and small construction" }
  ],
  testimonials: [
    {
      quote:
        "Our ASA chapter has worked with CAFI for years. They know subcontractors and they actually answer the phone.",
      attribution: "ASA Arizona member contractor"
    },
    {
      quote:
        "Bank pulled our line a week before mobilization. CAFI funded against our approved AR and we never missed a Monday.",
      attribution: "Phoenix MEP contractor"
    }
  ],
  lending: [
    {
      heading: "Pay applications on Phoenix commercial work",
      body: "AIA-style pay applications signed off by your GC. CAFI funds against the receivable, not your statements."
    },
    {
      heading: "ADOT and municipal receivables",
      body: "Approved invoices on Arizona Department of Transportation, City, and County contracts. We are familiar with the typical payment cycles and fund through them."
    },
    {
      heading: "Federal contract invoices",
      body: "GSA, USACE, and federal facility services. SAM registered, prompt-payment aware."
    },
    {
      heading: "Mobilization for the next job",
      body: "Working capital sized for mobilization, material, and payroll, not just the existing receivable."
    }
  ],
  applicationHref: "/applications/cafi-az-contractor-application.pdf",
  applicationLabel: "Download Arizona contractor application (PDF)"
};

export default function Page() {
  return <StatePage content={content} />;
}
