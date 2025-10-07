import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Consulting | Omnia Services",
  description: "Expert IT consulting services for digital transformation, cloud strategy, and technology optimization. Strategic guidance to align IT with business objectives and drive innovation.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/it-consulting"
  },
  openGraph: {
    title: "IT Consulting | Omnia Services",
    description: "Expert IT consulting services for digital transformation, cloud strategy, and technology optimization. Strategic guidance to align IT with business objectives and drive innovation.",
    type: "website",
    url: "https://omniaservices.co.uk/it-consulting",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting | Omnia Services",
    description: "Expert IT consulting services for digital transformation, cloud strategy, and technology optimization. Strategic guidance to align IT with business objectives and drive innovation.",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  }
};

export default function ItConsultingPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>IT Consulting</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>IT Consulting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Strategic IT Consulting Services</h2>
              <p>
                Transform your business with expert IT consulting services that align technology strategy with your business objectives. Our experienced consultants provide strategic guidance to optimize your IT infrastructure, enhance security, and drive digital transformation.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/1.webp" alt="IT Consulting Services" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our IT Consulting?</h3>
                    <p>
                      With over a decade of experience in IT consulting, we understand the unique challenges businesses face in today&apos;s digital landscape. Our strategic approach ensures technology investments deliver maximum value and support long-term growth.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Strategic Technology Planning</li>
                      <li><i className="fa-solid fa-angles-right"></i> Digital Transformation Guidance</li>
                      <li><i className="fa-solid fa-angles-right"></i> Cost Optimization Strategies</li>
                      <li><i className="fa-solid fa-angles-right"></i> Risk Assessment & Mitigation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Consulting Services */}
              <div className="row g-4 mb-5">
                <h3>Our IT Consulting Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Technology Strategy & Planning</h3>
                      <p>
                        Develop comprehensive technology roadmaps that align with your business goals, ensuring optimal resource allocation and future-ready infrastructure planning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Digital Transformation Advisory</h3>
                      <p>
                        Guide your organization through digital transformation initiatives, helping you modernize processes, adopt new technologies, and enhance operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>IT Infrastructure Assessment</h3>
                      <p>
                        Comprehensive evaluation of your current IT infrastructure to identify optimization opportunities, security gaps, and areas for improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Cloud Strategy & Architecture</h3>
                      <p>
                        Expert guidance on cloud adoption, platform selection, and architecture design to maximize the benefits of cloud computing for your business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Security & Compliance Consulting</h3>
                      <p>
                        Comprehensive security assessments and compliance guidance to protect your business from cyber threats and meet regulatory requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Vendor Management & Procurement</h3>
                      <p>
                        Strategic vendor evaluation, contract negotiation, and technology procurement guidance to ensure you get the best value from your IT investments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consulting Process */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Our Consulting Approach</h2>
                        <p>
                          A proven methodology that delivers actionable insights and strategic recommendations tailored to your business needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="consulting-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <h4>Discovery & Analysis</h4>
                        <p>
                          Deep dive into your current IT landscape, business processes, and strategic objectives to understand your unique requirements.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="consulting-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-lightbulb"></i>
                        </div>
                        <h4>Strategy Development</h4>
                        <p>
                          Develop comprehensive strategies and roadmaps that align technology investments with your business goals and growth objectives.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="consulting-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-rocket"></i>
                        </div>
                        <h4>Implementation Planning</h4>
                        <p>
                          Create detailed implementation plans with timelines, resource requirements, and risk mitigation strategies for successful execution.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="consulting-process-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Monitoring & Optimization</h4>
                        <p>
                          Ongoing monitoring and optimization to ensure your IT strategy continues to deliver value and adapt to changing business needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Industry Expertise */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Industry Expertise</h2>
                        <p>
                          Deep industry knowledge across various sectors to provide relevant and effective IT consulting solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="industry-expertise-item text-center">
                        <div className="icon">
                          <i className="fas fa-building"></i>
                        </div>
                        <h4>Financial Services</h4>
                        <p>
                          Specialized consulting for banks, insurance companies, and financial institutions with focus on compliance, security, and digital transformation.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="industry-expertise-item text-center">
                        <div className="icon">
                          <i className="fas fa-heartbeat"></i>
                        </div>
                        <h4>Healthcare</h4>
                        <p>
                          Healthcare IT consulting covering EHR systems, telemedicine platforms, HIPAA compliance, and patient data security.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="industry-expertise-item text-center">
                        <div className="icon">
                          <i className="fas fa-industry"></i>
                        </div>
                        <h4>Manufacturing</h4>
                        <p>
                          Manufacturing IT solutions including IoT integration, supply chain optimization, and Industry 4.0 transformation strategies.
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
                    <h5>Transform Your IT Strategy Today</h5>
                    <p className="ecosystems">
                      Ready to align your technology with your business goals? Our expert IT consultants are here to help you develop a strategic roadmap that drives innovation and growth.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get IT Consulting</span>
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
