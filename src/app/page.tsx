import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreObjectives from "@/components/CoreObjectives";
import Courses from "@/components/Courses";
import ExamsCovered from "@/components/ExamsCovered";
import WhyKLPA from "@/components/WhyKLPA";
import PedagogyFacilities from "@/components/PedagogyFacilities";
import Director from "@/components/Director";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-gold-500 selection:text-navy-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <CoreObjectives />
        <Courses />
        <ExamsCovered />
        <WhyKLPA />
        <PedagogyFacilities />
        <Director />
        <GallerySection />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
