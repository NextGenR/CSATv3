-- ==========================================================================
-- Supabase PostgreSQL Schema & Seeding Script for CSAT Daily 10 Questions
-- Run this script in the Supabase SQL Editor
-- ==========================================================================

-- 1. Create Table
CREATE TABLE IF NOT EXISTS public.daily_questions (
    id TEXT PRIMARY KEY,
    question_number INTEGER NOT NULL,
    test_date DATE DEFAULT CURRENT_DATE,
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

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.daily_questions ENABLE ROW LEVEL SECURITY;

-- 3. Create Public Read Policy for anonymous users
DROP POLICY IF EXISTS "Allow public read access" ON public.daily_questions;
CREATE POLICY "Allow public read access"
ON public.daily_questions
FOR SELECT
TO anon, authenticated
USING (true);

-- 4. Seed Questions Data
INSERT INTO public.daily_questions (
    id, question_number, test_date, year, difficulty, subject, pillar, topic, type,
    question, options, correct_index, answer_key, solution, trick, category, category_title,
    attempt_rate, option_distribution, forensic_meta
) VALUES
(
    'CSAT-2026-Q10',
    1,
    '2026-10-16',
    2026,
    'L4',
    'Quantitative Aptitude',
    'Quant',
    'LCM & HCF / Arithmetic Progression',
    'MCQ',
    'X, Y and Z jump forward 4'', 6'' and 5'', respectively. At 8 AM, they all land on mark 199''. How many times will they all land on the same mark (need not be at the same moment) between mark 195'' and 1000'', if all of them cross mark 1000'' by 9 AM?',
    '["11", "12", "13", "14"]'::jsonb,
    3,
    'D',
    'Since all three start/synchronize at mark 199'', they will all land on mark M if M - 199 is a multiple of 4, 6, and 5.
LCM(4, 6, 5) = 60.
Common marks are given by M = 199 + 60k, where k is an integer.
We need M between 195'' and 1000'':
For k = 0: M = 199 (195 < 199 <= 1000).
For k = 13: M = 199 + 60(13) = 199 + 780 = 979 <= 1000.
For k = 14: M = 199 + 840 = 1039 > 1000.
Thus, k takes values 0, 1, 2, ..., 13.
Total number of common marks = 13 - 0 + 1 = 14.',
    'LCM(4, 5, 6) = 60. Range from 199 to 1000: floor((1000 - 199)/60) + 1 = floor(801/60) + 1 = 13 + 1 = 14.',
    'attempted',
    'Questions Which Should Be Attempted',
    82,
    '{"A": 12, "B": 14, "C": 18, "D": 56}'::jsonb,
    '{"cognitiveLoadScore": 4, "scratchpadDemand": "High - Iterative/Heavy Writing", "idealTimeVsHallTime": "55s / 105s", "primaryTrapArchetype": "Initial Phase Offset & Fencepost Count Error", "riskIndex": "Medium"}'::jsonb
),
(
    'CSAT-2026-Q48',
    2,
    '2026-10-16',
    2026,
    'L2',
    'Logical Reasoning',
    'Reasoning',
    'Syllogisms',
    'MCQ',
    'Consider the following statements :
Every red is blue. Every blue is green. Every green is yellow.
Which of the following statements denoted by P, Q and R are correct?
P. Every blue is yellow.
Q. Every red is green.
R. Every red is yellow.
Select the answer using the code given below.',
    '["P and Q only", "Q and R only", "P and R only", "P, Q and R"]'::jsonb,
    3,
    'D',
    '1. The premises establish the nested inclusion: Red ⊆ Blue ⊆ Green ⊆ Yellow.
2. Statement P (''Every blue is yellow''): Blue ⊆ Green ⊆ Yellow => Blue ⊆ Yellow (True).
3. Statement Q (''Every red is green''): Red ⊆ Blue ⊆ Green => Red ⊆ Green (True).
4. Statement R (''Every red is yellow''): Red ⊆ Yellow (True).
Hence, all three statements P, Q, and R are correct.',
    'Nested chain: Red ⊆ Blue ⊆ Green ⊆ Yellow. All transitive subsets hold true.',
    'not_wrong',
    'Questions Which Should Not Have Been Wrong',
    94,
    '{"A": 4, "B": 6, "C": 5, "D": 85}'::jsonb,
    '{"cognitiveLoadScore": 2, "scratchpadDemand": "Low - Mental Math", "idealTimeVsHallTime": "20s / 40s", "primaryTrapArchetype": "Converse Inversion Fallacy (''All Yellow is Red'')", "riskIndex": "Low"}'::jsonb
),
(
    'CSAT-2022-Q77',
    3,
    '2026-10-16',
    2022,
    'L3',
    'Quantitative Aptitude',
    'Quant',
    'Permutations, Combinations & Probability',
    'Multiple Choice',
    'There are 9 cups placed on a table arranged in equal number of rows and columns out of which 6 cups contain coffee and 3 cups contain tea. In how many ways can they be arranged so that each row should contain at least one cup of coffee?
(a) 18
(b) 27
(c) 54
(d) 81',
    '["18", "27", "54", "81"]'::jsonb,
    3,
    'D',
    '1. 9 positions arranged in a 3 × 3 grid (3 rows, 3 columns).
2. Total ways to arrange 6 coffee cups (C) and 3 tea cups (T) in 9 spots:
   Total = C(9, 3) = (9 × 8 × 7) / (3 × 2 × 1) = 84 ways.
3. Complementary condition: Count arrangements where at least one row has NO coffee cup.
- Since each row has 3 cups and there are exactly 3 tea cups, a row has no coffee cup if and only if that entire row is filled with the 3 tea cups.
- Row 1 filled with 3 tea cups (and remaining rows with coffee): 1 way.
- Row 2 filled with 3 tea cups: 1 way.
- Row 3 filled with 3 tea cups: 1 way.
Total invalid arrangements = 3 ways.
4. Valid arrangements where every row has at least one coffee cup:
   84 - 3 = 81 ways.',
    'Complementary counting: Total ways = C(9, 3) = 84. Rows with zero coffee cups mean an entire row of 3 tea cups, which can only happen in 3 ways (Row 1, Row 2, or Row 3). Valid ways = 84 - 3 = 81.',
    'attempted',
    'Questions Which Should Be Attempted',
    76,
    '{"A": 10, "B": 12, "C": 15, "D": 63}'::jsonb,
    '{"cognitiveLoadScore": 3, "scratchpadDemand": "Low - Mental Math", "idealTimeVsHallTime": "40s / 65s", "primaryTrapArchetype": "Boundary Fencepost", "riskIndex": "Medium"}'::jsonb
),
(
    'CSAT-2022-Q40',
    4,
    '2026-10-16',
    2022,
    'L5',
    'Logical Reasoning',
    'Reasoning',
    'Analytical Puzzles & Seating',
    'Multiple Choice',
    'Eight students A, B, C, D, E, F, G and H sit around a circular table, equidistant from each other, facing the centre of the table, not necessarily in the same order.
B and D sit neither adjacent to C nor opposite to C.
A sits in between E and D, and F sits in between B and H.
Which one of the following is definitely correct?
(a) B sits in between A and G
(b) C sits opposite to G
(c) E sits opposite to F
(d) None of the above',
    '["B sits in between A and G", "C sits opposite to G", "E sits opposite to F", "None of the above"]'::jsonb,
    3,
    'D',
    '1. 8 students around a circular table. Let seats be 1 to 8 clockwise. Fix C at seat 1.
- Seats adjacent to C are 8 and 2; opposite to C is seat 5.
- Since B and D cannot sit adjacent or opposite to C, B and D must be from {3, 4, 6, 7}.
2. A is between E and D: (E, A, D) forms a consecutive triplet.
3. F is between B and H: (B, F, H) forms another consecutive triplet.
4. There are multiple valid arrangements satisfying all constraints:
- Arrangement 1: C at 1, E at 2, A at 3, D at 4, G at 5, B at 6, F at 7, H at 8.
  Here G is opposite C, but B is between G and F (not A and G), and E (2) is opposite B (6), not F.
- Arrangement 2: C at 1, G at 2, B at 3, A at 4, D at 5 (invalid since D cannot be at 5), but we can have G at 2, D at 3, A at 4, E at 5, H at 6, F at 7, B at 8 (invalid: B adjacent to C).
- Testing further valid variants shows that positions of G, E, F, B can vary depending on which side the blocks (E-A-D) and (B-F-H) are placed.
5. Because none of the specific conditions in (a), (b), or (c) is guaranteed across all valid arrangements, none of them is definitely correct.
6. Hence, the correct choice is (d) None of the above.',
    'Multiple valid circular seating arrangements exist due to the symmetrical placement of the two triplets (E-A-D) and (B-F-H). No single condition in (a), (b), or (c) holds unconditionally in all configurations -> (d).',
    'avoided',
    'Questions Which Should Have Been Avoided',
    38,
    '{"A": 22, "B": 24, "C": 28, "D": 26}'::jsonb,
    '{"cognitiveLoadScore": 5, "scratchpadDemand": "High - Iterative/Heavy Writing", "idealTimeVsHallTime": "120s / 240s", "primaryTrapArchetype": "Sunk-Cost Iteration", "riskIndex": "High"}'::jsonb
),
(
    'CSAT-2019-Q72',
    5,
    '2026-10-16',
    2019,
    'L5',
    'Basic Numeracy',
    'Quant',
    'Cube Colouring & Rotational Symmetry',
    'MCQ',
    'Each face of a cube can be painted in black or white colours. In how many different ways can the cube be painted ?
(a) 9
(b) 10
(c) 11
(d) 12',
    '["9", "10", "11", "12"]'::jsonb,
    1,
    'B',
    '1. Consider distinct colorings of 6 faces of a cube with 2 colors (Black and White) up to 3D rotation:
2. Classify by number of black faces k:
   - k = 0 (0 Black, 6 White): 1 way.
   - k = 1 (1 Black, 5 White): 1 way (any single face is rotationally equivalent).
   - k = 2 (2 Black, 4 White): 2 ways (the two black faces can either be adjacent sharing an edge, or opposite faces).
   - k = 3 (3 Black, 3 White): 2 ways (the three black faces can share a corner/all adjacent, or two opposite and one adjacent).
   - k = 4 (4 Black, 2 White): 2 ways (symmetric to k = 2: two white faces adjacent or opposite).
   - k = 5 (5 Black, 1 White): 1 way (symmetric to k = 1).
   - k = 6 (6 Black, 0 White): 1 way (all black).
3. Total non-equivalent colorings:
   1 + 1 + 2 + 2 + 2 + 1 + 1 = 10 ways.
4. Burnside''s Lemma verification: Total = (1/24) × (2⁶ + 6×2³ + 3×2⁴ + 8×2² + 6×2³) = (1/24) × (64 + 48 + 48 + 32 + 48) = 240 / 24 = 10.
5. Option (b) is correct.',
    'Classify by number of black faces: 1 (for 0B) + 1 (for 1B) + 2 (for 2B) + 2 (for 3B) + 2 (for 4B) + 1 (for 5B) + 1 (for 6B) = 10 ways (b).',
    'avoided',
    'Questions Which Should Have Been Avoided',
    34,
    '{"A": 24, "B": 35, "C": 26, "D": 15}'::jsonb,
    '{"cognitiveLoadScore": 5, "scratchpadDemand": "High - Iterative/Heavy Writing", "idealTimeVsHallTime": "120s / 240s", "primaryTrapArchetype": "Sunk-Cost Iteration", "riskIndex": "High"}'::jsonb
),
(
    'CSAT-2026-Q65',
    6,
    '2026-10-16',
    2026,
    'L2',
    'Quantitative Aptitude',
    'Quant',
    'Mixtures & Alligations',
    'MCQ',
    'An alloy P contains 20% copper and 80% zinc by weight. Another alloy Q contains 60% copper and 40% zinc by weight. A third alloy R is to be prepared from P and Q so that it contains equal amount of copper and zinc. In what ratio, amounts of P and Q be mixed in order to get R?',
    '["1 : 3", "3 : 1", "2 : 3", "3 : 2"]'::jsonb,
    0,
    'A',
    '1. Target copper percentage in R = 50% (equal parts copper and zinc).
2. Percentage of copper in P = 20%.
3. Percentage of copper in Q = 60%.
4. By the rule of alligation:
   Ratio of P to Q = (60 - 50) : (50 - 20) = 10 : 30 = 1 : 3.',
    'Alligation on Copper: (60 - 50) / (50 - 20) = 10 / 30 = 1 : 3.',
    'not_wrong',
    'Questions Which Should Not Have Been Wrong',
    91,
    '{"A": 82, "B": 8, "C": 6, "D": 4}'::jsonb,
    '{"cognitiveLoadScore": 2, "scratchpadDemand": "Low - Mental Math", "idealTimeVsHallTime": "25s / 45s", "primaryTrapArchetype": "Copper vs Zinc Proportion Inversion", "riskIndex": "Low"}'::jsonb
),
(
    'CSAT-2026-Q03',
    7,
    '2026-10-16',
    2026,
    'L3',
    'Quantitative Aptitude',
    'Quant',
    'Number System & Parity',
    'Data Sufficiency',
    'If x and y are integers, then is x even?
Statement I : x^2 y^2 is even.
Statement II : 1 + x^2 + y^2 is odd.',
    '["Select this option if the question can be answered using one of these statements alone, but cannot be answered using other statement", "Select this option if the question can be answered using either statement alone", "Select this option if the question can be answered using both the statements together, but cannot be answered using either statement alone", "Select this option if the question cannot be answered even using any of the statements"]'::jsonb,
    2,
    'C',
    'Statement I: x^2 y^2 is even => at least one of x or y is even. Does not tell whether x is even. Insufficient.
Statement II: 1 + x^2 + y^2 is odd => x^2 + y^2 is even => x and y have the same parity (both even or both odd). Insufficient.
Together: Statement I requires at least one to be even. Statement II requires both to have the same parity. Hence both x and y must be even! Therefore, x is definitely even.',
    'Statement I: at least one even. Statement II: same parity. Combined: both must be even.',
    'attempted',
    'Questions Which Should Be Attempted',
    80,
    '{"A": 10, "B": 14, "C": 68, "D": 8}'::jsonb,
    '{"cognitiveLoadScore": 3, "scratchpadDemand": "Medium - Standard Scratch", "idealTimeVsHallTime": "30s / 55s", "primaryTrapArchetype": "Parity Factor Ambiguity (xy even doesn''t isolate x)", "riskIndex": "Low"}'::jsonb
),
(
    'CSAT-2023-Q80',
    8,
    '2026-10-16',
    2023,
    'L1',
    'Reasoning',
    'Reasoning',
    'Letter Rearrangement',
    'Direct MCQ',
    'The letters of the word ''INCOMPREHENSIBILITIES'' are arranged alphabetically in reverse order. How many positions of the letter/letters will remain unchanged ?
(a) None
(b) One
(c) Two
(d) Three',
    '["None", "One", "Two", "Three"]'::jsonb,
    2,
    'C',
    '1. The 21 letters of ''INCOMPREHENSIBILITIES'' are:
   Pos 1 to 21: I, N, C, O, M, P, R, E, H, E, N, S, I, B, I, L, I, T, I, E, S.
2. Sorted in reverse alphabetical order (Z to A):
   T, S, S, R, P, O, N, N, M, L, I, I, I, I, I, H, E, E, E, C, B.
3. Comparing original vs reverse sorted positions:
   - Position 13: Original is ''I'', Reverse sorted is ''I''. (Match)
   - Position 15: Original is ''I'', Reverse sorted is ''I''. (Match)
   - All other 19 positions have different letters.
4. Therefore, exactly 2 positions remain unchanged.',
    'Original positions 13 and 15 both have the letter ''I''. In reverse alphabetical sort, the five ''I''s occupy positions 11 through 15. Thus positions 13 and 15 match. Exactly Two unchanged positions.',
    'not_wrong',
    'Questions Which Should Not Have Been Wrong',
    92,
    '{"A": 6, "B": 8, "C": 81, "D": 5}'::jsonb,
    '{"cognitiveLoadScore": 1, "scratchpadDemand": "Low - Mental Math", "idealTimeVsHallTime": "20s / 30s", "primaryTrapArchetype": "None", "riskIndex": "Low"}'::jsonb
),
(
    'CSAT-2026-Q69',
    9,
    '2026-10-16',
    2026,
    'L4',
    'Quantitative Aptitude',
    'Quant',
    'Time, Speed & Distance',
    'MCQ',
    'A train has to complete a journey of 800 km. If it meets a minor accident, its speed becomes half of the existing speed. If there is a mechanical defect, the speed becomes one-fourth of the existing speed. On its way, the train meets with a minor accident after 200 km; and 400 km thereafter, it develops a mechanical defect. Had the train developed the mechanical defect after 200 km and met the minor accident 400 km thereafter, it would have taken 4 more hours to reach its destination. What was the original speed of the train in km per hour?',
    '["200", "190", "150", "100"]'::jsonb,
    0,
    'A',
    '1. Journey breaks into three segments: 0-200 km (200 km), 200-600 km (400 km), and 600-800 km (200 km).
2. First 200 km: In both scenarios, train travels at original speed v.
3. Last 200 km (600-800 km): In both scenarios, both events have occurred. Speed is (1/2) * (1/4) * v = v/8 in both cases. Hence, time taken on the last 200 km is identical.
4. Middle 400 km (200-600 km):
   - Scenario 1 (minor accident only): speed = v/2 => time = 400 / (v/2) = 800 / v.
   - Scenario 2 (mechanical defect only): speed = v/4 => time = 400 / (v/4) = 1600 / v.
5. The 4-hour delay comes entirely from the middle 400 km:
   1600 / v - 800 / v = 4 => 800 / v = 4 => v = 200 km/h.',
    'Difference is only in the middle 400 km: 400/(v/4) - 400/(v/2) = 800/v = 4 hours => v = 200 km/h.',
    'attempted',
    'Questions Which Should Be Attempted',
    70,
    '{"A": 62, "B": 16, "C": 14, "D": 8}'::jsonb,
    '{"cognitiveLoadScore": 4, "scratchpadDemand": "High - Iterative/Heavy Writing", "idealTimeVsHallTime": "50s / 100s", "primaryTrapArchetype": "Multi-Leg Sequential Speed Fraction Confusion", "riskIndex": "Medium"}'::jsonb
),
(
    'CSAT-2024-Q18',
    10,
    '2026-10-16',
    2024,
    'L1',
    'Quant',
    'Quant',
    'Number System',
    'Single-choice',
    '421 and 427, when divided by the same number, leave the same remainder 1. How many numbers can be used as the divisor in order to get the same remainder 1?',
    '["1", "2", "3", "4"]'::jsonb,
    2,
    'C',
    'Let the divisor be d. Since the remainder is 1, d must strictly exceed the remainder, so d > 1. Moreover, d must divide (421 - 1) = 420 and (427 - 1) = 426. Thus d is a common divisor of 420 and 426. GCD(420, 426) = GCD(420, 426 - 420) = GCD(420, 6) = 6. The positive divisors of 6 are {1, 2, 3, 6}. Since d > 1, the allowable divisors are {2, 3, 6}. There are 3 such numbers.',
    'Divisor must divide difference (427 - 421 = 6) and be greater than remainder 1. Factors of 6 greater than 1: 2, 3, 6 -> total 3.',
    'not_wrong',
    'Questions Which Should Not Have Been Wrong',
    88,
    '{"A": 10, "B": 12, "C": 72, "D": 6}'::jsonb,
    '{"cognitiveLoadScore": 1, "scratchpadDemand": "Low - Mental Math", "idealTimeVsHallTime": "15s / 25s", "primaryTrapArchetype": "None", "riskIndex": "Low"}'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
    question_number = EXCLUDED.question_number,
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
