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
      <div className="bg-navy-950 text-slate-300 border-b border-gold-500/25 text-xs py-1.5 px-4 hidden lg:block">
        <div className="max-w-container-max mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-5 text-slate-300">
            <a href="tel:+919838477453" className="flex items-center hover:text-gold-300 transition-colors font-medium">
              <span className="material-symbols-outlined text-sm text-gold-500 mr-1.5">call</span>
              +91-9838477453
            </a>
            <span className="text-gold-500/30">|</span>
            <a href="mailto:kanhalawpointacademy@gmail.com" className="flex items-center hover:text-gold-300 transition-colors font-medium">
              <span className="material-symbols-outlined text-sm text-gold-500 mr-1.5">mail</span>
              kanhalawpointacademy@gmail.com
            </a>
            <span className="text-gold-500/30">|</span>
            <span className="flex items-center text-slate-400 font-medium">
              <span className="material-symbols-outlined text-sm text-gold-500 mr-1.5">location_on</span>
              GT Road, Harjinder Nagar, Kanpur Nagar, UP
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="bg-gold-500/15 text-gold-300 px-2.5 py-0.5 rounded text-[11px] font-bold border border-gold-500/30 tracking-wide flex items-center space-x-1">
              <span>Rated: </span>
              <span className="text-gold-400 text-xs tracking-tighter">★★★★★</span>
            </span>
            <span className="text-slate-300 text-xs font-medium">Admissions Open 2026-27</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-slate-200/90 py-2 sm:py-2.5 text-navy-900"
          : "bg-navy-950/90 backdrop-blur-md border-b border-gold-500/20 py-2.5 sm:py-3 text-white"
          }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 max-w-container-max mx-auto">
          {/* Brand Logo & Full Name */}
          <a href="#" className="flex items-center space-x-3 group rounded-md p-1 focus-visible:ring-2 focus-visible:ring-gold-500">
            <Image
              src="/assets/logo.png"
              alt="Kanha Law Point Academy Logo"
              width={200}
              height={200}
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain drop-shadow group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="flex flex-col">
              <span className={`font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight transition-colors ${isScrolled ? "text-navy-950" : "text-white"}`}>
                Kanha Law Point Academy
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase text-gold-500">
                KANPUR
              </span>
            </div>
          </a>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors py-1 ${isScrolled ? "text-slate-700 hover:text-navy-950" : "text-slate-200 hover:text-white"
                }`}
            >
              About
            </a>
            <a
              href="#courses"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors py-1 ${isScrolled ? "text-slate-700 hover:text-navy-950" : "text-slate-200 hover:text-white"
                }`}
            >
              Programs
            </a>
            <a
              href="#exams"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors py-1 ${isScrolled ? "text-slate-700 hover:text-navy-950" : "text-slate-200 hover:text-white"
                }`}
            >
              Exams
            </a>
            <a
              href="#facilities"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors py-1 ${isScrolled ? "text-slate-700 hover:text-navy-950" : "text-slate-200 hover:text-white"
                }`}
            >
              Facilities
            </a>
            <a
              href="#faq"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors py-1 ${isScrolled ? "text-slate-700 hover:text-navy-950" : "text-slate-200 hover:text-white"
                }`}
            >
              FAQs
            </a>
            <a
              href="#contact"
              className={`text-xs lg:text-sm font-semibold hover:text-gold-500 transition-colors py-1 ${isScrolled ? "text-slate-700 hover:text-navy-950" : "text-slate-200 hover:text-white"
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
              className="btn-gold px-5 lg:px-6 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider shadow-gold block"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden text-gold-500 focus:outline-none p-2 rounded-lg border border-gold-500/20 bg-navy-900/50"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl block">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-950/98 backdrop-blur-xl text-white px-6 py-6 space-y-4 border-b border-gold-500/30 animate-in fade-in duration-200">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2.5 border-b border-navy-800 hover:text-gold-400">
              About Us
            </a>
            <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2.5 border-b border-navy-800 hover:text-gold-400">
              Programs
            </a>
            <a href="#exams" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2.5 border-b border-navy-800 hover:text-gold-400">
              Exams Covered
            </a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2.5 border-b border-navy-800 hover:text-gold-400">
              Facilities
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2.5 border-b border-navy-800 hover:text-gold-400">
              FAQs
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-200 py-2.5 border-b border-navy-800 hover:text-gold-400">
              Contact
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchf1qb75wEqkmveVvLfCQI_Wk1F9U3UsyeSmNsDrUJLtw4QQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold text-center py-3 rounded-lg text-sm font-bold uppercase tracking-wider block mt-4"
            >
              Enroll Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
