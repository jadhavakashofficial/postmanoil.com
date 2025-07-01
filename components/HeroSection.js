import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "https://postmanoil.com/wp-content/uploads/2025/05/1.png",
      alt: "Postman Kachi Ghani Mustard Oil - Premium Quality"
    },
    {
      id: 2,
      image: "https://postmanoil.com/wp-content/uploads/2025/05/2.png", 
      alt: "Postman Oil Categories - Complete Range"
    },
    {
      id: 3,
      image: "https://postmanoil.com/wp-content/uploads/2025/05/3.png",
      alt: "Postman Pure Oil Products - Traditional Quality"
    }
  ];

  // Optimized auto-slide with longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Increased from 4000ms for better performance

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Carousel Container with optimized performance */}
      <div className="relative w-full">
        {/* Slides with hardware acceleration */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-auto block"
                loading={index === 0 ? "eager" : "lazy"} // Eager load first image
                decoding="async"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  transform: 'translate3d(0, 0, 0)' // Force GPU acceleration
                }}
              />
            </div>
          ))}
        </div>

        {/* Optimized Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 p-2 sm:p-3 rounded-full shadow-md transition-all duration-200 hover:scale-105 z-10"
          aria-label="Previous slide"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 p-2 sm:p-3 rounded-full shadow-md transition-all duration-200 hover:scale-105 z-10"
          aria-label="Next slide"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Optimized Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                currentSlide === index 
                  ? 'bg-orange-500 shadow-lg scale-110' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            />
          ))}
        </div>
      </div>

      {/* SEO Content */}
      <div className="sr-only">
        <h1>Postman Oils - Premium Quality Cooking Oils</h1>
        <p>Kachi Ghani Mustard Oil, Pure Groundnut Oil, and Refined Oils from Postman Brand.</p>
      </div>
    </section>
  );
}