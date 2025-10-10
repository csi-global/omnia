import OmniaSection from '@/components/ui/omnia-section';
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart Investigate | Omnia Services",
  description: "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/smart-investigate"
  },
  openGraph: {
    title: "Smart Investigate | Omnia Services",
    description: "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making.",
    type: "website",
    url: "https://omniaservices.co.uk/smart-investigate",
    images: ["https://omniaservices.co.uk/assets/img/service/3.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Investigate | Omnia Services",
    description: "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making.",
    images: ["https://omniaservices.co.uk/assets/img/service/3.webp"]
  }
};

export default function SmartInvestigatePage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Smart Investigate</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Smart Investigate</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <OmniaSection>
        <div className="sertvice-details-wrapper">
          <div className="service-details-content">
            <h2>Smart Investigate Solutions</h2>
            <p>
              Revolutionize your investigation processes with Smart Investigate solutions powered by advanced analytics and artificial intelligence. Our intelligent investigation platform automates data analysis, identifies patterns, and provides actionable insights to accelerate decision-making and improve outcomes.
            </p>

            <div className="row g-4 pt-4 pb-5 align-items-center">
              <div className="col-md-6">
                <div className="thumb">
                  <Image src="/assets/img/service/3.webp" alt="Smart Investigate Solutions" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="list-wrapper">
                  <h3>Why Choose Smart Investigate?</h3>
                  <p>
                    Transform complex investigation processes with AI-powered analytics that reduce manual effort, improve accuracy, and deliver faster results. Our Smart Investigate solutions provide comprehensive insights and automated reporting capabilities.
                  </p>
                  <ul className="list-items">
                    <li><i className="fa-solid fa-angles-right"></i> AI-Powered Analysis</li>
                    <li><i className="fa-solid fa-angles-right"></i> Automated Investigation Workflows</li>
                    <li><i className="fa-solid fa-angles-right"></i> Real-Time Insights & Reporting</li>
                    <li><i className="fa-solid fa-angles-right"></i> Advanced Pattern Recognition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* Smart Investigate Services */}
      <OmniaSection>
        <div className="row g-4 mb-5">
          <h3>Our Smart Investigate Services</h3>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>Intelligent Data Analysis</h3>
                <p>
                  Advanced analytics engine that processes large volumes of data to identify anomalies, patterns, and correlations automatically.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>Automated Investigation Workflows</h3>
                <p>
                  Streamlined investigation processes with automated case creation, evidence collection, and progress tracking for improved efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>AI-Powered Insights</h3>
                <p>
                  Machine learning algorithms that provide intelligent recommendations, risk assessments, and predictive analytics for better decision-making.
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
                <h3>Real-Time Monitoring</h3>
                <p>
                  Continuous monitoring and alerting system that identifies suspicious activities and triggers automated investigation processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>Compliance & Reporting</h3>
                <p>
                  Automated compliance reporting with audit trails, documentation, and regulatory compliance features for various industries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="service-details-box-items">
              <div className="content">
                <h3>Integration & Customization</h3>
                <p>
                  Seamless integration with existing systems and customizable workflows to meet specific investigation requirements and processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* Key Features */}
      <OmniaSection className="bg-light">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>Smart Investigate Key Features</h2>
              <p>
                Comprehensive investigation capabilities powered by advanced technology to deliver accurate, timely, and actionable results.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          <div className="col-lg-3 col-md-6">
            <div className="feature-item text-center">
              <div className="icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>Machine Learning</h4>
              <p>
                Advanced ML algorithms that learn from historical data to improve investigation accuracy and efficiency over time.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="feature-item text-center">
              <div className="icon">
                <i className="fas fa-search-plus"></i>
              </div>
              <h4>Pattern Recognition</h4>
              <p>
                Sophisticated pattern recognition capabilities that identify complex relationships and anomalies in large datasets.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="feature-item text-center">
              <div className="icon">
                <i className="fas fa-chart-network"></i>
              </div>
              <h4>Network Analysis</h4>
              <p>
                Comprehensive network analysis tools that map relationships and connections between entities and events.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="feature-item text-center">
              <div className="icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h4>Automated Reporting</h4>
              <p>
                Intelligent report generation with customizable templates and automated distribution to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* Use Cases */}
      <OmniaSection>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>Industry Use Cases</h2>
              <p>
                Smart Investigate solutions applied across various industries to address specific investigation and analysis challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          <div className="col-lg-4 col-md-6">
            <div className="usecase-item text-center">
              <div className="icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Financial Services</h4>
              <p>
                Fraud detection, AML investigations, and compliance monitoring with automated suspicious activity reporting.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="usecase-item text-center">
              <div className="icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h4>Legal & Compliance</h4>
              <p>
                Document analysis, case management, and regulatory compliance investigations with automated evidence collection.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="usecase-item text-center">
              <div className="icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <h4>Cybersecurity</h4>
              <p>
                Incident response, threat hunting, and security investigations with real-time threat intelligence integration.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="usecase-item text-center">
              <div className="icon">
                <i className="fas fa-industry"></i>
              </div>
              <h4>Insurance</h4>
              <p>
                Claims investigation, fraud detection, and risk assessment with automated claim validation and processing.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="usecase-item text-center">
              <div className="icon">
                <i className="fas fa-building"></i>
              </div>
              <h4>Corporate Investigations</h4>
              <p>
                Internal investigations, HR compliance, and corporate governance with confidential case management.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="usecase-item text-center">
              <div className="icon">
                <i className="fas fa-gavel"></i>
              </div>
              <h4>Law Enforcement</h4>
              <p>
                Criminal investigations, evidence analysis, and case management with secure data handling and reporting.
              </p>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* CTA Section */}
      <div className="row g-4 pt-4">
        <div className="col-12">
          <div className="lcnc-banner">
            <h5>Transform Your Investigation Processes Today</h5>
            <p className="ecosystems">
              Leverage the power of AI and advanced analytics to streamline your investigation processes, improve accuracy, and accelerate decision-making with Smart Investigate solutions.
            </p>
            <div className="main-button mt-3">
              <Link href="/contact">
                <span className="theme-btn">Get Smart Investigate</span>
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
