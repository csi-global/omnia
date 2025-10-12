'use client'

import { cn } from "@/lib/utils";
import type { FC, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface OmniaCarouselProps {
  items: ReactNode[];
  className?: string;
}

interface SwiperNavigationParams {
  prevEl?: HTMLButtonElement | HTMLElement | null;
  nextEl?: HTMLButtonElement | HTMLElement | null;
}

interface ExtendedSwiperParams {
  navigation?: boolean | SwiperNavigationParams;
  [key: string]: unknown;
}

const OmniaCarousel: FC<OmniaCarouselProps> = ({ items, className }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperRef.current || !prevRef.current || !nextRef.current) return;

    const swiper = swiperRef.current;
    const params = swiper.params as ExtendedSwiperParams;

    // Attach navigation elements after refs are available
    if (params.navigation && typeof params.navigation === 'object') {
      params.navigation.prevEl = prevRef.current;
      params.navigation.nextEl = nextRef.current;
    }

    if (swiper.navigation) {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className={cn('omnia-carousel', className)}>
      <div className="omc-nav">
        <button ref={prevRef} className="omc-nav-btn prev" aria-label="Previous">
          <i className="fas fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button ref={nextRef} className="omc-nav-btn next" aria-label="Next">
          <i className="fas fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onBeforeInit={(swiper) => {
          const params = swiper.params as ExtendedSwiperParams;
          if (params.navigation && typeof params.navigation === 'object') {
            params.navigation.prevEl = prevRef.current;
            params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={16}
        slidesPerView={1}
        observer
        observeParents
        grabCursor
        breakpoints={{
          576: { slidesPerView: 1.2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 18 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`slide-${index}`}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OmniaCarousel;


