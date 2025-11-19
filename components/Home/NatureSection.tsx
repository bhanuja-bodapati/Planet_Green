"use client";
import React from "react";
import { Poppins } from "next/font/google";

const lufga = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export default function NatureSection() {
  return (
    <section
      className="relative w-full bg-white px-6 md:px-16 lg:px-24 overflow-hidden py-12 md:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ===== Left Image ===== */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full overflow-hidden rounded-3xl shadow-md h-[450px] md:h-[650px] lg:h-[700px]">
            <img
              src="/Home/nature1.png"
              alt="Green Farm Field"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===== Right Content ===== */}
        <div className="w-full flex flex-col justify-center lg:items-start items-center text-center lg:text-left">

          {/* Heading */}
          <h2
            className={`${lufga.className} text-[#07260E] mb-6 md:mb-10`}
            style={{
              fontSize: "38px",
              lineHeight: "44px",
              fontWeight: 700,
            }}
          >
            <span className="lg:text-[64px] lg:leading-[72px]">
              It’s us who Needs <br className="hidden lg:block" /> Nature.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-black text-[15px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[30px] mb-8 md:mb-12 max-w-lg">
            At Planet Green, we want you to make yourself a part of nature in
            ways you can. Either for indulgence, for happy living, for engaging
            yourself in cultivating land, or to make the lap of Mother Earth
            cleaner and greener again. So, through Planet Green, we aspire to
            create farming ecosystems and living communities that let you.
          </p>

          {/* Button */}
          <button className="flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-all mb-10 md:mb-14">
            Learn More
            <span className="text-lg">↗</span>
          </button>

          {/* Bottom Cards */}
          <div className="flex flex-wrap lg:justify-start justify-center gap-4 md:gap-6">
            {[
              { icon: "/Home/nature4.png", label: "Involve" },
              { icon: "/Home/nature5.png", label: "Indulge" },
              { icon: "/Home/nature6.png", label: "Impact" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-[48%] sm:w-[170px] h-[130px] md:h-[140px] rounded-xl overflow-hidden"
              >
                <img
                  src="/Home/nature3.png"
                  className="w-full h-full object-cover"
                  alt={item.label}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <img
                    src={item.icon}
                    className="w-7 h-7 md:w-8 md:h-8 mb-1"
                    alt={item.label}
                  />
                  <span className="text-white font-medium text-sm md:text-[15px]">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
