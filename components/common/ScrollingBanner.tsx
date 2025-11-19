"use client";
import { Sun } from "lucide-react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400"], // Regular weight as per Figma
});

export function ScrollingBanner() {
  const items = [
    "Green the planet",
    "Eco-friendly the planet",
    "Conserve the planet",
    "Save the planet",
    "Environmentally-friendly",
  ];

  return (
    <div className="bg-[#5B8C51] text-white py-4 overflow-hidden">
      <div
        className={`${workSans.className} flex items-center gap-12 animate-scroll whitespace-nowrap`}
        style={{
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "20px",
          lineHeight: "120%",
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 flex-shrink-0 px-2"
            style={{
              minWidth: "fit-content",
            }}
          >
            <Sun className="w-5 h-5" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
}
