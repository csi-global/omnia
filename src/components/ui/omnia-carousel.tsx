'use client'

import { cn } from "@/lib/utils";
import { useRef } from 'react';
import 'swiper/css';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type OmniaCarouselProps = {
  items: React.ReactNode[];
  className?: string;
};

export default function OmniaCarousel({ items, className }: OmniaCarouselProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={cn('omnia-carousel', className)}>
      <div className="omc-nav">
        <button ref={prevRef} className="omc-nav-btn prev" aria-label="Previous">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button ref={nextRef} className="omc-nav-btn next" aria-label="Next">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        onBeforeInit={(swiper) => {
          // @ts-expect-error Swiper types don't know runtime element yet
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error Swiper types don't know runtime element yet
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          576: { slidesPerView: 1.2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 18 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


