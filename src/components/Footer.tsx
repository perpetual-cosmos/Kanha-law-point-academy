import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-navy-950 text-slate-300 border-t border-gold-500/35 pt-16 pb-12">
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Col 1: Academy Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center space-x-3 group">
              <Image
                src="/assets/logo.png"
                alt="Kanha Law Point Academy"
                width={200}
                height={200}
                className="h-14 md:h-16 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-white tracking-wide">
                  Kanha Law Point Academy
                </span>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-gold-400">
                  Est. 2020 • Kanpur
                </span>
              </div>
            </a>
            <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Kanha Law Point Academy is Uttar Pradesh&apos;s premier ★★★★★ rated institute for Judicial Services (PCS-J, HJS), CLAT-UG, CLAT-PG, and Law Officer examinations.
            </p>
            <div className="flex items-center space-x-3 text-gold-400 text-xs font-semibold">
              <span className="flex items-center space-x-1">
                <span className="text-gold-400 text-xs tracking-tighter">★★★★★</span>
                <span>Rated Institution</span>
              </span>
              <span className="text-gold-500/40">•</span>
              <span>Kanpur Nagar, UP</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><a href="#about" className="hover:text-gold-300 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-gold-300 transition-colors">Coaching Programs</a></li>
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">Exams Covered</a></li>
              <li><a href="#facilities" className="hover:text-gold-300 transition-colors">Facilities</a></li>
              <li><a href="#faq" className="hover:text-gold-300 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Programs Covered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-wider">Top Examinations</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">UP PCS-J Judicial Services</a></li>
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">MP Civil Judge (MP CJ)</a></li>
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">Bihar Judicial Services</a></li>
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">CLAT (UG) 5-Year Integrated</a></li>
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">CLAT (PG) LLM & PSU Hiring</a></li>
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">SEBI Legal Grade A Officer</a></li>
              <li><a href="#exams" className="hover:text-gold-300 transition-colors">JAG Army Law Officer Commission</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-wider">Campus Address</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Office No. 8, Near Safipur,<br />
              Harjinder Nagar Inter College,<br />
              GT Road, Kanpur Nagar, UP - 208007
            </p>
            <div className="pt-2 space-y-1.5 text-xs font-semibold">
              <a href="tel:+919838477453" className="block text-gold-400 font-bold hover:underline">
                Call: +91-9838477453
              </a>
              <a href="mailto:kanhalawpointacademy@gmail.com" className="block text-slate-300 hover:text-white truncate">
                kanhalawpointacademy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} Kanha Law Point Academy. All Rights Reserved.
              <span className="mx-2 text-navy-700">•</span>
              Developed by:{" "}
              <a
                href="https://theunipick.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 font-semibold hover:underline transition-colors"
              >
                Tarun Singh
              </a>
            </p>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Disclaimer: All exam names, logos, and trademarks (CLAT, PCS-J, SEBI, JAG) belong to their respective statutory bodies. Kanha Law Point Academy is an independent coaching institution.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-xs font-semibold whitespace-nowrap">
            <a href="#contact" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <span className="text-navy-700">•</span>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Terms of Admission</a>
            <span className="text-navy-700">•</span>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
