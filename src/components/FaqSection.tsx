"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [category, setCategory] = useState<string>("judiciary");

  const faqs = [
    // Judiciary
    {
      cat: "judiciary",
      q: "What is the eligibility criteria for Civil Judge Junior Division (PCS-J)?",
      a: "Law graduates possessing an LL.B Degree (3-Year or 5-Year Integrated) from a recognized university who are enrolled or eligible to enroll as an Advocate under the Advocates Act, 1961 are eligible. Final-year law students can also appear in the Preliminary Examination provided they present their qualifying degree certificate prior to the Viva-Voce interview.",
    },
    {
      cat: "judiciary",
      q: "What is Higher Judiciary Services (HJS) and who can apply?",
      a: "Higher Judiciary Services (HJS) is direct recruitment for appointment as Additional District & Sessions Judge (ADJ). Candidates must possess an LL.B Degree and have a minimum of 7 years of continuous active litigating practice as an Advocate in courts.",
    },
    {
      cat: "judiciary",
      q: "What is the 3-stage examination structure for Judicial Services?",
      a: "The judicial selection process comprises 3 tiers: 1. Preliminary Examination (Objective screening test covering General Knowledge & Law), 2. Mains Examination (Descriptive written papers covering Civil Law, Criminal Law, Local State Statutes, and Language/Translation), and 3. Viva-Voce Board (Personality and judicial temperament evaluation before a panel of High Court Judges and legal experts).",
    },
    {
      cat: "judiciary",
      q: "How does KLPA prepare aspirants for state-specific local laws?",
      a: "KLPA conducts dedicated state-specific local law modules covering key statutes such as the UP Urban Buildings Act, UP Revenue Code, MP Land Revenue Code, and Rajasthan Local Acts alongside Bare Act word-by-word indexing and judgment writing workshops.",
    },

    // CLAT & NLUs
    {
      cat: "clat",
      q: "What is the eligibility requirement and exam pattern for CLAT (UG)?",
      a: "Candidates must have passed 10+2 (Intermediate) or equivalent examination with a minimum of 45% aggregate marks (40% for SC/ST candidates). There is no upper age limit. The exam is 2 hours (120 minutes) featuring 120 passage-based MCQs (+1.0 mark for correct, -0.25 mark for incorrect) across 5 sections: English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.",
    },
    {
      cat: "clat",
      q: "Who can appear for CLAT (PG) LLM and how are scores utilized?",
      a: "Candidates holding an LL.B Degree (3-Year or 5-Year Integrated) or currently in their final year with at least 50% aggregate marks (45% for SC/ST) are eligible. CLAT-PG scores are utilized for NLU Master of Laws (LL.M) admissions as well as legal officer recruitment in leading PSUs (such as ONGC, Coal India, BHEL, SAIL) and Armed Forces JAG Officer commissions.",
    },
    {
      cat: "clat",
      q: "Is 1 year of preparation sufficient for securing a top NLU rank in CLAT?",
      a: "Yes. With KLPA's structured 1-Year Foundation & Target Module—which includes 30+ full-length mock tests, daily passage reading comprehension drills, current affairs compendiums, and doubt-resolution sessions—4 to 5 hours of daily focused preparation is fully sufficient to crack top NLUs.",
    },

    // Other Exams
    {
      cat: "other-exams",
      q: "What other competitive law examinations are covered at KLPA?",
      a: "KLPA provides specialized coaching for 18+ legal competitive exams including SEBI Grade A Law Officer, JAG Officer (Army/Navy/Air Force), AILET (NLU Delhi), Traditional LLB Entrances (DU LLB, BHU, Allahabad University), MH CET Law, SLAT (Symbiosis), LSAT India, UPSC Legal Officers, and IBPS Specialist Law Officer (SO).",
    },
    {
      cat: "other-exams",
      q: "What is the JAG (Judge Advocate General) Military Law Commission entry?",
      a: "JAG Officer entry is direct recruitment into the legal branch of the Indian Armed Forces (Army, Navy, Air Force) for law graduates with minimum 55% aggregate marks and CLAT-PG qualification, followed by the Services Selection Board (SSB) interview.",
    },

    // Admissions & Campus
    {
      cat: "admissions",
      q: "Where is the KLPA campus located and what are the office hours?",
      a: "KLPA Campus is located at Office No. 8, Near Safipur, Harjinder Nagar Inter College, GT Road, Kanpur Nagar, UP - 208007. Phone: +91-9838477453. Office hours are Monday to Saturday: 8:00 AM – 7:30 PM, and Sunday: 9:00 AM – 2:00 PM.",
    },
    {
      cat: "admissions",
      q: "Are evening or weekend batches available for practicing advocates?",
      a: "Yes. KLPA offers dedicated evening and weekend batches tailored for practicing advocates, LL.M scholars, and working professionals targeting Higher Judiciary Services (HJS) or judicial state exams.",
    },
    {
      cat: "admissions",
      q: "How can I register for demo classes or request a detailed prospectus?",
      a: "You can fill out the online enquiry form on our website or visit our Kanpur campus directly to register for a free demo session, counseling guidance, and physical prospectus package.",
    },
  ];

  const filteredFaqs = faqs.filter((f) => f.cat === category);

  return (
    <section className="py-24 bg-slate-100/70 border-t border-slate-200/60 relative" id="faq">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-md bg-gold-500/10 text-gold-700 border border-gold-500/25 text-xs font-bold uppercase tracking-widest mb-3">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-950 mb-3 tracking-tight">
            Got Questions? <span className="gold-gradient-text">We Have Answers.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-slate-700 font-medium">
            Verified information on judicial eligibility, CLAT exam pattern, syllabus, and campus admissions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: "judiciary", label: "Judiciary (PCS-J & HJS)" },
            { id: "clat", label: "CLAT (UG & PG)" },
            { id: "other-exams", label: "SEBI, JAG & LLB Entrances" },
            { id: "admissions", label: "Admissions & Campus" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setCategory(tab.id);
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold-500 ${
                category === tab.id
                  ? "bg-navy-950 text-gold-400 border border-gold-500/40 shadow-navy-glow"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90 shadow-subtle"
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
                    ? "bg-white border-gold-500/50 shadow-card-hover border-l-4 border-l-gold-500"
                    : "bg-white border-slate-200/90 shadow-card hover:border-gold-500/40 hover:-translate-y-0.5"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none transition-colors"
                >
                  <span className="font-serif text-base md:text-lg font-bold text-navy-950">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gold-500 text-navy-950 shadow-gold rotate-180"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      keyboard_arrow_down
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-xs md:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-amber-50/15 font-normal">
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
