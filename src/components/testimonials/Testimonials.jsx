"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import TestimonialCard from "@/components/cards/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Mubarak Family Restaurant offers a wonderful dining experience with authentic South Indian, Chinese, and Arabic halal dishes. The staff is very welcoming and attentive!",
      image: "assets/img/placeholder.png",
      name: "Anita Raj",
      handle: "anitaraj",
      stars: 5,
    },
    {
      text: "We had our family gathering here and the party arrangements were excellent. Delicious food, cozy ambiance, and great service.",
      image: "assets/img/placeholder.png",
      name: "Ramesh Kumar",
      handle: "rameshkumar",
      stars: 5,
    },
    {
      text: "The multi-cuisine restaurant at Mubarak Family Restaurant is a must-visit! The Arabic and halal dishes were absolutely flavorful and fresh.",
      image: "assets/img/placeholder.png",
      name: "Fatima Ali",
      handle: "fatimaali",
      stars: 5,
    },
    {
      text: "I booked a room and enjoyed the outdoor seating with beautiful surroundings. The South Indian breakfast was top-notch!",
      image: "assets/img/placeholder.png",
      name: "Vikram Menon",
      handle: "vikrammenon",
      stars: 5,
    },
    {
      text: "The chef’s recommendations are always spot on. The Kung Pao Chicken and Shawarma Platter are my favorites here.",
      image: "assets/img/placeholder.png",
      name: "Leena Thomas",
      handle: "leenathomas",
      stars: 5,
    },
    {
      text: "A perfect place for both casual dining and events. The staff handled our party beautifully, and the food quality is consistently excellent.",
      image: "assets/img/placeholder.png",
      name: "Mohammed Iqbal",
      handle: "mohammediqbal",
      stars: 5,
    },
  ];

  useEffect(() => {
    const swiperContainer = document.querySelector(".testimonials-14");
    if (swiperContainer) {
      new Swiper(swiperContainer, {
        loop: true,
        speed: 600,
        autoplay: { delay: 5000 },
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 24 },
        },
      });
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Reviews</span>
        <h2>What our guests say</h2>
        <p>
          Read feedback from our satisfied guests about dining, events, and
          hospitality at Mubarak Family Restaurant, Marthandam.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonials-14 swiper init-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((item, idx) => (
              <TestimonialCard key={idx} {...item} />
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
