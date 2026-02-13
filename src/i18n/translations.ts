export type Language = 'en' | 'de' | 'es';

export interface Translations {
  nav: {
    home: string;
    articles: string;
    faq: string;
    categories: string;
    searchArticles: string;
    toggleMenu: string;
    allArticles: string;
  };
  categoryGroups: {
    calviaMallorca: string;
    lifestyle: string;
    knowledge: string;
  };
  categoryNames: {
    diningNightlife: string;
    localGuide: string;
    natureOutdoors: string;
    travelAdventure: string;
    foodRecipes: string;
    lifestyleCulture: string;
    homeGarden: string;
    technology: string;
    healthWellness: string;
    scienceNature: string;
    businessFinance: string;
    education: string;
    entertainment: string;
    fitnessSports: string;
    personalDev: string;
  };
  home: {
    location: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDescription: string;
    localDining: string;
    natureOutdoors: string;
    allArticles: string;
    calviaMallorca: string;
    localDescription: string;
    seeAllLocal: string;
    featuredArticles: string;
    latestArticles: string;
    viewAll: string;
    browseByCategory: string;
    exploreCurated: string;
    stayUpdated: string;
    stayUpdatedDesc: string;
    emailPlaceholder: string;
    subscribe: string;
  };
  blog: {
    title: string;
    description: string;
    all: string;
    noArticles: string;
    clearFilter: string;
    viewAllArticles: string;
    previousPage: string;
    nextPage: string;
  };
  blogPost: {
    allArticles: string;
    minRead: string;
    shareArticle: string;
    shareTwitter: string;
    shareFacebook: string;
    shareLinkedin: string;
    copyLink: string;
    copied: string;
    relatedArticles: string;
    articleNotFound: string;
    backToArticles: string;
  };
  category: {
    allArticles: string;
    article: string;
    articles: string;
    notFound: string;
    backToArticles: string;
    noArticlesYet: string;
    browseAll: string;
  };
  search: {
    placeholder: string;
    popularSearches: string;
    noResults: string;
    tryDifferent: string;
  };
  footer: {
    description: string;
    location: string;
    calviaMallorca: string;
    moreTopics: string;
    allRights: string;
    aiDisclaimer: string;
  };
  notFound: {
    title: string;
    goHome: string;
  };
  faq: {
    title: string;
    description: string;
    searchPlaceholder: string;
    travelPlanning: string;
    attractions: string;
    accommodation: string;
    foodWeather: string;
    transportSafety: string;
    results: string;
    noResults: string;
    viewAllQuestions: string;
    disclaimer: string;
    disclaimerWarning: string;
    disclaimerVerify: string;
    disclaimerProperty: string;
    disclaimerAI: string;
    browseAllArticles: string;
    travelAdventure: string;
    calviaLocalGuide: string;
  };
  language: {
    en: string;
    de: string;
    es: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    articles: 'Articles',
    faq: 'FAQ',
    categories: 'Categories',
    searchArticles: 'Search articles',
    toggleMenu: 'Toggle menu',
    allArticles: 'All Articles',
  },
  categoryGroups: {
    calviaMallorca: 'Calvia & Mallorca',
    lifestyle: 'Lifestyle',
    knowledge: 'Knowledge',
  },
  categoryNames: {
    diningNightlife: 'Dining & Nightlife',
    localGuide: 'Local Guide',
    natureOutdoors: 'Nature & Outdoors',
    travelAdventure: 'Travel & Adventure',
    foodRecipes: 'Food & Recipes',
    lifestyleCulture: 'Lifestyle & Culture',
    homeGarden: 'Home & Garden',
    technology: 'Technology',
    healthWellness: 'Health & Wellness',
    scienceNature: 'Science & Nature',
    businessFinance: 'Business & Finance',
    education: 'Education',
    entertainment: 'Entertainment',
    fitnessSports: 'Fitness & Sports',
    personalDev: 'Personal Dev',
  },
  home: {
    location: 'Calvia, Mallorca',
    heroTitle1: 'Your Guide to',
    heroTitle2: 'Calvia & Mallorca',
    heroDescription: 'Local restaurant reviews, hidden beaches, hiking trails, and insider tips. Plus global insights on tech, health, and lifestyle.',
    localDining: 'Local Dining',
    natureOutdoors: 'Nature & Outdoors',
    allArticles: 'All Articles',
    calviaMallorca: 'Calvia & Mallorca',
    localDescription: 'Local restaurants, activities, and nature highlights',
    seeAllLocal: 'See all local',
    featuredArticles: 'Featured Articles',
    latestArticles: 'Latest Articles',
    viewAll: 'View all',
    browseByCategory: 'Browse by Category',
    exploreCurated: 'Explore {count} curated topics',
    stayUpdated: 'Stay Updated',
    stayUpdatedDesc: 'Get the latest Calvia guides and lifestyle articles delivered to your inbox.',
    emailPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
  },
  blog: {
    title: 'All Articles',
    description: 'Explore our collection of {count} articles covering Calvia guides, restaurant reviews, nature, and lifestyle.',
    all: 'All',
    noArticles: 'No articles found.',
    clearFilter: 'Clear filter',
    viewAllArticles: 'View all articles',
    previousPage: 'Previous page',
    nextPage: 'Next page',
  },
  blogPost: {
    allArticles: 'All articles',
    minRead: 'min read',
    shareArticle: 'Share this article',
    shareTwitter: 'Share on Twitter',
    shareFacebook: 'Share on Facebook',
    shareLinkedin: 'Share on LinkedIn',
    copyLink: 'Copy link',
    copied: 'Copied!',
    relatedArticles: 'Related Articles',
    articleNotFound: 'Article not found',
    backToArticles: 'Back to all articles',
  },
  category: {
    allArticles: 'All articles',
    article: 'article',
    articles: 'articles',
    notFound: 'Category not found',
    backToArticles: 'Back to all articles',
    noArticlesYet: 'No articles in this category yet.',
    browseAll: 'Browse all articles',
  },
  search: {
    placeholder: 'Search articles, topics, or keywords...',
    popularSearches: 'Popular searches',
    noResults: 'No results found for',
    tryDifferent: 'Try a different keyword or browse categories',
  },
  footer: {
    description: 'Your essential guide to Calvia and Mallorca. Local restaurant reviews, nature highlights, tourism hotspots, and lifestyle articles from the heart of the Mediterranean.',
    location: 'Calvia, Mallorca, Spain',
    calviaMallorca: 'Calvia & Mallorca',
    moreTopics: 'More Topics',
    allRights: 'All rights reserved.',
    aiDisclaimer: 'Content on this page is AI-generated. Information may not be accurate or up to date.',
  },
  notFound: {
    title: '404 - Page Not Found',
    goHome: 'Go back home',
  },
  faq: {
    title: 'Mallorca FAQ',
    description: 'Answers to the 100 most commonly asked questions about visiting, exploring, and living in Mallorca. From travel planning to local tips.',
    searchPlaceholder: 'Search questions...',
    travelPlanning: 'Travel Planning & Basics',
    attractions: 'Attractions & Things to Do',
    accommodation: 'Accommodation & Areas',
    foodWeather: 'Food, Weather & Daily Life',
    transportSafety: 'Transportation, Safety & Expat Info',
    results: 'result',
    noResults: 'No matching questions found. Try a different search term.',
    viewAllQuestions: 'View all questions',
    disclaimer: 'Legal Disclaimer',
    disclaimerWarning: 'The information provided on this page is for general guidance and informational purposes only. It should not be considered legal, medical, financial, or professional advice. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information provided.',
    disclaimerVerify: 'Travel regulations, visa requirements, health guidelines, and local laws can change at any time. Always verify current requirements through official government sources such as the Spanish Ministry of Foreign Affairs, your country\'s consular services, or qualified professionals before making travel or relocation decisions. Property, immigration, and financial decisions should always be made with the guidance of qualified legal and financial advisors.',
    disclaimerProperty: 'All content on Calvia.blog is generated by artificial intelligence. Information may not be fully accurate or current.',
    disclaimerAI: 'All content on Calvia.blog is generated by artificial intelligence. Information may not be fully accurate or current.',
    browseAllArticles: 'Browse All Articles',
    travelAdventure: 'Travel & Adventure',
    calviaLocalGuide: 'Calvia Local Guide',
  },
  language: {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
  },
};

const de: Translations = {
  nav: {
    home: 'Startseite',
    articles: 'Artikel',
    faq: 'FAQ',
    categories: 'Kategorien',
    searchArticles: 'Artikel suchen',
    toggleMenu: 'Menu umschalten',
    allArticles: 'Alle Artikel',
  },
  categoryGroups: {
    calviaMallorca: 'Calvia & Mallorca',
    lifestyle: 'Lebensstil',
    knowledge: 'Wissen',
  },
  categoryNames: {
    diningNightlife: 'Gastronomie & Nachtleben',
    localGuide: 'Lokaler Reiseführer',
    natureOutdoors: 'Natur & Outdoor',
    travelAdventure: 'Reisen & Abenteuer',
    foodRecipes: 'Essen & Rezepte',
    lifestyleCulture: 'Lebensstil & Kultur',
    homeGarden: 'Haus & Garten',
    technology: 'Technologie',
    healthWellness: 'Gesundheit & Wellness',
    scienceNature: 'Wissenschaft & Natur',
    businessFinance: 'Wirtschaft & Finanzen',
    education: 'Bildung',
    entertainment: 'Unterhaltung',
    fitnessSports: 'Fitness & Sport',
    personalDev: 'Persönliche Entwicklung',
  },
  home: {
    location: 'Calvia, Mallorca',
    heroTitle1: 'Ihr Reiseführer für',
    heroTitle2: 'Calvia & Mallorca',
    heroDescription: 'Lokale Restaurantbewertungen, versteckte Strände, Wanderwege und Insidertipps. Plus globale Einblicke in Technologie, Gesundheit und Lebensstil.',
    localDining: 'Lokale Gastronomie',
    natureOutdoors: 'Natur & Outdoor',
    allArticles: 'Alle Artikel',
    calviaMallorca: 'Calvia & Mallorca',
    localDescription: 'Lokale Restaurants, Aktivitäten und Naturhighlights',
    seeAllLocal: 'Alle lokalen Artikel',
    featuredArticles: 'Empfohlene Artikel',
    latestArticles: 'Neueste Artikel',
    viewAll: 'Alle ansehen',
    browseByCategory: 'Nach Kategorie durchsuchen',
    exploreCurated: '{count} kuratierte Themen entdecken',
    stayUpdated: 'Bleiben Sie informiert',
    stayUpdatedDesc: 'Erhalten Sie die neuesten Calvia-Reiseführer und Lifestyle-Artikel direkt in Ihren Posteingang.',
    emailPlaceholder: 'E-Mail-Adresse eingeben',
    subscribe: 'Abonnieren',
  },
  blog: {
    title: 'Alle Artikel',
    description: 'Entdecken Sie unsere Sammlung von {count} Artikeln über Calvia-Reiseführer, Restaurantkritiken, Natur und Lebensstil.',
    all: 'Alle',
    noArticles: 'Keine Artikel gefunden.',
    clearFilter: 'Filter löschen',
    viewAllArticles: 'Alle Artikel ansehen',
    previousPage: 'Vorherige Seite',
    nextPage: 'Nächste Seite',
  },
  blogPost: {
    allArticles: 'Alle Artikel',
    minRead: 'Min. Lesezeit',
    shareArticle: 'Artikel teilen',
    shareTwitter: 'Auf Twitter teilen',
    shareFacebook: 'Auf Facebook teilen',
    shareLinkedin: 'Auf LinkedIn teilen',
    copyLink: 'Link kopieren',
    copied: 'Kopiert!',
    relatedArticles: 'Verwandte Artikel',
    articleNotFound: 'Artikel nicht gefunden',
    backToArticles: 'Zurück zu allen Artikeln',
  },
  category: {
    allArticles: 'Alle Artikel',
    article: 'Artikel',
    articles: 'Artikel',
    notFound: 'Kategorie nicht gefunden',
    backToArticles: 'Zurück zu allen Artikeln',
    noArticlesYet: 'Noch keine Artikel in dieser Kategorie.',
    browseAll: 'Alle Artikel durchsuchen',
  },
  search: {
    placeholder: 'Artikel, Themen oder Schlagwörter suchen...',
    popularSearches: 'Beliebte Suchanfragen',
    noResults: 'Keine Ergebnisse gefunden für',
    tryDifferent: 'Versuchen Sie ein anderes Stichwort oder durchsuchen Sie die Kategorien',
  },
  footer: {
    description: 'Ihr unverzichtbarer Reiseführer für Calvia und Mallorca. Lokale Restaurantbewertungen, Naturhighlights, touristische Hotspots und Lifestyle-Artikel aus dem Herzen des Mittelmeers.',
    location: 'Calvia, Mallorca, Spanien',
    calviaMallorca: 'Calvia & Mallorca',
    moreTopics: 'Weitere Themen',
    allRights: 'Alle Rechte vorbehalten.',
    aiDisclaimer: 'Die Inhalte dieser Seite wurden KI-generiert. Informationen sind möglicherweise nicht korrekt oder aktuell.',
  },
  notFound: {
    title: '404 - Seite nicht gefunden',
    goHome: 'Zurück zur Startseite',
  },
  faq: {
    title: 'Mallorca FAQ',
    description: 'Antworten auf die 100 am häufigsten gestellten Fragen zu Besuch, Erkundung und Leben auf Mallorca. Von Reiseplanung bis zu lokalen Tipps.',
    searchPlaceholder: 'Fragen durchsuchen...',
    travelPlanning: 'Reiseplanung & Grundlagen',
    attractions: 'Attraktionen & Aktivitäten',
    accommodation: 'Unterkunft & Gegenden',
    foodWeather: 'Essen, Wetter & Alltag',
    transportSafety: 'Transport, Sicherheit & Expat-Info',
    results: 'Ergebnis',
    noResults: 'Keine passenden Fragen gefunden. Versuchen Sie einen anderen Suchbegriff.',
    viewAllQuestions: 'Alle Fragen anzeigen',
    disclaimer: 'Rechtlicher Hinweis',
    disclaimerWarning: 'Die auf dieser Seite bereitgestellten Informationen dienen nur zu Informationszwecken. Sie sollten nicht als Rechts-, Medizin-, Finanz- oder Fachberatung betrachtet werden. Obwohl wir uns bemühen, die Informationen genau und aktuell zu halten, geben wir keine Zusicherungen oder Garantien jeglicher Art über die Vollständigkeit, Genauigkeit, Zuverlässigkeit oder Eignung der bereitgestellten Informationen.',
    disclaimerVerify: 'Reisebestimmungen, Visaanforderungen, Gesundheitsrichtlinien und lokale Gesetze können sich jederzeit ändern. Überprüfen Sie aktuelle Anforderungen immer über offizielle Regierungsquellen wie das Spanische Außenministerium, Ihre Konsularstelle oder Fachleute, bevor Sie Reise- oder Umzugsentscheidungen treffen. Immobilien-, Einwanderungs- und Finanzentscheidungen sollten immer mit der Beratung von qualifizierten Rechts- und Finanzfachleuten getroffen werden.',
    disclaimerProperty: 'Alle Inhalte auf Calvia.blog wurden von künstlicher Intelligenz generiert. Die Informationen sind möglicherweise nicht vollständig korrekt oder aktuell.',
    disclaimerAI: 'Alle Inhalte auf Calvia.blog wurden von künstlicher Intelligenz generiert. Die Informationen sind möglicherweise nicht vollständig korrekt oder aktuell.',
    browseAllArticles: 'Alle Artikel durchsuchen',
    travelAdventure: 'Reisen & Abenteuer',
    calviaLocalGuide: 'Calvia Reiseführer',
  },
  language: {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
  },
};

const es: Translations = {
  nav: {
    home: 'Inicio',
    articles: 'Articulos',
    faq: 'Preguntas Frecuentes',
    categories: 'Categorias',
    searchArticles: 'Buscar articulos',
    toggleMenu: 'Alternar menu',
    allArticles: 'Todos los articulos',
  },
  categoryGroups: {
    calviaMallorca: 'Calvia y Mallorca',
    lifestyle: 'Estilo de vida',
    knowledge: 'Conocimiento',
  },
  categoryNames: {
    diningNightlife: 'Gastronomía y Vida nocturna',
    localGuide: 'Guía local',
    natureOutdoors: 'Naturaleza y Aire libre',
    travelAdventure: 'Viajes y Aventura',
    foodRecipes: 'Comida y Recetas',
    lifestyleCulture: 'Estilo de vida y Cultura',
    homeGarden: 'Hogar y Jardín',
    technology: 'Tecnología',
    healthWellness: 'Salud y Bienestar',
    scienceNature: 'Ciencia y Naturaleza',
    businessFinance: 'Negocios y Finanzas',
    education: 'Educación',
    entertainment: 'Entretenimiento',
    fitnessSports: 'Fitness y Deportes',
    personalDev: 'Desarrollo personal',
  },
  home: {
    location: 'Calvia, Mallorca',
    heroTitle1: 'Tu guía de',
    heroTitle2: 'Calvia y Mallorca',
    heroDescription: 'Reseñas de restaurantes locales, playas escondidas, rutas de senderismo y consejos de expertos. Además de perspectivas globales sobre tecnología, salud y estilo de vida.',
    localDining: 'Gastronomía local',
    natureOutdoors: 'Naturaleza y Aire libre',
    allArticles: 'Todos los artículos',
    calviaMallorca: 'Calvia y Mallorca',
    localDescription: 'Restaurantes locales, actividades y destacados naturales',
    seeAllLocal: 'Ver todo lo local',
    featuredArticles: 'Artículos destacados',
    latestArticles: 'Últimos artículos',
    viewAll: 'Ver todo',
    browseByCategory: 'Explorar por categoría',
    exploreCurated: 'Descubre {count} temas seleccionados',
    stayUpdated: 'Mantente informado',
    stayUpdatedDesc: 'Recibe las últimas guías de Calvia y artículos de estilo de vida en tu correo.',
    emailPlaceholder: 'Introduce tu email',
    subscribe: 'Suscribirse',
  },
  blog: {
    title: 'Todos los artículos',
    description: 'Explora nuestra colección de {count} artículos sobre guías de Calvia, reseñas de restaurantes, naturaleza y estilo de vida.',
    all: 'Todos',
    noArticles: 'No se encontraron artículos.',
    clearFilter: 'Borrar filtro',
    viewAllArticles: 'Ver todos los artículos',
    previousPage: 'Página anterior',
    nextPage: 'Página siguiente',
  },
  blogPost: {
    allArticles: 'Todos los artículos',
    minRead: 'min de lectura',
    shareArticle: 'Compartir este artículo',
    shareTwitter: 'Compartir en Twitter',
    shareFacebook: 'Compartir en Facebook',
    shareLinkedin: 'Compartir en LinkedIn',
    copyLink: 'Copiar enlace',
    copied: 'Copiado!',
    relatedArticles: 'Artículos relacionados',
    articleNotFound: 'Artículo no encontrado',
    backToArticles: 'Volver a todos los artículos',
  },
  category: {
    allArticles: 'Todos los artículos',
    article: 'artículo',
    articles: 'artículos',
    notFound: 'Categoría no encontrada',
    backToArticles: 'Volver a todos los artículos',
    noArticlesYet: 'Aún no hay artículos en esta categoría.',
    browseAll: 'Explorar todos los artículos',
  },
  search: {
    placeholder: 'Buscar artículos, temas o palabras clave...',
    popularSearches: 'Búsquedas populares',
    noResults: 'No se encontraron resultados para',
    tryDifferent: 'Prueba con otra palabra clave o explora las categorías',
  },
  footer: {
    description: 'Tu guía esencial de Calvia y Mallorca. Reseñas de restaurantes locales, destacados naturales, puntos turísticos y artículos de estilo de vida desde el corazón del Mediterráneo.',
    location: 'Calvia, Mallorca, España',
    calviaMallorca: 'Calvia y Mallorca',
    moreTopics: 'Más temas',
    allRights: 'Todos los derechos reservados.',
    aiDisclaimer: 'El contenido de esta página ha sido generado por IA. La información puede no ser precisa o estar actualizada.',
  },
  notFound: {
    title: '404 - Página no encontrada',
    goHome: 'Volver al inicio',
  },
  faq: {
    title: 'Preguntas Frecuentes de Mallorca',
    description: 'Respuestas a las 100 preguntas más frecuentes sobre visita, exploración y vida en Mallorca. Desde planificación de viajes hasta consejos locales.',
    searchPlaceholder: 'Buscar preguntas...',
    travelPlanning: 'Planificación de Viajes & Básicos',
    attractions: 'Atracciones & Cosas que Hacer',
    accommodation: 'Alojamiento & Áreas',
    foodWeather: 'Comida, Clima & Vida Diaria',
    transportSafety: 'Transporte, Seguridad & Info de Expatriados',
    results: 'resultado',
    noResults: 'No se encontraron preguntas coincidentes. Intenta con un término de búsqueda diferente.',
    viewAllQuestions: 'Ver todas las preguntas',
    disclaimer: 'Aviso Legal',
    disclaimerWarning: 'La información proporcionada en esta página es solo con fines informativos. No debe considerarse como asesoramiento legal, médico, financiero o profesional. Aunque nos esforzamos por mantener la información precisa y actualizada, no hacemos ninguna representación o garantía de ningún tipo sobre la integridad, precisión, confiabilidad o idoneidad de la información proporcionada.',
    disclaimerVerify: 'Las regulaciones de viaje, requisitos de visa, directrices de salud y leyes locales pueden cambiar en cualquier momento. Siempre verifica los requisitos actuales a través de fuentes oficiales del gobierno, como el Ministerio de Asuntos Exteriores español, los servicios consulares de tu país o profesionales calificados antes de tomar decisiones sobre viajes o reubicación. Las decisiones sobre propiedad, inmigración y finanzas siempre deben tomarse con la orientación de asesores legales y financieros calificados.',
    disclaimerProperty: 'Todo el contenido en Calvia.blog ha sido generado por inteligencia artificial. La información puede no ser completamente precisa o estar actualizada.',
    disclaimerAI: 'Todo el contenido en Calvia.blog ha sido generado por inteligencia artificial. La información puede no ser completamente precisa o estar actualizada.',
    browseAllArticles: 'Explorar Todos los Artículos',
    travelAdventure: 'Viajes y Aventura',
    calviaLocalGuide: 'Guía Local de Calvia',
  },
  language: {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
  },
};

export const translations: Record<Language, Translations> = { en, de, es };
