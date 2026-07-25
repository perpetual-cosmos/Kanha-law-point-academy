import Image from "next/image";

export default function Director() {
  return (
    <section className="py-24 bg-slate-50 relative" id="director">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white rounded-3xl overflow-hidden border border-gold-500/40 shadow-navy-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left Column: Portrait Photo with White & Gold Frame */}
            <div className="lg:col-span-5 p-8 md:p-12 flex justify-center">
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl ring-2 ring-gold-500/60">
                <Image
                  src="/assets/director-portrait.jpg"
                  alt="Adv. Arbind Kumar Srivastava"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right Column: Director's Message */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 space-y-6">
              <div className="flex items-center space-x-2.5">
                <span className="material-symbols-outlined text-gold-400 text-3xl">format_quote</span>
                <span className="text-xs uppercase font-extrabold tracking-widest text-gold-400">
                  DIRECTOR&apos;S MESSAGE
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-4xl font-bold text-white leading-snug tracking-tight">
                &ldquo;A Message from our Director&rdquo;
              </h3>

              <p className="font-sans text-sm sm:text-base md:text-lg text-slate-200 italic leading-relaxed font-light">
                &ldquo;The legal profession requires more than just knowledge of statutes; it demands intellect, integrity, and the courage to advocate for truth. At Kanha Law Point Academy, we mentor future leaders who will uphold the sanctity of our judicial system.&rdquo;
              </p>

              <div className="pt-6 border-t border-gold-500/25">
                <h4 className="font-serif text-lg font-bold text-gold-400 uppercase tracking-wider">
                  ADV. ARBIND KUMAR SRIVASTAVA
                </h4>
                <p className="text-xs text-slate-300 font-semibold mt-1">
                  Managing Director, Kanha Law Point Academy • Advocate, High Court
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
