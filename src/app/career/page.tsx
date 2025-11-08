import OmniaButton from '@/components/ui/omnia-button';
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Omnia Services",
  description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.omniaservices.co.uk/career"
  },
  openGraph: {
    title: "Careers | Omnia Services",
    description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
    type: "website",
    url: "https://www.omniaservices.co.uk/career",
    images: ["https://www.omniaservices.co.uk/assets/img/about/about-11.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Omnia Services",
    description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
    images: ["https://www.omniaservices.co.uk/assets/img/about/about-11.webp"]
  }
};

export default function CareerPage() {
  return (
    <div className="">
      {/* Breadcrumb Part */}
      <div
        className="breadcrumb-wrapper bg-cover mb-24"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Career</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero Section - BIG-style */}
      <section className="section-padding fix relative overflow-visible bg-gradient-to-br from-[#e8e9eb] to-[#fbc] rounded-xl sm:rounded-2xl m-2">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10">
            {/* Left copy */}
            <div className="max-w-3xl lg:max-w-4xl text-left">
              <p className="uppercase tracking-widest font-semibold mb-3 !text-[var(--theme)]">Be Part of Something Big</p>
              <h1 className="!text-3xl sm:!text-5xl font-bold leading-tight mb-4 break-words">Shape your career with cutting-edge, next-generation innovations</h1>
              <p className="text-base sm:!text-lg md:!text-xl !mb-6 sm:!mb-7 text-zinc-50">
                Join our global team and do your best work in a supportive, high-impact environment.
              </p>
              <div className="flex justify-start">
                <Link href="/contact"><OmniaButton text="See Open Roles" /></Link>
              </div>
            </div>

            {/* Right image collage (placeholder assets) */}
            <div className="relative md:ml-auto w-full max-w-[520px] mt-8 md:mt-0">
              {/* Decorative top card */}
              <div className="hidden sm:block absolute -top-10 -left-6 md:-top-14 md:-left-10 w-40 md:w-56 h-28 md:h-40 rounded-2xl bg-indigo-400/40 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)]" />

              {/* Main image */}
              <div className="relative rounded-3xl bg-white/90 p-2 shadow-lg sm:shadow-2xl">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/img/career/career-1.webp"
                    alt="Team placeholder"
                    className="block w-full h-auto aspect-[16/9] object-contain"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Bottom-right offset card */}
              <div className="hidden sm:block absolute -right-6 md:-right-10 -bottom-6 md:-bottom-10 w-28 md:w-40 h-20 md:h-28 rounded-3xl bg-white shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why build your career at Omnia */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-5xl font-extrabold !mb-4">Why build your career at Omnia</h2>
                <p>We optimise for craft, clarity and enablement—so you can do your best work with people who care.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-2">
            {
              [
                {
                  title: "Meaningful Impact",
                  description: "Work that reaches real customers. We ship outcomes—not vanity projects or endless tickets.",
                  icon: "fas fa-bullseye"
                },
                {
                  title: "Autonomy with Support",
                  description: "Own problems end‑to‑end with clear goals, strong peers and mentors in your corner.",
                  icon: "fas fa-hands-helping"
                },
                {
                  title: "Growth Built‑In",
                  description: "Dedicated learning time, funded certifications and coaching to move you forward faster.",
                  icon: "fas fa-seedling"
                },
                {
                  title: "Flexible by Default",
                  description: "Remote‑first, async‑friendly and hybrid when it helps—so work fits the life you want.",
                  icon: "fas fa-globe-europe"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-2">
                  <div className="size-24 px-12 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--theme)]/50 text-white flex items-center justify-center">
                    <i className={item.icon + " text-2xl"}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Values in action */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-5xl font-extrabold !mb-4">Values in action</h2>
                <p>How we operationalise craft, clarity and enablement to deliver measurable business outcomes.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {
              [
                {
                  title: "Craft",
                  description: "Fewer steps, faster releases",
                  icon: "fas fa-wrench",
                  chips: [
                    { label: "Lead time -45%", icon: "fas fa-clock" },
                    { label: "Rollback rate 0%", icon: "fas fa-check" }
                  ]
                },
                {
                  title: "Clarity",
                  description: "Aligned on outcomes",
                  icon: "fas fa-balance-scale",
                  chips: [
                    { label: "Roadmap throughput 2x", icon: "fas fa-chart-line" },
                    { label: "Stakeholder demos weekly", icon: "fas fa-chalkboard" }
                  ]
                },
                {
                  title: "Enablement",
                  description: "Structured onboarding and knowledge transfer",
                  icon: "fas fa-book",
                  chips: [
                    { label: "First PR ≤ 1 week", icon: "fas fa-code-branch" },
                    { label: "eNPS increase", icon: "fas fa-arrow-up" }
                  ]
                },
                {
                  title: "Security & Compliance",
                  description: "Hardened posture and audit readiness",
                  icon: "fas fa-shield-alt",
                  chips: [
                    { label: "0 critical incidents", icon: "fas fa-shield-alt" },
                    { label: "Audit pass rate 100%", icon: "fas fa-clipboard-check" }
                  ]
                },
                {
                  title: "Reliability",
                  description: "SLO‑driven operations",
                  icon: "fas fa-server",
                  chips: [
                    { label: "99.95% uptime", icon: "fas fa-signal" },
                    { label: "SLOs met Q/Q", icon: "fas fa-tachometer-alt" }
                  ]
                },
                {
                  title: "Cost optimisation",
                  description: "Spend efficiency and cloud governance",
                  icon: "fas fa-coins",
                  chips: [
                    { label: "Cloud spend -18%", icon: "fas fa-coins" },
                    { label: "Coverage +25%", icon: "fas fa-percentage" }
                  ]
                }
              ].map((item, index) => (
                <div key={index} className="rounded-2xl p-6 shadow-sm bg-gradient-to-br from-[#e8e9eb] to-[#fbc]">
                  <span className="inline-block text-xs uppercase tracking-wide mb-2 px-2 py-1 rounded-full bg-white border-2 border-[var(--theme)] text-[var(--theme)] font-semibold">{item.title}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.description}</h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {item.chips.map((chip: { label: string; icon: string }, index: number) => (
                      <span key={index} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--header)]/50 text-white shadow-sm">
                        <i className={chip.icon}></i>
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Life at Omnia */}
      <section className="section-padding fix">
        <div className="container space-y-10">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2 className="!text-3xl sm:!text-5xl font-extrabold !mb-4">Life at Omnia</h2>
                <p>Great work happens when people feel trusted, supported and challenged. Here&apos;s what that looks like here.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {
              [
                {
                  title: "Competitive, Transparent Pay",
                  description: "Clear salary bands and regular reviews tied to impact—not tenure.",
                  icon: "fas fa-money-bill-wave"
                },
                {
                  title: "Health & Wellbeing",
                  description: "Time off when you need it, wellness support and policies that respect life outside work.",
                  icon: "fas fa-heart"
                },
                {
                  title: "Learning Budget",
                  description: "Funded certifications, courses and dedicated learning time every sprint.",
                  icon: "fas fa-graduation-cap"
                },
                {
                  title: "Flexible Work",
                  description: "Remote‑first with hybrid options. We optimise for focus, not meetings.",
                  icon: "fas fa-clock"
                },
                {
                  title: "Career Acceleration",
                  description: "Clear progression, coaching and meaningful ownership from day one.",
                  icon: "fas fa-route"
                },
                {
                  title: "Recognition",
                  description: "We celebrate wins often—expect shout‑outs, bonuses and direct access to leadership.",
                  icon: "fas fa-trophy"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-6">
                  <div className="size-16 md:size-20 rounded-xl bg-gradient-to-br from-[var(--theme)]/40 to-[var(--theme)] text-[var(--header)] flex items-center justify-center px-4">
                    <i className={item.icon + " text-2xl md:text-3xl"}></i>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="!text-3xl sm:!text-5xl font-extrabold !mb-4">Ready to Join Our Team?</h2>
              <p>Don&apos;t see the perfect role yet? Tell us where you do your best work—we hire for potential and attitude.</p>
              <div className="newsletter-form flex flex-col justify-center gap-2 pt-2">
                <input type="email" className="border border-black placeholder:text-black text-black !p-6 rounded-full" placeholder="Your email address" aria-label="Email" />
                <Link href="/contact" className="mx-auto"><OmniaButton text="Sign Up" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


