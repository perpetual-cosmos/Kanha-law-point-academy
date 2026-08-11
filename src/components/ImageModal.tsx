"use client";

import { useEffect } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  tag?: string;
}

interface ImageModalProps {
  isOpen: boolean;
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageModal({
  isOpen,
  currentIndex,
  images,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Image Preview Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-navy-950/95 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Container - prevent clicks inside from closing modal */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between py-2 px-4 mb-2 text-white">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-bold tracking-wide">
              {currentImage.tag || "Adv. Arbind Kumar Srivastava"}
            </span>
            <span className="text-xs text-slate-300 font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close image modal"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 text-white hover:text-navy-950 flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg group focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-200">
              close
            </span>
          </button>
        </div>

        {/* Image Main Display */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] max-h-[750px] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-navy-900/50 flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 768px) 95vw, 85vw"
            className="object-contain"
            priority
          />

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={onPrev}
              aria-label="Previous Image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-950/70 hover:bg-gold-500 text-white hover:text-navy-950 flex items-center justify-center backdrop-blur-md transition-all duration-200 border border-gold-500/30 shadow-xl focus:outline-none focus:ring-2 focus:ring-gold-500 group"
            >
              <span className="material-symbols-outlined text-2xl group-hover:-translate-x-0.5 transition-transform">
                arrow_back_ios_new
              </span>
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={onNext}
              aria-label="Next Image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-950/70 hover:bg-gold-500 text-white hover:text-navy-950 flex items-center justify-center backdrop-blur-md transition-all duration-200 border border-gold-500/30 shadow-xl focus:outline-none focus:ring-2 focus:ring-gold-500 group"
            >
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-0.5 transition-transform">
                arrow_forward_ios
              </span>
            </button>
          )}
        </div>

        {/* Image Caption Footer */}
        <div className="w-full text-center mt-3 px-4">
          <p className="text-sm sm:text-base font-serif text-slate-100 font-medium tracking-wide">
            {currentImage.alt}
          </p>
        </div>
      </div>
    </div>
  );
}
