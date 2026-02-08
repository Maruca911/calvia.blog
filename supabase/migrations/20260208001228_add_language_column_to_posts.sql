/*
  # Add language column to posts table

  1. Modified Tables
    - `posts`
      - Added `language` column (text, default 'en') to support multi-language content
      - All existing posts are set to 'en' (English)
  
  2. Notes
    - This prepares the infrastructure for German (de) and Spanish (es) translations
    - Future translated posts can be added with their respective language codes
    - The default value ensures backward compatibility
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'posts' AND column_name = 'language'
  ) THEN
    ALTER TABLE posts ADD COLUMN language text NOT NULL DEFAULT 'en';
  END IF;
END $$;
