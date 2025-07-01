export default function FeaturedProducts() {
  const products = [
    // Row 1 - Kacchi Ghani Mustard Oil
    {
      id: 1,
      name: "Kacchi Ghani Mustard Oil 1Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/1-1-580x580.png",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
      shadow: "shadow-amber-500/30",
      bgGlow: "from-amber-100 to-yellow-100"
    },
    {
      id: 2,
      name: "Kacchi Ghani Mustard Oil 5Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/61pg1v3I9zL._SL1080_-580x580.jpg",
      gradient: "from-orange-400 via-red-500 to-pink-500",
      shadow: "shadow-orange-500/30",
      bgGlow: "from-orange-100 to-red-100"
    },
    {
      id: 3,
      name: "Kacchi Ghani Mustard Oil 15Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/61rmnbqnBQL._SL1100_-580x580.jpg",
      gradient: "from-red-400 via-pink-500 to-rose-500",
      shadow: "shadow-red-500/30",
      bgGlow: "from-red-100 to-pink-100"
    },
    // Row 2 - Groundnut Filter Oil
    {
      id: 4,
      name: "Groundnut Filter Oil 1Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/61htcRuz9NL._SL1500_-580x580.jpg",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      shadow: "shadow-emerald-500/30",
      bgGlow: "from-emerald-100 to-teal-100"
    },
    {
      id: 5,
      name: "Groundnut Filtered Oil 5 Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/516TDqUwbL._SL1080_-580x580.jpg",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500",
      shadow: "shadow-cyan-500/30",
      bgGlow: "from-cyan-100 to-blue-100"
    },
    {
      id: 6,
      name: "Groundnut Filtered Oil 15Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/Untitled-18-1-scaled-e1750371753802-800x800.png",
      gradient: "from-blue-400 via-indigo-500 to-purple-500",
      shadow: "shadow-blue-500/30",
      bgGlow: "from-blue-100 to-indigo-100"
    },
    // Row 3 - Refined Groundnut Oil
    {
      id: 7,
      name: "Refined Groundnut Oil 1Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/61rbdNGSMKL._SL1500_-580x580.jpg",
      gradient: "from-purple-400 via-violet-500 to-fuchsia-500",
      shadow: "shadow-purple-500/30",
      bgGlow: "from-purple-100 to-violet-100"
    },
    {
      id: 8,
      name: "Refined Groundnut Oil 5Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/06/Screenshot-2025-06-20-at-3.41.07%E2%80%AFAM.png",
      gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
      shadow: "shadow-fuchsia-500/30",
      bgGlow: "from-fuchsia-100 to-pink-100"
    },
    {
      id: 9,
      name: "Refined Groundnut Oil 15Ltr",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/61ZEP9YlrRL._SL1100_-580x580.jpg",
      gradient: "from-rose-400 via-pink-500 to-red-500",
      shadow: "shadow-rose-500/30",
      bgGlow: "from-rose-100 to-red-100"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-lime-50 via-white to-lime-100/40 relative overflow-hidden">
      {/* Simplified Background Elements for better performance */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lime-300 rounded-full" style={{ filter: 'blur(8px)' }}></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-emerald-200 rounded-full" style={{ filter: 'blur(8px)' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-200 rounded-full" style={{ filter: 'blur(8px)' }}></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-lime-300 rounded-full" style={{ filter: 'blur(8px)' }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-36 h-36 bg-emerald-200 rounded-full" style={{ filter: 'blur(8px)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-3">
            Featured <span className="text-transparent bg-gradient-to-r from-red-600 via-red-500 to-rose-600 bg-clip-text">Postman</span> <span className="text-transparent bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text">Products</span>
          </h2>
          <p className="text-gray-700 text-base font-medium">
            Discover our premium collection of <span className="text-transparent bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text font-semibold">pure, natural oils</span> crafted with traditional methods for <span className="text-transparent bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text font-semibold">exceptional quality</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-red-400 to-rose-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Products Grid - 3x3 with optimized performance */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <a 
              key={product.id}
              href={product.link}
              className="group relative bg-white/95 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl border border-white/80 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              {/* Simplified Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGlow} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Image Container with optimized performance */}
              <div className="relative p-3 sm:p-4 lg:p-6">
                <div className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    style={{
                      transform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-600"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-2 sm:p-4 lg:p-5 pt-0">
                <h3 className="font-bold text-transparent bg-gradient-to-r from-red-600 via-red-500 to-rose-600 bg-clip-text text-sm sm:text-base lg:text-lg text-center leading-tight group-hover:from-red-500 group-hover:to-rose-500 transition-all duration-300">
                  {product.name}
                </h3>
              </div>

              {/* Enhanced Bottom Accent */}
              <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${product.gradient} transform scale-x-90 group-hover:scale-x-100 transition-transform duration-300`}></div>
              
              {/* Professional corner indicator */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}