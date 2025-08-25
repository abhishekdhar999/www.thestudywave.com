'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../Component/Navbar/Navbar';
import { Footer } from '../Component/Footer';
import './AboutSection.css';

export default function AboutPage() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.about-card, .value-card, .team-card, .stat-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && el instanceof HTMLElement) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    animatedElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      }
    });
    const cta = document.querySelector('.cta-button');
    const ctaHandler = () => { window.location.href = '/ContactPage'; };
    if (cta) cta.addEventListener('click', ctaHandler);
    // Counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const duration = 2000;
    const interval = 50;
    statNumbers.forEach((stat) => {
      if (!(stat instanceof HTMLElement)) return;
      const text = stat.textContent || '';
      const hasPercent = text.includes('%');
      const hasPlus = text.includes('+');
      const targetNum = parseInt(text.replace(/[^0-9]/g, '')) || 0;
      let current = 0;
      const increment = Math.ceil(targetNum / (duration / interval));
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          stat.textContent = `${targetNum}${hasPercent ? '%' : hasPlus ? '+' : ''}`;
          clearInterval(timer);
        } else {
          stat.textContent = `${current}${hasPercent ? '%' : hasPlus ? '+' : ''}`;
        }
      }, interval);
    });
    return () => {
      observer.disconnect();
      if (cta) cta.removeEventListener('click', ctaHandler);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full pt-24">
        <section className="about-section">
          <div className="animated-circle circle-1"></div>
          <div className="animated-circle circle-2"></div>
          <div className="animated-circle circle-3"></div>
          <div className="about-content">
            <div className="page-header">
              <h1>About <span>The Study Wave</span></h1>
              <p className="dyna-puff">Transforming education through innovation, passion, and excellence</p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <h2><span>📖</span> Our Story</h2>
                <p>The Study Wave began with a simple vision: to make quality education accessible and engaging for every student. What started as a small initiative has now grown into a global educational movement.</p>
                <p>Founded by a team of educators and technologists, we&apos;ve combined the best teaching methodologies with cutting-edge technology to create a learning experience that is both effective and enjoyable.</p>
                <p>From our first classroom to our current international presence, our commitment to student success has never wavered.</p>
              </div>
              <div className="about-card">
                <h2><span>🎯</span> Our Approach</h2>
                <p>At The Study Wave, we believe that every student is unique, with their own learning style and pace. Our personalized 1:1 approach ensures that each student receives the attention and guidance they need to excel.</p>
                <p>We focus on building strong foundational concepts rather than just teaching to tests. Our interactive sessions encourage curiosity, critical thinking, and a genuine love for learning.</p>
                <p>By combining experienced educators, engaging content, and innovative technology, we create learning experiences that truly resonate with students.</p>
              </div>
            </div>

            <div className="values-section">
              <h2>Our Core Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🌟</div>
                  <h3>Excellence</h3>
                  <p>We strive for excellence in everything we do, from curriculum design to student support, ensuring the highest quality education.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">❤️</div>
                  <h3>Passion</h3>
                  <p>Our team is passionate about education and dedicated to inspiring that same passion in every student we teach.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🌍</div>
                  <h3>Global Perspective</h3>
                  <p>We prepare students for a globalized world, incorporating international perspectives and teaching methodologies.</p>
                </div>
              </div>
            </div>

            <div className="team-section">
              <h2>Meet Our Leadership Team</h2>
              <div className="team-grid">
                <div className="team-card">
                  <div className="team-img">👨‍💼</div>
                  <div className="team-info">
                    <h3>Mohit Tariyal</h3>
                    <p>Founder & CEO</p>
                    <p className="bio">Former educator with 15+ years of experience in curriculum development and educational technology.</p>
                  </div>
                </div>
                
                <div className="team-card">
                  <div className="team-img">👨‍🎓</div>
                  <div className="team-info">
                    <h3>Dinesh Tariyal</h3>
                    <p>Chief Operating Officer</p>
                    <p className="bio">Tech innovator focused on creating seamless learning experiences through cutting-edge platforms.</p>
                  </div>
                </div>
                <div className="team-card">
                  <div className="team-img">👩‍🏫</div>
                  <div className="team-info">
                    <h3>Aditi</h3>
                    <p>Chief Academic Officer</p>
                    <p className="bio">Education specialist with expertise in pedagogical innovation and student engagement strategies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <h2>Our Impact in Numbers</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">10000+</div>
                  <div className="stat-label">Students Taught</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">250+</div>
                  <div className="stat-label">Expert Tutors</div>
                </div>
              </div>
            </div>

            <div className="join-us">
              <h2>Join Our Educational Revolution</h2>
              <p>Become part of a growing community of learners, educators, and innovators who are reshaping the future of education.</p>
                              <p>Whether you&apos;re a student looking to excel or a parent seeking the best for your child, The Study Wave is here to support your journey.</p>
              <Link href="/ContactPage">
                <button className="cta-button">Start Learning Today</button>
              </Link>
            </div>

            <div className="back-home">
              <Link href="/">← Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}