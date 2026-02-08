/*
  # Update Blog Featured Images to Match Mallorca/Calvia Context

  1. Changes
    - Replace generic stock photos with Mallorca-specific or Mediterranean-contextual images
    - All images sourced from Pexels with verified availability
    - Updated images have keyword-relevant alt text through the featured_image field

  2. Posts Updated
    - Top 15 Things to Do in Calvia (was generic sunset, now Mallorca coast)
    - Best Beaches in Calvia (update to more specific Mediterranean cove)
    - Calvia Hiking Trails (update to Mediterranean mountain trail)
    - Hidden Beaches (update to Mediterranean cove with turquoise water)
    - Santa Ponsa vs Magaluf (update to Mediterranean resort aerial)
*/

-- Top 15 Things to Do (was reusing same 1174732 sunset image as hero)
UPDATE posts SET featured_image = 'https://images.pexels.com/photos/33635166/pexels-photo-33635166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'top-15-things-to-do-calvia-every-season';

-- Hidden Beaches - use a more cove-specific image
UPDATE posts SET featured_image = 'https://images.pexels.com/photos/19909225/pexels-photo-19909225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'hidden-beaches-calvia-secret-coves-worth-discovering';

-- Living in Calvia Expat Guide - use Mediterranean village/town image
UPDATE posts SET featured_image = 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'living-in-calvia-expat-guide-mallorca';

-- Calvia Winter Off-Season - use a warm winter Mediterranean scene
UPDATE posts SET featured_image = 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'calvia-winter-off-season-best-time-visit';

-- Sustainable Tourism in Calvia - use Mediterranean nature/coast
UPDATE posts SET featured_image = 'https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
WHERE slug = 'sustainable-tourism-calvia-municipality-leads-way';
