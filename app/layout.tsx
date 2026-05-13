import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CAFI | Working Capital for Southwest Contractors",
    template: "%s | CAFI"
  },
  description:
    "CAFI provides working capital and short-term accounts receivable financing to commercial construction and service contractors performing on government, state, and local contracts across Texas, Arizona, and New Mexico. 30+ years on Southwest job sites.",
  metadataBase: new URL("https://cafi-usa.com"),
  openGraph: {
    title: "CAFI | Working Capital for Southwest Contractors",
    description:
      "30+ years funding commercial construction and service contractors across Texas, Arizona, and New Mexico. When banks say no, CAFI says yes.",
    type: "website"
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
