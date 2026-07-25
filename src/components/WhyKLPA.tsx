import Image from "next/image";

export default function WhyKLPA() {
  const edgePoints = [
    {
      image: "/assets/edge/edge_faculty.webp",
      title: "Expert Faculty",
      desc: "Experienced lawyers and judicial mentors providing specialized subject authority and personal mentoring.",
    },
    {
      image: "/assets/edge/edge_material.webp",
      title: "Exhaustive Material",
      desc: "Complete syllabus coverage with updated case law booklets, Bare Act indices, and landmark judgment digests.",
    },
    {
      image: "/assets/edge/edge_track_record.webp",
      title: "Proven Track Record",
      desc: "5-star rated institution with high success rates in PCS-J, NLU admissions, and legal commissions.",
    },
    {
      image: "/assets/edge/edge_guidance.webp",
      title: "Professional Guidance",
      desc: "Career counseling, interview preparation, resume building, and placement assistance.",
    },
    {
      image: "/assets/edge/edge_learning.webp",
      title: "Interactive Learning",
      desc: "Moot courts, group discussions, case law analysis, debates, and daily mains answer evaluation.",
    },
    {
      image: "/assets/edge/edge_holistic.webp",
      title: "Holistic Development",
      desc: "Inculcating ethical values, advocacy skills, communication, and judicial conduct beyond academics.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 mb-3 tracking-tight">
            The Kanha Law Point Academy Edge
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-600">
            6 core pillars setting the benchmark for legal and judicial education
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {edgePoints.map((item, index) => (
            <div
              key={index}
              className="card-top-accent bg-card-gradient p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/15 via-amber-100/40 to-gold-500/20 border border-gold-500/30 p-2.5 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-500/70 shadow-sm transition-all duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <span className="font-serif text-xs font-bold text-gold-600/70 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
