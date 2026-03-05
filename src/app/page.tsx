import type { Metadata } from "next";
import HomePageClient from "@/components/home-page-client";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Omnia Services | Cloud Consulting, AI Engineering & Digital Transformation UK",
  description: "Omnia Services delivers cloud migration, AI engineering, digital transformation, and managed services for UK enterprises. 10+ years of trusted expertise in Leeds and across the UK.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.omniaservices.co.uk",
  },
  openGraph: {
    title: "Omnia Services | Cloud Consulting, AI Engineering & Digital Transformation UK",
    description: "Cloud migration, AI engineering, digital transformation, and managed services for UK enterprises. Trusted by businesses for over a decade.",
    type: "website",
    url: "https://www.omniaservices.co.uk",
    siteName: "Omnia Services",
    locale: "en_GB",
    images: [
      {
        url: "https://www.omniaservices.co.uk/assets/img/hero/hero-slider-1.webp",
        width: 1200,
        height: 630,
        alt: "Omnia Services - Cloud Consulting and AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnia Services | Cloud Consulting, AI Engineering & Digital Transformation UK",
    description: "Cloud migration, AI engineering, digital transformation, and managed services for UK enterprises.",
    images: ["https://www.omniaservices.co.uk/assets/img/hero/hero-slider-1.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Omnia Services",
          url: "https://www.omniaservices.co.uk",
          logo: "https://www.omniaservices.co.uk/assets/img/logo/black-logo.webp",
          description: "Cloud consulting, AI engineering, digital transformation, and managed services for UK enterprises.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Leeds",
            addressRegion: "West Yorkshire",
            addressCountry: "GB",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+44-1133-662035",
            email: "info@omniaservices.co.uk",
            contactType: "customer service",
            areaServed: "GB",
            availableLanguage: "English",
          },
          sameAs: [],
        })}
      </Script>
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Omnia Services",
          url: "https://www.omniaservices.co.uk",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.omniaservices.co.uk/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
    </>
  );
}
