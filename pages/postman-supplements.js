import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function PremiumSupplements() {
  const [activeTab, setActiveTab] = useState('mustard-doc');
  
  const supplements = [
    {
      id: 'mustard-doc',
      name: "Mustard DOC",
      description: "A protein-rich feed supplement made from mustard seeds after oil extraction",
      benefits: [
        "Boosts livestock immunity",
        "Enhances growth and vitality",
        "Ideal for cattle and poultry"
      ],
      imageUrl: "https://postmanoil.com/wp-content/uploads/2025/05/IMG_8533-scaled.jpg",
      icon: "🐄"
    },
    {
      id: 'mustard-cake',
      name: "Mustard Cake",
      description: "A powerful dual-purpose supplement for soil and livestock",
      benefits: [
        "Works as a natural fertilizer to improve soil fertility",
        "Serves as a nutrient-rich animal feed",
        "100% organic and eco-friendly"
      ],
      imageUrl: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_8726-1-scaled.jpg",
      icon: "🌱"
    },
    {
      id: 'groundnut-cake',
      name: "Groundnut Cake",
      description: "High-energy feed extracted from cold-pressed groundnut oil production",
      benefits: [
        "Promotes weight gain and milk production",
        "Strengthens animal health",
        "Supports sustained livestock productivity"
      ],
      imageUrl: "https://postmanoil.com/wp-content/uploads/2025/06/IMG_6416-scaled.jpg",
      icon: "🥜"
    }
  ];

  const activeSupplement = supplements.find(sup => sup.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-lime-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-yellow-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-lime-200 rounded-full blur-3xl"></div>
      </div>
      
      <Head>
        <title>Premium Supplements | Postman Oils</title>
        <meta name="description" content="High-quality organic supplements for livestock and agriculture. 100% natural, chemical-free, and nutrient-rich." />
        <link rel="canonical" href="https://www.postmanoil.com/supplements" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <div className="py-12 md:py-16 text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="https://postmanoil.com/wp-content/uploads/2025/06/Logo.png" 
              alt="Postman Oils Logo" 
              width={180} 
              height={80} 
              className="object-contain"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Our Premium Supplements
            </span>
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 h-1.5 w-24 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-amber-800 max-w-3xl mx-auto mb-8">
            Powering Livestock. Enriching Soil.
          </p>
          
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            At Postman, our commitment to purity and wellness goes beyond cooking oils. We proudly offer a range of high-quality, organic supplements for livestock and agriculture.
          </p>
        </div>

        {/* Content Sections */}
        <div className="pb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
            {/* Intro Section */}
            <div className="p-6 md:p-8 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-amber-800 mb-4">100% Natural, Chemical-Free & Nutrient-Rich</h2>
                  <p className="text-gray-700">
                    Crafted from the by-products of our oil extraction process, our supplements are 100% natural, chemical-free, and nutrient-rich. They're farmer-trusted for decades and proven to deliver results in cattle health and farming yield.
                  </p>
                </div>
              </div>
            </div>

            {/* Products Tabs */}
            <div className="p-6 md:p-8 border-b border-amber-100">
              <div className="flex flex-wrap gap-2 mb-8">
                {supplements.map((sup) => (
                  <button
                    key={sup.id}
                    onClick={() => setActiveTab(sup.id)}
                    className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === sup.id
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg'
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    }`}
                  >
                    <span className="mr-2 text-lg">{sup.icon}</span>
                    {sup.name}
                  </button>
                ))}
              </div>

              {/* Active Product Detail */}
              {activeSupplement && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-amber-300">
                    <Image
                      src={activeSupplement.imageUrl}
                      alt={activeSupplement.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-3">{activeSupplement.icon}</span>
                      <h2 className="text-3xl font-bold text-amber-800">{activeSupplement.name}</h2>
                    </div>
                    
                    <p className="text-lg text-amber-700 mb-6">{activeSupplement.description}</p>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-amber-800">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {activeSupplement.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="bg-amber-100 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-5 border border-amber-200">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3 rounded-xl mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-amber-800">Quality Assurance</h3>
                      </div>
                      <p className="mt-3 text-gray-700">
                        All our supplements undergo rigorous lab testing to ensure purity and nutritional value. We maintain strict quality control from production to packaging.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Why Choose Section */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-amber-50 to-yellow-50">
              <h2 className="text-2xl font-bold flex items-center mb-8">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">✓</span>
                </div>
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Why Choose Postman Supplements?
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-200 shadow-lg transition-transform duration-300 hover:scale-[1.03]">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full w-14 h-14 flex items-center justify-center mb-5 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center text-amber-800 mb-3">Pure & Organic</h3>
                  <p className="text-center text-gray-700">
                    Made from 100% natural by-products of oil extraction with no chemicals or additives.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-200 shadow-lg transition-transform duration-300 hover:scale-[1.03]">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full w-14 h-14 flex items-center justify-center mb-5 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center text-amber-800 mb-3">Lab-Tested</h3>
                  <p className="text-center text-gray-700">
                    Every batch undergoes rigorous testing to ensure quality and nutritional value.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-200 shadow-lg transition-transform duration-300 hover:scale-[1.03]">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full w-14 h-14 flex items-center justify-center mb-5 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center text-amber-800 mb-3">Farmer-Trusted</h3>
                  <p className="text-center text-gray-700">
                    Decades of proven results in enhancing livestock health and soil fertility.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-200 shadow-lg transition-transform duration-300 hover:scale-[1.03]">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full w-14 h-14 flex items-center justify-center mb-5 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center text-amber-800 mb-3">Proven Results</h3>
                  <p className="text-center text-gray-700">
                    Significant improvements in milk production, weight gain, and crop yields.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="p-6 md:p-8 border-t border-amber-100 bg-white">
              <h2 className="text-2xl font-bold text-center text-amber-800 mb-8">
                Trusted by Farmers Nationwide
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center text-amber-800 font-bold mr-3">
                      RK
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800">Rajesh Kumar</h4>
                      <p className="text-sm text-amber-600">Dairy Farmer, Rajasthan</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Since switching to Postman Mustard DOC, my cattle's health has improved dramatically. Milk production increased by 15% in just two months!"
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center text-amber-800 font-bold mr-3">
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800">Priya Sharma</h4>
                      <p className="text-sm text-amber-600">Organic Farmer, Punjab</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Postman Mustard Cake transformed my soil quality. My wheat yield increased by 20% without using chemical fertilizers."
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center text-amber-800 font-bold mr-3">
                      VM
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800">Vikram Mehta</h4>
                      <p className="text-sm text-amber-600">Poultry Farm Owner, Haryana</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Groundnut Cake from Postman has significantly improved weight gain in my chickens. The quality is unmatched!"
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            
              </div>
            </div>
          </div>
        </div>
    
  );
}