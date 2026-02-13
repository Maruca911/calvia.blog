import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const localLinks = [
    { slug: 'local-dining-nightlife', name: t.categoryNames.diningNightlife },
    { slug: 'calvia-local-guide', name: t.categoryNames.localGuide },
    { slug: 'nature-outdoors', name: t.categoryNames.natureOutdoors },
    { slug: 'travel-adventure', name: t.categoryNames.travelAdventure },
  ];

  const moreLinks = [
    { slug: 'technology-innovation', name: t.categoryNames.technology },
    { slug: 'health-wellness', name: t.categoryNames.healthWellness },
    { slug: 'lifestyle-culture', name: t.categoryNames.lifestyleCulture },
    { slug: 'fitness-sports', name: t.categoryNames.fitnessSports },
    { slug: 'food-recipes', name: t.categoryNames.foodRecipes },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-teal-600 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm leading-none">C</span>
              </div>
              <span className="text-xl font-bold text-white">
                Calvia<span className="text-teal-500">.blog</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin size={14} className="text-teal-500" />
              <span>{t.footer.location}</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.calviaMallorca}</h3>
            <ul className="space-y-2.5">
              {localLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    to={`/category/${link.slug}`}
                    className="text-sm text-gray-400 hover:text-teal-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{t.footer.moreTopics}</h3>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    to={`/category/${link.slug}`}
                    className="text-sm text-gray-400 hover:text-teal-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex justify-center gap-6 mb-4">
            <Link to="/blog" className="text-sm text-gray-400 hover:text-teal-400 transition">
              {t.nav.articles}
            </Link>
            <Link to="/faq" className="text-sm text-gray-400 hover:text-teal-400 transition">
              {t.nav.faq}
            </Link>
          </div>
          <div className="text-center text-gray-500 text-xs space-y-2">
          <p className="text-gray-600 italic">{t.footer.aiDisclaimer}</p>
          <p>&copy; {new Date().getFullYear()} Calvia.blog. {t.footer.allRights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
