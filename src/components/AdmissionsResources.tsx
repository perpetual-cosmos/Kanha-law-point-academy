export default function AdmissionsResources() {
  const downloads = [
    { title: "Kanha Law Point Academy Prospectus (2026-27)", size: "4.2 MB • PDF", tag: "Official Prospectus" },
    { title: "UP PCS-J Prelims 10-Yr Solved Papers", size: "8.5 MB • PDF", tag: "Judiciary Resource" },
    { title: "CLAT UG Sample Mock Test Paper", size: "2.1 MB • PDF", tag: "CLAT Material" },
    { title: "Landmark Supreme Court Judgments Compendium", size: "6.0 MB • PDF", tag: "Case Laws" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative" id="admissions">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 border border-gold-500/30 text-xs font-bold uppercase tracking-widest mb-3">
            <span>Admissions & Resource Center</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">
            Scholarship & <span className="gold-gradient-text">Downloads Hub</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed">
            Apply for up to 100% fee waivers through our Scholarship Admission Test and access free legal study materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Scholarship Test Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white rounded-2xl p-8 md:p-10 border border-gold-500/40 shadow-navy-glow flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-navy-950 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-gold">
                <span className="material-symbols-outlined text-sm">stars</span>
                <span>Up to 100% Scholarship Waiver</span>
              </div>
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-snug">
                Kanha Law Point Academy Scholarship Admission Test
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-300 mb-6 leading-relaxed font-light">
                Empowering meritorious law students and economically weaker aspirants. Qualify for fee concessions on all Judiciary (PCS-J) and CLAT long-term batches.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-navy-900/90 border border-gold-500/30 backdrop-blur-md shadow-sm">
                  <span className="text-xs text-gold-400 font-extrabold uppercase tracking-wider block mb-1">Test Mode</span>
                  <span className="text-sm font-semibold text-white">Online & Classroom Test</span>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/90 border border-gold-500/30 backdrop-blur-md shadow-sm">
                  <span className="text-xs text-gold-400 font-extrabold uppercase tracking-wider block mb-1">Registration Fee</span>
                  <span className="text-sm font-semibold text-white">100% Free Registration</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-navy-800/80 relative z-10">
              <a
                href="#contact"
                className="w-full sm:w-auto btn-gold px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-center shadow-gold hover:scale-105 transition-transform"
              >
                Register for Scholarship Test Now
              </a>
              <a
                href="tel:+919838477453"
                className="w-full sm:w-auto text-xs text-gold-300 hover:text-white font-semibold text-center py-3 flex items-center justify-center space-x-1.5"
              >
                <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                <span>Helpline: +91-9838477453</span>
              </a>
            </div>
          </div>

          {/* Right: Downloads & Prospectus Hub */}
          <div className="lg:col-span-5 card-top-accent bg-card-gradient rounded-2xl p-8 border border-slate-200/80 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500"></span>
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Download Resource Hub
                </h3>
              </div>
              <p className="font-sans text-xs text-slate-600 mb-6 font-normal">
                Access official prospectus, sample papers, and legal compendiums.
              </p>

              <div className="space-y-3">
                {downloads.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/90 border border-slate-200/70 hover:border-gold-500/60 hover:shadow-md flex items-center justify-between transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-950 to-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 font-bold border border-gold-500/30 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                        <span className="material-symbols-outlined text-xl">description</span>
                      </div>
                      <div>
                        <h4 className="font-serif text-xs md:text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-medium">{item.size}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                      <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">
                        download
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 text-center">
              <a
                href="#contact"
                className="text-xs font-bold text-navy-900 hover:text-gold-600 inline-flex items-center space-x-1.5"
              >
                <span>Request Hard Copy Prospectus via Post</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
