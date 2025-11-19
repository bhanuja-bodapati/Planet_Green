"use client";

import React from "react";

export default function JoinSection() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row">

        {/* Left Image */}
        <div className="w-full md:w-1/2 h-[280px] md:h-auto">
          <img
            src="/Home/organic.png"
            alt="Join Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12"
          style={{
            background: "linear-gradient(180deg, #E3ECD2 0%, #5B8C51 100%)",
          }}
        >
          <h2 className="font-bold text-[28px] md:text-[44px] leading-tight text-[#07260E] mb-4">
            Will you be Part of a <br /> Greater Change?
          </h2>

          <p className="text-[#07260E] text-[14px] md:text-[16px] font-medium leading-relaxed mb-10 max-w-md">
            Planet Green invites like-minded individuals who are driven by
            sustainability to join our team. We are also inviting investors and
            collaborators to join hands with us.
          </p>

          {/* Flex Box */}
          <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">

            {/* Circle */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white flex items-center justify-center">
                <span className="font-bold text-3xl md:text-5xl text-white">100%</span>
              </div>
              <p className="text-white text-[14px] md:text-[16px] font-medium mt-3 text-center">
                Organic Solutions
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-28 bg-white opacity-60"></div>

            {/* Points */}
            <div className="flex flex-col gap-2 md:gap-3">
              {[
                "Biodynamic food",
                "Organic gardening",
                "Organic food certification",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <img src="/Home/tick.png" className="w-4 h-4 md:w-5 md:h-5" alt="tick" />
                  <p className="text-white text-[14px] md:text-[16px] font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
