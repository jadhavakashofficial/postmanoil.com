import { useState, useEffect, useRef } from 'react';

export default function HowOilIsMade() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: "Procurement of Seeds",
      icon: "🌱",
      accent: "from-orange-500 to-amber-500",
      image: "https://www.zettafarms.com/wp-content/uploads/2024/01/blog-3.jpg",
      detail: "We source only the highest quality, pesticide-free seeds from trusted local farmers who practice sustainable agriculture. Our rigorous selection process ensures only premium seeds with optimal oil content make it to production.",
      stats: "100% organic seeds | Traceable origin | Pesticide-free guarantee"
    },
    {
      id: 2,
      title: "Cleaning & Selection",
      icon: "✨",
      accent: "from-amber-500 to-yellow-500",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/1.png",
      detail: "Seeds undergo a meticulous 3-stage cleaning process. First, mechanical sieving removes large debris. Then, air classification eliminates dust and lightweight particles. Finally, hand-sorting ensures only perfect seeds proceed.",
      stats: "99.9% purity | Zero foreign matter | 3-stage verification"
    },
    {
      id: 3,
      title: "Seed Crushing",
      icon: "⚡",
      accent: "from-yellow-500 to-orange-500",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8333-scaled.jpg",
      detail: "Using traditional granite stone mills, we gently crush seeds at low RPM to prevent heat buildup. This ancient technique preserves delicate nutrients while preparing the seeds for oil extraction.",
      stats: "Low-temperature crushing | Nutrient preservation | 24-hour batch monitoring"
    },
    {
      id: 4,
      title: "Oil Extraction",
      icon: "💧",
      accent: "from-orange-500 to-red-500",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8326-scaled.jpg",
      detail: "Our cold-press extraction maintains temperatures below 40°C (104°F) throughout the process. This slow, pressure-controlled method ensures maximum nutrient retention and authentic flavor profile.",
      stats: "Temperature-controlled <40°C | Single-press extraction | No chemical solvents"
    },
    {
      id: 5,
      title: "Filtration",
      icon: "🔬",
      accent: "from-red-500 to-pink-500",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8244-scaled.jpg",
      detail: "Freshly pressed oil undergoes a natural sedimentation process followed by triple-layer filtration through food-grade cellulose, diatomaceous earth, and activated charcoal. This removes impurities while preserving nutrients.",
      stats: "3-stage filtration | 99.99% clarity | Natural sedimentation"
    },
    {
      id: 6,
      title: "Laboratory Testing",
      icon: "🧪",
      accent: "from-pink-500 to-red-500",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8516-scaled.jpg",
      detail: "Each batch is tested for 47 quality parameters including peroxide value, free fatty acids, and nutrient content. Our in-house lab and third-party verification ensure every bottle meets our strict standards.",
      stats: "47 quality parameters | Batch-specific reports | ISO-certified testing"
    },
    {
      id: 7,
      title: "Packaging",
      icon: "📦",
      accent: "from-red-500 to-orange-500",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8284-scaled.jpg",
      detail: "Oil is immediately bottled in UV-protected amber glass under nitrogen flushing to prevent oxidation. Each bottle is sealed with tamper-evident caps and labeled with harvest date and batch number.",
      stats: "Nitrogen-flushed | Light-protected bottles | Farm-to-bottle traceability"
    }
  ];

  const currentStep = steps.find(step => step.id === activeStep);

  const handleStepChange = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative background elements - subtle and clean */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-orange-200 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="https://postmanoil.com/wp-content/uploads/2025/06/Logo.png" 
              alt="Postman Oils Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-amber-600 bg-clip-text text-transparent">
              The Art of Pure Oil Creation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-orange-800 font-medium max-w-3xl mx-auto mb-6">
            Our meticulous <span className="font-semibold text-orange-600">7-step process</span> transforms premium seeds into liquid gold, preserving <span className="font-semibold text-amber-600">nature's goodness</span> in every drop
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-orange-600 via-red-500 to-amber-600 h-1.5 w-32 rounded-full"></div>
          </div>
        </div>

        {/* Timeline Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Our Production Journey</h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Horizontal */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 rounded-full"></div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeStep === step.id ? 'transform scale-105' : 'hover:transform hover:scale-102'
                  }`}
                  onClick={() => handleStepChange(step.id)}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.accent} border-4 border-white shadow-lg flex items-center justify-center ${
                      activeStep === step.id ? 'ring-4 ring-orange-300' : ''
                    }`}>
                      <span className="text-white font-bold text-sm">{step.id}</span>
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
                    activeStep === step.id 
                      ? 'border-orange-400 shadow-xl' 
                      : 'border-orange-100 hover:border-orange-300 hover:shadow-lg'
                  }`}>
                    {/* Image Container - Full visibility without cropping */}
                    <div className="relative h-40 bg-gradient-to-br from-orange-50 to-amber-50 p-2">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                      {/* Step Number Badge */}
                      <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.accent} flex items-center justify-center shadow-md`}>
                        <span className="text-white font-bold text-sm">{step.id}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.accent} flex items-center justify-center text-lg mr-3`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-orange-800 text-sm">{step.title}</h3>
                          <p className="text-orange-600 text-xs">Step {step.id}/7</p>
                        </div>
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="mt-3">
                        <div className="w-full bg-orange-100 rounded-full h-1.5">
                          <div 
                            className={`bg-gradient-to-r ${step.accent} h-1.5 rounded-full transition-all duration-300`}
                            style={{ width: activeStep === step.id ? '100%' : '30%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Detail Panel */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-200 overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/5 relative bg-gradient-to-br from-orange-50 to-amber-50 p-6">
              <div className="relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-gradient-to-r ${currentStep.accent} text-white mr-4 shadow-lg`}>
                      {currentStep.icon}
                    </div>
                    <div>
                      <span className="text-orange-300 font-medium text-sm">Step {currentStep.id}/7</span>
                      <h2 className="text-2xl font-bold text-white">{currentStep.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:w-3/5 p-6 lg:p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-0.5 bg-orange-500 mr-3"></div>
                  <span className="font-semibold text-orange-600 text-lg">Process Highlights</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {currentStep.detail}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-0.5 bg-orange-500 mr-3"></div>
                  <span className="font-semibold text-orange-600 text-lg">Quality Metrics</span>
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-5 rounded-xl border border-orange-200 shadow-inner">
                  <p className="text-orange-800 font-medium text-lg">{currentStep.stats}</p>
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeStep === 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  ← Previous
                </button>
                
                {/* Step Indicators */}
                <div className="flex space-x-2">
                  {steps.map(step => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        activeStep === step.id 
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 ring-2 ring-orange-300' 
                          : 'bg-orange-200 hover:bg-orange-300'
                      }`}
                      aria-label={`Go to step ${step.id}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={() => setActiveStep(prev => Math.min(prev + 1, 7))}
                  disabled={activeStep === 7}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeStep === 7 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Promise Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-200 shadow-xl">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full mb-6 text-xl font-bold shadow-lg">
              Our Quality Promise
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              Pure, Nutrient-Rich Oil Crafted with <span className="text-orange-600">Passion</span> & <span className="text-amber-600">Precision</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              From seed selection to bottling, every step of our process is designed to preserve the natural goodness of our oils. We never use chemicals, high heat, or shortcuts - just traditional methods perfected over generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl shadow-md border border-orange-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  🌿
                </div>
                <h4 className="font-bold text-xl text-orange-800 mb-3">100% Natural</h4>
                <p className="text-gray-700">No chemicals, additives, or preservatives - just pure oil as nature intended</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl shadow-md border border-orange-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  🔬
                </div>
                <h4 className="font-bold text-xl text-orange-800 mb-3">Lab Tested</h4>
                <p className="text-gray-700">Every batch undergoes rigorous testing for purity and nutritional content</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl shadow-md border border-orange-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  ♻️
                </div>
                <h4 className="font-bold text-xl text-orange-800 mb-3">Sustainable</h4>
                <p className="text-gray-700">Ethically sourced from farmers practicing sustainable agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}