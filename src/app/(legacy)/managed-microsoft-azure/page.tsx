import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Microsoft Azure | Omnia Services",
  description: "Comprehensive managed Azure services including monitoring, security, optimization, and 24/7 support. Expert Azure cloud management to maximize performance and minimize costs.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.omniaservices.co.uk/managed-microsoft-azure"
  },
  openGraph: {
    title: "Managed Microsoft Azure | Omnia Services",
    description: "Comprehensive managed Azure services including monitoring, security, optimization, and 24/7 support. Expert Azure cloud management to maximize performance and minimize costs.",
    type: "website",
    url: "https://www.omniaservices.co.uk/managed-microsoft-azure",
    images: ["https://www.omniaservices.co.uk/assets/img/service/6.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Microsoft Azure | Omnia Services",
    description: "Comprehensive managed Azure services including monitoring, security, optimization, and 24/7 support. Expert Azure cloud management to maximize performance and minimize costs.",
    images: ["https://www.omniaservices.co.uk/assets/img/service/6.webp"]
  }
};

export default function ManagedMicrosoftAzurePage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Managed Microsoft Azure</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Managed Microsoft Azure</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Comprehensive Managed Azure Services</h2>
              <p>
                Maximize your Azure investment with our expert managed services. We provide 24/7 monitoring, security management, cost optimization, and proactive support to ensure your Azure environment runs efficiently and securely.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/6.webp" alt="Managed Microsoft Azure Services" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our Managed Azure Services?</h3>
                    <p>
                      Our certified Azure experts provide comprehensive management services that reduce your operational overhead while improving performance, security, and cost efficiency across your entire Azure environment.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> 24/7 Monitoring & Support</li>
                      <li><i className="fa-solid fa-angles-right"></i> Security & Compliance Management</li>
                      <li><i className="fa-solid fa-angles-right"></i> Cost Optimization & Governance</li>
                      <li><i className="fa-solid fa-angles-right"></i> Performance Tuning</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Managed Services */}
              <div className="row g-4 mb-5">
                <h3>Our Managed Azure Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Azure Infrastructure Management</h3>
                      <p>
                        Complete management of your Azure infrastructure including VMs, storage, networking, and databases with automated scaling and performance optimization.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Security & Compliance</h3>
                      <p>
                        Comprehensive security management including Azure Security Center, identity management, threat protection, and compliance monitoring for GDPR, HIPAA, and other regulations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Backup & Disaster Recovery</h3>
                      <p>
                        Automated backup solutions and disaster recovery planning to ensure business continuity and data protection across your Azure environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Cost Management & Optimization</h3>
                      <p>
                        Continuous monitoring and optimization of Azure costs through rightsizing, reserved instances, and automated scaling to maximize your cloud investment ROI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Performance Monitoring</h3>
                      <p>
                        Proactive monitoring and alerting using Azure Monitor, Application Insights, and custom dashboards to ensure optimal performance and availability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>DevOps & Automation</h3>
                      <p>
                        Azure DevOps integration, CI/CD pipeline management, and infrastructure automation using ARM templates and Azure Resource Manager.
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
                          Flexible service levels designed to meet your specific Azure management requirements and budget.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="service-level-item text-center">
                        <div className="icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h4>Basic Management</h4>
                        <p>
                          Essential monitoring, basic security management, and monthly optimization reviews for small to medium Azure environments.
                        </p>
                        <ul className="service-features">
                          <li>24/7 Monitoring</li>
                          <li>Security Patching</li>
                          <li>Monthly Reports</li>
                          <li>Email Support</li>
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
                          Comprehensive management with proactive optimization, advanced security, and priority support for enterprise environments.
                        </p>
                        <ul className="service-features">
                          <li>Proactive Optimization</li>
                          <li>Advanced Security</li>
                          <li>Weekly Reports</li>
                          <li>Phone & Email Support</li>
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
                          Full-service management with dedicated account management, custom solutions, and comprehensive support for large-scale deployments.
                        </p>
                        <ul className="service-features">
                          <li>Dedicated Account Manager</li>
                          <li>Custom Solutions</li>
                          <li>Daily Reports</li>
                          <li>24/7 Phone Support</li>
                          <li>SLA Guarantees</li>
                          <li>On-site Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Azure Services Covered */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Azure Services We Manage</h2>
                        <p>
                          Comprehensive management across the entire Azure ecosystem to support your cloud infrastructure needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="azure-service-item text-center">
                        <div className="icon">
                          <i className="fas fa-server"></i>
                        </div>
                        <h4>Compute Services</h4>
                        <p>
                          Virtual Machines, App Service, Functions, Container Instances, and Kubernetes Service management.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="azure-service-item text-center">
                        <div className="icon">
                          <i className="fas fa-database"></i>
                        </div>
                        <h4>Data Services</h4>
                        <p>
                          SQL Database, Cosmos DB, Storage Accounts, Data Factory, and Analytics services management.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="azure-service-item text-center">
                        <div className="icon">
                          <i className="fas fa-network-wired"></i>
                        </div>
                        <h4>Networking</h4>
                        <p>
                          Virtual Networks, Load Balancers, Application Gateway, and ExpressRoute configuration and monitoring.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="azure-service-item text-center">
                        <div className="icon">
                          <i className="fas fa-lock"></i>
                        </div>
                        <h4>Security & Identity</h4>
                        <p>
                          Azure Active Directory, Key Vault, Security Center, and Sentinel security management.
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
                    <h5>Optimize Your Azure Environment Today</h5>
                    <p className="ecosystems">
                      Let our Azure experts handle the complexity while you focus on your business. Get started with a comprehensive Azure assessment and customized management plan.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get Azure Management</span>
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
