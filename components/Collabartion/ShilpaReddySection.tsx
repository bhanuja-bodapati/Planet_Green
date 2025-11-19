import React from "react";

export default function ShilpaReddySection() {
  return (
    <section
      className="relative w-screen min-h-[520px] flex flex-col items-center text-center px-6 py-20"
      style={{ background: "#5B8C51" }}
    >
      {/* Background Plants Image (Top Pattern - Mirrored & Brighter) */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <img
          src="/Collabaration/plants.png"
          alt="Plants Background"
          className="w-full h-[260px] object-cover opacity-70 brightness-150 scale-y-[-1]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h2 className="text-white text-3xl md:text-5xl font-lufga font-bold leading-tight">
          Sustainable Living with <br /> Shilpa Reddy
        </h2>

        <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Planet Green is honoured to embark on a collaborative journey with Shilpa Reddy.
          This partnership aims to share meaningful stories from nature's finest friends,
          exploring their life choices and beliefs that align with sustainable living.
        </p>

        <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Through this collaboration, we bring you insights into eco-conscious lifestyles,
          sustainable practices, and the wisdom of those who have chosen to live in harmony
          with nature. Join us as we explore the paths to a greener, more sustainable future
          with Shilpa Reddy.
        </p>
      </div>
    </section>
  );
}
