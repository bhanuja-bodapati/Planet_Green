import React from "react";

export default function VisionariesSection() {
  return (
<section
  className="relative w-screen h-[582px] flex flex-col items-center justify-center text-center px-6"
  style={{ background: "#5B8C51" }} // change color if needed
>
  {/* Background Plants Image */}
  {/* Background plants image (brighter) */}
<div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
  <img
    src="/AboutUs/plants.png"
    alt="Plants Background"
    className="w-full h-[200px] object-cover object-bottom opacity-60 brightness-125"
  />
</div>


  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto space-y-6">
    <h2 className="text-white text-3xl md:text-5xl font-lufga font-bold">
      Visionaries of Green Living
    </h2>

    <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-4">
      VINAY RAM, our Managing Director, brings over 15 years of seasoned Real
      Estate Management experience to Planet Green. His journey led him from
      construction to the world of natural farming, cultivating not just land but
      a new philosophy of living.
    </p>

    <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-4">
      “As I began interacting with nature through eco-friendly farming, I
      realised the myriad ways humans can positively engage with our environment.
      At Planet Green, we create communities and ecosystems where urbanites can
      indulge in, involve themselves with, and positively impact nature.
      Throughout our communities, elements of nature play a pivotal role in
      daily life.”
    </p>
  </div>
</section>
  );
}