import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { supabase, Category as CategoryType, Post } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import PostCard from '../components/PostCard';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchCategoryAndPosts = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const { data: categoryData, error: categoryError } = await supabase
          .from('categories')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (categoryError) throw categoryError;
        if (!categoryData) {
          setCategory(null);
          setLoading(false);
          return;
        }
        setCategory(categoryData);

        const { data: postsData, error: postsError } = await supabase
          .from('posts')
          .select('*, categories(*)')
          .eq('category_id', categoryData.id)
          .eq('language', language)
          .order('published_at', { ascending: false });

        if (postsError) throw postsError;
        setPosts(postsData || []);
      } catch (error) {
        console.error('Error fetching category data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, language]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-200 border-t-teal-600"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-bold text-gray-900 mb-4">{t.category.notFound}</h1>
          <Link to="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
            {t.category.backToArticles}
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} - Calvia.blog`,
    description: category.description,
    url: `https://calvia.blog/category/${category.slug}`,
    isPartOf: { '@type': 'WebSite', name: 'Calvia.blog', url: 'https://calvia.blog' }
  };

  return (
    <>
      <Helmet>
        <title>{category.name} - Calvia.blog | Articles & Guides</title>
        <meta name="description" content={category.description} />
        <link rel="canonical" href={`https://calvia.blog/category/${category.slug}`} />
        <meta property="og:title" content={`${category.name} - Calvia.blog`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:url" content={`https://calvia.blog/category/${category.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-gray-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-teal-400 transition mb-5"
          >
            <ArrowLeft size={16} />
            {t.category.allArticles}
          </Link>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            {category.name}
          </h1>
          <p className="text-gray-300 max-w-lg mb-2">{category.description}</p>
          <p className="text-sm text-gray-500">
            {posts.length} {posts.length === 1 ? t.category.article : t.category.articles}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-2">{t.category.noArticlesYet}</p>
            <Link to="/blog" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
              {t.category.browseAll}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
