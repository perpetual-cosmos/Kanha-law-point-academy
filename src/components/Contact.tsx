"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullname,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send enquiry. Please try again.");
      }

      setSubmitted(true);
      setFormData({ fullname: "", phone: "", email: "", course: "", message: "" });
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please check your details and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 md:py-16 bg-slate-100/70 border-t border-slate-200/60 relative" id="contact">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Campus Information */}
          <ScrollReveal delay={0} className="lg:col-span-5 space-y-8">
            <div>
              <div className="section-label-accent mb-3">
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-950 mb-3 tracking-tight">
                Campus Location
              </h2>
              <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Visit our campus in Kanpur or get in touch with our admissions counselors to find the right legal program for you.
              </p>
            </div>

            <div className="space-y-6 font-sans text-sm text-slate-700">
              {/* Address */}
              <div className="flex items-start space-x-4 bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-subtle">
                <span className="material-symbols-outlined text-gold-600 text-2xl mt-0.5 flex-shrink-0">location_on</span>
                <div>
                  <h3 className="font-serif font-bold text-navy-950 mb-1 text-base">Campus Address</h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    Kanha Law Point Academy<br />
                    Office No. 8, Near Safipur, Harjinder Nagar Inter College,<br />
                    GT Road, Kanpur Nagar, UP - 208007
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-subtle">
                <span className="material-symbols-outlined text-gold-600 text-2xl flex-shrink-0">call</span>
                <div>
                  <h3 className="font-serif font-bold text-navy-950 mb-0.5 text-base">Phone</h3>
                  <a href="tel:+919838477453" className="text-xs text-slate-700 hover:text-gold-600 font-bold transition-colors">
                    +91-9838477453
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-subtle">
                <span className="material-symbols-outlined text-gold-600 text-2xl flex-shrink-0">mail</span>
                <div>
                  <h3 className="font-serif font-bold text-navy-950 mb-0.5 text-base">Email</h3>
                  <a href="mailto:kanhalawpointacademy@gmail.com" className="text-xs text-slate-700 hover:text-gold-600 font-medium transition-colors">
                    kanhalawpointacademy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Clean White Form Card */}
          <ScrollReveal delay={150} className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-slate-200/90 shadow-elevated">
            <h3 className="font-serif text-2xl font-bold text-navy-950 mb-2">
              Enquire Now
            </h3>
            <p className="text-xs text-slate-600 mb-6 font-medium">
              Fill out the form below to receive detailed prospectus & fee structure
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50/90 border border-emerald-300 rounded-xl text-center space-y-3 shadow-subtle animate-in fade-in duration-300">
                <span className="material-symbols-outlined text-4xl text-emerald-600">check_circle</span>
                <h4 className="font-serif text-xl font-bold text-navy-950">Enquiry Received!</h4>
                <p className="text-xs text-slate-700 font-medium max-w-sm mx-auto">
                  Thank you for reaching out. Your details have been sent to our admissions team. We will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-gold-600 hover:underline uppercase tracking-wider"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 font-medium flex items-center space-x-2">
                    <span className="material-symbols-outlined text-base text-rose-500">error</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullname" className="block text-[11px] font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="w-full bg-slate-50/80 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3.5 font-medium transition-all"
                      placeholder="e.g. Rahul Sharma"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50/80 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3.5 font-medium transition-all"
                      placeholder="+91-9876543210"
                      type="tel"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3.5 font-medium transition-all"
                    placeholder="name@example.com"
                    type="email"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-[11px] font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Select Course Interest *
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3.5 font-medium transition-all"
                    required
                  >
                    <option value="" disabled>Select Course Interest</option>
                    <option value="judiciary">Judiciary Services (PCS-J / HJS)</option>
                    <option value="clat-ug">CLAT (UG) NLU Entrance</option>
                    <option value="clat-pg">CLAT (PG) LLM & PSU Hiring</option>
                    <option value="llb">Traditional LLB Entrance</option>
                    <option value="other">Other Legal Exams</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50/80 border border-slate-200 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20 focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3 font-medium h-24 transition-all"
                    placeholder="Ask about batch timings, fee structures, or demo classes..."
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full btn-navy py-4 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md mt-3 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-gold-400 border-t-transparent rounded-full animate-spin"></span>
                      <span>SENDING ENQUIRY...</span>
                    </>
                  ) : (
                    <span>SUBMIT ENQUIRY</span>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
