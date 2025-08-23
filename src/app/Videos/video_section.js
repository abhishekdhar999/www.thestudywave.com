"use client";

import React, { useRef } from "react";

export const VideoSection = () => {
  const reviewsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      id: 1,
      stars: 5,
      text: "This platform completely changed my son&apos;s attitude towards math. The lessons are engaging and he&apos;s now top of his class!",
      name: "FATEMA",
      details: "Mother of AMMAR\nAUSTRALIA",
      avatar: "F"
    },
    {
      id: 2,
      stars: 4.5,
      text: "A safe and incredibly useful resource. I feel good about my daughter spending her study time here.",
      name: "TANIA CLAUDE",
      details: "Mother of DARIUS\nFlorida, USA",
      avatar: "TC"
    },
    {
      id: 3,
      stars: 5,
      text: "The progress reports are fantastic. Finally, I can actually see where my child is excelling .",
      name: "VISHWAJEET SINGH RAWAT",
      details: "Father of ELINA \n AUSTRALIA",
      avatar: "VR"
    },
    {
      id: 4,
      stars: 5,
      text: "My daughter went from struggling with science to winning her school science fair! TheStudyWave made learning fun.",
      name: "NISHA BHARGAV",
      details: "Mother of ANSH \n AUSTRALIA",
      avatar: "NB"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star"></i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star"></i>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="reviews-section">
        <div className="section-decoration decoration-1"></div>
        <div className="section-decoration decoration-2"></div>
        
        <h2 className="section-title">What Parents Are Saying</h2>
        <p className="section-subtitle">Hear from the families who are part of TheStudyWave community</p>
        
        <div 
          ref={reviewsContainerRef}
          className="reviews-container"
        >
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              {renderStars(review.stars)}
              <p className="review-text">{review.text}</p>
              <div className="reviewer">
                <div className="avatar">{review.avatar}</div>
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="reviewer-details">{review.details}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="navigation">
          <div className="nav-btn" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="nav-btn" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .reviews-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #1a73e8;
          font-weight: 700;
        }
        
        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          margin-bottom: 3rem;
          color: #5f6368;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .reviews-container {
          display: flex;
          overflow-x: auto;
          gap: 2rem;
          padding: 1.5rem 0.5rem;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .reviews-container::-webkit-scrollbar {
          display: none;
        }
        
        .review-card {
          flex: 0 0 auto;
          width: 350px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        
        .stars {
          color: #ffc107;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        
        .review-text {
          font-size: 1.1rem;
          color: #424242;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          font-style: italic;
          line-height: 1.7;
        }
        
        .reviewer {
          display: flex;
          align-items: center;
          margin-top: auto;
        }
        
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #1a73e8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          margin-right: 1rem;
        }
        
        .reviewer-info {
          display: flex;
          flex-direction: column;
        }
        
        .reviewer-name {
          font-weight: 600;
          color: #1a73e8;
        }
        
        .reviewer-details {
          font-size: 0.9rem;
          color: #5f6368;
        }
        
        .navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2.5rem;
        }
        
        .nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: white;
          border: 2px solid #1a73e8;
          color: #1a73e8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .nav-btn:hover {
          background: #1a73e8;
          color: white;
        }
        
        .section-decoration {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          z-index: 0;
        }
        
        .decoration-1 {
          width: 300px;
          height: 300px;
          background: #1a73e8;
          top: -150px;
          left: -150px;
        }
        
        .decoration-2 {
          width: 200px;
          height: 200px;
          background: #0f9d58;
          bottom: -100px;
          right: -100px;
        }
        
        @media (max-width: 768px) {
          .review-card {
            width: 300px;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .reviews-section {
            padding: 3rem 1rem;
          }
          
          .review-card {
            width: 280px;
            padding: 1.5rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};