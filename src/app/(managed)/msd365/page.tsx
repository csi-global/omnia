import OmniaButton from '@/components/ui/omnia-button';
import OmniaCarousel from '@/components/ui/omnia-carousel';
import OmniaSection from '@/components/ui/omnia-section';
import ServiceCard from '@/components/ui/service-card';
import { MSD365_BENEFITS, MSD365_MODULES, MSD365_SERVICE_CARDS } from '@/lib/constants';
import type { Metadata } from 'next';
import Link from "next/link";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "MSD365 | Omnia Services",
  description: "MSD365 enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your MSD365 investment and streamline operations.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/msd365"
  },
  openGraph: {
    title: "MSD365 | Omnia Services",
    description: "MSD365 enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your MSD365 investment and streamline operations.",
    type: "website",
    url: "https://omniaservices.co.uk/msd365",
    images: ["https://omniaservices.co.uk/assets/img/service/4.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "MSD365 | Omnia Services",
    description: "MSD365 enterprise solutions for comprehensive business management. Expert implementation, customization, and support services to optimize your MSD365 investment and streamline operations.",
    images: ["https://omniaservices.co.uk/assets/img/service/4.webp"]
  }
};

export default function MSD365Page() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>MSD365</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>MSD365</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Service Details Section */}
      <OmniaSection>
        <div className="sertvice-details-wrapper">
          <div className="service-details-content">
            <h2 className="!text-3xl sm:!text-6xl !text-center">Microsoft Dynamics 365 Services</h2>
            <p className="max-w-3xl mx-auto">
              Omnia implements, optimizes and runs Microsoft Dynamics 365 across Sales, Customer
              Service, Field Service, Finance and Supply Chain. We unify data on Dataverse, integrate
              with Microsoft 365, Azure and third‑party systems, and enable Power Platform/Copilot so
              teams move faster with less manual work.
            </p>

            <div className="pt-4 pb-5">
              <h3 className="mb-3 text-center !text-3xl md:!text-5xl">Why Choose Our MSD365 Services?</h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-3xl mx-auto">
                  Certified Microsoft Dynamics 365 specialists, proven multi-geo rollouts and a pragmatic approach to
                  change — backed by Power Platform and Copilot to automate routine work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-3xl mx-auto">
                  {[
                    { icon: 'fas fa-id-badge', title: 'Certified D365 Specialists' },
                    { icon: 'fas fa-exchange-alt', title: 'Implementation & Migration' },
                    { icon: 'fas fa-robot', title: 'Power Platform + Copilot' },
                    { icon: 'fas fa-headset', title: 'Managed Support & Governance' },
                    { icon: 'fas fa-plug', title: 'Integration with Microsoft 365 & Azure' },
                    { icon: 'fas fa-chart-line', title: 'Business Intelligence & Analytics' },
                  ].map((item) => (
                    <div key={item.title}>
                      <div className="bg-gradient-to-tl from-[var(--foreground)] from-5% via-[var(--theme)] via-100% rounded-2xl p-2 flex items-center gap-2">
                        <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0">
                          <i className={`${item.icon} text-[var(--theme)] text-xl`}></i>
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

      {/* MSD365 Services */}
      <OmniaSection>
        <h3 className="!text-3xl sm:!text-5xl">Our MSD365 Services</h3>
        <OmniaCarousel
          items={MSD365_SERVICE_CARDS.map((c, i) => (
            <ServiceCard key={i} title={c.title} description={c.description} icon={c.icon} />
          ))}
        />
      </OmniaSection>

      {/* MSD365 Core Modules */}
      <OmniaSection className="bg-gradient-to-br from-[var(--theme2)]/30 via-[var(--theme)]/30 to-[var(--theme2)]/50 rounded-2xl m-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center text-black">
                <h2 className="!text-3xl sm:!text-5xl !text-[var(--theme)]">MSD365 Core Modules</h2>
                <p>
                  We help you deploy and optimize the Dynamics apps that drive your business.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MSD365_MODULES.map((item) => (
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

      {/* Implementation Benefits (styled cards) */}
      <OmniaSection className="bg-light rounded-2xl fix">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>MSD365 Key Business Outcomes</h2>
              <p>
                Real outcomes from well‑run Dynamics programs — not just feature rollouts. Our MSD365 services help you achieve key business outcomes through the implementation of the Dynamics 365 apps.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          {MSD365_BENEFITS.map((b) => (
            <div className="col-lg-4 col-md-6" key={b.title}>
              <div className="industry-item text-center p-4 rounded-2xl shadow-sm border border-[var(--theme)]/20 bg-white">
                <span className="block h-1 w-10 bg-[var(--theme)] rounded-full mx-auto mb-3"></span>
                <div className="flex items-center justify-center mb-2">
                  <div className="size-10 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className={b.icon}></i>
                  </div>
                </div>
                <h4 className="m-0 text-[var(--theme)]">{b.title}</h4>
                <p className="mt-2">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </OmniaSection>

      {/* CTA Section */}
      <OmniaSection>
        <div className="container">
          <div className="row g-4 pt-4">
            <div className="col-12 mx-auto">
              <div className="lcnc-banner">
                <h5>Transform Your Business with MSD365</h5>
                <p className="ecosystems">
                  Ready to optimize your business operations with MSD365? Our experts will help you implement a solution that streamlines processes, improves efficiency, and drives sustainable growth.
                </p>
                <div className="main-button mt-3">
                  <Link href="/contact">
                    <OmniaButton text="Get MSD365 Solutions" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* SEO: JSON-LD for MSD365 */}
      <Script id="ld-msd365" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Microsoft Dynamics 365 Services',
          serviceType: 'Dynamics 365 implementation and managed services',
          provider: { '@type': 'Organization', name: 'Omnia Services', url: 'https://omniaservices.co.uk' },
          areaServed: 'GB',
          url: 'https://omniaservices.co.uk/msd365',
          description: 'Implementation, migration, integration and managed support for Microsoft Dynamics 365 across Sales, Customer Service, Finance and Supply Chain with Power Platform and Copilot enablement.'
        })}
      </Script>
    </div>
  );
}
