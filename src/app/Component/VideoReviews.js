"use client";
import React, { useRef } from 'react';

const VideoReviews = () => {
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
      videoSrc: "/Videos/vid1.mp4",
      stars: 5,
      text: "This platform completely changed the attitude of my son towards math. The lessons are very engaging!",
      name: "FATEMA",
      details: "Mother of AMMAR",
      country: "AUSTRALIA",
      flagSrc: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/flag-for-flag-australia-svgrepo-com.svg",
      initials: "F"
    },
    {
      id: 2,
      videoSrc: "/Videos/v2.mp4",
      stars: 4.5,
      text: "A safe and incredibly useful resource. I feel good about my son spending his study time here.",
      name: "TANIA CLAUDE",
      details: "Mother of DARIUS",
      country: "Florida, USA",
      flagSrc: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/flag-us-svgrepo-com.svg",
      initials: "TC"
    },
    {
      id: 3,
      videoSrc: "/Videos/vid3.mp4",
      stars: 5,
      text: "The progress reports are fantastic. Finally, I can actually see where my child is excelling .",
      name: "VISHWAJEET SINGH RAWAT",
      details: "Father of ELINA",
      country: "AUSTRALIA",
      flagSrc: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/flag-for-flag-australia-svgrepo-com.svg",
      initials: "VR"
    },
    {
      id: 4,
      videoSrc: "/Videos/vid4.mp4",
      stars: 5,
      text: "My son's confidence improved greatly; mentor explains clearly and inspires curiosity.",
      name: "NISHA BHARGAV",
      details: "Mother of ANSH",
      country: "AUSTRALIA",
      flagSrc: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/flag-for-flag-australia-svgrepo-com.svg",
      initials: "NB"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className="fas fa-star text-yellow-400"></i>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt text-yellow-400"></i>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>
      );
    }

    return stars;
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-10 -top-36 -left-36"></div>
      <div className="absolute w-48 h-48 bg-green-500 rounded-full opacity-10 -bottom-24 -right-24"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          What Parents Are Saying
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Hear from the families who are part of TheStudyWave community
        </p>
        
        <div 
          ref={reviewsContainerRef}
          className="flex overflow-x-auto gap-8 pb-6 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="flex-shrink-0 w-80">
              <div 
                className="flex flex-col bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
              >
                               {/* Video */}
                 <div className="mb-6 relative">
                                     <video 
                      className="w-full h-64 rounded-lg"
                      style={{ 
                        objectFit: 'contain',
                        backgroundColor: '#000'
                      }}
                      controls
                      preload="metadata"
                     onEnterPictureInPicture={(e) => {
                       // Add close button when entering PiP mode
                       const video = e.target;
                       const closeBtn = document.createElement('button');
                       closeBtn.innerHTML = '✕';
                                             closeBtn.style.cssText = `
                          position: absolute;
                          top: 10px;
                          left: 10px;
                          background: rgba(0, 0, 0, 0.8);
                          color: black;
                          border: none;
                          border-radius: 50%;
                          width: 30px;
                          height: 30px;
                          font-size: 16px;
                          cursor: pointer;
                          z-index: 1000;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          transition: all 0.3s ease;
                        `;
                        
                        // Add hover effect
                        closeBtn.addEventListener('mouseenter', () => {
                          closeBtn.style.background = 'rgba(220, 38, 38, 0.9)';
                          closeBtn.style.color = 'white';
                        });
                        
                        closeBtn.addEventListener('mouseleave', () => {
                          closeBtn.style.background = 'rgba(0, 0, 0, 0.8)';
                          closeBtn.style.color = 'black';
                        });
                       closeBtn.onclick = () => {
                         if (document.pictureInPictureElement) {
                           document.exitPictureInPicture();
                         }
                       };
                       video.parentElement.appendChild(closeBtn);
                     }}
                     onLeavePictureInPicture={(e) => {
                       // Remove close button when leaving PiP mode
                       const video = e.target;
                       const closeBtn = video.parentElement.querySelector('button');
                       if (closeBtn) {
                         closeBtn.remove();
                       }
                     }}
                   >
                     <source src={review.videoSrc} type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>
                 </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(review.stars)}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed h-32 overflow-hidden line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              
              {/* Reviewer Info */}
              <div className="flex items-center mt-4 p-4 bg-gray-100 rounded-b-2xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-blue-600">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.details}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <span>{review.country}</span>
                    <img 
                      src={review.flagSrc} 
                      alt={review.country}
                      className="w-4 h-3 object-cover rounded-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full bg-white border-2 border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-white border-2 border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default VideoReviews;
