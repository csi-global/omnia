import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Surface as a Service | Omnia Services",
  description: "Surface as a Service (SaaS) solutions providing Microsoft Surface devices with comprehensive management, security, and support. Flexible device-as-a-service offerings for modern workplaces.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/surface-as-a-service"
  },
  openGraph: {
    title: "Surface as a Service | Omnia Services",
    description: "Surface as a Service (SaaS) solutions providing Microsoft Surface devices with comprehensive management, security, and support. Flexible device-as-a-service offerings for modern workplaces.",
    type: "website",
    url: "https://omniaservices.co.uk/surface-as-a-service",
    images: ["https://omniaservices.co.uk/assets/img/service/5.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Surface as a Service | Omnia Services",
    description: "Surface as a Service (SaaS) solutions providing Microsoft Surface devices with comprehensive management, security, and support. Flexible device-as-a-service offerings for modern workplaces.",
    images: ["https://omniaservices.co.uk/assets/img/service/5.webp"]
  }
};

export default function SurfaceAsAServicePage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Surface as a Service</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fa-solid fa-chevron-right"></i></li>
              <li>Surface as a Service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Surface as a Service Solutions</h2>
              <p>
                Transform your workplace with Surface as a Service (SaaS) solutions that provide Microsoft Surface devices with comprehensive management, security, and support. Our flexible device-as-a-service offerings enable modern, productive work environments while reducing capital expenditure and IT complexity.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/5.webp" alt="Surface as a Service Solutions" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Surface as a Service?</h3>
                    <p>
                      Surface as a Service provides a complete device management solution that includes hardware, software, security, and support in a single, predictable monthly fee. This approach reduces upfront costs, simplifies device lifecycle management, and ensures your workforce always has the latest technology.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Predictable Monthly Costs</li>
                      <li><i className="fa-solid fa-angles-right"></i> Latest Surface Devices</li>
                      <li><i className="fa-solid fa-angles-right"></i> Comprehensive Management</li>
                      <li><i className="fa-solid fa-angles-right"></i> Full Support & Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Surface as a Service Features */}
              <div className="row g-4 mb-5">
                <h3>Our Surface as a Service Solutions</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Device Provisioning & Setup</h3>
                      <p>
                        Complete device provisioning including OS deployment, application installation, security configuration, and user setup for immediate productivity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Device Lifecycle Management</h3>
                      <p>
                        Comprehensive device lifecycle management including deployment, monitoring, maintenance, and secure disposal at end-of-life.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Security & Compliance</h3>
                      <p>
                        Advanced security management including device encryption, compliance monitoring, threat protection, and data loss prevention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Software Management</h3>
                      <p>
                        Complete software management including application deployment, updates, licensing, and compatibility management across your Surface fleet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Support & Maintenance</h3>
                      <p>
                        24/7 support and maintenance services including hardware repairs, software troubleshooting, and user assistance for uninterrupted productivity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Asset Tracking & Reporting</h3>
                      <p>
                        Comprehensive asset tracking and reporting including device inventory, usage analytics, compliance reports, and cost management insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Surface Device Portfolio */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Surface Device Portfolio</h2>
                        <p>
                          Access to the complete range of Microsoft Surface devices designed for productivity, creativity, and collaboration in modern workplaces.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="device-item text-center">
                        <div className="icon">
                          <i className="fas fa-laptop"></i>
                        </div>
                        <h4>Surface Laptop</h4>
                        <p>
                          Premium laptops designed for productivity with exceptional performance, battery life, and build quality for professional users.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="device-item text-center">
                        <div className="icon">
                          <i className="fas fa-tablet-alt"></i>
                        </div>
                        <h4>Surface Pro</h4>
                        <p>
                          Versatile 2-in-1 devices that transform from tablet to laptop, perfect for flexible workstyles and creative professionals.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="device-item text-center">
                        <div className="icon">
                          <i className="fas fa-desktop"></i>
                        </div>
                        <h4>Surface Studio</h4>
                        <p>
                          All-in-one desktop solutions with large touch displays, ideal for creative professionals and collaborative workspaces.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="device-item text-center">
                        <div className="icon">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h4>Surface Duo</h4>
                        <p>
                          Dual-screen mobile devices that enhance productivity with innovative form factors and seamless Microsoft 365 integration.
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
                        <h2>Surface as a Service Benefits</h2>
                        <p>
                          Experience the advantages of device-as-a-service that transforms how you manage and deploy technology in your organization.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-dollar-sign"></i>
                        </div>
                        <h4>Reduced Capital Expenditure</h4>
                        <p>
                          Convert large upfront device purchases into predictable monthly payments, improving cash flow and budget planning.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-sync-alt"></i>
                        </div>
                        <h4>Simplified Lifecycle Management</h4>
                        <p>
                          Automated device provisioning, updates, and disposal processes that reduce IT overhead and ensure optimal device performance.
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
                          Comprehensive security management including device encryption, compliance monitoring, and threat protection across your device fleet.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-rocket"></i>
                        </div>
                        <h4>Latest Technology</h4>
                        <p>
                          Regular device refresh cycles ensure your workforce always has access to the latest Surface technology and capabilities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-headset"></i>
                        </div>
                        <h4>Comprehensive Support</h4>
                        <p>
                          24/7 support and maintenance services including hardware repairs, software troubleshooting, and user assistance.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Scalable Solutions</h4>
                        <p>
                          Flexible solutions that scale with your business needs, allowing you to add or remove devices as your workforce changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Deployment Models */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Flexible Deployment Models</h2>
                        <p>
                          Choose the deployment model that best fits your organization&apos;s needs and infrastructure requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="deployment-model-item text-center">
                        <div className="icon">
                          <i className="fas fa-cloud"></i>
                        </div>
                        <h4>Cloud-Managed</h4>
                        <p>
                          Fully cloud-managed devices with Microsoft Intune integration for comprehensive device management and security.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="deployment-model-item text-center">
                        <div className="icon">
                          <i className="fas fa-server"></i>
                        </div>
                        <h4>Hybrid Management</h4>
                        <p>
                          Combination of cloud and on-premises management for organizations with specific compliance or security requirements.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="deployment-model-item text-center">
                        <div className="icon">
                          <i className="fas fa-building"></i>
                        </div>
                        <h4>On-Premises</h4>
                        <p>
                          Traditional on-premises management for organizations requiring full control over device management and data.
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
                    <h5>Transform Your Workplace with Surface as a Service</h5>
                    <p className="ecosystems">
                      Ready to modernize your device management strategy? Get started with Surface as a Service for predictable costs, enhanced security, and simplified device lifecycle management.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get Surface as a Service</span>
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
