/*
  # Fix padel blog post images

  1. Changes
    - Update `featured_image` for the padel post to use the padel court image (previously the second inline image)
    - Remove the inline `<img>` tag from the post content body (previously the first image seen in the article)
  
  2. Affected Posts
    - `padel-calvia-best-courts-clubs-guide`
*/

UPDATE posts
SET 
  featured_image = 'https://images.pexels.com/photos/33641987/pexels-photo-33641987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  content = REPLACE(
    content,
    '<img src="https://images.pexels.com/photos/33641987/pexels-photo-33641987.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Padel player holding racket on indoor padel court with glass walls" loading="lazy" />',
    ''
  )
WHERE slug = 'padel-calvia-best-courts-clubs-guide';
