-- ==========================================================================
-- Supabase PostgreSQL Schema & Seeding Script: 18th October 2026 CSAT Mock
-- Source Data: Question_Seeder/18th_oct.json
-- Ready to run directly in Supabase SQL Editor
-- ==========================================================================

-- STEP 1: CREATE OR VERIFY QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.daily_questions (
    id TEXT PRIMARY KEY,
    question_number INTEGER NOT NULL,
    test_date DATE DEFAULT '2026-10-18'::date,
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
    id TEXT PRIMARY KEY,                       -- e.g. 'Shri_2026-10-18'
    test_date DATE DEFAULT '2026-10-18'::date,
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

-- STEP 4: SEED 18TH OCTOBER 2026 QUESTIONS (10 CURATED UPSC CSAT QUESTIONS)
INSERT INTO public.daily_questions (
    id, question_number, test_date, year, difficulty, subject, pillar, topic, type,
    question, options, correct_index, answer_key, solution, trick, category, category_title,
    attempt_rate, option_distribution, forensic_meta
) VALUES
(
    $q$17OCT-023$q$,
    1,
    '2026-10-18'::date,
    2026,
    $q$L4$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Number Theory / Prime Algebraic Diophantine Equation$q$,
    $q$MCQ$q$,
    $q$If p and q are distinct prime numbers such that p² - 2q² = 1, what is the value of (p + q)?
(a) 5
(b) 7
(c) 8
(d) 11$q$,
    $q$["5", "7", "8", "11"]$q$::jsonb,
    0,
    $q$A$q$,
    $q$1. The given equation is p² - 2q² = 1, where p and q are distinct prime numbers.
2. Rearrange the equation:
   p² - 1 = 2q² ⇒ (p - 1)(p + 1) = 2q².
3. Parity analysis:
   - If p = 2: 2² - 2q² = 4 - 2q² = 1 ⇒ 2q² = 3 (no integer prime solution).
   - Thus, p must be an odd prime.
   - If p is an odd prime, both (p - 1) and (p + 1) are consecutive even integers.
4. Modulo 3 residue analysis:
   - Every prime p > 3 is of the form 3k ± 1.
   - Therefore, p² ≡ (±1)² = 1 (mod 3).
   - This implies p² - 1 ≡ 0 (mod 3), meaning p² - 1 is divisible by 3.
   - From the equation, 2q² = p² - 1, so 2q² must be divisible by 3.
   - Since gcd(2, 3) = 1, q² must be divisible by 3, which forces the prime q to be exactly 3.
5. Test q = 3:
   p² - 2(3²) = 1 ⇒ p² - 18 = 1 ⇒ p² = 19 (not a square, no integer solution for p).
6. Therefore, the assumption that p > 3 leads to no solution. Hence, p cannot be greater than 3.
7. Test prime p = 3:
   3² - 2q² = 1 ⇒ 9 - 2q² = 1 ⇒ 2q² = 8 ⇒ q² = 4 ⇒ q = 2.
   Both p = 3 and q = 2 are prime numbers, and they are distinct!
8. Compute (p + q) = 3 + 2 = 5.$q$,
    $q$p² - 1 = 2q². If p = 3, 3² - 1 = 8 = 2(2²) ⇒ q = 2. Both 3 and 2 are primes. Sum = 3 + 2 = 5.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    62,
    $q${"A": 58, "B": 22, "C": 12, "D": 8}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q28 & CSAT 2024 Q44 (Quadratic residue restrictions on prime solutions)", "trapAlert": "A candidate testing q = 3 first gets p = √19 and might conclude 'No solution', missing the even prime solution q = 2, p = 3.", "cognitiveLoadScore": 4, "scratchpadDemand": "Medium - Modulo 3 Proof / Small Prime Test", "idealTimeVsHallTime": "45s / 80s", "primaryTrapArchetype": "Overlooking the Only Even Prime (2)", "riskIndex": "Medium"}$q$::jsonb
),
(
    $q$17OCT-087$q$,
    2,
    '2026-10-18'::date,
    2026,
    $q$L3$q$,
    $q$Logical Reasoning$q$,
    $q$Reasoning$q$,
    $q$Linear Seating Arrangement / Dual End Orientation Data Sufficiency$q$,
    $q$MCQ$q$,
    $q$Consider the following Question and two Statements:
Question: In a row of five persons facing North, who sits in the middle position?
Statement-1: P sits immediately to the left of Q, and R sits immediately to the right of Q.
Statement-2: S sits at one of the extreme ends, and T sits immediately to the right of R.
Which one of the following is correct in respect of the Question and the Statements?
(a) Statement-1 alone is sufficient to answer the Question
(b) Statement-2 alone is sufficient to answer the Question
(c) Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient
(d) Both Statement-1 and Statement-2 together are not sufficient to answer the Question$q$,
    $q$["Statement-1 alone is sufficient to answer the Question", "Statement-2 alone is sufficient to answer the Question", "Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient", "Both Statement-1 and Statement-2 together are not sufficient to answer the Question"]$q$::jsonb,
    3,
    $q$D$q$,
    $q$1. There are 5 positions in the row: 1, 2, 3, 4, 5 (from left to right, facing North). Position 3 is the middle position.
2. Analyze Statement-1:
   - P is immediately left of Q, and R is immediately right of Q ⇒ Fixed contiguous block [P, Q, R].
   - This 3-person block can occupy (1, 2, 3) where middle is R, or (2, 3, 4) where middle is Q, or (3, 4, 5) where middle is P.
   - Hence, Statement-1 alone is NOT SUFFICIENT.
3. Analyze Statement-2:
   - S sits at an extreme end (Position 1 or 5), and T is immediately right of R ⇒ Block [R, T].
   - Hence, Statement-2 alone is NOT SUFFICIENT.
4. Combine Statement-1 and Statement-2:
   - Linking [P, Q, R] and [R, T] creates a 4-person contiguous block: [P, Q, R, T].
   - S must occupy an extreme end:
     - Case A: S is at the right extreme end (Position 5).
       Then [P, Q, R, T] occupies positions 1, 2, 3, 4.
       Layout: [1: P, 2: Q, 3: R, 4: T, 5: S]. The person in the middle (Position 3) is R.
     - Case B: S is at the left extreme end (Position 1).
       Then [P, Q, R, T] occupies positions 2, 3, 4, 5.
       Layout: [1: S, 2: P, 3: Q, 4: R, 5: T]. The person in the middle (Position 3) is Q.
   - Neither statement specifies whether S occupies the left extreme or the right extreme.
   - Since the middle person could be either R or Q, the question cannot be answered uniquely.
5. Therefore, Statement-1 and Statement-2 together are not sufficient to answer the Question.$q$,
    $q$Block of 4 [P, Q, R, T] with S at end allows two valid layouts: P-Q-R-T-S (middle R) and S-P-Q-R-T (middle Q). Dual answers ⇒ Insufficient.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    68,
    $q${"A": 10, "B": 12, "C": 48, "D": 30}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q38 & CSAT 2024 Q71 (Unspecified extreme end ambiguity in linear queues)", "trapAlert": "Candidates assume S must be at Position 1 or arbitrarily choose one layout without checking the reflection at Position 5, falsely selecting (c).", "cognitiveLoadScore": 4, "scratchpadDemand": "Low - Dual Case Permutation", "idealTimeVsHallTime": "35s / 60s", "primaryTrapArchetype": "Single-Sided Extreme End Assumption", "riskIndex": "High"}$q$::jsonb
),
(
    $q$17OCT-036$q$,
    3,
    '2026-10-18'::date,
    2026,
    $q$L2$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Profit & Loss / Dishonest Dealer False Weights$q$,
    $q$MCQ$q$,
    $q$A dishonest dealer professes to sell his goods at cost price, but he uses a false weight of 920 grams instead of a 1 kg weight. What is his percentage profit?
(a) 8%
(b) 8 16/23 %
(c) 8.5%
(d) 9 1/11 %$q$,
    $q$["8%", "8 16/23 %", "8.5%", "9 1/11 %"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. True weight promised = 1000 grams.
2. Weight actually delivered = 920 grams.
3. Assume cost price is ₹ 1 per gram:
   - Cost incurred by dealer (Cost Price, CP) = Cost of 920 grams = ₹ 920.
   - Revenue received by dealer (Selling Price, SP) = Selling price of 1000 grams at cost = ₹ 1000.
4. Net profit = SP - CP = 1000 - 920 = ₹ 80.
5. Percentage profit is always computed on the Cost Price (actual weight delivered):
   Profit % = (Profit / CP) × 100% = (80 / 920) × 100%.
6. Simplify the fraction:
   80 / 920 = 8 / 92 = 2 / 23.
   Profit % = (2 / 23) × 100% = 200 / 23 % = 8 16/23 % (approx 8.696%).$q$,
    $q$Profit % = [Error / (True - Error)] × 100 = (80 / 920) × 100 = 200 / 23 % = 8 16/23 %.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    85,
    $q${"A": 32, "B": 58, "C": 6, "D": 4}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2022 Q35 & CSAT 2024 Q52 (Weight substitution distortion on merchant margin)", "trapAlert": "Calculating the percentage on the claimed 1000 g base (80 / 1000 = 8%) is the primary distractor trap.", "cognitiveLoadScore": 2, "scratchpadDemand": "Low - Mental Fraction Division", "idealTimeVsHallTime": "25s / 40s", "primaryTrapArchetype": "Base Base Inversion (True Weight vs Delivered Weight)", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-060$q$,
    4,
    '2026-10-18'::date,
    2026,
    $q$L5$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Number Theory / Quadratic Residues & Parity mod 4$q$,
    $q$MCQ$q$,
    $q$How many pairs of positive integers (x, y) satisfy the equation x² - y² = 2026?
(a) 0
(b) 1
(c) 2
(d) 4$q$,
    $q$["0", "1", "2", "4"]$q$::jsonb,
    0,
    $q$A$q$,
    $q$1. Express the equation in factored form:
   x² - y² = (x - y)(x + y) = 2026.
2. Parity analysis of the two factors:
   (x + y) - (x - y) = 2y (an even integer).
   - This implies that (x - y) and (x + y) must both be even, or both must be odd.
3. Parity cases for the product (x² - y²):
   - Case 1: If both factors are odd, their product is odd. But 2026 is even.
   - Case 2: If both factors are even, their product must be divisible by 2 × 2 = 4.
4. Check divisibility of 2026 by 4:
   2026 ÷ 4 = 506 with a remainder of 2 (i.e., 2026 ≡ 2 mod 4).
5. Contradiction: Any difference of two integer squares x² - y² can only be congruent to 0, 1, or 3 modulo 4. It can NEVER leave a remainder of 2 when divided by 4.
6. Therefore, no integer pair (x, y) exists, and the number of positive integer solutions is 0.$q$,
    $q$x² - y² cannot leave remainder 2 mod 4. Since 2026 ≡ 2 (mod 4), there are ZERO integer solutions.$q$,
    $q$avoided$q$,
    $q$Questions Which Should Have Been Avoided$q$,
    44,
    $q${"A": 36, "B": 38, "C": 18, "D": 8}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q15 & CSAT 2024 Q44 (Modulo 4 quadratic residue impossibility proofs)", "trapAlert": "Aspirants factor 2026 = 2 × 1013 and attempt to solve x - y = 2, x + y = 1013, arriving at fractional x = 1015/2 and wasting valuable minutes.", "cognitiveLoadScore": 5, "scratchpadDemand": "Low - Modulo 4 Invariant Proof", "idealTimeVsHallTime": "25s / 45s", "primaryTrapArchetype": "Parity Incompatibility Fractional Trap", "riskIndex": "High"}$q$::jsonb
),
(
    $q$17OCT-014$q$,
    5,
    '2026-10-18'::date,
    2026,
    $q$L1$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Simple Interest / Linear Capital Growth$q$,
    $q$MCQ$q$,
    $q$A sum of money invested at simple interest doubles itself in 8 years. In how many years will it become 5 times of itself at the same rate of simple interest?
(a) 20 years
(b) 24 years
(c) 32 years
(d) 40 years$q$,
    $q$["20 years", "24 years", "32 years", "40 years"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Let the principal sum be P.
2. When the sum doubles itself, the final amount A = 2P.
   Simple Interest earned = A - P = 2P - P = P.
   Time taken to earn interest equal to P is 8 years.
3. To become 5 times of itself, final amount A = 5P.
   Simple Interest required = 5P - P = 4P.
4. Since Simple Interest is strictly proportional to time (SI = P × R × T / 100):
   Time required to earn 4P interest = 4 × (Time required to earn P interest) = 4 × 8 = 32 years.$q$,
    $q$Interest doubles ⇒ SI = 1P in 8 years. To become 5x ⇒ SI = 4P ⇒ Time = 4 × 8 = 32 years.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    92,
    $q${"A": 6, "B": 5, "C": 81, "D": 8}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2022 Q17 & CSAT 2024 Q38 (Multiplication factors under simple interest linearity)", "trapAlert": "Candidates reflexively multiply 8 by 5 to choose 40 years, forgetting that the base principal P is already present and only interest grows.", "cognitiveLoadScore": 1, "scratchpadDemand": "Low - Mental Math", "idealTimeVsHallTime": "15s / 30s", "primaryTrapArchetype": "Compound Multiplier Confusion on Simple Interest", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-027$q$,
    6,
    '2026-10-18'::date,
    2026,
    $q$L3$q$,
    $q$Logical Reasoning$q$,
    $q$Reasoning$q$,
    $q$Cubes & Dice / Colored Faces & Geometric Sectioning$q$,
    $q$MCQ$q$,
    $q$A solid cube of side 4 cm is painted red on two opposite faces, blue on two adjacent faces, and green on the remaining two faces. It is then cut into 64 small identical cubes of side 1 cm each. How many small cubes have at least one face painted red and at least one face painted blue?
(a) 10
(b) 12
(c) 14
(d) 16$q$,
    $q$["10", "12", "14", "16"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Analyze the face orientation of the 4 cm cube (cut into 4 × 4 × 4 = 64 unit cubes):
   - Two opposite faces are Red: Let Top and Bottom be Red.
   - Two adjacent faces are Blue: Let Front and Right be Blue (they share the Front-Right vertical edge).
   - Remaining two faces are Green: Back and Left must be Green.
2. Small cubes having at least one Red face AND at least one Blue face can ONLY lie along the edges where a Red face meets a Blue face.
3. Identify the boundary edges between Red faces and Blue faces:
   - Top (Red) meets Front (Blue) ⇒ Top-Front edge.
   - Top (Red) meets Right (Blue) ⇒ Top-Right edge.
   - Bottom (Red) meets Front (Blue) ⇒ Bottom-Front edge.
   - Bottom (Red) meets Right (Blue) ⇒ Bottom-Right edge.
   There are exactly 4 such intersecting edges.
4. Count the small cubes along these 4 edges:
   - Middle edge cubes: On each of the 4 edges, there are (n - 2) = 4 - 2 = 2 middle edge cubes. Each of these cubes has exactly 2 painted faces (one Red, one Blue). Count = 4 × 2 = 8 cubes.
   - Corner cubes:
     Check the 8 corners of the cube:
     - Top-Front-Right corner: Has Top (Red), Front (Blue), Right (Blue) ⇒ Valid (Has Red and Blue).
     - Top-Front-Left corner: Has Top (Red), Front (Blue), Left (Green) ⇒ Valid (Has Red and Blue).
     - Top-Right-Back corner: Has Top (Red), Right (Blue), Back (Green) ⇒ Valid (Has Red and Blue).
     - Bottom-Front-Right corner: Has Bottom (Red), Front (Blue), Right (Blue) ⇒ Valid (Has Red and Blue).
     - Bottom-Front-Left corner: Has Bottom (Red), Front (Blue), Left (Green) ⇒ Valid (Has Red and Blue).
     - Bottom-Right-Back corner: Has Bottom (Red), Right (Blue), Back (Green) ⇒ Valid (Has Red and Blue).
     - The remaining 2 corners (Top-Back-Left and Bottom-Back-Left) have faces Red, Green, Green (No Blue).
     Total valid corner cubes = 6 cubes.
5. Total cubes with both Red and Blue paint = 8 (middle edge) + 6 (corners) = 14 cubes.$q$,
    $q$4 common edges between Red and Blue faces have 4 × 2 = 8 middle cubes. 6 of the 8 corners border both Red and Blue. Total = 8 + 6 = 14.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    64,
    $q${"A": 14, "B": 26, "C": 52, "D": 8}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2019 Q72 & CSAT 2024 Q32 (Non-uniform face coloring and multi-colored boundary count)", "trapAlert": "A common mistake is counting all 8 corners or omitting the corner cubes that also touch a Green face, falsely concluding 8 or 12 cubes.", "cognitiveLoadScore": 4, "scratchpadDemand": "Medium - 3D Cube Coordinate Visualization", "idealTimeVsHallTime": "50s / 90s", "primaryTrapArchetype": "Corner Face Triplet Truncation Error", "riskIndex": "Medium"}$q$::jsonb
),
(
    $q$17OCT-058$q$,
    7,
    '2026-10-18'::date,
    2026,
    $q$L4$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Speed, Time & Distance / Moving Escalator Step Dynamics$q$,
    $q$MCQ$q$,
    $q$A person walks up a moving escalator (which moves upwards) and counts 30 steps to reach the top. If he walks up the same escalator at double his previous speed, he counts 40 steps to reach the top. How many visible steps does the escalator have when it is stationary?
(a) 50
(b) 60
(c) 70
(d) 80$q$,
    $q$["50", "60", "70", "80"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. Let N be the total number of stationary visible steps on the escalator.
2. Let the person's initial walking speed be v steps/second, and the escalator's upward speed be e steps/second.
3. Case 1:
   - Person takes 30 steps at speed v ⇒ Time taken t₁ = 30 / v seconds.
   - In time t₁, the escalator moves upward by e × t₁ = 30(e / v) steps.
   - Total steps N = Person's steps + Escalator's steps = 30 + 30(e / v).
4. Case 2:
   - Person doubles his speed to 2v and counts 40 steps ⇒ Time taken t₂ = 40 / (2v) = 20 / v seconds.
   - In time t₂, the escalator moves upward by e × t₂ = 20(e / v) steps.
   - Total steps N = 40 + 20(e / v).
5. Equate the two expressions for N:
   30 + 30(e / v) = 40 + 20(e / v)
   10(e / v) = 10 ⇒ e / v = 1.
6. Substitute (e / v) = 1 back into either equation for N:
   N = 30 + 30(1) = 60 steps.
7. Hence, the escalator has 60 visible steps.$q$,
    $q$N = 30 + 30(e/v) = 40 + 20(e/v) ⇒ 10(e/v) = 10 ⇒ e/v = 1. N = 30 + 30 = 60 steps.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    55,
    $q${"A": 16, "B": 58, "C": 18, "D": 8}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2022 Q69 & CSAT 2023 Q69 (Relative speed step counting on mechanical conveyors)", "trapAlert": "A candidate assuming the escalator took the same number of steps in both trials forgets that doubling speed cuts transit time, giving the escalator less time to assist.", "cognitiveLoadScore": 4, "scratchpadDemand": "Medium - Relative Velocity Linear System", "idealTimeVsHallTime": "45s / 75s", "primaryTrapArchetype": "Equal Escalator Distance Assumption Fallacy", "riskIndex": "Medium"}$q$::jsonb
),
(
    $q$17OCT-066$q$,
    8,
    '2026-10-18'::date,
    2026,
    $q$L2$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Percentages / Expenditure Invariance & Reciprocal Reductions$q$,
    $q$MCQ$q$,
    $q$If the price of petrol increases by 20%, by what percentage should a driver reduce his petrol consumption so that his total expenditure on petrol remains unchanged?
(a) 15%
(b) 16 2/3 %
(c) 20%
(d) 25%$q$,
    $q$["15%", "16 2/3 %", "20%", "25%"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. Expenditure = Price × Consumption.
2. When expenditure remains constant, Price and Consumption are inversely proportional.
3. A 20% price increase represents a multiplier of 1 + 20/100 = 120/100 = 6/5.
4. For expenditure to remain constant, the consumption multiplier must be the reciprocal: 5/6.
5. Fractional reduction in consumption = 1 - 5/6 = 1/6.
6. Percentage reduction = (1/6) × 100% = 100/6 % = 16 2/3 % (or 16.67%).$q$,
    $q$Formula: [r / (100 + r)] × 100 = [20 / 120] × 100 = 100 / 6 = 16 2/3 %.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    90,
    $q${"A": 8, "B": 78, "C": 10, "D": 4}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2020 Q12 & CSAT 2024 Q23 (Product invariance under reciprocal fractional adjustments)", "trapAlert": "Candidates reflexively assume that consumption must decrease by the same 20% to balance a 20% increase, forgetting that the reduction is calculated on the elevated base.", "cognitiveLoadScore": 2, "scratchpadDemand": "Low - Mental Reciprocal Fraction", "idealTimeVsHallTime": "15s / 30s", "primaryTrapArchetype": "Symmetric Percentage Reversal Fallacy", "riskIndex": "Low"}$q$::jsonb
),
(
    $q$17OCT-085$q$,
    9,
    '2026-10-18'::date,
    2026,
    $q$L5$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quant$q$,
    $q$Number Theory / Legendre's Formula & Prime Powers in Factorial Differences$q$,
    $q$MCQ$q$,
    $q$What is the largest power of 7 that divides the number (100! - 95!)?
(a) 2
(b) 14
(c) 16
(d) 28$q$,
    $q$["2", "14", "16", "28"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. Factor out 95! from the expression (100! - 95!):
   100! - 95! = 95! × [(100! / 95!) - 1]
   100! - 95! = 95! × [(100 × 99 × 98 × 97 × 96) - 1].
2. Analyze the product P = 100 × 99 × 98 × 97 × 96 modulo 7:
   - 98 is a multiple of 7 (in fact, 98 = 2 × 7² = 2 × 49).
   - Since 98 is in the product, P is an exact multiple of 7 (P ≡ 0 mod 7).
3. Analyze the bracket term (P - 1) modulo 7:
   P - 1 ≡ 0 - 1 = -1 ≡ 6 (mod 7).
   Since P - 1 is not divisible by 7, the term (P - 1) contains ZERO factors of 7.
4. Therefore, the highest power of 7 dividing (100! - 95!) is strictly equal to the highest power of 7 dividing 95!.
5. Apply Legendre's formula for v₇(95!):
   v₇(95!) = ⌊95 / 7⌋ + ⌊95 / 49⌋ = 13 + 1 = 14.
6. Hence, the largest power of 7 that divides the number is 7¹⁴.$q$,
    $q$100! - 95! = 95!(multiple of 7 - 1). The bracket has no factor of 7. Exponent of 7 is simply v₇(95!) = ⌊95/7⌋ + ⌊95/49⌋ = 13 + 1 = 14.$q$,
    $q$avoided$q$,
    $q$Questions Which Should Have Been Avoided$q$,
    41,
    $q${"A": 24, "B": 38, "C": 30, "D": 8}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q15 & CSAT 2025 Q64 (Prime power valuations in factorial difference factorizations)", "trapAlert": "A candidate computing v₇(100!) = 14 + 2 = 16 and v₇(95!) = 14 may subtract them to choose 2, or mistakenly conclude 16, falling for the algebraic trap.", "cognitiveLoadScore": 5, "scratchpadDemand": "Medium - Legendre Formula & Modular Factor Analysis", "idealTimeVsHallTime": "45s / 80s", "primaryTrapArchetype": "Factorial Difference Subtraction Fallacy (v(A - B) != v(A) - v(B))", "riskIndex": "High"}$q$::jsonb
),
(
    $q$17OCT-019$q$,
    10,
    '2026-10-18'::date,
    2026,
    $q$L1$q$,
    $q$Logical Reasoning$q$,
    $q$Reasoning$q$,
    $q$Alphabetical Ordering & Invariant Positions$q$,
    $q$MCQ$q$,
    $q$If the letters of the word 'REPRESENTATION' are arranged in reverse alphabetical order from left to right, how many vowels will occupy the exact same position as in the original word?
(a) None
(b) One
(c) Two
(d) Three$q$,
    $q$["None", "One", "Two", "Three"]$q$::jsonb,
    0,
    $q$A$q$,
    $q$1. The word 'REPRESENTATION' has 14 letters.
2. Identify the original letters and index positions (1 to 14):
   1: R, 2: E, 3: P, 4: R, 5: E, 6: S, 7: E, 8: N, 9: T, 10: A, 11: T, 12: I, 13: O, 14: N.
3. The vowels in the word and their original positions are:
   - Pos 2: E
   - Pos 5: E
   - Pos 7: E
   - Pos 10: A
   - Pos 12: I
   - Pos 13: O
4. Collect and sort all 14 letters in reverse alphabetical order (Z to A):
   Letters present: A(1), E(3), I(1), N(2), O(1), P(1), R(2), S(1), T(2).
   Reverse sorted array:
   1: T, 2: T, 3: S, 4: R, 5: R, 6: P, 7: O, 8: N, 9: N, 10: I, 11: E, 12: E, 13: E, 14: A.
5. Compare sorted positions with original vowel positions:
   - Pos 2: Original = E, Sorted = T (Mismatch)
   - Pos 5: Original = E, Sorted = R (Mismatch)
   - Pos 7: Original = E, Sorted = O (Mismatch)
   - Pos 10: Original = A, Sorted = I (Mismatch)
   - Pos 12: Original = I, Sorted = E (Mismatch)
   - Pos 13: Original = O, Sorted = E (Mismatch)
6. None of the original vowels occupy their original position. Answer is None.$q$,
    $q$Sorted vowels are at positions 7, 10, 11, 12, 13, 14. Original vowels are at 2, 5, 7, 10, 12, 13. At 7: orig was E, new is O. At 10: orig was A, new is I. At 12: orig was I, new is E. At 13: orig was O, new is E. Zero matches.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    89,
    $q${"A": 76, "B": 14, "C": 6, "D": 4}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q80 & CSAT 2025 Q12 (Position invariance under descending alphabetical sort)", "trapAlert": "A candidate may notice 'E' appearing at positions 11, 12, 13 in the sorted order and mistakenly match with position 12, overlooking that the original letter at position 12 was 'I', not 'E'.", "cognitiveLoadScore": 1, "scratchpadDemand": "Low - Letter Frequency Mapping", "idealTimeVsHallTime": "30s / 50s", "primaryTrapArchetype": "Identity Confusion between Source and Target Letters", "riskIndex": "Low"}$q$::jsonb
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
WHERE test_date = '2026-10-18'::date
ORDER BY question_number ASC;
