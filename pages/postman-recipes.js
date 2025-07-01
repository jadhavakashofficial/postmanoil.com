import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostmanRecipes() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  
  const postsPerPage = 9;

  useEffect(() => {
    const page = parseInt(router.query.page) || 1;
    setCurrentPage(page);
    fetchPosts(page);
  }, [router.query.page]);

  const fetchPosts = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      // Try multiple API endpoints
      const endpoints = [
        `https://postmanoil.com/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}&_embed&orderby=date&order=desc`,
        `https://postmanoil.com/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}&orderby=date&order=desc`,
        `https://postmanoil.com/blog/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}&_embed&orderby=date&order=desc`,
        `https://postmanoil.com/blog/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}&orderby=date&order=desc`
      ];
      
      let response;
      let apiEndpoint;
      
      // Try each endpoint until one works
      for (const endpoint of endpoints) {
        try {
          console.log('Trying endpoint:', endpoint);
          response = await fetch(endpoint);
          if (response.ok) {
            apiEndpoint = endpoint;
            console.log('Successful endpoint:', endpoint);
            break;
          }
        } catch (err) {
          console.log('Failed endpoint:', endpoint, err.message);
          continue;
        }
      }
      
      if (!response || !response.ok) {
        // If WordPress API fails, use mock data for demonstration
        console.log('All WordPress endpoints failed, using mock data');
        const mockPosts = generateMockPosts(page);
        setPosts(mockPosts.posts);
        setTotalPosts(mockPosts.total);
        setTotalPages(Math.ceil(mockPosts.total / postsPerPage));
        setLoading(false);
        return;
      }
      
      const postsData = await response.json();
      console.log('Fetched posts:', postsData);
      
      const totalPostsCount = parseInt(response.headers.get('X-WP-Total') || postsData.length.toString());
      const totalPagesCount = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      
      // Transform WordPress posts
      const transformedPosts = postsData.map(post => ({
        id: post.id,
        title: post.title?.rendered || 'Untitled Recipe',
        excerpt: (post.excerpt?.rendered || post.content?.rendered || 'Delicious recipe with Postman Oil.')
          .replace(/<[^>]*>/g, '')
          .substring(0, 150) + '...',
        slug: post.slug || `post-${post.id}`,
        featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                      post.featured_media_url ||
                      `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&auto=format`,
        date: new Date(post.date || Date.now()).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: post._embedded?.author?.[0]?.name || post.author_name || 'Postman Oil Team',
        categories: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || 
                   post.categories?.map(cat => cat.name) ||
                   ['Recipes'],
        readTime: calculateReadTime(post.content?.rendered || ''),
        originalUrl: post.link || `https://postmanoil.com/blog/${post.slug || post.id}`
      }));
      
      setPosts(transformedPosts);
      setTotalPosts(totalPostsCount);
      setTotalPages(Math.max(totalPagesCount, Math.ceil(totalPostsCount / postsPerPage)));
      
    } catch (err) {
      console.error('Error fetching posts:', err);
      
      // Fallback to mock data if everything fails
      console.log('Using fallback mock data');
      const mockPosts = generateMockPosts(page);
      setPosts(mockPosts.posts);
      setTotalPosts(mockPosts.total);
      setTotalPages(Math.ceil(mockPosts.total / postsPerPage));
      
    } finally {
      setLoading(false);
    }
  };

  // Generate mock data as fallback
  const generateMockPosts = (page) => {
    const recipes = [
      // ... (same as before)
    ];

    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedRecipes = recipes.slice(startIndex, endIndex);

    return {
      posts: paginatedRecipes.map(recipe => ({
        ...recipe,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: 'Postman Oil Team',
        readTime: `${Math.floor(Math.random() * 5) + 3} min read`,
        originalUrl: `https://postmanoil.com/blog/${recipe.slug}`
      })),
      total: recipes.length
    };
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/postman-recipes?page=${page}`, undefined, { shallow: true });
    }
  };

  const generatePaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="h-12 bg-gradient-to-r from-orange-300 to-yellow-200 rounded-full w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gradient-to-r from-orange-200 to-yellow-100 rounded-full w-48 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                  <div className="h-56 bg-gradient-to-r from-orange-100 to-yellow-50"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gradient-to-r from-orange-100 to-yellow-50 rounded-full mb-4"></div>
                    <div className="h-4 bg-gradient-to-r from-orange-100 to-yellow-50 rounded-full mb-2"></div>
                    <div className="h-4 bg-gradient-to-r from-orange-100 to-yellow-50 rounded-full w-4/5 mb-4"></div>
                    <div className="flex justify-between mt-6">
                      <div className="h-4 w-20 bg-gradient-to-r from-orange-100 to-yellow-50 rounded-full"></div>
                      <div className="h-4 w-24 bg-gradient-to-r from-orange-100 to-yellow-50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gradient-to-br from-white to-orange-50 p-10 rounded-3xl shadow-2xl border border-orange-200 max-w-md">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Recipes</h1>
            <p className="text-gray-600 mb-6">We couldn't load the recipes. Please try again later.</p>
            <button 
              onClick={() => fetchPosts(currentPage)}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Postman Recipes - Delicious Cooking with Postman Oil</title>
        <meta name="description" content="Discover amazing recipes using Postman Oil. From traditional curries to modern fusion dishes, explore our collection of delicious recipes." />
        <meta property="og:title" content="Postman Recipes - Delicious Cooking with Postman Oil" />
        <meta property="og:description" content="Discover amazing recipes using Postman Oil. From traditional curries to modern fusion dishes, explore our collection of delicious recipes." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* Hero Section with reduced spacing */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white py-16 md:py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          
          {/* Floating food icons */}
          <div className="absolute top-6 left-6 text-3xl opacity-20 animate-float">🍳</div>
          <div className="absolute top-16 right-1/4 text-4xl opacity-20 animate-float-delay">🍲</div>
          <div className="absolute bottom-1/4 left-1/3 text-3xl opacity-20 animate-float-delay-2">🥘</div>
          <div className="absolute bottom-16 right-16 text-4xl opacity-20 animate-float">🍛</div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight font-playfair">
              Postman Recipes
            </h1>
            <p className="text-lg md:text-xl font-light mb-6 max-w-3xl mx-auto leading-relaxed">
              Discover the art of cooking with premium Postman Oil. From traditional favorites to innovative fusion dishes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="font-bold">{totalPosts}</span>
                <span className="ml-2">Recipes</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="font-bold">Fresh</span>
                <span className="ml-2">Content</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="font-bold">Expert</span>
                <span className="ml-2">Tips</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Cards Section */}
        <section className="py-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-red-200 to-pink-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {posts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {posts.map((post) => (
                    <Link key={post.id} href={`/recipes/${post.slug}`} className="group block">
                      <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 relative">
                        {/* Featured Image */}
                        <div className="relative h-48 md:h-52 overflow-hidden">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          
                          {/* Categories */}
                          <div className="absolute top-3 left-3">
                            <div className="flex flex-wrap gap-2">
                              {post.categories.slice(0, 2).map((category, index) => (
                                <span 
                                  key={index}
                                  className="px-2.5 py-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs rounded-full font-bold shadow"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Read Time */}
                          <div className="absolute bottom-3 right-3">
                            <span className="px-2.5 py-0.5 bg-white/90 text-gray-800 text-xs rounded-full font-medium shadow">
                              {post.readTime}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight">
                            {post.title}
                          </h2>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          {/* Meta Info */}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center space-x-2">
                              <div className="w-7 h-7 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {post.author.charAt(0)}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500 font-medium">{post.author}</span>
                            </div>
                            
                            <span className="text-xs text-gray-500">{post.date}</span>
                          </div>
                          
                          {/* Read More */}
                          <div className="mt-3">
                            <span className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300 text-sm">
                              Read Recipe
                              <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {/* Enhanced Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center space-x-2 mb-5">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow ${
                          currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:shadow-md'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Page Numbers */}
                      {generatePaginationNumbers().map((page, index) => (
                        <button
                          key={index}
                          onClick={() => typeof page === 'number' && handlePageChange(page)}
                          disabled={page === '...'}
                          className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow text-sm ${
                            page === currentPage
                              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                              : page === '...'
                              ? 'text-gray-400 cursor-default'
                              : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:shadow-md'
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow ${
                          currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:shadow-md'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Page Info */}
                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 px-5 py-2.5 rounded-full">
                      <p className="text-gray-700 text-sm font-medium">
                        Showing <span className="font-bold">{(currentPage - 1) * postsPerPage + 1}</span> to{' '}
                        <span className="font-bold">{Math.min(currentPage * postsPerPage, totalPosts)}</span> of{' '}
                        <span className="font-bold">{totalPosts}</span> recipes
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-inner">
                <div className="text-6xl mb-4 text-orange-400">📝</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">No Recipes Found</h2>
                <p className="text-gray-600 max-w-md mx-auto text-sm">Our chefs are busy creating new delicious recipes. Check back soon!</p>
                <button 
                  onClick={() => fetchPosts(1)}
                  className="mt-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-full font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow text-sm"
                >
                  Refresh Recipes
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-delay-2 {
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
}