"use client";

import React from "react";
import { motion } from "framer-motion";
import { DynaPuff } from "next/font/google";
import Link from "next/link";

const DynaPuffs = DynaPuff({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const MissionSection = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white pt-24 px-4 sm:px-8 lg:px-20 overflow-hidden mt-12">
        {/* Animated Circles - Same as homepage */}
        <motion.div
          className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-orange-300 rounded-full opacity-50"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", left: "60%" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-red-200 rounded-full opacity-40"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "40%", left: "10%" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-green-200 rounded-full opacity-50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "70%", left: "80%" }}
        />

        {/* Mission Content */}
        <div className="w-full max-w-6xl mx-auto z-10">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              StudyWave <span className="text-orange-500">India</span>
            </h1>
            <p className={`mt-4 text-xl text-gray-600 ${DynaPuffs.className}`}>
              Redefining education with global excellence, tailored for Indian students
            </p>
          </div>

          {/* Mission Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Our Mission for Indian Students */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Mission for Indian Students</h2>
              <p className="text-gray-700 mb-4">
                We are not here to be just another coaching service. We aim to redefine how Indian students learn. Our goal is to give them:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>The confidence to compete globally.</li>
                <li>The skills to crack the toughest exams.</li>
                <li>The mindset to aim higher than they ever imagined.</li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                When a student studies with us, they don&apos;t just earn marks; they gain power.
              </p>
            </motion.div>

            {/* From India to the World */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-orange-500 mb-4">From India to the World</h2>
              <p className="text-gray-700">
                We&apos;ve already helped students achieve top results abroad. Our methods have proven effective in the toughest international exams. Now, we&apos;re bringing that same energy to Indian classrooms. Think of this as India&apos;s education revolution, driven by global excellence.
              </p>
            </motion.div>
          </div>

          {/* Why India Section */}
          <motion.div 
            className="bg-orange-50 p-8 rounded-xl mb-16 border border-orange-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Why India, Why Now?</h2>
            <p className="text-xl text-center text-gray-700 mb-6">
              Because India is the future of education.
            </p>
            <p className="text-gray-700 text-center">
              With millions of ambitious students preparing for board exams, competitive tests, Olympiads, and global opportunities, the drive to succeed here is unmatched. We&apos;re bringing everything we&apos;ve learned from teaching abroad and customizing it for Indian learners.
            </p>
          </motion.div>

          {/* What We Bring Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center text-black mb-8">What We Bring to India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "International Teaching Experience", 
                  description: "Years of training students in the UK, US, and Australia." 
                },
                { 
                  title: "Competitive Exam Mastery", 
                  description: "From NTSE, Olympiads, and NDA-level logic to SAT & Selective School tests." 
                },
                { 
                  title: "Smart, Engaging Learning", 
                  description: "No boring textbook lectures. Interactive, challenging sessions." 
                },
                { 
                  title: "Teachers Who Care", 
                  description: "We are shaping future leaders, problem solvers, and achievers." 
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">
                    ✓
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-500">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Join The Wave Section */}
          <motion.div 
            className="text-center bg-gradient-to-r from-orange-400 to-pink-500 p-8 rounded-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join The Wave</h2>
            <p className="text-xl mb-6">
              We&apos;ve established our presence abroad. Now we&apos;re making our mark in India. We&apos;re not here for second place. We&apos;re here to build champions.
            </p>
            <p className="text-lg mb-8">
              The Study Wave India – Let&apos;s Rise Together.
            </p>
            <Link href="/ContactPage">
              <button className="bg-white text-orange-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                Start Your Journey
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link href="/">
            <span className="text-orange-500 hover:underline cursor-pointer">← Back to Home</span>
          </Link>
        </div>
      </section>
    </>
  );
};
