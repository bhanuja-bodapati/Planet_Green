"use client";
import { Asterisk } from "lucide-react";

export function FarmingSection() {
const items = [
"Agriculture",
"Farming",
"Organic",
];

return ( <div className="bg-[#5B8C51] text-white font-bold py-4 overflow-hidden"> <div className="flex items-center gap-8 animate-scroll whitespace-nowrap">
{/* Duplicate items for seamless loop */}
{[...items, ...items, ...items].map((item, index) => ( <div key={index} className="flex items-center gap-3 flex-shrink-0"> <Asterisk className="w-6 h-6" /> {/* Icon size proportional to text */} <span className="text-5xl">{item}</span> {/* Increased text size */} </div>
))} </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }
    .animate-scroll {
      animation: scroll 60s linear infinite;
      display: flex;
    }
  `}</style>
</div>

);
}
