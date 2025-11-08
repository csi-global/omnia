import LeafletWorldMap from "@/components/leaflet-world-map";
import ServiceSelect from "@/components/service-select";
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Omnia Services",
  description: "Get in touch with Omnia Services for cloud consulting, IT automation, and digital transformation solutions. Located in Leeds, UK. Call +44-1133 662035 or email info@omniaservices.co.uk",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.omniaservices.co.uk/contact"
  },
  openGraph: {
    title: "Contact Us | Omnia Services",
    description: "Get in touch with Omnia Services for cloud consulting, IT automation, and digital transformation solutions. Located in Leeds, UK. Call +44-1133 662035 or email info@omniaservices.co.uk",
    type: "website",
    url: "https://www.omniaservices.co.uk/contact",
    images: ["https://www.omniaservices.co.uk/assets/img/contact/contact-2.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Omnia Services",
    description: "Get in touch with Omnia Services for cloud consulting, IT automation, and digital transformation solutions. Located in Leeds, UK. Call +44-1133 662035 or email info@omniaservices.co.uk",
    images: ["https://www.omniaservices.co.uk/assets/img/contact/contact-2.webp"]
  }
};

// This page must be dynamic so it can render different content per request
export const dynamic = 'force-dynamic';

type SearchParams = {
  success?: string;
  error?: string;
  cc?: string; // optional override e.g. ?cc=in for testing
  site?: string; // optional site override e.g. ?site=in|uk when on localhost
};

export default async function ContactPage({
  searchParams
}: { searchParams?: Promise<SearchParams> }) {
  const sp = await searchParams;
  const success = sp?.success;
  const error = sp?.error;
  const countryOverride = sp?.cc || undefined;
  const siteOverride = sp?.site || undefined;

  // Determine visitor country (best-effort). Supports multiple providers and a manual override.
  const headersList = await headers();
  const countryHeader =
    headersList.get('x-vercel-ip-country') ||
    headersList.get('x-vercel-ip-country-code') ||
    headersList.get('cf-ipcountry') ||
    headersList.get('x-geo-country') ||
    undefined;
  const hostHeader = headersList.get('host') || '';
  const isLocalhost = hostHeader.includes('localhost') || hostHeader.startsWith('127.');

  // Determine which site's content we should render (domain wins)
  let siteIsIndia: boolean;
  if (siteOverride?.toLowerCase() === 'in' || siteOverride?.toLowerCase() === 'india') {
    siteIsIndia = true;
  } else if (siteOverride?.toLowerCase() === 'uk') {
    siteIsIndia = false;
  } else if (hostHeader.includes('omniaservices.in')) {
    siteIsIndia = true;
  } else if (hostHeader.includes('omniaservices.co.uk')) {
    siteIsIndia = false;
  } else {
    // Localhost or unknown host → default to UK, can be overridden with ?site=in
    siteIsIndia = false;
  }

  const isIndiaVisitor = (() => {
    const normalizedOverride = countryOverride?.toLowerCase();
    if (normalizedOverride === 'in' || normalizedOverride === 'india') return true;
    if (countryHeader?.toUpperCase() === 'IN') return true;
    // Local development: default to India when geo headers are absent
    if (!countryHeader && isLocalhost) return true;
    return false;
  })();

  // Content selection logic is now handled by the ContactAddressSection component

  // If the visitor's country suggests the other site, show a suggestion banner
  const showIndiaSuggestion = !siteIsIndia && isIndiaVisitor;
  const showUKSuggestion = siteIsIndia && !isIndiaVisitor && !!countryHeader; // only when we know they're not IN
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Contact</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Leaflet Map with Street-Level Zoom */}
      <LeafletWorldMap />

      {/* Contact Form Section */}
      <section className="contact-section-12 fix section-padding">
        <div className="container">
          <div className="contact-wrapper-12">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="contact-box">
                  <div className="section-title mb-0">
                    <h2>Get In Touch</h2>
                  </div>
                  {success && (
                    <div className="mt-3 mb-3" role="status" aria-live="polite">
                      <div className="p-3 rounded" style={{ background: '#e7f7ee', color: '#0f5132', border: '1px solid #badbcc' }}>
                        Thank you! Your message has been sent.
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="mt-3 mb-3" role="status" aria-live="polite">
                      <div className="p-3 rounded" style={{ background: '#fde6e6', color: '#842029', border: '1px solid #f5c2c7' }}>
                        Oops! We couldn&apos;t send your message. Please try again.
                      </div>
                    </div>
                  )}
                  <form action="/api/contact" method="POST" className="contact-form-items">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <div className="form">
                            <ServiceSelect />
                          </div>
                        </div>
                      </div>
                      {/* Honeypot field */}
                      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden>
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" id="company" tabIndex={-1} autoComplete="off" />
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            rows={6}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <button type="submit" className="theme-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Business Hours</h2>
                <p>We&apos;re here to help you during these hours</p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="business-hours-item text-center">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Monday - Friday</h4>
                <p>9:00 AM - 6:00 PM (GMT)</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="business-hours-item text-center">
                <div className="icon">
                  <i className="fas fa-calendar"></i>
                </div>
                <h4>Saturday</h4>
                <p>10:00 AM - 4:00 PM (GMT)</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="business-hours-item text-center">
                <div className="icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>Emergency Support</h4>
                <p>24/7 for critical issues</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Geo suggestion banners moved to bottom to avoid header overlap */}
      {showIndiaSuggestion && (
        <div className="container" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <div className="p-3 rounded" style={{ background: '#fff3cd', color: '#664d03', border: '1px solid #ffecb5' }}>
            Looking for our India contact page?&nbsp;
            <a href="https://omniaservices.in/contact" className="text-decoration-underline">Go to omniaservices.in/contact</a>
          </div>
        </div>
      )}
      {showUKSuggestion && (
        <div className="container" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <div className="p-3 rounded" style={{ background: '#fff3cd', color: '#664d03', border: '1px solid #ffecb5' }}>
            Looking for our UK contact page?&nbsp;
            <a href="https://omniaservices.co.uk/contact" className="text-decoration-underline">Go to omniaservices.co.uk/contact</a>
          </div>
        </div>
      )}
    </div>
  );
}
