import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, Calendar, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { supabase, Post } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import PostCard from '../components/PostCard';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*, categories(*)')
          .eq('slug', slug)
          .eq('language', language)
          .maybeSingle();

        if (error) throw error;
        setPost(data);

        if (data?.category_id) {
          const { data: related } = await supabase
            .from('posts')
            .select('*, categories(*)')
            .eq('category_id', data.category_id)
            .eq('language', language)
            .neq('id', data.id)
            .order('published_at', { ascending: false })
            .limit(3);

          setRelatedPosts(related || []);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, language]);

  const dateLocale = language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'en-US';

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(dateLocale, {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-200 border-t-teal-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.blogPost.articleNotFound}</h1>
          <Link to="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
            {t.blogPost.backToArticles}
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: post.featured_image,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.published_at,
    publisher: { '@type': 'Organization', name: 'Calvia.blog' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': shareUrl }
  };

  return (
    <>
      <Helmet>
        <title>{post.meta_title || post.title}</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        <link rel="canonical" href={`https://calvia.blog/blog/${post.slug}`} />
        <meta property="og:title" content={post.meta_title || post.title} />
        <meta property="og:description" content={post.meta_description || post.excerpt} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://calvia.blog/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:author" content={post.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.meta_title || post.title} />
        <meta name="twitter:description" content={post.meta_description || post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-teal-600 transition mb-6"
          >
            <ArrowLeft size={16} />
            {t.blogPost.allArticles}
          </Link>

          {post.categories && (
            <Link
              to={`/category/${post.categories.slug}`}
              className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-md mb-4 hover:bg-teal-100 transition"
            >
              {post.categories.name}
            </Link>
          )}

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
            <span className="font-semibold text-gray-700">{post.author}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.published_at)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.reading_time} {t.blogPost.minRead}
            </span>
          </div>
        </div>

        {post.featured_image && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <div className="rounded-xl overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mb-10">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="border-t border-gray-100 pt-6 mb-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Share2 size={16} />
              {t.blogPost.shareArticle}
            </h3>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white transition"
                aria-label={t.blogPost.shareTwitter}
              >
                <Twitter size={18} />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition"
                aria-label={t.blogPost.shareFacebook}
              >
                <Facebook size={18} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-blue-700 hover:text-white transition"
                aria-label={t.blogPost.shareLinkedin}
              >
                <Linkedin size={18} />
              </a>
              <button
                onClick={copyLink}
                className="p-2.5 bg-gray-100 rounded-lg hover:bg-teal-600 hover:text-white transition"
                aria-label={t.blogPost.copyLink}
              >
                <LinkIcon size={18} />
              </button>
              {copied && <span className="self-center text-xs text-teal-600 font-medium">{t.blogPost.copied}</span>}
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">{t.blogPost.relatedArticles}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
