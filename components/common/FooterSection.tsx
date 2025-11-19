import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function FooterCompleteSection() {
  return (
    <footer className="relative w-full bg-[#5B8C51] text-white overflow-hidden">
      {/* Background Plants Image */}
      <div className="absolute bottom-0 left-0 w-full h-[22vh] z-0 pointer-events-none">
        <img
          src="/Home/plants.png"
          alt="Plants background"
          className="w-full h-full object-cover object-top opacity-90"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-4 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo + Description */}
          <div>
            <img src="/Home/Logo.png" alt="Planet Green Logo" className="h-12 mb-6" />
            <p className="text-sm leading-relaxed opacity-90">
              Planet Green aspires to create a new dimension in the natural
              farming and alternate real estate segments in India.
            </p>
          </div>

          {/* Quick Links + Communities */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-base mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/AboutUs" className="hover:underline">About Us</Link></li>
                <li><Link href="/Philosophy" className="hover:underline">Philosophy</Link></li>
                <li><Link href="/Collaborations" className="hover:underline">Collaborations</Link></li>
                <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-4">Communities</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/Communities/Dates County" className="hover:underline">Dates County</Link></li>
                <li><Link href="/Communities/Farm Natura" className="hover:underline">Farm Natura</Link></li>
                <li><Link href="/Communities/Green Land Capital" className="hover:underline">Green Land Capital</Link></li>
                <li><Link href="/Communities/Veda Bharath" className="hover:underline">Veda Bharath</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919555700900" className="hover:underline">+91 9555 700 900</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <p>
                  2nd Floor, Regent Square Building, Q-City Road, Gowlidoddi,
                  Hyderabad – 500075
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs mb-10 md:mb-14">
          <p className="text-center md:text-left mb-4 md:mb-0">
            <span className="font-semibold">Planet Green Infra Pvt. Ltd.</span> © 2023 All Rights Reserved – Site by{" "}
            <span className="font-semibold">TechGy Innovations</span>
          </p>

          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaLinkedinIn /></a>

            <Link href="/terms" className="ml-4 hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="ml-2 hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Backdrop Text */}
      <div className="absolute bottom-0 inset-x-0 text-center z-0">
        <h2
          className="text-white font-extrabold text-center mt-1"
          style={{
            fontSize: "clamp(3rem, 9vw, 12rem)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          PLANET GREEN
        </h2>
      </div>
    </footer>
  );
}
