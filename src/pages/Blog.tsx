import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, Category, Post } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import PostCard from '../components/PostCard';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 12;
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from('categories').select('*').order('name');
      if (data) setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const from = (currentPage - 1) * postsPerPage;
        const to = from + postsPerPage - 1;

        let postsQuery = supabase
          .from('posts')
          .select('*, categories(*)')
          .eq('language', language)
          .order('published_at', { ascending: false })
          .range(from, to);

        let countQuery = supabase
          .from('posts')
          .select('*', { count: 'exact', head: true })
          .eq('language', language);

        if (activeCategory) {
          postsQuery = postsQuery.eq('category_id', activeCategory);
          countQuery = countQuery.eq('category_id', activeCategory);
        }

        const [postsRes, countRes] = await Promise.all([postsQuery, countQuery]);

        if (!postsRes.error) setPosts(postsRes.data || []);
        if (!countRes.error && countRes.count !== null) setTotalPosts(countRes.count);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, activeCategory, language]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleCategoryClick = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Articles - Calvia.blog',
    description: 'Browse all articles on Calvia.blog covering Calvia local guides, Mallorca dining, nature highlights, technology, health, and lifestyle.',
    url: 'https://calvia.blog/blog',
    isPartOf: { '@type': 'WebSite', name: 'Calvia.blog', url: 'https://calvia.blog' }
  };

  return (
    <>
      <Helmet>
        <title>All Articles - Calvia.blog | Mallorca Guides, Dining & Lifestyle</title>
        <meta
          name="description"
          content="Browse all articles on Calvia.blog. Discover Calvia restaurant reviews, Mallorca nature highlights, tourism hotspots, and lifestyle insights."
        />
        <link rel="canonical" href="https://calvia.blog/blog" />
        <meta property="og:title" content="All Articles - Calvia.blog" />
        <meta property="og:description" content="Browse all articles on Calvia.blog covering Calvia local guides, dining, nature, and lifestyle." />
        <meta property="og:url" content="https://calvia.blog/blog" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="bg-gray-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">{t.blog.title}</h1>
          <p className="text-gray-300 max-w-lg">
            {t.blog.description.replace('{count}', String(totalPosts))}
          </p>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                !activeCategory
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t.blog.all}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeCategory === cat.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-200 border-t-teal-600"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-2">{t.blog.noArticles}</p>
            {activeCategory && (
              <button
                onClick={() => handleCategoryClick(null)}
                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
              >
                {t.blog.clearFilter}
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Pagination">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2.5 bg-white border border-gray-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              aria-label={t.blog.previousPage}
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                  currentPage === page
                    ? 'bg-teal-600 text-white'
                    : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 bg-white border border-gray-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              aria-label={t.blog.nextPage}
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        )}

        {activeCategory && (
          <div className="text-center mt-6">
            <Link to="/blog" onClick={() => handleCategoryClick(null)} className="text-sm text-teal-600 hover:text-teal-700 font-medium">
              {t.blog.viewAllArticles}
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
