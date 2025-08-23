"use client";

import React, { useRef } from "react";

export const VideoReviewsSection = () => {
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
      avatar: "F",
      videoUrl: "/Videos/vid1.mp4"
    },
    {
      id: 2,
      stars: 4.5,
      text: "A safe and incredibly useful resource. I feel good about my daughter spending her study time here.",
      name: "TANIA CLAUDE",
      details: "Mother of DARIUS\nFlorida, USA",
      avatar: "TC",
      videoUrl: "/Videos/v2.mp4"
    },
    {
      id: 3,
      stars: 5,
      text: "The progress reports are fantastic. Finally, I can actually see where my child is excelling .",
      name: "VISHWAJEET SINGH RAWAT",
      details: "Father of ELINA \n AUSTRALIA",
      avatar: "VR",
      videoUrl: "/Videos/vid3.mp4"
    },
    {
      id: 4,
      stars: 5,
      text: "My daughter went from struggling with science to winning her school science fair! TheStudyWave made learning fun.",
      name: "NISHA BHARGAV",
      details: "Mother of ANSH \n AUSTRALIA",
      avatar: "NB",
      videoUrl: "/Videos/vid4.mp4"
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex text-yellow-400 text-xl mb-4">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
        {hasHalfStar && <span>☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute w-72 h-72 bg-blue-600 rounded-full opacity-10 -top-36 -left-36"></div>
      <div className="absolute w-48 h-48 bg-green-500 rounded-full opacity-10 -bottom-24 -right-24"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">
          What Parents Are Saying
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Hear from the families who are part of TheStudyWave community
        </p>
        
        <div 
          ref={reviewsContainerRef}
          className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="flex-none w-80 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Video Section */}
              <div className="mb-4">
                <video 
                  className="w-full h-64 rounded-lg object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={review.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {renderStars(review.stars)}
              
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed flex-grow">
                &ldquo;{review.text}&rdquo;
              </p>
              
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-blue-600">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.details}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-10">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            ←
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
