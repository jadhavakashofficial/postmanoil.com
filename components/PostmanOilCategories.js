// components/PostmanOilCategories.js
import Link from "next/link";

export default function PostmanOilCategories() {
  const categories = [
    {
      id: 1,
      title: "Kacchi Ghani Mustard Oil",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/1.png",
      link: "/mustard-oil"
    },
    {
      id: 2,
      title: "Groundnut Filtered Oil", 
      image: "https://postmanoil.com/wp-content/uploads/2025/05/2.png",
      link: "/groundnut-oil"
    },
    {
      id: 3,
      title: "Refined Groundnut Oil",
      image: "https://postmanoil.com/wp-content/uploads/2025/05/3.png",
      link: "/refined-groundnut-oil"
    }
  ];

  // Component for individual category card
  const CategoryCard = ({ category }) => (
    <Link 
      href={category.link}
      className="group block"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-orange-100 relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/5 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Image Container with fixed aspect ratio and overflow hidden */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 relative z-10 overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        {/* Title */}
        <div className="p-3 sm:p-5 text-center bg-gradient-to-r from-orange-500 to-red-500 relative z-10">
          <h3 className="text-sm sm:text-xl font-bold text-white group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-md">
            {category.title}
          </h3>
        </div>
        
        {/* Modern accent */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </div>
    </Link>
  );

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Postman Oil Categories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* T-Format Layout */}
        <div className="space-y-6">
          {/* Top Row - First Two Categories */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            {categories.slice(0, 2).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Bottom Row - Third Category Centered with Same Width */}
          <div className="flex justify-center">
            <div className="w-1/2 px-[6px] sm:px-3 lg:px-4">
              <CategoryCard category={categories[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}