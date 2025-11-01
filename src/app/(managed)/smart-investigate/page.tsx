import OmniaButton from '@/components/ui/omnia-button';
import OmniaCarousel from '@/components/ui/omnia-carousel';
import OmniaSection from '@/components/ui/omnia-section';
import ServiceCard from '@/components/ui/service-card';
import {
  SMART_INVESTIGATE_CAPABILITIES,
  SMART_INVESTIGATE_SERVICE_CARDS,
  SMART_INVESTIGATE_USE_CASES,
  SMART_INVESTIGATE_WHY_CHOOSE_CARDS
} from '@/lib/constants';
import type { Metadata } from 'next';
import Link from "next/link";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Smart Investigate | Omnia Services",
  description: "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/smart-investigate"
  },
  openGraph: {
    title: "Smart Investigate | Omnia Services",
    description: "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making.",
    type: "website",
    url: "https://omniaservices.co.uk/smart-investigate",
    images: ["https://omniaservices.co.uk/assets/img/service/3.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Investigate | Omnia Services",
    description: "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making.",
    images: ["https://omniaservices.co.uk/assets/img/service/3.webp"]
  }
};

export default function SmartInvestigatePage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1 className="!text-5xl lg:!text-7xl font-extrabold !leading-tight break-words text-zinc-900">Smart Investigate</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Smart Investigate</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO: JSON-LD for Smart Investigate */}
      <Script id="ld-smartinvestigate" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Smart Investigate Services",
          "serviceType": "AI-powered investigation and analytics",
          "provider": { "@type": "Organization", "name": "Omnia Services", "url": "https://omniaservices.co.uk" },
          "areaServed": "GB",
          "url": "https://omniaservices.co.uk/smart-investigate",
          "description": "Smart Investigate solutions for automated investigation and analysis. Advanced analytics, AI-powered insights, and intelligent reporting to streamline investigation processes and improve decision-making."
        })}
      </Script>

      {/* Service Details Section */}
      <OmniaSection>
        <div className="service-details-wrapper">
          <div className="service-details-content">
            <h2 className="!text-3xl sm:!text-6xl !text-center">Smart Investigate Solutions</h2>
            <p className="max-w-3xl mx-auto">
              Omnia&apos;s Smart Investigate accelerates case resolution with AI-assisted analysis and
              workflow automation. We surface patterns, score risk and orchestrate evidence
              collection so teams close more cases faster with better accuracy.
            </p>

            <div className="pt-4 pb-5">
              <h3 className="mb-3 text-center !text-3xl md:!text-5xl">Why Choose Smart Investigate?</h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-3xl mx-auto">
                  Transform complex investigation processes with AI-powered analytics that reduce
                  manual effort, improve accuracy, and deliver faster results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-3xl mx-auto">
                  {SMART_INVESTIGATE_WHY_CHOOSE_CARDS.map((item) => (
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

      {/* Smart Investigate Services */}
      <OmniaSection>
        <h3 className="!text-3xl sm:!text-5xl">Our Smart Investigate Services</h3>
        <OmniaCarousel
          items={SMART_INVESTIGATE_SERVICE_CARDS.map((c, i) => (
            <ServiceCard key={i} title={c.title} description={c.description} icon={c.icon} />
          ))}
        />
      </OmniaSection>

      {/* Key Features (styled like ORMB features) */}
      <OmniaSection className="bg-gradient-to-br from-[var(--theme2)]/30 via-[var(--theme)]/30 to-[var(--theme2)]/50 rounded-2xl m-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center text-black">
                <h2 className="!text-3xl sm:!text-5xl !text-[var(--theme)]">Smart Investigate Key Features</h2>
                <p>
                  Comprehensive investigation capabilities powered by advanced technology to deliver accurate, timely, and actionable results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SMART_INVESTIGATE_CAPABILITIES.map((item) => (
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

      {/* Use Cases (styled cards) */}
      <OmniaSection className="bg-light rounded-2xl">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title text-center">
              <h2>Industry Use Cases</h2>
              <p>
                Smart Investigate solutions applied across various industries to address specific investigation and analysis challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 pt-4">
          {SMART_INVESTIGATE_USE_CASES.map((u) => (
            <div className="col-lg-4 col-md-6" key={u.title}>
              <div className="industry-item text-center p-4 rounded-2xl shadow-sm border border-[var(--theme)]/20 bg-white">
                <span className="block h-1 w-10 bg-[var(--theme)] rounded-full mx-auto mb-3"></span>
                <div className="flex items-center justify-center mb-2">
                  <div className="size-10 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className={u.icon}></i>
                  </div>
                </div>
                <h4 className="m-0 text-[var(--theme)]">{u.title}</h4>
                <p className="mt-2">{u.description}</p>
              </div>
            </div>
          ))}
        </div>
      </OmniaSection>

      {/* CTA Section */}
      <OmniaSection>
        <div className="container">
          <div className="col-12 mx-auto">

            <div className="lcnc-banner">
              <h5>Transform Your Investigation Processes Today</h5>
              <p className="ecosystems">
                Leverage the power of AI and advanced analytics to streamline your investigation processes, improve accuracy, and accelerate decision-making with Smart Investigate solutions.
              </p>
              <div className="main-button mt-3">
                <Link href="/contact">
                  <OmniaButton text="Get Smart Investigate Solutions" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </OmniaSection>
    </div>
  );
}
