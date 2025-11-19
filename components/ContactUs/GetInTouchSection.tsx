"use client";

import React from "react";
import { SendHorizontal } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section className="w-full py-[80px] px-[50px]" suppressHydrationWarning>
      <div className="max-w-[1350px] mx-auto w-full">
        
        {/* Heading */}
        <h2 className="text-center text-[40px] font-semibold text-[#0A2E14] mb-[60px]">
          Get in Touch
        </h2>

        {/* Form */}
        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[50px]">
          
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-[16px] text-[#0A2E14] mb-2">Your Name</label>
            <input
              type="text"
              className="border-b border-[#557a59] outline-none py-2"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[16px] text-[#0A2E14] mb-2">Email Address</label>
            <input
              type="email"
              className="border-b border-[#557a59] outline-none py-2"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-[16px] text-[#0A2E14] mb-2">Phone Number</label>
            <input
              type="text"
              className="border-b border-[#557a59] outline-none py-2"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-[16px] text-[#0A2E14] mb-2">Subject</label>
            <input
              type="text"
              className="border-b border-[#557a59] outline-none py-2"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-[16px] text-[#0A2E14] mb-2">Message</label>
            <textarea
              rows={4}
              className="border-b border-[#557a59] outline-none py-2 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#6E9B66] text-white px-8 py-3 rounded-full hover:bg-[#5a8354] transition-all"
            >
              Leave a Message <SendHorizontal size={18} />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
