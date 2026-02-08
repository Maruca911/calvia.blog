import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Utensils, Mountain } from 'lucide-react';
import { supabase, Category, Post } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import PostCard from '../components/PostCard';

export default function Home() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featuredRes, latestRes, localRes, categoriesRes] = await Promise.all([
          supabase
            .from('posts')
            .select('*, categories(*)')
            .eq('is_featured', true)
            .eq('language', language)
            .order('published_at', { ascending: false })
            .limit(4),
          supabase
            .from('posts')
            .select('*, categories(*)')
            .eq('language', language)
            .order('published_at', { ascending: false })
            .limit(6),
          supabase
            .from('posts')
            .select('*, categories!inner(*)')
            .eq('language', language)
            .in('categories.slug', ['local-dining-nightlife', 'calvia-local-guide', 'nature-outdoors'])
            .order('published_at', { ascending: false })
            .limit(4),
          supabase
            .from('categories')
            .select('*')
            .order('name')
        ]);

        if (!featuredRes.error) setFeaturedPosts(featuredRes.data || []);
        if (!latestRes.error) setLatestPosts(latestRes.data || []);
        if (!localRes.error) setLocalPosts(localRes.data || []);
        if (!categoriesRes.error) setCategories(categoriesRes.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Calvia.blog',
    url: 'https://calvia.blog',
    description: 'Your local guide to Calvia, Mallorca with restaurant reviews, nature highlights, tourism hotspots, and lifestyle articles.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://calvia.blog/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-200 border-t-teal-600"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Calvia.blog - Mallorca Local Guide, Dining Reviews & Lifestyle</title>
        <meta
          name="description"
          content="Your essential guide to Calvia, Mallorca. Local restaurant reviews, hidden beaches, hiking trails, tourism hotspots, and lifestyle articles from the heart of the Mediterranean."
        />
        <link rel="canonical" href="https://calvia.blog" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="relative bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/30075399/pexels-photo-30075399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-teal-400" />
              <span className="text-teal-300 text-sm font-medium tracking-wide uppercase">{t.home.location}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {t.home.heroTitle1}<br />
              <span className="text-teal-400">{t.home.heroTitle2}</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              {t.home.heroDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/category/local-dining-nightlife"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition"
              >
                <Utensils size={16} />
                {t.home.localDining}
              </Link>
              <Link
                to="/category/nature-outdoors"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-lg hover:bg-white/20 border border-white/20 transition"
              >
                <Mountain size={16} />
                {t.home.natureOutdoors}
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-lg hover:bg-white/20 border border-white/20 transition"
              >
                {t.home.allArticles}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {localPosts.length > 0 && (
        <section className="bg-teal-50/50 border-b border-teal-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">{t.home.calviaMallorca}</h2>
                <p className="text-gray-500 mt-1">{t.home.localDescription}</p>
              </div>
              <Link
                to="/category/calvia-local-guide"
                className="hidden sm:flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 transition"
              >
                {t.home.seeAllLocal}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {localPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{t.home.featuredArticles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">{t.home.latestArticles}</h2>
            <Link
              to="/blog"
              className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 transition"
            >
              {t.home.viewAll}
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
          {t.home.browseByCategory}
        </h2>
        <p className="text-gray-500 text-center mb-8">{t.home.exploreCurated.replace('{count}', String(categories.length))}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="bg-white p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group text-center"
            >
              <h3 className="font-semibold text-sm text-gray-800 group-hover:text-teal-600 transition">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">{t.home.stayUpdated}</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            {t.home.stayUpdatedDesc}
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.home.emailPlaceholder}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500 transition text-sm"
            />
            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition text-sm shrink-0">
              {t.home.subscribe}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
