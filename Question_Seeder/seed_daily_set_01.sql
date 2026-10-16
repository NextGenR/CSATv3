-- ==========================================================================
-- Supabase PostgreSQL Schema & Seeding Script: DAILY SET 01 (16th Oct 2026)
-- Run this script in the Supabase SQL Editor
-- ==========================================================================

-- STEP 1: ENSURE QUESTIONS TABLE EXISTS
CREATE TABLE IF NOT EXISTS public.daily_questions (
    id TEXT PRIMARY KEY,
    question_number INTEGER NOT NULL,
    test_date DATE DEFAULT '2026-10-16'::date,
    year INTEGER,
    difficulty TEXT,
    subject TEXT,
    pillar TEXT,
    topic TEXT,
    type TEXT,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_index INTEGER NOT NULL,
    answer_key TEXT NOT NULL,
    solution TEXT NOT NULL,
    trick TEXT,
    category TEXT NOT NULL, -- 'avoided', 'not_wrong', 'attempted'
    category_title TEXT NOT NULL,
    attempt_rate INTEGER DEFAULT 75,
    option_distribution JSONB,
    forensic_meta JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- STEP 2: ROW LEVEL SECURITY & POLICIES
ALTER TABLE public.daily_questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access" ON public.daily_questions;
CREATE POLICY "Allow public read access"
ON public.daily_questions
FOR SELECT
TO anon, authenticated
USING (true);

-- Optional: Allow anon insert/update for future automation
DROP POLICY IF EXISTS "Allow public insert access" ON public.daily_questions;
CREATE POLICY "Allow public insert access"
ON public.daily_questions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update access" ON public.daily_questions;
CREATE POLICY "Allow public update access"
ON public.daily_questions
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- STEP 3: INSERT DAILY SET 01 QUESTIONS (FOR TODAY 16TH OCTOBER 2026)
INSERT INTO public.daily_questions (
    id, question_number, test_date, year, difficulty, subject, pillar, topic, type,
    question, options, correct_index, answer_key, solution, trick, category, category_title,
    attempt_rate, option_distribution, forensic_meta
) VALUES
(
    $q$DAILY-001$q$,
    1,
    '2026-10-16'::date,
    2026,
    $q$L2$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quantitative Aptitude$q$,
    $q$Percentages & Expenditure Invariance$q$,
    $q$MCQ$q$,
    $q$Due to an increase of 25% in the price of cooking oil, a household decides to reduce its consumption of cooking oil so that the expenditure on cooking oil increases by only 10%. By what percentage should the household reduce its consumption of cooking oil?
(a) 10%
(b) 12%
(c) 15%
(d) 16%$q$,
    $q$["10%", "12%", "15%", "16%"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. Let original price P₀ = ₹ 100 per unit and original consumption C₀ = 100 units.
2. Original Expenditure E₀ = P₀ × C₀ = 100 × 100 = ₹ 10,000.
3. After a 25% price increase, new price P₁ = ₹ 125.
4. Expenditure is allowed to increase by only 10%, so new Expenditure E₁ = 110% of 10,000 = ₹ 11,000.
5. New Consumption C₁ = E₁ / P₁ = 11,000 / 125 = 88 units.
6. Percentage reduction in consumption = ((100 - 88) / 100) × 100% = 12%.$q$,
    $q$Using multipliers: C_new / C_old = E_ratio / P_ratio = 1.10 / 1.25 = 110 / 125 = 22 / 25 = 0.88 → Drop of (1 - 0.88) = 12%.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    92,
    $q${"A": 8, "B": 82, "C": 6, "D": 4}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2020 Q12 & CSAT 2024 Q23 (Price increase vs consumption reduction under partial expenditure adjustment)", "trapAlert": "A standard candidate trap is to compute (25% - 10%) = 15%, mistakenly treating expenditure as additive rather than multiplicative (P \u00d7 C = E)."}$q$::jsonb
),
(
    $q$DAILY-002$q$,
    2,
    '2026-10-16'::date,
    2026,
    $q$L3$q$,
    $q$Logical Reasoning$q$,
    $q$Logical Reasoning$q$,
    $q$Coded Blood Relations & Family Tree Deduction$q$,
    $q$MCQ$q$,
    $q$Read the following information carefully:
- 'P + Q' means 'P is the father of Q'.
- 'P - Q' means 'P is the sister of Q'.
- 'P × Q' means 'P is the brother of Q'.
- 'P ÷ Q' means 'P is the mother of Q'.

Consider the expression: M + N × R ÷ T - K.
Which of the following statements is definitely correct?
(a) M is the maternal grandfather of K
(b) T is the daughter of N
(c) M is the paternal grandfather of K
(d) K is the grandson of M$q$,
    $q$["M is the maternal grandfather of K", "T is the daughter of N", "M is the paternal grandfather of K", "K is the grandson of M"]$q$::jsonb,
    0,
    $q$A$q$,
    $q$1. Decode the expression from left to right:
   - M + N: M is the father of N (M is male).
   - N × R: N is the brother of R (N is male; R and N are siblings).
   - R ÷ T: R is the mother of T (R is female; M is therefore R's father).
   - T - K: T is the sister of K (T is female; T and K share the same mother R).
2. Relationship deduction:
   - R is the mother of K.
   - M is the father of R.
   - Therefore, M is the maternal grandfather of K. Statement (a) is definitely correct.
3. Evaluating distractors:
   - (b) T is the niece of N (since N is R's brother), not the daughter of N.
   - (c) M is linked through K's mother R, making him the maternal grandfather, not paternal.
   - (d) The gender of K is unspecified (K could be grandson or granddaughter).$q$,
    $q$Follow the matrilineal chain: K's mother is R, R's father is M → M is maternal grandfather of K immediately in 20 seconds.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    84,
    $q${"A": 76, "B": 8, "C": 6, "D": 10}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2021 Q75 & CSAT 2024 Q57 (Coded relationship chains with terminal gender indeterminacy)", "trapAlert": "Do not assume K is male simply because K appears at the end of the chain without an outgoing gender operator. Option (d) is an unverified assumption trap."}$q$::jsonb
),
(
    $q$DAILY-003$q$,
    3,
    '2026-10-16'::date,
    2026,
    $q$L4$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quantitative Aptitude$q$,
    $q$Linear Diophantine Equations & Integer Extremization$q$,
    $q$MCQ$q$,
    $q$A person spent exactly ₹ 1,000 to buy three types of items costing ₹ 20, ₹ 50 and ₹ 90 each. He bought at least one item of each type, and the total number of items bought was the maximum possible. What is the value of the difference between the number of ₹ 20 items and the number of ₹ 90 items purchased?
(a) 40
(b) 41
(c) 42
(d) 43$q$,
    $q$["40", "41", "42", "43"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Let x, y, and z denote the number of items purchased at ₹ 20, ₹ 50, and ₹ 90 respectively.
2. Integer constraint: x ≥ 1, y ≥ 1, z ≥ 1.
3. Total expenditure equation: 20x + 50y + 90z = 1000 ⇒ 2x + 5y + 9z = 100.
4. We want to maximize the total number of items T = x + y + z. Since ₹ 20 is the least expensive item, maximizing T requires maximizing x and minimizing (y + z).
5. Rearrange: 2x = 100 - (5y + 9z).
   - For x to be an integer, 100 - (5y + 9z) must be even.
   - Since 100 is even, (5y + 9z) must be even.
   - This forces y and z to have the same parity (both odd or both even).
6. To minimize expenditure on y and z with positive integers, test smallest odd positive integers: y = 1, z = 1.
   - 5(1) + 9(1) = 14 (even).
   - 2x = 100 - 14 = 86 ⇒ x = 43.
   - Total items T = 43 + 1 + 1 = 45 items.
   - (Testing both even: y = 2, z = 2 gives 2x = 100 - 28 = 72 ⇒ x = 36, T = 40 < 45).
7. The maximum count is uniquely achieved at x = 43, y = 1, z = 1.
8. Required difference = x - z = 43 - 1 = 42.$q$,
    $q$2x is even ⇒ 5y + 9z is even ⇒ y and z must share parity. Lowest positive odds: y = 1, z = 1 ⇒ 2x = 86 ⇒ x = 43. Difference = 43 - 1 = 42.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    71,
    $q${"A": 12, "B": 15, "C": 65, "D": 8}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q60 & CSAT 2026 Q68 (Fixed financial expenditure with parity constraints on item counts)", "trapAlert": "Trying to minimize y + z by setting y = 1, z = 2 gives 5(1) + 9(2) = 23 \u2192 2x = 77 (non-integer). Forgetting the parity constraint leads to false algebra."}$q$::jsonb
),
(
    $q$DAILY-004$q$,
    4,
    '2026-10-16'::date,
    2026,
    $q$L1$q$,
    $q$Logical Reasoning$q$,
    $q$Logical Reasoning$q$,
    $q$Direction Sense & Coordinate Geometry$q$,
    $q$MCQ$q$,
    $q$Two persons A and B start from the same point P. A walks 4 km towards North, then turns to his right and walks 3 km. B walks 3 km towards West, then turns to his right and walks 4 km. What is the distance between A and B, and in which direction is A with respect to B?
(a) 5 km towards East
(b) 6 km towards East
(c) 6 km towards North-East
(d) 8 km towards East$q$,
    $q$["5 km towards East", "6 km towards East", "6 km towards North-East", "8 km towards East"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. Set the initial common point P at the origin (0, 0) on a Cartesian coordinate plane.
2. Tracking Person A:
   - Walks 4 km North: reaches (0, 4).
   - Turns right (East) and walks 3 km: reaches final position A = (3, 4).
3. Tracking Person B:
   - Walks 3 km West: reaches (-3, 0).
   - Turns right (facing West, turning right means facing North) and walks 4 km: reaches final position B = (-3, 4).
4. Distance and relative direction:
   - Both A and B have the same y-coordinate (y = 4).
   - Distance AB = 3 - (-3) = 6 km along the horizontal line.
   - Since A has an x-coordinate of +3 and B has -3, A lies directly to the East of B.
5. Therefore, A is 6 km towards East with respect to B.$q$,
    $q$Both finish at y = 4 (North 4 km). A is at x = +3; B is at x = -3. Distance = 3 - (-3) = 6 km due East.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    95,
    $q${"A": 6, "B": 86, "C": 5, "D": 3}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2021 Q46 & CSAT 2024 Q35 (Orthogonal navigation from a common origin)", "trapAlert": "A candidate expecting a right-angled triangle often instinctively computes \u221a(3\u00b2 + 4\u00b2) = 5 km, forgetting that both individuals ended up on the same latitude y = 4."}$q$::jsonb
),
(
    $q$DAILY-005$q$,
    5,
    '2026-10-16'::date,
    2026,
    $q$L5$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quantitative Aptitude$q$,
    $q$Combinatorial Number Theory & Non-Uniqueness Traps$q$,
    $q$MCQ$q$,
    $q$A three-digit number ABC has distinct non-zero digits such that A > B > C. The sum of all possible two-digit numbers that can be formed using the digits A, B and C (without repetition in any two-digit number) is 484. What is the value of the digit A?
(a) 7
(b) 8
(c) 9
(d) Cannot be determined uniquely$q$,
    $q$["7", "8", "9", "Cannot be determined uniquely"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. From 3 distinct non-zero digits A, B, C, the possible two-digit numbers without repetition are 6 numbers: AB, BA, AC, CA, BC, CB.
2. Express each number in base 10:
   Sum = (10A + B) + (10B + A) + (10A + C) + (10C + A) + (10B + C) + (10C + B)
       = 20(A + B + C) + 2(A + B + C) = 22(A + B + C).
3. Given that the sum is 484:
   22(A + B + C) = 484 ⇒ A + B + C = 484 / 22 = 22.
4. Condition: 9 ≥ A > B > C ≥ 1.
   - If A ≤ 8, then the maximum possible sum of the three distinct digits would be 8 + 7 + 6 = 21, which is strictly less than 22.
   - Therefore, A cannot be 8 or less.
   - Hence, A must be 9.
5. (Verification: If A = 9, then B + C = 13. Possible valid pairs (B, C) with 9 > B > C ≥ 1 are (8, 5) and (7, 6). While B and C cannot be uniquely determined, the leading digit A is strictly and uniquely forced to be 9).$q$,
    $q$Sum = 22(A + B + C) = 484 ⇒ A + B + C = 22. Max possible sum for A ≤ 8 is 8 + 7 + 6 = 21 < 22. Thus A = 9 is mandatory.$q$,
    $q$avoided$q$,
    $q$Questions Which Should Have Been Avoided$q$,
    36,
    $q${"A": 14, "B": 18, "C": 26, "D": 42}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q09 & CSAT 2025 Q64 (Two-digit permutations of distinct digits with unique leading digit forcing)", "trapAlert": "Aspirants notice that (B, C) can be either (8, 5) or (7, 6), and reflexively select option (d) 'Cannot be determined uniquely', overlooking that the prompt asks exclusively for digit A."}$q$::jsonb
),
(
    $q$DAILY-006$q$,
    6,
    '2026-10-16'::date,
    2026,
    $q$L1$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quantitative Aptitude$q$,
    $q$Unit Digit & Modular Cyclicity$q$,
    $q$MCQ$q$,
    $q$What is the remainder when (17^2025 + 13^2025) is divided by 10?
(a) 0
(b) 2
(c) 5
(d) 8$q$,
    $q$["0", "2", "5", "8"]$q$::jsonb,
    0,
    $q$A$q$,
    $q$1. Finding the remainder when an integer is divided by 10 is identical to determining its unit digit.
2. Unit digit of 17^2025 depends only on the cyclicity of 7:
   - 7¹ = 7
   - 7² = 49 ≡ 9 (mod 10)
   - 7³ = 343 ≡ 3 (mod 10)
   - 7⁴ = 2401 ≡ 1 (mod 10)
   - Cyclicity is 4. Since 2025 = 4 × 506 + 1, 17^2025 has the same unit digit as 7¹ = 7.
3. Unit digit of 13^2025 depends only on the cyclicity of 3:
   - 3¹ = 3
   - 3² = 9 (mod 10)
   - 3³ = 27 ≡ 7 (mod 10)
   - 3⁴ = 81 ≡ 1 (mod 10)
   - Cyclicity is 4. Since 2025 = 4 × 506 + 1, 13^2025 has the same unit digit as 3¹ = 3.
4. Sum of unit digits = 7 + 3 = 10 ≡ 0 (mod 10).
5. Hence, the remainder is 0.$q$,
    $q$Mod 10: 17 ≡ -3 (mod 10). Because 2025 is an odd exponent: 17^2025 + 13^2025 ≡ (-3)^2025 + 3^2025 = -3^2025 + 3^2025 = 0.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    94,
    $q${"A": 84, "B": 6, "C": 5, "D": 5}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q15 & CSAT 2020 Q28 (Unit digit cyclicity mod 10 of paired prime powers)", "trapAlert": "A common mistake is adding the bases first (17 + 13 = 30) and assuming power rules without verifying whether the power is odd or applying modular identities safely."}$q$::jsonb
),
(
    $q$DAILY-007$q$,
    7,
    '2026-10-16'::date,
    2026,
    $q$L5$q$,
    $q$Logical Reasoning$q$,
    $q$Logical Reasoning$q$,
    $q$Truth-Tellers, Liars & Alternators Logic Puzzle$q$,
    $q$MCQ$q$,
    $q$Three persons A, B and C belong to three different tribes: Truth-tellers (who always speak the truth), Liars (who always tell lies), and Alternators (who alternate between truth and lie, in any order). Exactly one person belongs to each tribe.
They make the following statements:
- A says:
  1. 'I am a Liar.'
  2. 'B is a Truth-teller.'
- B says:
  1. 'A is not a Liar.'
  2. 'C is a Liar.'
- C says:
  1. 'I am a Truth-teller.'
  2. 'B is an Alternator.'

Who among them is the Truth-teller?
(a) A
(b) B
(c) C
(d) Cannot be determined$q$,
    $q$["A", "B", "C", "Cannot be determined"]$q$::jsonb,
    1,
    $q$B$q$,
    $q$1. Analyze the statement 'I am a Liar' made by A:
   - Can a Truth-teller say 'I am a Liar'? No, because that would be a lie.
   - Can a Liar say 'I am a Liar'? No, because that would be the truth, which a Liar cannot utter.
   - Therefore, only an Alternator can make the statement 'I am a Liar', and this statement must be FALSE.
2. Consequence for A:
   - A is definitively the Alternator.
   - Since A's first statement is False (F), A's second statement must be TRUE (T).
   - A's second statement is: 'B is a Truth-teller.'
   - Since this is True, B is definitively the Truth-teller.
3. Consequence for C:
   - Since A is the Alternator and B is the Truth-teller, C must be the Liar.
4. Consistency check on B and C:
   - B (Truth-teller): Statement 1 ('A is not a Liar') is True (A is Alternator). Statement 2 ('C is a Liar') is True. (Both True: consistent).
   - C (Liar): Statement 1 ('I am a Truth-teller') is False. Statement 2 ('B is an Alternator') is False (B is Truth-teller). (Both False: consistent).
5. Hence, B is the Truth-teller.$q$,
    $q$The statement 'I am a Liar' can only ever be uttered by an Alternator as a False statement. Thus A = Alternator. A's next statement must be True → B is Truth-teller.$q$,
    $q$avoided$q$,
    $q$Questions Which Should Have Been Avoided$q$,
    42,
    $q${"A": 18, "B": 48, "C": 16, "D": 18}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2025 Q49 & CSAT 2023 Q67 (Three-tribe truth-functional invariant deduction)", "trapAlert": "A candidate might test all 6 tribe permutations manually and lose 4+ minutes under exam panic. Recognizing the self-referential paradox 'I am a Liar' unlocks the entire puzzle instantly."}$q$::jsonb
),
(
    $q$DAILY-008$q$,
    8,
    '2026-10-16'::date,
    2026,
    $q$L3$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quantitative Aptitude$q$,
    $q$Time & Work / Multi-Stage Work Tracking$q$,
    $q$MCQ$q$,
    $q$A and B working together can complete a work in 12 days. B and C working together can complete it in 15 days, while A and C working together can complete it in 20 days. They all start working together, but A leaves after 5 days. B and C continue working for 5 more days, after which B also leaves. C finishes the remaining work alone. How many days did C work in total from start to finish?
(a) 15 days
(b) 18 days
(c) 20 days
(d) 24 days$q$,
    $q$["15 days", "18 days", "20 days", "24 days"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Assume total work = LCM(12, 15, 20) = 60 units.
2. Calculate pairwise daily efficiencies:
   - (A + B) = 60 / 12 = 5 units/day
   - (B + C) = 60 / 15 = 4 units/day
   - (A + C) = 60 / 20 = 3 units/day
3. Add all three equations:
   2(A + B + C) = 5 + 4 + 3 = 12 ⇒ (A + B + C) = 6 units/day.
4. Individual efficiencies:
   - Efficiency of C = (A + B + C) - (A + B) = 6 - 5 = 1 unit/day
   - Efficiency of A = (A + B + C) - (B + C) = 6 - 4 = 2 units/day
   - Efficiency of B = (A + B + C) - (A + C) = 6 - 3 = 3 units/day
5. Multi-stage execution:
   - Stage 1 (A, B, C for 5 days): Work done = 5 × 6 = 30 units.
   - Stage 2 (B, C for 5 days): Work done = 5 × 4 = 20 units.
   - Total work done so far = 30 + 20 = 50 units.
   - Remaining work = 60 - 50 = 10 units.
   - Stage 3 (C alone): Days taken = 10 units / 1 unit/day = 10 days.
6. Total days C worked = 5 (Stage 1) + 5 (Stage 2) + 10 (Stage 3) = 20 days.$q$,
    $q$Pairwise sum gives A+B+C = 6, C = 1, B+C = 4. Work: 5(6) + 5(4) = 50 units. Left = 10 units → C takes 10 days alone. Total for C = 5 + 5 + 10 = 20 days.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    78,
    $q${"A": 12, "B": 14, "C": 68, "D": 6}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2022 Q54 & CSAT 2025 Q18 (Cyclic pairwise rate models and multi-stage presence tracking)", "trapAlert": "A common mistake is answering only the days C worked alone (10 days) or omitting Stage 1, forgetting that C was present throughout all three operational stages."}$q$::jsonb
),
(
    $q$DAILY-009$q$,
    9,
    '2026-10-16'::date,
    2026,
    $q$L4$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quantitative Aptitude$q$,
    $q$Combinatorics & Restricted Gap Placements$q$,
    $q$MCQ$q$,
    $q$In how many different ways can 5 identical red balls and 4 identical black balls be arranged in a straight row such that no two black balls are placed adjacent to each other?
(a) 15
(b) 20
(c) 30
(d) 120$q$,
    $q$["15", "20", "30", "120"]$q$::jsonb,
    0,
    $q$A$q$,
    $q$1. Since the red balls are identical and the black balls are identical, order within the same color group does not create distinct arrangements.
2. To ensure that no two black balls are adjacent, apply the Gap Method:
   - First, arrange the 5 identical red balls in a straight line: _ R _ R _ R _ R _ R _
   - There is only 1 distinct way to place the 5 identical red balls.
3. The 5 red balls create 6 possible gap locations (one before the first red ball, four between consecutive red balls, and one after the last red ball):
   Total gaps = 5 + 1 = 6 gaps.
4. To guarantee that no two black balls are adjacent, each of the 4 black balls must occupy a different gap.
5. Since all 4 black balls are identical, the number of ways is simply the number of ways to choose 4 gaps out of the 6 available gaps:
   Number of ways = C(6, 4) = C(6, 2) = (6 × 5) / (2 × 1) = 15 ways.
6. Hence, there are 15 distinct arrangements.$q$,
    $q$Gap method for identical items: 5 Red balls create 6 gaps. Pick 4 gaps for 4 identical Black balls: C(6, 4) = C(6, 2) = 15.$q$,
    $q$attempted$q$,
    $q$Questions Which Should Be Attempted$q$,
    68,
    $q${"A": 64, "B": 18, "C": 12, "D": 6}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2023 Q74 & CSAT 2024 Q41 (Non-adjacency arrangements with identical objects)", "trapAlert": "Aspirants frequently treat the balls as distinct objects, calculating P(6, 4) \u00d7 5! or dividing 9! by permutations, falling into options like 120 or much higher numbers."}$q$::jsonb
),
(
    $q$DAILY-010$q$,
    10,
    '2026-10-16'::date,
    2026,
    $q$L2$q$,
    $q$Quantitative Aptitude$q$,
    $q$Quantitative Aptitude$q$,
    $q$Averages & Net Replacement Shifts$q$,
    $q$MCQ$q$,
    $q$The average age of a committee of 8 members increases by 2 years when two members whose ages are 35 years and 45 years are replaced by two new members. What is the average age of the two new members?
(a) 44 years
(b) 46 years
(c) 48 years
(d) 50 years$q$,
    $q$["44 years", "46 years", "48 years", "50 years"]$q$::jsonb,
    2,
    $q$C$q$,
    $q$1. Let original average age of the 8 committee members be A years.
2. Total initial age of the committee = 8A.
3. Sum of ages of the two outgoing members = 35 + 45 = 80 years.
4. When replaced by two new members, the new average becomes (A + 2) years.
5. New total age = 8(A + 2) = 8A + 16 years.
6. Net increase in the committee's total age = (8A + 16) - 8A = 16 years.
7. Therefore, the sum of ages of the two new incoming members = (Sum of outgoing ages) + (Net increase) = 80 + 16 = 96 years.
8. Average age of the two new members = 96 / 2 = 48 years.$q$,
    $q$Average increase = 2 years across 8 members ⇒ Total increase = +16. Outgoing sum = 80. New sum = 80 + 16 = 96. New average = 96 / 2 = 48 years.$q$,
    $q$not_wrong$q$,
    $q$Questions Which Should Not Have Been Wrong$q$,
    89,
    $q${"A": 6, "B": 8, "C": 80, "D": 6}$q$::jsonb,
    $q${"pyqInspiration": "Inspired by CSAT 2021 Q34 & CSAT 2023 Q52 (Group mean deviation under multi-person replacement)", "trapAlert": "A common mistake is adding the 16-year increase to the average of the outgoing members (40 + 16 = 56) or forgetting to divide the total increase by 2 (picking 40 + 2 = 42)."}$q$::jsonb
)
ON CONFLICT (id) DO UPDATE SET
    question_number = EXCLUDED.question_number,
    test_date = '2026-10-16'::date,
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
