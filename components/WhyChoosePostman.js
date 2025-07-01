export default function WhyChoosePostmanOil() {
  const features = [
    {
      id: 1,
      title: "100% NATURAL",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/1.png",
      gradient: "from-green-500 to-emerald-600",
      bgGlow: "from-green-100 to-emerald-100"
    },
    {
      id: 2,
      title: "WOODEN COLD-PRESSED",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/2.png",
      gradient: "from-amber-500 to-orange-600",
      bgGlow: "from-amber-100 to-orange-100"
    },
    {
      id: 3,
      title: "LAB-TESTED PURITY",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8500-scaled-e1751300136461.jpg",
      gradient: "from-blue-500 to-indigo-600",
      bgGlow: "from-blue-100 to-indigo-100"
    },
    {
      id: 4,
      title: "MADE IN INDIA",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/3.png",
      gradient: "from-orange-500 to-red-600",
      bgGlow: "from-orange-100 to-red-100"
    },
    {
      id: 5,
      title: "HEALTHY & PURE",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/5.png",
      gradient: "from-pink-500 to-rose-600",
      bgGlow: "from-pink-100 to-rose-100"
    },
    {
      id: 6,
      title: "AMAZING TASTE",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/4.png",
      gradient: "from-purple-500 to-violet-600",
      bgGlow: "from-purple-100 to-violet-100"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Simplified Background Elements for better performance */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-300 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 bg-clip-text text-transparent">
            Why Choose Postman Oil?
          </h2>
          <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto">
            Discover what makes our oil the <span className="text-red-600 font-bold">perfect choice</span> for your family's health and <span className="text-orange-600 font-bold">culinary excellence</span>
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Features Grid - Optimized for performance */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative bg-white/95 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl border border-white/60 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-[280px] lg:h-[320px] flex flex-col"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                animationDelay: `${index * 50}ms` // Reduced animation delay
              }}
            >
              {/* Simplified Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGlow} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

              {/* Image Container - Optimized for performance */}
              <div className="relative flex-1 p-4 lg:p-5">
                <div className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-full transition-transform duration-300 group-hover:scale-110 ${
                      feature.id === 3 
                        ? 'object-cover object-center' 
                        : 'object-contain p-2 lg:p-3'
                    }`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      transform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  
                  {/* Simplified corner effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Title - Optimized typography */}
              <div className="px-4 pb-5 lg:px-6 lg:pb-6 flex-shrink-0">
                <h3 className={`font-bold text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text text-center text-base lg:text-lg xl:text-xl leading-tight tracking-wide`}>
                  {feature.title}
                </h3>
              </div>

              {/* Bottom Accent - Simplified animation */}
              <div className={`h-1 lg:h-1.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center flex-shrink-0`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg font-medium">
            Experience the <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-bold">difference</span> that quality makes
          </p>
        </div>
      </div>
    </section>
  );
}