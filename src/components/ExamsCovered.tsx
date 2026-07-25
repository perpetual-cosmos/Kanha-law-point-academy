import ScrollReveal from "@/components/ScrollReveal";

export default function ExamsCovered() {
  const exams = [
    { title: "CLAT - UG", badge: "23 NLUs", desc: "Common Law Admission Test for NLU Undergraduate Law Degrees", flagship: true },
    { title: "CLAT - PG", badge: "LLM & PSUs", desc: "Common Law Admission Test for NLU Masters & PSU Legal Recruitment", flagship: true },
    { title: "AILET", badge: "NLU Delhi", desc: "All India Law Entrance Test for National Law University, Delhi", flagship: true },
    { title: "UP PCS-J", badge: "UP Judiciary", desc: "Uttar Pradesh Civil Judge (Junior Division) Examination", flagship: true },
    { title: "MP CJ", badge: "MP Judiciary", desc: "Madhya Pradesh Judicial Services Civil Judge Examination" },
    { title: "Bihar Judicial", badge: "BJSE", desc: "Bihar Civil Judge Prelims, Mains & Viva-Voce Examination" },
    { title: "SEBI Law Officer", badge: "Grade A", desc: "Securities Exchange Board of India Grade A Officer Exam" },
    { title: "JAG Officer", badge: "Defence Sector", desc: "Judge Advocate General Military Law Commission (Army/Navy/Air Force)" },
    { title: "SLAT", badge: "Symbiosis", desc: "Symbiosis Law School Entrance Examination" },
    { title: "LSAT India", badge: "Private NLUs", desc: "Law School Admission Test for Top Indian Private Universities" },
  ];

  return (
    <section className="py-24 bg-slate-100/70 border-b border-slate-200/60 relative" id="exams">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <ScrollReveal delay={0} className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label-accent mb-3">
            <span>COMPETITIVE PORTFOLIO</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-950 mb-3 tracking-tight">
            Exams We Cover
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-700 font-medium">
            Targeted coaching for over 15 competitive legal examinations
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {exams.map((exam, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <div
                className={`card-top-accent p-6 rounded-2xl border shadow-card card-elevated-hover group flex flex-col justify-between h-full ${
                  exam.flagship
                    ? "bg-gradient-to-b from-amber-50/50 via-white to-white border-gold-500/40 ring-1 ring-gold-500/20"
                    : "bg-white border-slate-200/90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold-800 bg-gold-500/15 px-3 py-1 rounded-full border border-gold-500/30 shadow-subtle inline-block">
                      {exam.badge}
                    </span>
                    {exam.flagship && (
                      <span className="text-[9px] font-bold uppercase text-navy-950 bg-gold-400 px-2 py-0.5 rounded-full shadow-sm">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {exam.desc}
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
