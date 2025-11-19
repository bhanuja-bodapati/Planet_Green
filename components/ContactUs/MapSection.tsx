"use client";

import React from "react";

export default function MapSection() {
  return (
    <section
      className="
        w-full bg-white flex justify-center 
        pt-[20px]        /* Mobile top spacing */
        md:pt-0          /* No change in desktop */
        pb-6 md:pb-10
      "
    >
      <div className="w-full max-w-[1500px] px-[20px] md:px-[80px] mx-auto flex justify-center md:block">

        {/* MAP BOX */}
        <div
          className="
            relative overflow-hidden mx-auto
            bg-white shadow-sm border border-[#D9D9D9]

            /* Mobile Dimensions */
            w-[370px] h-[500px] rounded-[28px]

            /* Desktop */
            md:w-full md:h-[820px] md:rounded-[30px]
          "
        >

          {/* Google Info Box (Mobile only) */}
          <img
            src="/ContactUs/google-box.png"
            alt="Google Info"
            className="
              absolute top-2 left-2 z-20
              w-[90%]
              md:hidden
            "
          />

          {/* Map Image */}
          <img
            src="/ContactUs/map.png"
            alt="Location Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
