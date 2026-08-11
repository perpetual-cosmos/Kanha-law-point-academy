"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Star, Menu, X, ArrowRight } from "lucide-react";

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

  const navLinkClass = isScrolled
    ? "text-slate-950 font-bold hover:text-gold-600 transition-colors py-1 text-xs lg:text-sm"
    : "text-slate-200 font-semibold hover:text-white transition-colors py-1 text-xs lg:text-sm";

  const mobileNavLinkClass = isScrolled
    ? "block text-base font-bold text-slate-950 hover:text-gold-600 py-3 border-b border-slate-200 transition-colors"
    : "block text-base font-bold text-white hover:text-gold-400 py-3 border-b border-navy-800 transition-colors";

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Announcement Bar - visible on lg screens and up */}
      <div className="bg-navy-950 text-slate-300 border-b border-gold-500/25 text-xs py-1.5 px-4 hidden lg:block">
        <div className="max-w-container-max mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-5 text-slate-300">
            <a href="tel:+919838477453" className="flex items-center hover:text-gold-300 transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
              +91-9838477453
            </a>
            <span className="text-gold-500/30">•</span>
            <a href="mailto:kanhalawpointacademy@gmail.com" className="flex items-center hover:text-gold-300 transition-colors font-medium">
              <Mail className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
              kanhalawpointacademy@gmail.com
            </a>
            <span className="text-gold-500/30">•</span>
            <span className="flex items-center text-slate-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
              GT Road, Harjinder Nagar, Kanpur Nagar, UP
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="bg-gold-500/15 text-gold-300 px-2.5 py-0.5 rounded text-[11px] font-bold border border-gold-500/30 tracking-wide flex items-center space-x-1.5">
              <span>Rated: </span>
              <span className="flex items-center text-gold-400">
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
              </span>
            </span>
            <span className="text-slate-300 text-xs font-medium">Admissions Open 2026-27</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200 py-2 sm:py-2.5 text-navy-950"
          : "bg-navy-950/90 backdrop-blur-md border-b border-gold-500/20 py-2.5 sm:py-3 text-white"
          }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 max-w-container-max mx-auto">
          {/* Brand Logo & Full Name */}
          <Link href="/" className="flex items-center space-x-3 group rounded-md p-1 focus-visible:ring-2 focus-visible:ring-gold-500">
            <Image
              src="/assets/logo.png"
              alt="Kanha Law Point Academy Logo"
              width={200}
              height={200}
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain drop-shadow group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="flex flex-col">
              <span className={`font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight transition-colors ${isScrolled ? "text-slate-950" : "text-white"}`}>
                Kanha Law Point Academy
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase text-gold-500">
                KANPUR
              </span>
            </div>
          </Link>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <a href="/#about" className={navLinkClass}>
              About
            </a>
            <a href="/#courses" className={navLinkClass}>
              Programs
            </a>
            <a href="/#exams" className={navLinkClass}>
              Exams
            </a>
            <a href="/#facilities" className={navLinkClass}>
              Facilities
            </a>
            <Link href="/gallery" className={navLinkClass}>
              Gallery
            </Link>
            <a href="/#faq" className={navLinkClass}>
              FAQs
            </a>
            <a href="/#contact" className={navLinkClass}>
              Contact
            </a>
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchf1qb75wEqkmveVvLfCQI_Wk1F9U3UsyeSmNsDrUJLtw4QQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 lg:px-6 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider shadow-gold inline-flex items-center space-x-1.5"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className={`md:hidden focus:outline-none p-2 rounded-lg border transition-all ${
              isScrolled
                ? "bg-slate-100 border-slate-300 text-slate-950 hover:bg-slate-200"
                : "bg-navy-900/50 border-gold-500/20 text-gold-400 hover:bg-navy-900"
            }`}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-slate-950" : "text-gold-400"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-950" : "text-gold-400"}`} />
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden px-6 py-6 space-y-2 border-b backdrop-blur-xl animate-in fade-in duration-200 ${
              isScrolled
                ? "bg-white/98 text-slate-950 border-slate-200 shadow-2xl"
                : "bg-navy-950/98 text-white border-gold-500/30"
            }`}
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Home
            </Link>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              About Us
            </a>
            <a href="/#courses" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Programs
            </a>
            <a href="/#exams" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Exams Covered
            </a>
            <a href="/#facilities" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Facilities
            </a>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Gallery
            </Link>
            <a href="/#faq" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              FAQs
            </a>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Contact
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchf1qb75wEqkmveVvLfCQI_Wk1F9U3UsyeSmNsDrUJLtw4QQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold text-center py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 mt-5 shadow-gold"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
