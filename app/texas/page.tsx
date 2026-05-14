import type { Metadata } from "next";
import { StatePage, type StateContent } from "@/components/StatePage";
import { heroImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "CAFI Texas | Working Capital for Texas Contractors",
  description:
    "Headquartered in El Paso, CAFI has funded Texas contractors performing on Fort Bliss, Biggs Army Airfield, McGregor Range, and El Paso commercial projects for over 30 years."
};

const content: StateContent = {
  abbr: "TX",
  name: "Texas",
  eyebrow: "CAFI Texas · Headquartered in El Paso",
  heroTitle: <>30+ years funding the contractors who build Texas.</>,
  heroIntro:
    "From Fort Bliss to Biggs Army Airfield to commercial work across El Paso, CAFI has carried working capital under Texas contractors since 1992. SAM registered with the federal government for 30+ years.",
  heroImage: heroImages.texas,
  heroImageAlt: "Concrete pour on a Texas commercial job site",
  pillars: [
    { value: "30+", label: "Years headquartered in El Paso" },
    { value: "4", label: "Major federal installations served" },
    { value: "$1B+", label: "Cumulative contract value funded" },
    { value: "24-48", label: "Hours to funding after approval" }
  ],
  affiliations: [
    "Accredited member, Better Business Bureau Paso del Norte",
    "Member, Greater El Paso Chamber of Commerce",
    "Member, National Association of Women in Construction (NAWIC)",
    "SAM/CCR registered with the U.S. Federal Government for 30+ years",
    "Former Bradley Strong Guardian, 1st Battalion, 501st Aviation Regiment, Fort Bliss",
    "Active funding partner on Fort Bliss, Biggs Army Airfield, McGregor Range, and El Paso commercial work"
  ],
  topProjects: [
    {
      year: "2015 - 2021",
      title: "Fort Bliss base realignment housing",
      detail:
        "CAFI funded subcontractors who participated in the construction of new family housing under Centex Construction and Balfour Beatty Communities. Continuous mobilization across multiple phases."
    },
    {
      year: "Ongoing",
      title: "Biggs Army Airfield support contracts",
      detail:
        "Working capital advanced against approved pay applications for facility services, maintenance, and small construction contractors performing on Biggs."
    },
    {
      year: "Ongoing",
      title: "El Paso commercial build-outs",
      detail:
        "Tenant improvement, MEP, and finish trades for primes building retail, medical, and office space across El Paso and West Texas."
    },
    {
      year: "Multi-year",
      title: "McGregor Range facility services",
      detail:
        "CAFI has funded contractors performing on perimeter, range support, and facilities maintenance scopes at McGregor."
    },
    {
      year: "Ongoing",
      title: "TxDOT / municipal subcontract work",
      detail:
        "Advances against approved invoices for subs performing under prime road, drainage, and site contractors in El Paso County."
    },
    {
      year: "Ongoing",
      title: "Federal facilities services",
      detail:
        "Custodial, grounds, and trade contractors performing on federal service contracts across the El Paso region."
    }
  ],
  resume: [
    { client: "Centex Construction", scope: "Subcontractor working capital, Fort Bliss housing phases" },
    { client: "Balfour Beatty Communities", scope: "Subcontractor financing, base realignment housing" },
    { client: "U.S. Army Corps of Engineers primes", scope: "AR advances under approved pay applications" },
    { client: "TxDOT prime contractors", scope: "Subcontract receivables on highway and drainage" },
    { client: "City of El Paso prime contractors", scope: "Municipal facility and site subcontracts" },
    { client: "El Paso commercial GCs", scope: "MEP, finish trade, and TI subcontract financing" }
  ],
  testimonials: [
    {
      quote:
        "We had three jobs running and the bank wanted financials we did not have time to assemble. CAFI funded against the pay app the same week.",
      attribution: "Subcontractor · Fort Bliss housing"
    },
    {
      quote:
        "CAFI understands what retainage actually means on a job. They funded around it without making us beg.",
      attribution: "MEP contractor · El Paso"
    }
  ],
  lending: [
    {
      heading: "Approved pay applications",
      body: "CAFI advances against schedule of values pay applications signed off by your prime or owner. Standard AIA G702 / G703 paperwork or equivalent. We do the diligence on the receivable, not on your balance sheet."
    },
    {
      heading: "Open invoices on federal contracts",
      body: "Invoices billed to federal primes or directly under government task orders. CAFI is SAM registered and understands DCAA and prompt payment realities."
    },
    {
      heading: "State and municipal receivables",
      body: "TxDOT, City of El Paso, and county prime receivables. We know the typical 30 to 60 day cycle and fund through it."
    },
    {
      heading: "Mobilization and payroll",
      body: "Advances sized to cover mobilization, material, and payroll on the next phase, not just the receivable on the desk."
    }
  ],
  applicationHref: "/applications/cafi-tx-contractor-application.pdf",
  applicationLabel: "Download Texas contractor application (PDF)"
};

export default function Page() {
  return <StatePage content={content} />;
}
