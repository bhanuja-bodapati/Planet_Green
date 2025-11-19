"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar({ variant = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`absolute top-[25px] left-0 w-full z-50 flex items-center px-6 md:px-12 ${
          variant === "home" ? "justify-center" : "justify-between"
        }`}
      >
        {/* ========= LOGO ========= */}

        {variant === "home" ? (
          // HOME → CENTER LOGO (NO CARD)
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/Home/logo.png"
              alt="Planet Green Logo"
              width={216}
              height={74}
              className="object-contain"
            />
          </Link>
        ) : variant === "about" ? (
          // ABOUT → LEFT LOGO (NO CARD)
          <Link href="/" >
            <img
              src="/Home/logo.png"
              alt="Planet Green Logo"
              width={216}
              height={74}
              className="object-contain"
            />
          </Link>
        ) : (
          // OTHER PAGES → LEFT LOGO WITH WHITE CARD
          <Link href="/">
            <div className="px-6 py-4 rounded-full bg-white border border-gray-200 shadow-md">
              <img
                src="/Home/logo.png"
                alt="Planet Green Logo"
                width={180}
                height={62}
                className="object-contain"
              />
            </div>
          </Link>
        )}

        {/* ========= RIGHT SIDE BUTTONS ========= */}
        <div className="flex items-center gap-3 ml-auto">

          {/* Desktop Phone */}
          <a
            href="tel:+919555700900"
            className="hidden md:flex items-center justify-center rounded-full border border-white/50 px-4 h-[48px] bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
          >
            <Phone className="text-white w-6 h-6" />
          </a>

          {/* Desktop Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="hidden md:flex items-center gap-2 rounded-full border border-white/50 px-5 h-[48px] bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
          >
            <span className="text-white text-[16px] font-medium">Menu</span>
            <MenuIcon size={22} className="text-white" />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-12 h-12 rounded-full border border-[#1C3F25] flex items-center justify-center bg-white"
          >
            <MenuIcon size={26} className="text-[#1C3F25]" />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[75%] sm:w-[55%] md:w-[38%] lg:w-[32%] shadow-2xl z-[9999] p-8 flex flex-col justify-between transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-black hover:text-gray-600 transition"
        >
          <X size={32} />
        </button>

        <ul className="flex flex-col gap-6 text-2xl font-semibold text-gray-800 mt-14">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/AboutUs" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/Philosophy" onClick={() => setMenuOpen(false)}>Philosophy</Link></li>
          <li><Link href="/Communities" onClick={() => setMenuOpen(false)}>Communities</Link></li>
          <li><Link href="/Collabaration" onClick={() => setMenuOpen(false)}>Collaboration</Link></li>
          <li><Link href="/ContactUs" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <p className="text-xs opacity-70 text-center mt-10">
          © 2025 Planet Green. All rights reserved.
        </p>
      </div>
    </>
  );
}
