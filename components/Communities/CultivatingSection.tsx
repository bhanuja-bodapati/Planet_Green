"use client";
import React, { useState } from "react";

export default function CommunitiesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const communities = [
    {
      title: "Dates County",
      desc: "A 300+ acre vast landscape that runs on its own.",
      img: "/Communities/Cultivating1.png",
    },
    {
      title: "Farm Natura",
      desc: "Farm Natura offers a community of like-minded individuals.",
      img: "/Communities/Cultivating1.png",
    },
    {
      title: "Green Land Capital",
      desc: "We are Green Land Capital — a nature-focused entity.",
      img: "/Communities/Cultivating1.png",
    },
    {
      title: "Veda Bharath",
      desc: "Our traditionally grown rice is a true labor of love.",
      img: "/Communities/Cultivating1.png",
    },
  ];

  return (
    <section className="w-full bg-white pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 lg:pb-20 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* ===== Heading Section ===== */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 lg:mb-20 px-2">
        <h2 className="font-lufga font-semibold text-[28px] sm:text-[36px] md:text-[46px] lg:text-[50px] leading-[130%] text-[#07260E]">
          Cultivating Eco-Conscious <br className="hidden sm:block" />{" "}
          Neighbourhoods
        </h2>

        <p className="font-['Work_Sans'] font-medium text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#07260E] text-center mt-4 sm:mt-5 md:mt-6">
          Planet Green is dedicated to building communities that will spearhead
          a movement to restore Mother Nature to her true glory. Our diverse
          community projects include:
        </p>
      </div>

      {/* ===== Community List ===== */}
      <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8">
        {communities.map((item, idx) => {
          const isActive = hovered === idx;

          return (
            <div
              key={idx}
              className={[
                "relative grid grid-cols-12 items-center transition-all duration-300 ease-in-out rounded-xl cursor-pointer",
                isActive
                  ? "py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-[#497F49] to-[#C6E1C0] text-white"
                  : "py-5 sm:py-7 md:py-9 text-[#07260E] bg-transparent",
              ].join(" ")}
              // Hover for desktop, tap for mobile
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setHovered(isActive ? null : idx)}
            >
              {/* ===== Title ===== */}
              <h3
                className={[
                  "col-span-12 sm:col-span-4 lg:col-span-3 text-[16px] sm:text-[18px] md:text-[20px] font-semibold transition-colors duration-300",
                  isActive ? "text-white" : "text-[#07260E]",
                ].join(" ")}
              >
                {item.title}
              </h3>

              {/* ===== Description ===== */}
              <p
                className={[
                  "col-span-12 sm:col-span-6 lg:col-span-7 mt-2 sm:mt-0 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed transition-colors duration-300",
                  isActive ? "text-white" : "text-[#3B4A3F]",
                ].join(" ")}
              >
                {item.desc}
              </p>

              {/* ===== Arrow Button ===== */}
              <div className="col-span-12 sm:col-span-2 flex justify-start sm:justify-end mt-3 sm:mt-0">
                <div
                  className={[
                    "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out",
                    isActive
                      ? "bg-white/60 backdrop-blur-sm rotate-45 -translate-y-1"
                      : "border border-[#9EA7A2] hover:-translate-y-1 hover:rotate-45",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "text-lg transition-colors duration-300",
                      isActive ? "text-[#07260E]" : "text-[#07260E]",
                    ].join(" ")}
                  >
                    ↑
                  </span>
                </div>
              </div>

              {/* ===== Floating Image (Now visible on mobile when active) ===== */}
              {isActive && (
                <img
                  src={item.img}
                  alt={item.title}
                  className="block sm:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[120px] sm:w-[140px] md:w-[200px] h-auto object-cover rounded-xl rotate-3 transition-all duration-300 ease-in-out"
                />
              )}

              {/* ===== Divider Line ===== */}
              {!isActive && idx !== communities.length - 1 && (
                <div className="absolute left-0 right-0 bottom-0 border-b border-[#E4E4E4] translate-y-[50%] sm:translate-y-[60%]" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
