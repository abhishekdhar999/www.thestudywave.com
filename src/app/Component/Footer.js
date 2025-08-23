"use client";
import React from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const Footer = () => {
  return (
    <footer className={`mt-0 bg-neutral-50 border-t border-black/5 ${rubik.className}`}>
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0 py-12">
        <div className="flex flex-col items-start justify-between gap-10 sm:px-[18px] md:flex-row md:px-10">
          {/* Logo and description */}
          <div className="md:w-[420px] text-left">
            <h1 className="text-2xl font-extrabold tracking-tight text-black text-left">
              <span className="text-black">The</span>
              <span className="text-orange-500 mx-2">Study</span>
              <span className="text-black">Wave</span>
            </h1>
            <p className="mt-3 text-[15px] leading-7 text-gray-600">
              We are committed to empowering learners and educators by creating seamless, impactful digital experiences. Whether you are here to teach, learn, or grow — our platform is designed to support you every step of the way.
            </p>

            {/* Social Media Links */}
            <div className="mt-4 flex gap-3 justify-start">
              {[
                { href: "https://www.facebook.com/profile.php?id=61563791097918", src: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/927f44e824399f91b54143eefd52c488c68d6cd7/facebook.svg", alt: "facebook" },
                { href: "/", src: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/eaaf3a5d8c6fbfea928537419323a9fd3dc8456b/linkedin.svg", alt: "linkedin" },
                { href: "https://www.instagram.com/_thestudywave_/", src: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/eaaf3a5d8c6fbfea928537419323a9fd3dc8456b/instagram.svg", alt: "instagram" },
                { href: "", src: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/eaaf3a5d8c6fbfea928537419323a9fd3dc8456b/twitter.svg", alt: "twitter" },
                { href: "https://youtube.com/@thestudywave-h4i?si=mFbrgtHzkkKAgcOb", src: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/eaaf3a5d8c6fbfea928537419323a9fd3dc8456b/youtube.svg", alt: "youtube" },
              ].map(({ href, src, alt }) => (
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 hover:bg-orange-50 hover:border-orange-200 transition"
                  target="_blank" key={alt} href={href} rel="noopener noreferrer" aria-label={alt}
                >
                  <img alt={`${alt} icon`} width="20" height="20" src={`${src}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-[316px] mt-[6px] space-y-6">
            {/* Phone */}
            <div className="flex items-center">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/5 border border-black/10">
                <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/eaaf3a5d8c6fbfea928537419323a9fd3dc8456b/phone.svg" alt="phone" className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <a href="tel:+917740064839" className="text-[15px] font-semibold text-black hover:text-orange-600 transition">
                  +91 7740064839
                </a>
                <p className="text-[12px] font-medium text-gray-500">Support Number</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/5 border border-black/10">
                <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/eaaf3a5d8c6fbfea928537419323a9fd3dc8456b/email.svg" alt="email" className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <a href="mailto:thestudywave.com@gmail.com" className="text-[15px] font-semibold text-black hover:text-orange-600 transition">
                  thestudywave.com@gmail.com
                </a>
                <p className="text-[12px] font-medium text-gray-500">Email us anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-black/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p> {new Date().getFullYear()} The StudyWave. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black hover:underline underline-offset-4">Privacy</a>
            <a href="#" className="hover:text-black hover:underline underline-offset-4">Terms</a>
            <a href="#" className="hover:text-black hover:underline underline-offset-4">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};