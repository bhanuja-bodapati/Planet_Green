"use client";

import React, { useState } from "react";

type VideoItem = {
  src: string;
  title: string;
  id: string;
};

export default function YoutubeSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos: VideoItem[] = [
    { src: "/Collabaration/youtube1.png", title: "Dia Mirza on Sustainable Living", id: "psQ8I4UR-ag" },
    { src: "/Collabaration/youtube2.png", title: "Samantha on Sustainable Living", id: "N_iSKzS9c2E" },
    { src: "/Collabaration/youtube3.png", title: "Renuka Chowdhury on Sustainable Living", id: "6pCXRiS2C1o" },
    { src: "/Collabaration/youtube4.png", title: "Nagarjuna Akkineni on Sustainable Living", id: "RUX2kP27qO4" },
    { src: "/Collabaration/youtube5.png", title: "Amala Akkineni on Sustainable Living", id: "cqRJMeKQFy4" },
    { src: "/Collabaration/youtube6.png", title: "Rakul Preet Singh on Sustainable Living", id: "SI2qFbtwcE8" },
    { src: "/Collabaration/youtube7.png", title: "Lavanya Tripathi on Sustainable Living", id: "AhAzFf9Orks" },
    { src: "/Collabaration/youtube8.png", title: "Y S Bharathi on Sustainable Living", id: "9FbkZ6mQe9c" },
  ];

  return (
    <section className="w-full bg-white px-6 md:px-10 lg:px-16 py-14">

      {/* Centered Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {videos.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[18px] overflow-hidden shadow-lg bg-black w-full max-w-[430px] aspect-video cursor-pointer hover:scale-[1.03] transition"
            onClick={() => setActiveVideo(item.id)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#5B8C51]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Video Modal ===== */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="relative w-[90%] max-w-3xl">
            <iframe
              className="w-full h-[55vw] md:h-[430px] rounded-lg"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:scale-110 transition"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
