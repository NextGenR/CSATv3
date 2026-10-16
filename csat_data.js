/**
 * CSAT Daily Practice Dataset & Logic
 * Traditional UPSC Terminology - Zero Buzzwords
 */

const CSAT_QUESTIONS_16OCT = [
  {
    id: 1,
    chapter: "Number System",
    chapterHi: "संख्या पद्धति",
    category: "not_wrong", // Should Not Have Been Wrong (Foundational, high accuracy)
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy-Moderate",
    en: {
      statement: "What is the remainder when (7^84) is divided by 342?",
      options: {
        A: "1",
        B: "7",
        C: "49",
        D: "341"
      },
      explanation: "We know that 7^3 = 343.\n343 can be written as (342 + 1).\nNow, 7^84 = (7^3)^28 = (342 + 1)^28.\nExpanding by binomial theorem, all terms except the last term contain 342 as a factor.\nTherefore, the remainder when divided by 342 is 1^28 = 1."
    },
    hi: {
      statement: "जब (7^84) को 342 से विभाजित किया जाता है, तो शेषफल क्या होगा?",
      options: {
        A: "1",
        B: "7",
        C: "49",
        D: "341"
      },
      explanation: "हम जानते हैं कि 7^3 = 343.\n343 को (342 + 1) के रूप में लिखा जा सकता है।\nअब, 7^84 = (7^3)^28 = (342 + 1)^28.\nद्विपद प्रमेय द्वारा, अंतिम पद को छोड़कर सभी पदों में 342 एक गुणनखंड के रूप में होगा।\nअतः शेषफल 1^28 = 1 होगा।"
    },
    correctAnswer: "A",
    attemptRate: 88, // 88% aspirants attempted
    optionDistribution: { A: 76, B: 12, C: 8, D: 4 }, // % of attempts
    recommendedTimeSec: 60
  },
  {
    id: 2,
    chapter: "Percentage & Profit",
    chapterHi: "प्रतिशत एवं लाभ",
    category: "not_wrong", // Should Not Have Been Wrong
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy",
    en: {
      statement: "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that the total expenditure remains unchanged?",
      options: {
        A: "15%",
        B: "20%",
        C: "25%",
        D: "33.33%"
      },
      explanation: "Let the initial price be ₹100 and initial consumption be 100 kg. Total expenditure = ₹10,000.\nNew price = ₹125.\nTo keep expenditure at ₹10,000, new consumption = 10,000 / 125 = 80 kg.\nReduction in consumption = 100 - 80 = 20 kg out of 100 kg, which is 20%.\nFormula: [r / (100 + r)] * 100% = [25 / 125] * 100 = 20%."
    },
    hi: {
      statement: "यदि चीनी के मूल्य में 25% की वृद्धि हो जाती है, तो एक परिवार को अपनी खपत में कितने प्रतिशत की कमी करनी होगी ताकि कुल खर्च अपरिवर्तित रहे?",
      options: {
        A: "15%",
        B: "20%",
        C: "25%",
        D: "33.33%"
      },
      explanation: "माना प्रारंभिक मूल्य ₹100 और प्रारंभिक खपत 100 किग्रा है। कुल खर्च = ₹10,000.\nनया मूल्य = ₹125.\nखर्च ₹10,000 रखने के लिए, नई खपत = 10,000 / 125 = 80 किग्रा।\nखपत में कमी = 100 - 80 = 20 किग्रा (20%).\nसीधा सूत्र: [r / (100 + r)] × 100% = [25 / 125] × 100 = 20%."
    },
    correctAnswer: "B",
    attemptRate: 94,
    optionDistribution: { A: 4, B: 84, C: 9, D: 3 },
    recommendedTimeSec: 45
  },
  {
    id: 3,
    chapter: "Speed, Time & Distance",
    chapterHi: "चाल, समय और दूरी",
    category: "attempted", // Should Be Attempted
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate",
    en: {
      statement: "A man covers a distance of 360 km in 8 hours partly by bus at 40 km/h and partly by train at 60 km/h. What is the distance covered by train?",
      options: {
        A: "120 km",
        B: "180 km",
        C: "240 km",
        D: "200 km"
      },
      explanation: "Let the time traveled by train be 't' hours. Then time traveled by bus = (8 - t) hours.\nTotal Distance = Speed_bus * Time_bus + Speed_train * Time_train\n360 = 40*(8 - t) + 60*t\n360 = 320 - 40t + 60t\n20t = 40 => t = 2 hours.\nDistance covered by train = 60 km/h * 2 hours = 120 km.\nWait, let's recheck: 40*6 = 240 km by bus; 60*2 = 120 km by train; 240 + 120 = 360 km. Correct answer is 120 km."
    },
    hi: {
      statement: "एक व्यक्ति 360 किमी की दूरी 8 घंटे में आंशिक रूप से बस द्वारा 40 किमी/घंटा की गति से और आंशिक रूप से ट्रेन द्वारा 60 किमी/घंटा की गति से तय करता है। ट्रेन द्वारा तय की गई दूरी कितनी है?",
      options: {
        A: "120 किमी",
        B: "180 किमी",
        C: "240 किमी",
        D: "200 किमी"
      },
      explanation: "माना ट्रेन द्वारा यात्रा का समय t घंटे है। तब बस द्वारा समय = (8 - t) घंटे।\nकुल दूरी = 40 × (8 - t) + 60 × t\n360 = 320 - 40t + 60t\n20t = 40 => t = 2 घंटे।\nट्रेन द्वारा तय की गई दूरी = 60 × 2 = 120 किमी।"
    },
    correctAnswer: "A",
    attemptRate: 74,
    optionDistribution: { A: 65, B: 15, C: 14, D: 6 },
    recommendedTimeSec: 75
  },
  {
    id: 4,
    chapter: "Time & Work",
    chapterHi: "समय और कार्य",
    category: "not_wrong", // Should Not Have Been Wrong
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy-Moderate",
    en: {
      statement: "A can complete a piece of work in 12 days and B in 18 days. They worked together for 4 days, after which B left. In how many more days will A finish the remaining work alone?",
      options: {
        A: "5 days",
        B: "5.33 days",
        C: "6 days",
        D: "7 days"
      },
      explanation: "Total work = LCM(12, 18) = 36 units.\nEfficiency of A = 36/12 = 3 units/day.\nEfficiency of B = 36/18 = 2 units/day.\nCombined efficiency of A + B = 5 units/day.\nWork completed in 4 days = 4 * 5 = 20 units.\nRemaining work = 36 - 20 = 16 units.\nTime required for A alone = 16 / 3 = 5.33 days (5 1/3 days)."
    },
    hi: {
      statement: "A एक काम को 12 दिनों में और B उसी काम को 18 दिनों में पूरा कर सकता है। वे 4 दिनों तक एक साथ काम करते हैं, जिसके बाद B काम छोड़ देता है। शेष कार्य को अकेले पूरा करने में A को कितने दिन और लगेंगे?",
      options: {
        A: "5 दिन",
        B: "5.33 दिन",
        C: "6 दिन",
        D: "7 दिन"
      },
      explanation: "कुल कार्य = ल.स.प.(12, 18) = 36 इकाइयां।\nA की कार्यक्षमता = 36/12 = 3 इकाई/दिन।\nB की कार्यक्षमता = 36/18 = 2 इकाई/दिन।\nदोनो की कुल क्षमता = 5 इकाई/दिन।\n4 दिनों में किया गया कार्य = 4 × 5 = 20 इकाइयां।\nशेष कार्य = 36 - 20 = 16 इकाइयां।\nA द्वारा लिया गया शेष समय = 16 / 3 = 5.33 दिन (5 1/3 दिन)।"
    },
    correctAnswer: "B",
    attemptRate: 85,
    optionDistribution: { A: 12, B: 72, C: 11, D: 5 },
    recommendedTimeSec: 60
  },
  {
    id: 5,
    chapter: "Permutations & Combinations",
    chapterHi: "क्रमचय और संचय",
    category: "avoided", // Questions Which Should Have Been Avoided (Lengthy calculation / trap)
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "High (Trap/Lengthy)",
    en: {
      statement: "How many 5-digit numbers can be formed using the digits 0, 1, 2, 3, 4, and 5 without repetition such that the number is divisible by 6?",
      options: {
        A: "72",
        B: "96",
        C: "108",
        D: "144"
      },
      explanation: "Strategic Note: This question involves multiple nested subsets and parity checks. Under exam pressure, it consumes 3.5+ minutes and has high negative marking risk.\nTotal 6 digits: {0, 1, 2, 3, 4, 5}. Sum = 15.\nA 5-digit number omits exactly one digit.\nFor divisibility by 3, the sum of 5 digits must be divisible by 3. Since total sum is 15 (divisible by 3), the omitted digit must also be divisible by 3, i.e., omitted digit is either 0 or 3.\nCase 1: Digit 0 is omitted (Digits used: 1,2,3,4,5 - sum=15).\nFor divisibility by 6, it must also be even (unit digit 2 or 4).\nUnit digit choices = 2 (either 2 or 4). Remaining 4 digits can be arranged in 4! = 24 ways.\nSubtotal Case 1 = 2 * 24 = 48.\nCase 2: Digit 3 is omitted (Digits used: 0,1,2,4,5 - sum=12).\nUnit digit must be even: {0, 2, 4}.\n- If unit digit is 0: Remaining 4 digits (1,2,4,5) can be arranged in 4! = 24 ways.\n- If unit digit is 2: 1st digit cannot be 0 (choices: 1,4,5 = 3 choices). Remaining 3 positions = 3! = 6 ways. Total = 3 * 6 = 18.\n- If unit digit is 4: Similarly 3 * 6 = 18 ways.\nSubtotal Case 2 = 24 + 18 + 18 = 60.\nGrand Total = 48 + 60 = 108.\nCorrect Option is C."
    },
    hi: {
      statement: "अंकों 0, 1, 2, 3, 4, और 5 का बिना दोहराव के प्रयोग करके 5 अंकों की ऐसी कितनी संख्याएं बनाई जा सकती हैं जो 6 से विभाज्य हों?",
      options: {
        A: "72",
        B: "96",
        C: "108",
        D: "144"
      },
      explanation: "रणनीतिक सलाह: इस प्रश्न में अनेक शर्तें और स्थितियां (Cases) हैं। परीक्षा में यह 3-4 मिनट नष्ट करता है, अतः इसे छोड़ना समझदारी थी।\nयोग = 15. 6 से विभाज्यता के लिए 3 और 2 दोनों से विभाज्य होना चाहिए।\nछोड़ा गया अंक 3 का गुणज (0 या 3) होगा।\nस्थिति 1: जब 0 छोड़ा जाए -> 48 संख्याएँ।\nस्थिति 2: जब 3 छोड़ा जाए -> 60 संख्याएँ।\nकुल संख्याएँ = 48 + 60 = 108."
    },
    correctAnswer: "C",
    attemptRate: 36,
    optionDistribution: { A: 24, B: 30, C: 32, D: 14 },
    recommendedTimeSec: 120
  },
  {
    id: 6,
    chapter: "Logical Reasoning",
    chapterHi: "तार्किक तर्कशक्ति",
    category: "attempted", // Should Be Attempted
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate",
    en: {
      statement: "Five friends P, Q, R, S, and T sit around a circular table facing the centre.\n- P sits second to the right of R.\n- Q is not an immediate neighbour of R.\n- S is an immediate neighbour of P.\nWho sits immediately to the left of T?",
      options: {
        A: "P",
        B: "Q",
        C: "R",
        D: "S"
      },
      explanation: "Placing 5 positions around the circle clockwise: 1, 2, 3, 4, 5.\nLet R be at position 1. P sits second to the right of R => P is at position 3.\nS is an immediate neighbour of P => S is at either position 2 or 4.\nQ is not an immediate neighbour of R => Q cannot be at pos 2 or 5. Thus Q must be at position 4.\nSince Q is at 4, S must be at position 2.\nThe remaining position 5 must be filled by T.\nArrangement clockwise: R (1), S (2), P (3), Q (4), T (5).\nFacing centre, immediately to the left of T is position 1, which is R. Correct answer is R."
    },
    hi: {
      statement: "पाँच मित्र P, Q, R, S, और T केंद्र की ओर मुख करके एक गोलाकार मेज के चारों ओर बैठे हैं।\n- P, R के दाईं ओर दूसरे स्थान पर बैठा है।\n- Q, R का निकटतम पड़ोसी नहीं है।\n- S, P का निकटतम पड़ोसी है।\nT के ठीक बाईं ओर कौन बैठा है?",
      options: {
        A: "P",
        B: "Q",
        C: "R",
        D: "S"
      },
      explanation: "5 स्थानों को दक्षिणावर्त क्रम में रखें: 1, 2, 3, 4, 5.\nR = स्थिति 1. P, R के दाएँ दूसरा => P = स्थिति 3.\nQ, R का पड़ोसी नहीं है, इसलिए Q स्थिति 4 पर होगा।\nS, P का पड़ोसी है, इसलिए S स्थिति 2 पर होगा।\nशेष स्थिति 5 पर T होगा।\nअतः व्यवस्था: R (1) -> S (2) -> P (3) -> Q (4) -> T (5).\nकेंद्र की ओर मुख होने पर T के ठीक बाईं ओर स्थिति 1 (R) बैठा है।"
    },
    correctAnswer: "C",
    attemptRate: 78,
    optionDistribution: { A: 12, B: 15, C: 64, D: 9 },
    recommendedTimeSec: 80
  },
  {
    id: 7,
    chapter: "Number System",
    chapterHi: "संख्या पद्धति",
    category: "attempted", // Should Be Attempted
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate",
    en: {
      statement: "A two-digit number is such that the product of the digits is 18. When 27 is subtracted from the number, the digits reverse their places. What is the number?",
      options: {
        A: "63",
        B: "92",
        C: "36",
        D: "29"
      },
      explanation: "Let the two-digit number be 10x + y, where x and y are single-digit integers.\nGiven: x * y = 18.\nPossible pairs for (x, y): (2, 9), (3, 6), (6, 3), (9, 2).\nNumbers can be 29, 36, 63, or 92.\nCondition 2: (10x + y) - 27 = 10y + x => 9x - 9y = 27 => x - y = 3.\nAmong our candidates:\nFor 63: x = 6, y = 3 => x - y = 3. Product = 6 * 3 = 18. (63 - 27 = 36, digits reversed).\nThus, the number is 63."
    },
    hi: {
      statement: "दो अंकों की एक संख्या ऐसी है कि उसके अंकों का गुणनफल 18 है। जब संख्या में से 27 घटाया जाता है, तो अंक परस्पर स्थान बदल लेते हैं। वह संख्या क्या है?",
      options: {
        A: "63",
        B: "92",
        C: "36",
        D: "29"
      },
      explanation: "माना संख्या = 10x + y. अंकों का गुणनफल xy = 18.\nसंभावित संख्याएं: 29, 36, 63, 92.\nविकल्प परीक्षण:\nयदि संख्या 63 है: 6 × 3 = 18.\n63 - 27 = 36 (अंक पलट गए)।\nअतः सही संख्या 63 है।"
    },
    correctAnswer: "A",
    attemptRate: 86,
    optionDistribution: { A: 78, B: 10, C: 8, D: 4 },
    recommendedTimeSec: 50
  },
  {
    id: 8,
    chapter: "Syllogism",
    chapterHi: "न्यायवाक्य (कथन एवं निष्कर्ष)",
    category: "not_wrong", // Should Not Have Been Wrong
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy",
    en: {
      statement: "Consider the following statements and conclusions:\nStatements:\n1. All rivers are water bodies.\n2. All water bodies are finite.\nConclusions:\nI. All rivers are finite.\nII. Some finite things are rivers.\nWhich of the conclusions logically follow?",
      options: {
        A: "Only conclusion I follows",
        B: "Only conclusion II follows",
        C: "Both conclusion I and II follow",
        D: "Neither conclusion follows"
      },
      explanation: "Using Venn Diagrams / Syllogistic deduction:\nRivers ⊂ Water Bodies ⊂ Finite.\nConclusion I: Since Rivers is completely contained within Finite, 'All rivers are finite' is valid.\nConclusion II: Since Rivers exist within Finite, 'Some finite things are rivers' is also valid.\nTherefore, both conclusion I and conclusion II follow."
    },
    hi: {
      statement: "निम्नलिखित कथनों और निष्कर्षों पर विचार कीजिए:\nकथन:\n1. सभी नदियाँ जल निकाय हैं।\n2. सभी जल निकाय सीमित हैं।\nनिष्कर्ष:\nI. सभी नदियाँ सीमित हैं।\nII. कुछ सीमित वस्तुएं नदियाँ हैं।\nकौन-सा निष्कर्ष तार्किक रूप से निकलता है?",
      options: {
        A: "केवल निष्कर्ष I निकलता है",
        B: "केवल निष्कर्ष II निकलता है",
        C: "निष्कर्ष I और II दोनों निकलते हैं",
        D: "न तो निष्कर्ष I और न ही II निकलता है"
      },
      explanation: "कथनों का वेन आरेख:\nनदियाँ ⊂ जल निकाय ⊂ सीमित।\nनिष्कर्ष I: सभी नदियाँ सीमित क्षेत्र के अंतर्गत आती हैं -> सत्य।\nनिष्कर्ष II: सीमित क्षेत्र का कुछ भाग नदियों द्वारा घिरा है -> सत्य।\nअतः दोनों निष्कर्ष I और II निकलते हैं।"
    },
    correctAnswer: "C",
    attemptRate: 92,
    optionDistribution: { A: 11, B: 4, C: 82, D: 3 },
    recommendedTimeSec: 40
  },
  {
    id: 9,
    chapter: "Speed, Time & Distance",
    chapterHi: "चाल, समय और दूरी",
    category: "attempted", // Should Be Attempted
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate",
    en: {
      statement: "Two trains of lengths 140 m and 160 m run on parallel tracks. When running in the same direction, the faster train passes the slower one in 30 seconds. When running in opposite directions, they pass each other in 6 seconds. What is the speed of the faster train?",
      options: {
        A: "90 km/h",
        B: "108 km/h",
        C: "120 km/h",
        D: "126 km/h"
      },
      explanation: "Total distance to cross in both cases = 140 + 160 = 300 meters.\nLet speeds in m/s be u (faster) and v (slower).\nCase 1 (Same direction, relative speed = u - v):\n(u - v) * 30 = 300 => u - v = 10 m/s.\nCase 2 (Opposite direction, relative speed = u + v):\n(u + v) * 6 = 300 => u + v = 50 m/s.\nAdding both equations:\n2u = 60 => u = 30 m/s.\nConverting to km/h: 30 * (18 / 5) = 108 km/h."
    },
    hi: {
      statement: "140 मीटर और 160 मीटर लंबाई वाली दो ट्रेनें समानांतर पटरियों पर चलती हैं। एक ही दिशा में चलने पर तेज गति वाली ट्रेन धीमी ट्रेन को 30 सेकंड में पार करती है। विपरीत दिशाओं में चलने पर वे एक-दूसरे को 6 सेकंड में पार करती हैं। तेज गति वाली ट्रेन की गति क्या है?",
      options: {
        A: "90 किमी/घंटा",
        B: "108 किमी/घंटा",
        C: "120 किमी/घंटा",
        D: "126 किमी/घंटा"
      },
      explanation: "दोनों स्थितियों में कुल दूरी = 140 + 160 = 300 मीटर।\nसमान दिशा में सापेक्ष चाल = u - v = 300 / 30 = 10 मी/से।\nविपरीत दिशा में सापेक्ष चाल = u + v = 300 / 6 = 50 मी/से।\nजोड़ने पर: 2u = 60 => u = 30 मी/से।\nकिमी/घंटा में: 30 × (18/5) = 108 किमी/घंटा।"
    },
    correctAnswer: "B",
    attemptRate: 68,
    optionDistribution: { A: 16, B: 61, C: 17, D: 6 },
    recommendedTimeSec: 85
  },
  {
    id: 10,
    chapter: "Number System",
    chapterHi: "संख्या पद्धति",
    category: "avoided", // Questions Which Should Have Been Avoided (Heavy conditions, trap)
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "High (Trap/Ambiguous)",
    en: {
      statement: "Consider four-digit numbers formed by digits 1, 2, 3, 4, 5, 6, 7 without repetition. How many such numbers have the property that the thousands digit is greater than the hundreds digit, which in turn is greater than the tens digit, which is greater than the units digit?",
      options: {
        A: "28",
        B: "35",
        C: "70",
        D: "120"
      },
      explanation: "Strategic Note: Many students try to write permutations or count branches, wasting 3-4 minutes.\nMathematical Insight: Let the 4 chosen digits from {1, 2, 3, 4, 5, 6, 7} be a, b, c, d.\nFor any selection of 4 distinct digits, there is EXACTLY ONE strictly decreasing order:\nThousands > Hundreds > Tens > Units.\nHence, the problem is equivalent simply to selecting 4 digits out of 7 digits without regard to order!\nNumber of ways = 7C4 = 7! / (4! * 3!) = (7 * 6 * 5) / (3 * 2 * 1) = 35.\nHowever, in exam anxiety, 65%+ candidates confuse this with permutations (7P4 = 840) or partial arrangements, making it a classic time-sink trap."
    },
    hi: {
      statement: "अंकों 1, 2, 3, 4, 5, 6, 7 से बिना दोहराव के बनने वाली चार अंकों की ऐसी कितनी संख्याएं हैं जिनमें हजार का अंक, सैकड़े के अंक से बड़ा हो, सैकड़े का अंक दहाई के अंक से बड़ा हो, और दहाई का अंक इकाई के अंक से बड़ा हो?",
      options: {
        A: "28",
        B: "35",
        C: "70",
        D: "120"
      },
      explanation: "रणनीतिक सलाह: इसे क्रमचय (Permutation) समझने की भूल में अभ्यर्थी बहुत समय गंवा देते हैं।\n7 अंकों में से कोई भी 4 अंक चुनने पर उन्हें घटते क्रम में केवल 1 ही प्रकार से व्यवस्थित किया जा सकता है।\nअतः अभीष्ट संख्याएं = 7C4 = 35.\nपरीक्षा के दबाव में इसे हल करना अत्यधिक जोखिम भरा सिद्ध होता है।"
    },
    correctAnswer: "B",
    attemptRate: 41,
    optionDistribution: { A: 22, B: 38, C: 26, D: 14 },
    recommendedTimeSec: 110
  }
];

// 17th October 2026 Question Dataset (from Question_Seeder/17th_Oct_v2.json)
const CSAT_QUESTIONS_17OCT = [
  {
    id: 1,
    chapter: "Speed, Time & Distance",
    chapterHi: "चाल, समय और दूरी / सापेक्ष चाल",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Moderate (L2)",
    en: {
      statement: "Two trains of lengths 150 m and 250 m run on parallel tracks. When running in the same direction, the faster train completely passes the slower train in 80 seconds. When running in opposite directions, they pass each other completely in 16 seconds. What is the speed of the faster train in km/h?\n(a) 45 km/h\n(b) 54 km/h\n(c) 60 km/h\n(d) 72 km/h",
      options: {
        A: "45 km/h",
        B: "54 km/h",
        C: "60 km/h",
        D: "72 km/h"
      },
      explanation: "1. Total distance to clear each other = sum of lengths = 150 + 250 = 400 m.\n2. Same direction relative speed: (v₁ - v₂) = 400 / 80 = 5 m/s.\n3. Opposite directions relative speed: (v₁ + v₂) = 400 / 16 = 25 m/s.\n4. Adding equations: 2v₁ = 30 ⇒ v₁ = 15 m/s.\n5. Convert to km/h: 15 × (18 / 5) = 54 km/h."
    },
    hi: {
      statement: "150 मीटर और 250 मीटर लंबाई वाली दो ट्रेनें समानांतर पटरियों पर चलती हैं। एक ही दिशा में चलने पर, तेज गति वाली ट्रेन धीमी ट्रेन को 80 सेकंड में पूरी तरह पार कर लेती है। विपरीत दिशाओं में चलने पर, वे एक-दूसरे को 16 सेकंड में पार कर लेती हैं। तेज गति वाली ट्रेन की गति (किमी/घंटा में) क्या है?",
      options: {
        A: "45 किमी/घंटा",
        B: "54 किमी/घंटा",
        C: "60 किमी/घंटा",
        D: "72 किमी/घंटा"
      },
      explanation: "कुल दूरी = 150 + 250 = 400 मीटर।\nसमान दिशा में सापेक्ष गति (v₁ - v₂) = 400/80 = 5 मी/से।\nविपरीत दिशा में सापेक्ष गति (v₁ + v₂) = 400/16 = 25 मी/से।\nजोड़ने पर: 2v₁ = 30 ⇒ v₁ = 15 मी/से।\nकिमी/घंटा में: 15 × (18/5) = 54 किमी/घंटा।"
    },
    correctAnswer: "B",
    attemptRate: 84,
    optionDistribution: { A: 8, B: 74, C: 12, D: 6 },
    recommendedTimeSec: 60,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2022 Q21 & CSAT 2024 Q62 (Relative Speed Crossings)",
      trapAlert: "Converting to km/h prematurely with decimal approximations or subtracting train lengths.",
      cognitiveLoadScore: 2,
      riskIndex: "Low"
    }
  },
  {
    id: 2,
    chapter: "Blood Relations & Data Sufficiency",
    chapterHi: "रक्त संबंध एवं डेटा पर्याप्तता",
    category: "attempted",
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate (L3)",
    en: {
      statement: "Consider the following Question and two Statements:\nQuestion: How is P related to T?\nStatement-1: P is the brother of Q, and Q is the mother of T.\nStatement-2: T is the son of Q, and Q is the sibling of P.\nWhich one of the following is correct in respect of the Question and the Statements?\n(a) Statement-1 alone is sufficient to answer the Question, but Statement-2 alone is not sufficient\n(b) Statement-2 alone is sufficient to answer the Question, but Statement-1 alone is not sufficient\n(c) Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient\n(d) Statement-1 and Statement-2 together are not sufficient to answer the Question",
      options: {
        A: "Statement-1 alone is sufficient, but Statement-2 alone is not sufficient",
        B: "Statement-2 alone is sufficient, but Statement-1 alone is not sufficient",
        C: "Both Statement-1 and Statement-2 together are sufficient, but neither alone is sufficient",
        D: "Statement-1 and Statement-2 together are not sufficient"
      },
      explanation: "1. Statement-1: P is brother of Q (P is male) and Q is mother of T. P is maternal uncle of T regardless of T's gender. Sufficient.\n2. Statement-2: P's gender is unknown (sibling of Q). P could be maternal uncle or aunt. Insufficient.\nHence, Statement-1 alone is sufficient."
    },
    hi: {
      statement: "निम्नलिखित प्रश्न और दो कथनों पर विचार कीजिए:\nप्रश्न: P का T से क्या संबंध है?\nकथन-1: P, Q का भाई है, और Q, T की माता है।\nकथन-2: T, Q का पुत्र है, और Q, P का सहोदर है।\nउपर्युक्त प्रश्न और कथनों के संदर्भ में निम्नलिखित में से कौन-सा एक सही है?",
      options: {
        A: "कथन-1 अकेले पर्याप्त है, किन्तु कथन-2 अकेले पर्याप्त नहीं है",
        B: "कथन-2 अकेले पर्याप्त है, किन्तु कथन-1 अकेले पर्याप्त नहीं है",
        C: "कथन-1 और कथन-2 दोनों मिलकर पर्याप्त हैं, किन्तु कोई भी अकेला पर्याप्त नहीं है",
        D: "कथन-1 और कथन-2 दोनों मिलकर भी पर्याप्त नहीं हैं"
      },
      explanation: "कथन-1 से: P, Q का भाई (पुरुष) है और Q, T की माता है। अतः P निश्चित रूप से T का मामा है। (पर्याप्त)\nकथन-2 से: P का लिंग स्पष्ट नहीं है (मामा या मौसी)। (अपर्याप्त)\nअतः कथन-1 अकेले पर्याप्त है।"
    },
    correctAnswer: "A",
    attemptRate: 76,
    optionDistribution: { A: 62, B: 10, C: 16, D: 12 },
    recommendedTimeSec: 55,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2021 Q75 & CSAT 2023 Q38 (Kinship Data Sufficiency)",
      trapAlert: "Confusing 'How is P related to T' with 'How is T related to P'.",
      cognitiveLoadScore: 3,
      riskIndex: "Medium"
    }
  },
  {
    id: 3,
    chapter: "Linear Diophantine Equations",
    chapterHi: "डायोफैंटाइन समीकरण एवं चर मान",
    category: "attempted",
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate-High (L4)",
    en: {
      statement: "A merchant buys three varieties of pens costing ₹ 5, ₹ 10 and ₹ 25 each. He spends a total of exactly ₹ 300 and buys exactly 40 pens. If he buys at least one pen of each variety, what is the maximum possible number of ₹ 5 pens he could have purchased?\n(a) 26\n(b) 29\n(c) 32\n(d) 35",
      options: {
        A: "26",
        B: "29",
        C: "32",
        D: "35"
      },
      explanation: "1. Let counts be x, y, z for ₹ 5, ₹ 10, ₹ 25 pens.\n2. x + y + z = 40 and 5x + 10y + 25z = 300 ⇒ x + 2y + 5z = 60.\n3. Subtracting: y + 4z = 20 ⇒ y + z = 20 - 3z.\n4. To maximize x = 40 - (y + z), we must maximize z!\n5. With y ≥ 1: 20 - 4z ≥ 1 ⇒ 4z ≤ 19 ⇒ max integer z = 4.\n6. For z = 4: y = 20 - 16 = 4 ⇒ x = 40 - 8 = 32 pens."
    },
    hi: {
      statement: "एक व्यापारी तीन प्रकार के पेन खरीदता है जिनकी कीमतें क्रमशः ₹ 5, ₹ 10 और ₹ 25 हैं। वह कुल ₹ 300 खर्च करता है और कुल 40 पेन खरीदता है। यदि वह प्रत्येक प्रकार का कम से कम एक पेन खरीदता है, तो उसके द्वारा खरीदे जा सकने वाले ₹ 5 के पेनों की अधिकतम संभावित संख्या क्या है?",
      options: {
        A: "26",
        B: "29",
        C: "32",
        D: "35"
      },
      explanation: "x + y + z = 40 और 5x + 10y + 25z = 300 ⇒ x + 2y + 5z = 60।\nघटाने पर: y + 4z = 20 ⇒ y + z = 20 - 3z।\nx को अधिकतम करने के लिए z को अधिकतम करना होगा।\nचूंकि y ≥ 1, अधिकतम पूर्णांक z = 4 ⇒ y = 4 ⇒ x = 40 - 8 = 32।"
    },
    correctAnswer: "C",
    attemptRate: 58,
    optionDistribution: { A: 18, B: 24, C: 48, D: 10 },
    recommendedTimeSec: 80,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q60 & CSAT 2020 Q44 (Constrained Item Purchasing)",
      trapAlert: "Setting z = 1 to minimize expensive pen, missing that increasing z decreases total pens y+z much faster.",
      cognitiveLoadScore: 4,
      riskIndex: "High"
    }
  },
  {
    id: 4,
    chapter: "Number System - Divisibility",
    chapterHi: "संख्या पद्धति - विभाज्यता",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy (L1)",
    en: {
      statement: "If the 6-digit number 58x43y is completely divisible by 72, where x and y are single-digit natural numbers, what is the value of (2x - y)?\n(a) 6\n(b) 7\n(c) 8\n(d) 9",
      options: {
        A: "6",
        B: "7",
        C: "8",
        D: "9"
      },
      explanation: "1. 72 = 8 × 9 (coprime factors).\n2. Divisibility by 8: last 3 digits '43y' divisible by 8 ⇒ 432 / 8 = 54 ⇒ y = 2.\n3. Divisibility by 9: sum of digits = 5 + 8 + x + 4 + 3 + 2 = 22 + x.\n   Must be multiple of 9 ⇒ 22 + x = 27 ⇒ x = 5.\n4. (2x - y) = 2(5) - 2 = 10 - 2 = 8."
    },
    hi: {
      statement: "यदि 6-अंकों की संख्या 58x43y, 72 से पूर्णतः विभाज्य है, जहां x और y एकल-अंक प्राकृत संख्याएं हैं, तो (2x - y) का मान क्या है?",
      options: {
        A: "6",
        B: "7",
        C: "8",
        D: "9"
      },
      explanation: "72 = 8 × 9।\n8 से विभाज्यता के लिए 43y विभाज्य होना चाहिए ⇒ 432 विभाज्य है, अतः y = 2।\n9 से विभाज्यता के लिए अंकों का योग 22 + x = 27 ⇒ x = 5।\n(2x - y) = 2(5) - 2 = 8।"
    },
    correctAnswer: "C",
    attemptRate: 91,
    optionDistribution: { A: 5, B: 7, C: 82, D: 6 },
    recommendedTimeSec: 45,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2021 Q14 & CSAT 2024 Q18 (Composite Divisibility)",
      trapAlert: "Forgetting that y must be uniquely checked in the three-digit range 430-439.",
      cognitiveLoadScore: 1,
      riskIndex: "Low"
    }
  },
  {
    id: 5,
    chapter: "Trailing Zeroes & Factorials",
    chapterHi: "अनुगामी शून्य एवं गुणनखंड",
    category: "avoided",
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "High (L5)",
    en: {
      statement: "How many trailing zeroes are at the end of the product P = 1¹ × 2² × 3³ × 4⁴ × ... × 50⁵⁰?\n(a) 275\n(b) 325\n(c) 350\n(d) 375",
      options: {
        A: "275",
        B: "325",
        C: "350",
        D: "375"
      },
      explanation: "1. Trailing zeroes = highest power of 5 dividing P.\n2. Multiples of 5: 5⁵, 10¹⁰, 15¹⁵, ... 50⁵⁰ contribute 5 + 10 + 15 + ... + 50 = 5 × (1 + 2 + ... + 10) = 5 × 55 = 275.\n3. Powers of 5² (25): 25²⁵ and 50⁵⁰ contribute an additional 25 + 50 = 75 factors of 5.\n4. Total trailing zeroes = 275 + 75 = 350."
    },
    hi: {
      statement: "गुणनफल P = 1¹ × 2² × 3³ × 4⁴ × ... × 50⁵⁰ के अंत में कितने अनुगामी शून्य होंगे?",
      options: {
        A: "275",
        B: "325",
        C: "350",
        D: "375"
      },
      explanation: "शून्यों की संख्या = 5 की घात।\n5 के गुणज: 5 + 10 + ... + 50 = 5 × 55 = 275।\n25²⁵ और 50⁵⁰ से अतिरिक्त 5 की घात = 25 + 50 = 75।\nकुल शून्य = 275 + 75 = 350।"
    },
    correctAnswer: "C",
    attemptRate: 42,
    optionDistribution: { A: 54, B: 10, C: 31, D: 5 },
    recommendedTimeSec: 100,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2020 Q70 & CSAT 2023 Q15 (Prime Factor Exponents)",
      trapAlert: "Forgetting the second power of 5 in 25²⁵ and 50⁵⁰ leading directly to distractor (a) 275.",
      cognitiveLoadScore: 5,
      riskIndex: "Extreme"
    }
  },
  {
    id: 6,
    chapter: "Percentages - Price & Consumption",
    chapterHi: "प्रतिशत - मूल्य एवं खपत",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Moderate (L2)",
    en: {
      statement: "A reduction of 20% in the price of sugar enables a purchaser to obtain 5 kg more for ₹ 600. What was the original price of sugar per kg?\n(a) ₹ 24 per kg\n(b) ₹ 25 per kg\n(c) ₹ 30 per kg\n(d) ₹ 36 per kg",
      options: {
        A: "₹ 24 per kg",
        B: "₹ 25 per kg",
        C: "₹ 30 per kg",
        D: "₹ 36 per kg"
      },
      explanation: "1. 20% price reduction on ₹ 600 gives a saving of: 0.20 × 600 = ₹ 120.\n2. This ₹ 120 buys 5 kg extra at the new price ⇒ New price = 120 / 5 = ₹ 24/kg.\n3. Original price = 24 / 0.80 = ₹ 30 per kg."
    },
    hi: {
      statement: "चीनी के मूल्य में 20% की कमी होने पर एक खरीदार ₹ 600 में 5 किग्रा अधिक चीनी खरीद सकता है। चीनी का मूल मूल्य (प्रति किग्रा) क्या था?",
      options: {
        A: "₹ 24 प्रति किग्रा",
        B: "₹ 25 प्रति किग्रा",
        C: "₹ 30 प्रति किग्रा",
        D: "₹ 36 प्रति किग्रा"
      },
      explanation: "20% की बचत = ₹ 600 का 20% = ₹ 120।\nयह ₹ 120 नई दर पर 5 किग्रा खरीदता है ⇒ नई दर = 120/5 = ₹ 24/किग्रा।\nमूल दर = 24 / 0.8 = ₹ 30 प्रति किग्रा।"
    },
    correctAnswer: "C",
    attemptRate: 88,
    optionDistribution: { A: 32, B: 6, C: 58, D: 4 },
    recommendedTimeSec: 35,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2020 Q12 & CSAT 2024 Q23 (Fixed Outlay Consumption)",
      trapAlert: "Aspirants frequently compute the reduced new price (₹ 24) instead of the original price (₹ 30).",
      cognitiveLoadScore: 2,
      riskIndex: "Low"
    }
  },
  {
    id: 7,
    chapter: "Clocks - Coincidence of Hands",
    chapterHi: "घड़ी - सुइयों का संपाती होना",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy (L1)",
    en: {
      statement: "At what time between 3 o'clock and 4 o'clock will the hour hand and the minute hand of a clock coincide?\n(a) 15 3/11 minutes past 3\n(b) 16 4/11 minutes past 3\n(c) 16 7/11 minutes past 3\n(d) 18 2/11 minutes past 3",
      options: {
        A: "15 3/11 minutes past 3",
        B: "16 4/11 minutes past 3",
        C: "16 7/11 minutes past 3",
        D: "18 2/11 minutes past 3"
      },
      explanation: "1. At 3:00, initial angle = 90°.\n2. Relative speed of minute hand over hour hand = 6° - 0.5° = 5.5°/min = 11/2 degrees/min.\n3. Time = 90 / (11/2) = 180 / 11 = 16 4/11 minutes past 3."
    },
    hi: {
      statement: "3 बजे से 4 बजे के बीच किस समय घड़ी की घंटे और मिनट की सुइयां एक साथ (संपाती) होंगी?",
      options: {
        A: "3 बजकर 15 3/11 मिनट",
        B: "3 बजकर 16 4/11 मिनट",
        C: "3 बजकर 16 7/11 मिनट",
        D: "3 बजकर 18 2/11 मिनट"
      },
      explanation: "3 बजे कोण = 90°।\nसापेक्ष गति = 5.5°/मिनट = 11/2°/मिनट।\nसमय = 90 ÷ (11/2) = 180/11 = 16 4/11 मिनट। अतः 3 बजकर 16 4/11 मिनट पर।"
    },
    correctAnswer: "B",
    attemptRate: 86,
    optionDistribution: { A: 16, B: 74, C: 7, D: 3 },
    recommendedTimeSec: 40,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2022 Q58 & CSAT 2021 Q47 (Clock Hands Coincidence)",
      trapAlert: "Choosing 3:15, failing to account for the hour hand's movement during those 15 minutes.",
      cognitiveLoadScore: 1,
      riskIndex: "Low"
    }
  },
  {
    id: 8,
    chapter: "Number System - Dual Congruence",
    chapterHi: "संख्या पद्धति - समानांतर श्रेणी एवं सर्वांगसमता",
    category: "attempted",
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate (L3)",
    en: {
      statement: "How many three-digit natural numbers are divisible by 7 but leave a remainder of 2 when divided by 5?\n(a) 24\n(b) 25\n(c) 26\n(d) 28",
      options: {
        A: "24",
        B: "25",
        C: "26",
        D: "28"
      },
      explanation: "1. x ≡ 0 (mod 7) and x ≡ 2 (mod 5).\n2. General form modulo 35: x = 35m + 7.\n3. Interval 100 ≤ 35m + 7 ≤ 999 ⇒ 93 ≤ 35m ≤ 992.\n4. Smallest m: ⌈93/35⌉ = 3 (number 112). Largest m: ⌊992/35⌋ = 28 (number 987).\n5. Total count = 28 - 3 + 1 = 26 numbers."
    },
    hi: {
      statement: "तीन अंकों की ऐसी कितनी प्राकृत संख्याएं हैं जो 7 से विभाज्य हैं किन्तु उन्हें 5 से विभाजित करने पर शेषफल 2 बचता है?",
      options: {
        A: "24",
        B: "25",
        C: "26",
        D: "28"
      },
      explanation: "संख्या x = 35m + 7 रूप में होगी।\nतीन अंकों की संख्या के लिए 100 ≤ 35m + 7 ≤ 999 ⇒ 93 ≤ 35m ≤ 992।\nm न्यूनतम = 3 (संख्या 112), m अधिकतम = 28 (संख्या 987)।\nकुल संख्याएं = 28 - 3 + 1 = 26।"
    },
    correctAnswer: "C",
    attemptRate: 67,
    optionDistribution: { A: 8, B: 28, C: 58, D: 6 },
    recommendedTimeSec: 50,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2020 Q25 & CSAT 2022 Q14 (Multi-criteria AP Bounds)",
      trapAlert: "Fencepost subtraction error (28 - 3 = 25) missing the +1 endpoint count.",
      cognitiveLoadScore: 3,
      riskIndex: "Low"
    }
  },
  {
    id: 9,
    chapter: "Number System - Prime Data Sufficiency",
    chapterHi: "संख्या पद्धति - अभाज्य संख्या डेटा पर्याप्तता",
    category: "avoided",
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "Moderate-High (L4)",
    en: {
      statement: "Consider the following Question and two Statements:\nQuestion: Is the positive integer n a prime number?\nStatement-1: n leaves a remainder of 1 when divided by 6, and n < 30.\nStatement-2: n can be expressed as the sum of two prime numbers in exactly one way, and n is an odd integer.\nWhich one of the following is correct in respect of the Question and the Statements?\n(a) Statement-1 alone is sufficient to answer the Question\n(b) Statement-2 alone is sufficient to answer the Question\n(c) Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient\n(d) Statement-1 and Statement-2 together are not sufficient to answer the Question",
      options: {
        A: "Statement-1 alone is sufficient",
        B: "Statement-2 alone is sufficient",
        C: "Both Statement-1 and Statement-2 together are sufficient, but neither alone is sufficient",
        D: "Statement-1 and Statement-2 together are not sufficient"
      },
      explanation: "1. Statement-1: n ∈ {7, 13, 19, 25}. 25 is composite. Insufficient.\n2. Statement-2: n is odd ⇒ sum of 2 + p. For n = 5 (prime), 5 = 2 + 3 (unique). For n = 9 (composite), 9 = 2 + 7 (unique). Insufficient.\n3. Combining: n = 19 (prime, 2+17) and n = 25 (composite, 2+23) both satisfy both statements. Still cannot determine prime status.\nHence, together they are not sufficient."
    },
    hi: {
      statement: "निम्नलिखित प्रश्न और दो कथनों पर विचार कीजिए:\nप्रश्न: क्या धन पूर्णांक n एक अभाज्य संख्या है?\nकथन-1: n को 6 से विभाजित करने पर शेषफल 1 बचता है, और n < 30।\nकथन-2: n को दो अभाज्य संख्याओं के योग के रूप में केवल एक ही प्रकार से व्यक्त किया जा सकता है, और n एक विषम पूर्णांक है।\nउपर्युक्त प्रश्न और कथनों के संदर्भ में निम्नलिखित में से कौन-सा एक सही है?",
      options: {
        A: "कथन-1 अकेले पर्याप्त है",
        B: "कथन-2 अकेले पर्याप्त है",
        C: "कथन-1 और कथन-2 दोनों मिलकर पर्याप्त हैं, किन्तु कोई भी अकेला पर्याप्त नहीं है",
        D: "कथन-1 और कथन-2 दोनों मिलकर भी पर्याप्त नहीं हैं"
      },
      explanation: "कथन-1 से n ∈ {7, 13, 19, 25} (25 भाज्य है)।\nकथन-2 से n = 2 + p। n = 19 (अभाज्य) और n = 25 (भाज्य, 2 + 23) दोनों दोनों शर्तों को पूरा करते हैं।\nअतः दोनों मिलकर भी पर्याप्त नहीं हैं।"
    },
    correctAnswer: "D",
    attemptRate: 51,
    optionDistribution: { A: 12, B: 14, C: 38, D: 36 },
    recommendedTimeSec: 95,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q03 & CSAT 2024 Q71 (Residue Class Non-Sufficiency)",
      trapAlert: "Assuming that because 25 is composite, the unique prime pair decomposition will exclude it.",
      cognitiveLoadScore: 4,
      riskIndex: "High"
    }
  },
  {
    id: 10,
    chapter: "Knights & Knaves - Truth-Tellers & Liars",
    chapterHi: "सत्यवादी एवं झूठे - तार्किक निष्कर्ष",
    category: "avoided",
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "High (L5)",
    en: {
      statement: "On an island, each inhabitant is either a Truth-teller (who always tells the truth) or a Liar (who always lies).\nThree inhabitants X, Y, and Z make the following statements:\n- X says: 'At least one of us is a Liar.'\n- Y says: 'X and Z are of the same type.'\n- Z says: 'Exactly two of us are Truth-tellers.'\nWhich one of the following statements is definitely correct?\n(a) X is a Liar\n(b) Y is a Truth-teller\n(c) Z is a Truth-teller\n(d) Y is a Liar",
      options: {
        A: "X is a Liar",
        B: "Y is a Truth-teller",
        C: "Z is a Truth-teller",
        D: "Y is a Liar"
      },
      explanation: "1. If X were Liar ⇒ 'None of us is Liar' ⇒ X is Truth-teller (contradiction). Hence X is Truth-teller (T).\n2. Since X is T, at least one inhabitant is indeed a Liar.\n3. If Y were Truth-teller, then Z is also T (since X is T). That makes all 3 Truth-tellers, contradicting step 2. Hence Y is a Liar (L).\n4. Since Y is a Liar, X and Z are different ⇒ Z is Liar (L).\nConclusion: X=T, Y=L, Z=L. Therefore, 'Y is a Liar' is definitely correct."
    },
    hi: {
      statement: "एक द्वीप पर प्रत्येक निवासी या तो सत्यवादी (सदा सत्य बोलने वाला) है या झूठा (सदा झूठ बोलने वाला)। तीन निवासी X, Y और Z निम्नलिखित कथन कहते हैं:\n- X कहता है: 'हममें से कम से कम एक झूठा है।'\n- Y कहता है: 'X और Z एक ही प्रकार के हैं।'\n- Z कहता है: 'हममें से ठीक दो सत्यवादी हैं।'\nनिम्नलिखित कथनों में से कौन-सा एक निश्चित रूप से सही है?",
      options: {
        A: "X झूठा है",
        B: "Y सत्यवादी है",
        C: "Z सत्यवादी है",
        D: "Y झूठा है"
      },
      explanation: "यदि X झूठा होता तो विरोधाभास होता, अतः X सत्यवादी (T) है।\nयदि Y सत्यवादी होता, तो तीनों T हो जाते जो असंभव है, अतः Y झूठा (L) है।\nचूंकि Y झूठा है, Z भी झूठा (L) है।\nअतः 'Y झूठा है' निश्चित रूप से सही है।"
    },
    correctAnswer: "D",
    attemptRate: 46,
    optionDistribution: { A: 14, B: 22, C: 18, D: 46 },
    recommendedTimeSec: 90,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q67 & CSAT 2025 Q49 (Three-Inhabitant Self-Referential Deduction)",
      trapAlert: "Testing arbitrary case matrices without first resolving X's self-referential statement.",
      cognitiveLoadScore: 5,
      riskIndex: "High"
    }
  }
];

// Set default fallback questions to Today (17th Oct)
const CSAT_QUESTIONS = CSAT_QUESTIONS_17OCT;

function getCSATQuestions(dateStr = "2026-10-17") {
  if (dateStr === "2026-10-16") return CSAT_QUESTIONS_16OCT;
  if (dateStr === "2026-10-17") return CSAT_QUESTIONS_17OCT;
  return CSAT_QUESTIONS_17OCT;
}

// October 2026 Past Test History Data (Oct 1 to Oct 17)
// Accuracy randomized strictly within 70% to 90%
const OCTOBER_HISTORY_DATA = [
  { dayNum: 17, dateStr: "17 Oct", dayName: "Saturday", score: "-- / 25", accuracy: "--", questionsAttempted: 0, correct: 0, incorrect: 0, isToday: true, isCompleted: false },
  { dayNum: 16, dateStr: "16 Oct", dayName: "Friday", score: "21.6 / 25", accuracy: 87, questionsAttempted: 10, correct: 8, incorrect: 1, isCompleted: true },
  { dayNum: 15, dateStr: "15 Oct", dayName: "Thursday", score: "22.5 / 25", accuracy: 88, questionsAttempted: 10, correct: 9, incorrect: 1, isCompleted: true },
  { dayNum: 14, dateStr: "14 Oct", dayName: "Wednesday", score: "20.0 / 25", accuracy: 80, questionsAttempted: 10, correct: 8, incorrect: 2 },
  { dayNum: 13, dateStr: "13 Oct", dayName: "Tuesday", score: "17.5 / 25", accuracy: 72, questionsAttempted: 9, correct: 7, incorrect: 2 },
  { dayNum: 12, dateStr: "12 Oct", dayName: "Monday", score: "22.5 / 25", accuracy: 89, questionsAttempted: 10, correct: 9, incorrect: 1 },
  { dayNum: 11, dateStr: "11 Oct", dayName: "Sunday", score: "20.0 / 25", accuracy: 82, questionsAttempted: 10, correct: 8, incorrect: 2 },
  { dayNum: 10, dateStr: "10 Oct", dayName: "Saturday", score: "18.3 / 25", accuracy: 76, questionsAttempted: 10, correct: 7, incorrect: 3 },
  { dayNum: 9, dateStr: "09 Oct", dayName: "Friday", score: "22.5 / 25", accuracy: 90, questionsAttempted: 10, correct: 9, incorrect: 1 },
  { dayNum: 8, dateStr: "08 Oct", dayName: "Thursday", score: "20.0 / 25", accuracy: 83, questionsAttempted: 10, correct: 8, incorrect: 2 },
  { dayNum: 7, dateStr: "07 Oct", dayName: "Wednesday", score: "17.5 / 25", accuracy: 74, questionsAttempted: 9, correct: 7, incorrect: 2 },
  { dayNum: 6, dateStr: "06 Oct", dayName: "Tuesday", score: "21.6 / 25", accuracy: 87, questionsAttempted: 10, correct: 8, incorrect: 1 },
  { dayNum: 5, dateStr: "05 Oct", dayName: "Monday", score: "19.1 / 25", accuracy: 79, questionsAttempted: 10, correct: 7, incorrect: 2 },
  { dayNum: 4, dateStr: "04 Oct", dayName: "Sunday", score: "20.8 / 25", accuracy: 84, questionsAttempted: 10, correct: 8, incorrect: 2 },
  { dayNum: 3, dateStr: "03 Oct", dayName: "Saturday", score: "18.3 / 25", accuracy: 75, questionsAttempted: 10, correct: 7, incorrect: 3 },
  { dayNum: 2, dateStr: "02 Oct", dayName: "Friday", score: "22.5 / 25", accuracy: 90, questionsAttempted: 10, correct: 9, incorrect: 1 },
  { dayNum: 1, dateStr: "01 Oct", dayName: "Thursday", score: "17.5 / 25", accuracy: 71, questionsAttempted: 9, correct: 7, incorrect: 2 }
];

// Helper to save/load active quiz attempt
const CSAT_STORAGE_KEY = "csat_daily_test_state";
const CSAT_RESULT_KEY = "csat_daily_test_result";
const CSAT_LANG_KEY = "csat_selected_language";

