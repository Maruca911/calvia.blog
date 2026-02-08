export type Language = 'en' | 'de' | 'es';

export interface Translations {
  nav: {
    home: string;
    articles: string;
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
    aiDisclaimer: 'All content on this website is generated by artificial intelligence. Information may not be accurate or up to date.',
  },
  notFound: {
    title: '404 - Page Not Found',
    goHome: 'Go back home',
  },
  language: {
    en: 'English',
    de: 'Deutsch',
    es: 'Espanol',
  },
};

const de: Translations = {
  nav: {
    home: 'Startseite',
    articles: 'Artikel',
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
    localGuide: 'Lokaler Reisefuhrer',
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
    personalDev: 'Personliche Entwicklung',
  },
  home: {
    location: 'Calvia, Mallorca',
    heroTitle1: 'Ihr Reisefuhrer fur',
    heroTitle2: 'Calvia & Mallorca',
    heroDescription: 'Lokale Restaurantbewertungen, versteckte Strande, Wanderwege und Insidertipps. Plus globale Einblicke in Technologie, Gesundheit und Lebensstil.',
    localDining: 'Lokale Gastronomie',
    natureOutdoors: 'Natur & Outdoor',
    allArticles: 'Alle Artikel',
    calviaMallorca: 'Calvia & Mallorca',
    localDescription: 'Lokale Restaurants, Aktivitaten und Naturhighlights',
    seeAllLocal: 'Alle lokalen Artikel',
    featuredArticles: 'Empfohlene Artikel',
    latestArticles: 'Neueste Artikel',
    viewAll: 'Alle ansehen',
    browseByCategory: 'Nach Kategorie durchsuchen',
    exploreCurated: '{count} kuratierte Themen entdecken',
    stayUpdated: 'Bleiben Sie informiert',
    stayUpdatedDesc: 'Erhalten Sie die neuesten Calvia-Reisefuhrer und Lifestyle-Artikel direkt in Ihren Posteingang.',
    emailPlaceholder: 'E-Mail-Adresse eingeben',
    subscribe: 'Abonnieren',
  },
  blog: {
    title: 'Alle Artikel',
    description: 'Entdecken Sie unsere Sammlung von {count} Artikeln uber Calvia-Reisefuhrer, Restaurantkritiken, Natur und Lebensstil.',
    all: 'Alle',
    noArticles: 'Keine Artikel gefunden.',
    clearFilter: 'Filter loschen',
    viewAllArticles: 'Alle Artikel ansehen',
    previousPage: 'Vorherige Seite',
    nextPage: 'Nachste Seite',
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
    backToArticles: 'Zuruck zu allen Artikeln',
  },
  category: {
    allArticles: 'Alle Artikel',
    article: 'Artikel',
    articles: 'Artikel',
    notFound: 'Kategorie nicht gefunden',
    backToArticles: 'Zuruck zu allen Artikeln',
    noArticlesYet: 'Noch keine Artikel in dieser Kategorie.',
    browseAll: 'Alle Artikel durchsuchen',
  },
  search: {
    placeholder: 'Artikel, Themen oder Schlagworter suchen...',
    popularSearches: 'Beliebte Suchanfragen',
    noResults: 'Keine Ergebnisse gefunden fur',
    tryDifferent: 'Versuchen Sie ein anderes Stichwort oder durchsuchen Sie die Kategorien',
  },
  footer: {
    description: 'Ihr unverzichtbarer Reisefuhrer fur Calvia und Mallorca. Lokale Restaurantbewertungen, Naturhighlights, touristische Hotspots und Lifestyle-Artikel aus dem Herzen des Mittelmeers.',
    location: 'Calvia, Mallorca, Spanien',
    calviaMallorca: 'Calvia & Mallorca',
    moreTopics: 'Weitere Themen',
    allRights: 'Alle Rechte vorbehalten.',
    aiDisclaimer: 'Alle Inhalte dieser Website werden durch kunstliche Intelligenz erstellt. Informationen sind moglicherweise nicht korrekt oder aktuell.',
  },
  notFound: {
    title: '404 - Seite nicht gefunden',
    goHome: 'Zuruck zur Startseite',
  },
  language: {
    en: 'English',
    de: 'Deutsch',
    es: 'Espanol',
  },
};

const es: Translations = {
  nav: {
    home: 'Inicio',
    articles: 'Articulos',
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
    diningNightlife: 'Gastronomia y Vida nocturna',
    localGuide: 'Guia local',
    natureOutdoors: 'Naturaleza y Aire libre',
    travelAdventure: 'Viajes y Aventura',
    foodRecipes: 'Comida y Recetas',
    lifestyleCulture: 'Estilo de vida y Cultura',
    homeGarden: 'Hogar y Jardin',
    technology: 'Tecnologia',
    healthWellness: 'Salud y Bienestar',
    scienceNature: 'Ciencia y Naturaleza',
    businessFinance: 'Negocios y Finanzas',
    education: 'Educacion',
    entertainment: 'Entretenimiento',
    fitnessSports: 'Fitness y Deportes',
    personalDev: 'Desarrollo personal',
  },
  home: {
    location: 'Calvia, Mallorca',
    heroTitle1: 'Tu guia de',
    heroTitle2: 'Calvia y Mallorca',
    heroDescription: 'Resenas de restaurantes locales, playas escondidas, rutas de senderismo y consejos de expertos. Ademas de perspectivas globales sobre tecnologia, salud y estilo de vida.',
    localDining: 'Gastronomia local',
    natureOutdoors: 'Naturaleza y Aire libre',
    allArticles: 'Todos los articulos',
    calviaMallorca: 'Calvia y Mallorca',
    localDescription: 'Restaurantes locales, actividades y destacados naturales',
    seeAllLocal: 'Ver todo lo local',
    featuredArticles: 'Articulos destacados',
    latestArticles: 'Ultimos articulos',
    viewAll: 'Ver todo',
    browseByCategory: 'Explorar por categoria',
    exploreCurated: 'Descubre {count} temas seleccionados',
    stayUpdated: 'Mantente informado',
    stayUpdatedDesc: 'Recibe las ultimas guias de Calvia y articulos de estilo de vida en tu correo.',
    emailPlaceholder: 'Introduce tu email',
    subscribe: 'Suscribirse',
  },
  blog: {
    title: 'Todos los articulos',
    description: 'Explora nuestra coleccion de {count} articulos sobre guias de Calvia, resenas de restaurantes, naturaleza y estilo de vida.',
    all: 'Todos',
    noArticles: 'No se encontraron articulos.',
    clearFilter: 'Borrar filtro',
    viewAllArticles: 'Ver todos los articulos',
    previousPage: 'Pagina anterior',
    nextPage: 'Pagina siguiente',
  },
  blogPost: {
    allArticles: 'Todos los articulos',
    minRead: 'min de lectura',
    shareArticle: 'Compartir este articulo',
    shareTwitter: 'Compartir en Twitter',
    shareFacebook: 'Compartir en Facebook',
    shareLinkedin: 'Compartir en LinkedIn',
    copyLink: 'Copiar enlace',
    copied: 'Copiado!',
    relatedArticles: 'Articulos relacionados',
    articleNotFound: 'Articulo no encontrado',
    backToArticles: 'Volver a todos los articulos',
  },
  category: {
    allArticles: 'Todos los articulos',
    article: 'articulo',
    articles: 'articulos',
    notFound: 'Categoria no encontrada',
    backToArticles: 'Volver a todos los articulos',
    noArticlesYet: 'Aun no hay articulos en esta categoria.',
    browseAll: 'Explorar todos los articulos',
  },
  search: {
    placeholder: 'Buscar articulos, temas o palabras clave...',
    popularSearches: 'Busquedas populares',
    noResults: 'No se encontraron resultados para',
    tryDifferent: 'Prueba con otra palabra clave o explora las categorias',
  },
  footer: {
    description: 'Tu guia esencial de Calvia y Mallorca. Resenas de restaurantes locales, destacados naturales, puntos turisticos y articulos de estilo de vida desde el corazon del Mediterraneo.',
    location: 'Calvia, Mallorca, Espana',
    calviaMallorca: 'Calvia y Mallorca',
    moreTopics: 'Mas temas',
    allRights: 'Todos los derechos reservados.',
    aiDisclaimer: 'Todo el contenido de este sitio web es generado por inteligencia artificial. La informacion puede no ser precisa o estar actualizada.',
  },
  notFound: {
    title: '404 - Pagina no encontrada',
    goHome: 'Volver al inicio',
  },
  language: {
    en: 'English',
    de: 'Deutsch',
    es: 'Espanol',
  },
};

export const translations: Record<Language, Translations> = { en, de, es };
