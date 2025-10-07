import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vision Plus | Omnia Services",
  description: "Vision Plus enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your Vision Plus investment.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/vision-plus"
  },
  openGraph: {
    title: "Vision Plus | Omnia Services",
    description: "Vision Plus enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your Vision Plus investment.",
    type: "website",
    url: "https://omniaservices.co.uk/vision-plus",
    images: ["https://omniaservices.co.uk/assets/img/service/2.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Plus | Omnia Services",
    description: "Vision Plus enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your Vision Plus investment.",
    images: ["https://omniaservices.co.uk/assets/img/service/2.webp"]
  }
};

export default function VisionPlusPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Vision Plus</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Vision Plus</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Vision Plus Enterprise Solutions</h2>
              <p>
                Unlock the full potential of your Vision Plus system with our comprehensive implementation, customization, and support services. Our expert team helps organizations optimize their Vision Plus investment for maximum efficiency and business value.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/2.webp" alt="Vision Plus Solutions" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our Vision Plus Services?</h3>
                    <p>
                      With extensive experience in Vision Plus implementations and customizations, we deliver solutions that align with your business processes and drive operational excellence across your organization.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Expert Implementation Services</li>
                      <li><i className="fa-solid fa-angles-right"></i> Custom Development & Integration</li>
                      <li><i className="fa-solid fa-angles-right"></i> Process Optimization</li>
                      <li><i className="fa-solid fa-angles-right"></i> Ongoing Support & Training</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vision Plus Services */}
              <div className="row g-4 mb-5">
                <h3>Our Vision Plus Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>System Implementation</h3>
                      <p>
                        Complete Vision Plus implementation including system configuration, data migration, user setup, and comprehensive testing to ensure successful deployment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Custom Development</h3>
                      <p>
                        Tailored Vision Plus solutions with custom modules, reports, and workflows designed to meet your specific business requirements and processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Integration Services</h3>
                      <p>
                        Seamless integration with existing systems including ERP, CRM, and third-party applications for unified business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Process Optimization</h3>
                      <p>
                        Analyze and optimize your business processes to maximize Vision Plus capabilities and improve operational efficiency across departments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Training & Adoption</h3>
                      <p>
                        Comprehensive user training programs and change management support to ensure successful adoption and maximum utilization of Vision Plus features.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Managed Support</h3>
                      <p>
                        24/7 support and maintenance services including system monitoring, performance optimization, and issue resolution for uninterrupted operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Plus Modules */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Vision Plus Core Modules</h2>
                        <p>
                          Comprehensive Vision Plus solutions covering all aspects of enterprise business management and operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="module-item text-center">
                        <div className="icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <h4>Human Resources</h4>
                        <p>
                          Complete HR management including employee records, payroll, benefits, and performance management.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="module-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Financial Management</h4>
                        <p>
                          Comprehensive financial management including accounting, budgeting, and financial reporting capabilities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="module-item text-center">
                        <div className="icon">
                          <i className="fas fa-boxes"></i>
                        </div>
                        <h4>Inventory Management</h4>
                        <p>
                          Advanced inventory control with real-time tracking, automated reordering, and warehouse management.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="module-item text-center">
                        <div className="icon">
                          <i className="fas fa-handshake"></i>
                        </div>
                        <h4>Customer Relations</h4>
                        <p>
                          Integrated CRM functionality for managing customer relationships, sales processes, and customer service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Implementation Process */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Our Implementation Process</h2>
                        <p>
                          A proven methodology that ensures successful Vision Plus deployment with minimal disruption to your business operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="process-item text-center">
                        <div className="icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <h4>Discovery & Analysis</h4>
                        <p>
                          Comprehensive analysis of your current systems, processes, and requirements to design the optimal Vision Plus solution.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="process-item text-center">
                        <div className="icon">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h4>Design & Configuration</h4>
                        <p>
                          System design and configuration tailored to your business needs with custom workflows and integrations.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="process-item text-center">
                        <div className="icon">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <h4>Implementation</h4>
                        <p>
                          Phased implementation with data migration, system testing, and user training for smooth deployment.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="process-item text-center">
                        <div className="icon">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <h4>Support & Optimization</h4>
                        <p>
                          Ongoing support, monitoring, and optimization to ensure continued success and maximum ROI.
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
                    <h5>Transform Your Business with Vision Plus</h5>
                    <p className="ecosystems">
                      Ready to optimize your Vision Plus investment? Our experts will help you implement a solution that streamlines operations, improves efficiency, and drives business growth.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get Vision Plus Solutions</span>
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
