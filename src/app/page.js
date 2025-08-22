

"use client";
import { useRef } from 'react';
import { Contact } from './ContactPage/page.js';
import Navbar from './Component/Navbar/Navbar.js';
import { HeroSection } from "./HeroSection/page";
import USP from "../app/USPs/page";
import AboutSection from "./About/Section";
import { Footer } from "../app/Component/Footer.js";

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full bg-white">
        <main className="w-full">
          <HeroSection />
          <USP />
          <AboutSection ref={aboutRef} />
          <Footer />
        </main>
      </div>
    </>
  );
}
