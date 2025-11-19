"use client";
import React from "react";

export default function VisionMissionSection() {
  return (
    <section
      className="relative w-full h-[580px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: " #5B8C51" }}
    >
      {/* ---- Brighter Plants Background ---- */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <img
          src="/AboutUs/plants.png"
          alt="Plants Background"
          className="w-full h-[240px] object-cover object-bottom opacity-80 brightness-[1.45]"
        />
      </div>

      {/* ---- Cards Container ---- */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* ---------- VISION CARD WRAPPER ---------- */}
        <div className="relative">

          {/* Vegetable images BEHIND the card */}
          <img src="/AboutUs/Vision1.png" className="absolute -top-14 -left-16 w-32 z-0 pointer-events-none" />
          <img src="/AboutUs/Vision2.png" className="absolute -top-4 -left-24 w-28 z-0 pointer-events-none" />
          <img src="/AboutUs/Vision4.png" className="absolute -bottom-16 -right-14 w-40 z-0 pointer-events-none" />

          {/* Card */}
          <div className="relative z-10 bg-white/55 backdrop-blur-md rounded-[35px] shadow-lg p-10 text-center border border-white/50">
            <h3 className="text-xl font-bold text-[#113B2E] mb-4">Vision</h3>
            <p className="text-[#183D2F] text-sm leading-relaxed max-w-md mx-auto">
              To liberate Mother Nature of her burden so she can heal herself,
              by enlightening her children on the planet to do that for her.
            </p>
          </div>
        </div>

        {/* ---------- MISSION CARD WRAPPER ---------- */}
        <div className="relative">

          {/* Vegetable images BEHIND the card */}
          <img src="/AboutUs/Vision3.png" className="absolute -top-14 -left-14 w-32 z-0 pointer-events-none" />
          <img src="/AboutUs/Vision1.png" className="absolute -bottom-16 -right-16 w-36 z-0 pointer-events-none" />
          <img src="/AboutUs/Vision2.png" className="absolute -bottom-8 -right-6 w-28 z-0 pointer-events-none" />

          {/* Card */}
          <div className="relative z-10 bg-white/55 backdrop-blur-md rounded-[35px] shadow-lg p-10 text-center border border-white/50">
            <h3 className="text-xl font-bold text-[#113B2E] mb-4">Mission</h3>
            <p className="text-[#183D2F] text-sm leading-relaxed max-w-md mx-auto">
              We strive to bring humankind closer to nature, re-teaching the
              lost arts of sustainable food production, natural farming, and
              soil replenishment – rekindling ancient wisdom for modern times.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
