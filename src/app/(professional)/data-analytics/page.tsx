import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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
      {/* Breadcrumb */}
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(225,29,46,0.07),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(15,23,42,0.06),transparent_60%)]"></div>
        <div className="container py-20 md:py-28">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">Professional Services</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-zinc-900">Data Analytics</h1>
              <p className="mt-3 text-zinc-600 text-lg">Modern data platforms, BI, and AI to turn data into decisions.</p>
              <div className="mt-5 d-flex gap-3">
                <Link href="/contact" className="main-button"><span className="theme-btn">Talk to an Expert</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                <a href="#offerings" className="main-button secondary"><span className="theme-btn">Explore Offerings</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rounded-3xl overflow-hidden h-[320px] md:h-[380px]">
                <Image src="/assets/img/data-analytics/data-analytics.webp" alt="Data analytics overview" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Bento Grid */}
      <section id="offerings" className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-5xl font-bold !mb-3">Analytics & AI Offerings</h2>
                <p>Build a reliable data foundation and deliver outcomes with governed analytics and AI.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bento-card rounded-2xl border border-zinc-200 bg-gradient-to-br from-[var(--theme)]/60 to-[var(--theme)]/90 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-zinc-900">Data Strategy & Governance</h3>
              <p className="mt-2 text-zinc-50">Policies, ownership, and guardrails to ensure trusted data and compliant analytics.</p>
              <div className="mt-4 rounded-xl overflow-hidden h-[180px] md:h-[220px] relative">
                <Image
                  src="/assets/img/data-analytics/data-strategy.webp"
                  alt="Data strategy and governance"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Modern Data Platform</h3>
              <p className="mt-2 text-zinc-600">Warehousing & lakehouse with quality monitoring and resilient pipelines.</p>
              <div className="mt-4 rounded-xl overflow-hidden h-[140px] md:h-[160px] relative">
                <Image
                  src="/assets/img/data-analytics/data-platform.webp"
                  alt="Modern data platform"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Analytics & BI</h3>
              <p className="mt-2 text-zinc-600">Executive dashboards and domain KPIs with governed self‑service.</p>
              <div className="mt-4 rounded-xl overflow-hidden h-[120px] md:h-[140px] relative">
                <Image
                  src="/assets/img/data-analytics/data-dashboard.webp"
                  alt="Analytics dashboards"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bento-card rounded-2xl border border-zinc-200 bg-gradient-to-br from-[var(--theme)]/60 to-[var(--theme)]/90 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-zinc-50">AI & Advanced Insights</h3>
              <p className="mt-2 text-zinc-50">Forecasting, anomaly detection, and ML ops with responsible AI practices.</p>
              <div className="mt-4 rounded-xl overflow-hidden h-[160px] md:h-[200px] relative">
                <Image
                  src="/assets/img/data-analytics/advanced-insights.webp"
                  alt="AI and advanced insights"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-5xl font-bold !mb-3">Analytics Delivery Process</h2>
                <p>From ingestion to insights—with governance every step of the way.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: "fas fa-download", title: "Ingest & Model", text: "ELT, schema design, and data contracts." },
              { icon: "fas fa-chart-bar", title: "Visualize & Share", text: "Dashboards, KPI catalogs, and sharing policies." },
              { icon: "fas fa-robot", title: "AI & ML", text: "Use cases with monitoring and bias checks." },
              { icon: "fas fa-shield-alt", title: "Govern & Secure", text: "Access controls, lineage, and audits." },
            ].map((step, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="rise-card bento-card text-center rounded-2xl border border-zinc-200 bg-white p-6 h-100">
                  <div className="icon text-[var(--theme)] text-2xl"><i className={step.icon}></i></div>
                  <h4 className="mt-2">{step.title}</h4>
                  <p className="text-zinc-600 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-light fix mb-4">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">FAQ</span>
              <h2 className="mt-3 !text-5xl font-bold !mb-3">Frequently Asked Questions</h2>
              <p className="text-zinc-600">Answers to common questions about analytics platforms, governance, and delivery.</p>
            </div>
            <div className="col-lg-7">
              <div className="faq-accordion">
                <details open>
                  <summary>How fast can we see insights?<span><i className="fa-solid fa-plus icon-plus"></i><i className="fa-solid fa-minus icon-minus"></i></span></summary>
                  <div className="answer">We prioritize high‑value domains and deliver first dashboards in weeks.</div>
                </details>
                <details>
                  <summary>How do you ensure data quality?<span><i className="fa-solid fa-plus icon-plus"></i><i className="fa-solid fa-minus icon-minus"></i></span></summary>
                  <div className="answer">Contract tests, freshness alerts, SLAs, and lineage for trust.</div>
                </details>
                <details>
                  <summary>What clouds do you support?<span><i className="fa-solid fa-plus icon-plus"></i><i className="fa-solid fa-minus icon-minus"></i></span></summary>
                  <div className="answer">AWS, Azure, and GCP with native services and vendor platforms.</div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="lcnc-banner">
            <h5>Ready to Unlock Your Data</h5>
            <p className="ecosystems">Start with a rapid assessment and pragmatic roadmap.</p>
            <div className="main-button mt-3"><Link href="/contact"><span className="theme-btn">Talk to Us</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link></div>
          </div>
        </div>
      </section>

      {/* JSON-LD structured data */}
      <Script id="ld-service-da" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Data Analytics",
          "provider": { "@type": "Organization", "name": "Omnia Services" },
          "serviceType": "Data Analytics",
          "description": "Modern data platforms, BI, and AI to turn data into decisions.",
        })
      }} />
      <Script id="ld-faq-da" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How fast can we see insights?", "acceptedAnswer": { "@type": "Answer", "text": "First dashboards in weeks focusing high-value domains." } },
            { "@type": "Question", "name": "How do you ensure data quality?", "acceptedAnswer": { "@type": "Answer", "text": "Contract tests, SLAs, and lineage for trust." } },
            { "@type": "Question", "name": "What clouds do you support?", "acceptedAnswer": { "@type": "Answer", "text": "AWS, Azure, and GCP with native services." } }
          ]
        })
      }} />
    </div>
  );
}


