-- ==========================================================================
-- Supabase SQL: Create Candidates Table for Seat & Passcode Authentication
-- Seat number: max 3 digits (e.g. '001', '042', '999')
-- Passcode: 4-digit numeric PIN (e.g. '1234')
-- ==========================================================================

CREATE TABLE IF NOT EXISTS public.candidates (
    seat_number VARCHAR(3) PRIMARY KEY,        -- Max 3 digits (e.g. '001', '042', '999')
    passcode VARCHAR(4) NOT NULL,              -- 4-digit PIN
    full_name TEXT NOT NULL,                   -- Candidate's full name
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;

-- 1. Read Policy: Allow candidates to verify credentials during login
DROP POLICY IF EXISTS "Allow anon select candidates" ON public.candidates;
CREATE POLICY "Allow anon select candidates"
ON public.candidates
FOR SELECT
TO anon, authenticated
USING (true);

-- 2. Insert Policy: Allow new candidates to register
DROP POLICY IF EXISTS "Allow anon insert candidates" ON public.candidates;
CREATE POLICY "Allow anon insert candidates"
ON public.candidates
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 3. Update Policy: Allow updating last_login timestamp
DROP POLICY IF EXISTS "Allow anon update candidates" ON public.candidates;
CREATE POLICY "Allow anon update candidates"
ON public.candidates
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

