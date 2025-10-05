import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Domain Consulting | Omnia Services",
  description: "Expert domain consulting services for digital transformation, cloud strategy, and technology optimization. Strategic guidance to align technology with business objectives and drive innovation.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/domain-consulting"
  },
  openGraph: {
    title: "Domain Consulting | Omnia Services",
    description: "Expert domain consulting services for digital transformation, cloud strategy, and technology optimization. Strategic guidance to align technology with business objectives and drive innovation.",
    type: "website",
    url: "https://omniaservices.co.uk/domain-consulting",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain Consulting | Omnia Services",
    description: "Expert domain consulting services for digital transformation, cloud strategy, and technology optimization. Strategic guidance to align technology with business objectives and drive innovation.",
    images: ["https://omniaservices.co.uk/assets/img/service/1.webp"]
  }
};

export default function DomainConsultingPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Domain Consulting</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Domain Consulting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Strategic Domain Consulting Services</h2>
              <p>
                Transform your business with expert domain consulting services that provide deep industry expertise and strategic guidance. Our domain consultants help organizations navigate complex business challenges, optimize processes, and leverage technology to achieve sustainable growth and competitive advantage.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/1.webp" alt="Domain Consulting Services" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Why Choose Our Domain Consulting?</h3>
                    <p>
                      Our domain consultants bring deep industry knowledge and technical expertise to help you solve complex business challenges, optimize operations, and drive digital transformation initiatives that deliver measurable results.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Deep Industry Expertise</li>
                      <li><i className="fa-solid fa-angles-right"></i> Strategic Business Guidance</li>
                      <li><i className="fa-solid fa-angles-right"></i> Technology Integration</li>
                      <li><i className="fa-solid fa-angles-right"></i> Process Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Domain Consulting Services */}
              <div className="row g-4 mb-5">
                <h3>Our Domain Consulting Services</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Business Process Consulting</h3>
                      <p>
                        Comprehensive analysis and optimization of business processes to improve efficiency, reduce costs, and enhance customer satisfaction across all operational areas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Digital Strategy & Transformation</h3>
                      <p>
                        Strategic guidance for digital transformation initiatives including technology roadmaps, change management, and digital adoption strategies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Technology Architecture</h3>
                      <p>
                        Design and implementation of robust technology architectures that align with business objectives and support scalable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Data Strategy & Analytics</h3>
                      <p>
                        Comprehensive data strategy development including data governance, analytics implementation, and business intelligence solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Compliance & Risk Management</h3>
                      <p>
                        Expert guidance on regulatory compliance, risk assessment, and governance frameworks to ensure business continuity and regulatory adherence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Change Management</h3>
                      <p>
                        Strategic change management support including stakeholder engagement, training programs, and adoption strategies for successful transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Domain Expertise Areas */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Domain Expertise Areas</h2>
                        <p>
                          Deep expertise across multiple business domains to provide comprehensive consulting solutions tailored to your industry and business needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="domain-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Finance & Banking</h4>
                        <p>
                          Specialized consulting for financial services including risk management, regulatory compliance, and digital banking transformation.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="domain-item text-center">
                        <div className="icon">
                          <i className="fas fa-heartbeat"></i>
                        </div>
                        <h4>Healthcare & Life Sciences</h4>
                        <p>
                          Healthcare domain expertise including EHR implementation, HIPAA compliance, telemedicine, and healthcare analytics solutions.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="domain-item text-center">
                        <div className="icon">
                          <i className="fas fa-industry"></i>
                        </div>
                        <h4>Manufacturing & Supply Chain</h4>
                        <p>
                          Manufacturing expertise including Industry 4.0, supply chain optimization, IoT integration, and production analytics.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="domain-item text-center">
                        <div className="icon">
                          <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h4>Retail & E-commerce</h4>
                        <p>
                          Retail domain consulting including omnichannel strategies, customer experience optimization, and digital commerce transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Consulting Methodology */}
              <section className="section-padding fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Our Consulting Methodology</h2>
                        <p>
                          A proven approach to domain consulting that ensures successful project delivery and sustainable business outcomes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="methodology-item text-center">
                        <div className="icon">
                          <i className="fas fa-search"></i>
                        </div>
                        <h4>Discovery & Assessment</h4>
                        <p>
                          Comprehensive analysis of current state, business requirements, and challenges to understand the complete picture.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="methodology-item text-center">
                        <div className="icon">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h4>Strategy Development</h4>
                        <p>
                          Development of comprehensive strategies and roadmaps aligned with business objectives and industry best practices.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="methodology-item text-center">
                        <div className="icon">
                          <i className="fas fa-rocket"></i>
                        </div>
                        <h4>Implementation Support</h4>
                        <p>
                          Hands-on support during implementation including project management, change management, and quality assurance.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="methodology-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Optimization & Growth</h4>
                        <p>
                          Continuous monitoring, optimization, and strategic guidance to ensure sustained success and business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Value Proposition */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Domain Consulting Value Proposition</h2>
                        <p>
                          Experience the benefits of expert domain consulting that drives business transformation and sustainable competitive advantage.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="value-item text-center">
                        <div className="icon">
                          <i className="fas fa-lightbulb"></i>
                        </div>
                        <h4>Strategic Insights</h4>
                        <p>
                          Deep industry insights and strategic guidance that help you make informed decisions and capitalize on market opportunities.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="value-item text-center">
                        <div className="icon">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <h4>Process Optimization</h4>
                        <p>
                          Streamlined business processes that improve efficiency, reduce costs, and enhance customer satisfaction across all operations.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="value-item text-center">
                        <div className="icon">
                          <i className="fas fa-rocket"></i>
                        </div>
                        <h4>Accelerated Transformation</h4>
                        <p>
                          Faster time-to-value through expert guidance, proven methodologies, and industry best practices for successful transformation.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="value-item text-center">
                        <div className="icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h4>Risk Mitigation</h4>
                        <p>
                          Proactive risk identification and mitigation strategies that protect your business and ensure project success.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="value-item text-center">
                        <div className="icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <h4>Change Management</h4>
                        <p>
                          Comprehensive change management support that ensures successful adoption and user engagement throughout the transformation.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="value-item text-center">
                        <div className="icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h4>Measurable Results</h4>
                        <p>
                          Clear metrics and KPIs that demonstrate the value and impact of consulting initiatives on your business performance.
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
                    <h5>Transform Your Business with Domain Consulting</h5>
                    <p className="ecosystems">
                      Ready to leverage deep domain expertise for your business transformation? Our domain consultants are here to provide strategic guidance that drives innovation, optimization, and sustainable growth.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get Domain Consulting</span>
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
