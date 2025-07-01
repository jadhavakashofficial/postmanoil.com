import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function RecipeBlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      
      // Fetch specific blog post by slug from postmanoil.com
      const response = await fetch(`https://postmanoil.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      
      const posts = await response.json();
      
      if (posts.length === 0) {
        throw new Error('Blog post not found');
      }
      
      const postData = posts[0];
      
      // Transform WordPress post
      const transformedPost = {
        id: postData.id,
        title: postData.title.rendered,
        content: postData.content.rendered,
        excerpt: postData.excerpt.rendered.replace(/<[^>]*>/g, ''),
        featuredImage: postData._embedded?.['wp:featuredmedia']?.[0]?.source_url,
        date: new Date(postData.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: postData._embedded?.author?.[0]?.name || 'Postman Oil Team',
        categories: postData._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || ['Recipes'],
        tags: postData._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || [],
        readTime: calculateReadTime(postData.content.rendered),
        originalUrl: postData.link
      };
      
      setPost(transformedPost);
      fetchRelatedPosts(transformedPost.id);
      setError(null);
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (currentPostId) => {
    try {
      const response = await fetch(`https://postmanoil.com/wp-json/wp/v2/posts?per_page=3&_embed&exclude=${currentPostId}`);
      if (response.ok) {
        const posts = await response.json();
        const related = posts.slice(0, 3).map(p => ({
          id: p.id,
          title: p.title.rendered,
          slug: p.slug,
          featuredImage: p._embedded?.['wp:featuredmedia']?.[0]?.source_url,
          excerpt: p.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 100) + '...',
          date: new Date(p.date).toLocaleDateString()
        }));
        setRelatedPosts(related);
      }
    } catch (err) {
      console.error('Error fetching related posts:', err);
    }
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const sharePost = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || '');
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${title} ${url}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200 max-w-md">
            <div className="text-6xl mb-4">😔</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
            <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist or has been moved.</p>
            <Link 
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Postman Oil Recipes</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={post.originalUrl} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* Main Article Container - Matching website width */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="text-center mb-8">
              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              {/* Title - Responsive sizing */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight px-4">
                {post.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-600 mb-8 text-sm sm:text-base">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{post.author}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-contain bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
          </header>

          {/* Article Content Container */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden mb-8">
                <div className="p-4 sm:p-6 md:p-8">
                  <div 
                    className="prose-none max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content
                        // Modern H1 - Hero style
                        .replace(/<h1([^>]*)>/g, '<h1$1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-12 mt-16 leading-tight" style="background: linear-gradient(135deg, #f59e0b, #ef4444, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: 0 4px 20px rgba(239, 68, 68, 0.3);">')
                        
                        // Modern H2 - Section headers with modern styling
                        .replace(/<h2([^>]*)>/g, '<h2$1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-12 text-slate-800 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-gradient-to-b before:from-orange-400 before:to-red-500 before:rounded-full hover:transform hover:scale-105 transition-all duration-300" style="color: #1e293b !important;">')
                        
                        // Modern H3 - Subsection with contemporary look
                        .replace(/<h3([^>]*)>/g, '<h3$1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 mt-10 text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text relative" style="background: linear-gradient(135deg, #d97706, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">')
                        
                        // Modern H4 - Clean and minimal
                        .replace(/<h4([^>]*)>/g, '<h4$1 class="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 mt-8 text-gray-800 border-b-2 border-gray-200 pb-2" style="color: #1f2937 !important;">')
                        
                        // Modern paragraphs - Better typography
                        .replace(/<p([^>]*)>/g, '<p$1 class="text-lg md:text-xl leading-relaxed mb-8 text-gray-700 font-light tracking-wide" style="color: #374151 !important; line-height: 1.8; font-size: 1.25rem;">')
                        
                        // Modern lists - Card-like design
                        .replace(/<ul([^>]*)>/g, '<ul$1 class="space-y-4 my-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">')
                        .replace(/<ol([^>]*)>/g, '<ol$1 class="space-y-4 my-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">')
                        .replace(/<li([^>]*)>/g, '<li$1 class="flex items-start space-x-4 text-lg text-gray-700 leading-relaxed p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-400 hover:shadow-md transition-all duration-300" style="color: #374151 !important; font-size: 1.125rem;"><span class="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 shadow-lg"></span><span class="flex-1">')
                        
                        // Close span for list items
                        .replace(/<\/li>/g, '</span></li>')
                        
                        // Modern blockquotes - Card style
                        .replace(/<blockquote([^>]*)>/g, '<blockquote$1 class="my-12 p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-l-8 border-gradient-to-b from-blue-500 to-purple-600 rounded-2xl shadow-2xl relative overflow-hidden" style="border-left: 8px solid #3b82f6; font-size: 1.375rem; line-height: 1.7;"><div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div><div class="relative z-10 text-gray-800 italic font-medium" style="color: #1f2937 !important;">')
                        
                        // Close div for blockquotes
                        .replace(/<\/blockquote>/g, '</div></blockquote>')
                        
                        // Modern strong/bold - More prominent
                        .replace(/<strong([^>]*)>/g, '<strong$1 class="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-lg hover:bg-orange-200 transition-colors duration-200" style="color: #ea580c !important; font-weight: 700;">')
                        .replace(/<b([^>]*)>/g, '<b$1 class="font-bold text-red-600 bg-red-100 px-2 py-1 rounded-lg" style="color: #dc2626 !important; font-weight: 700;">')
                        
                        // Modern emphasis - Stylish italic
                        .replace(/<em([^>]*)>/g, '<em$1 class="italic text-amber-700 font-medium underline decoration-amber-300 decoration-2 underline-offset-4" style="color: #b45309 !important;">')
                        .replace(/<i([^>]*)>/g, '<i$1 class="italic text-orange-600 font-medium" style="color: #ea580c !important;">')
                        
                        // Modern links - Button-like
                        .replace(/<a ([^>]*)>/g, '<a $1 class="inline-flex items-center text-blue-600 font-semibold hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full border-2 border-blue-600 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 no-underline" style="color: #2563eb !important; text-decoration: none; font-size: 1rem;">')
                        
                        // Modern images - Better presentation
                        .replace(/<img ([^>]*)>/g, '<img $1 class="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl my-12 border-8 border-white hover:scale-105 transition-transform duration-500 object-contain bg-gradient-to-br from-gray-50 to-gray-100" style="max-height: 700px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">')
                        
                        // Modern tables - Clean design
                        .replace(/<table([^>]*)>/g, '<table$1 class="w-full my-12 bg-white rounded-2xl overflow-hidden shadow-2xl border-0">')
                        .replace(/<thead([^>]*)>/g, '<thead$1 class="bg-gradient-to-r from-slate-800 to-slate-900">')
                        .replace(/<th([^>]*)>/g, '<th$1 class="px-6 py-4 text-left text-white font-bold text-lg uppercase tracking-wider" style="color: #ffffff !important; font-size: 1.125rem;">')
                        .replace(/<tbody([^>]*)>/g, '<tbody$1 class="divide-y divide-gray-200">')
                        .replace(/<tr([^>]*)>/g, '<tr$1 class="hover:bg-gray-50 transition-colors duration-200">')
                        .replace(/<td([^>]*)>/g, '<td$1 class="px-6 py-4 text-gray-700 text-lg" style="color: #374151 !important; font-size: 1.125rem;">')
                        
                        // Modern code - Syntax highlighting style
                        .replace(/<code([^>]*)>/g, '<code$1 class="bg-gradient-to-r from-slate-800 to-slate-900 text-green-400 px-4 py-2 rounded-lg text-base font-mono shadow-lg border border-slate-700 hover:shadow-xl transition-shadow duration-200" style="color: #4ade80 !important; font-size: 1rem;">')
                        .replace(/<pre([^>]*)>/g, '<pre$1 class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-green-400 p-8 rounded-2xl overflow-x-auto my-12 shadow-2xl border-2 border-slate-700 relative" style="color: #4ade80 !important; font-size: 1rem;"><div class="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-t-2xl flex items-center px-4"><div class="flex space-x-2"><div class="w-3 h-3 bg-red-500 rounded-full"></div><div class="w-3 h-3 bg-yellow-500 rounded-full"></div><div class="w-3 h-3 bg-green-500 rounded-full"></div></div></div><div class="pt-8">')
                        
                        // Close div for pre
                        .replace(/<\/pre>/g, '</div></pre>')
                        
                        // Remove white text issues
                        .replace(/color:\s*white\s*;?/gi, 'color: #374151 !important;')
                        .replace(/color:\s*#ffffff\s*;?/gi, 'color: #374151 !important;')
                        .replace(/color:\s*#fff\s*;?/gi, 'color: #374151 !important;')
                        
                        // Modern spans and divs
                        .replace(/<span([^>]*)>/g, '<span$1 class="text-gray-700" style="color: #374151 !important;">')
                        .replace(/<div([^>]*)>/g, '<div$1 class="text-gray-700" style="color: #374151 !important;">')
                        
                        // Remove problematic backgrounds
                        .replace(/background-color:\s*white\s*;?/gi, 'background-color: transparent;')
                        .replace(/background-color:\s*#ffffff\s*;?/gi, 'background-color: transparent;')
                        .replace(/background-color:\s*#fff\s*;?/gi, 'background-color: transparent;')
                    }}
                  />
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 mb-8 border border-orange-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Share this recipe with friends!</h3>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => sharePost('facebook')}
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => sharePost('twitter')}
                    className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => sharePost('linkedin')}
                    className="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => sharePost('whatsapp')}
                    className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 hover:scale-110 transform"
                    aria-label="Share on WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6 sticky top-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">More Recipes</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link 
                        key={relatedPost.id}
                        href={`/recipes/${relatedPost.slug}`}
                        className="group block"
                      >
                        <article className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100">
                          {relatedPost.featuredImage && (
                            <div className="relative h-24 overflow-hidden">
                              <img
                                src={relatedPost.featuredImage}
                                alt={relatedPost.title}
                                className="w-full h-full object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="p-3">
                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300 text-sm line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-gray-600 text-xs line-clamp-2 mb-2">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{relatedPost.date}</span>
                              <span className="text-orange-600 text-xs font-medium group-hover:translate-x-1 transition-transform duration-300">
                                Read →
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Full Width Related Posts for Mobile */}
          <div className="lg:hidden mt-8">
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">More Delicious Recipes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id}
                      href={`/recipes/${relatedPost.slug}`}
                      className="group block"
                    >
                      <article className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                        {relatedPost.featuredImage && (
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={relatedPost.featuredImage}
                              alt={relatedPost.title}
                              className="w-full h-full object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-orange-200">
                            <span className="text-xs text-gray-500">{relatedPost.date}</span>
                            <span className="text-orange-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                              Read More →
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}