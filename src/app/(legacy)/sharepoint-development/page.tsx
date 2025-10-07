import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SharePoint Development | Omnia Services",
  description: "Professional SharePoint development services for custom solutions, workflows, and integrations. Expert SharePoint Online and on-premises development to enhance collaboration and productivity.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/sharepoint-development"
  },
  openGraph: {
    title: "SharePoint Development | Omnia Services",
    description: "Professional SharePoint development services for custom solutions, workflows, and integrations. Expert SharePoint Online and on-premises development to enhance collaboration and productivity.",
    type: "website",
    url: "https://omniaservices.co.uk/sharepoint-development",
    images: ["https://omniaservices.co.uk/assets/img/service/4.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "SharePoint Development | Omnia Services",
    description: "Professional SharePoint development services for custom solutions, workflows, and integrations. Expert SharePoint Online and on-premises development to enhance collaboration and productivity.",
    images: ["https://omniaservices.co.uk/assets/img/service/4.webp"]
  }
};

export default function SharePointDevelopmentPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>SharePoint Development</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>SharePoint Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Professional SharePoint Development Services</h2>
              <p>
                Transform your collaboration and document management with custom SharePoint solutions. Our expert developers create powerful, scalable SharePoint applications that enhance productivity and streamline business processes across your organization.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/4.webp" alt="SharePoint Development" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our SharePoint Development?</h3>
                    <p>
                      With extensive experience in both SharePoint Online and on-premises environments, we deliver custom solutions that integrate seamlessly with your existing Microsoft 365 ecosystem and business workflows.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Custom Web Parts & Applications</li>
                      <li><i className="fa-solid fa-angles-right"></i> Workflow Automation</li>
                      <li><i className="fa-solid fa-angles-right"></i> Integration with Office 365</li>
                      <li><i className="fa-solid fa-angles-right"></i> Migration & Modernization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SharePoint Services */}
              <div className="row g-4 mb-5">
                <h3>Our SharePoint Development Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Custom SharePoint Applications</h3>
                      <p>
                        Build tailored SharePoint applications using modern development frameworks including SPFx, Power Apps, and Azure services for enhanced functionality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Workflow Development</h3>
                      <p>
                        Create automated workflows using Power Automate, SharePoint Designer, and custom solutions to streamline business processes and improve efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>SharePoint Migration</h3>
                      <p>
                        Seamless migration from legacy SharePoint versions to SharePoint Online, ensuring data integrity and minimal business disruption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Document Management Solutions</h3>
                      <p>
                        Implement advanced document management systems with version control, approval workflows, and compliance features for better content governance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Intranet Development</h3>
                      <p>
                        Design and develop modern SharePoint intranets with responsive design, personalized dashboards, and integration with Microsoft Teams.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Third-Party Integrations</h3>
                      <p>
                        Integrate SharePoint with external systems, APIs, and business applications to create unified digital workplaces and seamless data flow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Technologies */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>SharePoint Development Technologies</h2>
                        <p>
                          Leveraging modern development tools and frameworks to create robust, scalable SharePoint solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="tech-item text-center">
                        <div className="icon">
                          <i className="fab fa-js-square"></i>
                        </div>
                        <h4>SharePoint Framework (SPFx)</h4>
                        <p>
                          Modern client-side development framework for building responsive SharePoint web parts and extensions.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="tech-item text-center">
                        <div className="icon">
                          <i className="fas fa-bolt"></i>
                        </div>
                        <h4>Power Platform</h4>
                        <p>
                          Power Apps, Power Automate, and Power BI integration for enhanced SharePoint functionality and automation.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="tech-item text-center">
                        <div className="icon">
                          <i className="fas fa-cloud"></i>
                        </div>
                        <h4>Azure Integration</h4>
                        <p>
                          Azure services integration including Azure Functions, Logic Apps, and Cognitive Services for advanced capabilities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="tech-item text-center">
                        <div className="icon">
                          <i className="fab fa-microsoft"></i>
                        </div>
                        <h4>Microsoft Graph API</h4>
                        <p>
                          Leverage Microsoft Graph API for seamless integration with Office 365 services and external applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SharePoint Solutions */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>SharePoint Solutions We Build</h2>
                        <p>
                          Custom SharePoint solutions designed to address specific business challenges and enhance collaboration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="solution-item text-center">
                        <div className="icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <h4>Employee Portals</h4>
                        <p>
                          Self-service employee portals with HR information, company news, directory, and policy management.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="solution-item text-center">
                        <div className="icon">
                          <i className="fas fa-project-diagram"></i>
                        </div>
                        <h4>Project Management</h4>
                        <p>
                          Custom project sites with task management, document collaboration, and progress tracking capabilities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="solution-item text-center">
                        <div className="icon">
                          <i className="fas fa-file-contract"></i>
                        </div>
                        <h4>Contract Management</h4>
                        <p>
                          Automated contract lifecycle management with approval workflows, renewal tracking, and compliance monitoring.
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
                    <h5>Ready to Enhance Your SharePoint?</h5>
                    <p className="ecosystems">
                      Transform your SharePoint environment with custom solutions that improve collaboration, streamline processes, and boost productivity across your organization.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Start SharePoint Project</span>
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
