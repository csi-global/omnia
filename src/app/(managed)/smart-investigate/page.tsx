import OmniaButton from '@/components/ui/omnia-button';
import OmniaCarousel from '@/components/ui/omnia-carousel';
import OmniaSection from '@/components/ui/omnia-section';
import ServiceCard from '@/components/ui/service-card';
import type { Metadata } from 'next';
import Link from "next/link";
import Script from 'next/script';

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

      {/* SEO: JSON-LD for Smart Investigate */}
      <Script id="ld-smartinvestigate" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Smart Investigate Services",
          "serviceType": "AI-powered investigation and analytics",
          "provider": { "@type": "Organization", "name": "Omnia Services", "url": "https://omniaservices.co.uk" },
          "areaServed": "GB",
          "url": "https://omniaservices.co.uk/smart-investigate",
          "description": "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making."
        })}
      </Script>

      {/* Service Details Section */}
      <OmniaSection>
        <div className="sertvice-details-wrapper">
          <div className="service-details-content">
            <h2 className="!text-3xl sm:!text-6xl !text-center">Smart Investigate Solutions</h2>
            <p className="max-w-3xl mx-auto">
              Omnia&apos;s Smart Investigate accelerates case resolution with AI-assisted analysis and
              workflow automation. We surface patterns, score risk and orchestrate evidence
              collection so teams close more cases faster with better accuracy.
            </p>

            <div className="pt-4 pb-5">
              <h3 className="mb-3 text-center !text-3xl">Why Choose Smart Investigate?</h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-3xl mx-auto">
                  Transform complex investigation processes with AI-powered analytics that reduce
                  manual effort, improve accuracy, and deliver faster results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-3xl mx-auto">
                  {[
                    { icon: 'fa-solid fa-brain', title: 'AI-Powered Analysis' },
                    { icon: 'fa-solid fa-robot', title: 'Automated Workflows' },
                    { icon: 'fa-solid fa-chart-line', title: 'Real-Time Insights' },
                    { icon: 'fa-solid fa-shapes', title: 'Pattern Recognition' },
                  ].map((item) => (
                    <div key={item.title}>
                      <div className="bg-gradient-to-br from-[var(--theme)] to-[var(--theme)]/50 rounded-2xl p-2 flex items-center gap-2">
                        <div className="bg-white rounded-full size-20 flex items-center justify-center">
                          <i className={item.icon}></i>
                        </div>
                        <h5 className="text-white">{item.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* Smart Investigate Services */}
      <OmniaSection>
        <h3 className="!text-3xl sm:!text-5xl">Our Smart Investigate Services</h3>
        {(() => {
          const cards = [
            {
              icon: 'fas fa-brain',
              title: 'Intelligent Data Analysis',
              description:
                'Advanced analytics engine that processes large volumes of data to identify anomalies, patterns, and correlations automatically.',
            },
            {
              icon: 'fas fa-robot',
              title: 'Automated Investigation Workflows',
              description:
                'Streamlined investigation processes with automated case creation, evidence collection, and progress tracking for improved efficiency.',
            },
            {
              icon: 'fas fa-lightbulb',
              title: 'AI-Powered Insights',
              description:
                'Machine learning algorithms that provide intelligent recommendations, risk assessments, and predictive analytics for better decision-making.',
            },
            {
              icon: 'fas fa-bell',
              title: 'Real-Time Monitoring',
              description:
                'Continuous monitoring and alerting system that identifies suspicious activities and triggers automated investigation processes.',
            },
            {
              icon: 'fas fa-file-shield',
              title: 'Compliance & Reporting',
              description:
                'Automated compliance reporting with audit trails, documentation, and regulatory compliance features for various industries.',
            },
            {
              icon: 'fas fa-plug',
              title: 'Integration & Customization',
              description:
                'Seamless integration with existing systems and customizable workflows to meet specific investigation requirements and processes.',
            },
          ];
          return (
            <OmniaCarousel
              items={cards.map((c, i) => (
                <ServiceCard key={i} title={c.title} description={c.description} icon={c.icon} />
              ))}
            />
          );
        })()}
      </OmniaSection>

      {/* Key Features (styled like ORMB features) */}
      <OmniaSection className="bg-gradient-to-br from-[var(--theme2)]/30 via-[var(--theme)]/30 to-[var(--theme2)]/50 rounded-2xl m-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center text-black">
                <h2 className="!text-3xl sm:!text-5xl !text-[var(--theme)]">Smart Investigate Key Features</h2>
                <p>
                  Comprehensive investigation capabilities powered by advanced technology to deliver accurate, timely, and actionable results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'fas fa-brain', title: 'Machine Learning', description: 'Advanced ML algorithms that learn from historical data to improve investigation accuracy and efficiency over time.' },
              { icon: 'fas fa-search-plus', title: 'Pattern Recognition', description: 'Sophisticated pattern recognition capabilities that identify complex relationships and anomalies in large datasets.' },
              { icon: 'fas fa-chart-network', title: 'Network Analysis', description: 'Comprehensive network analysis tools that map relationships and connections between entities and events.' },
              { icon: 'fas fa-file-alt', title: 'Automated Reporting', description: 'Intelligent report generation with customizable templates and automated distribution to stakeholders.' },
            ].map((item) => (
              <div className="bg-white/70 p-4 rounded-2xl shadow-sm" key={item.title}>
                <div className="feature-item">
                  <div className="flex gap-2 items-center">
                    <i className={`${item.icon} text-[var(--theme)]`}></i>
                    <h4>{item.title}</h4>
                  </div>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </OmniaSection>

      {/* Use Cases (styled cards) */}
      <OmniaSection className="bg-light rounded-2xl">
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
          {[
            { icon: 'fas fa-shield-alt', title: 'Financial Services', description: 'Fraud detection, AML investigations, and compliance monitoring with automated suspicious activity reporting.' },
            { icon: 'fas fa-balance-scale', title: 'Legal & Compliance', description: 'Document analysis, case management, and regulatory compliance investigations with automated evidence collection.' },
            { icon: 'fas fa-user-shield', title: 'Cybersecurity', description: 'Incident response, threat hunting, and security investigations with real-time threat intelligence integration.' },
            { icon: 'fas fa-industry', title: 'Insurance', description: 'Claims investigation, fraud detection, and risk assessment with automated claim validation and processing.' },
            { icon: 'fas fa-building', title: 'Corporate Investigations', description: 'Internal investigations, HR compliance, and corporate governance with confidential case management.' },
            { icon: 'fas fa-gavel', title: 'Law Enforcement', description: 'Criminal investigations, evidence analysis, and case management with secure data handling and reporting.' },
          ].map((u) => (
            <div className="col-lg-4 col-md-6" key={u.title}>
              <div className="industry-item text-center p-4 rounded-2xl shadow-sm border border-[var(--theme)]/20 bg-white">
                <span className="block h-1 w-10 bg-[var(--theme)] rounded-full mx-auto mb-3"></span>
                <div className="flex items-center justify-center mb-2">
                  <div className="size-10 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className={u.icon}></i>
                  </div>
                </div>
                <h4 className="m-0 text-[var(--theme)]">{u.title}</h4>
                <p className="mt-2">{u.description}</p>
              </div>
            </div>
          ))}
        </div>
      </OmniaSection>

      {/* CTA Section */}
      <OmniaSection>
        <div className="container">
          <div className="col-12 mx-auto">

            <div className="lcnc-banner">
              <h5>Transform Your Investigation Processes Today</h5>
              <p className="ecosystems">
                Leverage the power of AI and advanced analytics to streamline your investigation processes, improve accuracy, and accelerate decision-making with Smart Investigate solutions.
              </p>
              <div className="main-button mt-3">
                <Link href="/contact">
                  <OmniaButton text="Get Smart Investigate Solutions" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>
    </div>
  );
}
