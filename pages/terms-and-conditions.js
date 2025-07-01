import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  
  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > headerRef.current.offsetHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };
  
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    { id: 1, title: "Introduction", icon: "📜" },
    { id: 2, title: "Website Use", icon: "💻" },
    { id: 3, title: "Dealer/Distributor", icon: "🤝" },
    { id: 4, title: "Product Info", icon: "🛒" },
    { id: 5, title: "Pricing", icon: "💰" },
    { id: 6, title: "Intellectual Property", icon: "©️" },
    { id: 7, title: "Liability", icon: "⚖️" },
    { id: 8, title: "External Links", icon: "🔗" },
    { id: 9, title: "User Submissions", icon: "📝" },
    { id: 10, title: "Termination", icon: "⛔" },
    { id: 11, title: "Governing Law", icon: "🌐" },
    { id: 12, title: "Disclaimer", icon: "⚠️" },
    { id: 13, title: "Contact", icon: "📞" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-300 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-sm"></div>
      </div>

      <Head>
        <title>Terms & Conditions | Postman Oils</title>
        <meta name="description" content="Read the terms and conditions for using the Postman Oils website, operated by Mittal Oil Mills (Pvt.) Ltd." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.postmanoil.com/terms" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-6">
        {/* Compact Hero Section */}
        <div 
          ref={headerRef}
          className={`text-center transition-all duration-300 ${isSticky ? 'pt-4 pb-4' : 'pt-8 pb-8'}`}
        >
          <h1 className={`text-3xl md:text-4xl font-black mb-3 transition-all duration-300 ${isSticky ? 'text-2xl' : ''}`}>
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-sm md:text-base text-amber-700 font-medium">Last Updated: May 9, 2025</p>
          <div className="mt-4 flex justify-center">
            <div className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 h-1.5 w-20 rounded-full"></div>
          </div>
        </div>

        {/* Sticky Navigation */}
        <div 
          className={`sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-lg rounded-xl mb-8 transition-all duration-300 ${
            isSticky ? 'py-3 px-4 mt-0' : 'py-4 px-6 mt-6'
          }`}
        >
          <div className="flex overflow-x-auto hide-scrollbar pb-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(`section-${section.id}`)}
                className={`flex flex-col items-center min-w-max px-4 py-2 rounded-lg mx-1 transition-all duration-200 ${
                  activeSection === `section-${section.id}` 
                    ? 'bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300 shadow-inner' 
                    : 'bg-white border border-orange-100 hover:bg-orange-50'
                }`}
              >
                <span className="text-lg mb-1">{section.icon}</span>
                <span className="text-xs md:text-sm font-medium text-orange-800">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="pb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden">
            {/* Introduction */}
            <div className="p-6 md:p-8 border-b border-amber-100 bg-gradient-to-r from-orange-50 to-amber-50">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    Welcome to Postman Oils (www.postmanoil.com), a website operated by Mittal Oil Mills (Pvt.) Ltd.. By accessing or using our website, you agree to comply with the terms and conditions outlined below.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <p className="text-red-700 font-semibold flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      If you do not agree with any of these terms, please do not use this website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="divide-y divide-amber-100">
              {/* Section 1 */}
              <div className="p-6 md:p-8" id="section-1">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(1)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">1</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Introduction
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 1 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 1 ? 'block' : 'hidden md:block'}`}>
                  <p>
                    These Terms and Conditions govern your use of the Postman Oils website, including all pages, features, and services. By using this site, you accept all terms outlined here, along with our Privacy Policy.
                  </p>
                  <p className="mt-3 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-400">
                    We reserve the right to update these terms at any time. Continued use of the site means you accept those changes.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="p-6 md:p-8" id="section-2">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(2)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">2</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Website Use
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 2 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 2 ? 'block' : 'hidden md:block'}`}>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                      <span>This website is intended for informational purposes only.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                      <span>You agree not to use this website for any unlawful purpose.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                      <span>You must not use this website to distribute viruses, spam, or malicious content.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                      <span>You agree not to copy, reuse, or republish any content without prior written consent.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="p-6 md:p-8" id="section-3">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(3)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">3</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Dealer/Distributor Enquiries
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 3 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 3 ? 'block' : 'hidden md:block'}`}>
                  <p className="mb-4 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    Our website provides forms for dealers or distributors interested in business opportunities with Postman Oils.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">•</span>
                      <span>Submitting an enquiry does not guarantee dealership.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">•</span>
                      <span>We may contact you for further verification or discussions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">•</span>
                      <span>All details provided must be accurate and truthful.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">•</span>
                      <span>We reserve the right to reject any enquiry without obligation to explain.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="p-6 md:p-8" id="section-4">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(4)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">4</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Product Information
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 4 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 4 ? 'block' : 'hidden md:block'}`}>
                  <p className="mb-4">
                    The products displayed on this website, including Mustard Oil, Groundnut Filtered Oil, Refined Oil, and livestock supplements, are described to the best of our ability.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">🖼️</span>
                        <span>Product images are for representation only.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">📦</span>
                        <span>Specifications, packaging, and sizes may vary slightly.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">📊</span>
                        <span>We do not guarantee stock availability at all times.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="p-6 md:p-8" id="section-5">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(5)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">5</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Pricing & Payments
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 5 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 5 ? 'block' : 'hidden md:block'}`}>
                  <p className="mb-4">
                    This site may mention pricing for development, dealership, or inquiries.
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">💰</span>
                        <span>Prices, if shown, are subject to change without notice.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">📞</span>
                        <span>Final prices for dealership, distribution, or delivery will be shared via direct contact and confirmation.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="p-6 md:p-8" id="section-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(6)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">6</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Intellectual Property
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 6 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 6 ? 'block' : 'hidden md:block'}`}>
                  <p>
                    All content on this website — including the Postman Oils logo, product names, brand slogans, process images, brochure materials, icons, and visual elements — are protected by copyright and trademark laws.
                  </p>
                  <p className="mt-4 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    Unauthorized reproduction, imitation, or use of our content is strictly prohibited.
                  </p>
                  <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <p className="font-semibold text-red-700">
                      Any counterfeit branding attempts will face legal action, as highlighted in our brochure and legal notice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="p-6 md:p-8" id="section-7">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(7)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">7</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Limitation of Liability
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 7 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 7 ? 'block' : 'hidden md:block'}`}>
                  <p className="mb-4">
                    Postman Oils will not be held liable for:
                  </p>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">❌</span>
                        <span>Any loss or damage arising from your use or inability to use this website.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">❌</span>
                        <span>Errors, inaccuracies, or omissions in product descriptions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">❌</span>
                        <span>Delays or interruptions in service due to technical issues or third-party platforms.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="p-6 md:p-8" id="section-8">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(8)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">8</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        External Links
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 8 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 8 ? 'block' : 'hidden md:block'}`}>
                  <p>
                    This website may contain links to third-party sites such as:
                  </p>
                  <div className="mt-4 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">IG</span>
                        <a href="https://instagram.com/postmanoil.in" className="text-orange-600 hover:underline font-medium">Instagram</a>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">FB</span>
                        <a href="https://facebook.com/postmanoil" className="text-orange-600 hover:underline font-medium">Facebook</a>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">IN</span>
                        <a href="https://linkedin.com/company/postmanoil" className="text-orange-600 hover:underline font-medium">LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 italic">
                    We are not responsible for the content or practices of external websites. Visiting these links is at your own discretion.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div className="p-6 md:p-8" id="section-13">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(13)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">13</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Contact Information
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 13 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 13 ? 'block' : 'hidden md:block'}`}>
                  <p className="font-semibold mb-4 text-lg text-orange-700">Mittal Oil Mills (Pvt.) Ltd.</p>
                  <div className="space-y-4 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Address</p>
                        <p className="text-gray-700">H-1, 87 to 94, RIICO Industrial Area, Jaipur Road, Kekri – 305404, Ajmer, Rajasthan</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Phone</p>
                        <p className="text-gray-700">+91 99280 21482, +91 92140 44288, +91 95290 80832</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">Email</p>
                        <p className="text-gray-700">marketingpostmanoil@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 font-bold text-center text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    ✅ Postman Oils – Taste of Tradition, Trust of Generations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acceptance Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="text-center text-white">
              <p className="font-bold text-xl mb-2">By continuing to use our website,</p>
              <p className="font-medium text-lg">you acknowledge that you have read and agree to these Terms & Conditions.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}