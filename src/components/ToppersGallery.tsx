export default function ToppersGallery() {
  const toppers = [
    {
      name: "Priya Sharma",
      rank: "Rank 14",
      exam: "UP PCS-J (Judicial Services)",
      batch: "Batch 2024",
      quote: "Kanha Law Point Academy's Bare Act indexing and daily Mains answer evaluation were instrumental in clearing UP PCS-J on my first attempt.",
      role: "Civil Judge (Jr. Div)",
    },
    {
      name: "Rahul Verma",
      rank: "AIR 42",
      exam: "CLAT UG (NLU Bangalore Admission)",
      batch: "Batch 2024",
      quote: "The mock test analytics and reading comprehension strategies at Kanha Law Point Academy gave me the competitive edge needed for NLSIU.",
      role: "NLSIU Bengaluru Scholar",
    },
    {
      name: "Ankit Mishra",
      rank: "Rank 8",
      exam: "MP Civil Judge Exam",
      batch: "Batch 2023",
      quote: "Director A.K. Srivastava Sir's personal guidance during the viva-voce mock interview completely transformed my confidence.",
      role: "Civil Judge, Madhya Pradesh",
    },
    {
      name: "Sneha Gupta",
      rank: "Selected",
      exam: "SEBI Legal Officer (Grade A)",
      batch: "Batch 2024",
      quote: "The specialized legal officer modules at Kanha Law Point Academy provided absolute clarity on corporate and securities law.",
      role: "SEBI Grade A Legal Officer",
    },
  ];

  const whyUs = [
    { icon: "school", title: "Expert Legal Faculty", desc: "Veteran lawyers and former judicial mentors with decades of exam expertise." },
    { icon: "menu_book", title: "Comprehensive Curriculum", desc: "Syllabus mapping for 15+ law exams with updated case law index booklets." },
    { icon: "star", title: "5-Star Track Record", desc: "Consistent top selections in PCS-J, NLU admissions, and legal commissions." },
    { icon: "analytics", title: "Smart Test Analytics", desc: "Detailed speed vs accuracy performance reports and 48-hr answer evaluation." },
    { icon: "groups", title: "Interactive Learning", desc: "Moot court practice sessions, group debates, and judgement writing drills." },
    { icon: "psychology", title: "Holistic Mentorship", desc: "Personal doubt clearing, time management, and judicial ethics instilment." },
  ];

  return (
    <section className="py-24 bg-slate-50 relative" id="toppers">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 border border-gold-500/30 text-xs font-bold uppercase tracking-widest mb-3">
            <span>Hall of Fame & Results</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">
            Our Proud <span className="gold-gradient-text">Toppers & Rankers</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed">
            Celebrating the outstanding achievements of our students who cleared judicial services and secured admissions into premier National Law Universities.
          </p>
        </div>

        {/* Toppers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {toppers.map((top, idx) => (
            <div
              key={idx}
              className="card-top-accent bg-card-gradient rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-950 to-navy-900 text-gold-400 font-bold flex items-center justify-center font-serif text-lg shadow-md border border-gold-500/30 group-hover:scale-110 transition-transform duration-300">
                    {top.name.charAt(0)}
                  </div>
                  <span className="bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-gold">
                    {top.rank}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {top.name}
                </h3>
                <div className="text-xs font-extrabold text-gold-600 uppercase tracking-wider mb-3">
                  {top.exam}
                </div>

                <p className="font-sans text-xs text-slate-600 italic leading-relaxed mb-4 bg-white/60 p-3 rounded-xl border border-slate-200/50">
                  &ldquo;{top.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-navy-900">{top.role}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">{top.batch}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Kanha Law Point Academy - 6 Pillars Grid */}
        <div className="bg-gradient-to-b from-navy-950 via-navy-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 border border-gold-500/40 shadow-navy-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-3">
              Why Aspiring Lawyers & Judges <span className="gold-gradient-text">Choose Kanha Law Point Academy</span>
            </h3>
            <p className="text-sm text-slate-300">
              Our 6-pillar educational methodology guarantees thorough statutory clarity and exam mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {whyUs.map((pillar, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-gold-500/25 hover:border-gold-400 hover:bg-navy-900 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-4 border border-gold-500/30 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">{pillar.title}</h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
