"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const img =
  "https://images.pexels.com/photos/30772466/pexels-photo-30772466.jpeg";

export default function CardSwipe() {
  return (
    <Swiper
      className="w-full h-screen flex items-center"
      modules={[FreeMode, Autoplay]}
      freeMode={{ enabled: true }}
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      allowTouchMove={false}
      autoplay={{
        delay: 0, // ✅ no delay
        disableOnInteraction: false,
        pauseOnMouseEnter: false, // ✅ don’t stop on hover
      }}
      speed={6000} // ✅ continuous scrolling speed
    >
      {[...Array(15)].map((_, i) => (
        <SwiperSlide key={i} className="flex items-center justify-center">
          <Image
            width={1920}
            height={1080}
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover rounded-lg"
            unoptimized
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
