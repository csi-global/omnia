"use client";

import OmniaButton from "@/components/ui/omnia-button";
import {
  BrainCircuit,
  Bot,
  Database,
  GitBranch,
  TrendingUp,
  type LucideIcon,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  AI_ENGINEERING_FEATURES,
  HERO_SLIDES,
  HOME_CORE_VALUES,
  HOME_PROFESSIONAL_SERVICES_GRID,
  MANAGED_SERVICES,
  MARQUEE_PARTNERS_SLIDES,
  PROFESSIONAL_SERVICES,
} from "@/lib/constants";
import type { ExtendedSwiperParams } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const getManagedServiceIcon = (title: string): string => {
  switch (title) {
    case 'MSD365': return 'icon-01';
    case 'ORMB': return 'icon-02';
    case 'Smart Investigate': return 'icon-03';
    case 'Vision Plus': return 'icon-04';
    default: return 'icon-01';
  }
};

const getAiFeatureIcon = (label: string): LucideIcon => {
  switch (label) {
    case "Generative AI": return Sparkles;
    case "Agentic AI": return Bot;
    case "MCP Servers": return ServerCog;
    case "LLMOps": return SlidersHorizontal;
    case "AI-Driven SDLC": return GitBranch;
    case "Responsible AI": return ShieldCheck;
    default: return Zap;
  }
};

const HomePageClient: FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const marqueeItems = MARQUEE_PARTNERS_SLIDES.flatMap((slide) => [
    { type: "title" as const, key: `title-${slide.title}`, value: slide.title },
    { type: "logo" as const, key: `logo-${slide.title}` },
  ]);

  const [digitalProcessAutomation] = PROFESSIONAL_SERVICES;

  return (
    <div className="overflow-x-hidden">
      {/* Hero Slider */}
      <section className="relative h-screen w-full overflow-hidden">
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
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
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
          {HERO_SLIDES.map((slide, index) => (
            <SwiperSlide key={`hero-slide-${slide.title}-${index}`} className="relative w-full h-full">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="relative z-20 h-full flex items-center">
                <div className="md:container mx-auto !px-12 sm:px-16 md:px-18 lg:px-20">
                  <div className="max-w-4xl">
                    <div className="mb-3 xs:mb-4 sm:mb-6">
                      <span className="inline-block bg-red-600 text-white px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                        {slide.eyebrow}
                      </span>
                    </div>
                    <h1
                      className="!text-4xl lg:!text-7xl font-bold text-white leading-tight mb-3 xs:mb-4 sm:mb-6"
                      dangerouslySetInnerHTML={{ __html: slide.title.replace("\n", "<br/>") }}
                    />
                    <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-2xl mb-4 xs:mb-6 sm:mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <Link href={slide.ctaHref} aria-label={`Explore ${slide.title}`}>
                      <OmniaButton text={`Explore ${slide.title}`} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="space-y-4 sm:space-y-6">
                <span className="inline-flex items-center rounded-full bg-[var(--theme)] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold tracking-wide">
                  About Omnia
                </span>
                <h2 className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-6xl font-extrabold leading-tight text-zinc-900">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme)] to-[var(--theme-red)]">Omnia</span>
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  A cloud consulting company which focuses on IT automation and bringing about digital transformation for businesses. With over a decade&apos;s expertise, we leverage technology and innovation to build trust and foster long‑lasting relationships with our customers.
                </p>
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
                      <div className="shrink-0 rounded-lg sm:rounded-xl bg-[var(--theme)] size-16 flex items-center justify-center">
                        <Image src={item.icon} alt={item.title} width={28} height={28} className="sm:w-9 sm:h-9" />
                      </div>
                      <div>
                        <h4 className="text-zinc-900 font-semibold text-sm sm:text-base">{item.title}</h4>
                        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
                  <Link href="/#core-values" aria-label="Explore Omnia core values">
                    <OmniaButton text="Explore Omnia core values" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                  <Image
                    src="/assets/img/about/about-11.webp"
                    alt="Omnia team collaborating on digital transformation"
                    width={960}
                    height={1080}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute left-1/2 bottom-4 sm:bottom-8 -translate-x-1/2 bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur border border-zinc-200 rounded-lg sm:rounded-2xl p-3 sm:p-4 shadow-md">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="size-8 sm:size-10 rounded-full bg-[var(--theme)] flex items-center justify-center shrink-0">
                      <Image src="/assets/img/about/about-icon-2.webp" alt="Omnia award badge" width={16} height={16} className="sm:w-5 sm:h-5" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <Link
                href={digitalProcessAutomation!.href}
                className="group block h-full bg-white rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 md:w-18 md:h-18 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--theme-red)] flex items-center justify-center">
                      <i className="fa-solid fa-gears text-white text-xl md:text-2xl scale-150"></i>
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
                  <Image
                    src="/assets/img/dpa-tabs/dpa.webp"
                    alt="Digital process automation workflow"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-cover object-centre m-2 rounded-xl"
                    priority
                  />
                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-2">
                      Learn more about Digital Process Automation <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            {HOME_PROFESSIONAL_SERVICES_GRID.map((item) => (
              <div className="md:col-span-1" key={item.title}>
                <Link
                  href={item.href}
                  className="group block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--theme-red)] flex items-center justify-center">
                        <i className={`${item.icon} text-white text-xl scale-150`}></i>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="icon-arrow-right text-[var(--theme)] text-sm"></i>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed flex-grow">{item.description}</p>
                    <div className="mt-4 pt-3 border-t border-zinc-100">
                      <span className="text-[var(--theme)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                        Learn more about {item.title} <i className="icon-arrow-right text-xs"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {MANAGED_SERVICES.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 hover:border-[var(--theme)]/20"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--theme)] to-[var(--theme-red)] flex items-center justify-center">
                      <i className={`${getManagedServiceIcon(item.title)} text-white text-xl scale-150`}></i>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="icon-arrow-right text-[var(--theme)] text-sm"></i>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-[var(--theme)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow">{item.description}</p>
                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <span className="text-[var(--theme)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                      Learn more about {item.title} <i className="icon-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Engineering Section */}
      <section className="relative bg-white py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-white">
                AI Engineering
              </span>
              <h2 className="mt-4 !text-3xl font-extrabold leading-tight text-zinc-900 md:!text-5xl lg:!text-6xl">
                Intelligence engineered for enterprise delivery
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
                We help teams embed practical AI into software delivery, from use-case discovery to production operations. The focus is simple: faster releases, lower operational toil, and dependable governance.
              </p>
              <div className="mt-7 flex max-w-4xl flex-wrap gap-x-3 gap-y-3">
                {AI_ENGINEERING_FEATURES.map((item) => {
                  const FeatureIcon = getAiFeatureIcon(item.label);
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700"
                    >
                      <FeatureIcon className="h-3.5 w-3.5 text-[var(--theme)]" aria-hidden="true" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
              <Link href="/ai-engineering" className="mt-9 inline-flex" aria-label="Explore AI Engineering">
                <OmniaButton text="Explore AI Engineering" />
              </Link>
            </div>
            <div className="flex items-center justify-center lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[560px]">
                <svg viewBox="0 0 560 360" className="h-auto w-full" role="img" aria-label="Animated AI delivery workflow illustration">
                  <defs>
                    <linearGradient id="omniaFlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient id="omniaFlowSoft" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fca5a5" />
                      <stop offset="100%" stopColor="#fdba74" />
                    </linearGradient>
                    <radialGradient id="omniaAuraA" cx="25%" cy="25%">
                      <stop offset="0%" stopColor="#fee2e2" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#fee2e2" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="omniaAuraB" cx="80%" cy="78%">
                      <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
                    </radialGradient>
                    <pattern id="omniaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M20 0H0V20" fill="none" stroke="#f4f4f5" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect x="0" y="0" width="560" height="360" rx="22" fill="#fafafa" stroke="#e4e4e7" />
                  <rect x="1" y="1" width="558" height="358" rx="21" fill="url(#omniaGrid)" />
                  <circle cx="145" cy="95" r="130" fill="url(#omniaAuraA)" />
                  <circle cx="425" cy="262" r="120" fill="url(#omniaAuraB)" />
                  <path d="M90 90 C170 40, 240 88, 280 140 C328 202, 402 185, 470 125" stroke="url(#omniaFlow)" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="8 10">
                    <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="6.4s" repeatCount="indefinite" />
                  </path>
                  <path d="M95 265 C175 220, 230 250, 290 220 C355 186, 420 220, 470 255" stroke="url(#omniaFlowSoft)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="7 9">
                    <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="7.2s" repeatCount="indefinite" />
                  </path>
                  <path d="M470 125 C390 88, 350 130, 285 172 C222 214, 158 184, 95 265" stroke="#d4d4d8" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 10" opacity="0.9" />
                  <circle cx="90" cy="90" r="26" fill="#fff" stroke="#e4e4e7" />
                  <circle cx="280" cy="140" r="26" fill="#fff" stroke="#e4e4e7" />
                  <circle cx="470" cy="125" r="26" fill="#fff" stroke="#e4e4e7" />
                  <circle cx="95" cy="265" r="24" fill="#fff" stroke="#e4e4e7" />
                  <circle cx="290" cy="220" r="24" fill="#fff" stroke="#e4e4e7" />
                  <circle cx="470" cy="255" r="24" fill="#fff" stroke="#e4e4e7" />
                  <circle cx="280" cy="140" r="26" fill="none" stroke="#fecaca" strokeWidth="1.4" opacity="0.7">
                    <animate attributeName="r" values="26;34;26" dur="3.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.65;0.2;0.65" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="470" cy="255" r="24" fill="none" stroke="#fed7aa" strokeWidth="1.4" opacity="0.65">
                    <animate attributeName="r" values="24;31;24" dur="3.8s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.15;0.6" dur="3.8s" begin="0.7s" repeatCount="indefinite" />
                  </circle>
                  <circle r="6" fill="#ef4444">
                    <animateMotion dur="4.8s" repeatCount="indefinite" path="M90 90 C170 40, 240 88, 280 140 C328 202, 402 185, 470 125" />
                  </circle>
                  <circle r="4" fill="#f97316" opacity="0.9">
                    <animateMotion dur="4.8s" begin="1.4s" repeatCount="indefinite" path="M95 265 C175 220, 230 250, 290 220 C355 186, 420 220, 470 255" />
                  </circle>
                  <circle r="3.5" fill="#fb7185" opacity="0.75">
                    <animateMotion dur="5.8s" begin="0.9s" repeatCount="indefinite" path="M470 125 C390 88, 350 130, 285 172 C222 214, 158 184, 95 265" />
                  </circle>
                </svg>
                <div className="pointer-events-none absolute left-[16.1%] top-[25%] -translate-x-1/2 -translate-y-1/2">
                  <Database className="h-5 w-5 text-zinc-700" aria-hidden="true" />
                </div>
                <div className="pointer-events-none absolute left-1/2 top-[38.9%] -translate-x-1/2 -translate-y-1/2">
                  <BrainCircuit className="h-5 w-5 text-zinc-700" aria-hidden="true" />
                </div>
                <div className="pointer-events-none absolute left-[83.9%] top-[34.8%] -translate-x-1/2 -translate-y-1/2">
                  <TrendingUp className="h-5 w-5 text-zinc-700" aria-hidden="true" />
                </div>
                <div className="pointer-events-none absolute left-[17%] top-[73.7%] -translate-x-1/2 -translate-y-1/2">
                  <ShieldCheck className="h-[18px] w-[18px] text-zinc-600" aria-hidden="true" />
                </div>
                <div className="pointer-events-none absolute left-[51.8%] top-[61.1%] -translate-x-1/2 -translate-y-1/2">
                  <Bot className="h-[18px] w-[18px] text-zinc-600" aria-hidden="true" />
                </div>
                <div className="pointer-events-none absolute left-[83.9%] top-[70.9%] -translate-x-1/2 -translate-y-1/2">
                  <GitBranch className="h-[18px] w-[18px] text-zinc-600" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marqee-section relative section-bg overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-white">Partners</span>
            <h2 className="mt-4 !text-3xl md:!text-5xl lg:!text-6xl font-extrabold leading-tight text-zinc-900">Trusted by industry leaders</h2>
            <p className="mt-4 text-zinc-600 text-lg max-w-3xl mx-auto">We collaborate with world-class technology partners to deliver exceptional solutions.</p>
          </div>
        </div>
        <div className="!bg-transparent !py-8 relative w-11/12 mx-auto overflow-hidden">
          <div className="marquee-track" role="presentation">
            {[0, 1].map((loopIndex) => (
              <div className="marquee-sequence" key={`marquee-sequence-${loopIndex}`} aria-hidden={loopIndex === 1}>
                {marqueeItems.map((item) =>
                  item.type === "title" ? (
                    <h2 className="!text-3xl md:!text-5xl font-extrabold !leading-tight break-words text-zinc-900" key={`${item.key}-${loopIndex}`}>{item.value}</h2>
                  ) : (
                    <div className="marqee-icon" key={`${item.key}-${loopIndex}`}>
                      <Image src="/assets/img/favicon.png" alt="Omnia logo" width={48} height={48} quality={100} className="marquee-logo" />
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
          <style jsx>{`
            .marquee-track { display: flex; width: max-content; animation: marquee-scroll 35s linear infinite; will-change: transform; }
            .marquee-track:hover { animation-play-state: paused; }
            .marquee-sequence { display: inline-flex; align-items: center; gap: 2.75rem; padding-right: 2.75rem; white-space: nowrap; }
            @media (min-width: 768px) { .marquee-sequence { gap: 4.5rem; padding-right: 4.5rem; } }
            .marqee-text { margin: 0; display: inline-flex; align-items: center; font-size: clamp(1.875rem, 2.4vw + 1rem, 3.125rem); font-weight: 800; line-height: 1.1; color: #18181b; user-select: none; flex-shrink: 0; }
            @media (min-width: 1024px) { .marquee-sequence { gap: 6rem; padding-right: 6rem; } .marqee-text { font-size: clamp(2.75rem, 1.8vw + 1.5rem, 3.5rem); } }
            .marqee-icon { display: flex; align-items: center; justify-content: center; background: transparent; flex-shrink: 0; }
            .marquee-logo { width: clamp(2rem, 3vw + 1rem, 4rem); height: clamp(2rem, 3vw + 1rem, 4rem); object-fit: contain; user-select: none; }
            @keyframes marquee-scroll { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
          `}</style>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="relative py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-zinc-50">Our Core Values</span>
            <h2 className="mt-4 !text-3xl md:!text-6xl font-extrabold tracking-tight text-zinc-900">We build with principles</h2>
            <p className="mt-4 text-zinc-600">We are committed to delivering exceptional value through clear, human principles that guide every project and client interaction.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {HOME_CORE_VALUES.map((item, index) => (
              <div key={index} className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <div className="h-1.5 w-full bg-gradient-to-r from-[var(--theme)] to-[var(--theme-red)]"></div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-2 text-zinc-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Omnia */}
      <section id="why-choose-us" className="relative section-padding">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(225,29,46,0.05),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(17,24,39,0.05),transparent_60%)]"></div>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--theme)] px-3 py-1 text-xs font-semibold tracking-wide text-zinc-50">Why Omnia</span>
            <h2 className="mt-4 !text-3xl md:!text-6xl font-extrabold tracking-tight text-zinc-900">Built for real-world delivery</h2>
            <p className="mt-3 text-zinc-600">Strategy to steady-state—cloud, security, and automation executed with craftsmanship and care.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
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
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "fas fa-cloud", title: "Cloud Expertise", text: "AWS, Azure, and GCP landing zones, modernization, and FinOps.", delay: "rise-delay-1" },
                { icon: "fas fa-shield-alt", title: "Security First", text: "Threat modeling, hardening, and continuous compliance at scale.", delay: "rise-delay-2" },
                { icon: "fas fa-robot", title: "AI & Automation", text: "Agentic AI, LLMOps, and process automation to accelerate delivery.", delay: "rise-delay-3" },
                { icon: "fas fa-headset", title: "24/7 Support", text: "Managed services with SLAs that keep your business running.", delay: "rise-delay-3" },
              ].map((card) => (
                <div key={card.title} className={`rise-card ${card.delay} group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5`}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 size-12 rounded-full bg-[var(--theme)]/10 text-[var(--theme)] flex items-center justify-center">
                      <i className={card.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">{card.title}</h4>
                      <p className="mt-1 text-sm text-zinc-600">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact-cta" className="cta-section section-padding bg-[var(--header)] overflow-x-hidden">
        <div className="container">
          <div className="row align-items-center gap-8">
            <div className="col-lg-8">
              <div className="section-title text-white">
                <h2 className="!text-[var(--theme)] !text-3xl md:!text-5xl font-extrabold leading-tight">Ready to accelerate your digital transformation?</h2>
                <p className="mt-3">Speak with Omnia&apos;s experts about cloud migration, automation, AI engineering, and ongoing managed services tailored to your business.</p>
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

export default HomePageClient;
