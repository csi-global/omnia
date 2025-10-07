import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Microsoft 365 | Omnia Services",
  description: "Complete managed Microsoft 365 services including setup, migration, security, and ongoing support. Expert M365 administration to maximize productivity and collaboration.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/managed-microsoft-365"
  },
  openGraph: {
    title: "Managed Microsoft 365 | Omnia Services",
    description: "Complete managed Microsoft 365 services including setup, migration, security, and ongoing support. Expert M365 administration to maximize productivity and collaboration.",
    type: "website",
    url: "https://omniaservices.co.uk/managed-microsoft-365",
    images: ["https://omniaservices.co.uk/assets/img/service/5.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Microsoft 365 | Omnia Services",
    description: "Complete managed Microsoft 365 services including setup, migration, security, and ongoing support. Expert M365 administration to maximize productivity and collaboration.",
    images: ["https://omniaservices.co.uk/assets/img/service/5.webp"]
  }
};

export default function ManagedMicrosoft365Page() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Managed Microsoft 365</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Managed Microsoft 365</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Comprehensive Microsoft 365 Management</h2>
              <p>
                Maximize your Microsoft 365 investment with our expert managed services. We provide complete administration, security management, user support, and optimization to ensure your organization gets the most value from Microsoft 365.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/5.webp" alt="Managed Microsoft 365 Services" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our M365 Management?</h3>
                    <p>
                      Our certified Microsoft 365 experts provide comprehensive management services that enhance productivity, strengthen security, and optimize costs while ensuring your team can focus on core business activities.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Complete Administration</li>
                      <li><i className="fa-solid fa-angles-right"></i> Advanced Security Management</li>
                      <li><i className="fa-solid fa-angles-right"></i> User Training & Support</li>
                      <li><i className="fa-solid fa-angles-right"></i> License Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Managed Services */}
              <div className="row g-4 mb-5">
                <h3>Our Microsoft 365 Managed Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Tenant Administration</h3>
                      <p>
                        Complete Microsoft 365 tenant management including user provisioning, group management, license allocation, and organizational settings configuration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Security & Compliance</h3>
                      <p>
                        Comprehensive security management including Conditional Access, Data Loss Prevention, Advanced Threat Protection, and compliance reporting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Migration Services</h3>
                      <p>
                        Seamless migration from on-premises Exchange, SharePoint, and other platforms to Microsoft 365 with minimal downtime and data integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>User Support & Training</h3>
                      <p>
                        Comprehensive user support, training programs, and adoption strategies to maximize productivity and user satisfaction with Microsoft 365 tools.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Backup & Recovery</h3>
                      <p>
                        Advanced backup solutions for Microsoft 365 data including Exchange, SharePoint, OneDrive, and Teams with point-in-time recovery capabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Performance Monitoring</h3>
                      <p>
                        Continuous monitoring of Microsoft 365 services, performance metrics, and usage analytics to ensure optimal performance and identify optimization opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* M365 Applications */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Microsoft 365 Applications We Manage</h2>
                        <p>
                          Comprehensive management across the entire Microsoft 365 ecosystem to maximize productivity and collaboration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="m365-app-item text-center">
                        <div className="icon">
                          <i className="fab fa-microsoft"></i>
                        </div>
                        <h4>Office Applications</h4>
                        <p>
                          Word, Excel, PowerPoint, Outlook, and Teams management with advanced configuration and optimization.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="m365-app-item text-center">
                        <div className="icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <h4>Exchange Online</h4>
                        <p>
                          Email management, mailbox configuration, retention policies, and advanced threat protection setup.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="m365-app-item text-center">
                        <div className="icon">
                          <i className="fas fa-share-alt"></i>
                        </div>
                        <h4>SharePoint Online</h4>
                        <p>
                          Site management, document libraries, workflows, and collaboration platform optimization.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="m365-app-item text-center">
                        <div className="icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <h4>Microsoft Teams</h4>
                        <p>
                          Teams management, meeting configuration, calling plans, and collaboration feature optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Benefits */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Benefits of Managed Microsoft 365</h2>
                        <p>
                          Experience the advantages of professional Microsoft 365 management that drives productivity and reduces operational overhead.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Increased Productivity</h4>
                        <p>
                          Optimized configurations and user training lead to improved productivity and better utilization of Microsoft 365 features.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h4>Enhanced Security</h4>
                        <p>
                          Comprehensive security management protects your data and ensures compliance with industry regulations and best practices.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-dollar-sign"></i>
                        </div>
                        <h4>Cost Optimization</h4>
                        <p>
                          License optimization and usage analytics help reduce costs while ensuring you have the right Microsoft 365 plan for your needs.
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
                    <h5>Optimize Your Microsoft 365 Today</h5>
                    <p className="ecosystems">
                      Let our Microsoft 365 experts handle the complexity while your team focuses on productivity. Get started with a comprehensive M365 assessment and management plan.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get M365 Management</span>
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
