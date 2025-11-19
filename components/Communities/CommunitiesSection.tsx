"use client";

import React from "react";
import Navbar from "../common/navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function CommunitiesSection() {
  const router = useRouter();

  return (
    <section className="relative bg-white overflow-hidden w-full h-auto md:min-h-screen pt-[10px] pb-0">

      {/* Navbar */}
      <Navbar />

      {/* Mobile Logo */}
      <div className="md:hidden px-[10px] mt-4">
        <img src="/Communities/logo.png" alt="Mobile Logo" className="w-28" />
      </div>

      {/* Background Image Section */}
      <div
        className="
          relative w-full mt-3 mx-auto overflow-hidden rounded-[20px]
          px-[6px]                      /* iPhone 14 Pro default */
          min-[412px]:px-[5px]          /* Pixel 7 Pro */
          min-[430px]:px-[5px]          /* iPhone 14 Pro Max */
          md:w-[calc(100%-16px)] md:px-0
          h-auto md:h-[750px] lg:h-[820px]
        "
      >
        <img
          src='/Communities/communities1.png'
          alt='Communities Background'
          className="
            w-[370px] h-[181px] mx-auto object-cover rounded-[20px]

            min-[412px]:w-[390px]        /* Pixel 7 Pro wider */
            min-[430px]:w-[400px]        /* iPhone 14 Pro Max wider */

            md:w-full md:h-full md:rounded-[30px]
          "
        />


        {/* Title */}
        <h1
  className={`${plusJakarta.className} absolute text-white font-medium drop-shadow-lg z-40
  text-left md:text-right
  text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[170px]
  leading-[1.1]
  top-[20%] left-[8%]
  min-[412px]:left-[15%]
  min-[430px]:left-[8%]

  md:top-[26%] md:left-auto md:right-[12%]
  lg:right-[14%]
  xl:right-[35%]
  `}
>
          Communities
        </h1>

        {/* Contact Button Mobile */}
        <button
          onClick={() => router.push("/ContactUs")}
          className="
            md:hidden absolute z-50 bg-[#5B8C51] text-white rounded-[30px] shadow-md font-medium
            flex items-center justify-center gap-2
            w-[173px] h-[60px] text-[15px]

            bottom-[2%] left-[2%]
            min-[412px]:left-[10%]
            min-[430px]:left-[5.5%]
          "
        >
          Contact Us
          <span className="text-lg rotate-45">➜</span>
        </button>
      </div>

      {/* Text Section */}
      <div className="
        w-full px-4 sm:px-6
        mt-[10px]
        mb-[15px] pb-0     /* 📌 Exact same as Philosophy */
        md:absolute md:top-[63%] md:left-[1%] md:z-50
        md:px-0 md:mb-0
        md:max-w-[900px]
      ">
        <h2 className="font-lufga font-semibold text-[28px] sm:text-[40px] md:text-[50px]
          leading-[38px] md:leading-[74px] text-[#07260E]">
          Intentional <span className="font-normal">actions growing</span>
        </h2>

        <h2 className="font-lufga text-[28px] sm:text-[40px] md:text-[50px]
          leading-[38px] md:leading-[74px] text-[#07260E]
          flex flex-wrap items-center gap-2 mt-2">
          a
          <span className="bg-[#5B8C51] text-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
            greener,
          </span>
          more <span className="font-semibold">sustainable</span>
          <span className="font-semibold">future</span>
        </h2>

        <p className="mt-3 text-[#07260E] font-['Work_Sans'] text-[15px]
          sm:text-[17px] md:text-[20px] leading-[26px] md:leading-[28px]
          max-w-[600px]">
          Our mission is to empower you with sustainable event solutions that
          reduce carbon emissions and create meaningful, lasting change —
          seamlessly and responsibly.
        </p>
      </div>

    </section>
  );
}
