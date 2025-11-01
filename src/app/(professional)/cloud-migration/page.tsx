import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1 className="!text-5xl lg:!text-7xl font-extrabold !leading-tight break-words text-zinc-900">Cloud Migration</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Cloud Migration</li>
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
              <h1 className="mt-3 !text-3xl sm:!text-4xl md:!text-5xl font-extrabold !leading-tight break-words text-zinc-900">Cloud Migration</h1>
              <p className="mt-3 text-zinc-600 text-base sm:!text-lg break-words">Omnia delivers zero‑downtime strategies, secure landing zones, and modernization playbooks—backed by observability and FinOps from day one.</p>

              <div className="mt-5 d-flex gap-3">
                <Link href="/contact" className="main-button"><span className="theme-btn">Talk to an Expert</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                <a href="#offerings" className="main-button secondary"><span className="theme-btn">Explore Offerings</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></a>
              </div>

              <ul className="mt-5 d-flex flex-wrap gap-2 text-sm text-zinc-700">
                <li className="px-3 py-1 rounded-full bg-white border">Zero‑downtime</li>
                <li className="px-3 py-1 rounded-full bg-white border">Security‑first</li>
                <li className="px-3 py-1 rounded-full bg-white border">FinOps</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="rounded-3xl overflow-hidden h-[320px] md:h-[380px] relative">
                <Image
                  src="/assets/img/cloud-migration/cloud-migration.webp"
                  alt="Cloud migration overview"
                  fill
                  sizes="(max-width: 992px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
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
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Cloud Assessment & Migration Offerings</h2>
                <p>Start with clarity, migrate with control, and optimize with confidence—end to end.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bento-card relative overflow-hidden rounded-2xl border border-zinc-200 p-6 md:col-span-2">
              <div className="absolute inset-0 -z-20">
                <Image
                  src="/assets/img/cloud-migration/kpi.webp"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--theme)]/90 to-[var(--foreground)]/50 hover:to-[var(--foreground)]/90 transition-all duration-700"></div>
              <h3 className="text-xl font-semibold text-white">Assessment & Feasibility</h3>
              <p className="mt-2 text-zinc-50">Determine fit, risks, and ROI. Build a migration business case mapped to your KPIs.</p>
            </div>
            <div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Platform Evaluation</h3>
              <p className="mt-2 text-zinc-600">Benchmark AWS, Azure, and GCP against performance, cost, and compliance.</p>
              <div className="mt-4 rounded-xl overflow-hidden h-[140px] md:h-[160px] relative">
                <Image
                  src="/assets/img/cloud-migration/benchmark.webp"
                  alt="Cloud platform benchmarking"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Migration Execution</h3>
              <p className="mt-2 text-zinc-600">Orchestrated waves with zero-downtime cutovers and automated validation.</p>
              <div className="mt-4 rounded-xl overflow-hidden h-[160px] md:h-[200px] relative">
                <Image
                  src="/assets/img/cloud-migration/cloud-execution.webp"
                  alt="Cloud platform execution"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bento-card relative overflow-hidden rounded-2xl border border-zinc-200 p-6 md:col-span-2">
              <div className="absolute inset-0 -z-20">
                <Image
                  src="/assets/img/cloud-migration/strategy.webp"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--theme)]/90 to-[var(--foreground)]/50 hover:to-[var(--foreground)]/90 transition-all duration-700"></div>
              <h3 className="text-xl font-semibold text-white">Strategy & Roadmap</h3>
              <p className="mt-2 text-zinc-50">Milestones, guardrails, and architecture patterns tailored to your estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Omnia */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Why Omnia for Cloud Migration</h2>
                <p>We don’t just migrate—we de‑risk change and accelerate value.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: "fas fa-flag-checkered", title: "Outcome‑Backed Migrations", text: "Reference playbooks, rehearsal cutovers, and KPIs tied to business outcomes." },
              { icon: "fas fa-user-shield", title: "Certified Multi‑cloud Engineers", text: "AWS, Azure, and GCP certified teams with regulated‑industry experience." },
              { icon: "fas fa-shield-alt", title: "Security & Compliance by Design", text: "Guardrails mapped to ISO 27001, SOC 2, and your internal controls." },
              { icon: "fas fa-bolt", title: "Proven Accelerators", text: "Landing zone templates, cost baselines, and automated validation to go faster." }
            ].map((card, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="bento-card text-center rounded-2xl border border-zinc-200 bg-white p-6 h-100">
                  <div className="icon text-2xl text-[var(--theme)]"><i className={card.icon}></i></div>
                  <h4 className="mt-2">{card.title}</h4>
                  <p className="text-zinc-600 text-sm">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Our Cloud Migration Process</h2>
                <p>A proven path from discovery to steady-state excellence.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: "fas fa-search", title: "Discovery & Assessment", text: "Analyze inventory, dependencies, and constraints." },
              { icon: "fas fa-drafting-compass", title: "Planning & Design", text: "Target architecture, guardrails, and timeline." },
              { icon: "fas fa-cogs", title: "Migration Execution", text: "Automated waves with zero-downtime cutovers." },
              { icon: "fas fa-check-circle", title: "Optimization & Support", text: "Observability, cost controls, and SRE support." },
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

      {/* Platforms */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Cloud Platforms We Support</h2>
                <p>Expertise across AWS, Azure, and GCP—choose the right platform for your goals.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: "fab fa-aws", title: "Amazon Web Services", text: "EC2, RDS, S3, Lambda, EKS with FinOps." },
              { icon: "fab fa-microsoft", title: "Microsoft Azure", text: "VMs, SQL, AKS, hybrid patterns for enterprise." },
              { icon: "fab fa-google", title: "Google Cloud Platform", text: "GCE, Cloud SQL, GKE, BigQuery analytics." },
            ].map((p, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="bento-card text-center rounded-2xl border border-zinc-200 bg-white p-6 h-100">
                  <div className="icon text-3xl text-[var(--theme)]"><i className={p.icon}></i></div>
                  <h4 className="mt-2">{p.title}</h4>
                  <p className="text-zinc-600 text-sm">{p.text}</p>
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
              <h2 className="mt-3 !text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Frequently Asked Questions</h2>
              <p className="text-zinc-600">We compiled a list of answers to address the most pressing questions regarding our services.</p>
            </div>
            <div className="col-lg-7">
              <div className="faq-accordion">
                <details open>
                  <summary className="break-words">
                    How do you minimize downtime?
                    <span>
                      <i className="fa-solid fa-plus icon-plus"></i>
                      <i className="fa-solid fa-minus icon-minus"></i>
                    </span>
                  </summary>
                  <div className="answer">We design cutovers with blue/green or canary strategies and rehearsal runs.</div>
                </details>
                <details>
                  <summary className="break-words">
                    What about security and compliance?
                    <span>
                      <i className="fa-solid fa-plus icon-plus"></i>
                      <i className="fa-solid fa-minus icon-minus"></i>
                    </span>
                  </summary>
                  <div className="answer">Controls map to your frameworks (e.g., ISO 27001) with continuous validation.</div>
                </details>
                <details>
                  <summary className="break-words">
                    How do you control costs?
                    <span>
                      <i className="fa-solid fa-plus icon-plus"></i>
                      <i className="fa-solid fa-minus icon-minus"></i>
                    </span>
                  </summary>
                  <div className="answer">Right-sizing, reserved capacity, and showback policies are part of our FinOps.</div>
                </details>
                <details>
                  <summary className="break-words">
                    Can you help post-migration?
                    <span>
                      <i className="fa-solid fa-plus icon-plus"></i>
                      <i className="fa-solid fa-minus icon-minus"></i>
                    </span>
                  </summary>
                  <div className="answer">Yes—SRE support, observability, and continuous optimization.</div>
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
            <h5>Ready to Migrate to the Cloud?</h5>
            <p className="ecosystems">Get started with an assessment and roadmap tailored to your goals.</p>
            <div className="main-button mt-3">
              <Link href="/contact"><span className="theme-btn">Start Your Journey</span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
            </div>
          </div>
        </div>
      </section>
      {/* JSON-LD structured data */}
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Cloud Migration",
          "provider": { "@type": "Organization", "name": "Omnia Services" },
          "areaServed": "Global",
          "serviceType": "Cloud Migration",
          "description": "Zero‑downtime cloud migration with security and FinOps.",
        })
      }} />
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How do you minimize downtime?", "acceptedAnswer": { "@type": "Answer", "text": "Blue/green or canary cutovers with rehearsal runs." } },
            { "@type": "Question", "name": "What about security and compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Controls map to frameworks like ISO 27001 with continuous validation." } },
            { "@type": "Question", "name": "How do you control costs?", "acceptedAnswer": { "@type": "Answer", "text": "Right‑sizing, reserved capacity, and showback as part of FinOps." } },
            { "@type": "Question", "name": "Can you help post‑migration?", "acceptedAnswer": { "@type": "Answer", "text": "SRE support, observability, and continuous optimization." } }
          ]
        })
      }} />
    </div>
  );
}
