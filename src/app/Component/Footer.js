"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-8  p-12 bg-orange-500 ">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          {/* Logo and description */}
          <div className="md:w-[316px]">
            <h1 className="text-[12px] font-extrabold ">
              <span className="text-rose-600"><span className="text-black">THE</span> STUDY <span className="text-black">WAVE</span></span>
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/80">
            We are committed to empowering learners and educators by creating seamless, impactful digital experiences. Whether youre here to teach, learn, or grow—our platform is designed to support you every step of the way.
            </p>

            {/* Social Media Links */}
            <div className="mt-[18px] flex gap-4">
              {[
                { href: "#", src: "/facebook.svg", alt: "facebook" },
                { href: "/", src: "/linkedin.svg", alt: "linkedin" },
                { href: "/", src: "/instagram.svg", alt: "instagram" },
                { href: "", src: "/twitter.svg", alt: "twitter" },
                { href: "https://www.youtube.com/", src: "/youtube.svg", alt: "youtube" },
              ].map(({ href, src, alt }) => (
                <a className="hover:scale-110" target="_blank" key={alt} href={href} rel="noopener noreferrer">
                  <img alt={`${alt} icon`} width="36" height="36" src={`${src}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-[316px] mt-[23px] space-y-6">
            {/* Phone */}
            <div className="flex items-center">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/10">
                {/* Phone Icon SVG */}
                <img src="/phone.svg" alt="" />
              </div>
              <div className="ml-[18px]">
                <a href="tel:+911800123444" className="text-[14px] font-medium text-white">
                  +91 1800123444
                </a>
                <p className="text-[12px] font-medium text-white">Support Number</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/10">
               <img src="/email.svg" alt="" />
              </div>
              <div className="ml-[18px]">
                <a href="mailto:help@lorem.com" className="text-[14px] font-medium text-white">
                  help@lorem.com
                </a>
                <p className="text-[12px] font-medium text-white">Email us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};