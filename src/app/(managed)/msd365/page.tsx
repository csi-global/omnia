import OmniaSection from '@/components/ui/omnia-section';
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MSD365 | Omnia Services",
  description: "MSD365 enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your MSD365 investment and streamline operations.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/msd365"
  },
  openGraph: {
    title: "MSD365 | Omnia Services",
    description: "MSD365 enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your MSD365 investment and streamline operations.",
    type: "website",
    url: "https://omniaservices.co.uk/msd365",
    images: ["https://omniaservices.co.uk/assets/img/service/4.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "MSD365 | Omnia Services",
    description: "MSD365 enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your MSD365 investment and streamline operations.",
    images: ["https://omniaservices.co.uk/assets/img/service/4.webp"]
  }
};

export default function MSD365Page() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>MSD365</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>MSD365</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <OmniaSection>
        <div className="sertvice-details-wrapper">
          <div className="service-details-content">
            <h2>MSD365 Enterprise Solutions</h2>
            <p>
              Unlock the full potential of your MSD365 system with our comprehensive implementation, customization, and support services. Our expert team helps organizations optimize their MSD365 investment for maximum efficiency, productivity, and business value.
            </p>

            <div className="row g-4 pt-4 pb-5 align-items-center">
              <div className="col-md-6">
                <div className="thumb">
                  <Image src="/assets/img/service/4.webp" alt="MSD365 Solutions" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="list-wrapper">
                  <h3>Why Choose Our MSD365 Services?</h3>
                  <p>
                    With extensive experience in MSD365 implementations and customizations, we deliver solutions that align with your business processes and drive operational excellence across your organization.
                  </p>
                  <ul className="list-items">
                    <li><i className="fa-solid fa-angles-right"></i> Complete Implementation Services</li>
                    <li><i className="fa-solid fa-angles-right"></i> Custom Development & Integration</li>
                    <li><i className="fa-solid fa-angles-right"></i> Process Optimization</li>
                    <li><i className="fa-solid fa-angles-right"></i> Comprehensive Support & Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* MSD365 Services */}
      <OmniaSection>
        <div className="row g-4 mb-5">
          <h3>Our MSD365 Services</h3>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>System Implementation</h3>
                <p>
                  Complete MSD365 implementation including system configuration, data migration, user setup, and comprehensive testing to ensure successful deployment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>Custom Development</h3>
                <p>
                  Tailored MSD365 solutions with custom modules, workflows, and integrations designed to meet your specific business requirements and processes.
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
      </OmniaSection>

      <OmniaSection>
        <div className="row g-4 mb-5">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>Data Migration & Management</h3>
                <p>
                  Secure and efficient data migration from legacy systems with comprehensive data validation and integrity checks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>User Training & Adoption</h3>
                <p>
                  Comprehensive user training programs and change management support to ensure successful adoption and maximum utilization of MSD365 features.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>Ongoing Support</h3>
                <p>
                  24/7 support and maintenance services including system monitoring, performance optimization, and issue resolution for uninterrupted operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* MSD365 Modules */}
      <OmniaSection className="bg-light">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>MSD365 Core Modules</h2>
              <p>
                Comprehensive MSD365 solutions covering all aspects of enterprise business management and operations.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          <div className="col-lg-3 col-md-6">
            <div className="module-item text-center">
              <div className="icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <h4>Human Capital Management</h4>
              <p>
                Complete HR management including employee lifecycle, performance management, and workforce analytics.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="module-item text-center">
              <div className="icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h4>Financial Management</h4>
              <p>
                Comprehensive financial management including accounting, budgeting, forecasting, and financial reporting.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="module-item text-center">
              <div className="icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h4>Supply Chain Management</h4>
              <p>
                End-to-end supply chain management including procurement, inventory, and logistics optimization.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="module-item text-center">
              <div className="icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Customer Relationship Management</h4>
              <p>
                Integrated CRM functionality for managing customer relationships, sales processes, and customer service.
              </p>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* Implementation Benefits */}
      <OmniaSection>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>MSD365 Implementation Benefits</h2>
              <p>
                Transform your business operations with MSD365 and experience significant improvements in efficiency, visibility, and decision-making.
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
              <h4>Improved Efficiency</h4>
              <p>
                Streamlined processes and automated workflows that reduce manual effort and improve operational efficiency across all departments.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="benefit-item text-center">
              <div className="icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>Enhanced Visibility</h4>
              <p>
                Real-time dashboards and reporting capabilities that provide comprehensive visibility into business operations and performance.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="benefit-item text-center">
              <div className="icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Better Decision Making</h4>
              <p>
                Advanced analytics and business intelligence tools that provide actionable insights for informed decision-making.
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
                Robust security features and compliance capabilities that protect your data and ensure regulatory compliance.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="benefit-item text-center">
              <div className="icon">
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h4>Scalability</h4>
              <p>
                Flexible and scalable platform that grows with your business and adapts to changing requirements and market conditions.
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
                Reduced operational costs through process automation, improved resource utilization, and elimination of redundant systems.
              </p>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* CTA Section */}
      <div className="row g-4 pt-4">
        <div className="col-12">
          <div className="lcnc-banner">
            <h5>Transform Your Business with MSD365</h5>
            <p className="ecosystems">
              Ready to optimize your business operations with MSD365? Our experts will help you implement a solution that streamlines processes, improves efficiency, and drives sustainable growth.
            </p>
            <div className="main-button mt-3">
              <Link href="/contact">
                <span className="theme-btn">Get MSD365 Solutions</span>
                <span className="arrow-btn">
                  <i className="icon-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
