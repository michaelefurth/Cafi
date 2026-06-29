import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchemas, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "CAFI | Cash Management and Funds Control for Contractors",
    template: "%s | CAFI"
  },
  description:
    "CAFI is a cash-management and funds-control program for commercial construction and service contractors. Approved invoices become working capital in 24 to 48 hours. Not a loan, no debt on the books. 30+ years across Texas, Arizona, and New Mexico.",
  metadataBase: new URL("https://cafi-usa.com"),
  alternates: { canonical: "/" },
  keywords: [
    "construction working capital",
    "contractor cash management",
    "funds control for contractors",
    "accounts receivable financing construction",
    "subcontractor cash flow",
    "pay application financing",
    "Texas contractor financing",
    "Arizona contractor financing",
    "New Mexico contractor financing",
    "federal contractor financing",
    "SAM registered lender"
  ],
  openGraph: {
    title: "CAFI | Cash Management and Funds Control for Contractors",
    description:
      "30+ years putting Southwest contractors in control of their cash cycle. Approved invoices become working capital in 24 to 48 hours. Not a loan.",
    url: "https://cafi-usa.com",
    siteName: "CAFI",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "CAFI | Cash Management and Funds Control for Contractors",
    description:
      "Approved invoices become working capital in 24 to 48 hours. Not a loan. 30+ years across TX, AZ, NM."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap"
        />
      </head>
      <body className="bg-cream text-ink">
        <JsonLd
          id="ld-organization"
          data={[organizationSchema(), ...localBusinessSchemas(), websiteSchema()]}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-forest-deep focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
