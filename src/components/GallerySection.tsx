"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ImageModal, { GalleryImage } from "@/components/ImageModal";

const previewImages: GalleryImage[] = [
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-official-desk-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava at Official Desk with Law Statutes & Public Welfare Foundation Badge",
    tag: "Official Desk",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-studying-case-files.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Reviewing Legal Case Documents & Precedents",
    tag: "Legal Practice",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-advocate-chamber-headshot.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Advocate Chamber Portrait with Law Library",
    tag: "Chamber Headshot",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-law-library-bookshelf.jpeg",
    alt: "Adv. Arbind Kumar Srivastava in Legal Research Library",
    tag: "Law Library",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-advocate-chamber-desk.jpeg",
    alt: "Adv. Arbind Kumar Srivastava in Advocate Chamber with Legal Colleagues",
    tag: "Chamber Practice",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-advocate-coat-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava High Court Advocate Portrait",
    tag: "Advocate Portrait",
  },
];

export default function GallerySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? previewImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === previewImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white relative overflow-hidden" id="gallery">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-4 md:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-gold-400 text-base">photo_library</span>
            <span>ACADEMY GALLERY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Glimpses of <span className="gold-gradient-text">Kanha Law Point</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Moments from our legal chamber, academic mentorship sessions, and legal advocacy leadership under <strong className="text-white font-medium">Adv. Arbind Kumar Srivastava</strong>.
          </p>
        </ScrollReveal>

        {/* 2-Row Responsive Image Grid */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {previewImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                id={`gallery-preview-item-${idx}`}
                className="group relative h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-gold-500/25 bg-navy-950 shadow-xl cursor-pointer transition-all duration-300 hover:border-gold-500 hover:shadow-navy-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Tag Badge Top Right */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-navy-950/80 backdrop-blur-md text-gold-400 border border-gold-500/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                    {img.tag}
                  </span>
                </div>

                {/* Hover Expand Icon & Caption Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-serif font-semibold text-slate-100 line-clamp-1 group-hover:text-gold-300 transition-colors">
                    {img.alt}
                  </p>
                  <div className="flex items-center space-x-1.5 text-[11px] text-gold-400 font-sans font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    <span>Click to view full image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Explore Full Gallery Button */}
        <ScrollReveal delay={200} className="text-center pt-4">
          <Link
            href="/gallery"
            id="explore-gallery-btn"
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-gold hover:shadow-navy-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <span>Explore Full Gallery</span>
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalOpen}
        currentIndex={selectedIndex}
        images={previewImages}
        onClose={() => setModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
