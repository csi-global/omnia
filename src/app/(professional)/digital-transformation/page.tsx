import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Transformation | Omnia Services",
  description: "Comprehensive digital transformation services to modernize your business processes, enhance customer experience, and drive innovation. Expert guidance for successful digital transformation initiatives.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/digital-transformation"
  },
  openGraph: {
    title: "Digital Transformation | Omnia Services",
    description: "Comprehensive digital transformation services to modernize your business processes, enhance customer experience, and drive innovation. Expert guidance for successful digital transformation initiatives.",
    type: "website",
    url: "https://omniaservices.co.uk/digital-transformation",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation | Omnia Services",
    description: "Comprehensive digital transformation services to modernize your business processes, enhance customer experience, and drive innovation. Expert guidance for successful digital transformation initiatives.",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  }
};

export default function DigitalTransformationPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Digital Transformation</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Digital Transformation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Transform Your Business for the Digital Future</h2>
              <p>
                Navigate the digital landscape with confidence through our comprehensive digital transformation services. We help organizations modernize processes, enhance customer experiences, and leverage emerging technologies to drive sustainable growth and competitive advantage.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/1.webp" alt="Digital Transformation Services" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Digital Transformation Matters</h3>
                    <p>
                      In today&apos;s rapidly evolving business environment, digital transformation is not just an option—it&apos;s a necessity. Organizations that embrace digital transformation achieve higher operational efficiency, improved customer satisfaction, and sustainable competitive advantages.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Enhanced Customer Experience</li>
                      <li><i className="fa-solid fa-angles-right"></i> Operational Efficiency</li>
                      <li><i className="fa-solid fa-angles-right"></i> Data-Driven Decision Making</li>
                      <li><i className="fa-solid fa-angles-right"></i> Competitive Advantage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Digital Transformation Services */}
              <div className="row g-4 mb-5">
                <h3>Our Digital Transformation Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Strategy & Roadmap Development</h3>
                      <p>
                        Comprehensive digital strategy development with detailed roadmaps, technology assessments, and implementation plans tailored to your business objectives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Process Automation & Optimization</h3>
                      <p>
                        Streamline business processes through intelligent automation, workflow optimization, and integration of cutting-edge technologies to improve efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Customer Experience Transformation</h3>
                      <p>
                        Redesign customer journeys and touchpoints using digital technologies to create seamless, personalized experiences that drive engagement and loyalty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Data & Analytics Modernization</h3>
                      <p>
                        Transform your data into actionable insights with modern analytics platforms, AI/ML solutions, and real-time reporting capabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Cloud-First Architecture</h3>
                      <p>
                        Design and implement cloud-native solutions that provide scalability, flexibility, and cost-effectiveness for your digital transformation initiatives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Change Management & Training</h3>
                      <p>
                        Support successful transformation through comprehensive change management programs, user training, and organizational readiness assessments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transformation Framework */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Our Digital Transformation Framework</h2>
                        <p>
                          A proven methodology that ensures successful digital transformation with measurable outcomes and sustainable results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="framework-item text-center">
                        <div className="icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <h4>Assessment & Discovery</h4>
                        <p>
                          Comprehensive analysis of current state, technology landscape, and business capabilities to identify transformation opportunities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="framework-item text-center">
                        <div className="icon">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h4>Strategy & Planning</h4>
                        <p>
                          Develop comprehensive digital strategy with clear objectives, timelines, and success metrics aligned with business goals.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="framework-item text-center">
                        <div className="icon">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <h4>Implementation</h4>
                        <p>
                          Execute transformation initiatives using agile methodologies with continuous feedback and iterative improvements.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="framework-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Optimization</h4>
                        <p>
                          Continuous monitoring, measurement, and optimization to ensure sustained value and ongoing improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technology Focus Areas */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Technology Focus Areas</h2>
                        <p>
                          Leveraging cutting-edge technologies to drive meaningful business transformation and innovation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="tech-focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-robot"></i>
                        </div>
                        <h4>Artificial Intelligence & ML</h4>
                        <p>
                          Implement AI and machine learning solutions for predictive analytics, automation, and intelligent decision-making.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="tech-focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-cloud"></i>
                        </div>
                        <h4>Cloud & Hybrid Solutions</h4>
                        <p>
                          Modernize infrastructure with cloud-first approaches, hybrid architectures, and scalable cloud solutions.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="tech-focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h4>Mobile & IoT</h4>
                        <p>
                          Develop mobile applications and IoT solutions to enhance connectivity and enable new business models.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="tech-focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h4>Cybersecurity</h4>
                        <p>
                          Implement comprehensive security frameworks to protect digital assets and ensure compliance.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="tech-focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-database"></i>
                        </div>
                        <h4>Data Analytics</h4>
                        <p>
                          Transform data into insights with advanced analytics, business intelligence, and real-time reporting.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="tech-focus-item text-center">
                        <div className="icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <h4>Collaboration Tools</h4>
                        <p>
                          Enhance teamwork and productivity with modern collaboration platforms and communication tools.
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
                    <h5>Start Your Digital Transformation Journey</h5>
                    <p className="ecosystems">
                      Ready to transform your business for the digital age? Our experts will guide you through a comprehensive digital transformation strategy that delivers measurable results and sustainable competitive advantage.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Begin Transformation</span>
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
