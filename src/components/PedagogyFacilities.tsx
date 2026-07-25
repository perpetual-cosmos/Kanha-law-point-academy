import Image from "next/image";

export default function PedagogyFacilities() {
  return (
    <section className="py-24 bg-slate-100/70 border-t border-slate-200/60 relative" id="facilities">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-md bg-gold-500/10 text-gold-700 border border-gold-500/25 text-xs font-bold uppercase tracking-widest mb-3">
            INFRASTRUCTURE & ENVIRONMENT
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-950 mb-3 tracking-tight">
            Campus Facilities
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-700 font-medium">
            State-of-the-art infrastructure designed for legal study and practical advocacy training
          </p>
        </div>

        {/* 3 Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Moot Court Hall with Image */}
          <div className="card-top-accent bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/assets/hero-bg.jpg"
                  alt="Kanha Law Point Academy In-House Moot Court Hall"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent"></div>
                <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-navy-950/90 px-3 py-1 rounded-md border border-gold-500/35 backdrop-blur-sm shadow-subtle">
                  Simulated Courtroom
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                  Moot Court Hall
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                  Simulated courtroom environment for live advocacy training, moot court competitions, and court etiquette drills.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold-700 flex items-center space-x-1.5 bg-gold-500/10 px-2.5 py-1 rounded-md border border-gold-500/20">
                <span className="material-symbols-outlined text-sm">gavel</span>
                <span>Advocacy & Pleading Practice</span>
              </span>
            </div>
          </div>

          {/* Card 2: Law Library & Archives (Parchment background) */}
          <div className="card-top-accent bg-gradient-to-br from-parchment via-amber-50/50 to-parchment p-8 rounded-2xl border border-gold-500/40 shadow-card hover:shadow-card-hover hover:border-gold-500/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-6 shadow-md border border-gold-500/30 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">local_library</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                Law Library & Archives
              </h3>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                5,000+ legal volumes, Supreme Court Cases (SCC Online) subscriptions, Bare Act indexing manuals, and digital law journals.
              </p>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold-800 bg-gold-500/15 px-3 py-1.5 rounded-lg border border-gold-500/30 mt-6 inline-block text-center shadow-subtle">
              Digital & Physical Subscriptions Included
            </span>
          </div>

          {/* Card 3: Smart Classrooms */}
          <div className="card-top-accent bg-white p-8 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-6 shadow-md border border-gold-500/30 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">co_present</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                Smart Classrooms
              </h3>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Air-conditioned study halls equipped with modern audio-visual teaching screens and comfortable ergonomics for long study hours.
              </p>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-950 bg-navy-900/5 px-3 py-1.5 rounded-lg border border-navy-900/15 mt-6 inline-block text-center">
              Recorded Lecture Backup Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
