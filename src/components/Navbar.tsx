"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Announcement Bar - visible on lg screens and up */}
      <div className="bg-navy-950 text-slate-300 border-b border-gold-500/20 text-xs py-1 px-4 hidden lg:block">
        <div className="max-w-container-max mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+919838477453" className="flex items-center hover:text-gold-400 transition-colors">
              <span className="material-symbols-outlined text-sm text-gold-500 mr-1">call</span>
              +91-9838477453
            </a>
            <span className="text-gold-500/30">|</span>
            <a href="mailto:kanhalawpointacademy@gmail.com" className="flex items-center hover:text-gold-400 transition-colors">
              <span className="material-symbols-outlined text-sm text-gold-500 mr-1">mail</span>
              kanhalawpointacademy@gmail.com
            </a>
            <span className="text-gold-500/30">|</span>
            <span className="flex items-center text-slate-400">
              <span className="material-symbols-outlined text-sm text-gold-500 mr-1">location_on</span>
              GT Road, Harjinder Nagar, Kanpur Nagar, UP
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[11px] font-semibold border border-gold-500/30">
              5-Star Rated
            </span>
            <span className="text-slate-300 text-xs">Admissions Open 2026-27</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2 sm:py-2.5 text-navy-900"
            : "bg-navy-900/90 backdrop-blur-md border-b border-gold-500/20 py-2.5 sm:py-3 text-white"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 max-w-container-max mx-auto">
          {/* Brand Logo & Full Name */}
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group">
            <Image
              src="/assets/logo.png"
              alt="Kanha Law Point Academy"
              width={200}
              height={200}
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="flex flex-col">
              <span className={`font-serif text-sm sm:text-base lg:text-lg font-bold tracking-wide transition-colors ${isScrolled ? "text-navy-900" : "text-white"}`}>
                Kanha Law Point Academy
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-gold-500">
                KANPUR
              </span>
            </div>
          </a>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            <a
              href="#about"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors ${
                isScrolled ? "text-slate-700" : "text-slate-200"
              }`}
            >
              About
            </a>
            <a
              href="#courses"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors ${
                isScrolled ? "text-slate-700" : "text-slate-200"
              }`}
            >
              Programs
            </a>
            <a
              href="#exams"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors ${
                isScrolled ? "text-slate-700" : "text-slate-200"
              }`}
            >
              Exams
            </a>
            <a
              href="#facilities"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors ${
                isScrolled ? "text-slate-700" : "text-slate-200"
              }`}
            >
              Facilities
            </a>
            <a
              href="#contact"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors ${
                isScrolled ? "text-slate-700" : "text-slate-200"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchf1qb75wEqkmveVvLfCQI_Wk1F9U3UsyeSmNsDrUJLtw4QQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-4 lg:px-6 py-2 rounded text-xs uppercase font-bold tracking-wider shadow-gold"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold-500 focus:outline-none p-1.5"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-950 text-white px-6 py-6 space-y-4 border-b border-gold-500/30">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2 border-b border-navy-800">
              About Us
            </a>
            <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2 border-b border-navy-800">
              Programs
            </a>
            <a href="#exams" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2 border-b border-navy-800">
              Exams Covered
            </a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2 border-b border-navy-800">
              Facilities
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2 border-b border-navy-800">
              Contact
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchf1qb75wEqkmveVvLfCQI_Wk1F9U3UsyeSmNsDrUJLtw4QQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold text-center py-3 rounded text-sm font-bold uppercase tracking-wider block mt-4"
            >
              Enroll Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
