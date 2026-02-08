import { useState, useEffect, useCallback, useRef } from 'react';
import { X, Search as SearchIcon, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase, Post } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, language } = useLanguage();

  const searchPosts = useCallback(async (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    if (!trimmed) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const { data: ftsData, error: ftsError } = await supabase
        .from('posts')
        .select('*, categories(*)')
        .eq('language', language)
        .textSearch('fts', trimmed, { type: 'websearch', config: 'english' })
        .limit(8);

      if (!ftsError && ftsData && ftsData.length > 0) {
        setResults(ftsData);
      } else {
        const pattern = `%${trimmed}%`;
        const { data: titleData } = await supabase
          .from('posts')
          .select('*, categories(*)')
          .eq('language', language)
          .ilike('title', pattern)
          .order('published_at', { ascending: false })
          .limit(8);

        if (titleData && titleData.length > 0) {
          setResults(titleData);
        } else {
          const { data: excerptData } = await supabase
            .from('posts')
            .select('*, categories(*)')
            .eq('language', language)
            .ilike('excerpt', pattern)
            .order('published_at', { ascending: false })
            .limit(8);
          setResults(excerptData || []);
        }
      }
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [language]);

  useEffect(() => {
    const timeoutId = setTimeout(() => searchPosts(query), 300);
    return () => clearTimeout(timeoutId);
  }, [query, searchPosts]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dateLocale = language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'en-US';
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(dateLocale, { month: 'short', day: 'numeric' });

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[70vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <SearchIcon size={20} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder={t.search.placeholder}
            className="flex-1 outline-none text-base text-gray-800 placeholder:text-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded-md font-mono">ESC</kbd>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-teal-600"></div>
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="text-center py-12 px-4">
              <p className="text-gray-500 mb-1">{t.search.noResults} "<span className="font-medium text-gray-700">{query}</span>"</p>
              <p className="text-sm text-gray-400">{t.search.tryDifferent}</p>
            </div>
          )}

          {!loading && !query && (
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.search.popularSearches}</p>
              <div className="flex flex-wrap gap-2">
                {['Calvia restaurants', 'padel Calvia', 'pilates Mallorca', 'hiking trails', 'hidden beaches', 'tapas bars'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-teal-50 hover:text-teal-700 rounded-full transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="p-2">
              {results.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  onClick={onClose}
                  className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition group"
                >
                  {post.featured_image && (
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-gray-900 group-hover:text-teal-600 transition line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{post.excerpt}</p>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400">
                      {post.categories && (
                        <span className="text-teal-600 font-medium">{post.categories.name}</span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {post.reading_time} min
                      </span>
                      <span>{formatDate(post.published_at)}</span>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-teal-500 transition mt-1 shrink-0" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
