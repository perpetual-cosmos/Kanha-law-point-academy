export default function Advantage() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-on-surface mb-4">
            The KLPA Advantage
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            A holistic approach to legal mastery, designed to give you a definitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 text-gold-600 flex items-center justify-center mb-6 border border-gold-500/30 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
              <span className="material-symbols-outlined text-2xl">
                school
              </span>
            </div>
            <h3 className="font-serif font-bold text-navy-900 text-lg mb-2 group-hover:text-gold-600 transition-colors">
              Experienced Faculty
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              Learn from seasoned academicians and practicing professionals who bring real-world insights into the classroom.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 text-gold-600 flex items-center justify-center mb-6 border border-gold-500/30 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
              <span className="material-symbols-outlined text-2xl">
                gavel
              </span>
            </div>
            <h3 className="font-serif font-bold text-navy-900 text-lg mb-2 group-hover:text-gold-600 transition-colors">
              CLAT & Judiciary Experts
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              Specialized modules tailored for top competitive exams, ensuring you are prepared for the most rigorous testing standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 text-gold-600 flex items-center justify-center mb-6 border border-gold-500/30 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
              <span className="material-symbols-outlined text-2xl">
                group
              </span>
            </div>
            <h3 className="font-serif font-bold text-navy-900 text-lg mb-2 group-hover:text-gold-600 transition-colors">
              Moot Court Exposure
            </h3>
            <p className="font-sans text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              Practical courtroom pleading training through simulated court proceedings to develop crucial argumentation skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
