-- ==========================================================================
-- Supabase SQL: Create User Test Attempts Table for candidate responses
-- Run this in Supabase SQL Editor to track users (e.g., Shri) responses
-- ==========================================================================

CREATE TABLE IF NOT EXISTS public.user_test_attempts (
    id TEXT PRIMARY KEY,                       -- e.g. 'Shri_2026-10-16'
    user_name TEXT DEFAULT 'Shri',             -- Candidate Name: Shri
    test_date DATE DEFAULT CURRENT_DATE,       -- e.g. '2026-10-16'
    current_question_index INTEGER DEFAULT 0,  -- Last active question
    answers JSONB DEFAULT '{}'::jsonb,         -- {"1": "B", "2": "A", ...}
    time_per_question JSONB DEFAULT '{}'::jsonb,-- {"1": 45, "2": 72, ...} (in seconds)
    marked_for_review JSONB DEFAULT '[]'::jsonb,-- [2, 5]
    status TEXT DEFAULT 'in_progress',         -- 'in_progress' or 'completed'
    score NUMERIC DEFAULT 0.0,                 -- Final Score out of 25.0
    accuracy INTEGER DEFAULT 0,                -- Accuracy percentage (e.g. 80)
    correct_count INTEGER DEFAULT 0,           -- Correct answers count
    incorrect_count INTEGER DEFAULT 0,         -- Incorrect answers count
    unattempted_count INTEGER DEFAULT 10,      -- Unattempted count
    total_time_seconds INTEGER DEFAULT 0,      -- Total test duration
    result_payload JSONB DEFAULT '{}'::jsonb,  -- Full detailed analysis payload
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.user_test_attempts ENABLE ROW LEVEL SECURITY;

-- 1. Read Policy: Allow anyone (anon/authenticated) to read test attempts
DROP POLICY IF EXISTS "Allow anon select attempts" ON public.user_test_attempts;
CREATE POLICY "Allow anon select attempts"
ON public.user_test_attempts
FOR SELECT
TO anon, authenticated
USING (true);

-- 2. Insert Policy: Allow candidates to insert their new test attempts
DROP POLICY IF EXISTS "Allow anon insert attempts" ON public.user_test_attempts;
CREATE POLICY "Allow anon insert attempts"
ON public.user_test_attempts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 3. Update Policy: Allow candidates to update their live answers & timers
DROP POLICY IF EXISTS "Allow anon update attempts" ON public.user_test_attempts;
CREATE POLICY "Allow anon update attempts"
ON public.user_test_attempts
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);
