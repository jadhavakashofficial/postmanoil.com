// pages/refined-groundnut-oil.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RefinedGroundnutOilPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // WooCommerce API credentials
  const WC_BASE_URL = 'https://postmanoil.com';
  const CONSUMER_KEY = 'ck_32dc33cd096651ea8476fe46f8435cea7ad9d713';
  const CONSUMER_SECRET = 'cs_54ddbb8dd5606fa41bbe040d091731fee0abbfdc';

  useEffect(() => {
    fetchRefinedGroundnutOilProducts();
  }, []);

  const fetchRefinedGroundnutOilProducts = async () => {
    try {
      const response = await fetch(
        `${WC_BASE_URL}/wp-json/wc/v3/products?per_page=100&status=publish&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`
      );
      
      const allProducts = await response.json();
      
      // Filter for refined groundnut oil products with external buy buttons
      const refinedProducts = allProducts.filter(product => {
        const name = product.name.toLowerCase();
        const categories = product.categories.map(cat => cat.name.toLowerCase());
        const hasRefinedGroundnut = (name.includes('refined') && 
                                   (name.includes('groundnut') || name.includes('peanut'))) ||
                                  categories.some(cat => cat.includes('refined') && 
                                                (cat.includes('groundnut') || cat.includes('peanut')));
        
        const hasBuyButtons = extractBuyButtons(product).length > 0;
        
        return hasRefinedGroundnut && hasBuyButtons;
      });

      setProducts(refinedProducts);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractBuyButtons = (product) => {
    const buttons = [];

    // Check external URL
    if (product.type === 'external' && product.external_url) {
      buttons.push({
        url: product.external_url,
        platform: detectPlatform(product.external_url)
      });
    }

    // Check meta data for additional platforms
    if (product.meta_data) {
      const platforms = [
        { key: 'amazon_url', name: 'Amazon' },
        { key: 'flipkart_url', name: 'Flipkart' },
        { key: 'jiomart_url', name: 'JioMart' }
      ];
      
      platforms.forEach(platform => {
        const meta = product.meta_data.find(m => 
          m.key === platform.key || m.key === `_${platform.key}`
        );
        if (meta && meta.value) {
          buttons.push({
            url: meta.value,
            platform: platform.name
          });
        }
      });
    }

    // Remove duplicates based on platform
    const uniqueButtons = buttons.filter((button, index, self) =>
      index === self.findIndex(b => b.platform === button.platform)
    );

    return uniqueButtons;
  };

  const detectPlatform = (url) => {
    const urlLower = url.toLowerCase();
    if (urlLower.includes('amazon')) return 'Amazon';
    if (urlLower.includes('flipkart')) return 'Flipkart';
    if (urlLower.includes('jiomart')) return 'JioMart';
    return 'Amazon'; // Default
  };

  const getPlatformLogo = (platform) => {
    const logos = {
      'Amazon': 'https://postmanoil.com/wp-content/uploads/2025/06/amazon-logo-on-transparent-background-free-vector.jpg',
      'Flipkart': 'https://postmanoil.com/wp-content/uploads/2025/06/flipkart-logo-svg-vector.svg',
      'JioMart': 'https://postmanoil.com/wp-content/uploads/2025/06/jio-mart-logo.png'
    };
    return logos[platform] || logos['Amazon'];
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="flex items-center justify-center pt-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Refined Groundnut Oil Collection | Postman Oils - Premium Refined Groundnut Oil</title>
        <meta name="description" content="Shop premium Refined Groundnut Oil from Postman Oils. Pure, refined, and perfect for all cooking needs. Available on Amazon, Flipkart & JioMart with direct buy options." />
        <meta name="keywords" content="refined groundnut oil, refined peanut oil, postman oil, cooking oil, pure groundnut oil" />
        <meta property="og:title" content="Premium Refined Groundnut Oil | Postman Oils" />
        <meta property="og:description" content="Pure and refined groundnut oil perfect for all your cooking needs. 55+ years of trust." />
        <link rel="canonical" href="https://postmanoil.com/refined-groundnut-oil" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Refined <span className="text-purple-200">Groundnut Oil</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Pure • Refined • Versatile • Premium
          </p>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the purity and versatility of our premium refined groundnut oil, 
            perfect for all your cooking needs with exceptional taste and quality.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Our Refined Oil Collection
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              <span className="font-bold text-purple-600">{products.length} Premium Products</span> • Available with Direct Purchase Options
            </p>
          </div>

          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {currentProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    extractBuyButtons={extractBuyButtons}
                    getPlatformLogo={getPlatformLogo}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-16">
                  <div className="flex space-x-2">
                    {currentPage > 1 && (
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        className="px-4 py-2 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-bold"
                      >
                        Previous
                      </button>
                    )}
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                          currentPage === index + 1
                            ? 'bg-purple-600 text-white'
                            : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    
                    {currentPage < totalPages && (
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        className="px-4 py-2 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-bold"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">✨</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No Refined Oil Products Found</h3>
              <p className="text-xl text-gray-600">Products are being updated. Please check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ProductCard({ product, extractBuyButtons, getPlatformLogo }) {
  const buyButtons = extractBuyButtons(product);

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-purple-100">
      
      {/* Product Image - Clickable */}
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 cursor-pointer">
          <img
            src={product.images[0]?.src || '/placeholder.jpg'}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Badges */}
          {(product.featured || product.on_sale) && (
            <div className="absolute top-2 left-2 flex flex-col space-y-1">
              {product.featured && (
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ Featured
                </span>
              )}
              {product.on_sale && (
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                  🔥 Sale!
                </span>
              )}
            </div>
          )}

          {/* Stock Status */}
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs font-bold shadow-lg ${
              product.stock_status === 'instock' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {product.stock_status === 'instock' ? '✓ In Stock' : '✗ Out of Stock'}
            </span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3 md:p-4">
        
        {/* Product Name - Clickable */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 cursor-pointer hover:text-purple-600 transition-colors line-clamp-2 min-h-[2.5rem] leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Buy Buttons */}
        <div className="space-y-2">
          {buyButtons.length === 1 ? (
            // Single button - full width
            <a
              href={buyButtons[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-10 md:h-12 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              <img
                src={getPlatformLogo(buyButtons[0].platform)}
                alt={`Buy on ${buyButtons[0].platform}`}
                className="w-full h-full object-contain bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 p-2"
              />
            </a>
          ) : (
            <>
              {/* Desktop: Single row, Mobile: Two rows */}
              <div className="hidden md:flex md:space-x-2">
                {buyButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block flex-1 h-12 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
                  >
                    <img
                      src={getPlatformLogo(button.platform)}
                      alt={`Buy on ${button.platform}`}
                      className="w-full h-full object-contain bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 p-2"
                    />
                  </a>
                ))}
              </div>
              
              {/* Mobile: Two rows */}
              <div className="md:hidden space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {buyButtons.slice(0, 2).map((button, index) => (
                    <a
                      key={index}
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-10 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
                    >
                      <img
                        src={getPlatformLogo(button.platform)}
                        alt={`Buy on ${button.platform}`}
                        className="w-full h-full object-contain bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 p-2"
                      />
                    </a>
                  ))}
                </div>
                
                {buyButtons.length > 2 && (
                  <div className={`grid gap-2 ${buyButtons.length === 3 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {buyButtons.slice(2).map((button, index) => (
                      <a
                        key={index + 2}
                        href={button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-10 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
                      >
                        <img
                          src={getPlatformLogo(button.platform)}
                          alt={`Buy on ${button.platform}`}
                          className="w-full h-full object-contain bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 p-2"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"></div>
    </div>
  );
}