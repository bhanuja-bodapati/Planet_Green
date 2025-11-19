"use client";
import React, { useState } from "react";

export default function CollaborationSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative w-full bg-[#5B8C51] py-16 md:py-24 lg:py-32 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center">

      {/* Bottom Plant Image */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none -mb-4 md:-mb-2">
        <img
          src="/Home/plants.png"
          alt="Plants"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Static Background Words */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-white font-extrabold opacity-100 text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] whitespace-nowrap">
          Sustainable · Shilpa Reddy
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl text-center">

        {/* Heading */}
        <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10">
          Collaboration
        </h2>

        {/* Video / Thumbnail Container */}
        <div className="rounded-2xl overflow-hidden shadow-xl mx-auto w-full max-w-3xl relative">
          {playVideo ? (
            // Actual YouTube Video
            <iframe
              className="w-full h-[200px] sm:h-[320px] md:h-[420px] lg:h-[500px]"
              src="https://www.youtube.com/embed/N_iSKzS9c2E?autoplay=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            // Thumbnail with Play Button
            <div className="relative">
              <img
                src="/Home/collobartion1.png"
                alt="Collaboration Thumbnail"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setPlayVideo(true)}
                  className="bg-red-600 hover:bg-red-700 transition rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
                >
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
