"use client";

import React, { useState } from "react";

export default function VisualStoriesSection() {
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    "Dates County",
    "Farm Natura",
    "Green Land Capital",
    "Veda Bharath",
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#07260E] mb-12">
          Visual Stories
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onMouseEnter={() => setHoveredTab(tab)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`px-5 py-2 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                hoveredTab === tab
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-white text-gray-800 border border-gray-300 hover:border-green-700 hover:text-green-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
  
    </section>
  );
}
