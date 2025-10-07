import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Cloud Desk | Omnia Services",
  description: "Professional managed cloud desk services providing 24/7 support, monitoring, and management of your cloud infrastructure. Expert cloud operations to ensure optimal performance and reliability.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/managed-cloud-desk"
  },
  openGraph: {
    title: "Managed Cloud Desk | Omnia Services",
    description: "Professional managed cloud desk services providing 24/7 support, monitoring, and management of your cloud infrastructure. Expert cloud operations to ensure optimal performance and reliability.",
    type: "website",
    url: "https://omniaservices.co.uk/managed-cloud-desk",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Cloud Desk | Omnia Services",
    description: "Professional managed cloud desk services providing 24/7 support, monitoring, and management of your cloud infrastructure. Expert cloud operations to ensure optimal performance and reliability.",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  }
};

export default function ManagedCloudDeskPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Managed Cloud Desk</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Managed Cloud Desk</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Professional Managed Cloud Desk Services</h2>
              <p>
                Ensure your cloud infrastructure runs smoothly with our comprehensive managed cloud desk services. Our expert team provides 24/7 monitoring, proactive support, and continuous optimization to maximize your cloud investment and minimize operational overhead.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/1.webp" alt="Managed Cloud Desk Services" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our Managed Cloud Desk?</h3>
                    <p>
                      Our managed cloud desk services provide comprehensive cloud operations management, allowing you to focus on your core business while we handle the complexity of cloud infrastructure management across AWS, Azure, and Google Cloud platforms.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> 24/7 Monitoring & Support</li>
                      <li><i className="fa-solid fa-angles-right"></i> Proactive Issue Resolution</li>
                      <li><i className="fa-solid fa-angles-right"></i> Continuous Optimization</li>
                      <li><i className="fa-solid fa-angles-right"></i> Expert Cloud Operations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Managed Services */}
              <div className="row g-4 mb-5">
                <h3>Our Managed Cloud Desk Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>24/7 Monitoring & Alerting</h3>
                      <p>
                        Continuous monitoring of your cloud infrastructure with real-time alerting, performance tracking, and automated incident response for maximum uptime and reliability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Incident Management</h3>
                      <p>
                        Rapid incident response and resolution with defined SLAs, escalation procedures, and post-incident analysis to prevent future occurrences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Performance Optimization</h3>
                      <p>
                        Continuous performance monitoring and optimization including resource utilization analysis, capacity planning, and cost optimization recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Security Management</h3>
                      <p>
                        Comprehensive security monitoring including threat detection, vulnerability management, compliance monitoring, and security incident response.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Backup & Recovery</h3>
                      <p>
                        Automated backup management, disaster recovery testing, and recovery procedures to ensure business continuity and data protection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Change Management</h3>
                      <p>
                        Controlled change management processes including change approval, testing, deployment, and rollback procedures for safe infrastructure updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Levels */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Service Level Options</h2>
                        <p>
                          Flexible service levels designed to meet your specific cloud management requirements and business needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="service-level-item text-center">
                        <div className="icon">
                          <i className="fas fa-eye"></i>
                        </div>
                        <h4>Basic Monitoring</h4>
                        <p>
                          Essential monitoring and basic support for small to medium cloud environments with standard response times.
                        </p>
                        <ul className="service-features">
                          <li>24/7 Infrastructure Monitoring</li>
                          <li>Basic Alerting & Notifications</li>
                          <li>Email Support</li>
                          <li>Monthly Reports</li>
                          <li>Standard SLA</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="service-level-item text-center featured">
                        <div className="icon">
                          <i className="fas fa-star"></i>
                        </div>
                        <h4>Professional Management</h4>
                        <p>
                          Comprehensive cloud management with proactive optimization, advanced monitoring, and priority support for enterprise environments.
                        </p>
                        <ul className="service-features">
                          <li>Advanced Monitoring & Analytics</li>
                          <li>Proactive Optimization</li>
                          <li>Phone & Email Support</li>
                          <li>Weekly Reports</li>
                          <li>Priority SLA</li>
                          <li>Incident Response</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="service-level-item text-center">
                        <div className="icon">
                          <i className="fas fa-crown"></i>
                        </div>
                        <h4>Enterprise Management</h4>
                        <p>
                          Full-service cloud management with dedicated account management, custom solutions, and comprehensive support for large-scale deployments.
                        </p>
                        <ul className="service-features">
                          <li>Dedicated Account Manager</li>
                          <li>Custom Monitoring Solutions</li>
                          <li>24/7 Phone Support</li>
                          <li>Daily Reports</li>
                          <li>Premium SLA</li>
                          <li>On-site Support</li>
                          <li>Custom Integrations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Benefits */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Benefits of Managed Cloud Desk</h2>
                        <p>
                          Experience the advantages of professional cloud management that reduces complexity and improves operational efficiency.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-clock"></i>
                        </div>
                        <h4>24/7 Availability</h4>
                        <p>
                          Round-the-clock monitoring and support ensures your cloud infrastructure is always running optimally with minimal downtime.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Improved Performance</h4>
                        <p>
                          Continuous optimization and proactive management result in better performance, faster response times, and enhanced user experience.
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
                          Comprehensive security monitoring and management protect your cloud infrastructure from threats and ensure compliance.
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
                          Continuous cost monitoring and optimization help reduce cloud spending while maintaining performance and reliability.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <h4>Focus on Core Business</h4>
                        <p>
                          Free up your internal resources to focus on strategic initiatives while we handle the operational complexity of cloud management.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="benefit-item text-center">
                        <div className="icon">
                          <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h4>Expert Knowledge</h4>
                        <p>
                          Leverage our team&apos;s deep cloud expertise and industry best practices for optimal infrastructure management and optimization.
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
                    <h5>Optimize Your Cloud Operations Today</h5>
                    <p className="ecosystems">
                      Let our cloud experts manage your infrastructure while you focus on innovation. Get started with our managed cloud desk services for reliable, optimized, and secure cloud operations.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get Managed Cloud Desk</span>
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
