

"use client";
import { useRef } from 'react';
import { Contact } from './ContactPage/page.js';
import Navbar from './Component/Navbar/Navbar.js';
import { HeroSection } from "./HeroSection/page";
import USP from "../app/USPs/page";
import About from "../app/About/page.js"
import { Footer } from "../app/Component/Footer.js";

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onAboutClick={() => scrollToSection(aboutRef)} />
      <div className="flex flex-col items-center w-full bg-white">
        <main className="w-full">
          <HeroSection />
          <USP />
          <About ref={aboutRef} />
          <Footer />
        </main>
      </div>
    </>
  );
}
