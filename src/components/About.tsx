import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section className="py-10 md:py-16 bg-slate-50 relative" id="about">
      <div className="max-w-container-max mx-auto px-4 md:px-8 space-y-8 md:space-y-12">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <ScrollReveal delay={0} className="lg:col-span-6 space-y-6">
            <div className="section-label-accent">
              <span>ABOUT THE ACADEMY</span>
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
              <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-card flex items-center space-x-4 card-elevated-hover">
                <div className="w-11 h-11 rounded-lg bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold flex-shrink-0 border border-gold-500/25">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-navy-950">Kanpur, UP</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">GT Road, Harjinder Nagar</p>
                </div>
              </div>

              <div className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-card flex items-center space-x-4 card-elevated-hover">
                <div className="w-11 h-11 rounded-lg bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold flex-shrink-0 border border-gold-500/25">
                  <span className="material-symbols-outlined text-xl">star</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-navy-950">Est. 2020</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5 flex items-center space-x-1">
                    <span className="text-gold-500 tracking-tighter">★★★★★</span>
                    <span>Rated Institution</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Director Photo in Law Library + Floating Promise Quote Block */}
          <ScrollReveal delay={150} className="lg:col-span-6 relative">
            <div className="relative h-[340px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-elevated border-2 border-gold-500/30 bg-navy-950 group">
              <Image
                src="/klpaimages/arbind-kumar-srivastava-legal-chamber-headshot.jpeg"
                alt="Arbind Kumar Srivastava - Director & Founder, Kanha Law Point Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent"></div>

              {/* Founder Tag Badge */}
              <div className="absolute top-4 left-4 bg-navy-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                <span>Director Arbind Kumar Srivastava</span>
              </div>
            </div>

            {/* Prominent Promise Quote Block */}
            <div className="relative -mt-10 sm:-mt-12 ml-4 mr-4 sm:ml-6 sm:mr-auto max-w-md bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white p-5 sm:p-6 rounded-2xl border-l-4 border-l-gold-500 border-t border-r border-b border-gold-500/40 shadow-navy-glow backdrop-blur-md z-10">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 mb-2 flex items-center space-x-2 font-sans">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                <span>OUR PROMISE</span>
              </div>
              <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed font-light pl-0.5">
                &ldquo;To provide world-class legal education combining rigorous academic standards with practical legal & pleading training.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>
        </div>

        {/* Vision & Mission Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 divide-y md:divide-y-0 divide-slate-200/80">
          {/* Vision Card (White Surface) */}
          <ScrollReveal delay={0}>
            <div className="card-top-accent bg-card-gradient p-8 md:p-10 rounded-2xl border border-slate-200/90 shadow-card card-elevated-hover group">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center mb-6 shadow-subtle border border-gold-500/25 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                Our Vision
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                To cultivate confident, liberal-minded, and ethically grounded legal luminaries who excel in judiciary service, legal practice, and corporate counsel, upholding the integrity of the justice system.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission Card (Dark Midnight Navy Surface) */}
          <ScrollReveal delay={120} className="pt-8 md:pt-0">
            <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white p-8 md:p-10 rounded-2xl border border-gold-500/40 shadow-navy-glow card-elevated-hover group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center mb-6 shadow-subtle border border-gold-500/30 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gold-400 mb-3">
                Our Mission
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                To Empower and Illuminate minds through cutting-edge legal pedagogy, rigorous examination strategy, statutory Bare Act analysis, and accessible legal education for all aspiring law scholars.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
