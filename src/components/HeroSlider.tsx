"use client";

import Link from "next/link";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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

export default function HeroSlider() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="hero-section hero-1">
      <div className="slider-button">
        <div className="array-prev" ref={prevRef}><i className="icon-arrow-right"></i></div>
        <div className="array-next" ref={nextRef}><i className="icon-arrow-right"></i></div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
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
          // Ensure navigation picks up refs after mount
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
  );
}


