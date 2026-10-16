-- ==========================================================================
-- Supabase PostgreSQL Schema & Seeding Script: 17th October 2026 CSAT Mock
-- Source Data: Question_Seeder/17th_Oct_v2.json
-- Ready to run directly in Supabase SQL Editor
-- ==========================================================================

-- STEP 1: CREATE OR VERIFY QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.daily_questions (
    id TEXT PRIMARY KEY,
    question_number INTEGER NOT NULL,
    test_date DATE DEFAULT '2026-10-17'::date,
    year INTEGER DEFAULT 2026,
    difficulty TEXT,
    subject TEXT,
    pillar TEXT,
    topic TEXT,
    type TEXT DEFAULT 'MCQ',
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_index INTEGER NOT NULL,
    answer_key TEXT NOT NULL,
    solution TEXT NOT NULL,
    trick TEXT,
    category TEXT NOT NULL, -- 'not_wrong', 'attempted', 'avoided'
    category_title TEXT NOT NULL,
    attempt_rate INTEGER DEFAULT 75,
    option_distribution JSONB,
    forensic_meta JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- STEP 2: CREATE OR VERIFY USER TEST ATTEMPTS TABLE (Progress & Scorecards)
CREATE TABLE IF NOT EXISTS public.user_test_attempts (
    id TEXT PRIMARY KEY,                       -- e.g. 'Shri_2026-10-17'
    test_date DATE DEFAULT '2026-10-17'::date,
    user_name TEXT DEFAULT 'Shri',
    user_identifier TEXT DEFAULT 'candidate_default',
    current_question_index INTEGER DEFAULT 0,
    answers JSONB DEFAULT '{}'::jsonb,
    time_per_question JSONB DEFAULT '{}'::jsonb,
    marked_for_review JSONB DEFAULT '[]'::jsonb,
    status TEXT DEFAULT 'in_progress',          -- 'in_progress' or 'completed'
    score NUMERIC DEFAULT 0.0,
    accuracy INTEGER DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    incorrect_count INTEGER DEFAULT 0,
    unattempted_count INTEGER DEFAULT 10,
    total_time_seconds INTEGER DEFAULT 0,
    result_payload JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- STEP 3: CONFIGURE ROW LEVEL SECURITY (RLS) & PUBLIC POLICIES
ALTER TABLE public.daily_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_test_attempts ENABLE ROW LEVEL SECURITY;

-- Questions Table Policies
DROP POLICY IF EXISTS "Allow public read access" ON public.daily_questions;
CREATE POLICY "Allow public read access"
ON public.daily_questions FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "Allow public insert access" ON public.daily_questions;
CREATE POLICY "Allow public insert access"
ON public.daily_questions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update access" ON public.daily_questions;
CREATE POLICY "Allow public update access"
ON public.daily_questions FOR UPDATE
TO anon, authenticated
USING (true) WITH CHECK (true);

-- User Attempts Table Policies
DROP POLICY IF EXISTS "Allow anon select attempts" ON public.user_test_attempts;
CREATE POLICY "Allow anon select attempts"
ON public.user_test_attempts FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "Allow anon insert attempts" ON public.user_test_attempts;
CREATE POLICY "Allow anon insert attempts"
ON public.user_test_attempts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anon update attempts" ON public.user_test_attempts;
CREATE POLICY "Allow anon update attempts"
ON public.user_test_attempts FOR UPDATE
TO anon, authenticated
USING (true) WITH CHECK (true);

-- STEP 4: SEED 17TH OCTOBER 2026 QUESTIONS (10 CURATED UPSC CSAT QUESTIONS)
INSERT INTO public.daily_questions (
    id, question_number, test_date, year, difficulty, subject, pillar, topic, type,
    question, options, correct_index, answer_key, solution, trick, category, category_title,
    attempt_rate, option_distribution, forensic_meta
) VALUES
(
    $q$17OCT-001$q$,
    1,
    '2026-10-17'::date,
    2026,
    $q$L2$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Speed, Time & Distance / Relative Speed & Crossings$q$,
    $q$MCQ$q$,
    $q$Two trains of lengths 150 m and 250 m run on parallel tracks. When running in the same direction, the faster train completely passes the slower train in 80 seconds. When running in opposite directions, they pass each other completely in 16 seconds. What is the speed of the faster train in km/h?
(a) 45 km/h
(b) 54 km/h
(c) 60 km/h
(d) 72 km/h$q$,
    $q$["45 km/h", "54 km/h", "60 km/h", "72 km/h"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. In both cases (same or opposite direction), the total distance to be covered to clear each other is the sum of their lengths: Distance = 150 + 250 = 400 m.
2. Let the speed of the faster train be v₁ m/s and that of the slower train be v₂ m/s.
3. Relative speed in the same direction: (v₁ - v₂) = Distance / Time = 400 / 80 = 5 m/s.
4. Relative speed in opposite directions: (v₁ + v₂) = Distance / Time = 400 / 16 = 25 m/s.
5. Adding both equations:
   2v₁ = 5 + 25 = 30 ⇒ v₁ = 15 m/s.
6. Convert speed to km/h:
   v₁ = 15 × (18 / 5) = 3 × 18 = 54 km/h.
7. (The slower train's speed is v₂ = 10 m/s = 36 km/h).$q$,
    $q$Relative speeds: (v₁ - v₂) = 400/80 = 5 m/s; (v₁ + v₂) = 400/16 = 25 m/s. v₁ = (25 + 5)/2 = 15 m/s = 15 × 3.6 = 54 km/h.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    84,
    $q${"A": 8, "B": 74, "C": 12, "D": 6}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2022 Q21 & CSAT 2024 Q62 (Two trains on parallel tracks crossing in same vs opposite directions)", "trapAlert": "A frequent candidate blunder is converting to km/h prematurely with decimal approximations or subtracting train lengths instead of adding them.", "cognitiveLoadScore": 2, "scratchpadDemand": "Low - Linear System", "idealTimeVsHallTime": "35s / 60s", "primaryTrapArchetype": "Unit Conversion / Relative Length Confusion", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-002$q$,
    2,
    '2026-10-17'::date,
    2026,
    $q$L3$q$,
    $q$Logical Reasoning$q$,
    $q$Reasoning$q$,
    $q$Blood Relations & Data Sufficiency$q$,
    $q$MCQ$q$,
    $q$Consider the following Question and two Statements:
Question: How is P related to T?
Statement-1: P is the brother of Q, and Q is the mother of T.
Statement-2: T is the son of Q, and Q is the sibling of P.
Which one of the following is correct in respect of the Question and the Statements?
(a) Statement-1 alone is sufficient to answer the Question, but Statement-2 alone is not sufficient
(b) Statement-2 alone is sufficient to answer the Question, but Statement-1 alone is not sufficient
(c) Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient
(d) Statement-1 and Statement-2 together are not sufficient to answer the Question$q$,
    $q$["Statement-1 alone is sufficient to answer the Question, but Statement-2 alone is not sufficient", "Statement-2 alone is sufficient to answer the Question, but Statement-1 alone is not sufficient", "Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient", "Statement-1 and Statement-2 together are not sufficient to answer the Question"]$q$::jsonb,
    0,
    $q$A$q$,
    $q$1. Analyze the Question: 'How is P related to T?' requires determining P's relationship with respect to T (i.e., what is P to T?).
2. Evaluate Statement-1:
   - P is the brother of Q (P is male).
   - Q is the mother of T.
   - P is the brother of T's mother. Therefore, P is definitively the maternal uncle of T.
   - Does P's relation to T depend on T's gender? No. Whether T is male or female, P is always T's maternal uncle.
   - Hence, Statement-1 alone is SUFFICIENT.
3. Evaluate Statement-2:
   - T is the son of Q (T is male).
   - Q is the sibling of P (P and Q share the same parents).
   - However, the gender of P is NOT specified in Statement-2. P could be Q's brother (making P the maternal uncle of T) or Q's sister (making P the maternal aunt of T).
   - Since P's gender remains undetermined, P's relation to T cannot be uniquely established.
   - Hence, Statement-2 alone is NOT SUFFICIENT.
4. Therefore, Statement-1 alone is sufficient to answer the Question, but Statement-2 alone is not sufficient.$q$,
    $q$Look at the subject: P's relation to T requires P's gender. St-1 specifies P is male (brother) → Uncle (Sufficient). St-2 leaves P's gender unknown → Insufficient.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    76,
    $q${"A": 62, "B": 10, "C": 16, "D": 12}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2021 Q75 & CSAT 2023 Q38 (Data Sufficiency on familial lineage and terminal gender asymmetry)", "trapAlert": "Aspirants often confuse 'How is P related to T' with 'How is T related to P'. In Statement-2, T's relation to P is known (nephew), but P's relation to T remains ambiguous due to unstated gender.", "cognitiveLoadScore": 3, "scratchpadDemand": "Low - Mental Kinship Chain", "idealTimeVsHallTime": "30s / 55s", "primaryTrapArchetype": "Gender Asymmetry in Kinship Sufficiency", "riskIndex": "Medium"}$q$::jsonb
),
(
    $q$17OCT-008$q$,
    3,
    '2026-10-17'::date,
    2026,
    $q$L4$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Linear Diophantine Equations & Integer Extremization$q$,
    $q$MCQ$q$,
    $q$A merchant buys three varieties of pens costing ₹ 5, ₹ 10 and ₹ 25 each. He spends a total of exactly ₹ 300 and buys exactly 40 pens. If he buys at least one pen of each variety, what is the maximum possible number of ₹ 5 pens he could have purchased?
(a) 26
(b) 29
(c) 32
(d) 35$q$,
    $q$["26", "29", "32", "35"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Let x, y, and z denote the number of pens purchased at ₹ 5, ₹ 10, and ₹ 25 respectively.
2. Formulate equations based on total count and total cost:
   (1) x + y + z = 40
   (2) 5x + 10y + 25z = 300 ⇒ Dividing by 5: x + 2y + 5z = 60
3. Subtract equation (1) from equation (2):
   (x + 2y + 5z) - (x + y + z) = 60 - 40
   ⇒ y + 4z = 20.
4. We wish to maximize x. From equation (1), x = 40 - (y + z). Therefore, maximizing x is equivalent to minimizing the sum (y + z).
5. Express y in terms of z: y = 20 - 4z.
   Then y + z = (20 - 4z) + z = 20 - 3z.
   To minimize (y + z), we must MAXIMIZE z!
6. Determine valid integer bounds for z:
   - Since y ≥ 1: 20 - 4z ≥ 1 ⇒ 4z ≤ 19 ⇒ z ≤ 4.75.
   - Since z is a positive integer, the maximum possible value for z is 4.
7. Evaluate at z = 4:
   y = 20 - 4(4) = 4.
   x = 40 - (y + z) = 40 - (4 + 4) = 32.
   Check constraint: x = 32 ≥ 1 (Valid!).
   Check cost: 32(5) + 4(10) + 4(25) = 160 + 40 + 100 = 300. (Exact!).
8. Hence, the maximum possible number of ₹ 5 pens is 32.$q$,
    $q$y + 4z = 20 ⇒ y + z = 20 - 3z. Maximize z to minimize (y + z). Max integer z with y ≥ 1 is z = 4 ⇒ y = 4 ⇒ x = 40 - 8 = 32.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    58,
    $q${"A": 18, "B": 24, "C": 48, "D": 10}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q60 & CSAT 2020 Q44 (Constrained item purchasing with positive integer bounds)", "trapAlert": "A common mistake is setting z = 1 to minimize the most expensive pen, which yields y = 16 and x = 23, completely missing that increasing z decreases (y + z) much faster.", "cognitiveLoadScore": 4, "scratchpadDemand": "Medium - Diophantine Substitution", "idealTimeVsHallTime": "45s / 80s", "primaryTrapArchetype": "Counter-Intuitive Extremization Direction", "riskIndex": "High"}$q$::jsonb
),
(
    $q$17OCT-004$q$,
    4,
    '2026-10-17'::date,
    2026,
    $q$L1$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Number System / Divisibility & Digit Forcing$q$,
    $q$MCQ$q$,
    $q$If the 6-digit number 58x43y is completely divisible by 72, where x and y are single-digit natural numbers, what is the value of (2x - y)?
(a) 6
(b) 7
(c) 8
(d) 9$q$,
    $q$["6", "7", "8", "9"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. A number is divisible by 72 if and only if it is coprime-factored as divisible by both 8 and 9.
2. Condition for divisibility by 8:
   - The last three digits '43y' must form an integer divisible by 8.
   - Test values for y ∈ {0, 1, 2, ..., 9}:
     430 ÷ 8 = 53 remainder 6.
     432 ÷ 8 = 54 with remainder 0.
   - The next multiple is 432 + 8 = 440 (tens digit changes to 4).
   - Thus, y = 2 is the unique valid single digit.
3. Condition for divisibility by 9:
   - The sum of all digits must be a multiple of 9.
   - Sum = 5 + 8 + x + 4 + 3 + 2 = 22 + x.
   - Since x is a single-digit natural number (0 ≤ x ≤ 9):
     22 + x must equal 27 ⇒ x = 5.
4. Compute required expression (2x - y):
   2(5) - 2 = 10 - 2 = 8.$q$,
    $q$43y mod 8 = 0 ⇒ 432 is a multiple of 8, so y = 2. Sum of digits = 22 + x ⇒ x = 5. (2x - y) = 10 - 2 = 8.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    91,
    $q${"A": 5, "B": 7, "C": 82, "D": 6}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2021 Q14 & CSAT 2024 Q18 (Composite divisibility rules with single-digit unknowns)", "trapAlert": "Forgetting that y must be uniquely checked in the three-digit range 430-439 leads to false digit pairings.", "cognitiveLoadScore": 1, "scratchpadDemand": "Low - Direct Arithmetic", "idealTimeVsHallTime": "25s / 45s", "primaryTrapArchetype": "Divisibility Rule Misapplication", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-010$q$,
    5,
    '2026-10-17'::date,
    2026,
    $q$L5$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Combinatorial Number Theory & Trailing Zeroes$q$,
    $q$MCQ$q$,
    $q$How many trailing zeroes are at the end of the product P = 1¹ × 2² × 3³ × 4⁴ × ... × 50⁵⁰?
(a) 275
(b) 325
(c) 350
(d) 375$q$,
    $q$["275", "325", "350", "375"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. The number of trailing zeroes in P is determined by the highest power of 10 dividing P, which equals min(v₂(P), v₅(P)).
2. In the product of consecutive integers with positive powers, factors of 2 are strictly more abundant than factors of 5. Therefore, trailing zeroes = v₅(P).
3. Factors of 5 originate only from bases that are multiples of 5:
   - 5⁵ contributes 5 factors of 5.
   - 10¹⁰ = (2 × 5)¹⁰ contributes 10 factors of 5.
   - 15¹⁵ contributes 15 factors of 5.
   - 20²⁰ contributes 20 factors of 5.
   - 25²⁵ = (5²)²⁵ contributes 2 × 25 = 50 factors of 5.
   - 30³⁰ contributes 30 factors of 5.
   - 35³⁵ contributes 35 factors of 5.
   - 40⁴⁰ contributes 40 factors of 5.
   - 45⁴⁵ contributes 45 factors of 5.
   - 50⁵⁰ = (2 × 5²)⁵⁰ contributes 2 × 50 = 100 factors of 5.
4. Summing the first power of 5 from all multiples of 5:
   5 + 10 + 15 + 20 + 25 + 30 + 35 + 40 + 45 + 50 = 5 × (1 + 2 + ... + 10) = 5 × 55 = 275.
5. Adding the second power of 5 from multiples of 25 (5²):
   The numbers 25²⁵ and 50⁵⁰ contain an extra factor of 5 per base:
   Extra factors = 25 + 50 = 75.
6. Total exponent of 5 = 275 + 75 = 350.
7. Hence, there are 350 trailing zeroes.$q$,
    $q$First tier: 5 × (1 + 2 + ... + 10) = 275. Second tier (powers of 5²): 25 + 50 = 75. Total trailing zeroes = 275 + 75 = 350.$q$,
    $q$avoided$q$,
    $q$Questions Which Should Have Been Avoided$q$,
    42,
    $q${"A": 54, "B": 10, "C": 31, "D": 5}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2020 Q70 & CSAT 2023 Q15 (Prime factorization exponents in variable-power factorial products)", "trapAlert": "Forgetting the second power of 5 in 25²⁵ and 50⁵⁰ is the primary trap, leading 80% of candidates directly to distractor (a) 275.", "cognitiveLoadScore": 5, "scratchpadDemand": "High - Multi-Tier Exponent Accounting", "idealTimeVsHallTime": "55s / 110s", "primaryTrapArchetype": "Higher Prime Power Truncation", "riskIndex": "Extreme"}$q$::jsonb
),
(
    $q$17OCT-096$q$,
    6,
    '2026-10-17'::date,
    2026,
    $q$L2$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Percentages / Price Reduction & Increased Purchasing Quantity$q$,
    $q$MCQ$q$,
    $q$A reduction of 20% in the price of sugar enables a purchaser to obtain 5 kg more for ₹ 600. What was the original price of sugar per kg?
(a) ₹ 24 per kg
(b) ₹ 25 per kg
(c) ₹ 30 per kg
(d) ₹ 36 per kg$q$,
    $q$["₹ 24 per kg", "₹ 25 per kg", "₹ 30 per kg", "₹ 36 per kg"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Let original price per kg be P and original consumption for ₹ 600 be C kg (so P × C = 600).
2. Price is reduced by 20% ⇒ New price P' = 0.80 P = (4/5) P.
3. Since expenditure is constant at ₹ 600, consumption is inversely proportional to price:
   New consumption C' = (5/4) C.
4. The increase in consumption is C' - C = (1/4) C.
5. Given that this increase equals 5 kg:
   (1/4) C = 5 kg ⇒ Original consumption C = 20 kg.
6. Original price per kg P = Total Expenditure / Original Consumption:
   P = 600 / 20 = ₹ 30 per kg.
7. (The reduced price is 600 / 25 = ₹ 24 per kg).$q$,
    $q$Saving on ₹ 600 = 20% of 600 = ₹ 120. This ₹ 120 buys 5 kg at the new price ⇒ New price = 120 / 5 = ₹ 24/kg. Original price = 24 / 0.8 = ₹ 30/kg.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    88,
    $q${"A": 32, "B": 6, "C": 58, "D": 4}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2020 Q12 & CSAT 2024 Q23 (Fixed outlay consumption increments under price discounts)", "trapAlert": "Aspirants frequently compute the reduced new price (₹ 24 per kg) and select distractor (a), failing to read that the question specifically demands the ORIGINAL price.", "cognitiveLoadScore": 2, "scratchpadDemand": "Low - Mental Cash Saving Technique", "idealTimeVsHallTime": "20s / 35s", "primaryTrapArchetype": "Reduced Price vs Original Price Prompt Trap", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-009$q$,
    7,
    '2026-10-17'::date,
    2026,
    $q$L1$q$,
    $q$Logical Reasoning$q$,
    $q$Reasoning$q$,
    $q$Clocks / Coincidence of Hands$q$,
    $q$MCQ$q$,
    $q$At what time between 3 o'clock and 4 o'clock will the hour hand and the minute hand of a clock coincide?
(a) 15 3/11 minutes past 3
(b) 16 4/11 minutes past 3
(c) 16 7/11 minutes past 3
(d) 18 2/11 minutes past 3$q$,
    $q$["15 3/11 minutes past 3", "16 4/11 minutes past 3", "16 7/11 minutes past 3", "18 2/11 minutes past 3"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. At 3 o'clock, the minute hand points to 12 (0°), and the hour hand points to 3 (3 × 30° = 90°).
2. The minute hand must gain 90° on the hour hand for them to coincide.
3. Relative speed of minute hand over hour hand = 6°/min - 0.5°/min = 5.5°/min = 11/2 degrees per minute.
4. Time required = Angular distance / Relative speed
   Time = 90 / (11/2) = 180 / 11 minutes.
5. Convert to mixed fraction:
   180 ÷ 11 = 16 with a remainder of 4.
   Time = 16 4/11 minutes past 3.$q$,
    $q$Formula: t = (60/11) × H. For H = 3: t = (60 × 3)/11 = 180/11 = 16 4/11 minutes past 3.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    86,
    $q${"A": 16, "B": 74, "C": 7, "D": 3}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2022 Q58 & CSAT 2021 Q47 (Exact coincidence intervals of clock hands)", "trapAlert": "Aspirants often choose 3:15 (15 minutes past 3), failing to account for the hour hand's movement during those 15 minutes.", "cognitiveLoadScore": 1, "scratchpadDemand": "Low - Standard Fractional Division", "idealTimeVsHallTime": "20s / 40s", "primaryTrapArchetype": "Static Clock Hand Fallacy", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-097$q$,
    8,
    '2026-10-17'::date,
    2026,
    $q$L3$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Number System / Dual Congruence in 3-Digit Intervals$q$,
    $q$MCQ$q$,
    $q$How many three-digit natural numbers are divisible by 7 but leave a remainder of 2 when divided by 5?
(a) 24
(b) 25
(c) 26
(d) 28$q$,
    $q$["24", "25", "26", "28"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Let the three-digit number be x:
   - x ≡ 0 (mod 7)
   - x ≡ 2 (mod 5)
2. Combine both congruences modulo LCM(7, 5) = 35:
   - From x ≡ 0 (mod 7), x = 7k.
   - Substitute into mod 5: 7k ≡ 2 (mod 5) ⇒ 2k ≡ 2 (mod 5) ⇒ k ≡ 1 (mod 5).
   - Thus, k = 5m + 1 for an integer m.
   - General form: x = 7(5m + 1) = 35m + 7.
3. Three-digit numbers satisfy the closed interval: 100 ≤ x ≤ 999.
   100 ≤ 35m + 7 ≤ 999
   93 ≤ 35m ≤ 992.
4. Find the integer range for m:
   - Smallest integer m: 93 / 35 = 2.657... ⇒ m_min = 3 (First number = 35(3) + 7 = 112).
   - Largest integer m: 992 / 35 = 28.342... ⇒ m_max = 28 (Last number = 35(28) + 7 = 987).
5. Total count of values of m = m_max - m_min + 1 = 28 - 3 + 1 = 26 numbers.$q$,
    $q$General term: 35m + 7. m ranges from ⌈93/35⌉ = 3 to ⌊992/35⌋ = 28. Count = 28 - 3 + 1 = 26.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    67,
    $q${"A": 8, "B": 28, "C": 58, "D": 6}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2020 Q25 & CSAT 2022 Q14 (Multi-criteria arithmetic progression bounds)", "trapAlert": "A fencepost subtraction error (28 - 3 = 25) gives distractor (b).", "cognitiveLoadScore": 3, "scratchpadDemand": "Low - Arithmetic Progression Endpoints", "idealTimeVsHallTime": "30s / 50s", "primaryTrapArchetype": "AP Index Fencepost Count Error", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-018$q$,
    9,
    '2026-10-17'::date,
    2026,
    $q$L4$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Number System / Prime Data Sufficiency$q$,
    $q$MCQ$q$,
    $q$Consider the following Question and two Statements:
Question: Is the positive integer n a prime number?
Statement-1: n leaves a remainder of 1 when divided by 6, and n < 30.
Statement-2: n can be expressed as the sum of two prime numbers in exactly one way, and n is an odd integer.
Which one of the following is correct in respect of the Question and the Statements?
(a) Statement-1 alone is sufficient to answer the Question
(b) Statement-2 alone is sufficient to answer the Question
(c) Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient
(d) Statement-1 and Statement-2 together are not sufficient to answer the Question$q$,
    $q$["Statement-1 alone is sufficient to answer the Question", "Statement-2 alone is sufficient to answer the Question", "Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient", "Statement-1 and Statement-2 together are not sufficient to answer the Question"]$q$::jsonb,
    3,
    $q$D$q$,
    $q$1. Analyze Statement-1:
   - Positive integers less than 30 of the form n = 6k + 1 are: 7, 13, 19, 25.
   - Among these, 7, 13, and 19 are prime, but 25 (= 5²) is composite.
   - Since n can be either prime or composite, Statement-1 alone is NOT SUFFICIENT.
2. Analyze Statement-2:
   - n is odd and can be expressed as the sum of two primes in exactly one way.
   - Any odd integer written as the sum of two primes must be the sum of an EVEN prime and an ODD prime (since Odd + Odd = Even).
   - The only even prime is 2. Therefore, n must be of the form n = 2 + p, where p is an odd prime.
   - For n = 5: 5 = 2 + 3 (only way, since 5-2=3 is prime). Here n = 5 is PRIME.
   - For n = 9: 9 = 2 + 7. The primes less than 9 are 2, 3, 5, 7. Checking pairs: 9-2=7 (prime); 9-3=6 (not prime); 9-5=4 (not prime). Thus 9 has EXACTLY ONE prime decomposition {2, 7}. Here n = 9 is COMPOSITE.
   - Since n can be prime (5) or composite (9), Statement-2 alone is NOT SUFFICIENT.
3. Combine Statement-1 and Statement-2:
   - Candidate values from Statement-1 are n ∈ {7, 13, 19, 25}.
   - Check n = 19: 19 is odd. 19 = 2 + 17 (only way, since 19-3=16, 19-5=14, 19-7=12, 19-11=8, 19-13=6). 19 satisfies Statement-2 and is PRIME.
   - Check n = 25: 25 is odd. Primes less than 25 are 2, 3, 5, 7, 11, 13, 17, 19, 23.
     Checking pairs for 25: 25 - 2 = 23 (prime). All other primes p are odd, so 25 - p is even (and greater than 2), hence composite. Thus 25 can be written as the sum of two primes in EXACTLY ONE way (2 + 23). 25 satisfies Statement-2 and is COMPOSITE!
   - Since n can still be either 19 (prime) or 25 (composite), both Statements together are still NOT sufficient.
4. Hence, Statement-1 and Statement-2 together are not sufficient to answer the Question.$q$,
    $q$Both n = 19 (prime) and n = 25 (composite) satisfy St-1 (6k+1 < 30) and St-2 (unique representation 2 + p). Thus cannot determine prime status.$q$,
    $q$avoided$q$,
    $q$Questions Which Should Have Been Avoided$q$,
    51,
    $q${"A": 12, "B": 14, "C": 38, "D": 36}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q03 & CSAT 2024 Q71 (Odd prime decompositions and residue class non-sufficiency)", "trapAlert": "Aspirants assume that because 25 is composite, the dual prime property will exclude it, forgetting that 25 = 2 + 23 is the unique valid prime pair representation.", "cognitiveLoadScore": 4, "scratchpadDemand": "High - Prime Pair Decomposition Exhaustion", "idealTimeVsHallTime": "55s / 95s", "primaryTrapArchetype": "Unique Decomposition Non-Uniqueness Assumption", "riskIndex": "High"}$q$::jsonb
),
(
    $q$17OCT-025$q$,
    10,
    '2026-10-17'::date,
    2026,
    $q$L5$q$,
    $q$Logical Reasoning$q$,
    $q$Reasoning$q$,
    $q$Knights & Knaves / Truth-Tellers & Liars Logic$q$,
    $q$MCQ$q$,
    $q$On an island, each inhabitant is either a Truth-teller (who always tells the truth) or a Liar (who always lies).
Three inhabitants X, Y, and Z make the following statements:
- X says: 'At least one of us is a Liar.'
- Y says: 'X and Z are of the same type.'
- Z says: 'Exactly two of us are Truth-tellers.'
Which one of the following statements is definitely correct?
(a) X is a Liar
(b) Y is a Truth-teller
(c) Z is a Truth-teller
(d) Y is a Liar$q$,
    $q$["X is a Liar", "Y is a Truth-teller", "Z is a Truth-teller", "Y is a Liar"]$q$::jsonb,
    3,
    $q$D$q$,
    $q$1. Analyze X's statement: 'At least one of us is a Liar.'
   - Suppose X is a Liar. Then X's statement must be false, meaning 'None of us is a Liar' (i.e., all three are Truth-tellers). But this means X must be a Truth-teller, which contradicts our assumption that X is a Liar.
   - Therefore, X CANNOT be a Liar.
   - Hence, X is definitively a TRUTH-TELLER (T).
2. Since X is a Truth-teller, his statement is true: at least one of {X, Y, Z} is indeed a Liar (so not all three can be Truth-tellers).
3. Analyze Y's statement: 'X and Z are of the same type.'
   - Since X is T, this statement asserts that Z is also T.
   - If Y were a Truth-teller (T), then Z would also have to be T. This would make X = T, Y = T, Z = T (all three Truth-tellers), which directly violates the true fact established in step 2 (that at least one must be a Liar).
   - Therefore, Y CANNOT be a Truth-teller.
   - Hence, Y is definitively a LIAR (L).
4. Analyze Z's type:
   - Since Y is a Liar, Y's statement ('X and Z are of the same type') is false.
   - Since X is T, Z must be of a different type from X. Therefore, Z must be a LIAR (L).
5. Check consistency with Z's statement: 'Exactly two of us are Truth-tellers.'
   - Our deduced configuration is: X = T, Y = L, Z = L. Exactly ONE person (X) is a Truth-teller.
   - Thus, Z's statement ('Exactly two of us are Truth-tellers') is false.
   - Since Z is a Liar, making a false statement is completely consistent.
6. Conclusion:
   - X is a Truth-teller.
   - Y is a Liar.
   - Z is a Liar.
   Among the options, 'Y is a Liar' is definitely correct.$q$,
    $q$Statement 'At least one of us is a Liar' is impossible for a Liar to say (would mean all are Truth-tellers → paradox). Thus X = Truth-teller. If Y were Truth-teller, all three would be Truth-tellers (impossible). Thus Y = Liar.$q$,
    $q$avoided$q$,
    $q$Questions Which Should Have Been Avoided$q$,
    46,
    $q${"A": 14, "B": 22, "C": 18, "D": 46}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q67 & CSAT 2025 Q49 (Three-inhabitant self-referential consistency deduction)", "trapAlert": "Testing arbitrary case matrices without first resolving X's self-referential meta-statement creates cognitive fatigue and leads to circular reasoning traps.", "cognitiveLoadScore": 5, "scratchpadDemand": "Medium - Propositional Truth Table", "idealTimeVsHallTime": "45s / 90s", "primaryTrapArchetype": "Self-Referential Liar Paradox Neglect", "riskIndex": "High"}$q$::jsonb
)
ON CONFLICT (id) DO UPDATE SET
    question_number = EXCLUDED.question_number,
    test_date = EXCLUDED.test_date,
    year = EXCLUDED.year,
    difficulty = EXCLUDED.difficulty,
    subject = EXCLUDED.subject,
    pillar = EXCLUDED.pillar,
    topic = EXCLUDED.topic,
    type = EXCLUDED.type,
    question = EXCLUDED.question,
    options = EXCLUDED.options,
    correct_index = EXCLUDED.correct_index,
    answer_key = EXCLUDED.answer_key,
    solution = EXCLUDED.solution,
    trick = EXCLUDED.trick,
    category = EXCLUDED.category,
    category_title = EXCLUDED.category_title,
    attempt_rate = EXCLUDED.attempt_rate,
    option_distribution = EXCLUDED.option_distribution,
    forensic_meta = EXCLUDED.forensic_meta;

-- STEP 5: VERIFICATION QUERY
SELECT 
    id, 
    question_number, 
    test_date, 
    difficulty, 
    subject, 
    topic, 
    answer_key, 
    category
FROM public.daily_questions
WHERE test_date = '2026-10-17'::date
ORDER BY question_number ASC;
