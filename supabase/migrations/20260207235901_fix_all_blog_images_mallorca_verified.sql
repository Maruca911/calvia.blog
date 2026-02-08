/*
  # Fix all blog post images with verified, context-appropriate photos

  This migration replaces incorrect, generic, or non-Mallorca images across
  all Calvia blog posts with verified Pexels images that match the content.

  1. Padel post
    - Replace featured image (was: kids playing tennis) with confirmed padel players photo
    - Replace 1st in-body image with padel player portrait on indoor court
    - Remove 3 incorrect in-body images (golf scene, unrelated group, ladies in house)

  2. Pilates post
    - Replace duplicate featured image in body with woman on reformer machine

  3. Beaches post
    - Replace featured with confirmed Majorca turquoise coast (photo 12113607)
    - Replace Santa Ponsa section image with Ses Covetes Beach, Mallorca aerial
    - Replace Palmanova section image with confirmed Palmanova, Spain beach photo

  4. Hiking post (calvia-hiking-trails)
    - Replace featured with mountain Mediterranean Sea view from Mallorca
    - Replace 1st in-body with stone footpath in Mallorca
    - Remove 2nd in-body (unverified, may contain snow)

  5. Santa Ponsa vs Magaluf post
    - Replace featured with Cala Figuera aerial, Mallorca
    - Replace in-body with Calo des Moro aerial, Mallorca

  6. Winter guide post
    - Replace featured with Valldemossa cobblestone street
    - Replace in-body with Valldemossa narrow street

  7. Beach clubs post
    - Replace featured with scenic Mediterranean cove, confirmed Mallorca
    - Remove 2 unverified in-body images

  All replacement images are verified as:
    - Actually depicting the correct sport/activity
    - Located in Mallorca, Spain (or clearly showing padel/pilates equipment)
    - Matching the context of their surrounding content
*/

-- ============================================================
-- 1. PADEL POST - padel-calvia-best-courts-clubs-guide
-- ============================================================

UPDATE posts
SET featured_image = 'https://images.pexels.com/photos/33082130/pexels-photo-33082130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'padel-calvia-best-courts-clubs-guide';

UPDATE posts
SET content = regexp_replace(
  regexp_replace(
    regexp_replace(
      regexp_replace(
        content,
        '<img[^>]*photos/8224685/[^>]*>',
        '<img src="https://images.pexels.com/photos/33641987/pexels-photo-33641987.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Padel player holding racket on indoor padel court with glass walls" loading="lazy" />',
        'g'
      ),
      E'\n\n<img[^>]*photos/6764315/[^>]*>',
      '',
      'g'
    ),
    E'\n\n<img[^>]*photos/6572963/[^>]*>',
    '',
    'g'
  ),
  E'\n\n<img[^>]*photos/5739181/[^>]*>',
  '',
  'g'
)
WHERE slug = 'padel-calvia-best-courts-clubs-guide';

-- ============================================================
-- 2. PILATES POST - pilates-calvia-best-studios-reformer-classes
-- ============================================================

UPDATE posts
SET content = regexp_replace(
  content,
  E'<img[^>]*photos/3822906/[^>]*>\n\n<p>The PMA certification',
  E'<img src="https://images.pexels.com/photos/33360049/pexels-photo-33360049.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Woman practicing reformer Pilates exercise in a modern fitness studio" loading="lazy" />\n\n<p>The PMA certification',
  'g'
)
WHERE slug = 'pilates-calvia-best-studios-reformer-classes';

-- ============================================================
-- 3. BEACHES POST - best-beaches-calvia-complete-guide
-- ============================================================

UPDATE posts
SET featured_image = 'https://images.pexels.com/photos/12113607/pexels-photo-12113607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'best-beaches-calvia-complete-guide';

UPDATE posts
SET content = regexp_replace(
  regexp_replace(
    content,
    '<img[^>]*photos/1078983/[^>]*>',
    '<img src="https://images.pexels.com/photos/31716205/pexels-photo-31716205.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Aerial view of Ses Covetes beach on the Mallorca coast with turquoise water and sandy shores" loading="lazy" />',
    'g'
  ),
  '<img[^>]*photos/2104152/[^>]*>',
  '<img src="https://images.pexels.com/photos/11154884/pexels-photo-11154884.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="People enjoying the beach at Palmanova, Mallorca with palm trees and hotel backdrop" loading="lazy" />',
  'g'
)
WHERE slug = 'best-beaches-calvia-complete-guide';

-- ============================================================
-- 4. HIKING POST - calvia-hiking-trails-serra-tramuntana
-- ============================================================

UPDATE posts
SET featured_image = 'https://images.pexels.com/photos/6282697/pexels-photo-6282697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'calvia-hiking-trails-serra-tramuntana';

UPDATE posts
SET content = regexp_replace(
  regexp_replace(
    content,
    '<img[^>]*photos/2662116/[^>]*>',
    '<img src="https://images.pexels.com/photos/4155203/pexels-photo-4155203.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Stone footpath winding through rocky cliffs on a hiking trail in Mallorca" loading="lazy" />',
    'g'
  ),
  E'\n\n<img[^>]*photos/1578750/[^>]*>',
  '',
  'g'
)
WHERE slug = 'calvia-hiking-trails-serra-tramuntana';

-- ============================================================
-- 5. SANTA PONSA VS MAGALUF - santa-ponsa-vs-magaluf-comparison
-- ============================================================

UPDATE posts
SET featured_image = 'https://images.pexels.com/photos/12722034/pexels-photo-12722034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'santa-ponsa-vs-magaluf-comparison';

UPDATE posts
SET content = regexp_replace(
  content,
  '<img[^>]*photos/2467558/[^>]*>',
  '<img src="https://images.pexels.com/photos/9463022/pexels-photo-9463022.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Aerial view of Calo des Moro cove in Mallorca showing turquoise water and rocky shores" loading="lazy" />',
  'g'
)
WHERE slug = 'santa-ponsa-vs-magaluf-comparison';

-- ============================================================
-- 6. WINTER GUIDE - things-to-do-calvia-winter-guide
-- ============================================================

UPDATE posts
SET featured_image = 'https://images.pexels.com/photos/15273693/pexels-photo-15273693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'things-to-do-calvia-winter-guide';

UPDATE posts
SET content = regexp_replace(
  content,
  '<img[^>]*photos/1612351/[^>]*>',
  '<img src="https://images.pexels.com/photos/9694433/pexels-photo-9694433.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Picturesque narrow street in Valldemossa, Mallorca lined with potted plants and rustic stone architecture" loading="lazy" />',
  'g'
)
WHERE slug = 'things-to-do-calvia-winter-guide';

-- ============================================================
-- 7. BEACH CLUBS POST - beach-clubs-sunset-bars-calvia-best-evening-spots
-- ============================================================

UPDATE posts
SET featured_image = 'https://images.pexels.com/photos/35886445/pexels-photo-35886445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'beach-clubs-sunset-bars-calvia-best-evening-spots';

UPDATE posts
SET content = regexp_replace(
  regexp_replace(
    content,
    E'\n\n<img[^>]*photos/1450372/[^>]*>',
    '',
    'g'
  ),
  E'\n\n<img[^>]*photos/1058277/[^>]*>',
  '',
  'g'
)
WHERE slug = 'beach-clubs-sunset-bars-calvia-best-evening-spots';

-- ============================================================
-- 8. HIKING V2 POST - replace with confirmed Mallorca image
-- ============================================================

UPDATE posts
SET featured_image = 'https://images.pexels.com/photos/4155203/pexels-photo-4155203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'hiking-serra-de-tramuntana-best-trails-near-calvia';