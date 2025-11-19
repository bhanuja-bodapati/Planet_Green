"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../common/navbar";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

export default function SustainableSection() {
  const router = useRouter();

  return (
    <section
      className="
        relative 
        w-full 
        overflow-visible
        
        bg-white 
        !bg-white 
        before:absolute 
        before:inset-0 
        before:bg-white 
        before:z-[1]
        before:content-[''] 
      "
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Force WHITE behind everything */}
      <div className="absolute inset-0 bg-white z-[0]"></div>

      <Navbar />

      {/* ==== WRAPPER ==== */}
      <div
        className="
          relative 
          flex flex-col lg:flex-row 
          items-center lg:items-start 
          justify-start
          
          px-4 md:px-12 
          lg:px-0

          pt-24 md:pt-24 lg:pt-0
          pb-16 md:pb-24

          z-[2]   /* Content ABOVE white background */
        "
      >

        {/* ==== RIGHT IMAGE SECTION ==== */}
        <div className="relative w-full lg:w-auto flex justify-center lg:justify-start mb-16 lg:mb-0 order-1 lg:order-2">

          {/* ============================= */}
          {/*     RESPONSIVE IMAGE WIDTHS   */}
          {/* ============================= */}
          <div
            className="
              relative 
              w-full 
              h-[250px]
              sm:h-[420px]
              md:h-[500px]

              lg:w-[1175px]
              xl:w-[1400px]
              2xl:w-[1650px]
              3xl:w-[2000px]

              lg:h-[793px]
              lg:rounded-[60px_60px_40px_0px]
              lg:overflow-hidden
              lg:mt-[10px]

              lg:ml-[-20px]
              xl:ml-[-40px]
              2xl:ml-[-60px]
              3xl:ml-[-80px]

              z-[3]
            "
          >
            <img
              src="/AboutUs/sustainable1.png"
              alt="Main Field"
              className="
                w-full
                h-full
                object-cover
                rounded-none
                lg:rounded-[60px_60px_40px_0px]
              "
            />
          </div>

          {/* ==== SMALL IMAGE ==== */}
          <div
            className="
              absolute 
              block        

              top-[180px]
              right-[10px]
              w-[120px]
              h-[80px]
              md:top-[240px]

              lg:top-[610px]
              lg:left-[330px]
              xl:left-[400px]
              2xl:left-[480px]
              3xl:left-[600px]

              lg:w-[260px]
              lg:h-[165px]

              rounded-[25px]
              overflow-hidden
              z-[4]
            "
          >
            <img
              src="/AboutUs/sustainaable2.png"
              alt="Sunset"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ==== ABOUT TEXT ==== */}
          <div
            className={`
              absolute inset-0 flex flex-col justify-center items-end 
              pr-[6%] lg:pr-[10%] 
              z-[5] 
              ${plusJakarta.className}
            `}
          >
            <h2
              className="text-white font-[500] text-right drop-shadow-xl"
              style={{ fontSize: "58px", lineHeight: "61px" }}
            >
              About
            </h2>

            <h2
              className="absolute text-white font-[500] text-right drop-shadow-xl"
              style={{
                fontSize: "58px",
                bottom: "25px",
                right: "3%",
              }}
            >
              Us
            </h2>
          </div>

          {/* ==== MOBILE DESCRIPTION ==== */}
          <div className="absolute left-1 top-[36%] transform -translate-y-1/2 w-[68%] sm:w-[60%] lg:hidden z-[5]">
            <p className="font-[400] text-[16px] leading-[31px] text-[#07260E] font-[Work_Sans]">
              Grow more, waste less, <br /> and support farmers with <br /> smart,
              sustainable <br />
              technology.
            </p>
          </div>
        </div>

        {/* ==== LEFT TEXT SECTION ==== */}
        <div
          className="
            relative 
            z-[5] 
            max-w-[600px] lg:max-w-[700px] 
            order-2 lg:order-1 
            w-full text-left

            lg:mt-[150px]
            lg:ml-[15px]
          "
        >

          {/* ==== 2-LINE FIXED DESKTOP HEADING ==== */}
          <h1
            className="
              font-lufga text-gray-900 
              leading-[41px] text-[24px] 
              md:text-[46px] tracking-[3%] 
              lg:text-[50px] lg:leading-[74px]

              lg:max-w-[620px]
              xl:max-w-[700px]
              2xl:max-w-[780px]
              3xl:max-w-[850px]
            "
          >
            <span className="hidden lg:inline font-[700]">
              Cultivating a{" "}
              <span className="bg-[#5B8C51] text-white px-4 py-1 rounded-full">
                Sustainable
              </span>{" "}
              Future
            </span>

            <span className="lg:hidden">
              <span className="font-bold">Cultivating</span>{" "}
              <span className="font-normal">a</span>{" "}
              <span className="inline-block bg-[#5B8C51] text-white px-4 py-1 rounded-full font-bold ml-2">
                Sustainable
              </span>{" "}
              <span className="font-bold">Future</span>
            </span>

            <br className="hidden lg:block" />

            <span className="hidden lg:inline text-black font-[700]">
              through Smart Agriculture
            </span>

            <span className="lg:hidden text-black font-extrabold">
              through Smart Agriculture
            </span>
          </h1>

          <p className="mt-6 text-[#07260E] text-[18px] leading-[33px] font-[Work_Sans] hidden lg:block lg:text-[24px] lg:leading-[31px]">
            Grow more, waste less, and support farmers with smart, sustainable
            technology.
          </p>

          <button
            onClick={() => router.push("/ContactUs")}
            className="
              mt-8 bg-[#5B8C51] text-white font-lufga font-bold 
              text-[20px] leading-[41px] tracking-[3%] 
              rounded-[30px] w-[173px] h-[60px]
              flex justify-center items-center 
              hover:bg-[#4A7544] transition
            "
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4 ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
