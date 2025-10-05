"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ManagedService = {
  image: string;
  title: string;
  description: string;
};

const items: ManagedService[] = [
  {
    image: "/assets/img/icon/managed-cloud-desk.webp",
    title: "Managed Cloud Desk",
    description: "Our Managed Services Offering helps support a more diverse, complex enterprise application and technology portfolio,",
  },
  {
    image: "/assets/img/icon/microsoft-365.webp",
    title: "Managed Microsoft 365",
    description: "Maximizing the latest Microsoft 365 features and updates can seem like a full-time job for your IT team.",
  },
  {
    image: "/assets/img/icon/microsoft-azure.webp",
    title: "Managed Microsoft Azure",
    description: "Companies look to Microsoft Azure to save time, and money; but implementing Azure is tricky, and not every organization",
  },
  {
    image: "/assets/img/icon/surface-as-a-service.webp",
    title: "Surface –As-A-Service",
    description: "From evolving employee expectations to more diverse and globally scattered teams to an increasingly",
  },
];

export default function ManagedServicesCarousel() {
  return (
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
          {items.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="testimonial-card-items">
                <div className="client-info">
                  <div className="client-img">
                    <img src={item.image} alt={item.title} />
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
  );
}


