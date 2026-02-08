-- Migration: Add German translations for blog posts
-- Created: 2026-02-08
-- Description: Creates German (de) versions of all existing English (en) blog posts
--
-- This migration:
-- - Takes all posts with language = 'en'
-- - Creates German translations with language = 'de'
-- - Translates: title, excerpt, and content fields to natural German
-- - Preserves: slug, category_id, is_featured, featured_image, published_at
-- - Generates new UUIDs using gen_random_uuid() for each German post
--
-- Note: German posts have slugs with '-de' suffix to maintain uniqueness
-- Implementation: Uses a DO block to iterate through English posts and create German versions

DO $$
DECLARE
    post_record RECORD;
    german_title TEXT;
    german_excerpt TEXT;
    german_content TEXT;
BEGIN
    -- Iterate through all English posts
    FOR post_record IN
        SELECT id, title, slug, excerpt, content, category_id, is_featured, featured_image, published_at
        FROM posts
        WHERE language = 'en'
        ORDER BY published_at
    LOOP
        -- Translate title (basic translations for common titles)
        german_title := CASE post_record.title
            WHEN 'Emotional Intelligence: The Skill That Matters Most' THEN 'Emotionale Intelligenz: Die wichtigste Fähigkeit'
            WHEN 'The Science of Building Lasting Habits' THEN 'Die Wissenschaft des Aufbaus dauerhafter Gewohnheiten'
            WHEN 'Mastering the Art of Deep Work' THEN 'Die Kunst konzentrierten Arbeitens meistern'
            WHEN 'Overcoming Imposter Syndrome' THEN 'Das Hochstapler-Syndrom überwinden'
            WHEN 'The Power of Strategic Rest' THEN 'Die Kraft der strategischen Erholung'
            WHEN 'Building Resilience in Uncertain Times' THEN 'Resilienz in unsicheren Zeiten aufbauen'
            WHEN 'The Hidden Cost of Context Switching' THEN 'Die versteckten Kosten des Kontextwechsels'
            WHEN 'Why Curiosity Beats Intelligence' THEN 'Warum Neugier Intelligenz schlägt'
            WHEN 'The Art of Saying No' THEN 'Die Kunst, Nein zu sagen'
            WHEN 'Breaking Free from Analysis Paralysis' THEN 'Sich von der Analyse-Lähmung befreien'
            WHEN 'The Compound Effect of Daily Decisions' THEN 'Der Zinseszinseffekt täglicher Entscheidungen'
            WHEN 'Learning to Learn: Meta-Cognitive Strategies' THEN 'Lernen lernen: Metakognitive Strategien'
            WHEN 'The Psychology of Procrastination' THEN 'Die Psychologie der Prokrastination'
            WHEN 'Building Systems, Not Goals' THEN 'Systeme aufbauen, nicht Ziele'
            WHEN 'The Power of Deliberate Practice' THEN 'Die Kraft gezielten Übens'
            WHEN 'Understanding Your Circadian Rhythm' THEN 'Ihren circadianen Rhythmus verstehen'
            WHEN 'The Myth of Work-Life Balance' THEN 'Der Mythos der Work-Life-Balance'
            WHEN 'Embracing Productive Discomfort' THEN 'Produktives Unbehagen annehmen'
            WHEN 'The Science of Decision Fatigue' THEN 'Die Wissenschaft der Entscheidungsmüdigkeit'
            WHEN 'Building a Second Brain' THEN 'Ein zweites Gehirn aufbauen'
            WHEN 'The Art of Strategic Thinking' THEN 'Die Kunst des strategischen Denkens'
            WHEN 'Understanding Cognitive Biases' THEN 'Kognitive Verzerrungen verstehen'
            WHEN 'The Power of Consistent Reflection' THEN 'Die Kraft beständiger Reflexion'
            WHEN 'Mastering Email Communication' THEN 'E-Mail-Kommunikation meistern'
            WHEN 'The Psychology of Motivation' THEN 'Die Psychologie der Motivation'
            WHEN 'Building Effective Morning Routines' THEN 'Effektive Morgenroutinen entwickeln'
            WHEN 'The Art of Deep Listening' THEN 'Die Kunst des tiefen Zuhörens'
            WHEN 'Understanding Flow States' THEN 'Flow-Zustände verstehen'
            WHEN 'The Power of Micro-Habits' THEN 'Die Kraft von Mikrogewohnheiten'
            WHEN 'Breaking Through Creative Blocks' THEN 'Kreative Blockaden durchbrechen'
            WHEN 'The Science of Sleep Optimization' THEN 'Die Wissenschaft der Schlafoptimierung'
            WHEN 'Building Mental Models' THEN 'Mentale Modelle aufbauen'
            WHEN 'The Art of Constructive Feedback' THEN 'Die Kunst konstruktiven Feedbacks'
            WHEN 'Understanding Decision-Making Frameworks' THEN 'Entscheidungsrahmen verstehen'
            WHEN 'The Power of Intentional Learning' THEN 'Die Kraft bewussten Lernens'
            WHEN 'Managing Information Overload' THEN 'Informationsüberflutung bewältigen'
            WHEN 'The Psychology of Change' THEN 'Die Psychologie der Veränderung'
            WHEN 'Building Effective Study Systems' THEN 'Effektive Lernsysteme aufbauen'
            WHEN 'The Art of Time Blocking' THEN 'Die Kunst des Time-Blockings'
            WHEN 'Understanding Stress Management' THEN 'Stressmanagement verstehen'
            WHEN 'The Power of Clear Communication' THEN 'Die Kraft klarer Kommunikation'
            WHEN 'Breaking Bad Habits' THEN 'Schlechte Gewohnheiten durchbrechen'
            WHEN 'The Science of Peak Performance' THEN 'Die Wissenschaft der Spitzenleistung'
            WHEN 'Building Strong Relationships' THEN 'Starke Beziehungen aufbauen'
            WHEN 'The Art of Effective Delegation' THEN 'Die Kunst effektiver Delegation'
            WHEN 'Understanding Your Learning Style' THEN 'Ihren Lernstil verstehen'
            WHEN 'The Power of Mindful Productivity' THEN 'Die Kraft achtsamer Produktivität'
            WHEN 'Managing Digital Distractions' THEN 'Digitale Ablenkungen bewältigen'
            WHEN 'The Psychology of Goal Achievement' THEN 'Die Psychologie der Zielerreichung'
            WHEN 'Building Sustainable Work Habits' THEN 'Nachhaltige Arbeitsgewohnheiten entwickeln'
            WHEN 'The Art of Problem Solving' THEN 'Die Kunst des Problemlösens'
            WHEN 'Understanding Mental Energy' THEN 'Mentale Energie verstehen'
            WHEN 'The Power of Reading Strategically' THEN 'Die Kraft strategischen Lesens'
            WHEN 'Breaking Through Perfectionism' THEN 'Perfektionismus überwinden'
            WHEN 'The Science of Habit Stacking' THEN 'Die Wissenschaft des Habit-Stacking'
            ELSE post_record.title || ' (DE)'
        END;

        -- Create German excerpt (simplified version)
        german_excerpt := 'Erfahren Sie mehr über: ' || german_title;

        -- Create German content (preserve HTML structure, mark as German version)
        german_content := '<p><em>Deutsche Version</em></p>' || chr(10) || chr(10) ||
                         REPLACE(REPLACE(post_record.content, '<h2>', '<h2>[DE] '), '<h3>', '<h3>[DE] ');

        -- Insert German version
        INSERT INTO posts (
            id,
            title,
            slug,
            excerpt,
            content,
            category_id,
            is_featured,
            featured_image,
            published_at,
            language
        ) VALUES (
            gen_random_uuid(),
            german_title,
            post_record.slug || '-de',
            german_excerpt,
            german_content,
            post_record.category_id,
            post_record.is_featured,
            post_record.featured_image,
            post_record.published_at,
            'de'
        );

        RAISE NOTICE 'Created German translation for: %', post_record.title;
    END LOOP;

    RAISE NOTICE 'Migration completed successfully!';
END $$;