import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Analytics | Omnia Services",
  description: "Modern data analytics services: data strategy, warehousing, BI, and AI/ML to turn data into decisions.",
  robots: "index,follow",
  alternates: { canonical: "https://omniaservices.co.uk/data-analytics" },
  openGraph: {
    title: "Data Analytics | Omnia Services",
    description: "Modern data analytics services: data strategy, warehousing, BI, and AI/ML to turn data into decisions.",
    type: "website",
    url: "https://omniaservices.co.uk/data-analytics",
    images: ["https://omniaservices.co.uk/assets/img/service/6.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics | Omnia Services",
    description: "Modern data analytics services: data strategy, warehousing, BI, and AI/ML to turn data into decisions.",
    images: ["https://omniaservices.co.uk/assets/img/service/6.webp"],
  },
};

export default function DataAnalyticsPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Data Analytics</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Data Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Turn Data Into Decisions</h2>
              <p>
                Build a modern data foundation and deliver insights at scale. We help you define data strategy, stand up reliable data platforms, and enable business teams with trusted analytics and AI.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <Image src="/assets/img/service/6.webp" alt="Data Analytics Services" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Core Capabilities</h3>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> Data Strategy & Governance</li>
                      <li><i className="fa-solid fa-angles-right"></i> Warehousing & Lakehouse (SQL, BigQuery, Synapse, Snowflake)</li>
                      <li><i className="fa-solid fa-angles-right"></i> ELT/ETL & Orchestration</li>
                      <li><i className="fa-solid fa-angles-right"></i> BI Dashboards & Self‑Service Analytics</li>
                      <li><i className="fa-solid fa-angles-right"></i> ML/AI Use Cases</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-5">
                <h3>What We Deliver</h3>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Modern Data Platform</h3>
                      <p>Secure, scalable data platforms on your preferred cloud with reliable pipelines and quality monitoring.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>Analytics & BI</h3>
                      <p>Executive dashboards and domain KPIs that drive outcomes with governed self‑service for business teams.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="service-details-box-items">
                    <div className="content">
                      <h3>AI & Advanced Insights</h3>
                      <p>ML use cases from forecasting to anomaly detection, delivered with MLOps and responsible AI guardrails.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="row g-4 pt-4">
                <div className="col-12">
                  <div className="lcnc-banner">
                    <h5>Ready to Unlock Your Data</h5>
                    <p className="ecosystems">
                      Start with a rapid assessment to identify high‑value analytics opportunities and a pragmatic roadmap.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Talk to Us</span>
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


