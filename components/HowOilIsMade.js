export default function HowOilIsMade() {
  const steps = [
    {
      id: 1,
      title: "Procurement of Seeds",
      image: "https://www.zettafarms.com/wp-content/uploads/2024/01/blog-3.jpg",
      description: "Sourcing premium, pesticide-free seeds directly from trusted farmers",
      icon: "🌱",
      gradient: "from-emerald-500 to-teal-600",
      titleColor: "from-emerald-700 to-teal-800"
    },
    {
      id: 2,
      title: "Cleaning & Selection",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/1.png",
      description: "Thorough cleaning and hand-sorting to remove all impurities",
      icon: "✨",
      gradient: "from-blue-500 to-cyan-600",
      titleColor: "from-blue-700 to-cyan-800"
    },
    {
      id: 3,
      title: "Seed Crushing",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8333-scaled.jpg",
      description: "Traditional stone mills gently crush seeds to preserve nutrients",
      icon: "⚡",
      gradient: "from-purple-500 to-indigo-600",
      titleColor: "from-purple-700 to-indigo-800"
    },
    {
      id: 4,
      title: "Oil Extraction",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8326-scaled.jpg",
      description: "Cold-press extraction below 40°C to preserve nutrients",
      icon: "💧",
      gradient: "from-orange-500 to-red-600",
      titleColor: "from-orange-700 to-red-800"
    },
    {
      id: 5,
      title: "Filtration",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8244-scaled.jpg",
      description: "Multi-stage purification process for crystal-clear oil",
      icon: "🔬",
      gradient: "from-pink-500 to-rose-600",
      titleColor: "from-pink-700 to-rose-800"
    },
    {
      id: 6,
      title: "Laboratory Testing",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8516-scaled.jpg",
      description: "Rigorous quality control to ensure purity and freshness",
      icon: "🧪",
      gradient: "from-yellow-500 to-amber-600",
      titleColor: "from-yellow-700 to-amber-800"
    },
    {
      id: 7,
      title: "Packaging",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8284-scaled.jpg",
      description: "Nitrogen-flushed bottles sealed for freshness",
      icon: "📦",
      gradient: "from-green-500 to-emerald-600",
      titleColor: "from-green-700 to-emerald-800"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden" itemScope itemType="https://schema.org/Process">
      {/* Simplified Background for better performance */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 bg-violet-400 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-emerald-400 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with optimized typography */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 bg-clip-text text-transparent" itemProp="name">
            How Postman Oil Is Made
          </h1>
          <p className="text-gray-700 text-xl font-medium max-w-3xl mx-auto" itemProp="description">
            Our meticulous <span className="text-red-600 font-bold">7-step process</span> ensures every drop meets the highest standards of <span className="text-orange-600 font-bold">purity and quality</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Unified Grid for Consistent Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.slice(0, 4).map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* Centered Second Row */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
            {steps.slice(4, 7).map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>

        {/* Optimized CTA Button */}
        <div className="text-center mt-14">
          <button 
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 hover:from-red-700 hover:via-orange-600 hover:to-pink-700 text-white px-8 py-3.5 rounded-full shadow-xl hover:shadow-red-500/30 transform transition-all duration-300 ring-2 ring-white/40 font-bold text-base tracking-wide"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            <span>Know More About Our Process</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// Optimized Card Component for better performance
function StepCard({ step }) {
  return (
    <article 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-white/40 overflow-hidden flex flex-col h-full"
      itemScope 
      itemType="https://schema.org/HowToStep"
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Step Number */}
      <div className={`absolute top-3 left-3 z-20 w-9 h-9 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-md ring-1 ring-white/50`}>
        <span className="text-white font-bold text-xs" itemProp="position">{step.id}</span>
      </div>

      {/* Image Container with optimized performance */}
      <div className="relative h-36 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={step.image}
          alt={`Step ${step.id}: ${step.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          itemProp="image"
          loading="lazy"
          decoding="async"
          style={{
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden'
          }}
        />
        
        {/* Simplified Image Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {/* Icon */}
        <div className="absolute bottom-2 right-2 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
          <span className="text-lg">{step.icon}</span>
        </div>
      </div>

      {/* Content - Compact Spacing */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className={`font-bold text-transparent bg-gradient-to-r ${step.titleColor} bg-clip-text mb-1.5 text-base`} itemProp="name">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm leading-snug mb-3" itemProp="text">
          {step.description}
        </p>
      </div>

      {/* Simplified Bottom Accent */}
      <div className={`h-1 bg-gradient-to-r ${step.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
    </article>
  );
}