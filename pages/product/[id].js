// pages/product/[id].js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  // WooCommerce API credentials
  const WC_BASE_URL = 'https://postmanoil.com';
  const CONSUMER_KEY = 'ck_32dc33cd096651ea8476fe46f8435cea7ad9d713';
  const CONSUMER_SECRET = 'cs_54ddbb8dd5606fa41bbe040d091731fee0abbfdc';

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `${WC_BASE_URL}/wp-json/wc/v3/products/${id}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`
      );
      
      if (!response.ok) throw new Error('Product not found');
      
      const productData = await response.json();
      
      // Check if product has external buy buttons - if not, redirect
      const buyButtons = extractBuyButtons(productData);
      if (buyButtons.length === 0) {
        router.push('/');
        return;
      }
      
      setProduct(productData);
    } catch (err) {
      router.push('/');
    } finally {
      setLoading(false);
    }
  };

  const extractBuyButtons = (product) => {
    const buttons = [];

    // Check for external URL (primary)
    if (product.type === 'external' && product.external_url) {
      buttons.push({
        url: product.external_url,
        platform: detectPlatform(product.external_url)
      });
    }

    // Check meta data for additional buy links
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
    return 'Amazon';
  };

  const getPlatformLogo = (platform) => {
    const logos = {
      'Amazon': 'https://postmanoil.com/wp-content/uploads/2025/06/amazon-logo-on-transparent-background-free-vector.jpg',
      'Flipkart': 'https://postmanoil.com/wp-content/uploads/2025/06/flipkart-logo-svg-vector.svg',
      'JioMart': 'https://postmanoil.com/wp-content/uploads/2025/06/jio-mart-logo.png'
    };
    return logos[platform] || logos['Amazon'];
  };

  // Enhanced description parser
  const parseProductDescription = (description, shortDescription) => {
    const fullContent = (description || '') + ' ' + (shortDescription || '');
    if (!fullContent.trim()) return null;

    const cleanText = fullContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 15);
    
    const features = [];
    const benefits = [];
    const specifications = [];
    const usage = [];
    
    sentences.forEach(sentence => {
      const lower = sentence.toLowerCase();
      if (lower.includes('ltr') || lower.includes('ml') || lower.includes('kg') || lower.includes('gram') || lower.includes('pack')) {
        specifications.push(sentence.trim());
      } else if (lower.includes('benefit') || lower.includes('healthy') || lower.includes('vitamin') || lower.includes('nutrition') || lower.includes('rich')) {
        benefits.push(sentence.trim());
      } else if (lower.includes('cooking') || lower.includes('frying') || lower.includes('recipe') || lower.includes('kitchen')) {
        usage.push(sentence.trim());
      } else if (lower.includes('cold pressed') || lower.includes('pure') || lower.includes('natural') || lower.includes('organic') || lower.includes('quality')) {
        features.push(sentence.trim());
      } else if (sentence.trim().length > 25) {
        features.push(sentence.trim());
      }
    });

    return {
      features: features.slice(0, 5),
      benefits: benefits.slice(0, 4),
      specifications: specifications.slice(0, 3),
      usage: usage.slice(0, 3),
      hasContent: features.length > 0 || benefits.length > 0 || specifications.length > 0 || usage.length > 0
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link href="/" className="bg-orange-600 text-white px-6 py-3 rounded-lg">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const buyButtons = extractBuyButtons(product);
  const parsedDescription = parseProductDescription(product.description, product.short_description);

  return (
    <>
      <Head>
        <title>{product.name} | Postman Oils - Premium Cooking Oil Online</title>
        <meta name="description" content={`Buy ${product.name} online. Pure, authentic cooking oil from Postman Oils. Available on Amazon, Flipkart & JioMart. 55+ years of trust.`} />
        <meta name="keywords" content={`${product.name}, postman oils, cooking oil, pure oil, ${product.categories.map(c => c.name).join(', ')}`} />
        <meta property="og:title" content={`${product.name} | Postman Oils`} />
        <meta property="og:description" content={`Buy ${product.name} online. Pure, authentic cooking oil from Postman Oils.`} />
        <meta property="og:image" content={product.images[0]?.src} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://postmanoil.com/product/${product.id}`} />
      </Head>

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details - Perfect 2 Column Layout */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column: Product Info & Description */}
            <div className="space-y-6">
              
              {/* Product Header */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight">
                  {product.name}
                </h1>
                
                {/* Categories & Status */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {product.categories.map(category => (
                    <span
                      key={category.id}
                      className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200"
                    >
                      {category.name}
                    </span>
                  ))}
                  
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    product.stock_status === 'instock' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {product.stock_status === 'instock' ? '✓ In Stock' : '✗ Out of Stock'}
                  </span>
                  
                  {product.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Product Highlights */}
              {product.short_description && (
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 md:p-6 rounded-xl border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                    <span className="mr-2">🌟</span> Product Highlights
                  </h3>
                  <div 
                    className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.short_description }}
                  />
                </div>
              )}

              {/* Buy Buttons */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center">
                  <span className="mr-2">🛒</span> Buy Now From:
                </h3>
                
                {/* Desktop: Single row */}
                <div className="hidden md:flex md:space-x-4">
                  {buyButtons.map((button, index) => (
                    <a
                      key={index}
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-orange-300 p-3 flex items-center justify-center"
                    >
                      <img
                        src={getPlatformLogo(button.platform)}
                        alt={`Buy on ${button.platform}`}
                        className="h-full object-contain"
                      />
                    </a>
                  ))}
                </div>
                
                {/* Mobile: Two rows */}
                <div className="md:hidden space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    {buyButtons.slice(0, 2).map((button, index) => (
                      <a
                        key={index}
                        href={button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-orange-300 p-2 flex items-center justify-center"
                      >
                        <img
                          src={getPlatformLogo(button.platform)}
                          alt={`Buy on ${button.platform}`}
                          className="h-full object-contain"
                        />
                      </a>
                    ))}
                  </div>
                  
                  {buyButtons.length > 2 && (
                    <div className={`grid gap-3 ${buyButtons.length === 3 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                      {buyButtons.slice(2).map((button, index) => (
                        <a
                          key={index + 2}
                          href={button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-gray-200 hover:border-orange-300 p-2 flex items-center justify-center"
                        >
                          <img
                            src={getPlatformLogo(button.platform)}
                            alt={`Buy on ${button.platform}`}
                            className="h-full object-contain"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Product Description */}
              {parsedDescription && parsedDescription.hasContent && (
                <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-2xl border-2 border-orange-200 shadow-lg overflow-hidden">
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                    <h2 className="text-xl font-bold flex items-center">
                      <span className="mr-3">📋</span> Complete Product Information
                    </h2>
                  </div>

                  <div className="p-6 space-y-6">
                    
                    {/* Key Features */}
                    {parsedDescription.features.length > 0 && (
                      <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                        <h3 className="font-bold text-orange-700 mb-3 flex items-center text-lg">
                          <span className="mr-2 text-xl">✨</span> Key Features
                        </h3>
                        <div className="space-y-2">
                          {parsedDescription.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Health Benefits */}
                    {parsedDescription.benefits.length > 0 && (
                      <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                        <h3 className="font-bold text-green-700 mb-3 flex items-center text-lg">
                          <span className="mr-2 text-xl">💚</span> Health Benefits
                        </h3>
                        <div className="space-y-2">
                          {parsedDescription.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Usage Tips */}
                    {parsedDescription.usage.length > 0 && (
                      <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm">
                        <h3 className="font-bold text-blue-700 mb-3 flex items-center text-lg">
                          <span className="mr-2 text-xl">👨‍🍳</span> Usage & Cooking Tips
                        </h3>
                        <div className="space-y-2">
                          {parsedDescription.usage.map((tip, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specifications */}
                    {parsedDescription.specifications.length > 0 && (
                      <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-sm">
                        <h3 className="font-bold text-purple-700 mb-3 flex items-center text-lg">
                          <span className="mr-2 text-xl">📏</span> Specifications
                        </h3>
                        <div className="space-y-2">
                          {parsedDescription.specifications.map((spec, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Trust Badges */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-700 mb-3 flex items-center text-lg">
                        <span className="mr-2 text-xl">🏆</span> Quality Assurance
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl mb-1">🌱</div>
                          <div className="text-xs font-bold text-gray-800">100% Natural</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-1">❄️</div>
                          <div className="text-xs font-bold text-gray-800">Cold Pressed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-1">🧪</div>
                          <div className="text-xs font-bold text-gray-800">Lab Tested</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-1">🏆</div>
                          <div className="text-xs font-bold text-gray-800">55+ Years Trust</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Product Images */}
            <div className="lg:order-last order-first">
              {/* Main Image */}
              <div className="relative h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl overflow-hidden mb-4 shadow-xl border-2 border-orange-100">
                <img
                  src={product.images[selectedImage]?.src || product.images[0]?.src}
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                />
                
                {/* Sale Badge */}
                {product.on_sale && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                      🔥 Sale!
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto pb-2 mb-6">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-orange-500 shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-contain bg-gray-50 p-1"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Purchase Card */}
              <div className="bg-white rounded-2xl border-2 border-orange-200 shadow-lg p-6 sticky top-6">
                <h3 className="font-bold text-orange-700 mb-4 flex items-center text-lg">
                  <span className="mr-2">⚡</span> Quick Purchase
                </h3>
                <div className="space-y-3">
                  {buyButtons.map((button, index) => (
                    <a
                      key={index}
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 hover:border-orange-300 p-3 flex items-center justify-center"
                    >
                      <img
                        src={getPlatformLogo(button.platform)}
                        alt={`Buy on ${button.platform}`}
                        className="h-full object-contain"
                      />
                    </a>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">🚚</span> Fast Delivery Available
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">💯</span> Authentic Products
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">🔒</span> Secure Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}