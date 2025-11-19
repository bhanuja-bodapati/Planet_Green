"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function SmarterSection() {

  const router = useRouter();
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/Home/Background.png"
        alt="Farming Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Smarter Growth,<br />Greater Efficiency.
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-200">
          Discover innovative tools and technologies that simplify farming while maximizing yields.
        </p>

        <button 
        onClick={() => router.push("/ContactUs")}
        className="flex items-center justify-center gap-2 bg-white text-gray-900 px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:bg-gray-100 transition-all mx-auto">
          Contact Us <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

    </section>
  );
}
