"use client";

import OmniaButton from "@/components/ui/omnia-button";
import { MANAGED_SERVICES, PROFESSIONAL_SERVICES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface HeroSlide {
  backgroundImage: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
}

interface SwiperNavigationParams {
  prevEl?: HTMLButtonElement | HTMLElement | null;
  nextEl?: HTMLButtonElement | HTMLElement | null;
}

interface ExtendedSwiperParams {
  navigation?: boolean | SwiperNavigationParams;
  [key: string]: unknown;
}

const slides: readonly HeroSlide[] = [
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


// Helper function to get icon class for managed services
const getManagedServiceIcon = (title: string): string => {
  switch (title) {
    case 'MSD365':
      return 'icon-01';
    case 'ORMB':
      return 'icon-02';
    case 'Smart Investigate':
      return 'icon-03';
    case 'Vision Plus':
      return 'icon-04';
    default:
      return 'icon-01';
  }
};

const Home: FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Extract services for type safety
  const [
    digitalProcessAutomation,
    cloudMigration,
    dataAnalytics,
    digitalTransformation,
    domainConsulting
  ] = PROFESSIONAL_SERVICES;

  return (
    <div>
      {/* Hero Slider - Pure Tailwind */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-1 top-1/2 z-30 -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 !bg-red-600 hover:bg-white text-white hover:text-gray-800 !rounded-md flex items-center justify-center transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <i className="icon-arrow-right rotate-180 text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base"></i>
        </button>

        <button
          ref={nextRef}
          className="absolute right-1 top-1/2 z-30 -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white hover:bg-red-600 text-gray-800 hover:text-white !rounded-md flex items-center justify-center transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <i className="icon-arrow-right text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base"></i>
        </button>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          slidesPerView={1}
          loop
          effect="fade"
          speed={700}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !opacity-100 !w-3 !h-3 !mx-1',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600 !scale-125'
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const params = swiper.params as ExtendedSwiperParams;
            if (params.navigation && typeof params.navigation === 'object') {
              params.navigation.prevEl = prevRef.current;
              params.navigation.nextEl = nextRef.current;
            }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (swiper.navigation) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`hero-slide-${slide.title}-${index}`} className="relative w-full h-full">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.backgroundImage}
                  alt={`${slide.title} background`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="md:container mx-auto !px-12 sm:px-16 md:px-18 lg:px-20">
                  <div className="max-w-4xl">
                    {/* Eyebrow */}
                    <div className="mb-3 xs:mb-4 sm:mb-6">
                      <span className="inline-block bg-red-600 text-white px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                        {slide.eyebrow}
                      </span>
                    </div>

                    {/* Title */}
                    <h1
                      className="!text-4xl lg:!text-7xl font-bold text-white leading-tight mb-3 xs:mb-4 sm:mb-6"
                      dangerouslySetInnerHTML={{ __html: slide.title.replace("\n", "<br/>") }}
                    />

                    {/* Description */}
                    <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-2xl mb-4 xs:mb-6 sm:mb-8 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={slide.ctaHref}

                      aria-label={`Read more about ${slide.title}`}
                    >
                      <OmniaButton text="Read More" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section (redesigned with Tailwind) */}
      <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6">
              <div className="space-y-4 sm:space-y-6">
                <span className="inline-flex items-center rounded-full bg-[var(--theme)] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold tracking-wide">
                  About Omnia
                </span>
                <h2 className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-6xl font-extrabold leading-tight text-zinc-900">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme)] to-[var(--header)]">Omnia</span>
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  A cloud consulting company which focuses on IT automation and bringing about digital transformation for businesses. With over a decade&apos;s expertise, we leverage technology and innovation to build trust and foster long‑lasting relationships with our customers.
                </p>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[{
                    icon: "/assets/img/about/about-icon-2.webp",
                    title: "Vision",
                    description: "IT automation and digital transformation for businesses.",
                  }, {
                    icon: "/assets/img/about/about-icon-3.webp",
                    title: "Mission",
                    description: "Strengthen your IT backbone and fuel business innovation.",
                  }].map((item) => (
                    <div className="flex gap-3 sm:gap-4" key={item.title}>
                      <div className="shrink-0 rounded-lg sm:rounded-xl bg-[var(--theme)] p-2 sm:p-3">
                        <Image src={item.icon} alt={item.title} width={28} height={28} className="sm:w-9 sm:h-9" />
                      </div>
                      <div>
                        <h4 className="text-zinc-900 font-semibold text-sm sm:text-base">{item.title}</h4>
                        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs (use existing main-button style) */}
                <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
                  <Link href="/#core-values" aria-label="Read more about Omnia core values">
                    <OmniaButton text="Read More" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Image & stat card */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                  <Image
                    src="/assets/img/about/about-11.webp"
                    alt="Omnia team collaborating"
                    width={960}
                    height={1080}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute left-1/2 bottom-4 sm:bottom-8 -translate-x-1/2 bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border border-zinc-200 rounded-lg sm:rounded-2xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="size-8 sm:size-10 rounded-full bg-[var(--theme)] flex items-center justify-center shrink-0">
                      <Image src="/assets/img/about/about-icon-2.webp" alt="Badge" width={16} height={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-900 whitespace-nowrap">10+ Years</p>
                      <p className="text-[10px] sm:text-xs text-zinc-600 whitespace-nowrap">Trusted by enterprises</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Bento Grid */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-zinc-50 to-zinc-100">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-white">
              Professional Services
            </span>
            <h2 className="mt-4 !text-3xl md:!text-5xl lg:!text-6xl font-extrabold leading-tight text-zinc-900">
              Specialized solutions for complex challenges
            </h2>
            <p className="mt-4 text-zinc-600 text-lg max-w-3xl mx-auto">
              Our professional services combine deep technical expertise with industry knowledge to deliver measurable results across your entire technology stack.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* Large featured card - Digital Process Automation */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <Link
                href={digitalProcessAutomation!.href}
                className="group block h-full bg-white rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 md:w-18 md:h-18 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--header)] flex items-center justify-center">
                      <i className="icon-01 text-white text-xl md:text-2xl"></i>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="icon-arrow-right text-[var(--theme)] text-lg"></i>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                    {digitalProcessAutomation!.title}
                  </h3>
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed flex-grow">
                    {digitalProcessAutomation!.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2">
                      Learn More <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Cloud Migration - Medium card */}
            <div className="md:col-span-1">
              <Link
                href={cloudMigration!.href}
                className="group block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--header)] flex items-center justify-center">
                      <i className="icon-05 text-white text-xl"></i>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="icon-arrow-right text-[var(--theme)] text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                    {cloudMigration!.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                    {cloudMigration!.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                      Explore <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Data Analytics - Medium card */}
            <div className="md:col-span-1">
              <Link
                href={dataAnalytics!.href}
                className="group block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--header)] flex items-center justify-center">
                      <i className="icon-01 text-white text-xl"></i>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="icon-arrow-right text-[var(--theme)] text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                    {dataAnalytics!.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                    {dataAnalytics!.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                      Discover <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Digital Transformation - Wide card */}
            <div className="md:col-span-2 lg:col-span-1">
              <Link
                href={digitalTransformation!.href}
                className="group block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--header)] flex items-center justify-center">
                      <i className="icon-04 text-white text-xl"></i>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="icon-arrow-right text-[var(--theme)] text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                    {digitalTransformation!.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                    {digitalTransformation!.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                      Transform <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Domain Consulting - Medium card */}
            <div className="md:col-span-1">
              <Link
                href={domainConsulting!.href}
                className="group block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--header)] flex items-center justify-center">
                      <i className="icon-03 text-white text-xl"></i>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="icon-arrow-right text-[var(--theme)] text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                    {domainConsulting!.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                    {domainConsulting!.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                      Consult <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-white">
              Managed Services
            </span>
            <h2 className="mt-4 !text-3xl md:!text-5xl lg:!text-6xl font-extrabold leading-tight text-zinc-900">
              Enterprise-grade managed solutions
            </h2>
            <p className="mt-4 text-zinc-600 text-lg max-w-3xl mx-auto">
              Comprehensive managed services that keep your critical systems running smoothly while you focus on your core business.
            </p>
          </div>

          {/* Managed Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {MANAGED_SERVICES.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--header)] flex items-center justify-center">
                      <i className={`${getManagedServiceIcon(item.title)} text-white text-xl`}></i>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="icon-arrow-right text-[var(--theme)] text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                      Learn More <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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
              <h2 className="marqee-text !text-3xl md:!text-6xl font-extrabold leading-tight text-zinc-900">Mobile Tech Mastery</h2>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <div className="marqee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="6" width="28" height="28" stroke="white" /></svg>
              </div>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <h2 className="marqee-text !text-3xl md:!text-6xl font-extrabold leading-tight text-zinc-900">Software Solutions Pro</h2>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <div className="marqee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,4 36,36 4,36" stroke="white" fill="none" /></svg>
              </div>
            </SwiperSlide>
            <SwiperSlide className="brand-slide-element">
              <h2 className="marqee-text !text-3xl md:!text-6xl font-extrabold leading-tight text-zinc-900">Tech Savvy solution</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Core Values (clean minimal Tailwind) */}
      <section id="core-values" className="relative py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-zinc-50">
              Our Core Values
            </span>
            <h2 className="mt-4 !text-3xl md:!text-6xl font-extrabold tracking-tight text-zinc-900">
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
            <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-zinc-50">
              Why Omnia
            </span>
            <h2 className="mt-4 !text-3xl md:!text-6xl font-extrabold tracking-tight text-zinc-900">
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
                  <h3 className="!text-xl font-semibold text-zinc-900">Outcome‑first approach</h3>
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
                    <h4 className="!text-lg font-semibold text-zinc-900">Cloud Expertise</h4>
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
                <h2 className="!text-[var(--theme)] !text-3xl md:!text-5xl font-extrabold leading-tight">Ready to accelerate your digital transformation?</h2>
                <p className="mt-3">
                  Speak with Omnia&apos;s experts about cloud migration, automation, cyber security, and
                  ongoing managed services tailored to your business.
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-lg-start mt-4 mt-lg-0">
              <Link href="/digital-transformation" className="main-button secondary">
                <OmniaButton text="Explore Services" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
