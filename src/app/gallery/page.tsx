"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageModal, { GalleryImage } from "@/components/ImageModal";

interface CategorizedImage extends GalleryImage {
  category: "all" | "chamber" | "library" | "portraits" | "visits";
}

const galleryData: CategorizedImage[] = [
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-official-desk-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava at Official Desk with Law Statutes & Public Welfare Foundation Badge",
    category: "chamber",
    tag: "Official Desk",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-advocate-chamber-headshot.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Headshot in Advocate Chamber",
    category: "portraits",
    tag: "Chamber Headshot",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-studying-case-files.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Reviewing Legal Case Documents & Case Files",
    category: "library",
    tag: "Case File Analysis",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-law-library-bookshelf.jpeg",
    alt: "Adv. Arbind Kumar Srivastava in Legal Research Library with Extensive Law Volumes",
    category: "library",
    tag: "Law Library",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-advocate-chamber-desk.jpeg",
    alt: "Adv. Arbind Kumar Srivastava in Advocate Chamber with Legal Colleagues",
    category: "chamber",
    tag: "Chamber Practice",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-advocate-chamber-sitting.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Seated at Legal Conference Desk",
    category: "chamber",
    tag: "Conference Desk",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-advocate-coat-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Formal Advocate Gown & Coat Portrait",
    category: "portraits",
    tag: "Advocate Portrait",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-tilak-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Traditional Tilak Formal Portrait",
    category: "portraits",
    tag: "Formal Portrait",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-white-kurta-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava White Indian Attire Headshot",
    category: "portraits",
    tag: "Indian Attire",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-olive-shirt-headshot.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Executive Headshot in Office",
    category: "portraits",
    tag: "Executive Headshot",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-maroon-shirt-phone.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Executive Consultation",
    category: "portraits",
    tag: "Consultation",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-maroon-shirt-office.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Office View",
    category: "chamber",
    tag: "Office View",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-printed-kurta-office.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Office Desk with Framed Leaders",
    category: "chamber",
    tag: "Office Desk",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-blue-shirt-office.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Academy Office View",
    category: "chamber",
    tag: "Academy Office",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-birthday-celebration.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Birthday Celebration",
    category: "visits",
    tag: "Celebration",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-dining-table-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Dining & Interaction",
    category: "visits",
    tag: "Interaction",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-outdoor-night-portrait.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Outdoor Evening Event",
    category: "visits",
    tag: "Evening Event",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-black-suit-standing-1.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Full Suit Standing Portrait (Pose 1)",
    category: "portraits",
    tag: "3-Piece Suit",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-black-suit-standing-2.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Full Suit Standing Portrait (Pose 2)",
    category: "portraits",
    tag: "3-Piece Suit",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-black-suit-standing-3.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Full Suit Standing Pose",
    category: "portraits",
    tag: "3-Piece Suit",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-black-suit-standing-4.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Executive Suit Portrait",
    category: "portraits",
    tag: "Executive Suit",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-black-suit-mirror-selfie.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Mirror Portrait",
    category: "portraits",
    tag: "Mirror Portrait",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-standing-arch-night.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Standing at Jai Shree Shyam Arch Gate (Night)",
    category: "visits",
    tag: "Landmark Visit",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-standing-arch-gate.jpeg",
    alt: "Adv. Arbind Kumar Srivastava at Jai Shree Shyam Heritage Gate",
    category: "visits",
    tag: "Heritage Gate",
  },
  {
    src: "/klpaimages/adv-arbind-kumar-srivastava-temple-visit.jpeg",
    alt: "Adv. Arbind Kumar Srivastava Pilgrimage & Temple Visit",
    category: "visits",
    tag: "Temple Visit",
  },
  {
    src: "/klpaimages/india-gate-delhi-night-view.jpeg",
    alt: "India Gate National Monument Illuminated in Tricolor at Night (New Delhi)",
    category: "visits",
    tag: "Landmark Delhi",
  },
];

const categoryTabs = [
  { id: "all", label: "All Photos" },
  { id: "chamber", label: "Chamber & Desk" },
  { id: "library", label: "Library & Studies" },
  { id: "portraits", label: "Portraits & Attire" },
  { id: "visits", label: "Events & Visits" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const filteredImages = galleryData.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-950">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 sm:pb-24">
        {/* Page Hero Header */}
        <section className="relative py-10 md:py-16 bg-gradient-to-b from-navy-950 via-slate-900 to-slate-950 border-b border-gold-500/20">
          <div className="max-w-container-max mx-auto px-4 md:px-8 space-y-4 text-center">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center justify-center space-x-2 text-xs text-slate-400 font-medium">
              <Link href="/" className="hover:text-gold-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gold-400 font-semibold">Photo Gallery</span>
            </nav>

            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-gold-400 text-base">collections</span>
              <span>KANHA LAW POINT ACADEMY</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Academy & Director <span className="gold-gradient-text">Photo Gallery</span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the legal journey, chamber practice, law library, events, and official portraits of <strong className="text-white">Adv. Arbind Kumar Srivastava</strong>, Director of Kanha Law Point Academy.
            </p>
          </div>
        </section>

        {/* Gallery Content Section */}
        <section className="max-w-container-max mx-auto px-4 md:px-8 mt-8 sm:mt-12 space-y-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  id={`gallery-tab-${tab.id}`}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 border-gold-400 shadow-gold font-bold scale-105"
                      : "bg-navy-900/60 text-slate-300 border-slate-700/60 hover:border-gold-500/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                  {tab.id === "all" ? ` (${galleryData.length})` : ""}
                </button>
              );
            })}
          </div>

          {/* Image Count Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 px-1">
            <span>
              Showing <strong className="text-gold-400 font-semibold">{filteredImages.length}</strong> photos
            </span>
            <span className="flex items-center space-x-1 text-slate-400">
              <span className="material-symbols-outlined text-sm text-gold-500">touch_app</span>
              <span>Click any image to expand</span>
            </span>
          </div>

          {/* Masonry / Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={img.src}
                onClick={() => openLightbox(idx)}
                id={`gallery-page-item-${idx}`}
                className="group relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-gold-500/20 bg-navy-900 shadow-xl cursor-pointer transition-all duration-300 hover:border-gold-500 hover:shadow-navy-glow hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Tag Badge Top Right */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-navy-950/80 backdrop-blur-md text-gold-400 border border-gold-500/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                    {img.tag}
                  </span>
                </div>

                {/* Caption & Zoom hint at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-serif font-medium text-slate-100 line-clamp-2 group-hover:text-gold-300 transition-colors">
                    {img.alt}
                  </p>
                  <div className="flex items-center space-x-1 text-[11px] text-gold-400 font-sans font-medium mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-sm">fullscreen</span>
                    <span>View full size</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-slate-950 border border-gold-500/40 text-center space-y-4 shadow-navy-glow">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Start Your Judicial & Legal Career Journey Today
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
              Join Kanha Law Point Academy Kanpur under the personal guidance of Adv. Arbind Kumar Srivastava. Admissions open for 2026-2027.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSchf1qb75wEqkmveVvLfCQI_Wk1F9U3UsyeSmNsDrUJLtw4QQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-3 rounded-xl text-xs uppercase font-bold tracking-wider shadow-gold"
              >
                Enroll Now
              </a>
              <Link
                href="/#contact"
                className="px-8 py-3 rounded-xl text-xs uppercase font-bold tracking-wider text-slate-200 border border-slate-700 hover:border-gold-500 hover:text-white transition-colors"
              >
                Contact Academy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalOpen}
        currentIndex={selectedIndex}
        images={filteredImages}
        onClose={() => setModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
