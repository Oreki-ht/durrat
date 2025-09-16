"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-[#f5f5f5] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Countries />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}