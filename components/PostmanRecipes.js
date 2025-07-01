import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PostmanRecipes() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch blogs from WordPress
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (blogs.length > 3) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % Math.ceil(blogs.length / 3));
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [blogs.length]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      
      // Fetch from your WordPress blog
      const response = await fetch('https://postmanoil.com/wp-json/wp/v2/posts?per_page=12&_embed');
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      
      const posts = await response.json();
      
      // Transform WordPress posts to blog format
      const transformedBlogs = posts.map(post => ({
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                       'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
        excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 120) + '...',
        content: post.content.rendered,
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: post._embedded?.author?.[0]?.name || 'Postman Oil Team',
        categories: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || ['Recipes']
      }));
      
      setBlogs(transformedBlogs);
      setError(null);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err.message);
      // Fallback to static blogs if WordPress fetch fails
      setBlogs(getFallbackBlogs());
    } finally {
      setLoading(false);
    }
  };

  // Fallback static blogs if WordPress is not available
  const getFallbackBlogs = () => [
    {
      id: 1,
      title: "Traditional Mustard Fish Curry Recipe",
      slug: "traditional-mustard-fish-curry",
      featuredImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      excerpt: "Learn how to make authentic Bengali fish curry using pure Postman Mustard Oil...",
      content: "<p>Full recipe content here...</p>",
      date: "December 15, 2024",
      author: "Chef Priya",
      categories: ["Bengali Cuisine", "Fish Recipes"]
    },
    {
      id: 2,
      title: "Healthy Vegetable Stir-fry with Groundnut Oil",
      slug: "healthy-vegetable-stir-fry",
      featuredImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
      excerpt: "Quick and nutritious mixed vegetable recipe using cold-pressed groundnut oil...",
      content: "<p>Full recipe content here...</p>",
      date: "December 10, 2024",
      author: "Postman Oil Team",
      categories: ["Healthy Cooking", "Vegetarian"]
    },
    {
      id: 3,
      title: "Crispy Golden Samosas - Perfect Snack",
      slug: "crispy-golden-samosas",
      featuredImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop",
      excerpt: "Make perfectly crispy samosas using pure groundnut oil for deep frying...",
      content: "<p>Full recipe content here...</p>",
      date: "December 5, 2024",
      author: "Chef Rajesh",
      categories: ["Snacks", "Indian Street Food"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(blogs.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.ceil(blogs.length / 3)) % Math.ceil(blogs.length / 3));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const totalSlides = Math.ceil(blogs.length / 3);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Postman Recipes
            </h2>
            <p className="text-gray-600 text-lg">Loading delicious recipes from our blog...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="bg-gray-200 h-64"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-300 rounded-full" style={{ filter: 'blur(20px)' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-300 rounded-full" style={{ filter: 'blur(20px)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-2xl border-4 border-orange-100">
              <span className="text-4xl">🍽️</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Postman Recipes
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover authentic recipes and cooking tips from our <span className="font-bold text-orange-600">expert chefs</span> using pure Postman Oil
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Error State */}
        {error && !blogs.length && (
          <div className="text-center py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600 font-medium">Unable to load recipes from blog</p>
              <p className="text-red-500 text-sm mt-2">Showing fallback recipes instead</p>
            </div>
          </div>
        )}

        {/* Blog Slider */}
        <div className="relative">
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {blogs.slice(slideIndex * 3, slideIndex * 3 + 3).map((blog) => (
                      <Link 
                        key={blog.id}
                        href={`/recipes/${blog.slug}`}
                        className="group block"
                      >
                        <article 
                          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105 border border-orange-100 hover:border-orange-200"
                          style={{
                            willChange: 'transform',
                            backfaceVisibility: 'hidden',
                            height: '400px' // Fixed height for consistent layout
                          }}
                        >
                          {/* Featured Image */}
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={blog.featuredImage}
                              alt={blog.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop';
                              }}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Read More Badge */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border-2 border-orange-200">
                                <span className="text-orange-600 font-bold flex items-center">
                                  <span className="mr-2">📖</span>
                                  Read Recipe
                                </span>
                              </div>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                Recipe Blog
                              </span>
                            </div>

                            {/* Date Badge */}
                            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {blog.date}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col" style={{ height: 'calc(400px - 224px)' }}>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 leading-tight line-clamp-2">
                              {blog.title}
                            </h3>

                            {/* Author */}
                            <div className="flex items-center justify-between mt-auto pt-3 border-t border-orange-100">
                              <span className="text-xs text-gray-500 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                {blog.author}
                              </span>
                              
                              <span className="text-orange-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                Read More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-700 hover:text-orange-600 z-20 border-2 border-orange-100 hover:border-orange-300"
                aria-label="Previous recipes"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-700 hover:text-orange-600 z-20 border-2 border-orange-100 hover:border-orange-300"
                aria-label="Next recipes"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Enhanced Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full border-2 ${
                  currentSlide === index 
                    ? 'w-12 h-4 bg-gradient-to-r from-orange-500 to-red-500 border-orange-500 shadow-lg' 
                    : 'w-4 h-4 bg-white border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
              />
            ))}
          </div>
        )}

        {/* Recipe Count Info */}
        {blogs.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Showing {blogs.length} delicious recipes • Fresh from our blog • Updated {new Date().toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}