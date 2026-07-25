import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-slate-50 relative" id="about">
      <div className="max-w-container-max mx-auto px-4 md:px-8 space-y-20">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3.5 py-1.5 rounded-md bg-gold-500/10 text-gold-700 border border-gold-500/25 text-xs font-bold uppercase tracking-widest">
              ABOUT THE ACADEMY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-950 tracking-tight leading-[1.18]">
              Nurturing Legal Excellence <br />
              <span className="gold-gradient-text">in Kanpur</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              At Kanha Law Point Academy, we are driven by a singular mission: to cultivate a generation of legal minds equipped with profound knowledge, analytical sharpness, and unwavering ethics.
            </p>
            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Our rigorous curriculum and expert mentorship are designed not just to help you pass exams, but to prepare you for the complexities of real-world legal practice and judicial responsibilities.
            </p>

            {/* 2 Stat Info Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-card flex items-center space-x-4 hover:border-gold-500/40 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold flex-shrink-0 border border-gold-500/25">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-navy-950">Kanpur, UP</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">GT Road, Harjinder Nagar</p>
                </div>
              </div>

              <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-card flex items-center space-x-4 hover:border-gold-500/40 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold flex-shrink-0 border border-gold-500/25">
                  <span className="material-symbols-outlined text-xl">star</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-navy-950">Est. 2020</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">5-Star Rated Institution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Library Photo + Floating Dark Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-elevated border border-slate-200">
              <Image
                src="/assets/hero-bg.jpg"
                alt="Kanha Law Point Academy Library & Study Hall"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy-950/25"></div>
            </div>

            {/* Floating Dark Overlay Card */}
            <div className="absolute -bottom-6 -left-2 sm:left-4 right-4 sm:right-auto max-w-md bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white p-6 rounded-2xl border border-gold-500/40 shadow-navy-glow backdrop-blur-md">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                <span>OUR PROMISE</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed font-light">
                &ldquo;To provide world-class legal education combining rigorous academic standards with practical advocacy training.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Vision Card (White Surface) */}
          <div className="card-top-accent bg-card-gradient p-8 md:p-10 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 text-gold-600 flex items-center justify-center mb-6 shadow-subtle border border-gold-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
              Our Vision
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              To cultivate confident, liberal-minded, and ethically grounded legal luminaries who excel in judiciary service, legal practice, and corporate counsel, upholding the integrity of the justice system.
            </p>
          </div>

          {/* Mission Card (Dark Midnight Navy Surface) */}
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white p-8 md:p-10 rounded-2xl border border-gold-500/40 shadow-navy-glow hover:border-gold-400 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-14 h-14 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center mb-6 shadow-gold group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">flag</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">
              Our Mission
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              To Empower and Illuminate minds through cutting-edge legal pedagogy, rigorous examination strategy, statutory Bare Act analysis, and accessible legal education for all aspiring law scholars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
