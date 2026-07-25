import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-36 pb-20 bg-navy-950 text-white">
      {/* Background Law Library Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Kanha Law Point Academy Library"
          fill
          priority
          className="object-cover object-center opacity-65 scale-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/65 to-navy-950/95"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-8 text-center pt-4">
        {/* Pill Badge */}
        <div className="inline-flex items-center space-x-2.5 py-1.5 px-4 rounded-full border border-gold-500/35 bg-navy-900/75 text-gold-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-gold">
          <span className="text-slate-200">Est. 2020</span>
          <span className="text-gold-500/40">•</span>
          <span className="text-slate-200">Kanpur, UP</span>
          <span className="text-gold-500/40">•</span>
          <span className="flex items-center text-gold-400 font-bold space-x-1">
            <span className="text-gold-400 text-xs sm:text-sm tracking-tighter">★★★★★</span>
            <span>Rated</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto tracking-tight leading-[1.12]">
          Excel in Law. <br />
          <span className="gold-gradient-text">Lead the Judiciary.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Kanpur&apos;s premier law academy dedicated to academic excellence and professional legal mentoring. We forge confident lawyers and visionary judges.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSchf1qb75wEqkmveVvLfCQI_Wk1F9U3UsyeSmNsDrUJLtw4QQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-gold px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-center shadow-gold"
          >
            Enroll Now
          </a>
          <a
            href="#courses"
            className="w-full sm:w-auto btn-navy px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-center"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
