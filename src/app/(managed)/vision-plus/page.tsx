import OmniaButton from '@/components/ui/omnia-button';
import OmniaCarousel from '@/components/ui/omnia-carousel';
import OmniaSection from '@/components/ui/omnia-section';
import ServiceCard from '@/components/ui/service-card';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Vision Plus | Omnia Services',
  description:
    'Vision Plus enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your Vision Plus investment.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://omniaservices.co.uk/vision-plus',
  },
  openGraph: {
    title: 'Vision Plus | Omnia Services',
    description:
      'Vision Plus enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your Vision Plus investment.',
    type: 'website',
    url: 'https://omniaservices.co.uk/vision-plus',
    images: ['https://omniaservices.co.uk/assets/img/service/2.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision Plus | Omnia Services',
    description:
      'Vision Plus enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your Vision Plus investment.',
    images: ['https://omniaservices.co.uk/assets/img/service/2.webp'],
  },
};

export default function VisionPlusPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Vision Plus</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
              </li>
              <li>Vision Plus</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <OmniaSection>
        <div className="sertvice-details-wrapper">
          <div className="service-details-content">
            <h2 className="!text-3xl sm:!text-6xl !text-center">Vision Plus Enterprise Solutions</h2>
            <p className="max-w-3xl mx-auto">
              Omnia helps issuers and acquirers get more from VisionPLUS — from implementation and
              product setup to modernization and day‑2 operations. We configure authorizations,
              clearing & settlement, disputes, loyalty and reporting, and integrate VisionPLUS with
              your digital channels and back‑office systems for measurable outcomes.
            </p>

            <div className="pt-4 pb-5">
              <h3 className="mb-3 text-center !text-3xl ">Why Choose Our Vision Plus Services?</h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-3xl mx-auto">
                  With extensive experience in Vision Plus implementations and customizations, we
                  deliver solutions that align with your business processes and drive operational
                  excellence across your organization.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-3xl mx-auto">
                  {[
                    { icon: 'fa-solid fa-id-card', title: 'Issuer & Acquirer Expertise' },
                    { icon: 'fa-solid fa-diagram-project', title: 'Modernization & APIs' },
                    { icon: 'fas fa-shield-alt', title: 'Regulatory & PCI Compliance' },
                    { icon: 'fa-solid fa-headset', title: '24×7 Run & Optimize' },
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

      {/* Vision Plus Services */}
      <OmniaSection>
        <h3 className="!text-2xl sm:!text-4xl md:!text-6xl">Our Vision Plus Services</h3>
        {(() => {
          const cards = [
            {
              icon: 'fas fa-cogs',
              title: 'Implementation & Upgrades',
              description:
                'Greenfield installs and version upgrades with parameterization, data conversion, certification support and controlled cutover.',
            },
            {
              icon: 'fas fa-code',
              title: 'Product Setup & Issuance',
              description:
                'Design product hierarchies, fees, interest rules, EMV profiles and tokenized cards; launch and scale new card propositions faster.',
            },
            {
              icon: 'fas fa-plug',
              title: 'Authorization & Risk Controls',
              description:
                'Optimize real‑time authorization strategies, routing and risk rules; improve approval rates while reducing fraud exposure.',
            },
            {
              icon: 'fas fa-chart-line',
              title: 'Clearing & Settlement',
              description:
                'Tune posting, interchange and reconciliation; streamline GL mapping and settlement cycles for accurate, timely financials.',
            },
            {
              icon: 'fas fa-scale-balanced',
              title: 'Disputes & Chargebacks',
              description:
                'Automate case lifecycle, reason codes and representments to meet Visa/Mastercard timelines and reduce write‑offs.',
            },
            {
              icon: 'fas fa-headset',
              title: 'Managed Support',
              description:
                '24×7 platform monitoring, performance optimization and incident response with SLAs aligned to your business hours and markets.',
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

      {/* Vision Plus Core Areas */}
      <OmniaSection className="bg-gradient-to-br from-[var(--theme2)]/30 via-[var(--theme)]/30 to-[var(--theme2)]/50 rounded-2xl m-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center text-black">
                <h2 className="text-3xl sm:!text-5xl !text-[var(--theme)]">VisionPLUS Core Areas We Deliver</h2>
                <p className="max-w-3xl mx-auto">
                  Omnia configures and optimizes the VisionPLUS stack across the functions that
                  matter most to issuers and acquirers.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: 'fas fa-id-card', title: 'Issuing & Account Management', description: 'End‑to‑end lifecycle for accounts, cards, fees, interest, limits and hierarchies.' },
              { icon: 'fas fa-bolt', title: 'Authorization & Switching', description: 'Real‑time auth rules, routing, velocity controls and ISO 8583 connectivity.' },
              { icon: 'fas fa-file-invoice-dollar', title: 'Clearing & Settlement', description: 'Interchange processing, postings, GL mapping, reconciliation and settlement.' },
              { icon: 'fas fa-scale-balanced', title: 'Disputes & Chargebacks', description: 'Case management, reason codes, representments and compliance timelines.' },
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

      {/* Implementation Process (styled cards) */}
      <OmniaSection className="bg-light rounded-2xl fix">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>Our Implementation Process</h2>
              <p>
                A proven VisionPLUS delivery playbook that minimizes risk and accelerates time to
                value.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          {[
            { icon: 'fas fa-magnifying-glass-chart', title: 'Fit‑Gap & Roadmap', description: 'Assess current stack, target outcomes and compliance; define phased roadmap.' },
            { icon: 'fas fa-sliders', title: 'Configuration & Data Migration', description: 'Parameterization, data conversion and integration with channels and back office.' },
            { icon: 'fas fa-gauge-high', title: 'Performance & Certification', description: 'Load testing, scheme certification and operational readiness validation.' },
            { icon: 'fas fa-flag-checkered', title: 'Cutover & Hypercare', description: 'Controlled go‑live, monitoring and issue burn‑down until KPIs stabilize.' },
          ].map((p) => (
            <div className="col-lg-3 col-md-6" key={p.title}>
              <div className="industry-item text-center p-4 rounded-2xl shadow-sm border border-[var(--theme)]/20 bg-white">
                <span className="block h-1 w-10 bg-[var(--theme)] rounded-full mx-auto mb-3"></span>
                <div className="flex items-center justify-center mb-2">
                  <div className="size-10 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className={p.icon}></i>
                  </div>
                </div>
                <h4 className="m-0 text-[var(--theme)]">{p.title}</h4>
                <p className="mt-2">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </OmniaSection>

      {/* CTA Section */}
      <OmniaSection>
        <div className="container">
          <div className="row g-4 pt-4">
            <div className="col-12">
              <div className="lcnc-banner">
                <h5>Transform Your Business with Vision Plus</h5>
                <p className="ecosystems">
                  Ready to optimize your Vision Plus investment? Our experts will help you implement
                  a solution that streamlines operations, improves efficiency, and drives business
                  growth.
                </p>
                <div className="main-button mt-3">
                  <Link href="/contact">
                    <OmniaButton text="Get Vision Plus Solutions" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* SEO: JSON-LD for Vision Plus */}
      <Script id="ld-visionplus" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Vision Plus Services',
          serviceType: 'Vision Plus implementation and support',
          provider: {
            '@type': 'Organization',
            name: 'Omnia Services',
            url: 'https://omniaservices.co.uk',
          },
          areaServed: 'GB',
          url: 'https://omniaservices.co.uk/vision-plus',
          description:
            'Vision Plus enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your Vision Plus investment.',
        })}
      </Script>

    </div>
  );
}
