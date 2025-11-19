"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function AwardsSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    "/AboutUs/Award1.png",
    "/AboutUs/Award2.png",
    "/AboutUs/Award3.png",
    "/AboutUs/Award4.png",
  ];

  useEffect(() => {
    // Title animation on scroll
    gsap.fromTo(
      ".awards-section-title",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".awards-section-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate each slide card one by one on scroll
    const slideCards = document.querySelectorAll(".slide-card");
    slideCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotateY: -15,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2, // Stagger effect
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate navigation buttons
    gsap.fromTo(
      ".nav-controls",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".nav-controls",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate active slide on change
    const animateSlide = () => {
      const active = document.querySelector(".swiper-slide-active .slide-card");
      if (active) {
        gsap.fromTo(
          active,
          { scale: 0.9, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
        );
      }
    };

    if (swiperRef.current) {
      swiperRef.current.on("slideChangeTransitionStart", animateSlide);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white awards-section overflow-hidden">
      <h2 className="text-center mb-16 text-black font-bold text-3xl md:text-4xl lg:text-5xl awards-section-title">
        Indian Achievers Awards
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={-120}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          onInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 20 },
            768: { slidesPerView: 2.1, spaceBetween: -60 },
            1024: { slidesPerView: 3, spaceBetween: -120 },
          }}
          className="w-full mb-8"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="transition-all duration-700 ease-in-out transform relative w-full h-[300px] md:h-[380px] lg:h-[450px] rounded-[40px] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.2)] slide-card">
                <img
                  src={src}
                  alt={`Award ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8 nav-controls">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="custom-pagination flex gap-2"></div>

          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* Pagination Bullets */
        .custom-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet:hover {
          background: #9ca3af;
        }
        .custom-bullet-active {
          background: #4a7c4e;
          width: 28px;
          height: 10px;
          border-radius: 5px;
        }

        /* Swiper Slide Transitions */
        .swiper-slide {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.6s ease;
          transform: scale(0.75);
          opacity: 0.4;
        }

        .swiper-slide-prev {
          transform: translateX(-80px) scale(0.75) rotateY(8deg);
          opacity: 0.5;
        }

        .swiper-slide-next {
          transform: translateX(80px) scale(0.75) rotateY(-8deg);
          opacity: 0.5;
        }

        .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
        }

        .swiper-slide-active .slide-card {
          box-shadow: 0 15px 60px rgba(0, 0, 0, 0.25);
        }

        /* Smooth perspective */
        .swiper {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
}