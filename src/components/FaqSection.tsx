"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [category, setCategory] = useState<string>("judiciary");

  const faqs = [
    {
      cat: "judiciary",
      q: "Can final-year LLB students appear for Judicial Services Examinations (PCS-J)?",
      a: "Yes, final-year LLB students can appear in the Preliminary Examination for most state judicial services (such as UP PCS-J, MP CJ, Bihar), provided they produce their final degree certificate at the time of the Viva-Voce interview.",
    },
    {
      cat: "judiciary",
      q: "How does Kanha Law Point Academy prepare students for state-specific local laws?",
      a: "Kanha Law Point Academy conducts specialized local law modules covering state-specific statutes like UP Urban Buildings Act, UP Revenue Code, MP Land Revenue Code, and Rajasthan Local Acts along with Bare Act indexing workshops.",
    },
    {
      cat: "clat",
      q: "Is 1 year of preparation sufficient for clearing CLAT-UG?",
      a: "Absolutes depend on individual dedication, but with Kanha Law Point Academy's structured 1-Year Target Module (covering 30+ mock tests, daily reading comprehension drills, and current affairs compendiums), 4-5 hours of focused daily preparation is fully sufficient for top NLU ranks.",
    },
    {
      cat: "clat",
      q: "What is the exam pattern for CLAT-UG?",
      a: "CLAT-UG comprises 120 multiple-choice questions to be solved in 2 hours. It covers 5 sections: English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.",
    },
    {
      cat: "admissions",
      q: "What is the Scholarship Admission Test and how do I apply?",
      a: "Our Scholarship Admission Test offers up to 100% tuition fee waivers for top rankers. You can register for free by submitting the online enquiry form or visiting our Kanpur campus.",
    },
    {
      cat: "admissions",
      q: "Are weekend or evening batches available for working advocates?",
      a: "Yes! We offer dedicated evening and weekend batches for practicing lawyers and working professionals aiming for Higher Judiciary Services (HJS) or LLM admissions.",
    },
  ];

  const filteredFaqs = faqs.filter((f) => f.cat === category);

  return (
    <section className="py-24 bg-slate-100 relative" id="faq">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 border border-gold-500/30 text-xs font-bold uppercase tracking-widest mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed">
            Find answers to common queries regarding judicial services eligibility, CLAT exam pattern, batches, and admissions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { id: "judiciary", label: "Judiciary PCS-J" },
            { id: "clat", label: "CLAT & NLU Entrances" },
            { id: "admissions", label: "Admissions & Batches" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setCategory(tab.id);
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                category === tab.id
                  ? "bg-navy-900 text-gold-400 border border-gold-500/40 shadow-navy"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-card-gradient border-gold-500/60 shadow-card-hover border-l-4 border-l-gold-500"
                    : "bg-white/90 border-slate-200/80 shadow-card hover:border-gold-500/40 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none transition-colors"
                >
                  <span className="font-serif text-base md:text-lg font-bold text-navy-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gold-500 text-navy-950 shadow-gold rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      keyboard_arrow_down
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 bg-amber-50/20 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
