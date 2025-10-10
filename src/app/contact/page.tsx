import ServiceSelect from "@/components/service-select";
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Omnia Services",
  description: "Get in touch with Omnia Services for cloud consulting, IT automation, and digital transformation solutions. Located in Leeds, UK. Call +44-1133 662035 or email info@omniaservices.co.uk",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/contact"
  },
  openGraph: {
    title: "Contact Us | Omnia Services",
    description: "Get in touch with Omnia Services for cloud consulting, IT automation, and digital transformation solutions. Located in Leeds, UK. Call +44-1133 662035 or email info@omniaservices.co.uk",
    type: "website",
    url: "https://omniaservices.co.uk/contact",
    images: ["https://omniaservices.co.uk/assets/img/contact/contact-2.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Omnia Services",
    description: "Get in touch with Omnia Services for cloud consulting, IT automation, and digital transformation solutions. Located in Leeds, UK. Call +44-1133 662035 or email info@omniaservices.co.uk",
    images: ["https://omniaservices.co.uk/assets/img/contact/contact-2.webp"]
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

  const UK_CONTENT = {
    address: '2 Wellington Place, Leeds, West Yorkshire, LS1 4AP, United Kingdom',
    phoneDisplay: '+44-1133 662035',
    phoneHref: 'tel:+441133662035',
    email: 'info@omniaservices.co.uk',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6521402945023!2d-1.561486923383253!3d53.795678572423064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ea3c379aaab%3A0x1cc60b78e62d14d4!2sRegus%20House%2C%202%20Wellington%20Pl%2C%20Leeds%20LS1%204AP%2C%20UK!5e0!3m2!1sen!2sin!4v1749285652748!5m2!1sen!2sin'
  } as const;

  const IN_CONTENT = {
    address:
      'Omnia IT Services Pvt Ltd, 6th floor, GMR Aero Tower 2, International Airport, Shamshabad, Aerocity, Hyderabad, Telangana 500108, India',
    phoneDisplay: '+91 4069753002',
    phoneHref: 'tel:+914069753002',
    email: 'info@omniaservices.in',
    mapSrc:
      'https://www.google.com/maps?q=GMR%20Aero%20Tower%202%2C%20Aerocity%2C%20Hyderabad%20500%20108&output=embed'
  } as const;

  const content = siteIsIndia ? IN_CONTENT : UK_CONTENT;

  // If the visitor's country suggests the other site, show a suggestion banner
  const showIndiaSuggestion = !siteIsIndia && isIndiaVisitor;
  const showUKSuggestion = siteIsIndia && !isIndiaVisitor && !!countryHeader; // only when we know they're not IN
  return (
    <div>
      {showIndiaSuggestion && (
        <div className="container" style={{ paddingTop: '16px' }}>
          <div className="p-3 rounded" style={{ background: '#fff3cd', color: '#664d03', border: '1px solid #ffecb5' }}>
            Looking for our India contact page?&nbsp;
            <a href="https://omniaservices.in/contact" className="text-decoration-underline">Go to omniaservices.in/contact</a>
          </div>
        </div>
      )}
      {showUKSuggestion && (
        <div className="container" style={{ paddingTop: '16px' }}>
          <div className="p-3 rounded" style={{ background: '#fff3cd', color: '#664d03', border: '1px solid #ffecb5' }}>
            Looking for our UK contact page?&nbsp;
            <a href="https://omniaservices.co.uk/contact" className="text-decoration-underline">Go to omniaservices.co.uk/contact</a>
          </div>
        </div>
      )}
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

      {/* Contact Information Section */}
      <section className="contact-section-12 fix section-padding">
        <div className="container">
          <div className="contact-wrapper-12">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="contact-left-items">
                  <div className="section-title mb-0">
                    <h2>Contact Us</h2>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-md-6">
                      <div className="contact-area">
                        <div className="contact-item">
                          <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <h5>Address</h5>
                          </div>
                          <div className="content">
                            <h6>
                              {content.address}
                            </h6>
                          </div>
                        </div>
                        <br />
                        <div className="contact-item">
                          <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                            <h5>Number</h5>
                          </div>
                          <div className="content">
                            <h6>
                              <a href={content.phoneHref}>{content.phoneDisplay}</a>
                            </h6>
                          </div>
                        </div>

                        <div className="contact-item mb-0">
                          <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                            <h5>E-mail</h5>
                          </div>
                          <div className="content">
                            <h6>
                              <a href={`mailto:${content.email}`}>{content.email}</a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="google-map">
                        <iframe
                          src={content.mapSrc}
                          width="600"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Omnia Services Location"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
