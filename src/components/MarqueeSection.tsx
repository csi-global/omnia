"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MarqueeSection() {
  return (
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
  );
}


