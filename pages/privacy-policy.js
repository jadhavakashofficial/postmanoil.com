import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);
  
  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, 15);
  }, []);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > headerRef.current.offsetHeight);
      }
      
      // Highlight active section based on scroll position
      const scrollPosition = window.scrollY + 150;
      sectionRefs.current.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`section-${index + 1}`);
        }
      });
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
    { id: 1, title: "Who We Are", icon: "🏢" },
    { id: 2, title: "Information Collection", icon: "📋" },
    { id: 3, title: "How We Collect", icon: "🔍" },
    { id: 4, title: "Use of Information", icon: "💡" },
    { id: 5, title: "Sharing Information", icon: "🤝" },
    { id: 6, title: "Cookies", icon: "🍪" },
    { id: 7, title: "Third-Party Tools", icon: "🛠️" },
    { id: 8, title: "Data Protection", icon: "🔒" },
    { id: 9, title: "Your Rights", icon: "✅" },
    { id: 10, title: "Data Retention", icon: "⏳" },
    { id: 11, title: "Children's Privacy", icon: "🧒" },
    { id: 12, title: "International Users", icon: "🌎" },
    { id: 13, title: "External Links", icon: "🔗" },
    { id: 14, title: "Policy Updates", icon: "🔄" },
    { id: 15, title: "Contact Us", icon: "📞" }
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
        <title>Privacy Policy | Postman Oils - Premium Lubricant Solutions</title>
        <meta
          name="description"
          content="Read Postman Oils' comprehensive privacy policy. Learn how we collect, use, and protect your personal information."
        />
        <meta
          property="og:title"
          content="Privacy Policy | Postman Oils"
        />
        <meta
          property="og:description"
          content="Your data security matters. Explore our privacy practices at Postman Oils."
        />
        <link rel="canonical" href="https://www.postmanoils.com/privacy-policy" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-6">
        {/* Hero Section */}
        <div 
          ref={headerRef}
          className={`text-center transition-all duration-300 ${isSticky ? 'pt-4 pb-4' : 'pt-8 pb-8'}`}
        >
          <h1 className={`text-3xl md:text-4xl font-black mb-3 transition-all duration-300 ${isSticky ? 'text-2xl' : ''}`}>
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Privacy Policy
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    At Postman Oils, we value your privacy and are committed to protecting any personal information that you share with us. This Privacy Policy outlines how we collect, use, store, and protect your data when you visit our website (www.postmanoil.com) or interact with us in any manner.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <p className="text-red-700 font-semibold flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      By using our website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described herein, please refrain from using the website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="divide-y divide-amber-100">
              {/* Section 1: Who We Are */}
              <div 
                className="p-6 md:p-8" 
                id="section-1"
                ref={el => sectionRefs.current[0] = el}
              >
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
                        Who We Are
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
                  <p className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    Postman Oils is a brand of Mittal Oil Mills (Pvt.) Ltd., based in Kekri, Rajasthan, India. Our mission is to deliver high-quality, traditionally extracted edible oils that reflect the purity and tradition of Indian kitchens.
                  </p>
                </div>
              </div>

              {/* Section 2: Information We Collect */}
              <div 
                className="p-6 md:p-8" 
                id="section-2"
                ref={el => sectionRefs.current[1] = el}
              >
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
                        Information We Collect
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
                  <p className="mb-4">
                    We collect two types of information from users:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h3 className="font-bold text-orange-800 mb-3">Personal Information</h3>
                      <p className="mb-3">This includes:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">👤</span>
                          <span>Name</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">📱</span>
                          <span>Phone Number</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✉️</span>
                          <span>Email Address</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">📍</span>
                          <span>City, State</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">🏢</span>
                          <span>Dealer inquiry details</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">💬</span>
                          <span>Messages submitted via our forms</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <h3 className="font-bold text-amber-800 mb-3">Non-Personal Information</h3>
                      <p className="mb-3">Collected automatically through cookies and analytics tools:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">🌐</span>
                          <span>IP address</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">🔍</span>
                          <span>Browser type and version</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">📱</span>
                          <span>Device information</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">📊</span>
                          <span>Pages visited and time spent</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">🔗</span>
                          <span>Referral sources (e.g., Google, social media)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: How We Collect */}
              <div 
                className="p-6 md:p-8" 
                id="section-3"
                ref={el => sectionRefs.current[2] = el}
              >
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
                        How We Collect Your Information
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
                  <p className="mb-4">
                    You provide data in the following ways:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📝
                        </div>
                        <h3 className="font-bold text-orange-800">Forms</h3>
                      </div>
                      <p>When you fill out a Contact Us form</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🤝
                        </div>
                        <h3 className="font-bold text-amber-800">Business Inquiries</h3>
                      </div>
                      <p>When you submit a Dealer/Distributor Enquiry</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ✉️
                        </div>
                        <h3 className="font-bold text-orange-800">Newsletters</h3>
                      </div>
                      <p>When you subscribe to a newsletter (if enabled)</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          💬
                        </div>
                        <h3 className="font-bold text-amber-800">Messaging</h3>
                      </div>
                      <p>When you contact us via WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        🍪
                      </div>
                      <h3 className="font-bold text-blue-800">Automated Collection</h3>
                    </div>
                    <p className="mt-2">Automatically through cookies when you browse the website</p>
                  </div>
                </div>
              </div>

              {/* Section 4: Use of Information */}
              <div 
                className="p-6 md:p-8" 
                id="section-4"
                ref={el => sectionRefs.current[3] = el}
              >
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
                        Use of Collected Information
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <div className="flex items-center mb-3">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📞
                        </div>
                        <h3 className="font-bold text-orange-800">Customer Service</h3>
                      </div>
                      <p>Respond to your queries or inquiries</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <div className="flex items-center mb-3">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🏢
                        </div>
                        <h3 className="font-bold text-amber-800">Business Operations</h3>
                      </div>
                      <p>Process dealership or business-related requests</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <div className="flex items-center mb-3">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📊
                        </div>
                        <h3 className="font-bold text-orange-800">Improvements</h3>
                      </div>
                      <p>Improve our website content and user experience</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <div className="flex items-center mb-3">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📣
                        </div>
                        <h3 className="font-bold text-amber-800">Communication</h3>
                      </div>
                      <p>Send you updates, promotions, or product announcements</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <div className="flex items-center mb-3">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📈
                        </div>
                        <h3 className="font-bold text-orange-800">Analytics</h3>
                      </div>
                      <p>Track website performance through analytics</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <div className="flex items-center mb-3">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🗄️
                        </div>
                        <h3 className="font-bold text-amber-800">Record Keeping</h3>
                      </div>
                      <p>Maintain internal records for security and compliance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Sharing Information */}
              <div 
                className="p-6 md:p-8" 
                id="section-5"
                ref={el => sectionRefs.current[4] = el}
              >
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
                        Sharing of Your Information
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
                    We do not sell, rent, or trade your personal data to third parties. Your information may be shared with:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          👥
                        </div>
                        <h3 className="font-bold text-orange-800">Internal Teams</h3>
                      </div>
                      <p>Staff or departments to process inquiries</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🖥️
                        </div>
                        <h3 className="font-bold text-amber-800">Service Providers</h3>
                      </div>
                      <p>Assist with website hosting or email delivery</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ⚖️
                        </div>
                        <h3 className="font-bold text-red-800">Legal Authorities</h3>
                      </div>
                      <p>If required by law or in response to legal processes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Cookies */}
              <div 
                className="p-6 md:p-8" 
                id="section-6"
                ref={el => sectionRefs.current[5] = el}
              >
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
                        Use of Cookies
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
                  <p className="mb-4">
                    Our website uses cookies to:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🔁
                        </div>
                        <h3 className="font-bold text-orange-800">User Recognition</h3>
                      </div>
                      <p>Recognize returning users</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📊
                        </div>
                        <h3 className="font-bold text-amber-800">Behavior Analysis</h3>
                      </div>
                      <p>Understand user behavior and preferences</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🧩
                        </div>
                        <h3 className="font-bold text-orange-800">Session Management</h3>
                      </div>
                      <p>Store session data temporarily for smoother navigation</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-700">
                      You can choose to disable cookies via your browser settings. However, this may affect the functionality of certain parts of our website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7: Third-Party Tools */}
              <div 
                className="p-6 md:p-8" 
                id="section-7"
                ref={el => sectionRefs.current[6] = el}
              >
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
                        Third-Party Tools
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
                    We may use trusted third-party tools for analytics, lead capture, or marketing. These may include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📈
                        </div>
                        <h3 className="font-bold text-blue-800">Google Analytics</h3>
                      </div>
                      <p>Website analytics and user behavior tracking</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          f
                        </div>
                        <h3 className="font-bold">Facebook Pixel</h3>
                      </div>
                      <p>Advertising and conversion tracking</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          WA
                        </div>
                        <h3 className="font-bold">WhatsApp Business API</h3>
                      </div>
                      <p>Customer communication and support</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ✉️
                        </div>
                        <h3 className="font-bold">Mailchimp</h3>
                      </div>
                      <p>Email marketing campaigns</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-700">
                      These tools may have access to anonymized data, but they do not access personally identifiable details without your consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8: Data Protection */}
              <div 
                className="p-6 md:p-8" 
                id="section-8"
                ref={el => sectionRefs.current[7] = el}
              >
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
                        How We Protect Your Information
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
                  <p className="mb-4">
                    We implement the following security measures:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🔐
                        </div>
                        <h3 className="font-bold text-orange-800">SSL Encryption</h3>
                      </div>
                      <p>Secure Socket Layer encryption across the site</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🛡️
                        </div>
                        <h3 className="font-bold text-amber-800">Firewall Protection</h3>
                      </div>
                      <p>Firewall protection via hosting</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          👤
                        </div>
                        <h3 className="font-bold text-orange-800">Access Control</h3>
                      </div>
                      <p>Limited internal access to personal data</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🔍
                        </div>
                        <h3 className="font-bold text-amber-800">Security Audits</h3>
                      </div>
                      <p>Regular malware scans and website security audits</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-700">
                      Despite our best efforts, no data transmission over the internet is 100% secure. Therefore, while we strive to protect your data, we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 9: Your Rights */}
              <div 
                className="p-6 md:p-8" 
                id="section-9"
                ref={el => sectionRefs.current[8] = el}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(9)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">9</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Your Rights
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 9 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 9 ? 'block' : 'hidden md:block'}`}>
                  <p className="mb-4">
                    You have the right to:
                  </p>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                        <span>Access your personal data held by us</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                        <span>Request correction of incorrect or outdated data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                        <span>Request deletion of your data from our systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">✓</span>
                        <span>Withdraw consent for marketing communication</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-orange-700 mb-2">To exercise these rights, email us at:</p>
                    <p className="text-lg font-medium text-orange-800">📧 marketingpostmanoil@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Section 10: Data Retention */}
              <div 
                className="p-6 md:p-8" 
                id="section-10"
                ref={el => sectionRefs.current[9] = el}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(10)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">10</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Data Retention
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 10 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 10 ? 'block' : 'hidden md:block'}`}>
                  <p className="mb-4">
                    We retain your personal data only as long as needed:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📝
                        </div>
                        <h3 className="font-bold text-orange-800">Contact Forms</h3>
                      </div>
                      <p>Up to 12 months</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          🤝
                        </div>
                        <h3 className="font-bold text-amber-800">Dealer Inquiries</h3>
                      </div>
                      <p>Up to 24 months (for follow-up purposes)</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          📊
                        </div>
                        <h3 className="font-bold text-blue-800">Analytics Data</h3>
                      </div>
                      <p>Retained per Google Analytics policy (usually 26 months)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 11: Children's Privacy */}
              <div 
                className="p-6 md:p-8" 
                id="section-11"
                ref={el => sectionRefs.current[10] = el}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(11)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">11</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Children's Privacy
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 11 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 11 ? 'block' : 'hidden md:block'}`}>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-pink-100 text-pink-800 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-pink-700">Important Notice</h3>
                    </div>
                    <p>
                      Our website is not intended for children under the age of 13. We do not knowingly collect data from minors. If we become aware of such data, we will delete it immediately.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 12: International Users */}
              <div 
                className="p-6 md:p-8" 
                id="section-12"
                ref={el => sectionRefs.current[11] = el}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(12)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">12</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        International Users
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 12 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 12 ? 'block' : 'hidden md:block'}`}>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-700">Global Notice</h3>
                    </div>
                    <p>
                      This site is hosted in India. If you are accessing the site from outside India, you consent to the transfer of your information to India and agree to abide by Indian privacy laws.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 13: External Links */}
              <div 
                className="p-6 md:p-8" 
                id="section-13"
                ref={el => sectionRefs.current[12] = el}
              >
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
                        External Links
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
                  <p className="mb-4">
                    Our website may include links to social media platforms or third-party sites. We are not responsible for the privacy practices of these websites.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="https://instagram.com/postmanoil.in" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-lg flex items-center justify-center">
                      <span className="mr-2">📸</span>
                      Instagram
                    </a>
                    
                    <a href="https://facebook.com/postmanoil" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-lg flex items-center justify-center">
                      <span className="mr-2">f</span>
                      Facebook
                    </a>
                    
                    <a href="https://linkedin.com/company/postmanoil" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-lg flex items-center justify-center">
                      <span className="mr-2">in</span>
                      LinkedIn
                    </a>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-700">
                      We encourage users to read the privacy policies of any external site they visit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 14: Policy Updates */}
              <div 
                className="p-6 md:p-8" 
                id="section-14"
                ref={el => sectionRefs.current[13] = el}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(14)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">14</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Policy Updates
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 14 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 14 ? 'block' : 'hidden md:block'}`}>
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-800">Update Policy</h3>
                        <p className="text-gray-700">
                          We reserve the right to update or modify this policy at any time. Changes will be posted on this page with a new "Last Updated" date.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-white p-4 rounded-lg border border-amber-200">
                      <p className="font-semibold text-amber-700">
                        Please check this page periodically to stay informed about how we are protecting your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 15: Contact Us */}
              <div 
                className="p-6 md:p-8" 
                id="section-15"
                ref={el => sectionRefs.current[14] = el}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSection(15)}
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold">15</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Contact Us
                      </span>
                    </h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${activeSection === 15 ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className={`mt-4 text-gray-700 pl-12 ${activeSection === 15 ? 'block' : 'hidden md:block'}`}>
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
                        <p className="text-gray-700">H-1, 87 to 94, RIICO Industrial Area, Jaipur Road, Kekri, Rajasthan – 305404</p>
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
              <p className="font-bold text-xl mb-2">Have Questions About Your Privacy?</p>
              <p className="font-medium text-lg">Contact our privacy team at privacy@postmanoils.com</p>
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