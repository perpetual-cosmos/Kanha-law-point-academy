export default function CoreObjectives() {
  const objectives = [
    {
      icon: "gavel",
      title: "ADVOCACY SKILLS",
      desc: "Equipping future lawyers with sharp legal reasoning, case analysis, and oral pleading mastery.",
    },
    {
      icon: "forum",
      title: "ACTIVE LEARNING",
      desc: "Interactive group discussions, real landmark case-law breakdowns, and judgment writing drills.",
    },
    {
      icon: "verified",
      title: "BENCHMARK EXCELLENCE",
      desc: "Setting institutional benchmarks for professional ethics, integrity, and social responsibility.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100 relative">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-2 tracking-tight">
            Our Core Objectives
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-600 font-normal">
            We focus on 3 core pillars to guarantee competitive legal success
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 text-center group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 text-gold-600 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 shadow-sm border border-gold-500/30 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{obj.icon}</span>
                </div>
                <h3 className="font-serif text-xs font-extrabold uppercase tracking-wider text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {obj.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
