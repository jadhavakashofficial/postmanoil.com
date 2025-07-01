import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function AboutUs() {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);
  
  // Handle video hover effect
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isVideoHovered]);

  const toggleMute = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const products = [
    {
      name: "Kacchi Ghani Mustard Oil",
      description: "Strong aroma, perfect for authentic Indian cooking",
      features: ["Cold Pressed", "Rich in Omega-3"],
      image: "https://postmanoil.com/wp-content/uploads/2025/05/3.png",
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Groundnut Filtered Oil",
      description: "Rich in taste, ideal for high-heat cooking",
      features: ["Wooden Pressed", "High Smoke Point"],
      image: "https://postmanoil.com/wp-content/uploads/2025/05/1.png",
      color: "from-amber-500 to-yellow-500"
    },
    {
      name: "Refined Groundnut Oil",
      description: "Light and neutral, great for daily use",
      features: ["Triple Refined", "Cholesterol Free"],
      image: "https://postmanoil.com/wp-content/uploads/2025/05/2.png",
      color: "from-yellow-500 to-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-xl"></div>
      </div>

      <Head>
        <title>About Us | Postman Oils</title>
        <meta name="description" content="Discover the legacy of Postman Oils - 55 years of purity, quality, and trust in every drop. Taste of Tradition, Trust of Generations." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.postmanoil.com/about-us" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-8">
        {/* Hero Section */}
        <div className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <Image 
              src="https://postmanoil.com/wp-content/uploads/2025/06/Logo.png" 
              alt="Postman Oils Logo" 
              width={200} 
              height={100} 
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Taste of Tradition, Trust of Generations
            </span>
          </h1>
          <p className="text-lg md:text-xl text-amber-800 font-medium max-w-3xl mx-auto">
            For over 55 years, Postman by Mittal Oil Mills has been a symbol of purity, quality, and trust in Indian households
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 h-1.5 w-32 rounded-full"></div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="pb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden">
            
            {/* Introduction Section */}
            <div className="p-6 md:p-8 border-b border-amber-100 bg-gradient-to-r from-orange-50 to-amber-50">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-orange-800 mb-4">Rooted in Heritage, Nurtured by Generations</h2>
                  <p className="text-gray-700 mb-4">
                    Rooted in the vibrant soil of Rajasthan and nurtured by generations, our journey began in the 1970s with a simple mission — to bring pure, traditional oils to every Indian kitchen. For over 55 years, Postman by Mittal Oil Mills (P) Ltd. has been a symbol of purity, quality, and trust in Indian households.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-xl p-5 border border-orange-200 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
                      <div className="text-5xl text-amber-600 mb-3">55+</div>
                      <div className="font-bold text-orange-800">Years of Excellence</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-xl p-5 border border-orange-200 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
                      <div className="text-5xl text-amber-600 mb-3">4</div>
                      <div className="font-bold text-orange-800">Generations of Expertise</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-xl p-5 border border-orange-200 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
                      <div className="text-5xl text-amber-600 mb-3">100%</div>
                      <div className="font-bold text-orange-800">Pure & Organic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Legacy Section */}
            <div className="p-6 md:p-8 border-b border-amber-100">
              <h2 className="text-2xl font-bold flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">2</span>
                </div>
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Our Legacy
                </span>
              </h2>
              
              <div className="mt-6 text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-4">
                      We are a family-run business spanning four generations, passionate about preserving the rich heritage of oil extraction. From the ancient Kolhu method to Wooden Cold Pressed techniques, our oils are crafted using time-tested processes that retain their natural aroma, flavor, and nutritional value.
                    </p>
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <p className="font-semibold text-orange-800">"We don't just make oils, we preserve traditions"</p>
                      <p className="mt-2 text-sm">- The Mittal Family, Fourth Generation Oil Masters</p>
                    </div>
                  </div>
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-amber-400"
                    onMouseEnter={() => setIsVideoHovered(true)}
                    onMouseLeave={() => setIsVideoHovered(false)}
                  >
                    <video
                      ref={videoRef}
                      className="w-full aspect-video object-cover"
                      muted={isVideoMuted}
                      loop
                      playsInline
                      poster="https://postmanoil.com/wp-content/uploads/2025/05/video-poster.jpg"
                    >
                      <source src="https://postmanoil.com/wp-content/uploads/2025/06/postman-oill_17-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button 
                      className="absolute bottom-3 right-3 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                      onClick={toggleMute}
                    >
                      {isVideoMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-3">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-orange-800">Ancient Kolhu Method</h3>
                    </div>
                    <p className="text-sm text-gray-700">Preserving centuries-old techniques for authentic oil extraction</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-3">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-orange-800">Wooden Cold Pressed</h3>
                    </div>
                    <p className="text-sm text-gray-700">Gentle extraction preserving nutrients and natural flavors</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-3">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-orange-800">Generational Wisdom</h3>
                    </div>
                    <p className="text-sm text-gray-700">Four generations of expertise passed down through family</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Makes Us Special Section */}
            <div className="p-6 md:p-8 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50">
              <h2 className="text-2xl font-bold flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">3</span>
                </div>
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  What Makes Us Special
                </span>
              </h2>
              
              <div className="mt-6 text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-800">100% Pure & Organic Oils</h3>
                        <p className="text-gray-700">No chemicals, no adulteration - just nature's goodness</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-800">Traditional Techniques</h3>
                        <p className="text-gray-700">Cold-pressed and wooden-pressed for authentic flavor and nutrition</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-800">Strict Quality Checks</h3>
                        <p className="text-gray-700">Every batch undergoes lab testing and triple filtration</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-800">Ethical Sourcing</h3>
                        <p className="text-gray-700">We source only the finest seeds directly from trusted farmers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-800">Modern, Hygienic Packaging</h3>
                        <p className="text-gray-700">Ensuring freshness and safety in every drop</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 border border-orange-200 shadow-inner">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-xl mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-orange-800">Quality Assurance Process</h3>
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-700 font-bold">1</span>
                      </div>
                      <div className="text-xs font-medium text-orange-700">Seed Selection</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-700 font-bold">2</span>
                      </div>
                      <div className="text-xs font-medium text-orange-700">Traditional Pressing</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-700 font-bold">3</span>
                      </div>
                      <div className="text-xs font-medium text-orange-700">Lab Testing</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <span className="text-orange-700 font-bold">4</span>
                      </div>
                      <div className="text-xs font-medium text-orange-700">Triple Filtration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Products Section */}
            <div className="p-6 md:p-8 border-b border-amber-100">
              <h2 className="text-2xl font-bold flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">4</span>
                </div>
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Our Products
                </span>
              </h2>
              
              <div className="mt-6 text-gray-700">
                <h3 className="text-xl font-bold text-orange-800 mb-6">Premium Edible Oils</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {products.map((product, index) => (
                    <div key={index} className="bg-gradient-to-b from-white to-amber-50 rounded-xl shadow-md border border-orange-100 overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
                      <div className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center p-4`}>
                        <div className="relative w-full h-full">
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            layout="fill"
                            objectFit="contain"
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="font-bold text-lg text-orange-800 mb-2">{product.name}</h4>
                        <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-amber-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-orange-800 mb-6">Livestock Supplements & Organic Fertilizers</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-orange-800">Mustard DOC</h4>
                    </div>
                    <p className="text-sm text-gray-700">High-protein supplement for livestock feed</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-orange-800">Groundnut Cake</h4>
                    </div>
                    <p className="text-sm text-gray-700">Nutrient-rich organic fertilizer for plants</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-orange-800">Mustard Cake</h4>
                    </div>
                    <p className="text-sm text-gray-700">Natural pest control and soil conditioner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Promise Section */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-orange-50 to-amber-50">
              <h2 className="text-2xl font-bold flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">5</span>
                </div>
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Our Promise
                </span>
              </h2>
              
              <div className="mt-6 text-gray-700">
                <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 border border-orange-300 shadow-inner">
                  <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-full mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">Purity You Can Taste, Trust You Can Feel</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                      At Postman, we believe in purity you can taste and trust you can feel. Every bottle we deliver is a promise of health, tradition, and uncompromised quality.
                    </p>
                  </div>
                  
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-5 bg-white rounded-xl shadow-sm border border-orange-100 transition-transform duration-300 hover:scale-[1.03]">
                      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-orange-800 mb-2">Health Commitment</h4>
                      <p className="text-sm text-gray-700">Pure oils for your family's well-being</p>
                    </div>
                    
                    <div className="text-center p-5 bg-white rounded-xl shadow-sm border border-orange-100 transition-transform duration-300 hover:scale-[1.03]">
                      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-orange-800 mb-2">Quality Guarantee</h4>
                      <p className="text-sm text-gray-700">Uncompromised standards in every drop</p>
                    </div>
                    
                    <div className="text-center p-5 bg-white rounded-xl shadow-sm border border-orange-100 transition-transform duration-300 hover:scale-[1.03]">
                      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-orange-800 mb-2">Sustainable Future</h4>
                      <p className="text-sm text-gray-700">Ethical practices for generations to come</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}