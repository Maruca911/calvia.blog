import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, AlertTriangle } from 'lucide-react';
import { faqSections, FaqItem } from '../data/faqData';
import FaqAccordion from '../components/FaqAccordion';
import { useLanguage } from '../i18n/LanguageContext';

const SECTION_ICONS = ['plane', 'compass', 'bed', 'utensils', 'car'] as const;

function getAllFaqs(): { item: FaqItem; sectionIndex: number; localIndex: number; globalIndex: number }[] {
  const result: { item: FaqItem; sectionIndex: number; localIndex: number; globalIndex: number }[] = [];
  let globalIndex = 0;
  faqSections.forEach((section, sectionIndex) => {
    section.faqs.forEach((item, localIndex) => {
      result.push({ item, sectionIndex, localIndex, globalIndex });
      globalIndex++;
    });
  });
  return result;
}

export default function FAQ() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const allFaqs = getAllFaqs();

  const filteredFaqs = searchQuery.trim()
    ? allFaqs.filter(
        ({ item }) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(({ item }) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace(/<[^>]*>/g, ''),
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calvia.blog/' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://calvia.blog/faq' },
    ],
  };

  let cumulativeIndex = 0;

  return (
    <>
      <Helmet>
        <title>{t.faq.title} - 100 Most Asked Questions About Mallorca | Calvia.blog</title>
        <meta
          name="description"
          content={t.faq.description}
        />
        <link rel="canonical" href="https://calvia.blog/faq" />
        <meta property="og:title" content={`${t.faq.title} - 100 Most Asked Questions About Mallorca`} />
        <meta
          property="og:description"
          content={t.faq.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calvia.blog/faq" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${t.faq.title} - 100 Questions Answered`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen">
        <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:text-teal-600 transition">Home</Link>
              <ChevronRight size={14} />
              <span className="text-gray-900 font-medium">FAQ</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t.faq.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              {t.faq.description}
            </p>

            <div className="relative max-w-lg">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.faq.searchPlaceholder}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {!searchQuery && (
              <div className="flex flex-wrap gap-2 mt-6">
                {faqSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
                      activeSection === section.id
                        ? 'bg-teal-50 border-teal-200 text-teal-700'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-teal-200 hover:text-teal-600'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {filteredFaqs ? (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <p className="text-sm text-gray-500 mb-6">
              {filteredFaqs.length} {filteredFaqs.length === 1 ? t.faq.results : `${t.faq.results}s`} for "{searchQuery}"
            </p>
            {filteredFaqs.length > 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
                {filteredFaqs.map(({ item, globalIndex }) => (
                  <FaqAccordion key={globalIndex} item={item} index={globalIndex} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">{t.faq.noResults}</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  {t.faq.viewAllQuestions}
                </button>
              </div>
            )}
          </section>
        ) : (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
            {faqSections.map((section) => {
              const sectionStart = cumulativeIndex;
              cumulativeIndex += section.faqs.length;

              return (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                      {t.faq[section.id as keyof typeof t.faq] || section.title}
                    </h2>
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                      {section.faqs.length}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                    {section.faqs.map((item, localIndex) => (
                      <FaqAccordion
                        key={localIndex}
                        item={item}
                        index={sectionStart + localIndex}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <section className="bg-gray-50 border-t border-gray-100 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-xl">
              <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900 leading-relaxed">
                <p className="font-semibold mb-2">{t.faq.disclaimer}</p>
                <p>
                  {t.faq.disclaimerWarning}
                </p>
                <p className="mt-2">
                  {t.faq.disclaimerVerify}
                </p>
                <p className="mt-2 text-amber-700 italic">
                  {t.faq.disclaimerAI}
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Explore more about Mallorca</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/blog"
                  className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition"
                >
                  {t.faq.browseAllArticles}
                </Link>
                <Link
                  to="/category/travel-adventure"
                  className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-teal-200 hover:text-teal-600 transition"
                >
                  {t.faq.travelAdventure}
                </Link>
                <Link
                  to="/category/calvia-local-guide"
                  className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:border-teal-200 hover:text-teal-600 transition"
                >
                  {t.faq.calviaLocalGuide}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
