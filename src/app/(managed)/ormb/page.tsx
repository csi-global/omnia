import OmniaButton from '@/components/ui/omnia-button';
import OmniaCarousel from '@/components/ui/omnia-carousel';
import OmniaSection from '@/components/ui/omnia-section';
import ServiceCard from '@/components/ui/service-card';
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
            <h1 className="!text-5xl sm:!text-7xl">Oracle Revenue Management and Billing (ORMB)</h1>
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
        <div className="service-details-wrapper">
          <div className="service-details-content">
            <p>
              Transform your billing operations with Oracle Revenue Management and Billing (ORMB).
              Our expert team delivers comprehensive ORMB implementation, customization, and
              support services to streamline your revenue management processes and enhance billing
              accuracy.
            </p>

            <div className="pt-4 pb-5">
              <h3 className="mb-3 text-center !text-5xl">Why Choose Our ORMB Services?</h3>
              <div className="flex flex-col gap-4">
                <p className="text-center mx-auto">
                  With deep expertise in Oracle Revenue Management and Billing, we help
                  organizations optimize their billing processes, reduce revenue leakage, and
                  improve customer satisfaction through automated, accurate billing solutions.
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

      {/* ORMB Services */}
      <OmniaSection>
        <h3 className="text-center !text-3xl sm:!text-5xl mb-3">Our ORMB Services</h3>
        {(() => {
          const cards = [
            {
              icon: 'fas fa-cogs',
              title: 'ORMB Implementation',
              description:
                'Complete ORMB implementation services including system design, configuration, data migration, and user training to ensure successful deployment.',
            },
            {
              icon: 'fas fa-chart-line',
              title: 'Billing Process Optimization',
              description:
                'Streamline billing operations with automated workflows, rule-based pricing, and advanced billing cycle management for improved efficiency.',
            },
            {
              icon: 'fas fa-balance-scale',
              title: 'Revenue Recognition',
              description:
                'Implement automated revenue recognition processes compliant with accounting standards including ASC 606 and IFRS 15 for accurate financial reporting.',
            },
            {
              icon: 'fas fa-code',
              title: 'Custom Development',
              description:
                'Tailored ORMB solutions with custom pricing models, billing rules, and integration capabilities to meet specific business requirements.',
            },
            {
              icon: 'fas fa-plug',
              title: 'System Integration',
              description:
                'Seamless integration with existing systems including CRM, ERP, and payment gateways for unified business operations.',
            },
            {
              icon: 'fas fa-headset',
              title: 'Managed Support',
              description:
                'Comprehensive support and maintenance services including system monitoring, performance optimization, and issue resolution.',
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
            {[
              {
                icon: 'fas fa-calculator',
                title: 'Flexible Pricing',
                description:
                  'Support for complex pricing models including usage-based, subscription, tiered, and promotional pricing structures.',
              },
              {
                icon: 'fas fa-chart-line',
                title: 'Revenue Recognition',
                description:
                  'Automated revenue recognition with compliance to accounting standards and flexible allocation rules.',
              },
              {
                icon: 'fas fa-file-invoice',
                title: 'Invoice Generation',
                description:
                  'Automated invoice generation with customizable templates and multi-format output capabilities.',
              },
              {
                icon: 'fas fa-exchange-alt',
                title: 'Payment Processing',
                description:
                  'Integrated payment processing with support for multiple payment methods and automated collection workflows.',
              },
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
