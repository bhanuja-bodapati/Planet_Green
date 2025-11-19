"use client";
import React from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export default function EcoSection() {
  return (
    <section className="relative bg-white pt-4 pb-10 md:pt-12 md:pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      
      {/* FULL DESKTOP WIDTH SUPPORT */}
      <div className="
        w-full 
        max-w-[1800px] 
        mx-auto 
        grid 
        md:grid-cols-2 
        gap-12 lg:gap-16 xl:gap-20 
        items-start
      ">

        {/* LEFT IMAGE GROUP — EXACT PIXEL VALUES APPLIED */}
        <div 
          className="
            relative 
            w-full 
            h-[900px]
            ml-auto
            mr-[80px]
          "
        >

          {/* ECO1 (BIG MAIN OVAL) */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: "395px",
              height: "600px",
              top: "113px",
              left: "294px",
              borderRadius: "272px",
              background: "#E9F1EE",
              boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src="/Home/Eco1.png"
              alt="Eco Friendly Farming"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl md:text-2xl xl:text-2xl font-bold text-center px-4">
                Eco-Friendly <br /> Farming Practices
              </h3>
            </div>
          </div>

          {/* ECO3 (TOP SMALL IMAGE) */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: "153px",
              height: "237px",
              top: "176px",
              left: "119px",
              borderRadius: "119.36px",
              border: "1px solid #E9F1EE",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/Home/Eco3.png"
              alt="Eco3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ECO2 (BOTTOM SMALL IMAGE) */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: "153px",
              height: "237px",
              top: "430px",
              left: "196px",
              borderRadius: "111.9px",
              border: "12px solid white",
              boxShadow: "0 8px 22px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/Home/Eco2.png"
              alt="Eco2"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT CONTENT (UNCHANGED) */}
        <div
          className={`${workSans.className} text-left text-[#07260E] mt-0 md:mt-[50px] lg:mt-[80px] xl:mt-[100px]`}
        >
          {/* Heading */}
          <h2
            className="font-[600] mb-6"
            style={{
              fontFamily: "Lufga, sans-serif",
              fontSize: "50px",
              lineHeight: "60px",
            }}
          >
            Reconnect with <br />
            <span className="text-[#07260E]">Earth's Essence</span>
          </h2>

          {/* Info Banner */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl py-3 px-6 mb-8 shadow-sm w-full max-w-[500px]"
            style={{
              background: "linear-gradient(90deg, #497F49 0%, #E4EDDB 100%)",
              borderRadius: "16px",
            }}
          >
            {/* Fresh Produce */}
            <div className="flex items-center gap-3">
              <div className="bg-[#E6F0E4] p-3 rounded-full">
                <img
                  src="/Home/LeafIcon.png"
                  alt="Leaf Icon"
                  className="w-5 h-5"
                />
              </div>
              <div className="leading-tight">
                <p className="font-medium text-[16px]">Fresh Produce</p>
                <p className="text-sm opacity-90">Cultivation Journey</p>
              </div>
            </div>

            {/* Guaranteed */}
            <div className="flex items-center gap-3">
              <div className="bg-[#E6F0E4] p-3 rounded-full">
                <img
                  src="/Home/ShieldIcon.png"
                  alt="Shield Icon"
                  className="w-5 h-5"
                />
              </div>
              <div className="leading-tight">
                <p className="font-medium text-[16px]">Guaranteed</p>
                <p className="text-sm opacity-90">Organic Quality</p>
              </div>
            </div>
          </div>

          {/* Paragraphs */}
          <p className="text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[26px] xl:leading-[30px] font-medium mb-4">
            A stunning new precinct destined to be the residential and commercial showpiece of eco-friendly living.
          </p>

          <p className="text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[26px] xl:leading-[30px] font-medium mb-4">
            As one of the most ambitious and prestigious urban rejuvenation projects in Hyderabad’s east, Planet Green stands as a landmark.
          </p>

          <p className="text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[26px] xl:leading-[30px] font-medium">
            Our community proudly takes its place alongside other master-planned developments, setting a new standard.
          </p>

        </div>
      </div>
    </section>
  );
}
 