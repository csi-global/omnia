import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Digital Transformation | Omnia Services',
  description:
    'Comprehensive digital transformation services to modernize your business processes, enhance customer experience, and drive innovation. Expert guidance for successful digital transformation initiatives.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://omniaservices.co.uk/digital-transformation',
  },
  openGraph: {
    title: 'Digital Transformation | Omnia Services',
    description:
      'Comprehensive digital transformation services to modernize your business processes, enhance customer experience, and drive innovation. Expert guidance for successful digital transformation initiatives.',
    type: 'website',
    url: 'https://omniaservices.co.uk/digital-transformation',
    images: ['https://omniaservices.co.uk/assets/img/service/1.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation | Omnia Services',
    description:
      'Comprehensive digital transformation services to modernize your business processes, enhance customer experience, and drive innovation. Expert guidance for successful digital transformation initiatives.',
    images: ['https://omniaservices.co.uk/assets/img/service/1.webp'],
  },
};

export default function DigitalTransformationPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1 className="!text-5xl lg:!text-7xl font-extrabold !leading-tight break-words text-zinc-900">Digital Transformation</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
              </li>
              <li>Digital Transformation</li>
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
              <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">
                Professional Services
              </p>
              <h1 className="mt-3 !text-3xl sm:!text-4xl md:!text-5xl font-extrabold !leading-tight break-words text-zinc-900">
                Digital Transformation
              </h1>
              <p className="mt-3 text-zinc-600 text-base sm:!text-lg break-words">
                Omnia blends strategy, experience, and engineering—accelerated by cloud and automation—to land measurable change.
              </p>
              <div className="mt-5 d-flex gap-3">
                <Link href="/contact" className="main-button">
                  <span className="theme-btn">Talk to an Expert</span>
                  <span className="arrow-btn">
                    <i className="icon-arrow-right"></i>
                  </span>
                </Link>
                <a href="#offerings" className="main-button secondary">
                  <span className="theme-btn">Explore Offerings</span>
                  <span className="arrow-btn">
                    <i className="icon-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rounded-3xl overflow-hidden h-[320px] md:h-[380px] relative">
                <Image
                  src="/assets/img/digital-transformation/digital-transformation.webp"
                  alt="Digital transformation overview"
                  fill
                  sizes="(max-width: 992px) 100vw, 40vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
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
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Why Omnia for Digital Transformation</h2>
                <p>From boardroom vision to front‑line adoption—without losing momentum.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              { icon: 'fas fa-clipboard-check', title: 'Executable Strategy', text: 'Roadmaps tied to KPIs, with release plans and value tracking.' },
              { icon: 'fas fa-people-group', title: 'Adoption & Change', text: 'Enablement, communications, and leadership routines to land the change.' },
              { icon: 'fas fa-gears', title: 'Engineering Depth', text: 'Cloud, platforms, and automation delivered by hands‑on specialists.' },
              { icon: 'fas fa-chart-line', title: 'Transparent Outcomes', text: 'OKRs, benefits baselines, and regular reviews that show progress.' }
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

      {/* Offerings */}
      <section id="offerings" className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Transformation Offerings</h2>
                <p>From roadmap to rollout—balanced across people, process, and platforms.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bento-card relative overflow-hidden rounded-2xl border border-zinc-200 p-6 md:col-span-2">
              <div className="absolute inset-0 -z-20">
                <Image
                  src="/assets/img/digital-transformation/milestones.webp"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--theme)]/60 to-[var(--foreground)]/50 hover:to-[var(--foreground)]/90 transition-all duration-700"></div>
              <h3 className="text-xl font-semibold text-white">Strategy & Roadmap</h3>
              <p className="mt-2 text-zinc-50">
                North‑star vision, milestones, and value tracking.
              </p>
            </div>
            <div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Process Automation</h3>
              <p className="mt-2 text-zinc-600">
                Workflow optimization and intelligent automation.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden h-[140px] md:h-[160px] relative">
                <Image
                  src="/assets/img/digital-transformation/process-automation.webp"
                  alt="Process automation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="bento-card rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-zinc-900">Experience Design</h3>
              <p className="mt-2 text-zinc-600">Customer journeys and product UX that convert.</p>
              <div className="mt-4 rounded-xl overflow-hidden h-[140px] md:h-[160px] relative">
                <Image
                  src="/assets/img/digital-transformation/ux.webp"
                  alt="Process automation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="bento-card relative overflow-hidden rounded-2xl border border-zinc-200 p-6 md:col-span-2">
              <div className="absolute inset-0 -z-20">
                <Image
                  src="/assets/img/digital-transformation/platform-eng.webp"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--theme)]/60 to-[var(--foreground)]/50 hover:to-[var(--foreground)]/90 transition-all duration-700"></div>
              <h3 className="text-xl font-semibold text-white">Platform Engineering</h3>
              <p className="mt-2 text-zinc-50">
                Cloud‑first foundations and enablement for teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Transformation Framework</h2>
                <p>A pragmatic path to outcomes and adoption.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-4">
            {[
              {
                icon: 'fas fa-search',
                title: 'Assess',
                text: 'Current state, opportunities, and risks.',
              },
              {
                icon: 'fas fa-drafting-compass',
                title: 'Plan',
                text: 'Strategy, roadmap, and KPIs.',
              },
              { icon: 'fas fa-cogs', title: 'Build', text: 'Iterative delivery and integrations.' },
              {
                icon: 'fas fa-chart-line',
                title: 'Optimize',
                text: 'Measure and improve continuously.',
              },
            ].map((s, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="rise-card bento-card text-center rounded-2xl border border-zinc-200 bg-white p-6 h-100">
                  <div className="icon text-[var(--theme)] text-2xl">
                    <i className={s.icon}></i>
                  </div>
                  <h4 className="mt-2">{s.title}</h4>
                  <p className="text-zinc-600 text-sm">{s.text}</p>
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
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">
                FAQ
              </span>
              <h2 className="mt-3 !text-3xl sm:!text-4xl md:!text-5xl font-bold !mb-3">Frequently Asked Questions</h2>
              <p className="text-zinc-600">
                Addressing planning, execution, and change management.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="faq-accordion">
                <details open>
                  <summary className="break-words">
                    How do we start?
                    <span>
                      <i className="fa-solid fa-plus icon-plus"></i>
                      <i className="fa-solid fa-minus icon-minus"></i>
                    </span>
                  </summary>
                  <div className="answer">
                    Begin with an assessment workshop to define goals and KPIs.
                  </div>
                </details>
                <details>
                  <summary className="break-words">
                    How do you ensure adoption?
                    <span>
                      <i className="fa-solid fa-plus icon-plus"></i>
                      <i className="fa-solid fa-minus icon-minus"></i>
                    </span>
                  </summary>
                  <div className="answer">
                    Change management, enablement, and measurement baked‑in.
                  </div>
                </details>
                <details>
                  <summary className="break-words">
                    What’s the typical timeline?
                    <span>
                      <i className="fa-solid fa-plus icon-plus"></i>
                      <i className="fa-solid fa-minus icon-minus"></i>
                    </span>
                  </summary>
                  <div className="answer">
                    Roadmap depends on scope; we deliver measurable value in phases.
                  </div>
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
            <h5>Start Your Digital Transformation Journey</h5>
            <p className="ecosystems">
              Our experts guide you with a pragmatic roadmap and quick wins.
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
      </section>

      {/* JSON-LD */}
      <Script
        id="ld-service-dt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Digital Transformation',
            provider: { '@type': 'Organization', name: 'Omnia Services' },
            serviceType: 'Digital Transformation',
            description:
              'Strategy, experience, and engineering—accelerated by cloud and automation.',
          }),
        }}
      />
      <Script
        id="ld-faq-dt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do we start?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Assessment workshop to define goals and KPIs.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you ensure adoption?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Change management and enablement baked-in.',
                },
              },
              {
                '@type': 'Question',
                name: 'What’s the typical timeline?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Phased roadmap with measurable outcomes.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
