import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

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
      desc: "Top ★★★★★ rated institution with high success rates in PCS-J, NLU admissions, and legal commissions.",
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
        <ScrollReveal delay={0} className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label-accent mb-3">
            <span>THE ACADEMY ADVANTAGE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-950 mb-3 tracking-tight">
            The Kanha Law Point Academy Edge
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-700 font-medium">
            6 core pillars setting the benchmark for legal and judicial education
          </p>
        </ScrollReveal>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {edgePoints.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div
                className={`card-top-accent p-8 rounded-2xl border border-slate-200/90 shadow-card card-elevated-hover group flex flex-col justify-between h-full ${
                  index % 2 === 0 ? "bg-white" : "bg-[#FAFBFF]"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/25 p-2.5 flex items-center justify-center group-hover:scale-105 group-hover:bg-gold-500/20 shadow-subtle transition-all duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-gold-500 shadow-sm border border-gold-400 mt-1"></div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                    {item.desc}
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
