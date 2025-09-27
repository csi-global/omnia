"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Slide = {
  title: string;
  copy: string;
  cta: { label: string; href: string };
  image: string;
};

const slides: Slide[] = [
  {
    title: "Cyber Security & Data protection",
    copy:
      "We uses the latest Cyber Security technologies, processes and measures designed to protect your systems, networks and data from cyber crimes.",
    cta: { label: "Read More", href: "/services/cyber-security" },
    image: "/assets/img/hero/hero-slider-1.jpg",
  },
  {
    title: "Managed Cloud Desk",
    copy:
      "Our Managed Services Offering helps support a more diverse, complex enterprise application and technology portfolio, while balancing competing business priorities of IT operations and innovation.",
    cta: { label: "Read More", href: "/managed/cloud-desk" },
    image: "/assets/img/hero/hero-slider-3.jpg",
  },
  {
    title: "Digital Transformation",
    copy:
      "Omnia is a digital technology firm providing digital transformation and product engineering services to ISVs, Consumer Internet, and large enterprises across the globe.",
    cta: { label: "Read More", href: "/services/digital-transformation" },
    image: "/assets/img/hero/hero-slider-2.jpg",
  },
  {
    title: "Low Code / No Code",
    copy:
      "Build apps 10x faster. Automate, orchestrate, and integrate with Pega, ServiceNow, and Microsoft Power Platform—governed, secure, enterprise-grade.",
    cta: { label: "Read More", href: "/low-code-no-code" },
    image: "/assets/img/hero/hero-slider-4.png",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        effect="fade"
        loop
        className="h-[64svh] md:h-[76svh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.title}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl font-semibold md:text-5xl">{s.title}</h1>
                  <p className="mt-4 text-base md:text-lg opacity-90">{s.copy}</p>
                  <div className="mt-6">
                    <Link
                      href={s.cta.href}
                      className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 font-medium text-slate-900 hover:bg-white"
                    >
                      {s.cta.label}
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


