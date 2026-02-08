import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { Post } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { language } = useLanguage();
  const dateLocale = language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'en-US';

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(dateLocale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
      <Link to={`/blog/${post.slug}`} className="block">
        {post.featured_image && (
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
      </Link>

      <div className="p-5">
        {post.categories && (
          <Link
            to={`/category/${post.categories.slug}`}
            className="inline-block px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-md mb-3 hover:bg-teal-100 transition"
          >
            {post.categories.name}
          </Link>
        )}

        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition leading-snug line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
          <span className="font-medium text-gray-600">{post.author}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(post.published_at)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.reading_time} min
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
