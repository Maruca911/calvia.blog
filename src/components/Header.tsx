import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

interface HeaderProps {
  onSearchClick: () => void;
}

const languageOptions: { code: Language; flag: string }[] = [
  { code: 'en', flag: 'GB' },
  { code: 'de', flag: 'DE' },
  { code: 'es', flag: 'ES' },
];

function getCategoryGroups(t: ReturnType<typeof useLanguage>['t']) {
  return [
    {
      title: t.categoryGroups.calviaMallorca,
      items: [
        { slug: 'local-dining-nightlife', name: t.categoryNames.diningNightlife },
        { slug: 'calvia-local-guide', name: t.categoryNames.localGuide },
        { slug: 'nature-outdoors', name: t.categoryNames.natureOutdoors },
      ],
    },
    {
      title: t.categoryGroups.lifestyle,
      items: [
        { slug: 'travel-adventure', name: t.categoryNames.travelAdventure },
        { slug: 'food-recipes', name: t.categoryNames.foodRecipes },
        { slug: 'lifestyle-culture', name: t.categoryNames.lifestyleCulture },
        { slug: 'home-garden', name: t.categoryNames.homeGarden },
      ],
    },
    {
      title: t.categoryGroups.knowledge,
      items: [
        { slug: 'technology-innovation', name: t.categoryNames.technology },
        { slug: 'health-wellness', name: t.categoryNames.healthWellness },
        { slug: 'science-nature', name: t.categoryNames.scienceNature },
        { slug: 'business-finance', name: t.categoryNames.businessFinance },
        { slug: 'education-learning', name: t.categoryNames.education },
        { slug: 'entertainment-media', name: t.categoryNames.entertainment },
        { slug: 'fitness-sports', name: t.categoryNames.fitnessSports },
        { slug: 'personal-development', name: t.categoryNames.personalDev },
      ],
    },
  ];
}

export default function Header({ onSearchClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const categoryGroups = getCategoryGroups(t);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg leading-none">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Calvia<span className="text-teal-600">.blog</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-lg hover:bg-gray-50 transition"
            >
              {t.nav.home}
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-lg hover:bg-gray-50 transition"
            >
              {t.nav.articles}
            </Link>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-lg hover:bg-gray-50 transition"
              >
                {t.nav.categories}
                <ChevronDown size={14} className={`transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full right-0 mt-1 w-[540px] bg-white rounded-xl shadow-xl border border-gray-100 p-5 grid grid-cols-3 gap-5">
                  {categoryGroups.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        {group.title}
                      </h4>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              to={`/category/${item.slug}`}
                              className="block px-2 py-1.5 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onSearchClick}
              className="ml-1 p-2.5 text-gray-500 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition"
              aria-label={t.nav.searchArticles}
            >
              <Search size={18} />
            </button>

            <div ref={langRef} className="relative ml-1">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-gray-500 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition"
                aria-label="Language"
              >
                <Globe size={16} />
                <span className="uppercase text-xs font-semibold">{language}</span>
              </button>

              {langOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 overflow-hidden">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLanguage(opt.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition ${
                        language === opt.code
                          ? 'text-teal-600 bg-teal-50 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${opt.flag.toLowerCase()}.png`}
                        alt={opt.flag}
                        className="w-5 h-auto rounded-sm"
                      />
                      {t.language[opt.code]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onSearchClick}
              className="p-2 text-gray-600"
              aria-label={t.nav.searchArticles}
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600"
              aria-label={t.nav.toggleMenu}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 px-3 mb-3">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => setLanguage(opt.code)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                      language === opt.code
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/w20/${opt.flag.toLowerCase()}.png`}
                      alt={opt.flag}
                      className="w-4 h-auto rounded-sm"
                    />
                    {opt.code.toUpperCase()}
                  </button>
                ))}
              </div>

              <Link to="/" className="px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 rounded-lg">
                {t.nav.home}
              </Link>
              <Link to="/blog" className="px-3 py-2.5 text-gray-800 font-medium hover:bg-gray-50 rounded-lg">
                {t.nav.allArticles}
              </Link>
              {categoryGroups.map((group) => (
                <div key={group.title}>
                  <div className="mt-3 mb-1 px-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{group.title}</p>
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/category/${item.slug}`}
                      className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg block"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
