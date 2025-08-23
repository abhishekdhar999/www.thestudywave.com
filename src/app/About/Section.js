import React from "react";
import { forwardRef } from 'react';
import "./AboutSection.css";

const AboutSection = forwardRef(function AboutSection(props, ref) {
  return (
    <>
      <section ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/refs/heads/main/45f28e60-ed48-4f28-ba0c-48863492a622.jpg"
                alt="Student"
                className="w-80 rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
            <p className="text-green-400 font-extrabold text-[20px]">About TheStudyWave*</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              The Place Where You Can <span className="relative text-red-400 font-bold inline-block underline-effect">Achieve</span>
            </h2>
            <p className="text-gray-600 mt-4">
              We blend global teaching expertise with an India-first mindset to help students learn faster, think deeper, and aim higher.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Our Mission</h3>
                  <p className="text-gray-600">Empower students with confidence, skills, and a growth mindset.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Our Vision</h3>
                  <p className="text-gray-600">Build future-ready learners who can compete globally and lead locally.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="/ContactPage" className="px-6 py-3 text-white font-semibold bg-red-400 rounded-lg shadow-lg hover:bg-red-500 border border-red-400 transition-all">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-12 bg-white">
        <div className="lg:w-1/2 space-y-6">
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">🧠 Smart Learning for Bright Futures</h2>
          </div>
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">👨‍👩‍👧‍👦 Trusted by Parents Worldwide</h2>
          </div>
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl space-y-4">
            <h2 className="text-2xl font-bold flex items-center text-black gap-2">💻 Learn Anytime, Anywhere</h2>
          </div>
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">🎯 Results that Speak for Themselves</h2>
          </div>
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">📈 Personalized Paths to Success</h2>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.07.10.jpeg?raw=true",
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.06.36%20(1).jpeg?raw=true",
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.06.37%20(1).jpeg?raw=true",
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.06.46%20(1).jpeg?raw=true",
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.07.34.jpeg?raw=true",
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.07.48.jpeg?raw=true",
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg8.jpg?raw=true",
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg10.jpg?raw=true",
            ].map((img, i) => (
              <div key={i}>
                <img className="h-auto w-auto max-w-full rounded-lg" src={`${img}`} alt={`gallery-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;






