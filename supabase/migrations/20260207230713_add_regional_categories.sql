/*
  # Add Regional Calvia/Mallorca Categories

  Adds 3 new categories focused on local Calvia and Mallorca content:
  1. `Local Dining & Nightlife` - Restaurant reviews, bars, cafes
  2. `Calvia Local Guide` - Shops, activities, events, community
  3. `Nature & Outdoors` - Hiking, beaches, natural highlights, eco-tourism

  These give the blog a strong regional identity tied to Calvia, Mallorca.
*/

INSERT INTO categories (name, slug, description, icon_name) VALUES
  ('Local Dining & Nightlife', 'local-dining-nightlife', 'Discover the best restaurants, tapas bars, beach clubs, and cafes across Calvia and Mallorca.', 'utensils'),
  ('Calvia Local Guide', 'calvia-local-guide', 'Your insider guide to Calvia — shops, markets, events, activities, and everything local.', 'map'),
  ('Nature & Outdoors', 'nature-outdoors', 'Hiking trails, hidden beaches, wildlife, and outdoor adventures across Mallorca''s stunning landscape.', 'mountain')
ON CONFLICT (slug) DO NOTHING;
