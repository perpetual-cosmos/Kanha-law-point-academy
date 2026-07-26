import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="py-12 md:py-24 bg-slate-100/80 border-y border-slate-200/60 relative">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <div className="section-label-accent mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-950 mb-3 tracking-tight">
            Our Core Objectives
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-700 font-medium">
            We focus on 3 core pillars to guarantee competitive legal success
          </p>
        </ScrollReveal>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {objectives.map((obj, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="card-top-accent bg-[#FAFAFA] p-8 rounded-2xl border border-[#EEEEEE] shadow-card card-elevated-hover text-center group flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 rounded-full bg-gold-500/10 text-gold-600 mx-auto flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-navy-950 shadow-subtle border border-gold-500/30 transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">{obj.icon}</span>
                  </div>
                  <h3 className="font-serif text-xs font-extrabold uppercase tracking-wider text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {obj.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                    {obj.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
