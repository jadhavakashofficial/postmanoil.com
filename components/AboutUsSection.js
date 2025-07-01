export default function YearsOfTrust() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Simplified Background Elements for better performance */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-300 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Main Heading */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">55+ Years of Trust</span>
                <span className="text-gray-800 block mt-1">Purity Rooted in Tradition</span>
              </h2>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-5 text-base md:text-lg leading-relaxed">
              <p className="text-gray-700">
                For over <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold text-lg md:text-xl">55 years</span>, Postman by Mittal Group has been the hallmark of <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent font-semibold">purity and tradition</span> in Indian kitchens. A <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-semibold">fourth-generation family business</span> rooted in Rajasthan, we meld time-honored "Kolhu" pressing, wooden extraction, and cold-press techniques with modern quality controls.
              </p>
              
              <p className="text-gray-700">
                From ethically sourcing the finest seeds directly from farmers to traditional stone crushing and low-heat expeller pressing, each drop is <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold text-lg md:text-xl">100% pure, organic, and chemical-free</span>. Our triple-filtration and in-house lab testing guarantee crystal-clear clarity, nutrient retention, and a luscious flavor profile.
              </p>
            </div>

            {/* Know More Button */}
            <div className="pt-4">
              <a 
                href="#know-more" 
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 hover:from-orange-700 hover:via-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 font-bold text-base"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              >
                <span>Know More About Our Legacy</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section with optimized animations */}
          <div className="order-1 lg:order-2 relative max-w-md mx-auto lg:max-w-lg">
            <div className="relative group">
              {/* Image Container with simplified styling */}
              <div 
                className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/40 bg-white/10"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              >
                <img
                  src="https://postmanoil.com/wp-content/uploads/2025/05/Postman.png"
                  alt="Postman Oil - 55+ Years of Trust and Tradition"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                  loading="lazy"
                  decoding="async"
                  style={{
                    transform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
                
                {/* Simplified Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Simplified Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Trust Badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1.5 rounded-full shadow-lg font-bold text-xs">
                <span className="flex items-center space-x-1">
                  <span>✨</span>
                  <span>55+ Years</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}