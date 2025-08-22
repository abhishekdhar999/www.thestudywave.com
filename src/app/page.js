

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
          
          {/* STUDYWAVE marquee heading */}
          <section className="bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h1 className={`text-6xl md:text-8xl font-bold text-center whitespace-nowrap`}>
                <span className="image-textS">S</span>
                <span className="image-textT">T</span>
                <span className="image-textU">U</span>
                <span className="image-textD">D</span>
                <span className="image-textY">Y</span>
                <span className="image-textW">W</span>
                <span className="image-textA">A</span>
                <span className="image-textV">V</span>
                <span className="image-textE">E</span>
              </h1>
            </div>
          </section>

          {/* Scrolling Carousel - Infinite Scroll */}
          <section className="bg-white py-6">
            <div className="w-full">
              <div className="overflow-hidden whitespace-nowrap w-full">
                <div className="flex gap-24 animate-carousel">
                  {/* First image */}
                  <div className="relative min-w-[200px] max-w-[20vw] h-80 bg-rose-300 rounded-t-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/one.webp"
                      alt="Student 1"
                      className="absolute top-12 bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  {/* Second image */}
                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/three.webp"
                      alt="Student 2"
                      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-blue-400 rounded-4xl overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/two.webp"
                      alt="Student 3"
                      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-orange-300 rounded-tl-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/four.webp"
                      alt="Student 4"
                      className="absolute left-9 bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-purple-400 rounded-b-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/five.webp"
                      alt="Student 5"
                      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-green-300 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.prod.website-files.com/61f64598c68d4ab53ecff616/66cc466567f8ec95b55a6810_H_9-12.avif"
                      alt="Student 6"
                      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  {/* First image duplicate */}
                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-rose-300 rounded-t-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/three.webp"
                      alt="Student 1"
                      className="absolute h-full top-12 bottom-0 w-72 object-cover bg-transparent"
                    />
                  </div>

                  {/* Second image */}
                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/one.webp"
                      alt="Student 2"
                      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-blue-400 rounded-4xl overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/two.webp"
                      alt="Student 3"
                      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-orange-200 rounded-tl-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/four.webp"
                      alt="Student 4"
                      className="absolute left-9 bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>

                  <div className="relative min-w-[200px] w-[140vw] h-80 bg-purple-400 rounded-b-full overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/five.webp"
                      alt="Student 5"
                      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              @keyframes carouselMove {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-carousel {
                animation: carouselMove 40s linear infinite;
              }
            `}</style>
          </section>
          
          <Footer />
        </main>
      </div>
    </>
  );
}
