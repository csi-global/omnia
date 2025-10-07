import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Omnia Services",
  description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/career"
  },
  openGraph: {
    title: "Careers | Omnia Services",
    description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
    type: "website",
    url: "https://omniaservices.co.uk/career",
    images: ["https://omniaservices.co.uk/assets/img/about/about-11.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Omnia Services",
    description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
    images: ["https://omniaservices.co.uk/assets/img/about/about-11.webp"]
  }
};

export default function CareerPage() {
  return (
    <div className="">
      {/* Breadcrumb Part */}
      <div
        className="breadcrumb-wrapper bg-cover"
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
      <section className="section-padding fix relative overflow-visible bg-gradient-to-br from-[var(--theme)]/30 via-[var(--theme)]/50 to-[var(--theme)]/10 rounded-xl sm:rounded-2xl m-2">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10">
            {/* Left copy */}
            <div className="max-w-3xl lg:max-w-4xl text-left">
              <p className="uppercase tracking-widest font-semibold mb-3">Be Part of Something Big</p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 break-words">Grow Your Career in AI and Automation</h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7">
                Join our global team and do your best work in a supportive, high-impact environment.
              </p>
              <div className="flex justify-start">
                <Link href="/contact" className="theme-btn mt-2">Explore Opportunities</Link>
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

      {/* Join Our Global Team */}
      <section className="section-padding fix bg-[url('/assets/img/career/career-2.webp')] bg-cover bg-center bg-no-repeat">
        <div className="container bg-gradient-to-br from-[var(--theme)]/10 via-black/50 to-[var(--theme)]/5 p-2 rounded-2xl backdrop-blur-md pt-4">
          <div className="row">
            <div className="mx-auto">
              <div className="section-title text-center text-[var(--white)]">
                <h2 className="text-4xl font-bold !text-[var(--theme)]">Join Our Global Team</h2>
                <p>
                  We offer opportunities in the UK, India, and remote—so you can do your best work from wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We’re Growing. You Will Too. */}
      <section className="section-padding bg-[var(--theme)]/10 fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>We’re Growing. You Will Too.</h2>
                <p>Do meaningful work with a supportive, driven team that loves to collaborate and celebrate together.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-2">
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--theme)]/5">
              <div className="size-20 px-4 rounded-xl bg-[var(--header)]/20 flex items-center justify-center">
                <i className="fas fa-project-diagram text-3xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Diverse & Impactful Work</h3>
                <p>Work in cross‑functional squads across sectors, shipping outcomes that truly matter.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--theme)]/5">
              <div className="size-20 px-4 rounded-xl bg-[var(--header)]/20 flex items-center justify-center">
                <i className="fas fa-users text-3xl text-[var(--theme)]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Supportive Culture</h3>
                <p>Join a friendly, feedback‑driven team with inclusive rituals and active mentorship.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--theme)]/5">
              <div className="size-20 px-4 rounded-xl bg-[var(--header)]/20 flex items-center justify-center">
                <i className="fas fa-microchip text-3xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Best‑In‑Class Technology</h3>
                <p>Get hands‑on with modern cloud, data and automation stacks with funded certifications.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--theme)]/5">
              <div className="size-20 px-4 rounded-xl bg-[var(--header)]/20 flex items-center justify-center">
                <i className="fas fa-balance-scale text-3xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Work‑Life Balance</h3>
                <p>Flexible hours and remote options so you can do great work and still have a life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Benefits (merged) */}
      <section className="section-padding fix">
        <div className="container space-y-10">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>What You Get at Omnia</h2>
                <p>From competitive compensation to continuous learning—we set you up to thrive.</p>
              </div>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="size-16 md:size-20 rounded-xl bg-[var(--theme)]/10 text-[var(--header)] flex items-center justify-center px-4">
                <i className="fas fa-money-bill-wave text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Competitive Salary</h3>
                <p>Transparent pay bands reviewed regularly to reward impact and growth.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="size-16 md:size-20 rounded-xl bg-[var(--theme)]/10 text-[var(--header)] flex items-center justify-center px-4">
                <i className="fas fa-briefcase-medical text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Comprehensive Benefits</h3>
                <p>Health, wellness and time‑off policies that support you and your family.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="size-16 md:size-20 rounded-xl bg-[var(--theme)]/10 text-[var(--header)] flex items-center justify-center px-4">
                <i className="fas fa-graduation-cap text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Continuous Learning</h3>
                <p>Annual training budget, certifications and study time baked into the week.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="size-16 md:size-20 rounded-xl bg-[var(--theme)]/10 text-[var(--header)] flex items-center justify-center px-4">
                <i className="fas fa-laptop-house text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Flexible Work Options</h3>
                <p>Remote‑friendly, flexible hours and hybrid options that fit your life.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="size-16 md:size-20 rounded-xl bg-[var(--theme)]/10 text-[var(--header)] flex items-center justify-center px-4">
                <i className="fas fa-route text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Career Growth</h3>
                <p>Clear progression paths, role tracks and mentoring to level up faster.</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="size-16 md:size-20 rounded-xl bg-[var(--theme)]/10 text-[var(--header)] flex items-center justify-center px-4">
                <i className="fas fa-trophy text-2xl md:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Recognition & Support</h3>
                <p>Regular shout‑outs, bonus opportunities and access to leadership.</p>
              </div>
            </div>
          </div>

          {/* Experienced vs New Grads cards */}
          <div className="space-y-6 lg:space-y-10">
            <div className="rounded-2xl bg-[var(--bg)] p-6 sm:p-8 lg:p-10 border border-[var(--border)]">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 items-start">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">For Experienced Professionals</h3>
                  <p>If you’re an established IT professional looking for new challenges, we offer:</p>
                </div>
                <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
                  <h4 className="text-xl font-semibold mb-2">Variety of Projects</h4>
                  <p>Engage in diverse, high‑impact projects using advanced cloud, data and automation tools.</p>
                </div>
                <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
                  <h4 className="text-xl font-semibold mb-2">Professional Growth</h4>
                  <p>Step into leadership opportunities with senior‑level client exposure and ownership.</p>
                </div>
                <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
                  <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
                  <p>Annual training budget, certifications, and conference attendance to keep you sharp.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--bg)] p-6 sm:p-8 lg:p-10 border border-[var(--border)]">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 items-start">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">For New Graduates and Career Changers</h3>
                  <p>If you’re a recent graduate or re‑entering the workforce, you’ll benefit from:</p>
                </div>
                <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
                  <h4 className="text-xl font-semibold mb-2">Personalized Mentoring</h4>
                  <p>Identify and develop your strengths with guidance from experienced practitioners.</p>
                </div>
                <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
                  <h4 className="text-xl font-semibold mb-2">Broad Exposure</h4>
                  <p>Build range across projects and industries while learning modern delivery practices.</p>
                </div>
                <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
                  <h4 className="text-xl font-semibold mb-2">Ongoing Training</h4>
                  <p>Internal programs, partner seminars and resources designed to accelerate learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3>Subscribe to Omnia</h3>
              <p>Get the latest news and insights on intelligent automation—delivered to your inbox.</p>
              <div className="newsletter-form d-flex justify-content-center gap-2 pt-2">
                <input type="email" className="form-control" placeholder="Your email address" aria-label="Email" />
                <Link href="/contact" className="theme-btn text-nowrap">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h2>Ready to Join Our Team?</h2>
              <p>Don’t see a position that matches your skills? We’re always looking for talented people. Send us your CV and tell us how you can contribute.</p>
              <div className="main-button mt-3">
                <Link href="/contact" className="theme-btn">Send Your CV</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


