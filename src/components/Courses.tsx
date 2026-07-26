import ScrollReveal from "@/components/ScrollReveal";

export default function Courses() {
  return (
    <section className="py-12 md:py-24 bg-slate-50 relative" id="courses">
      <div className="max-w-container-max mx-auto px-4 md:px-8 space-y-8 md:space-y-12">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <div className="section-label-accent mb-3">
            <span>COURSES & CURRICULUM</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-950 mb-3 tracking-tight">
            Academic Programs
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-700 font-medium">
            Comprehensive pathways for every stage of your legal journey
          </p>
        </ScrollReveal>

        {/* Featured Judiciary Services Dark Card */}
        <ScrollReveal delay={100}>
          <div className="bg-navy-950 text-white rounded-2xl border border-gold-500/40 overflow-hidden shadow-navy-glow relative group card-elevated-hover">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
              {/* Left Dark Column */}
              <div className="lg:col-span-5 p-8 md:p-10 bg-gradient-to-b from-navy-900 via-navy-950 to-slate-950 border-b lg:border-b-0 lg:border-r border-gold-500/30 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/40 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                      <span>Flagship Judicial Program</span>
                    </span>
                    <span className="bg-gold-500 text-navy-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-gold">
                      FLAGSHIP
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    Judiciary Services
                  </h3>

                  <ul className="space-y-4 font-sans text-sm text-slate-200">
                    <li className="flex items-center space-x-3 bg-navy-900/80 p-3.5 rounded-lg border border-gold-500/20 shadow-subtle">
                      <span className="material-symbols-outlined text-gold-400 text-lg flex-shrink-0">check_circle</span>
                      <span className="font-semibold text-slate-100">Civil Judge Junior Division (PCS-J)</span>
                    </li>
                    <li className="flex items-center space-x-3 bg-navy-900/80 p-3.5 rounded-lg border border-gold-500/20 shadow-subtle">
                      <span className="material-symbols-outlined text-gold-400 text-lg flex-shrink-0">check_circle</span>
                      <span className="font-semibold text-slate-100">Higher Judiciary Services (HJS)</span>
                    </li>
                    <li className="flex items-center space-x-3 bg-navy-900/80 p-3.5 rounded-lg border border-gold-500/20 shadow-subtle">
                      <span className="material-symbols-outlined text-gold-400 text-lg flex-shrink-0">check_circle</span>
                      <span className="font-semibold text-slate-100">Prelims, Mains & Viva-Voce Board</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="btn-gold py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider text-center block shadow-gold"
                >
                  Download Syllabus
                </a>
              </div>

              {/* Right Column Details */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white via-slate-50 to-amber-50/20 text-navy-950">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4.5 rounded-xl bg-white border border-gold-500/25 shadow-sm">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-gold-700 block mb-1">
                      Duration
                    </span>
                    <p className="text-xs md:text-sm font-bold text-navy-950">
                      1 Year Foundation / 2 Year Integrated Course
                    </p>
                  </div>

                  <div className="p-4.5 rounded-xl bg-white border border-gold-500/25 shadow-sm">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-gold-700 block mb-1">
                      State Target
                    </span>
                    <p className="text-xs md:text-sm font-bold text-navy-950">
                      UP PCS-J, MP CJ, Bihar, Rajasthan, Delhi & HJS
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/95 border border-slate-200 shadow-sm">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-gold-700 block mb-2">
                    Program Overview
                  </span>
                  <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                    Rigorous coaching tailored for civil judge examinations. Includes Bare Act word-by-word analysis (CPC, CrPC, IPC, Evidence Act, Constitution), daily Mains answer evaluation, and mock interview panels chaired by retired judges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CLAT-UG & CLAT-PG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {/* CLAT-UG Card */}
          <ScrollReveal delay={150}>
            <div className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/90 shadow-card card-elevated-hover flex flex-col justify-between space-y-6 group h-full">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">CLAT (UG)</h3>
                  <span className="bg-gold-500/15 text-gold-700 text-xs font-bold px-3 py-1 rounded-full border border-gold-500/30">
                    Foundation & Target
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-4 font-semibold">Target: 23 National Law Universities (NLUs) & AILET Delhi</p>
                <div className="space-y-2.5 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle">
                  <p><strong className="text-navy-950 font-bold">Eligibility:</strong> 10+2 Pass or Appearing with min. 45% marks (40% SC/ST).</p>
                  <p><strong className="text-navy-950 font-bold">Exam Pattern:</strong> 120 MCQs in 2 Hours | 5 Sections (English, GK, Legal, Logic, Math).</p>
                </div>
              </div>

              <a
                href="#contact"
                className="text-xs font-bold text-navy-950 hover:text-gold-600 hover:underline flex items-center space-x-1.5 pt-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore CLAT Syllabus</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform text-gold-600">arrow_forward</span>
              </a>
            </div>
          </ScrollReveal>

          {/* CLAT-PG Card */}
          <ScrollReveal delay={250}>
            <div className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/90 shadow-card card-elevated-hover flex flex-col justify-between space-y-6 group h-full">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">CLAT (PG) - LLM</h3>
                  <span className="bg-navy-950 text-gold-400 text-xs font-bold px-3 py-1 rounded-full border border-gold-500/30">
                    Post-Graduate
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-4 font-semibold">Target: NLU LLM Admissions & PSU Law Officer Hiring</p>
                <div className="space-y-2.5 text-xs text-slate-700 bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle">
                  <p><strong className="text-navy-950 font-bold">Eligibility:</strong> LLB Degree (3-Yr / 5-Yr) with min. 50% marks.</p>
                  <p><strong className="text-navy-950 font-bold">Exam Subjects:</strong> Constitutional Law, Jurisprudence, Contracts, Torts, Criminal Law.</p>
                </div>
              </div>

              <a
                href="#contact"
                className="text-xs font-bold text-navy-950 hover:text-gold-600 hover:underline flex items-center space-x-1.5 pt-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore LLM Syllabus</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform text-gold-600">arrow_forward</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Traditional LLB Entrance Full Card */}
        <ScrollReveal delay={300}>
          <div className="card-top-accent bg-gradient-to-r from-navy-950 via-navy-900 to-slate-900 text-white p-8 rounded-2xl border border-gold-500/40 shadow-navy-glow flex flex-col md:flex-row justify-between items-center gap-6 group card-elevated-hover">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-1.5">State & Central University Entrances</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">
                Traditional LLB Entrance (3-Yr & 5-Yr)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                DU LLB, BHU, Allahabad University, MH CET Law & State University Entrances
              </p>
            </div>
            <a
              href="#contact"
              className="btn-gold px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-gold"
            >
              Course Details
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
