"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-24 bg-slate-100 relative" id="contact">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Campus Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 mb-3 tracking-tight">
                Campus Location
              </h2>
              <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                Visit our campus in Kanpur or get in touch with our admissions counselors to find the right legal program for you.
              </p>
            </div>

            <div className="space-y-6 font-sans text-sm text-slate-700">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-gold-600 text-2xl mt-0.5">location_on</span>
                <div>
                  <h3 className="font-serif font-bold text-navy-900 mb-1">Campus Address</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kanha Law Point Academy<br />
                    Office No. 8, Near Safipur, Harjinder Nagar Inter College,<br />
                    GT Road, Kanpur Nagar, UP - 208007
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <span className="material-symbols-outlined text-gold-600 text-2xl">call</span>
                <div>
                  <h3 className="font-serif font-bold text-navy-900 mb-0.5">Phone</h3>
                  <a href="tel:+919838477453" className="text-xs text-slate-600 hover:text-gold-600 font-semibold">
                    +91-9838477453
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <span className="material-symbols-outlined text-gold-600 text-2xl">mail</span>
                <div>
                  <h3 className="font-serif font-bold text-navy-900 mb-0.5">Email</h3>
                  <a href="mailto:kanhalawpointacademy@gmail.com" className="text-xs text-slate-600 hover:text-gold-600">
                    kanhalawpointacademy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">
              Enquire Now
            </h3>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <span className="material-symbols-outlined text-4xl text-emerald-600">check_circle</span>
                <h4 className="font-serif text-lg font-bold text-navy-900">Enquiry Received!</h4>
                <p className="text-xs text-slate-600">
                  Our counselor will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="w-full bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3 font-medium"
                    placeholder="Full Name"
                    type="text"
                    required
                  />
                  <input
                    className="w-full bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3 font-medium"
                    placeholder="Phone Number"
                    type="tel"
                    required
                  />
                </div>

                <input
                  className="w-full bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3 font-medium"
                  placeholder="Email Address"
                  type="email"
                />

                <select
                  className="w-full bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3 font-medium"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select Course Interest</option>
                  <option value="judiciary">Judiciary Services (PCS-J / HJS)</option>
                  <option value="clat-ug">CLAT (UG) NLU Entrance</option>
                  <option value="clat-pg">CLAT (PG) LLM & PSU Hiring</option>
                  <option value="llb">Traditional LLB Entrance</option>
                  <option value="other">Other Legal Exams</option>
                </select>

                <textarea
                  className="w-full bg-slate-50 border border-slate-200 focus:border-gold-500 focus:bg-white focus:outline-none rounded-lg text-xs text-slate-900 px-4 py-3 font-medium h-24"
                  placeholder="Your Message..."
                ></textarea>

                <button
                  className="w-full btn-navy py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md mt-2"
                  type="submit"
                >
                  SUBMIT ENQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
