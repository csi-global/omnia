import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Migration | Omnia Services",
  description: "Professional cloud migration services for seamless transition to AWS, Azure, and Google Cloud. Expert assessment, planning, and execution of cloud transformation strategies for your business.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/cloud-migration"
  },
  openGraph: {
    title: "Cloud Migration | Omnia Services",
    description: "Professional cloud migration services for seamless transition to AWS, Azure, and Google Cloud. Expert assessment, planning, and execution of cloud transformation strategies for your business.",
    type: "website",
    url: "https://omniaservices.co.uk/cloud-migration",
    images: ["https://omniaservices.co.uk/assets/img/service/6.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Migration | Omnia Services",
    description: "Professional cloud migration services for seamless transition to AWS, Azure, and Google Cloud. Expert assessment, planning, and execution of cloud transformation strategies for your business.",
    images: ["https://omniaservices.co.uk/assets/img/service/6.webp"]
  }
};

export default function CloudMigrationPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Cloud Migration</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Cloud Migration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Cloud Migration</h2>
              <p>
                Cloud Migration involves moving any workload from an on-premises environment, hosting facility, or other public cloud. This also includes migration of workloads such as applications, websites, databases, storage, physical or virtual servers, or entire data centers to the cloud.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/6.webp" alt="Cloud Migration Services" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>WHY CLOUD MIGRATION?</h3>
                    <p>
                      With a Cloud implementation, you can set up a virtual office to give you the flexibility of connecting to your business anywhere, any time. With the growing number of web-enabled devices used in today&apos;s business environment, access to your data is even easier.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cloud Assessment & Adoption Offerings */}
              <div className="row g-4 mb-5">
                <h3>Cloud Assessment & Adoption Offerings</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Assessment & Feasibility Study</h3>
                      <p>
                        Omnia offers a Cloud Assessment and Feasibility Service wherein you can decide if moving to Cloud or optimizing your current infrastructure is the correct option for your organization.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Cloud Platform Evaluation</h3>
                      <p>
                        The evaluation of the Cloud platform is a service required in order to understand performance metrics and provide a comprehensive guideline in order to make a concrete decision about Cloud service adoption.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Readiness Assessment</h3>
                      <p>
                        A proper Cloud Readiness Assessment can help you by creating and delivering concrete cloud migration plans as well as identify processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Cloud Transformation Roadmap</h3>
                      <p>
                        At Omnia our comprehensive suite of enterprise cloud solutions - from cloud adoption to cloud migration, to managed cloud services - helps organizations accelerate their digital transformation journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Cloud Strategy & Planning</h3>
                      <p>
                        Our cloud strategy and planning services help you develop a comprehensive roadmap for cloud adoption, including cost optimization, security considerations, and scalability planning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Migration Execution</h3>
                      <p>
                        Professional execution of cloud migration projects with minimal downtime, ensuring business continuity and optimal performance in the new cloud environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Migration Process Section */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Our Cloud Migration Process</h2>
                        <p>
                          A structured approach to ensure successful cloud migration with minimal risk and maximum efficiency.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="migration-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <h4>Discovery & Assessment</h4>
                        <p>
                          Comprehensive analysis of your current infrastructure, applications, and dependencies to create a detailed migration plan.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="migration-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h4>Planning & Design</h4>
                        <p>
                          Detailed migration strategy, timeline, and architecture design tailored to your specific business requirements and goals.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="migration-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <h4>Migration Execution</h4>
                        <p>
                          Seamless execution of the migration plan with minimal downtime, ensuring business continuity throughout the process.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="migration-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <h4>Optimization & Support</h4>
                        <p>
                          Post-migration optimization, monitoring, and ongoing support to ensure optimal performance and cost efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cloud Platforms Section */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Cloud Platforms We Support</h2>
                        <p>
                          Expert migration services across all major cloud platforms with specialized knowledge and best practices.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="cloud-platform-item text-center">
                        <div className="icon">
                          <i className="fab fa-aws"></i>
                        </div>
                        <h4>Amazon Web Services (AWS)</h4>
                        <p>
                          Complete AWS migration services including EC2, RDS, S3, Lambda, and container services with cost optimization strategies.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="cloud-platform-item text-center">
                        <div className="icon">
                          <i className="fab fa-microsoft"></i>
                        </div>
                        <h4>Microsoft Azure</h4>
                        <p>
                          Azure migration expertise covering virtual machines, databases, AI/ML services, and hybrid cloud solutions for enterprise workloads.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="cloud-platform-item text-center">
                        <div className="icon">
                          <i className="fab fa-google"></i>
                        </div>
                        <h4>Google Cloud Platform</h4>
                        <p>
                          GCP migration services including Compute Engine, Cloud SQL, BigQuery, and advanced analytics and machine learning capabilities.
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
                    <h5>Ready to Migrate to the Cloud?</h5>
                    <p className="ecosystems">
                      Get started with a comprehensive cloud assessment and migration strategy. Our experts will help you choose the right cloud platform and execute a seamless migration with minimal risk and downtime.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Start Your Cloud Journey</span>
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
