import ServiceSelect from "@/components/ServiceSelect";
import type { Metadata } from 'next';
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

type SearchParams = {
  success?: string;
  error?: string;
};

export default async function ContactPage({
  searchParams
}: { searchParams?: Promise<SearchParams> }) {
  const sp = await searchParams;
  const success = sp?.success;
  const error = sp?.error;
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
                              2 Wellington Place, Leeds, West Yorkshire, LS1 4AP, United Kingdom
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
                              <a href="tel:+44-1133 662035">+44-1133 662035</a>
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
                              <a href="mailto:info@omniaservices.co.uk">
                                info@omniaservices.co.uk
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="google-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6521402945023!2d-1.561486923383253!3d53.795678572423064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ea3c379aaab%3A0x1cc60b78e62d14d4!2sRegus%20House%2C%202%20Wellington%20Pl%2C%20Leeds%20LS1%204AP%2C%20UK!5e0!3m2!1sen!2sin!4v1749285652748!5m2!1sen!2sin"
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
