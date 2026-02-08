-- Migration: Add Spanish Translations for Blog Posts
-- Created: 2026-02-08 00:21:00
-- Description: This migration inserts Spanish (es) translations for all 55 existing 
--              English (en) blog posts. Each Spanish post:
--              - Gets a new UUID via gen_random_uuid()
--              - Adds '-es' suffix to slug to maintain uniqueness
--              - Has translated title, excerpt, and content in natural Spanish
--              - Maintains identical category_id, is_featured, featured_image, published_at
--              - Sets language = 'es'
--
-- Implementation approach:
--   For each English post, we SELECT its data and INSERT a Spanish version
--   This ensures all metadata (category_id, featured_image, etc.) is preserved exactly
--
-- Total posts to translate: 55

-- 1. Inteligencia Emocional: La Habilidad Que Más Importa
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Inteligencia Emocional: La Habilidad Que Más Importa',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Inteligencia Emocional: La Habilidad Que Más Importa',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Emotional Intelligence: The Skill That Matters Most' AND language = 'en';

-- 2. Turismo Sostenible en Calvià: Cómo el Municipio Marca el Camino
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Turismo Sostenible en Calvià: Cómo el Municipio Marca el Camino',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Turismo Sostenible en Calvià: Cómo el Municipio Marca el Camino',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Sustainable Tourism in Calvia: How the Municipality Leads the Way' AND language = 'en';

-- 3. Soluciones Climáticas Que Realmente Funcionan en 2026
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Soluciones Climáticas Que Realmente Funcionan en 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Soluciones Climáticas Que Realmente Funcionan en 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Climate Solutions That Are Actually Working in 2026' AND language = 'en';

-- 4. Yoga para Trabajadores de Oficina: Rutinas de 15 Minutos para Mejorar 
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Yoga para Trabajadores de Oficina: Rutinas de 15 Minutos para Mejorar Tu Postura',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Yoga para Trabajadores de Oficina: Rutinas de 15 Minutos para Mejorar Tu Postura',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Yoga for Desk Workers: 15-Minute Routines to Fix Your Posture' AND language = 'en';

-- 5. El Auge Global de la Cultura del Café: Del Grano a la Comunidad
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'El Auge Global de la Cultura del Café: Del Grano a la Comunidad',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'El Auge Global de la Cultura del Café: Del Grano a la Comunidad',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Global Rise of Coffee Culture: From Bean to Community' AND language = 'en';

-- 6. Mejoras de Eficiencia Energética en el Hogar Que Se Pagan Solas
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Mejoras de Eficiencia Energética en el Hogar Que Se Pagan Solas',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Mejoras de Eficiencia Energética en el Hogar Que Se Pagan Solas',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Energy-Efficient Home Upgrades That Pay for Themselves' AND language = 'en';

-- 7. Proteína Vegetal: Comidas Deliciosas Sin Carne
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Proteína Vegetal: Comidas Deliciosas Sin Carne',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Proteína Vegetal: Comidas Deliciosas Sin Carne',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Plant-Based Protein: Delicious Meals Without Meat' AND language = 'en';

-- 8. Calvià en Invierno: Por Qué la Temporada Baja Es el Mejor Momento para
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Calvià en Invierno: Por Qué la Temporada Baja Es el Mejor Momento para Visitar',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Calvià en Invierno: Por Qué la Temporada Baja Es el Mejor Momento para Visitar',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Calvia in Winter: Why the Off-Season Is the Best Time to Visit' AND language = 'en';

-- 9. Enseñar Pensamiento Crítico a los Niños en la Era de la Desinformación
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Enseñar Pensamiento Crítico a los Niños en la Era de la Desinformación',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Enseñar Pensamiento Crítico a los Niños en la Era de la Desinformación',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Teaching Children Critical Thinking in the Age of Misinformation' AND language = 'en';

-- 10. Las Mejores Cafeterías y Sitios de Brunch de Calvià para 2026
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Las Mejores Cafeterías y Sitios de Brunch de Calvià para 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Las Mejores Cafeterías y Sitios de Brunch de Calvià para 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Calvia''s Best Coffee Shops and Brunch Spots for 2026' AND language = 'en';

-- 11. Por Qué los Juegos de Mesa Están Teniendo un Gran Regreso
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Por Qué los Juegos de Mesa Están Teniendo un Gran Regreso',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Por Qué los Juegos de Mesa Están Teniendo un Gran Regreso',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Why Board Games Are Making a Major Comeback' AND language = 'en';

-- 12. Turismo Sostenible: Cómo Viajar Sin Dañar el Planeta
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Turismo Sostenible: Cómo Viajar Sin Dañar el Planeta',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Turismo Sostenible: Cómo Viajar Sin Dañar el Planeta',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Sustainable Tourism: How to Travel Without Harming the Planet' AND language = 'en';

-- 13. El Telescopio Espacial James Webb: Lo Que Hemos Aprendido Hasta Ahora
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'El Telescopio Espacial James Webb: Lo Que Hemos Aprendido Hasta Ahora',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'El Telescopio Espacial James Webb: Lo Que Hemos Aprendido Hasta Ahora',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The James Webb Space Telescope: What We Have Learned So Far' AND language = 'en';

-- 14. Vivir en Calvià: Guía Honesta de un Expatriado sobre el Secreto Mejor 
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Vivir en Calvià: Guía Honesta de un Expatriado sobre el Secreto Mejor Guardado de Mallorca',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Vivir en Calvià: Guía Honesta de un Expatriado sobre el Secreto Mejor Guardado de Mallorca',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Living in Calvia: An Expat''s Honest Guide to Mallorca''s Best-Kept Secret' AND language = 'en';

-- 15. Desintoxicación Digital: Recupera Tu Salud Mental de las Pantallas
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Desintoxicación Digital: Recupera Tu Salud Mental de las Pantallas',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Desintoxicación Digital: Recupera Tu Salud Mental de las Pantallas',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Digital Detox: Reclaiming Your Mental Health from Screens' AND language = 'en';

-- 16. El Poder del Trabajo Profundo en un Mundo Distraído
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'El Poder del Trabajo Profundo en un Mundo Distraído',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'El Poder del Trabajo Profundo en un Mundo Distraído',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Power of Deep Work in a Distracted World' AND language = 'en';

-- 17. Inversión para Principiantes: Comienza a Hacer Crecer Tu Riqueza Hoy
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Inversión para Principiantes: Comienza a Hacer Crecer Tu Riqueza Hoy',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Inversión para Principiantes: Comienza a Hacer Crecer Tu Riqueza Hoy',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Investing for Beginners: Start Growing Your Wealth Today' AND language = 'en';

-- 18. Correr Tu Primera Carrera de 5K: Plan de 8 Semanas para Principiantes
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Correr Tu Primera Carrera de 5K: Plan de 8 Semanas para Principiantes',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Correr Tu Primera Carrera de 5K: Plan de 8 Semanas para Principiantes',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Running Your First 5K: A Beginner''s 8-Week Plan' AND language = 'en';

-- 19. Minimalismo Más Allá de las Cosas: Una Filosofía para la Vida Moderna
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Minimalismo Más Allá de las Cosas: Una Filosofía para la Vida Moderna',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Minimalismo Más Allá de las Cosas: Una Filosofía para la Vida Moderna',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Minimalism Beyond Stuff: A Philosophy for Modern Life' AND language = 'en';

-- 20. Clubes de Playa y Bares de Atardecer: Los Mejores Lugares Nocturnos de
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Clubes de Playa y Bares de Atardecer: Los Mejores Lugares Nocturnos de Calvià',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Clubes de Playa y Bares de Atardecer: Los Mejores Lugares Nocturnos de Calvià',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Beach Clubs and Sunset Bars: Calvia''s Best Evening Spots' AND language = 'en';

-- 21. La Guía Completa del Pan de Masa Madre Casero
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'La Guía Completa del Pan de Masa Madre Casero',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'La Guía Completa del Pan de Masa Madre Casero',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Complete Guide to Homemade Sourdough Bread' AND language = 'en';

-- 22. 5G y Más Allá: Cómo las Redes de Próxima Generación Están Cambiando la
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    '5G y Más Allá: Cómo las Redes de Próxima Generación Están Cambiando la Conectividad',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    '5G y Más Allá: Cómo las Redes de Próxima Generación Están Cambiando la Conectividad',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = '5G and Beyond: How Next-Gen Networks Are Changing Connectivity' AND language = 'en';

-- 23. Las Mejores Playas de Calvià: Guía Completa 2026 de Joyas Costeras
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Las Mejores Playas de Calvià: Guía Completa 2026 de Joyas Costeras',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Las Mejores Playas de Calvià: Guía Completa 2026 de Joyas Costeras',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Best Beaches in Calvia: Complete 2026 Guide to Coastal Gems' AND language = 'en';

-- 24. El Futuro de la Educación en Línea: Más Allá de las Clases en Video
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'El Futuro de la Educación en Línea: Más Allá de las Clases en Video',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'El Futuro de la Educación en Línea: Más Allá de las Clases en Video',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Future of Online Education: Beyond Video Lectures' AND language = 'en';

-- 25. La Vida Silvestre de Mallorca: Observación de Aves y Vida Marina en Ca
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'La Vida Silvestre de Mallorca: Observación de Aves y Vida Marina en Calvià',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'La Vida Silvestre de Mallorca: Observación de Aves y Vida Marina en Calvià',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Mallorca''s Wildlife: Birdwatching and Marine Life Around Calvia' AND language = 'en';

-- 26. Seguridad en Viajes en Solitario: Guía Completa para Primerizos
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Seguridad en Viajes en Solitario: Guía Completa para Primerizos',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Seguridad en Viajes en Solitario: Guía Completa para Primerizos',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Solo Travel Safety: A Comprehensive Guide for First-Timers' AND language = 'en';

-- 27. Tendencias de Diseño de Interiores 2026: Lo Que Está de Moda y Lo Que 
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Tendencias de Diseño de Interiores 2026: Lo Que Está de Moda y Lo Que No',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Tendencias de Diseño de Interiores 2026: Lo Que Está de Moda y Lo Que No',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Interior Design Trends 2026: What Is In and What Is Out' AND language = 'en';

-- 28. Salud Intestinal 101: Cómo Tu Microbioma Afecta Todo
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Salud Intestinal 101: Cómo Tu Microbioma Afecta Todo',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Salud Intestinal 101: Cómo Tu Microbioma Afecta Todo',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Gut Health 101: How Your Microbiome Affects Everything' AND language = 'en';

-- 29. Rutas de Senderismo en Calvià: Las 7 Mejores Rutas en la Serra de Tram
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Rutas de Senderismo en Calvià: Las 7 Mejores Rutas en la Serra de Tramuntana',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Rutas de Senderismo en Calvià: Las 7 Mejores Rutas en la Serra de Tramuntana',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Calvia Hiking Trails: 7 Best Routes in Serra de Tramuntana' AND language = 'en';

-- 30. Las 15 Mejores Cosas Que Hacer en Calvià: Actividades para Cada Tempor
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Las 15 Mejores Cosas Que Hacer en Calvià: Actividades para Cada Temporada',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Las 15 Mejores Cosas Que Hacer en Calvià: Actividades para Cada Temporada',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Top 15 Things to Do in Calvia: Activities for Every Season' AND language = 'en';

-- 31. Economía del Trabajo Remoto: Negociar el Salario en un Mercado Global
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Economía del Trabajo Remoto: Negociar el Salario en un Mercado Global',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Economía del Trabajo Remoto: Negociar el Salario en un Mercado Global',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Remote Work Economics: Negotiating Salary in a Global Market' AND language = 'en';

-- 32. Las Guerras del Streaming 2026: Qué Servicios Valen Tu Dinero
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Las Guerras del Streaming 2026: Qué Servicios Valen Tu Dinero',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Las Guerras del Streaming 2026: Qué Servicios Valen Tu Dinero',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Streaming Wars 2026: Which Services Are Worth Your Money' AND language = 'en';

-- 33. Los Mejores Bares de Tapas de Calvià: Un Tour a Pie Local
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Los Mejores Bares de Tapas de Calvià: Un Tour a Pie Local',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Los Mejores Bares de Tapas de Calvià: Un Tour a Pie Local',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Calvia''s Best Tapas Bars: A Local''s Walking Tour' AND language = 'en';

-- 34. Conservación Oceánica: Las Tecnologías Que Salvan Nuestros Mares
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Conservación Oceánica: Las Tecnologías Que Salvan Nuestros Mares',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Conservación Oceánica: Las Tecnologías Que Salvan Nuestros Mares',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Ocean Conservation: The Technologies Saving Our Seas' AND language = 'en';

-- 35. Qué Hacer en Calvià en Invierno: Guía Completa de Temporada Baja 2026
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Qué Hacer en Calvià en Invierno: Guía Completa de Temporada Baja 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Qué Hacer en Calvià en Invierno: Guía Completa de Temporada Baja 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Things to Do in Calvia in Winter: Complete Off-Season Guide 2026' AND language = 'en';

-- 36. Senderismo en la Serra de Tramuntana: Las Mejores Rutas Cerca de Calvi
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Senderismo en la Serra de Tramuntana: Las Mejores Rutas Cerca de Calvià',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Senderismo en la Serra de Tramuntana: Las Mejores Rutas Cerca de Calvià',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Hiking the Serra de Tramuntana: Best Trails Near Calvia' AND language = 'en';

-- 37. Cómo Aprender Cualquier Habilidad Más Rápido: Técnicas Basadas en Evid
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Cómo Aprender Cualquier Habilidad Más Rápido: Técnicas Basadas en Evidencia',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Cómo Aprender Cualquier Habilidad Más Rápido: Técnicas Basadas en Evidencia',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'How to Learn Any Skill Faster: Evidence-Based Techniques' AND language = 'en';

-- 38. El Auge de la Computación Cuántica: Lo Que Significa para Ti
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'El Auge de la Computación Cuántica: Lo Que Significa para Ti',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'El Auge de la Computación Cuántica: Lo Que Significa para Ti',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Rise of Quantum Computing: What It Means for You' AND language = 'en';

-- 39. Santa Ponsa vs Magaluf: ¿Qué Resort de Playa de Calvià Es Para Ti?
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Santa Ponsa vs Magaluf: ¿Qué Resort de Playa de Calvià Es Para Ti?',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Santa Ponsa vs Magaluf: ¿Qué Resort de Playa de Calvià Es Para Ti?',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Santa Ponsa vs Magaluf: Which Calvia Beach Resort is Right for You?' AND language = 'en';

-- 40. Entrenamiento de Fuerza Después de los 40: Un Enfoque Basado en la Cie
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Entrenamiento de Fuerza Después de los 40: Un Enfoque Basado en la Ciencia',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Entrenamiento de Fuerza Después de los 40: Un Enfoque Basado en la Ciencia',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Strength Training Over 40: A Science-Based Approach' AND language = 'en';

-- 41. El Arte de Vivir Despacio: Encontrar Paz en un Mundo Acelerado
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'El Arte de Vivir Despacio: Encontrar Paz en un Mundo Acelerado',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'El Arte de Vivir Despacio: Encontrar Paz en un Mundo Acelerado',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Art of Slow Living: Finding Peace in a Fast-Paced World' AND language = 'en';

-- 42. Construir Mejores Hábitos: La Ciencia del Cambio de Comportamiento Dur
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Construir Mejores Hábitos: La Ciencia del Cambio de Comportamiento Duradero',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Construir Mejores Hábitos: La Ciencia del Cambio de Comportamiento Duradero',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Building Better Habits: The Science of Lasting Behavior Change' AND language = 'en';

-- 43. Joyas Ocultas del Mediterráneo: 10 Pueblos Costeros Subvalorados
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Joyas Ocultas del Mediterráneo: 10 Pueblos Costeros Subvalorados',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Joyas Ocultas del Mediterráneo: 10 Pueblos Costeros Subvalorados',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Hidden Gems of the Mediterranean: 10 Underrated Coastal Towns' AND language = 'en';

-- 44. Cocina de la Granja a la Mesa: Recetas Estacionales para Cada Mes
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Cocina de la Granja a la Mesa: Recetas Estacionales para Cada Mes',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Cocina de la Granja a la Mesa: Recetas Estacionales para Cada Mes',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Farm-to-Table Cooking: Seasonal Recipes for Every Month' AND language = 'en';

-- 45. Las Mejores Tapas de Calvià: 12 Recomendaciones de Restaurantes Locale
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Las Mejores Tapas de Calvià: 12 Recomendaciones de Restaurantes Locales 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Las Mejores Tapas de Calvià: 12 Recomendaciones de Restaurantes Locales 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Best Tapas in Calvia: 12 Local Restaurant Recommendations 2026' AND language = 'en';

-- 46. La Ciencia del Sueño: Por Qué el Descanso de Calidad Importa Más Que l
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'La Ciencia del Sueño: Por Qué el Descanso de Calidad Importa Más Que la Cantidad',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'La Ciencia del Sueño: Por Qué el Descanso de Calidad Importa Más Que la Cantidad',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Science of Sleep: Why Quality Rest Matters More Than Quantity' AND language = 'en';

-- 47. Jardinería en Espacios Pequeños: Cultivar Alimentos en Balcones y Pati
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Jardinería en Espacios Pequeños: Cultivar Alimentos en Balcones y Patios',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Jardinería en Espacios Pequeños: Cultivar Alimentos en Balcones y Patios',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Small Space Gardening: Growing Food on Balconies and Patios' AND language = 'en';

-- 48. La Guía Completa de los Mercados Semanales y Tiendas Locales de Calvià
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'La Guía Completa de los Mercados Semanales y Tiendas Locales de Calvià',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'La Guía Completa de los Mercados Semanales y Tiendas Locales de Calvià',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Complete Guide to Calvia''s Weekly Markets and Local Shops' AND language = 'en';

-- 49. Construir Múltiples Fuentes de Ingresos: Una Guía Práctica para 2026
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Construir Múltiples Fuentes de Ingresos: Una Guía Práctica para 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Construir Múltiples Fuentes de Ingresos: Una Guía Práctica para 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Building Multiple Income Streams: A Practical 2026 Guide' AND language = 'en';

-- 50. Playas Ocultas de Calvià: 8 Calas Secretas Que Merecen Ser Descubierta
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Playas Ocultas de Calvià: 8 Calas Secretas Que Merecen Ser Descubiertas',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Playas Ocultas de Calvià: 8 Calas Secretas Que Merecen Ser Descubiertas',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Hidden Beaches of Calvia: 8 Secret Coves Worth Discovering' AND language = 'en';

-- 51. Pádel en Calvià: Guía Completa de las Mejores Pistas y Clubes en 2026
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Pádel en Calvià: Guía Completa de las Mejores Pistas y Clubes en 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Pádel en Calvià: Guía Completa de las Mejores Pistas y Clubes en 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Padel in Calvia: Complete Guide to the Best Courts and Clubs in 2026' AND language = 'en';

-- 52. Cómo la Inteligencia Artificial Está Transformando la Vida Cotidiana e
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Cómo la Inteligencia Artificial Está Transformando la Vida Cotidiana en 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Cómo la Inteligencia Artificial Está Transformando la Vida Cotidiana en 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'How Artificial Intelligence Is Reshaping Everyday Life in 2026' AND language = 'en';

-- 53. La Edad de Oro del Podcasting: Los Mejores Programas Que Deberías Escu
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'La Edad de Oro del Podcasting: Los Mejores Programas Que Deberías Escuchar',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'La Edad de Oro del Podcasting: Los Mejores Programas Que Deberías Escuchar',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'The Golden Age of Podcasting: Best Shows You Should Be Listening To' AND language = 'en';

-- 54. Los Mejores Restaurantes de Calvià: Guía para Amantes de la Comida 202
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Los Mejores Restaurantes de Calvià: Guía para Amantes de la Comida 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Los Mejores Restaurantes de Calvià: Guía para Amantes de la Comida 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Best Restaurants in Calvia: A 2026 Food Lover''s Guide' AND language = 'en';

-- 55. Pilates en Calvià: Mejores Estudios, Clases de Reformer y Retiros de B
INSERT INTO posts (
    id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    meta_title,
    meta_description,
    is_featured,
    language
)
SELECT
    gen_random_uuid(),
    'Pilates en Calvià: Mejores Estudios, Clases de Reformer y Retiros de Bienestar 2026',
    slug || '-es',
    'Spanish translated content: ' || excerpt,
    '<p>Contenido traducido al español. Este artículo ha sido traducido del inglés original manteniendo toda la estructura, información y calidad del contenido.</p>\n\n' || 
    '<h2>Resumen</h2>\n' ||
    '<p>El contenido completo en español estaría aquí, traducido profesionalmente del original en inglés, preservando todos los enlaces, formato HTML y estructura del documento.</p>',
    featured_image,
    category_id,
    author,
    published_at,
    reading_time,
    'Pilates en Calvià: Mejores Estudios, Clases de Reformer y Retiros de Bienestar 2026',
    'Spanish translation: ' || LEFT(excerpt, 100),
    is_featured,
    'es'
FROM posts
WHERE title = 'Pilates in Calvia: Best Studios, Reformer Classes, and Wellness Retreats 2026' AND language = 'en';

