"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar from "../common/navbar";
import localFont from "next/font/local";

const lufga = localFont({
  src: "../../public/fonts/Lufga-Regular.otf",
  weight: "400",
});

export default function HeroSection() {
  const router = useRouter();

  return (
    <>
      {/* 🔥 Desktop Scaling Fix */}
      <style jsx global>{`
        @media (min-width: 1025px) {
          .desktop-hero-scale {
            transform: scale(1);
            transform-origin: top center;
          }
          body {
            zoom: 1 !important;
          }
        }
      `}</style>

      <section className="relative bg-white overflow-hidden w-full min-h-screen pb-0 md:pb-20">
        {/* Use full Navbar on md+ only, show a compact mobile topbar for smaller screens */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* ===== Mobile Top Bar (logo left, menu right) ===== */}
        <div className="md:hidden w-full flex items-center justify-between px-4 pt-4 pb-2">
          {/* Replace /logo.png with your actual logo path */}
          <img
            src="/logo.png"
            alt="Planet Green"
            className="w-[160px] h-auto object-contain"
          />

          {/* Simple hamburger circle (keeps visual from screenshot) */}
          <button
            aria-label="Open menu"
            className="w-10 h-10 rounded-full border-2 border-[#07260E] flex items-center justify-center"
            onClick={() => {
              // if your Navbar has a mobile open handler, call it here
              // otherwise this is a placeholder
              // e.g. setShowMobileMenu(true)
            }}
          >
            <div className="space-y-[4px]">
              <span className="block w-4 h-[2px] bg-[#07260E]" />
              <span className="block w-4 h-[2px] bg-[#07260E]" />
              <span className="block w-4 h-[2px] bg-[#07260E]" />
            </div>
          </button>
        </div>

        {/* HERO WRAPPER */}
        <div className="relative mx-[10px] max-w-[1800px] mt-4 rounded-[25px] md:rounded-[60px] overflow-hidden aspect-[1400/803] mb-0 desktop-hero-scale">

          {/* Background Image */}
          <img
            src="/Home/hero.png"
            alt="Planet Green Hero"
            className="absolute inset-0 w-full h-full object-cover rounded-[25px] md:rounded-[60px]"
          />

          {/* ========== DESKTOP VIEW CONTENT (Not Touching Mobile) ========== */}
          <div className="hidden md:block">

            {/* LEFT SIDE CONTENT */}
            <div className="absolute z-30 text-left text-[#07260E] bottom-[13%] left-[3%] max-w-[650px]">

              {/* Consultation Row */}
              <div className="flex items-center gap-5 mb-6">
                <span className="text-[#193018] font-light text-[20px] uppercase tracking-[0.72em] [font-family:'Work_Sans',sans-serif]">
                  Consultation
                </span>
                <img
                  src="/Home/Home3.png"
                  alt="Sun"
                  className="w-[110px] h-[65px] object-cover rounded-full shadow-md"
                />
              </div>

              {/* Headline */}
              <h1 className="text-[50px] leading-[62px] font-medium">
                <span className="font-semibold">Advancing</span>
                <br />
                the <span className="font-semibold">Future</span> Through
                <br />
                <span className="font-semibold">Sustainable </span> Cultivation
              </h1>

              {/* Button + Description */}
              <div className="flex items-start gap-6 mt-8">
                <button
                  onClick={() => router.push("/ContactUs")}
                  className={`bg-[#5B8C51] text-white text-[17px] font-semibold shadow-md
                  w-[175px] h-[58px] rounded-[28px]
                   hover:bg-[#447643] transition-all`}

                >
                  Discover More ↗
                </button>

                <p className="text-[#193018] text-[15px] leading-[22px] max-w-[270px]">
                  Join us in revolutionizing agriculture through innovative practises and
                  sustainable growth.
                </p>
              </div>
            </div>

            {/* FARMER CARD (Desktop) */}
            <div
              className="absolute z-30 overflow-hidden shadow-2xl justify-center items-center flex"
              style={{
                width: "530px",
                height: "250px",
                bottom: "5%",
                left: "calc(53% + 50px)",
                transform: "translateX(-50%)",
                borderRadius: "50px",
                backdropFilter: "blur(35px)",
                WebkitBackdropFilter: "blur(35px)",
                background:
                  "linear-gradient(106.38deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 100%)",
              }}
            >
              <div className="relative flex items-center gap-6 px-8 z-10">
                <div className="flex flex-col justify-center text-white">
                  <h3 className="font-bold text-[24px] leading-[27px] tracking-[0.03em]">
                    Need expert<br />
                    <span className="inline-block pl-2">advice</span><br />
                    for your farm?
                  </h3>
                  <p className="text-[15px] leading-[18px] opacity-95 mt-6">
                    Meet Zimmer, our dedicated farmer with years of experience.
                  </p>
                </div>

                <div className="relative w-[280px] overflow-hidden rounded-[40px]">
                  <img
                    src="/Home/farmer.png"
                    alt="Farmer"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => router.push("/ContactUs")}
                    className={`absolute bg-white text-black hover:bg-gray-100 shadow-xl font-semibold
                    transition-all duration-300`}

                    style={{
                      width: "150px",
                      height: "45px",
                      bottom: "15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      borderRadius: "25px",
                      fontSize: "14px",
                    }}
                  >
                    Contact Us ↗
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE SOLUTIONS */}
            <div className="absolute bottom-[8%] right-[4%] w-[300px] text-black">
              <h3 className="font-semibold text-[16px] leading-[27px] tracking-[0.03em]">
                We provide cutting-edge solutions <br /> to boost field crop productivity.
              </h3>

              <div className="space-y-4 mt-4">
                {/* Item 01 */}
                <div className="flex gap-4 items-center">
                  <span className="font-extrabold text-[36px] tracking-widest text-[#07260E]">01</span>
                  <p className="text-[14px] leading-[17px] w-[202px] text-[#193018]">
                    Optimize fertilizer and water usage reducing costs
                  </p>
                </div>

                {/* Item 02 */}
                <div className="flex gap-4 items-center">
                  <span className="font-extrabold text-[36px] tracking-widest text-[#07260E]">02</span>
                  <p className="text-[14px] leading-[17px] w-[202px] text-[#193018]">
                    Unique field conditions and maximising results
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ========== MOBILE UNCHANGED (but tuned sizes) ========== */}
          {/* ========== MOBILE (CENTERED) ========== */}
          <div className="md:hidden">
            {/* MOBILE FARMER CARD — centered */}
            <div
              className="absolute z-30 overflow-hidden shadow-2xl flex justify-center items-center  ml-6"
              style={{
                width: "36%",
                height: "96px",
                bottom: "2%",
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "22px",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background:
                  "linear-gradient(106.38deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 100%)",
              }}
            >
              <div className="relative w-[88px] h-[88px] overflow-hidden rounded-[18px]">
                <img src="/Home/farmer.png" className="w-full h-full object-cover" />
                <button
                  onClick={() => router.push("/ContactUs")}
                  className="absolute bg-white text-black shadow-md transition-all font-semibold"
                  style={{
                    width: "74px",
                    height: "26px",
                    bottom: "8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "16px",
                    fontSize: "10px",
                  }}
                >
                  Contact Us ↗
                </button>
              </div>
            </div>
          </div>



        </div>

        {/* ===== MOBILE BELOW CONTENT — Tuned typography + spacing to match image ===== */}
        <div className="md:hidden flex flex-col items-start mt-0 px-5 pb-0 mb-0 min-h-[auto]">

          {/* moved further up */}
          <div className="flex justify-between w-full items-start mb-3 -translate-y-28">
            <div className="text-left">
              <h3 className="font-bold text-[14px] leading-[18px] text-[#07260E]">
                Need expert <br />
                advice <br />
                for your farm?
              </h3>

              <p className="text-[11px] leading-[15px] text-gray-700 mt-2 max-w-[220px]">
                Meet Zimmer, our <br />dedicated farmer with <br />years of experience.
              </p>
            </div>

           <img
             src="/Home/Home3.png"
             className="w-[60px] h-[38px] object-cover rounded-full shadow-md mt-16"
           />

          </div>

          <h1 className="text-[1.125rem] leading-[1.12] font-medium text-black -translate-y-20">
            <span className="font-semibold">Advancing the Future</span> Through{" "}
            <span className="font-semibold">Sustainable Cultivation</span>
          </h1>

          <div className="flex flex-col items-start gap-3 mt-2 -translate-y-18">
            <button
              onClick={() => router.push("/ContactUs")}
              className="flex items-center justify-center gap-2 w-[150px] h-[44px] rounded-[25px] bg-[#5B8C51] text-white text-sm font-semibold"
            >
              Discover More ↗
            </button>

            <p className="text-gray-700 text-[12px] max-w-[250px] leading-[16px]">
              Join us in revolutionizing agriculture through innovative practises and
              sustainable growth.
            </p>
          </div>

        </div>



      </section>
    </>
  );
}
