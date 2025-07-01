// components/Header.js
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const menuTimeoutRef = useRef(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    closeDropdown();
  };

  // Function to handle submenu item click
  const handleSubmenuClick = () => {
    closeDropdown();
    closeMenu();
  };

  return (
    <>
      <header className={`bg-white shadow-lg sticky top-0 z-50 border-b-2 border-yellow-200 transition-all duration-300 ${isScrolled ? 'shadow-xl backdrop-blur-md bg-white/95' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14 lg:h-16' : 'h-16 sm:h-18 lg:h-24'}`}>
            {/* Premium Logo with subtle shine effect - fixed for mobile */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://postmanoil.com/wp-content/uploads/2025/06/Logo.png"
                  alt="Postman Oils - Premium Cooking Oils"
                  className={`w-auto transition-all duration-300 group-hover:scale-105 filter brightness-110 contrast-110 ${
                    isScrolled 
                      ? 'h-8 sm:h-10 lg:h-12 max-w-[140px] sm:max-w-[160px] lg:max-w-[280px]' 
                      : 'h-10 sm:h-12 md:h-14 lg:h-20 max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px]'
                  }`}
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"></div>
              </div>
            </Link>

            {/* Premium Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              <Link 
                href="/" 
                className={`px-4 text-gray-800 hover:text-orange-600 font-semibold text-sm tracking-wide transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:shadow-md relative group ${isScrolled ? 'py-2' : 'py-3'}`}
              >
                HOME
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              <Link 
                href="/mustard-oil"
                className={`px-4 text-gray-800 hover:text-orange-600 font-semibold text-sm tracking-wide transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:shadow-md relative group ${isScrolled ? 'py-2' : 'py-3'}`}
              >
                MUSTARD OIL
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              <Link 
                href="/groundnut-oil"
                className={`px-4 text-gray-800 hover:text-orange-600 font-semibold text-sm tracking-wide transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:shadow-md relative group ${isScrolled ? 'py-2' : 'py-3'}`}
              >
                GROUNDNUT OIL
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              <Link 
                href="/refined-groundnut-oil" 
                className={`px-4 text-gray-800 hover:text-orange-600 font-semibold text-sm tracking-wide transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:shadow-md relative group ${isScrolled ? 'py-2' : 'py-3'}`}
              >
                REFINED OIL
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>

              {/* Premium Dropdown with Disappear-on-Click */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('pages')}
                  className={`px-4 text-gray-800 hover:text-orange-600 font-semibold text-sm tracking-wide transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:shadow-md flex items-center relative group ${isScrolled ? 'py-2' : 'py-3'}`}
                >
                  MORE
                  <svg className={`ml-2 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'pages' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
                {activeDropdown === 'pages' && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-orange-100 py-3 z-50 animate-in slide-in-from-top-2 duration-300 backdrop-blur-lg">
                    <div className="px-2">
                      <Link 
                        href="/postman-recipes" 
                        onClick={handleSubmenuClick}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700 transition-all duration-200 rounded-xl group"
                      >
                        <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">🍽️</span>
                        <div>
                          <div className="font-medium">Postman Recipes</div>
                          <div className="text-xs text-gray-500">Delicious cooking ideas</div>
                        </div>
                      </Link>
                      <Link 
                        href="/how-postman-oil-is-made" 
                        onClick={handleSubmenuClick}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700 transition-all duration-200 rounded-xl group"
                      >
                        <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">🏭</span>
                        <div>
                          <div className="font-medium">How Oil Is Made</div>
                          <div className="text-xs text-gray-500">Our quality process</div>
                        </div>
                      </Link>
                      <Link 
                        href="/postman-supplements" 
                        onClick={handleSubmenuClick}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700 transition-all duration-200 rounded-xl group"
                      >
                        <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">💊</span>
                        <div>
                          <div className="font-medium">Supplements</div>
                          <div className="text-xs text-gray-500">Health products</div>
                        </div>
                      </Link>
                      <Link 
                        href="/about-us" 
                        onClick={handleSubmenuClick}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700 transition-all duration-200 rounded-xl group"
                      >
                        <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">🏢</span>
                        <div>
                          <div className="font-medium">About Us</div>
                          <div className="text-xs text-gray-500">Our story & heritage</div>
                        </div>
                      </Link>
                      <div className="border-t border-orange-100 my-2 mx-4"></div>
                      <Link 
                        href="/terms-and-conditions" 
                        onClick={handleSubmenuClick}
                        className="block px-4 py-2 text-xs text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700 transition-all duration-200 rounded-xl"
                      >
                        Terms & Conditions
                      </Link>
                      <Link 
                        href="/privacy-policy" 
                        onClick={handleSubmenuClick}
                        className="block px-4 py-2 text-xs text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700 transition-all duration-200 rounded-xl"
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Premium CTA Button with pulse animation */}
              <Link 
                href="/connect-for-dealership" 
                className={`ml-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white px-6 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 relative overflow-hidden group ${isScrolled ? 'py-2' : 'py-3'}`}
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2 text-base group-hover:scale-110 transition-transform duration-200">🤝</span>
                  DEALERSHIP
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 animate-pulse bg-gradient-to-r from-yellow-300/30 via-transparent to-transparent transition-all duration-1000"></div>
              </Link>
            </nav>

            {/* Premium Mobile menu button with animation */}
            <button
              className="lg:hidden p-2 sm:p-3 rounded-xl text-gray-800 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <span className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2 sm:top-3' : 'top-1 sm:top-1 -translate-y-0.5'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-2 sm:top-3'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2 sm:top-3' : 'top-3 sm:top-5 translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Premium Mobile Navigation with Slide-in Effect - Fixed for mobile */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 40
            }}
          />
          
          {/* Menu Panel - Fixed width for mobile */}
          <div 
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-white via-orange-50 to-yellow-50 z-50 shadow-2xl lg:hidden overflow-y-auto"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              zIndex: 50,
              transform: 'translateX(0)',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <div className="flex justify-end p-4 sticky top-0 bg-gradient-to-b from-white to-orange-50 z-10">
              <button
                onClick={closeMenu}
                className="p-2 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 text-gray-700 hover:text-orange-600 focus:outline-none shadow-md"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-4 pb-10">
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">🏠</span>
                  HOME
                </Link>
                
                <Link
                  href="/mustard-oil"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">🌻</span>
                  MUSTARD OIL
                </Link>

                <Link
                  href="/groundnut-oil"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">🥜</span>
                  GROUNDNUT OIL
                </Link>

                <Link
                  href="/refined-groundnut-oil"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">✨</span>
                  REFINED OIL
                </Link>

                <Link
                  href="/postman-recipes"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">🍽️</span>
                  RECIPES
                </Link>

                <Link
                  href="/how-postman-oil-is-made"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">🏭</span>
                  OUR PROCESS
                </Link>

                <Link
                  href="/postman-supplements"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">💊</span>
                  SUPPLEMENTS
                </Link>

                <Link
                  href="/about-us"
                  className="flex items-center px-4 py-4 text-gray-800 hover:text-orange-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-200 group"
                  onClick={closeMenu}
                >
                  <span className="text-lg mr-3 w-6 flex justify-center group-hover:scale-110 transition-transform duration-200">🏢</span>
                  ABOUT US
                </Link>

                <div className="mt-6 pt-4 border-t border-orange-200">
                  <Link
                    href="/connect-for-dealership"
                    className="flex items-center justify-center px-4 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl font-bold transition-all duration-200 shadow-lg group"
                    onClick={closeMenu}
                  >
                    <span className="text-lg mr-2 group-hover:scale-110 transition-transform duration-200">🤝</span>
                    DEALERSHIP
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}