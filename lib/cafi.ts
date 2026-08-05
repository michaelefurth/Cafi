/**
 * Single source of truth for CAFI positioning, credentials, audiences, FAQs,
 * and structured-data facts. Drawn from the internal Marketer Training Brief.
 *
 * Update this module to update the site. Page files render from these constants
 * so positioning stays consistent across every surface and across AEO structured
 * data.
 */

export const CAFI = {
  legalName: "Capital Active Funding, Inc.",
  brandName: "CAFI",
  domain: "cafi-usa.com",
  url: "https://cafi-usa.com",
  emailDomain: "cafiusa.com",
  yearsInBusiness: 30,
  yearFounded: 1995
} as const;

/** The line. The whole brand collapses into this. */
export const positioning = {
  badge: "Cash management and funds control for contractors",
  oneLiner: "Control is the product. Funding is the feature.",
  oneSentence:
    "CAFI puts contractors in control of their cash cycle. Approved invoices become working capital in 24 to 48 hours. Not a loan. No debt on the books.",
  notWeAre:
    "CAFI is not a bank, not a factoring company, and not a quick-cash lender. CAFI is a construction-specific financial partner that gives contractors full control over their cash cycle, so payroll clears, materials move, and jobs don't slow down waiting on a check that's already been earned.",
  whatItIsNot: "Not a bank loan. No debt, no credit impact, no complex covenants.",
  whatItCostsThem:
    "A small fee out of the invoice when it pays. No upfront cost. No annual fees. No long-term lock-in contracts. Cancel anytime with no penalty.",
  theFrame: "Control over timing. Not selling invoices, not borrowing."
} as const;

/** Credibility block, lifted verbatim from the Field Reference Card. */
export const credentials = [
  { value: "30+", label: "Years exclusively in construction" },
  { value: "$1B+", label: "Funded across all programs" },
  { value: "50,000+", label: "Invoices processed" },
  { value: "99%+", label: "Collected" },
  { value: "1 to 2", label: "Business day approval" },
  { value: "24 to 48", label: "Hours to funding" }
] as const;

export const projectsList = [
  "Fort Bliss ($40M+)",
  "Cowboys Stadium",
  "Marlins Stadium",
  "VA hospitals",
  "3,600+ homes on base realignment work"
] as const;

export const accreditations = [
  "SAM registered with the U.S. Federal Government",
  "Commitment letters accepted by federal agencies",
  "BBB accredited in Arizona and Texas",
  "Member, National Association of Women in Construction (NAWIC)",
  "Member, American Subcontractors Association of Arizona (ASA)",
  "Member, Associated Minority Contractors of Arizona (AMCA)",
  "Banking partner of the ASBA SCALE program",
  "Member, Greater Phoenix Chamber of Commerce",
  "Member, Greater El Paso Chamber of Commerce",
  "Accredited member, BBB Paso del Norte"
] as const;

/** Four contractor types CAFI serves. Pain point and CAFI's angle. */
export const audiences = [
  {
    role: "Subcontractor",
    pain: "GC and owner pay cycles squeeze cash.",
    angle: "Invoice-backed working capital. Approved invoices fund in 24 to 48 hours."
  },
  {
    role: "General Contractor",
    pain: "Underfunded subs slow your jobs and create risk.",
    angle:
      "CAFI Project Assurance keeps your subs funded and compliant on your jobs, at zero cost to you."
  },
  {
    role: "Supplier",
    pain: "Extended payment terms erode margin.",
    angle: "Invoice-backed working capital so margin stays where it belongs."
  },
  {
    role: "Federal / Government Contractor",
    pain: "Pay applications and retainage delay everything.",
    angle:
      "SAM registered. Funding Availability letters and commitment letters accepted by federal agencies."
  }
] as const;

/** What the contractor actually gets. */
export const whatYouGet = [
  "Control over when approved invoices convert to cash",
  "Control over up to ~80% of each approved invoice, on your timeline",
  "Funds deposited in 24 to 48 hours",
  "Simple 2-page application",
  "No financial statements required",
  "No tax returns required",
  "No annual fees, no long-term lock-in contracts",
  "Cancel anytime with no penalty"
] as const;

/**
 * CAFI Project Assurance. A funds-control product aimed at general contractors,
 * distinct from the sub-facing working-capital advance. Drawn from the brief's
 * GC Outreach section.
 */
export const projectAssurance = {
  name: "CAFI Project Assurance",
  tagline: "Funded, compliant subs. Clean draws. Zero cost to the GC.",
  summary:
    "Project Assurance is a funds-control program that keeps your subcontractors funded and compliant on your jobs, at zero cost to you. CAFI manages the disbursement flow, packages the lien-waiver compliance, and funds your subs against approved invoices in 24 to 48 hours. Your terms, your process, your books. Nothing changes on your end.",
  stat: {
    value: "82%",
    label: "of subcontractor failures are cash-related"
  },
  problem: [
    "When a sub runs out of cash between pay apps, they slow down on your job.",
    "They start taking side work to cover payroll.",
    "They come to you asking for advances, and you become the banker."
  ],
  benefits: [
    {
      h: "Subs funded in 24 to 48 hours",
      p: "Your subs get funded on approved invoices, so cash never stalls a phase of your job."
    },
    {
      h: "Early-payment requests stop",
      p: "You stop fielding advance requests from cash-strapped subs. CAFI carries that timing gap."
    },
    {
      h: "Lien-waiver compliance packaged",
      p: "Compliance documentation is delivered to your office and draws stay clean. No draw kicked back over a sub's missing paperwork."
    },
    {
      h: "Zero liability, zero cost",
      p: "Your payment terms do not change. Your process does not change. No debt, nothing touches your books. Zero cost on your end."
    },
    {
      h: "You become the preferred GC",
      p: "Word gets around that you run clean, funded jobs. You attract and keep the best subs in the market."
    }
  ]
} as const;

/** Best-fit signals from the qualification framework. */
export const fitSignals = [
  "Public-work subs and GCs running $50K+ invoices",
  "Pay cycles between 30 and 90 days",
  "Subs asking to get paid early between pay apps",
  "GC slow to release pay applications",
  "Retainage holding up cash",
  "Starting a big job and needing to mobilize fast",
  "Bank line is not big enough or flexible enough"
] as const;

export const notFitSignals = [
  "Purely private residential work with fast owner payments",
  "No active invoices",
  "Invoice size under $10K"
] as const;

/**
 * FAQ items lifted from the brief's objection handlers and discovery questions.
 * These power both the FAQ page UI and the FAQPage JSON-LD for AEO.
 *
 * Em dashes from the brief are converted to commas/periods per CAFI's voice rules.
 */
export type FAQ = { q: string; a: string };

export const faqs: { category: string; items: FAQ[] }[] = [
  {
    category: "What CAFI actually is",
    items: [
      {
        q: "What is CAFI?",
        a: "CAFI is a cash-management and funds-control program built for commercial construction and service contractors. Approved invoices become working capital in 24 to 48 hours, with no debt on the books. Control is the product. Funding is the feature."
      },
      {
        q: "Is CAFI a bank or a lender?",
        a: "No. CAFI is not a bank, not a factoring company, and not a quick-cash lender. CAFI is a construction-specific financial partner that gives contractors full control over their cash cycle."
      },
      {
        q: "Is this a loan?",
        a: "No. There is no debt on the books, no credit impact, and no complex covenants. CAFI advances funds against approved invoices and pay applications. The frame is control over timing, not borrowing."
      },
      {
        q: "How is CAFI different from factoring?",
        a: "Factoring sells invoices outright and changes how your customer pays. CAFI puts you in control of when approved invoices convert to cash without selling the invoice, without changing your billing process, and without touching your books."
      },
      {
        q: "Does CAFI affect my line of credit?",
        a: "No. CAFI is a different layer. Most CAFI clients keep their bank line. CAFI is faster, more flexible, and does not affect your credit line."
      }
    ]
  },
  {
    category: "How it works",
    items: [
      {
        q: "How fast can I get funded?",
        a: "Approval in 1 to 2 business days. Funds deposited in 24 to 48 hours of approval. Future invoices can be funded on a recurring basis with no new application."
      },
      {
        q: "What does the application look like?",
        a: "Two pages. Plain English. No financial statements required, no tax returns required. The kind of application a project manager can complete from the truck."
      },
      {
        q: "What does CAFI advance against?",
        a: "Approved pay applications (AIA G702 / G703 or equivalent), open invoices on government, state, and local contracts, and commercial receivables billed to credit-worthy primes or owners. CAFI advances up to roughly 80% of each approved invoice."
      },
      {
        q: "What does it cost?",
        a: "A small fee out of the invoice when it pays. No upfront cost. No annual fees. No long-term lock-in contracts. Cancel anytime with no penalty."
      },
      {
        q: "Do I have to use CAFI on every invoice?",
        a: "No. Pick the invoices and the timing that work for you. CAFI is built around control over when cash arrives, not a blanket assignment of every receivable."
      }
    ]
  },
  {
    category: "Who CAFI is for",
    items: [
      {
        q: "Who is CAFI for?",
        a: "Subcontractors, general contractors, suppliers, and federal or government contractors performing on public work with $50K+ invoices and 30 to 90 day pay cycles. Especially strong fit for minority-owned, veteran-owned, women-owned, Native American-owned, and DBE contractors."
      },
      {
        q: "What is CAFI Project Assurance?",
        a: "Project Assurance is a funds-control program for general contractors. CAFI keeps your subcontractors funded and compliant on your jobs at zero cost to you. CAFI manages the disbursement flow, packages lien-waiver compliance so draws stay clean, and funds your subs in 24 to 48 hours on approved invoices. Your terms and process do not change, and nothing touches your books."
      },
      {
        q: "I am a general contractor. Why would I bring CAFI to my subs?",
        a: "CAFI Project Assurance keeps your subs funded and compliant on your jobs at zero cost to you. Subs get funded in 24 to 48 hours, early-payment requests stop hitting your inbox, lien-waiver compliance is packaged for your draws, and you become the GC funded subs want to work with. 82% of subcontractor failures are cash-related, so a funded sub is a lower schedule risk."
      },
      {
        q: "We already pay our subs on time. Why do we need this?",
        a: "Even at net-30, subs still have payroll and materials due before the check lands. CAFI bridges that gap at zero cost to you. The subs that complain least are usually the ones already stretched thinnest."
      },
      {
        q: "We have a line of credit. Why CAFI?",
        a: "Most CAFI clients have a bank line. CAFI is a different layer. Faster, more flexible, doesn't affect the credit line, and there when the job is bigger than the line will cover."
      },
      {
        q: "I do private commercial work. Does CAFI still fit?",
        a: "Yes, when the invoices are billed to credit-worthy commercial primes or owners. CAFI is strongest on public and federal work but also funds qualified commercial receivables."
      }
    ]
  },
  {
    category: "Track record and trust",
    items: [
      {
        q: "How long has CAFI been doing this?",
        a: "30+ years. Exclusively in construction. CAFI has processed over 50,000 invoices, funded more than $1 billion across all programs, and collected 99%+."
      },
      {
        q: "What kind of projects has CAFI funded?",
        a: "Fort Bliss base realignment housing ($40M+), Cowboys Stadium, Marlins Stadium, VA hospitals, and over 3,600 new homes built under Centex Construction and Balfour Beatty Communities on base realignment projects at Fort Bliss, Holloman, Biggs Army Airfield, and White Sands."
      },
      {
        q: "Is CAFI registered to work on federal contracts?",
        a: "Yes. CAFI has been SAM/CCR registered with the U.S. Federal Government for over 30 years. Commitment letters and Funding Availability letters are accepted by federal agencies."
      },
      {
        q: "Where is CAFI located?",
        a: "Headquartered in El Paso, Texas at 6044 Gateway Blvd E, Suite 544. CAFI Arizona is at 8260 E Raintree Drive, Scottsdale, AZ 85260."
      },
      {
        q: "How do I reach CAFI?",
        a: "Call 915.772.6333 (El Paso) or 888.686.2234 (toll free). For Arizona, ask for Dennis. For government contractor work, ask for Priscilla. Se Habla Español."
      }
    ]
  }
];

/** Flatten for FAQPage JSON-LD. */
export function allFaqs(): FAQ[] {
  return faqs.flatMap((g) => g.items);
}
