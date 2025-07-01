import { useState, useEffect, useRef } from 'react';

export default function CustomerReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sliderRef = useRef(null);
  const videoRefs = useRef({});

  const reviews = [
    {
      id: 1,
      videoUrl: 'https://postmanoil.com/wp-content/uploads/2025/06/postman-oill_17-1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face',
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Postman Oil has transformed our cooking! The purity and taste are exceptional. My grandmother always said good oil makes good food, and this proves it.',
      duration: '2:15'
    },
    {
      id: 2,
      videoUrl: 'https://postmanoil.com/wp-content/uploads/2025/06/postman-oill_17-1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      rating: 5,
      text: 'I have been using Postman mustard oil for over 3 years now. The cold-pressed method preserves all nutrients. My family\'s health has improved significantly.',
      duration: '1:30'
    },
    {
      id: 3,
      videoUrl: 'https://postmanoil.com/wp-content/uploads/2025/06/postman-oill_17-1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face',
      name: 'Meera Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'Traditional methods, modern quality! This oil reminds me of the pure oil my mother used. Perfect for authentic Indian cooking.',
      duration: '1:45'
    },
    {
      id: 4,
      videoUrl: 'https://postmanoil.com/wp-content/uploads/2025/06/postman-oill_17-1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
      name: 'Amit Singh',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      text: 'Outstanding quality! The lab testing gives me confidence in the purity. My children love the taste, and I love knowing they\'re getting the best nutrition.',
      duration: '2:05'
    },
    {
      id: 5,
      videoUrl: 'https://postmanoil.com/wp-content/uploads/2025/06/postman-oill_17-1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face',
      name: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: 'Best investment for family health! The wooden cold-pressed method makes all the difference. Highly recommend to every household.',
      duration: '1:20'
    },
    {
      id: 6,
      videoUrl: 'https://postmanoil.com/wp-content/uploads/2025/06/postman-oill_17-1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face',
      name: 'Kavya Iyer',
      location: 'Bangalore, Karnataka',
      rating: 5,
      text: 'Authentic taste and supreme quality! This is exactly what traditional Indian cooking needs. 100% satisfied with every drop.',
      duration: '3:20'
    }
  ];

  // Optimized auto-play with longer interval for better performance
  useEffect(() => {
    if (isAutoPlaying && hoveredCard === null) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % Math.ceil(reviews.length / 3));
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, reviews.length, hoveredCard]);

  // Handle video play/pause on hover with audio
  const handleCardHover = (reviewId) => {
    setHoveredCard(reviewId);
    setIsAutoPlaying(false);
    
    const video = videoRefs.current[reviewId];
    if (video) {
      video.currentTime = 0;
      video.muted = false; // Enable sound on hover
      video.play().catch(e => console.log('Video play failed:', e));
    }
  };

  const handleCardLeave = (reviewId) => {
    setHoveredCard(null);
    setIsAutoPlaying(true);
    
    const video = videoRefs.current[reviewId];
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true; // Mute when stopped
    }
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(reviews.length / 3));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const totalSlides = Math.ceil(reviews.length / 3);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-300 to-red-300 rounded-full animate-pulse"
          style={{ filter: 'blur(12px)' }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse" 
          style={{ 
            filter: 'blur(12px)',
            animationDelay: '2s'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our <span className="text-amber-600">Customers Say</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied families who trust Postman Oil for authentic, healthy cooking
          </p>
        </div>

        {/* Enhanced Reviews Slider */}
        <div className="relative" ref={sliderRef}>
          {/* Main Slider Container with hardware acceleration */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {reviews.slice(slideIndex * 3, slideIndex * 3 + 3).map((review) => (
                      <div 
                        key={review.id} 
                        className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl border-2 border-orange-100 hover:border-orange-200 transition-all duration-500 overflow-hidden flex flex-col"
                        style={{
                          willChange: 'transform',
                          backfaceVisibility: 'hidden',
                          transform: 'translate3d(0, 0, 0)',
                          height: '520px' // Fixed height for consistent card sizes
                        }}
                        onMouseEnter={() => handleCardHover(review.id)}
                        onMouseLeave={() => handleCardLeave(review.id)}
                      >
                        {/* Enhanced Video Container with custom thumbnail */}
                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
                          
                          {/* Custom Static Thumbnail - Always visible when not playing */}
                          {hoveredCard !== review.id && (
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 flex flex-col items-center justify-center">
                              {/* Postman Oil Branding */}
                              <div className="text-center mb-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-3 shadow-xl mx-auto">
                                  <span className="text-white font-black text-2xl">P</span>
                                </div>
                                <h3 className="text-orange-800 font-bold text-lg mb-1">Postman Oil</h3>
                                <p className="text-orange-700 text-sm font-medium">Customer Review</p>
                              </div>
                              
                              {/* User Info Preview */}
                              <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mx-auto mb-2">
                                  {review.name.charAt(0)}
                                </div>
                                <p className="text-orange-800 font-semibold text-sm">{review.name}</p>
                                <p className="text-orange-600 text-xs">{review.location}</p>
                              </div>
                              
                              {/* Decorative Elements */}
                              <div className="absolute top-4 left-4 w-8 h-8 bg-orange-300 rounded-full opacity-60"></div>
                              <div className="absolute bottom-4 right-4 w-6 h-6 bg-amber-300 rounded-full opacity-60"></div>
                              <div className="absolute top-1/2 left-6 w-4 h-4 bg-yellow-300 rounded-full opacity-40"></div>
                            </div>
                          )}
                          
                          {/* Video Element - Only visible when hovering */}
                          <video
                            ref={el => videoRefs.current[review.id] = el}
                            src={review.videoUrl}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hoveredCard === review.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                            muted={hoveredCard !== review.id}
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                              transform: 'translate3d(0, 0, 0)',
                              backfaceVisibility: 'hidden'
                            }}
                          />
                          
                          {/* Play Button Overlay - Only show when not hovered */}
                          {hoveredCard !== review.id && (
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 cursor-pointer border-4 border-white/30 backdrop-blur-sm">
                                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                            </div>
                          )}
                          
                          {/* Duration Badge */}
                          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20">
                            {review.duration}
                          </div>

                          {/* Video Playing Indicator with Sound Icon */}
                          {hoveredCard === review.id && (
                            <div className="absolute top-4 left-4 bg-red-600 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 border border-white/20">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <span>PLAYING</span>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                              </svg>
                            </div>
                          )}

                          {/* Hover to Play Instruction */}
                          {hoveredCard !== review.id && (
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-orange-200">
                              <span className="flex items-center space-x-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                                <span>Hover to play with sound</span>
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content with improved spacing */}
                        <div className="p-6 flex flex-col flex-grow">
                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            {renderStars(review.rating)}
                            <span className="ml-2 text-sm text-gray-600 font-semibold">({review.rating}.0)</span>
                          </div>

                          {/* Review Text */}
                          <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow line-clamp-4">
                            "{review.text}"
                          </p>

                          {/* Reviewer Info with enhanced design */}
                          <div className="flex items-center space-x-4 mt-auto pt-4 border-t-2 border-orange-100">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {review.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-gray-900 truncate text-lg">{review.name}</h4>
                              <p className="text-gray-600 text-sm truncate flex items-center">
                                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {review.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Bottom Accent */}
                        <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-700 hover:text-orange-600 z-20 border-2 border-orange-100 hover:border-orange-300"
            aria-label="Previous reviews"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-700 hover:text-orange-600 z-20 border-2 border-orange-100 hover:border-orange-300"
            aria-label="Next reviews"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full border-2 ${
                currentSlide === index 
                  ? 'w-12 h-4 bg-gradient-to-r from-orange-500 to-red-500 border-orange-500 shadow-lg' 
                  : 'w-4 h-4 bg-white border-gray-300 hover:border-orange-400 hover:bg-orange-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            />
          ))}
        </div>

        {/* Enhanced Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 text-center relative z-10">
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">10,000+</div>
              <div className="text-sm opacity-90 font-semibold tracking-wide">Happy Families</div>
            </div>
            <div className="group cursor-default border-x border-white/20">
              <div className="text-3xl md:text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
              <div className="text-sm opacity-90 font-semibold tracking-wide">Average Rating</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm opacity-90 font-semibold tracking-wide">Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}