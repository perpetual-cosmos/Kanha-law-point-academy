export default function ExamsCovered() {
  const exams = [
    { title: "CLAT - UG", badge: "23 NLUs", desc: "Common Law Admission Test for NLU Undergraduate Law Degrees" },
    { title: "CLAT - PG", badge: "LLM & PSUs", desc: "Common Law Admission Test for NLU Masters & PSU Legal Recruitment" },
    { title: "AILET", badge: "NLU Delhi", desc: "All India Law Entrance Test for National Law University, Delhi" },
    { title: "UP PCS-J", badge: "UP Judiciary", desc: "Uttar Pradesh Civil Judge (Junior Division) Examination" },
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-md bg-gold-500/10 text-gold-700 border border-gold-500/25 text-xs font-bold uppercase tracking-widest mb-3">
            COMPETITIVE PORTFOLIO
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-950 mb-3 tracking-tight">
            Exams We Cover
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-700 font-medium">
            Targeted coaching for over 15 competitive legal examinations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="card-top-accent bg-white p-6 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold-800 bg-gold-500/15 px-2.5 py-1 rounded-md inline-block mb-3 border border-gold-500/30 shadow-subtle">
                  {exam.badge}
                </span>
                <h3 className="font-serif text-base font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {exam.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
