import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Assessment | Omnia Services",
  description: "Comprehensive cloud assessment services to evaluate your current infrastructure and identify optimization opportunities. Expert analysis for AWS, Azure, and Google Cloud platforms.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/cloud-assessment"
  },
  openGraph: {
    title: "Cloud Assessment | Omnia Services",
    description: "Comprehensive cloud assessment services to evaluate your current infrastructure and identify optimization opportunities. Expert analysis for AWS, Azure, and Google Cloud platforms.",
    type: "website",
    url: "https://omniaservices.co.uk/cloud-assessment",
    images: ["https://omniaservices.co.uk/assets/img/service/6.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Assessment | Omnia Services",
    description: "Comprehensive cloud assessment services to evaluate your current infrastructure and identify optimization opportunities. Expert analysis for AWS, Azure, and Google Cloud platforms.",
    images: ["https://omniaservices.co.uk/assets/img/service/6.webp"]
  }
};

export default function CloudAssessmentPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Cloud Assessment</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Cloud Assessment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Comprehensive Cloud Assessment Services</h2>
              <p>
                Make informed decisions about your cloud strategy with our comprehensive cloud assessment services. Our expert team evaluates your current infrastructure, identifies optimization opportunities, and provides actionable recommendations to maximize your cloud investment and performance.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/6.webp" alt="Cloud Assessment Services" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our Cloud Assessment?</h3>
                    <p>
                      Our cloud assessment provides deep insights into your current infrastructure, helping you understand costs, performance, security, and optimization opportunities across AWS, Azure, and Google Cloud platforms.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Comprehensive Infrastructure Analysis</li>
                      <li><i className="fa-solid fa-angles-right"></i> Cost Optimization Recommendations</li>
                      <li><i className="fa-solid fa-angles-right"></i> Security & Compliance Review</li>
                      <li><i className="fa-solid fa-angles-right"></i> Performance Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Assessment Services */}
              <div className="row g-4 mb-5">
                <h3>Our Cloud Assessment Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Infrastructure Assessment</h3>
                      <p>
                        Comprehensive evaluation of your current cloud infrastructure including architecture, resource utilization, and scalability analysis across all major cloud platforms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Cost Analysis & Optimization</h3>
                      <p>
                        Detailed cost analysis with recommendations for reducing cloud spending through rightsizing, reserved instances, and optimization strategies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Security & Compliance Review</h3>
                      <p>
                        Comprehensive security assessment including compliance evaluation, vulnerability analysis, and recommendations for improving your cloud security posture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Performance Analysis</h3>
                      <p>
                        In-depth performance evaluation including latency analysis, throughput assessment, and recommendations for improving application performance and user experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Migration Readiness</h3>
                      <p>
                        Assessment of your readiness for cloud migration including workload analysis, dependency mapping, and migration strategy recommendations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Disaster Recovery Evaluation</h3>
                      <p>
                        Comprehensive disaster recovery assessment including backup strategies, recovery time objectives, and business continuity planning recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assessment Process */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Our Cloud Assessment Process</h2>
                        <p>
                          A systematic approach to cloud assessment that provides comprehensive insights and actionable recommendations for your cloud strategy.
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
                        <h4>Discovery & Data Collection</h4>
                        <p>
                          Comprehensive discovery of your current cloud environment including inventory, configurations, and usage patterns across all platforms.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="process-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-bar"></i>
                        </div>
                        <h4>Analysis & Evaluation</h4>
                        <p>
                          Deep analysis of costs, performance, security, and compliance with detailed evaluation of optimization opportunities and risks.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="process-item text-center">
                        <div className="icon">
                          <i className="fas fa-lightbulb"></i>
                        </div>
                        <h4>Recommendations & Strategy</h4>
                        <p>
                          Detailed recommendations with prioritized action plans, cost-benefit analysis, and implementation strategies for cloud optimization.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="process-item text-center">
                        <div className="icon">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <h4>Report & Presentation</h4>
                        <p>
                          Comprehensive assessment report with executive summary, detailed findings, and presentation to stakeholders for informed decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Assessment Areas */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Assessment Focus Areas</h2>
                        <p>
                          Comprehensive evaluation across all critical aspects of your cloud infrastructure to provide complete visibility and optimization opportunities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-dollar-sign"></i>
                        </div>
                        <h4>Cost Management</h4>
                        <p>
                          Detailed cost analysis with recommendations for reducing spending through optimization, rightsizing, and strategic purchasing decisions.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h4>Security & Compliance</h4>
                        <p>
                          Comprehensive security evaluation including access controls, data protection, compliance requirements, and vulnerability assessments.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-tachometer-alt"></i>
                        </div>
                        <h4>Performance Optimization</h4>
                        <p>
                          Performance analysis including resource utilization, scalability assessment, and recommendations for improving efficiency and speed.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-sitemap"></i>
                        </div>
                        <h4>Architecture Review</h4>
                        <p>
                          Architecture assessment including design patterns, scalability, reliability, and recommendations for modern cloud-native approaches.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-sync-alt"></i>
                        </div>
                        <h4>Backup & Recovery</h4>
                        <p>
                          Disaster recovery evaluation including backup strategies, recovery procedures, and business continuity planning recommendations.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <h4>Operational Excellence</h4>
                        <p>
                          Operational assessment including monitoring, automation, DevOps practices, and recommendations for improving operational efficiency.
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
                    <h5>Start Your Cloud Assessment Today</h5>
                    <p className="ecosystems">
                      Get a comprehensive understanding of your cloud infrastructure with our expert assessment services. Identify opportunities for cost savings, performance improvements, and security enhancements.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get Cloud Assessment</span>
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
