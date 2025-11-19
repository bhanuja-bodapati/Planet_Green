"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function GallerySection() {
  const images = [
    "/Collabaration/gallery3.png",
    "/Collabaration/gallery2.png",
    "/Collabaration/gallery1.png",
  ];

  return (
    <section
      className="w-full flex items-center justify-center bg-[#5B8C51]"
      style={{
        backgroundImage: "url('/Collabaration/plants.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        height: "460px",
      }}
    >
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12 pt-6">

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-white !opacity-100 !w-6 !h-2 !rounded-full",
          }}
          spaceBetween={15}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[24px] shadow-lg p-3 max-w-[420px] mx-auto">
                <div className="w-full h-[290px] rounded-[20px] overflow-hidden">
                  <img
                    src={src}
                    alt="Gallery"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
