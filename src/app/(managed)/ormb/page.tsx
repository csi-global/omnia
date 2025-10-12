import OmniaButton from '@/components/ui/omnia-button';
import OmniaCarousel from '@/components/ui/omnia-carousel';
import OmniaSection from '@/components/ui/omnia-section';
import ServiceCard from '@/components/ui/service-card';
import { ORMB_FEATURES, ORMB_SERVICE_CARDS } from '@/lib/constants';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oracle Revenue Management and Billing (ORMB) | Omnia Services',
  description:
    'Expert Oracle Revenue Management and Billing (ORMB) services including implementation, customization, integration, and support. Streamline billing operations with proven ORMB solutions.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://omniaservices.co.uk/ormb',
  },
  openGraph: {
    title: 'Oracle Revenue Management and Billing (ORMB) | Omnia Services',
    description:
      'Expert Oracle Revenue Management and Billing (ORMB) services including implementation, customization, integration, and support. Streamline billing operations with proven ORMB solutions.',
    type: 'website',
    url: 'https://omniaservices.co.uk/ormb',
    images: ['https://omniaservices.co.uk/assets/img/service/1.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracle Revenue Management and Billing (ORMB) | Omnia Services',
    description:
      'Expert Oracle Revenue Management and Billing (ORMB) services including implementation, customization, integration, and support. Streamline billing operations with proven ORMB solutions.',
    images: ['https://omniaservices.co.uk/assets/img/service/1.webp'],
  },
};

export default function ORMBPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1 className="!text-5xl sm:!text-7xl !font-bold !leading-tight">ORMB <br />Oracle Revenue Management and Billing</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
              </li>
              <li>ORMB</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <OmniaSection>
        <div className="sertvice-details-wrapper">
          <div className="service-details-content">
            <h2 className="!text-3xl sm:!text-6xl !text-center">Oracle Revenue Management and Billing</h2>
            <p className="max-w-3xl mx-auto">
              Omnia delivers comprehensive ORMB solutions for organizations
              seeking to modernize their billing and revenue operations. Our expert team specializes in ORMB
              implementation, customization, integration, and optimization services that help you streamline complex
              billing processes, reduce revenue leakage, and enhance customer satisfaction through automated,
              accurate billing solutions.
            </p>

            <div className="pt-4 pb-5">
              <h3 className="mb-3 text-center !text-3xl md:!text-5xl">Why Choose Omnia for ORMB?</h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-3xl mx-auto">
                  With extensive experience in Oracle Revenue Management and Billing implementations and optimizations,
                  Omnia delivers solutions that align with your business processes and drive operational excellence.
                  We understand the platform&apos;s capabilities across utility, telecommunications, and financial services
                  industries, and leverage its full potential to transform your billing operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-3xl mx-auto">
                  {[
                    {
                      icon: 'fa-solid fa-screwdriver-wrench',
                      title: 'Complete Implementation',
                    },
                    {
                      icon: 'fa-solid fa-plug',
                      title: 'Custom Configuration & Integration',
                    },
                    {
                      icon: 'fa-solid fa-chart-line',
                      title: 'Revenue Optimization',
                    },
                    {
                      icon: 'fa-solid fa-headset',
                      title: '24/7 Support & Maintenance',
                    },
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

      {/* ORMB Services */}
      <OmniaSection>
        <h3 className="text-center !text-3xl sm:!text-5xl mb-3">Our ORMB Services</h3>
        <OmniaCarousel
          items={ORMB_SERVICE_CARDS.map((c, i) => (
            <ServiceCard key={i} title={c.title} description={c.description} icon={c.icon} />
          ))}
        />
      </OmniaSection>

      {/* ORMB Features */}
      <OmniaSection className="bg-gradient-to-br from-[var(--theme2)]/30 via-[var(--theme)]/30 to-[var(--theme2)]/50 rounded-2xl mb-8 m-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center text-black">
                <h2 className="!text-3xl sm:!text-5xl !text-[var(--theme)]">ORMB Key Features & Capabilities</h2>
                <p>
                  Leverage the full power of Oracle Revenue Management and Billing with our
                  comprehensive implementation and optimization services.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ORMB_FEATURES.map((item) => (
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

      {/* Industry Applications */}
      <OmniaSection className="bg-light rounded-2xl fix">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>Industry Applications</h2>
              <p>
                ORMB solutions tailored for various industries with specific billing and revenue
                management requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          <div className="col-lg-4 col-md-6">
            <div className="industry-item text-center p-4 rounded-2xl shadow-sm border border-[var(--theme)]/20 bg-white">
              <span className="block h-1 w-10 bg-[var(--theme)] rounded-full mx-auto mb-3"></span>
              <div className="flex items-center justify-center mb-2">
                <div className="size-10 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                  <i className="fas fa-wifi"></i>
                </div>
              </div>
              <h4 className="m-0 text-[var(--theme)]">Telecommunications</h4>
              <p className="mt-2">
                Complex billing for voice, data, and value-added services with usage-based pricing
                and real-time rating capabilities.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-item text-center p-4 rounded-2xl shadow-sm border border-[var(--theme)]/20 bg-white">
              <span className="block h-1 w-10 bg-[var(--theme)] rounded-full mx-auto mb-3"></span>
              <div className="flex items-center justify-center mb-2">
                <div className="size-10 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>
              <h4 className="m-0 text-[var(--theme)]">Utilities</h4>
              <p className="mt-2">
                Meter-based billing for electricity, gas, and water services with tiered pricing
                and demand-based charges.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-item text-center p-4 rounded-2xl shadow-sm border border-[var(--theme)]/20 bg-white">
              <span className="block h-1 w-10 bg-[var(--theme)] rounded-full mx-auto mb-3"></span>
              <div className="flex items-center justify-center mb-2">
                <div className="size-10 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                  <i className="fas fa-cloud"></i>
                </div>
              </div>
              <h4 className="m-0 text-[var(--theme)]">Cloud Services</h4>
              <p className="mt-2">
                Subscription and consumption-based billing for SaaS, PaaS, and IaaS offerings with
                automated provisioning.
              </p>
            </div>
          </div>
        </div>
      </OmniaSection>

      {/* CTA Section */}
      <OmniaSection>
        <div className="col-12 mx-auto">
          <div className="lcnc-banner">
            <h5>Optimize Your Billing Operations Today</h5>
            <p className="ecosystems">
              Transform your revenue management and billing processes with Oracle ORMB. Our experts
              will help you implement a solution that reduces costs, improves accuracy, and enhances
              customer satisfaction.
            </p>
            <div className="main-button mt-3">
              <Link href="/contact">
                <OmniaButton text="Get ORMB Solutions" />
              </Link>
            </div>
          </div>
        </div>
      </OmniaSection>
    </div>
  );
}
