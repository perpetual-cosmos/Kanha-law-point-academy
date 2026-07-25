export default function Courses() {
  return (
    <section className="py-24 bg-slate-50 relative" id="courses">
      <div className="max-w-container-max mx-auto px-4 md:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 mb-2 tracking-tight">
            Academic Programs
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-600">
            Comprehensive pathways for every stage of your legal journey
          </p>
        </div>

        {/* Featured Judiciary Services Dark Card */}
        <div className="bg-navy-950 text-white rounded-2xl border border-gold-500/40 overflow-hidden shadow-navy-glow relative group transition-all duration-300">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
            {/* Left Dark Column */}
            <div className="lg:col-span-5 p-8 md:p-10 bg-gradient-to-b from-navy-900 via-navy-950 to-slate-950 border-b lg:border-b-0 lg:border-r border-gold-500/30 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-500/40 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                  <span>Flagship Judicial Program</span>
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Judiciary Services
                </h3>

                <ul className="space-y-3 font-sans text-sm text-slate-200">
                  <li className="flex items-center space-x-3 bg-navy-900/60 p-2.5 rounded-lg border border-gold-500/10">
                    <span className="material-symbols-outlined text-gold-400 text-lg">check_circle</span>
                    <span className="font-medium">Civil Judge Junior Division (PCS-J)</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-navy-900/60 p-2.5 rounded-lg border border-gold-500/10">
                    <span className="material-symbols-outlined text-gold-400 text-lg">check_circle</span>
                    <span className="font-medium">Higher Judiciary Services (HJS)</span>
                  </li>
                  <li className="flex items-center space-x-3 bg-navy-900/60 p-2.5 rounded-lg border border-gold-500/10">
                    <span className="material-symbols-outlined text-gold-400 text-lg">check_circle</span>
                    <span className="font-medium">Prelims, Mains & Viva-Voce Board</span>
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                className="btn-gold py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider text-center block shadow-gold hover:scale-[1.02] transition-transform"
              >
                Download Syllabus
              </a>
            </div>

            {/* Right Column Details */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white via-slate-50 to-amber-50/20 text-navy-950">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/80 border border-gold-500/20 shadow-sm">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-gold-600 block mb-1">
                    Duration
                  </span>
                  <p className="text-xs md:text-sm font-semibold text-navy-900">
                    1 Year Foundation / 2 Year Integrated Course
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-gold-500/20 shadow-sm">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-gold-600 block mb-1">
                    State Target
                  </span>
                  <p className="text-xs md:text-sm font-semibold text-navy-900">
                    UP PCS-J, MP CJ, Bihar, Rajasthan, Delhi & HJS
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm">
                <span className="text-xs uppercase font-extrabold tracking-wider text-gold-600 block mb-2">
                  Program Overview
                </span>
                <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  Rigorous coaching tailored for civil judge examinations. Includes Bare Act word-by-word analysis (CPC, CrPC, IPC, Evidence Act, Constitution), daily Mains answer evaluation, and mock interview panels chaired by retired judges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLAT-UG & CLAT-PG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CLAT-UG Card */}
          <div className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">CLAT (UG)</h3>
                <span className="bg-gold-500/15 text-gold-700 text-xs font-bold px-3 py-1 rounded-full border border-gold-500/30">
                  Foundation & Target
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4 font-medium">Target: 23 National Law Universities (NLUs) & AILET Delhi</p>
              <div className="space-y-2.5 text-xs text-slate-600 bg-white/70 p-4 rounded-xl border border-slate-200/60">
                <p><strong className="text-navy-900">Eligibility:</strong> 10+2 Pass or Appearing with min. 45% marks (40% SC/ST).</p>
                <p><strong className="text-navy-900">Exam Pattern:</strong> 120 MCQs in 2 Hours | 5 Sections (English, GK, Legal, Logic, Math).</p>
              </div>
            </div>

            <a
              href="#contact"
              className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center space-x-1.5 pt-2"
            >
              <span>Explore CLAT Syllabus</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>

          {/* CLAT-PG Card */}
          <div className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-2xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">CLAT (PG) - LLM</h3>
                <span className="bg-navy-900 text-gold-400 text-xs font-bold px-3 py-1 rounded-full border border-gold-500/30">
                  Post-Graduate
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4 font-medium">Target: NLU LLM Admissions & PSU Law Officer Hiring</p>
              <div className="space-y-2.5 text-xs text-slate-600 bg-white/70 p-4 rounded-xl border border-slate-200/60">
                <p><strong className="text-navy-900">Eligibility:</strong> LLB Degree (3-Yr / 5-Yr) with min. 50% marks.</p>
                <p><strong className="text-navy-900">Exam Subjects:</strong> Constitutional Law, Jurisprudence, Contracts, Torts, Criminal Law.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center space-x-1.5 pt-2"
            >
              <span>Explore LLM Syllabus</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Traditional LLB Entrance Full Card */}
        <div className="card-top-accent bg-gradient-to-r from-navy-950 via-navy-900 to-slate-900 text-white p-8 rounded-2xl border border-gold-500/30 shadow-navy-glow flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-gold-400 transition-all duration-300">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-1">State & Central University Entrances</span>
            <h3 className="font-serif text-xl font-bold text-white mb-1">
              Traditional LLB Entrance (3-Yr & 5-Yr)
            </h3>
            <p className="text-xs text-slate-300">
              DU LLB, BHU, Allahabad University, MH CET Law & State University Entrances
            </p>
          </div>
          <a
            href="#contact"
            className="btn-gold px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-gold hover:scale-105 transition-transform"
          >
            Course Details
          </a>
        </div>
      </div>
    </section>
  );
}
