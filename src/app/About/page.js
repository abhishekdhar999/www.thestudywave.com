import React from "react";
import { forwardRef } from 'react';
import "./AboutSection.css";

const AboutSection = forwardRef(function AboutSection(props, ref) {
  return (
    <>
      <section ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
          
          {/* Left Side - Images */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/refs/heads/main/45f28e60-ed48-4f28-ba0c-48863492a622.jpg"
                alt="Student"
                className="w-80 rounded-lg shadow-lg"
              />
              {/* <img
                src="/math.jpg"
                alt="Studying"
                className="w-64 rounded-lg shadow-lg absolute -bottom-16 right-0 border-4 border-white"
              /> */}
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
            <p className="text-green-400 font-extrabold text-[20px]">About TheStudyWave*</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              The Place Where You Can{" "}
              <span className="relative text-red-400 font-bold inline-block underline-effect">
                Achieve
              </span>
            </h2>
            <p className="text-gray-600 mt-4">
              There are many variations of passages of lorem ipsum available, but the majority have suffered.
            </p>

            {/* Mission & Vision */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Our Mission</h3>
                  <p className="text-gray-600">To provide quality education through online platforms.</p>
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
                  <p className="text-gray-600">Empowering students with knowledge and skills for the future.</p>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8">
              <a
                href="#"
                className="px-6 py-3 text-white font-semibold bg-red-400 rounded-lg shadow-lg hover:bg-red-500 border border-red-400 transition-all"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Inline CSS */}
        <style>
          {`
            .underline-effect {
              position: relative;
            }

            .underline-effect::after {
              content: "";
              position: absolute;
              left: 0;
              bottom: -5px;
              width: 100%;
              height: 6px;
              background: url('/path-to-brush-effect.png') no-repeat center;
              background-size: contain;
              opacity: 0.8;
            }
          `}
        </style>
      </section>

      {/* Additional Content Section */}
      <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-12 bg-white">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          {/* Section 1 */}
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">
              🧠 Smart Learning for Bright Futures
            </h2>
          </div>

          {/* Section 2 */}
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">
              👨‍👩‍👧‍👦 Trusted by Parents Worldwide
            </h2>
          </div>

          {/* Section 3 */}
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl space-y-4">
            <h2 className="text-2xl font-bold flex items-center text-black gap-2">
              💻 Learn Anytime, Anywhere
            </h2>
          </div>

          {/* Section 4 */}
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">
              🎯 Results that Speak for Themselves
            </h2>
          </div>

          {/* Section 5 */}
          <div className="ab-card bg-[#e0e0e0] py-4 px-6 sm:px-10 rounded-3xl shadow-sm space-y-4">
            <h2 className="text-2xl font-bold flex text-black items-center gap-2">
              📈 Personalized Paths to Success
            </h2>
          </div>
        </div>

        {/* Right Section: Image Grid */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              // 1
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg1.jpg?raw=true",

// 2
               "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg2.jpg?raw=true",

// 3
                "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg3.jpg?raw=true",
                
                // 4
                "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg13.jpg?raw=true"
                ,
                // 5
                "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg6.jpg?raw=true"
                ,
                // 6
                "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg7.jpg?raw=true",

// 7

"https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg8.jpg?raw=true"
,
              // 8
              "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg10.jpg?raw=true"
              ,
              // // 9
              // "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/refs/heads/main/gg9.webp",
              // // 10
              // "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/refs/heads/main/gg11.avif",
              // // 11
              // "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg12.jpg?raw=true", 
              // // 12
              // "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/gg4.jpg?raw=true"
              , 
            ].map((img, i) => (
              <div key={i}>
                <img
                  className="h-auto w-auto max-w-full rounded-lg"
                  src={`${img}`}
                  alt={`gallery-${i}`}
                />
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