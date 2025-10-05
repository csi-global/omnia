import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oracle Revenue Management and Billing (ORMB) | Omnia Services",
  description: "Expert Oracle Revenue Management and Billing (ORMB) services including implementation, customization, integration, and support. Streamline billing operations with proven ORMB solutions.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/ormb"
  },
  openGraph: {
    title: "Oracle Revenue Management and Billing (ORMB) | Omnia Services",
    description: "Expert Oracle Revenue Management and Billing (ORMB) services including implementation, customization, integration, and support. Streamline billing operations with proven ORMB solutions.",
    type: "website",
    url: "https://omniaservices.co.uk/ormb",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle Revenue Management and Billing (ORMB) | Omnia Services",
    description: "Expert Oracle Revenue Management and Billing (ORMB) services including implementation, customization, integration, and support. Streamline billing operations with proven ORMB solutions.",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  }
};

export default function ORMBPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Oracle Revenue Management and Billing (ORMB)</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>ORMB</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Oracle Revenue Management and Billing Solutions</h2>
              <p>
                Transform your billing operations with Oracle Revenue Management and Billing (ORMB). Our expert team delivers comprehensive ORMB implementation, customization, and support services to streamline your revenue management processes and enhance billing accuracy.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/1.webp" alt="Oracle Revenue Management and Billing" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our ORMB Services?</h3>
                    <p>
                      With deep expertise in Oracle Revenue Management and Billing, we help organizations optimize their billing processes, reduce revenue leakage, and improve customer satisfaction through automated, accurate billing solutions.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Complete Implementation Services</li>
                      <li><i className="fa-solid fa-angles-right"></i> Custom Configuration & Integration</li>
                      <li><i className="fa-solid fa-angles-right"></i> Revenue Optimization</li>
                      <li><i className="fa-solid fa-angles-right"></i> 24/7 Support & Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ORMB Services */}
              <div className="row g-4 mb-5">
                <h3>Our ORMB Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>ORMB Implementation</h3>
                      <p>
                        Complete ORMB implementation services including system design, configuration, data migration, and user training to ensure successful deployment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Billing Process Optimization</h3>
                      <p>
                        Streamline billing operations with automated workflows, rule-based pricing, and advanced billing cycle management for improved efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Revenue Recognition</h3>
                      <p>
                        Implement automated revenue recognition processes compliant with accounting standards including ASC 606 and IFRS 15 for accurate financial reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Custom Development</h3>
                      <p>
                        Tailored ORMB solutions with custom pricing models, billing rules, and integration capabilities to meet specific business requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>System Integration</h3>
                      <p>
                        Seamless integration with existing systems including CRM, ERP, and payment gateways for unified business operations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Managed Support</h3>
                      <p>
                        Comprehensive support and maintenance services including system monitoring, performance optimization, and issue resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ORMB Features */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>ORMB Key Features & Capabilities</h2>
                        <p>
                          Leverage the full power of Oracle Revenue Management and Billing with our comprehensive implementation and optimization services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="feature-item text-center">
                        <div className="icon">
                          <i className="fas fa-calculator"></i>
                        </div>
                        <h4>Flexible Pricing</h4>
                        <p>
                          Support for complex pricing models including usage-based, subscription, tiered, and promotional pricing structures.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="feature-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Revenue Recognition</h4>
                        <p>
                          Automated revenue recognition with compliance to accounting standards and flexible allocation rules.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="feature-item text-center">
                        <div className="icon">
                          <i className="fas fa-file-invoice"></i>
                        </div>
                        <h4>Invoice Generation</h4>
                        <p>
                          Automated invoice generation with customizable templates and multi-format output capabilities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="feature-item text-center">
                        <div className="icon">
                          <i className="fas fa-exchange-alt"></i>
                        </div>
                        <h4>Payment Processing</h4>
                        <p>
                          Integrated payment processing with support for multiple payment methods and automated collection workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Industry Applications */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Industry Applications</h2>
                        <p>
                          ORMB solutions tailored for various industries with specific billing and revenue management requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="industry-item text-center">
                        <div className="icon">
                          <i className="fas fa-wifi"></i>
                        </div>
                        <h4>Telecommunications</h4>
                        <p>
                          Complex billing for voice, data, and value-added services with usage-based pricing and real-time rating capabilities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="industry-item text-center">
                        <div className="icon">
                          <i className="fas fa-bolt"></i>
                        </div>
                        <h4>Utilities</h4>
                        <p>
                          Meter-based billing for electricity, gas, and water services with tiered pricing and demand-based charges.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="industry-item text-center">
                        <div className="icon">
                          <i className="fas fa-cloud"></i>
                        </div>
                        <h4>Cloud Services</h4>
                        <p>
                          Subscription and consumption-based billing for SaaS, PaaS, and IaaS offerings with automated provisioning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="row g-4 pt-4">
                <div className="col-12">
                  <div className="lcnc-banner">
                    <h5>Optimize Your Billing Operations Today</h5>
                    <p className="ecosystems">
                      Transform your revenue management and billing processes with Oracle ORMB. Our experts will help you implement a solution that reduces costs, improves accuracy, and enhances customer satisfaction.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get ORMB Solutions</span>
                        <span className="arrow-btn">
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
