import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Omnia Services",
  description: "A cloud consulting company focused on IT automation and digital transformation for businesses. With over a decade's expertise, we leverage technology and innovation to build trust and foster long-lasting relationships.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/about"
  },
  openGraph: {
    title: "About Us | Omnia Services",
    description: "A cloud consulting company focused on IT automation and digital transformation for businesses. With over a decade's expertise, we leverage technology and innovation to build trust and foster long-lasting relationships.",
    type: "website",
    url: "https://omniaservices.co.uk/about",
    images: ["https://omniaservices.co.uk/assets/img/about/about-11.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Omnia Services",
    description: "A cloud consulting company focused on IT automation and digital transformation for businesses. With over a decade's expertise, we leverage technology and innovation to build trust and foster long-lasting relationships.",
    images: ["https://omniaservices.co.uk/assets/img/about/about-11.webp"]
  }
};

export default function AboutPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>About Us</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section section-padding pb-0 fix">
        <div className="container">
          <div className="about-wrapper-11">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h2>Welcome To Omnia</h2>
                  </div>
                  <p className="mt-3 mt-md-0">
                    A cloud consulting company which focuses on IT automation and bringing about digital transformation for businesses. With over a decade&apos;s expertise, we believe in leveraging technology and innovation to build trust and foster long-lasting relationships with our customers.
                  </p>

                  <div className="about-icon-items">
                    <div className="icon-items">
                      <div className="icon">
                        <img src="/assets/img/about/about-icon-2.webp" alt="Vision icon" />
                      </div>
                      <div className="content">
                        <h4>Vision</h4>
                        <p>
                          IT automation and bringing about digital transformation for businesses.
                        </p>
                      </div>
                    </div>
                    <div className="icon-items">
                      <div className="icon">
                        <img src="/assets/img/about/about-icon-3.webp" alt="Mission icon" />
                      </div>
                      <div className="content">
                        <h4>Mission</h4>
                        <p>
                          Get set to strengthen your IT backbone and fuel business innovation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="about-author">
                    <div className="main-button">
                      <Link href="/contact">
                        <span className="theme-btn">Contact Us</span>
                        <span className="arrow-btn">
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-image-items">
                  <div
                    className="about-image-1 bg-cover"
                    style={{ backgroundImage: "url('/assets/img/about/about-11.webp')" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Our Core Values</h2>
                <p>
                  We are committed to delivering exceptional value through our core principles that guide every project and client interaction.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="content">
                  <h4>Innovation</h4>
                  <p>
                    We continuously embrace cutting-edge technologies and innovative solutions to drive digital transformation and business growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="content">
                  <h4>Trust & Reliability</h4>
                  <p>
                    Building long-lasting relationships through transparent communication, reliable delivery, and consistent results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="content">
                  <h4>Excellence</h4>
                  <p>
                    Delivering superior quality solutions with attention to detail, best practices, and continuous improvement in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Why Choose Omnia Services?</h2>
                <p>
                  With over a decade of experience in cloud consulting and IT automation, we bring expertise, reliability, and innovation to every project.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4>Cloud Expertise</h4>
                <p>Deep knowledge of AWS, Azure, and Google Cloud platforms with proven migration and optimization strategies.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Security First</h4>
                <p>Comprehensive cyber security solutions and compliance frameworks to protect your business assets and data.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Digital Transformation</h4>
                <p>End-to-end digital transformation services using low-code/no-code platforms and automation technologies.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock managed services and support to ensure your systems run smoothly and efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
