// components/Footer.js
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(8815);
  const [isVisible, setIsVisible] = useState(false);

  // Simulate visitor count increment (replace with real API call)
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="footer" className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Desktop Layout: 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 lg:items-start">
          
          {/* Left Column: Company + Counter */}
          <div className="space-y-6">
            <div>
              <img
                src="https://postmanoil.com/wp-content/uploads/2025/06/Logo.png"
                alt="Postman Oils"
                className="h-12 w-auto mb-3"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience the legacy of purity and tradition with Postman Oils – trusted by Indian families for over five decades.
              </p>
            </div>

            {/* Visitor Counter */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-3 text-center shadow-lg">
              <div className="text-white text-xs font-semibold mb-2">VISITOR COUNT</div>
              <div className="flex justify-center space-x-1">
                {visitorCount.toString().split('').map((digit, index) => (
                  <div
                    key={index}
                    className="bg-black text-orange-400 font-bold text-base px-1.5 py-1 rounded border border-orange-400 min-w-[24px] text-center"
                  >
                    {digit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Products */}
            <div>
              <h3 className="text-orange-600 font-bold text-base mb-3 relative">
                Products
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500"></div>
              </h3>
              <ul className="space-y-2">
                <li><Link href="/refined-groundnut-oil" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Refined Groundnut Oil</Link></li>
                <li><Link href="/groundnut-oil" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Groundnut Filtered Oil</Link></li>
                <li><Link href="/mustard-oil" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Kacchi Ghani Mustard Oil</Link></li>
              </ul>
              
              {/* Social Icons */}
              <div className="mt-4">
                <h4 className="text-orange-600 font-semibold text-sm mb-2">Follow Us</h4>
                <div className="flex space-x-2">
                  <a href="https://www.linkedin.com/company/postmanoil/" target="_blank" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-200 hover:scale-110">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61565820218513" target="_blank" className="bg-blue-800 hover:bg-blue-900 p-2 rounded-full transition-all duration-200 hover:scale-110">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/postmanoil.in" target="_blank" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 rounded-full transition-all duration-200 hover:scale-110">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-orange-600 font-bold text-base mb-3 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500"></div>
              </h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Home</Link></li>
                <li><Link href="/postman-recipes" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Recipes</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Terms & Conditions</Link></li>
                <li><Link href="/connect-for-dealership" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">Contact Us</Link></li>
                <li><Link href="/about-us" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">About Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact */}
          <div>
            <h3 className="text-orange-600 font-bold text-base mb-3 relative">
              Contact Info
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500"></div>
            </h3>
            
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-2">
                <div className="bg-orange-500 p-1 rounded-full flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-orange-600 font-semibold text-xs">Address</p>
                  <p className="text-gray-600 text-xs leading-tight">
                    Mittal Oil Mills (Pvt.) Ltd.<br />
                    H-1, 87-94, RIICO Industrial Area,<br />
                    Jaipur Road, Kekri 305404,<br />
                    District Ajmer, Rajasthan, India.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-2">
                <div className="bg-yellow-500 p-1 rounded-full flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-orange-600 font-semibold text-xs">Email</p>
                  <a href="mailto:marketingpostmanoil@gmail.com" className="text-gray-600 text-xs hover:text-orange-600 transition-colors">
                    marketingpostmanoil@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-2">
                <div className="bg-red-500 p-1 rounded-full flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-orange-600 font-semibold text-xs">Phone</p>
                  <div className="text-gray-600 text-xs space-y-0.5">
                    <p>Anil: 9928021482</p>
                    <p>Sanjay: 9214044288</p>
                    <p>Pakshik: 9529808832</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Accordion Style */}
        <div className="lg:hidden">
          {/* Company Info - Always Visible */}
          <div className="text-center mb-6">
            <img
              src="https://postmanoil.com/wp-content/uploads/2025/06/Logo.png"
              alt="Postman Oils"
              className="h-10 w-auto mx-auto mb-3"
            />
            <p className="text-gray-600 text-sm px-4">
              Trusted by Indian families for over five decades.
            </p>
          </div>

          {/* Visitor Counter */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-3 text-center shadow-lg mb-6 mx-4">
            <div className="text-white text-xs font-semibold mb-2">VISITOR COUNT</div>
            <div className="flex justify-center space-x-1">
              {visitorCount.toString().split('').map((digit, index) => (
                <div
                  key={index}
                  className="bg-black text-orange-400 font-bold text-sm px-1.5 py-1 rounded border border-orange-400 min-w-[20px] text-center"
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>

          {/* Compact Links Grid */}
          <div className="grid grid-cols-2 gap-6 px-4 mb-6">
            {/* Products */}
            <div>
              <h3 className="text-orange-600 font-bold text-sm mb-2">Products</h3>
              <ul className="space-y-1">
                <li><Link href="/refined-groundnut-oil" className="text-gray-600 text-xs hover:text-orange-600">Refined Oil</Link></li>
                <li><Link href="/groundnut-oil" className="text-gray-600 text-xs hover:text-orange-600">Filtered Oil</Link></li>
                <li><Link href="/mustard-oil" className="text-gray-600 text-xs hover:text-orange-600">Mustard Oil</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-orange-600 font-bold text-sm mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link href="/" className="text-gray-600 text-xs hover:text-orange-600">Home</Link></li>
                <li><Link href="/postman-recipes" className="text-gray-600 text-xs hover:text-orange-600">Recipes</Link></li>
                <li><Link href="/about-us" className="text-gray-600 text-xs hover:text-orange-600">About Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="px-4">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h3 className="text-orange-600 font-bold text-sm mb-3">Contact & Follow</h3>
              
              <div className="text-xs text-gray-600 mb-3">
                <p className="font-medium">📍 Kekri, Rajasthan, India</p>
                <p>📧 marketingpostmanoil@gmail.com</p>
                <p>📞 9928021482 | 9214044288</p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-2 justify-center">
                <a href="https://www.linkedin.com/company/postmanoil/" target="_blank" className="bg-blue-600 p-2 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565820218513" target="_blank" className="bg-blue-800 p-2 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/postmanoil.in" target="_blank" className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="text-xs text-gray-300 mb-2 sm:mb-0">
              © {new Date().getFullYear()} Mittal Oils Pvt Ltd. Designed by{" "}
              <a
                href="https://www.linkedin.com/in/classictechak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                Akash Jadhav
              </a>
            </div>
            <div className="flex space-x-3 text-xs">
              <Link href="/terms-and-conditions" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Terms
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}