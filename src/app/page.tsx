"use client";

import OmniaButton from "@/components/ui/omnia-button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Slide = {
  backgroundImage: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    backgroundImage: "/assets/img/hero/hero-slider-4.webp",
    eyebrow: "OMNIA",
    title: "Digital Process Automation",
    description:
      "Build apps 10x faster. Automate, orchestrate, and integrate services with Pega, ServiceNow, and Microsoft Power Platform—governed, secured, enterprise-grade.",
    ctaHref: "/digital-process-automation",
  },
  {
    backgroundImage: "/assets/img/hero/hero-slider-5.webp",
    eyebrow: "OMNIA",
    title: "Cloud Migration",
    description:
      "Plan, migrate, and modernize workloads to the cloud with zero-downtime strategies, landing zones, and robust governance.",
    ctaHref: "/cloud-migration",
  },
  {
    backgroundImage: "/assets/img/hero/hero-slider-1.webp",
    eyebrow: "OMNIA",
    title: "Data Analytics",
    description:
      "Turn data into decisions. Build scalable data platforms, BI dashboards, and ML pipelines for measurable outcomes.",
    ctaHref: "/data-analytics",
  },
  {
    backgroundImage: "/assets/img/hero/hero-slider-2.webp",
    eyebrow: "OMNIA",
    title: "Digital \nTransformation",
    description:
      "Reimagine products and processes end-to-end—strategy, experience, and engineering—accelerated by cloud and automation.",
    ctaHref: "/digital-transformation",
  },
  {
    backgroundImage: "/assets/img/hero/hero-slider-3.webp",
    eyebrow: "OMNIA",
    title: "Domain Consulting",
    description:
      "Leverage deep industry expertise to align technology with domain-specific regulations, KPIs, and operating models.",
    ctaHref: "/domain-consulting",
  },
];

type ManagedService = {
  image: string;
  title: string;
  description: string;
};

const managedItems: ManagedService[] = [
  {
    image: "/assets/img/icon/managed-cloud-desk.webp",
    title: "Managed Cloud Desk",
    description:
      "Our Managed Services Offering helps support a more diverse, complex enterprise application and technology portfolio,",
  },
  {
    image: "/assets/img/icon/microsoft-365.webp",
    title: "Managed Microsoft 365",
    description:
      "Maximizing the latest Microsoft 365 features and updates can seem like a full-time job for your IT team.",
  },
  {
    image: "/assets/img/icon/microsoft-azure.webp",
    title: "Managed Microsoft Azure",
    description:
      "Companies look to Microsoft Azure to save time, and money; but implementing Azure is tricky, and not every organization",
  },
  {
    image: "/assets/img/icon/surface-as-a-service.webp",
    title: "Surface –As-A-Service",
    description:
      "From evolving employee expectations to more diverse and globally scattered teams to an increasingly",
  },
];

type Service = {
  iconClass: string;
  title: string;
  href: string;
  description: string;
};

const services: Service[] = [
  {
    iconClass: "icon-01",
    title: "Cloud Assessment",
    href: "/cloud-assessment",
    description:
      "Omnia offers a Cloud Assessment and Feasibility Service wherein you can decide if moving to Cloud",
  },
  {
    iconClass: "icon-02",
    title: "Cyber Security",
    href: "/cyber-security",
    description:
      "Omina uses the latest Cyber Security technologies, processes and measures designed to protect your systems,",
  },
  {
    iconClass: "icon-03",
    title: "SharePoint Development",
    href: "/sharepoint-development",
    description:
      "Microsoft SharePoint is one of the most popular Web Application Platforms for organizations to share,",
  },
  {
    iconClass: "icon-04",
    title: "Digital Transformation",
    href: "/digital-transformation",
    description:
      "In Omina digital technology firm providing digital transformation and product engineering services",
  },
  {
    iconClass: "icon-05",
    title: "IT Consulting",
    href: "/it-consulting",
    description:
      "IT consulting services are advisory services that help clients assess different technology strategies",
  },
  {
    iconClass: "icon-05",
    title: "Cloud migration",
    href: "/cloud-migration",
    description:
      "Cloud Migration involves moving any workload from an on-premises environment,or other public cloud.",
  },
];

export default function Home() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  return (
    <div>
      {/* Hero Slider (merged) */}
      <section className="hero-section hero-1">
        <div className="slider-button">
          <div className="array-prev" ref={prevRef}><i className="icon-arrow-right"></i></div>
          <div className="array-next" ref={nextRef}><i className="icon-arrow-right"></i></div>
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          slidesPerView={1}
          loop
          effect="fade"
          speed={700}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nav = (swiper.params.navigation ?? {}) as any;
            nav.prevEl = prevRef.current;
            nav.nextEl = nextRef.current;
            swiper.params.navigation = nav;
          }}
          onSwiper={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="hero-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-image bg-cover"
                style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
              />
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h6>{slide.eyebrow}</h6>
                      <h1 dangerouslySetInnerHTML={{ __html: slide.title.replace("\n", "<br/>") }} />
                      <p>{slide.description}</p>
                      <div className="main-button">
                        <Link href={slide.ctaHref}>
                          <span className="theme-btn"> Read More </span>
                          <span className="arrow-btn"><i className="icon-arrow-right"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section (redesigned with Tailwind) */}
      <section id="about" className="relative py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full border border-[var(--theme)]/30 bg-[var(--theme)]/10 text-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide">
                  About Omnia
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-zinc-900">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme)] to-[var(--header)]">Omnia</span>
                </h2>
                <p className="text-zinc-600 text-base md:text-lg !my-6">
                  A cloud consulting company which focuses on IT automation and bringing about digital transformation for businesses. With over a decade&apos;s expertise, we leverage technology and innovation to build trust and foster long‑lasting relationships with our customers.
                </p>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{
                    icon: "/assets/img/about/about-icon-2.webp",
                    title: "Vision",
                    description: "IT automation and digital transformation for businesses.",
                  }, {
                    icon: "/assets/img/about/about-icon-3.webp",
                    title: "Mission",
                    description: "Strengthen your IT backbone and fuel business innovation.",
                  }].map((item) => (
                    <div className="flex gap-4" key={item.title}>
                      <div className="shrink-0 rounded-xl bg-[var(--theme)] p-3">
                        <Image src={item.icon} alt={item.title} width={36} height={36} />
                      </div>
                      <div>
                        <h4 className="text-zinc-900 font-semibold">{item.title}</h4>
                        <p className="text-zinc-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs (use existing main-button style) */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link href="/#core-values" >
                    <OmniaButton text="Read More" />
                  </Link>
                  <Link href="/contact" className="main-button">
                    <OmniaButton text="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Image & stat card */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/img/about/about-11.webp"
                    alt="Omnia team collaborating"
                    width={960}
                    height={1080}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border border-zinc-200 rounded-2xl p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-[var(--theme)] flex items-center justify-center">
                      <Image src="/assets/img/about/about-icon-2.webp" alt="Badge" width={20} height={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">10+ Years</p>
                      <p className="text-xs text-zinc-600">Trusted by enterprises</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (merged) */}
      <section className="service-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Professional Services </h2>
            <p className="mt-3">
              Information Technology is a rapidly evolving field that encompasses the study and <br /> application of computing technology to solve complex problems
            </p>
          </div>
          <div className="row">
            {services.map((service) => (
              <div key={service.title} className={`col-xl-4 col-lg-6 col-md-6`}>
                <div className="service-box-items">
                  <div className="icon">
                    <i className={service.iconClass}></i>
                  </div>
                  <div className="content">
                    <h3>
                      <Link href={service.href}>{service.title}</Link>
                    </h3>
                    <p>{service.description}</p>
                    <Link href={service.href} className="link-btn">
                      Read More <span><i className="icon-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services Carousel (merged) */}
      <section className="testimonial-section-3 section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h2>Managed Services</h2>
          </div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="testimonial-slider-2"
          >
            {managedItems.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="testimonial-card-items">
                  <div className="client-info">
                    <div className="client-img">
                      <Image src={item.image} alt={item.title} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className="client-content">
                      <h3>{item.title}</h3>
                      <span></span>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <div className="icon"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-dot  text-center">
            <div className="dot"></div>
          </div>
        </div>
      </section>

      {/* Marquee Section (merged) */}
      <section className="marqee-section">
        <div className="marqee-wrapper">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={32}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop
            speed={5000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            className="marque-slider"
          >
            <SwiperSlide className="brand-slide-element">
              <div className="marqee-icon">
                {/* simple placeholder icon to match layout; original SVG kept minimal */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="white" /></svg>
              </div>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <h2 className="marqee-text">Mobile Tech Mastery</h2>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <div className="marqee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="6" width="28" height="28" stroke="white" /></svg>
              </div>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <h2 className="marqee-text">Software Solutions Pro</h2>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <div className="marqee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,4 36,36 4,36" stroke="white" fill="none" /></svg>
              </div>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <h2 className="marqee-text">Tech Savvy solution</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Core Values (clean minimal Tailwind) */}
      <section id="core-values" className="relative py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">
              Our Core Values
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
              We build with principles
            </h2>
            <p className="mt-4 text-zinc-600">
              We are committed to delivering exceptional value through clear, human principles that guide
              every project and client interaction.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 arc-row">
            {/* Innovation */}
            <div className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md hover:-translate-y-0.5 arc-card arc-left arc-delay-0">
              <div className="h-1.5 w-full bg-gradient-to-r from-[var(--theme)] to-[var(--header)]"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Innovation</h3>
                    <p className="mt-2 text-zinc-600 leading-relaxed">Thoughtful adoption of technology to unlock measurable impact and sustainable growth.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust & Reliability */}
            <div className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md hover:-translate-y-0.5 arc-card arc-center arc-delay-1">
              <div className="h-1.5 w-full bg-gradient-to-r from-[var(--theme)] to-[var(--header)]"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Trust & Reliability</h3>
                    <p className="mt-2 text-zinc-600 leading-relaxed">Transparent communication and dependable delivery—so you always know where we stand.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Excellence */}
            <div className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md hover:-translate-y-0.5 arc-card arc-right arc-delay-2">
              <div className="h-1.5 w-full bg-gradient-to-r from-[var(--theme)] to-[var(--header)]"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className="fas fa-gem"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Excellence</h3>
                    <p className="mt-2 text-zinc-600 leading-relaxed">Careful craftsmanship, best practices, and continuous improvement in everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Omnia (featured layout variant) */}
      <section id="why-choose-us" className="relative section-padding">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(225,29,46,0.05),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(17,24,39,0.05),transparent_60%)]"></div>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">
              Why Omnia
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
              Built for real-world delivery
            </h2>
            <p className="mt-3 text-zinc-600">
              Strategy to steady-state—cloud, security, and automation executed with craftsmanship and care.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured overview */}
            <div className="rise-card rise-delay-0 lg:col-span-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-5">
                <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                  <i className="fas fa-route"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">Outcome‑first approach</h3>
                  <p className="mt-2 text-zinc-600">We align to your KPIs, then design lean roadmaps that prove value fast and scale predictably.</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-700">
                    <li className="flex items-center gap-2"><i className="fas fa-check text-[var(--theme)]"></i> Zero‑downtime migration patterns</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-[var(--theme)]"></i> Security & compliance baked‑in</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-[var(--theme)]"></i> Observability by default</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-[var(--theme)]"></i> Optimize for total cost & performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rise-card rise-delay-1 group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className="fas fa-cloud"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Cloud Expertise</h4>
                    <p className="mt-1 text-sm text-zinc-600">AWS, Azure, and GCP landing zones, modernization, and FinOps.</p>
                  </div>
                </div>
              </div>

              <div className="rise-card rise-delay-2 group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Security First</h4>
                    <p className="mt-1 text-sm text-zinc-600">Threat modeling, hardening, and continuous compliance at scale.</p>
                  </div>
                </div>
              </div>

              <div className="rise-card rise-delay-3 group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Digital Transformation</h4>
                    <p className="mt-1 text-sm text-zinc-600">Automation and platform engineering to accelerate delivery.</p>
                  </div>
                </div>
              </div>

              <div className="rise-card rise-delay-3 group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">24/7 Support</h4>
                    <p className="mt-1 text-sm text-zinc-600">Managed services with SLAs that keep your business running.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact-cta" className="cta-section section-padding bg-[var(--header)]">
        <div className="container">
          <div className="row align-items-center gap-8">
            <div className="col-lg-8">
              <div className="section-title text-white">
                <h2 className="!text-[var(--theme)]">Ready to accelerate your digital transformation?</h2>
                <p className="mt-3">
                  Speak with Omnia&apos;s experts about cloud migration, automation, cyber security, and
                  ongoing managed services tailored to your business.
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-lg-start mt-4 mt-lg-0">
              <Link href="/contact" className="main-button">
                <OmniaButton text="Contact Us" />
              </Link>
              <Link href="/digital-transformation" className="main-button secondary">
                <OmniaButton text="Explore Services" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
