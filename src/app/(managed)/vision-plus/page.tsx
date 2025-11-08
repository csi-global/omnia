import OmniaButton from '@/components/ui/omnia-button';
import OmniaCarousel from '@/components/ui/omnia-carousel';
import OmniaSection from '@/components/ui/omnia-section';
import ServiceCard from '@/components/ui/service-card';
import {
  VISION_PLUS_CAPABILITIES,
  VISION_PLUS_IMPLEMENTATION_STEPS,
  VISION_PLUS_SERVICE_CARDS,
  VISION_PLUS_WHY_CHOOSE_CARDS
} from '@/lib/constants';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VisionPLUS | Account Processing Platform | Omnia Services',
  description:
    'Expert Fiserv VisionPLUS implementation and support services. Comprehensive account processing solutions for payment cards, loans, and commercial products with real-time authorization and digital customer experience.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.omniaservices.co.uk/vision-plus',
  },
  openGraph: {
    title: 'VisionPLUS | Account Processing Platform | Omnia Services',
    description:
      'Expert Fiserv VisionPLUS implementation and support services. Comprehensive account processing solutions for payment cards, loans, and commercial products with real-time authorization and digital customer experience.',
    type: 'website',
    url: 'https://www.omniaservices.co.uk/vision-plus',
    images: ['https://www.omniaservices.co.uk/assets/img/service/2.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisionPLUS | Account Processing Platform | Omnia Services',
    description:
      'Expert Fiserv VisionPLUS implementation and support services. Comprehensive account processing solutions for payment cards, loans, and commercial products with real-time authorization and digital customer experience.',
    images: ['https://www.omniaservices.co.uk/assets/img/service/2.webp'],
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
            <h1 className="!text-5xl sm:!text-7xl !font-bold !leading-tight">VisionPLUS</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
              </li>
              <li>VisionPLUS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <OmniaSection>
        <div className="sertvice-details-wrapper">
          <div className="service-details-content">
            <h2 className="!text-3xl sm:!text-6xl !text-center">VisionPLUS</h2>
            <p className="max-w-4xl mx-auto text-center">
              Omnia delivers fast, cost-effective VisionPLUS implementation, migration, and optimization for modern digital banking. Streamline account processing and launch new products with expert support.
            </p>

            <div className="pt-4 pb-5">
              <h3 className="mb-3 text-center !text-3xl md:!text-5xl">Why Choose Omnia for VisionPLUS?</h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-4xl mx-auto text-center">
                  With extensive experience in VisionPLUS implementations, migrations, and optimizations, Omnia
                  delivers solutions that align with your business processes and drive operational excellence.
                  We understand the platform&apos;s capabilities from mainframe to modern Linux-based deployments and
                  leverage its full potential for your financial institution.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-3xl mx-auto">
                  {VISION_PLUS_WHY_CHOOSE_CARDS.map((item) => (
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

      {/* VisionPLUS Services */}
      <OmniaSection>
        <h3 className="!text-2xl sm:!text-4xl md:!text-6xl">Our VisionPLUS Services</h3>
        <OmniaCarousel
          items={VISION_PLUS_SERVICE_CARDS.map((c, i) => (
            <ServiceCard key={i} title={c.title} description={c.description} icon={c.icon} />
          ))}
        />
      </OmniaSection>

      {/* VisionPLUS Key Capabilities */}
      <OmniaSection className="bg-gradient-to-br from-[var(--theme2)]/30 via-[var(--theme)]/30 to-[var(--theme2)]/50 rounded-2xl m-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center text-black">
                <h2 className="text-3xl sm:!text-5xl !text-[var(--theme)]">VisionPLUS Platform Capabilities</h2>
                <p className="max-w-3xl mx-auto">
                  Comprehensive account processing platform managing payment cards, loans, prepaid products,
                  and commercial cards with modern features for digital banking.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VISION_PLUS_CAPABILITIES.map((item) => (
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

      {/* Implementation Process */}
      <OmniaSection className="bg-light rounded-2xl fix">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>Our VisionPLUS Implementation Approach</h2>
              <p>
                Proven methodology for VisionPLUS implementation, migration, and optimization that
                minimizes risk and accelerates time to value for your financial institution.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          {VISION_PLUS_IMPLEMENTATION_STEPS.map((p) => (
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
                <h5>Maximize Your VisionPLUS Investment</h5>
                <p className="ecosystems">
                  Ready to implement, upgrade, or optimize your VisionPLUS platform? Our experienced team
                  specializes in Fiserv VisionPLUS implementations, migrations to modern platforms, API
                  integrations, and managed support services that help financial institutions launch products
                  faster, reduce costs, and deliver exceptional digital banking experiences.
                </p>
                <div className="main-button mt-3">
                  <Link href="/contact">
                    <OmniaButton text="Get VisionPLUS Expertise" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* SEO: JSON-LD for VisionPLUS */}
      <Script id="ld-visionplus" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'VisionPLUS',
          serviceType: 'VisionPLUS account processing platform implementation and support',
          provider: {
            '@type': 'Organization',
            name: 'Omnia Services',
            url: 'https://www.omniaservices.co.uk',
          },
          areaServed: 'GB',
          url: 'https://www.omniaservices.co.uk/vision-plus',
          description:
            'Expert Fiserv VisionPLUS implementation and support services. Comprehensive account processing solutions for payment cards, loans, and commercial products with real-time authorization, mobile payments, and digital customer experience. Services include platform implementation, modernization, API integration, and 24/7 managed support.',
          offers: {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'VisionPLUS Implementation & Support',
            },
          },
        })}
      </Script>

    </div>
  );
}
