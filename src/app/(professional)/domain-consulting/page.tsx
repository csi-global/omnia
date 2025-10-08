import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}>
        <div className="container"><div className="page-heading"><h1>Domain Consulting</h1><ul className="breadcrumb-items"><li><Link href="/">Home</Link></li><li><i className="fas fa-chevron-right"></i></li><li>Domain Consulting</li></ul></div></div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(225,29,46,0.07),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(15,23,42,0.06),transparent_60%)]"></div>
        <div className="container py-20 md:py-28">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">Professional Services</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-zinc-900">Domain Consulting</h1>
              <p className="mt-3 text-zinc-600 text-lg">Align technology with business outcomes through expert domain guidance.</p>
              <div className="mt-5 d-flex gap-3"><Link href="/contact" className="main-button"><span className="theme-btn">Talk to an Expert</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link><a href="#offerings" className="main-button secondary"><span className="theme-btn">Explore Offerings</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></a></div>
            </div>
            <div className="col-lg-5"><div className="rounded-3xl overflow-hidden h-[320px] md:h-[380px]"><Image src="/assets/img/service/1.webp" alt="Domain consulting overview" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div></div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="section-padding fix"><div className="container"><div className="row"><div className="col-lg-10 mx-auto"><div className="section-title text-center"><h2 className="!text-5xl font-bold !mb-3">Consulting Offerings</h2><p>Strategic guidance across process, platforms, and change.</p></div></div></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"><div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6 md:col-span-2"><h3 className="text-xl font-semibold text-zinc-900">Business Process Consulting</h3><p className="mt-2 text-zinc-600">Analyze and optimize operations to reduce cost and improve outcomes.</p><div className="mt-4 rounded-xl skeleton" style={{ height: "180px" }} aria-hidden="true"></div></div><div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6"><h3 className="text-xl font-semibold text-zinc-900">Digital Strategy</h3><p className="mt-2 text-zinc-600">Roadmaps and KPIs aligned to business objectives.</p></div><div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6"><h3 className="text-xl font-semibold text-zinc-900">Technology Architecture</h3><p className="mt-2 text-zinc-600">Scalable, secure architectures for growth.</p></div><div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6 md:col-span-2"><h3 className="text-xl font-semibold text-zinc-900">Change Management</h3><p className="mt-2 text-zinc-600">Stakeholder engagement, training, and adoption programs.</p><div className="mt-4 rounded-xl skeleton" style={{ height: "160px" }} aria-hidden="true"></div></div></div></div></section>

      {/* Methodology */}
      <section className="section-padding bg-light fix"><div className="container"><div className="row"><div className="col-lg-8 mx-auto"><div className="section-title text-center"><h2 className="!text-5xl font-bold !mb-3">Consulting Methodology</h2><p>From discovery to sustained value.</p></div></div></div><div className="row g-4 pt-4">{[
        { icon: "fas fa-search", title: "Discover", text: "Assessment of goals and constraints." },
        { icon: "fas fa-drafting-compass", title: "Design", text: "Blueprints, KPIs, and roadmap." },
        { icon: "fas fa-rocket", title: "Deliver", text: "Hands‑on implementation support." },
        { icon: "fas fa-chart-line", title: "Optimize", text: "Measure and iterate for growth." },
      ].map((m, i) => (<div key={i} className="col-lg-3 col-md-6"><div className="rise-card bento-card text-center rounded-2xl border border-zinc-200 bg-white p-6 h-100"><div className="icon text-[var(--theme)] text-2xl"><i className={m.icon}></i></div><h4 className="mt-2">{m.title}</h4><p className="text-zinc-600 text-sm">{m.text}</p></div></div>))}</div></div></section>

      {/* FAQ */}
      <section className="section-padding bg-light fix mb-4"><div className="container"><div className="row align-items-start g-5"><div className="col-lg-5"><span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">FAQ</span><h2 className="mt-3 !text-5xl font-bold !mb-3">Frequently Asked Questions</h2><p className="text-zinc-600">Common questions about domain consulting and outcomes.</p></div><div className="col-lg-7"><div className="faq-accordion"><details open><summary>Which domains do you specialize in?<span><i className="fa-solid fa-plus icon-plus"></i><i className="fa-solid fa-minus icon-minus"></i></span></summary><div className="answer">Finance, healthcare, manufacturing, retail—and more.</div></details><details><summary>How do you measure success?<span><i className="fa-solid fa-plus icon-plus"></i><i className="fa-solid fa-minus icon-minus"></i></span></summary><div className="answer">KPIs aligned to objectives with regular reviews.</div></details><details><summary>Can you work with our internal teams?<span><i className="fa-solid fa-plus icon-plus"></i><i className="fa-solid fa-minus icon-minus"></i></span></summary><div className="answer">Yes—co‑delivery models with enablement and handover.</div></details></div></div></div></div></section>

      {/* CTA */}
      <section className="section-padding pt-0"><div className="container"><div className="lcnc-banner"><h5>Transform Your Business with Domain Consulting</h5><p className="ecosystems">Engage experts to align technology with business outcomes.</p><div className="main-button mt-3"><Link href="/contact"><span className="theme-btn">Get Domain Consulting</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link></div></div></div></section>

      {/* JSON-LD */}
      <Script id="ld-service-dc" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Domain Consulting",
          "provider": { "@type": "Organization", "name": "Omnia Services" },
          "serviceType": "Domain Consulting",
          "description": "Align technology with business outcomes through expert domain guidance.",
        })
      }} />
      <Script id="ld-faq-dc" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Which domains do you specialize in?", "acceptedAnswer": { "@type": "Answer", "text": "Finance, healthcare, manufacturing, retail—and more." } },
            { "@type": "Question", "name": "How do you measure success?", "acceptedAnswer": { "@type": "Answer", "text": "KPIs aligned to objectives with regular reviews." } },
            { "@type": "Question", "name": "Can you work with our internal teams?", "acceptedAnswer": { "@type": "Answer", "text": "Yes—co‑delivery models with enablement and handover." } }
          ]
        })
      }} />
    </div>
  );
}
