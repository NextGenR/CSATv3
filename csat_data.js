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

// ============================================================================
// 18TH OCTOBER 2026 UPSC CSAT QUESTIONS (Bilingual English + Hindi)
// Source: Question_Seeder/18th_oct.json
// ============================================================================
const CSAT_QUESTIONS_18OCT = [
  {
    id: 1,
    chapter: "Prime Algebraic Diophantine Equation",
    chapterHi: "अभाज्य बीजीय डायोफैंटाइन समीकरण",
    category: "attempted",
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate-High (L4)",
    en: {
      statement: "If p and q are distinct prime numbers such that p² - 2q² = 1, what is the value of (p + q)?\n(a) 5\n(b) 7\n(c) 8\n(d) 11",
      options: {
        A: "5",
        B: "7",
        C: "8",
        D: "11"
      },
      explanation: "1. The given equation is p² - 2q² = 1, where p and q are distinct prime numbers.\n2. Rearrange: p² - 1 = 2q² ⇒ (p - 1)(p + 1) = 2q².\n3. Parity analysis: If p = 2 ⇒ 4 - 2q² = 1 ⇒ 2q² = 3 (no integer prime solution). Thus p must be an odd prime.\n4. Modulo 3 analysis: Every prime p > 3 satisfies p² ≡ 1 (mod 3), which implies 3 | (p² - 1) = 2q² ⇒ q = 3. Testing q = 3 gives p² = 19 (not a square).\n5. Hence p cannot be > 3. Test prime p = 3: 3² - 2q² = 1 ⇒ 2q² = 8 ⇒ q² = 4 ⇒ q = 2. Both 3 and 2 are primes!\n6. Compute (p + q) = 3 + 2 = 5."
    },
    hi: {
      statement: "यदि p और q दो भिन्न अभाज्य संख्याएँ इस प्रकार हैं कि p² - 2q² = 1, तो (p + q) का मान क्या है?\n(a) 5\n(b) 7\n(c) 8\n(d) 11",
      options: {
        A: "5",
        B: "7",
        C: "8",
        D: "11"
      },
      explanation: "समीकरण: p² - 1 = 2q² ⇒ (p - 1)(p + 1) = 2q²।\nयदि p = 3 रखें, तो 3² - 2q² = 1 ⇒ 9 - 1 = 2q² ⇒ 2q² = 8 ⇒ q² = 4 ⇒ q = 2।\nयहाँ p = 3 और q = 2 दोनों भिन्न अभाज्य संख्याएँ हैं।\nअतः (p + q) = 3 + 2 = 5।"
    },
    correctAnswer: "A",
    attemptRate: 64,
    optionDistribution: { A: 58, B: 24, C: 12, D: 6 },
    recommendedTimeSec: 65,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q28 & CSAT 2024 Q44 (Quadratic residue restrictions on prime solutions)",
      trapAlert: "A candidate testing q = 3 first gets p = √19 and might conclude 'No solution', missing the even prime solution q = 2, p = 3.",
      cognitiveLoadScore: 4,
      riskIndex: "Medium"
    }
  },
  {
    id: 2,
    chapter: "Linear Seating Arrangement Data Sufficiency",
    chapterHi: "पंक्तिबद्ध बैठक व्यवस्था एवं डेटा पर्याप्तता",
    category: "avoided",
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "Moderate (L3)",
    en: {
      statement: "Consider the following Question and two Statements:\nQuestion: In a row of five persons facing North, who sits in the middle position?\nStatement-1: P sits immediately to the left of Q, and R sits immediately to the right of Q.\nStatement-2: S sits at one of the extreme ends, and T sits immediately to the right of R.\nWhich one of the following is correct in respect of the Question and the Statements?\n(a) Statement-1 alone is sufficient to answer the Question\n(b) Statement-2 alone is sufficient to answer the Question\n(c) Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient\n(d) Both Statement-1 and Statement-2 together are not sufficient to answer the Question",
      options: {
        A: "Statement-1 alone is sufficient to answer the Question",
        B: "Statement-2 alone is sufficient to answer the Question",
        C: "Both Statement-1 and Statement-2 together are sufficient to answer the Question, but neither Statement alone is sufficient",
        D: "Both Statement-1 and Statement-2 together are not sufficient to answer the Question"
      },
      explanation: "1. Statement-1 gives block [P, Q, R]. Can be at (1,2,3), (2,3,4), or (3,4,5). Insufficient.\n2. Statement-2 gives block [R, T] and S at an extreme end. Insufficient.\n3. Combining both gives a 4-person contiguous block: [P, Q, R, T].\n4. S must occupy an extreme end:\n   - Case 1: S is at right end (pos 5) ⇒ [P, Q, R, T, S]. Middle person (pos 3) is R.\n   - Case 2: S is at left end (pos 1) ⇒ [S, P, Q, R, T]. Middle person (pos 3) is Q.\n5. Since S can be at either extreme end, the middle person could be R or Q. Hence, Statement-1 and Statement-2 together are not sufficient."
    },
    hi: {
      statement: "निम्नलिखित प्रश्न और दो कथनों पर विचार कीजिए:\nप्रश्न: उत्तर की ओर उन्मुख पाँच व्यक्तियों की एक पंक्ति में, ठीक बीच के स्थान पर कौन बैठता है?\nकथन-1: P, Q के ठीक बाईं ओर बैठता है, और R, Q के ठीक दाईं ओर बैठता है।\nकथन-2: S किसी एक छोर पर बैठता है, और T, R के ठीक दाईं ओर बैठता है।\nउपर्युक्त प्रश्न और कथनों के संदर्भ में निम्नलिखित में से कौन-सा एक सही है?",
      options: {
        A: "प्रश्न का उत्तर देने के लिए अकेले कथन-1 पर्याप्त है",
        B: "प्रश्न का उत्तर देने के लिए अकेले कथन-2 पर्याप्त है",
        C: "कथन-1 और कथन-2 दोनों मिलकर पर्याप्त हैं, किन्तु कोई भी अकेला पर्याप्त नहीं है",
        D: "कथन-1 और कथन-2 दोनों मिलकर भी प्रश्न का उत्तर देने के लिए पर्याप्त नहीं हैं"
      },
      explanation: "कथन-1 और 2 को मिलाने पर [P, Q, R, T] का 4-सदस्यीय समूह बनता है। S छोर पर बैठता है।\nस्थिति 1: S दाएँ छोर पर है ⇒ P, Q, R, T, S (मध्य में R है)।\nस्थिति 2: S बाएँ छोर पर है ⇒ S, P, Q, R, T (मध्य में Q है)।\nचूँकि दोनों स्थितियाँ संभव हैं, अतः दोनों मिलकर भी पर्याप्त नहीं हैं।"
    },
    correctAnswer: "D",
    attemptRate: 52,
    optionDistribution: { A: 8, B: 6, C: 46, D: 40 },
    recommendedTimeSec: 60,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q38 & CSAT 2024 Q71 (Unspecified extreme end ambiguity in linear queues)",
      trapAlert: "Candidates assume S must be at Position 1 or arbitrarily choose one layout without checking the reflection at Position 5, falsely selecting (c).",
      cognitiveLoadScore: 4,
      riskIndex: "High"
    }
  },
  {
    id: 3,
    chapter: "Profit & Loss - Dishonest Dealer False Weights",
    chapterHi: "लाभ और हानि - बेईमान व्यापारी एवं गलत बाट",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy-Moderate (L2)",
    en: {
      statement: "A dishonest dealer professes to sell his goods at cost price, but he uses a false weight of 920 grams instead of a 1 kg weight. What is his percentage profit?\n(a) 8%\n(b) 8 16/23 %\n(c) 8.5%\n(d) 9 1/11 %",
      options: {
        A: "8%",
        B: "8 16/23 %",
        C: "8.5%",
        D: "9 1/11 %"
      },
      explanation: "1. True weight claimed = 1000 g.\n2. Weight actually given = 920 g (Dealer's actual Cost Price base = 920 g).\n3. Profit earned = 1000 - 920 = 80 g.\n4. Profit % is calculated on Cost Price (actual weight delivered):\n   Profit % = (80 / 920) × 100% = (2 / 23) × 100% = 200 / 23 % = 8 16/23 %."
    },
    hi: {
      statement: "एक बेईमान व्यापारी अपने माल को क्रय मूल्य पर बेचने का दावा करता है, किन्तु वह 1 किग्रा के स्थान पर 920 ग्राम के गलत बाट का उपयोग करता है। उसका प्रतिशत लाभ क्या है?\n(a) 8%\n(b) 8 16/23 %\n(c) 8.5%\n(d) 9 1/11 %",
      options: {
        A: "8%",
        B: "8 16/23 %",
        C: "8.5%",
        D: "9 1/11 %"
      },
      explanation: "वास्तव में दी गई मात्रा = 920 ग्राम (लागत)।\nलाभ = 1000 - 920 = 80 ग्राम।\nलाभ % = (80 / 920) × 100 = (2 / 23) × 100 = 200 / 23 % = 8 16/23 %।"
    },
    correctAnswer: "B",
    attemptRate: 88,
    optionDistribution: { A: 16, B: 72, C: 8, D: 4 },
    recommendedTimeSec: 40,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2022 Q35 & CSAT 2024 Q52 (Weight substitution distortion on merchant margin)",
      trapAlert: "Calculating the percentage on the claimed 1000 g base (80 / 1000 = 8%) is the primary distractor trap.",
      cognitiveLoadScore: 2,
      riskIndex: "Low"
    }
  },
  {
    id: 4,
    chapter: "Quadratic Residues & Modulo 4 Invariance",
    chapterHi: "द्विघात अवशेष एवं मॉड्यूलो 4 नियम",
    category: "avoided",
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "High (L5)",
    en: {
      statement: "How many pairs of positive integers (x, y) satisfy the equation x² - y² = 2026?\n(a) 0\n(b) 1\n(c) 2\n(d) 4",
      options: {
        A: "0",
        B: "1",
        C: "2",
        D: "4"
      },
      explanation: "1. Factoring: x² - y² = (x - y)(x + y) = 2026.\n2. Note that (x + y) - (x - y) = 2y (even). Hence (x - y) and (x + y) have identical parity.\n3. If both odd, product is odd (contradicts 2026 is even).\n4. If both even, product is divisible by 4.\n5. But 2026 ÷ 4 = 506 remainder 2 (2026 ≡ 2 mod 4).\n6. The difference of two integer squares can NEVER leave remainder 2 modulo 4. Therefore, zero pairs exist."
    },
    hi: {
      statement: "समीकरण x² - y² = 2026 को संतुष्ट करने वाले धन पूर्णांकों के कितने युग्म (x, y) हैं?\n(a) 0\n(b) 1\n(c) 2\n(d) 4",
      options: {
        A: "0",
        B: "1",
        C: "2",
        D: "4"
      },
      explanation: "x² - y² = (x - y)(x + y)। दोनों गुणनखंडों की सम-विषम प्रकृति समान होती है।\nयदि दोनों सम हैं, तो गुणनफल 4 से विभाज्य होना चाहिए।\nकिन्तु 2026 ≡ 2 (mod 4) है।\nदो वर्गों का अंतर कभी भी 2 (mod 4) नहीं हो सकता। अतः 0 युग्म हैं।"
    },
    correctAnswer: "A",
    attemptRate: 48,
    optionDistribution: { A: 42, B: 30, C: 20, D: 8 },
    recommendedTimeSec: 50,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q15 & CSAT 2024 Q44 (Modulo 4 quadratic residue impossibility proofs)",
      trapAlert: "Aspirants factor 2026 = 2 × 1013 and attempt to solve x - y = 2, x + y = 1013, arriving at fractional x = 1015/2 and wasting valuable minutes.",
      cognitiveLoadScore: 5,
      riskIndex: "High"
    }
  },
  {
    id: 5,
    chapter: "Simple Interest Capital Multipliers",
    chapterHi: "साधारण ब्याज - मूलधन वृद्धि",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy (L1)",
    en: {
      statement: "A sum of money invested at simple interest doubles itself in 8 years. In how many years will it become 5 times of itself at the same rate of simple interest?\n(a) 20 years\n(b) 24 years\n(c) 32 years\n(d) 40 years",
      options: {
        A: "20 years",
        B: "24 years",
        C: "32 years",
        D: "40 years"
      },
      explanation: "1. Amount doubles ⇒ A = 2P ⇒ Simple Interest = 2P - P = 1P.\n2. Time to earn 1P interest is 8 years.\n3. To become 5 times of itself ⇒ A = 5P ⇒ Simple Interest required = 5P - P = 4P.\n4. Since Simple Interest is strictly proportional to time: Time = 4 × 8 = 32 years."
    },
    hi: {
      statement: "साधारण ब्याज पर निवेश की गई कोई धनराशि 8 वर्षों में दोगुनी हो जाती है। उसी साधारण ब्याज दर पर यह कितने वर्षों में स्वयं की 5 गुनी हो जाएगी?\n(a) 20 वर्ष\n(b) 24 वर्ष\n(c) 32 वर्ष\n(d) 40 वर्ष",
      options: {
        A: "20 वर्ष",
        B: "24 वर्ष",
        C: "32 वर्ष",
        D: "40 वर्ष"
      },
      explanation: "दोगुनी होने पर ब्याज = 2P - P = P (समय = 8 वर्ष)।\n5 गुनी होने पर आवश्यक ब्याज = 5P - P = 4P।\nसाधारण ब्याज में समय ब्याज के समानुपाती होता है: समय = 4 × 8 = 32 वर्ष।"
    },
    correctAnswer: "C",
    attemptRate: 91,
    optionDistribution: { A: 4, B: 4, C: 82, D: 10 },
    recommendedTimeSec: 30,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2022 Q17 & CSAT 2024 Q38 (Multiplication factors under simple interest linearity)",
      trapAlert: "Candidates reflexively multiply 8 by 5 to choose 40 years, forgetting that the base principal P is already present and only interest grows.",
      cognitiveLoadScore: 1,
      riskIndex: "Low"
    }
  },
  {
    id: 6,
    chapter: "Cubes & Colored Boundary Intersection",
    chapterHi: "घन एवं रंगीन फलक परिसीमा गणना",
    category: "attempted",
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate (L3)",
    en: {
      statement: "A solid cube of side 4 cm is painted red on two opposite faces, blue on two adjacent faces, and green on the remaining two faces. It is then cut into 64 small identical cubes of side 1 cm each. How many small cubes have at least one face painted red and at least one face painted blue?\n(a) 10\n(b) 12\n(c) 14\n(d) 16",
      options: {
        A: "10",
        B: "12",
        C: "14",
        D: "16"
      },
      explanation: "1. Let Top & Bottom be Red. Front & Right be Blue. Back & Left be Green.\n2. Cubes with both Red and Blue lie along the 4 edges where Red faces meet Blue faces: Top-Front, Top-Right, Bottom-Front, Bottom-Right.\n3. Middle edge cubes: On each of the 4 edges, there are (4 - 2) = 2 middle edge cubes. 4 × 2 = 8 cubes.\n4. Corner cubes: Exactly 6 of the 8 corners border both a Red face and a Blue face (only Top-Back-Left and Bottom-Back-Left have Red with Green and Green).\n5. Total cubes = 8 (edge) + 6 (corner) = 14 cubes."
    },
    hi: {
      statement: "4 सेमी भुजा वाले एक ठोस घन के दो विपरीत फलकों को लाल, दो संलग्न फलकों को नीला और शेष दो फलकों को हरे रंग से रंगा जाता है। इसके बाद इसे 1 सेमी भुजा वाले 64 छोटे समान घनों में काटा जाता है। ऐसे कितने छोटे घन हैं जिनका कम से कम एक फलक लाल और कम से कम एक फलक नीला रंगा हुआ है?\n(a) 10\n(b) 12\n(c) 14\n(d) 16",
      options: {
        A: "10",
        B: "12",
        C: "14",
        D: "16"
      },
      explanation: "लाल और नीले फलकों के बीच 4 उभयनिष्ठ किनारे बनते हैं।\nप्रत्येक किनारे पर मध्य घन = 4 - 2 = 2 ⇒ 4 × 2 = 8 घन।\n8 में से 6 कोने (शीर्ष) लाल और नीले दोनों रंगों को स्पर्श करते हैं।\nकुल घन = 8 + 6 = 14 घन।"
    },
    correctAnswer: "C",
    attemptRate: 67,
    optionDistribution: { A: 12, B: 24, C: 54, D: 10 },
    recommendedTimeSec: 75,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2019 Q72 & CSAT 2024 Q32 (Non-uniform face coloring and multi-colored boundary count)",
      trapAlert: "A common mistake is counting all 8 corners or omitting the corner cubes that also touch a Green face, falsely concluding 8 or 12 cubes.",
      cognitiveLoadScore: 4,
      riskIndex: "Medium"
    }
  },
  {
    id: 7,
    chapter: "Relative Speed - Moving Escalator Steps",
    chapterHi: "सापेक्ष गति - चलती एस्केलेटर की सीढ़ियाँ",
    category: "attempted",
    categoryTitle: "Questions Which Should Be Attempted",
    difficulty: "Moderate-High (L4)",
    en: {
      statement: "A person walks up a moving escalator (which moves upwards) and counts 30 steps to reach the top. If he walks up the same escalator at double his previous speed, he counts 40 steps to reach the top. How many visible steps does the escalator have when it is stationary?\n(a) 50\n(b) 60\n(c) 70\n(d) 80",
      options: {
        A: "50",
        B: "60",
        C: "70",
        D: "80"
      },
      explanation: "1. Let N be total stationary steps, v = walking speed, e = escalator speed.\n2. Trial 1: Time = 30 / v. Escalator covers 30(e / v) steps. N = 30 + 30(e / v).\n3. Trial 2: Speed is 2v, takes 40 steps. Time = 40 / (2v) = 20 / v. N = 40 + 20(e / v).\n4. Equating: 30 + 30(e / v) = 40 + 20(e / v) ⇒ 10(e / v) = 10 ⇒ e / v = 1.\n5. N = 30 + 30(1) = 60 steps."
    },
    hi: {
      statement: "एक व्यक्ति ऊपर की ओर चलती एक एस्केलेटर पर चढ़ते हुए शीर्ष तक पहुँचने में 30 सीढ़ियाँ गिनता है। यदि वह अपनी पूर्व गति से दोगुनी गति से उसी एस्केलेटर पर चढ़ता है, तो वह 40 सीढ़ियाँ गिनता है। स्थिर होने पर एस्केलेटर में कितनी दिखाई देने वाली सीढ़ियाँ हैं?\n(a) 50\n(b) 60\n(c) 70\n(d) 80",
      options: {
        A: "50",
        B: "60",
        C: "70",
        D: "80"
      },
      explanation: "माना कुल सीढ़ियाँ N हैं, व्यक्ति की गति v और एस्केलेटर की गति e है।\nपहली स्थिति: N = 30 + 30(e/v)\nदूसरी स्थिति: N = 40 + 20(e/v)\nसमान करने पर: 10(e/v) = 10 ⇒ e/v = 1।\nअतः N = 30 + 30(1) = 60 सीढ़ियाँ।"
    },
    correctAnswer: "B",
    attemptRate: 61,
    optionDistribution: { A: 14, B: 58, C: 18, D: 10 },
    recommendedTimeSec: 70,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2022 Q69 & CSAT 2023 Q69 (Relative speed step counting on mechanical conveyors)",
      trapAlert: "A candidate assuming the escalator took the same number of steps in both trials forgets that doubling speed cuts transit time, giving the escalator less time to assist.",
      cognitiveLoadScore: 4,
      riskIndex: "Medium"
    }
  },
  {
    id: 8,
    chapter: "Percentages - Expenditure Invariance",
    chapterHi: "प्रतिशत - व्यय अपरिवर्तित रखने हेतु उपभोग में कमी",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy-Moderate (L2)",
    en: {
      statement: "If the price of petrol increases by 20%, by what percentage should a driver reduce his petrol consumption so that his total expenditure on petrol remains unchanged?\n(a) 15%\n(b) 16 2/3 %\n(c) 20%\n(d) 25%",
      options: {
        A: "15%",
        B: "16 2/3 %",
        C: "20%",
        D: "25%"
      },
      explanation: "1. Expenditure = Price × Consumption.\n2. Price increases by 20% = +1/5 ⇒ Price multiplier = 6/5.\n3. For constant expenditure, consumption multiplier must be the reciprocal = 5/6.\n4. Reduction in consumption = 1 - 5/6 = 1/6.\n5. Percentage reduction = (1/6) × 100% = 16 2/3 % (or 16.67%)."
    },
    hi: {
      statement: "यदि पेट्रोल की कीमत में 20% की वृद्धि होती है, तो एक चालक को अपने पेट्रोल उपभोग में कितने प्रतिशत की कमी करनी चाहिए ताकि पेट्रोल पर उसका कुल व्यय अपरिवर्तित रहे?\n(a) 15%\n(b) 16 2/3 %\n(c) 20%\n(d) 25%",
      options: {
        A: "15%",
        B: "16 2/3 %",
        C: "20%",
        D: "25%"
      },
      explanation: "मूल्य 20% बढ़ा ⇒ 6/5। व्यय स्थिर रखने हेतु उपभोग 5/6 होना चाहिए।\nकमी = 1 - 5/6 = 1/6।\nप्रतिशत कमी = (1/6) × 100 = 16 2/3 %।"
    },
    correctAnswer: "B",
    attemptRate: 86,
    optionDistribution: { A: 6, B: 78, C: 12, D: 4 },
    recommendedTimeSec: 35,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2020 Q12 & CSAT 2024 Q23 (Product invariance under reciprocal fractional adjustments)",
      trapAlert: "Candidates reflexively assume that consumption must decrease by the same 20% to balance a 20% increase, forgetting that the reduction is calculated on the elevated base.",
      cognitiveLoadScore: 2,
      riskIndex: "Low"
    }
  },
  {
    id: 9,
    chapter: "Legendre Formula & Factorial Differences",
    chapterHi: "लेजेंड्रे सूत्र एवं क्रमगुणित अंतर में अभाज्य घात",
    category: "avoided",
    categoryTitle: "Questions Which Should Have Been Avoided",
    difficulty: "High (L5)",
    en: {
      statement: "What is the largest power of 7 that divides the number (100! - 95!)?\n(a) 2\n(b) 14\n(c) 16\n(d) 28",
      options: {
        A: "2",
        B: "14",
        C: "16",
        D: "28"
      },
      explanation: "1. Factor out 95!: 100! - 95! = 95! × [(100 × 99 × 98 × 97 × 96) - 1].\n2. Since 98 = 2 × 7², the product P = 100 × 99 × 98 × 97 × 96 is a multiple of 7.\n3. Therefore, (P - 1) ≡ -1 ≡ 6 (mod 7). It contains NO factor of 7.\n4. Hence the highest power of 7 dividing (100! - 95!) is strictly equal to the power of 7 dividing 95!.\n5. Using Legendre's formula: v₇(95!) = ⌊95 / 7⌋ + ⌊95 / 49⌋ = 13 + 1 = 14."
    },
    hi: {
      statement: "संख्या (100! - 95!) को विभाजित करने वाली 7 की सबसे बड़ी घात क्या है?\n(a) 2\n(b) 14\n(c) 16\n(d) 28",
      options: {
        A: "2",
        B: "14",
        C: "16",
        D: "28"
      },
      explanation: "100! - 95! = 95! × [(100 × 99 × 98 × 97 × 96) - 1]।\nचूँकि 98 = 2 × 7² है, गुणनफल 7 का गुणज है। अतः (गुणनफल - 1) में 7 का कोई गुणनखंड नहीं होगा।\nअतः अभीष्ट घात 95! में 7 की घात के बराबर है।\nलेजेंड्रे सूत्र से: ⌊95/7⌋ + ⌊95/49⌋ = 13 + 1 = 14।"
    },
    correctAnswer: "B",
    attemptRate: 44,
    optionDistribution: { A: 32, B: 38, C: 22, D: 8 },
    recommendedTimeSec: 75,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q15 & CSAT 2025 Q64 (Prime power valuations in factorial difference factorizations)",
      trapAlert: "A candidate computing v₇(100!) = 14 + 2 = 16 and v₇(95!) = 14 may subtract them to choose 2, or mistakenly conclude 16, falling for the algebraic trap.",
      cognitiveLoadScore: 5,
      riskIndex: "High"
    }
  },
  {
    id: 10,
    chapter: "Alphabetical Ordering & Invariant Positions",
    chapterHi: "वर्णमाला क्रम एवं अपरिवर्तित स्थान",
    category: "not_wrong",
    categoryTitle: "Questions Which Should Not Have Been Wrong",
    difficulty: "Easy (L1)",
    en: {
      statement: "If the letters of the word 'REPRESENTATION' are arranged in reverse alphabetical order from left to right, how many vowels will occupy the exact same position as in the original word?\n(a) None\n(b) One\n(c) Two\n(d) Three",
      options: {
        A: "None",
        B: "One",
        C: "Two",
        D: "Three"
      },
      explanation: "1. Word 'REPRESENTATION' (14 letters). Original vowel positions: 2(E), 5(E), 7(E), 10(A), 12(I), 13(O).\n2. Sorted reverse alphabetically: T, T, S, R, R, P, O, N, N, I, E, E, E, A.\n3. Positions check:\n   - Pos 2: was E, now T\n   - Pos 5: was E, now R\n   - Pos 7: was E, now O\n   - Pos 10: was A, now I\n   - Pos 12: was I, now E\n   - Pos 13: was O, now E\n4. None of the original vowels remain in the same position. Answer is None."
    },
    hi: {
      statement: "यदि शब्द 'REPRESENTATION' के अक्षरों को बाएं से दाएं विपरीत वर्णमाला क्रम (Z से A) में व्यवस्थित किया जाए, तो कितने स्वर मूल शब्द के समान स्थान पर रहेंगे?\n(a) कोई नहीं\n(b) एक\n(c) दो\n(d) तीन",
      options: {
        A: "कोई नहीं",
        B: "एक",
        C: "दो",
        D: "तीन"
      },
      explanation: "मूल शब्द में स्वर स्थान: 2(E), 5(E), 7(E), 10(A), 12(I), 13(O)।\nविपरीत वर्णमाला क्रम: T, T, S, R, R, P, O, N, N, I, E, E, E, A।\nस्थानों की तुलना करने पर: किसी भी स्थान पर वही स्वर नहीं आता।\nअतः उत्तर 'कोई नहीं' (None) है।"
    },
    correctAnswer: "A",
    attemptRate: 85,
    optionDistribution: { A: 76, B: 14, C: 6, D: 4 },
    recommendedTimeSec: 45,
    forensicMeta: {
      pyqInspiration: "Inspired by CSAT 2023 Q80 & CSAT 2025 Q12 (Position invariance under descending alphabetical sort)",
      trapAlert: "A candidate may notice 'E' appearing at positions 11, 12, 13 in the sorted order and mistakenly match with position 12, overlooking that the original letter at position 12 was 'I', not 'E'.",
      cognitiveLoadScore: 1,
      riskIndex: "Low"
    }
  }
];


// ============================================================================
// 19TH OCTOBER 2026 UPSC CSAT QUESTIONS (Bilingual English + Hindi)
// Source: Question_Seeder/19th_oct.json
// ============================================================================
const CSAT_QUESTIONS_19OCT = [
  {
    "id": 1,
    "chapter": "Data Interpretation & Data Sufficiency",
    "chapterHi": "आँकड़ा व्याख्या एवं आँकड़ा पर्याप्तता",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "L2",
    "en": {
      "statement": "In an examination, 65% of candidates passed in Mathematics, 70% passed in English, and 15% failed in both subjects. If 300 candidates passed in both subjects, what was the total number of candidates who appeared for the examination?",
      "options": {
        "A": "500",
        "B": "600",
        "C": "750",
        "D": "800"
      },
      "explanation": "Step 1: Find the percentage of candidates who passed in at least one subject:\nCandidates failing in both subjects = 15%.\nCandidates passing in at least one subject = n(M ∪ E) = 100% - 15% = 85%.\n\nStep 2: Use set theory formula to find percentage passing in both:\nn(M ∪ E) = n(M) + n(E) - n(M ∩ E)\n85% = 65% + 70% - n(M ∩ E)\n85% = 135% - n(M ∩ E)\nn(M ∩ E) = 135% - 85% = 50%.\n\nStep 3: Relate the percentage to the absolute number:\n50% of Total Candidates = 300.\nTotal Candidates = 300 / 0.50 = 600.\n\nHence, 600 candidates appeared for the examination."
    },
    "hi": {
      "statement": "In an examination, 65% of candidates passed in Mathematics, 70% passed in English, and 15% failed in both subjects. If 300 candidates passed in both subjects, what was the total number of candidates who appeared for the examination?",
      "options": {
        "A": "500",
        "B": "600",
        "C": "750",
        "D": "800"
      },
      "explanation": "Step 1: Find the percentage of candidates who passed in at least one subject:\nCandidates failing in both subjects = 15%.\nCandidates passing in at least one subject = n(M ∪ E) = 100% - 15% = 85%.\n\nStep 2: Use set theory formula to find percentage passing in both:\nn(M ∪ E) = n(M) + n(E) - n(M ∩ E)\n85% = 65% + 70% - n(M ∩ E)\n85% = 135% - n(M ∩ E)\nn(M ∩ E) = 135% - 85% = 50%.\n\nStep 3: Relate the percentage to the absolute number:\n50% of Total Candidates = 300.\nTotal Candidates = 300 / 0.50 = 600.\n\nHence, 600 candidates appeared for the examination."
    },
    "correctAnswer": "B",
    "attemptRate": 78,
    "optionDistribution": {
      "A": 8,
      "B": 78,
      "C": 7,
      "D": 7
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 2,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Low"
    }
  },
  {
    "id": 2,
    "chapter": "Ratio, Proportion, Partnership & Mixtures Alligation",
    "chapterHi": "अनुपात, समानुपात, साझेदारी एवं मिश्रण",
    "category": "attempted",
    "categoryTitle": "Questions Which Should Be Attempted",
    "difficulty": "L3",
    "en": {
      "statement": "A container is initially filled with 100 litres of pure acid. 10 litres of acid are drawn off and replaced with water. Then, 20 litres of the mixture are drawn off and replaced with water. Finally, 25 litres of the mixture are drawn off and replaced with water.\nConsider the following statements:\nStatement 1: The quantity of pure acid remaining in the container is 54 litres.\nStatement 2: The ratio of pure acid to water in the final container is 27 : 23.\nWhich of the statements given above is/are correct?\n(a) 1 only\n(b) 2 only\n(c) Both 1 and 2\n(d) Neither 1 nor 2",
      "options": {
        "A": "1 only",
        "B": "2 only",
        "C": "Both 1 and 2",
        "D": "Neither 1 nor 2"
      },
      "explanation": "Step 1: The container starts with 100 litres of pure acid. The total volume remains 100 litres after each replacement.\nStep 2: Calculate residual acid using successive multiplying factors for each withdrawal:\n- 1st operation (10 L removed from 100 L): fraction remaining = 1 - 10/100 = 9/10.\n- 2nd operation (20 L removed from 100 L): fraction remaining = 1 - 20/100 = 4/5.\n- 3rd operation (25 L removed from 100 L): fraction remaining = 1 - 25/100 = 3/4.\nStep 3: Final quantity of pure acid = 100 × (9/10) × (4/5) × (3/4).\nStep 4: Cancel terms: 100 × (9 × 4 × 3) / (10 × 5 × 4) = 100 × (108 / 200) = 54 litres.\nStep 5: Statement 1 states remaining pure acid is 54 litres. Statement 1 is CORRECT.\nStep 6: Quantity of water in the container = Total Volume - Pure Acid = 100 - 54 = 46 litres.\nStep 7: Ratio of pure acid to water = 54 : 46 = 27 : 23. Statement 2 is CORRECT.\nStep 8: Both Statement 1 and Statement 2 are correct."
    },
    "hi": {
      "statement": "A container is initially filled with 100 litres of pure acid. 10 litres of acid are drawn off and replaced with water. Then, 20 litres of the mixture are drawn off and replaced with water. Finally, 25 litres of the mixture are drawn off and replaced with water.\nConsider the following statements:\nStatement 1: The quantity of pure acid remaining in the container is 54 litres.\nStatement 2: The ratio of pure acid to water in the final container is 27 : 23.\nWhich of the statements given above is/are correct?\n(a) 1 only\n(b) 2 only\n(c) Both 1 and 2\n(d) Neither 1 nor 2",
      "options": {
        "A": "1 only",
        "B": "2 only",
        "C": "Both 1 and 2",
        "D": "Neither 1 nor 2"
      },
      "explanation": "Step 1: The container starts with 100 litres of pure acid. The total volume remains 100 litres after each replacement.\nStep 2: Calculate residual acid using successive multiplying factors for each withdrawal:\n- 1st operation (10 L removed from 100 L): fraction remaining = 1 - 10/100 = 9/10.\n- 2nd operation (20 L removed from 100 L): fraction remaining = 1 - 20/100 = 4/5.\n- 3rd operation (25 L removed from 100 L): fraction remaining = 1 - 25/100 = 3/4.\nStep 3: Final quantity of pure acid = 100 × (9/10) × (4/5) × (3/4).\nStep 4: Cancel terms: 100 × (9 × 4 × 3) / (10 × 5 × 4) = 100 × (108 / 200) = 54 litres.\nStep 5: Statement 1 states remaining pure acid is 54 litres. Statement 1 is CORRECT.\nStep 6: Quantity of water in the container = Total Volume - Pure Acid = 100 - 54 = 46 litres.\nStep 7: Ratio of pure acid to water = 54 : 46 = 27 : 23. Statement 2 is CORRECT.\nStep 8: Both Statement 1 and Statement 2 are correct."
    },
    "correctAnswer": "C",
    "attemptRate": 65,
    "optionDistribution": {
      "A": 13,
      "B": 11,
      "C": 65,
      "D": 11
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 3,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Low"
    }
  },
  {
    "id": 3,
    "chapter": "Averages, Weighted Means & Age Problems",
    "chapterHi": "औसत, भारित माध्य एवं आयु सम्बन्धी प्रश्न",
    "category": "attempted",
    "categoryTitle": "Questions Which Should Be Attempted",
    "difficulty": "L4",
    "en": {
      "statement": "A person's age is a two-digit number. When the digits of his age are reversed, the number obtained is the age of his wife. The average of their ages is 66 years, and the person is older than his wife by 18 years.\nConsider the following statements:\nStatement 1: The husband is 75 years old.\nStatement 2: The product of the two digits of the wife's age is 35.\nWhich of the statements given above is/are correct?\n(a) 1 only\n(b) 2 only\n(c) Both 1 and 2\n(d) Neither 1 nor 2",
      "options": {
        "A": "1 only",
        "B": "2 only",
        "C": "Both 1 and 2",
        "D": "Neither 1 nor 2"
      },
      "explanation": "Step 1: Let the husband's age be 10t + u and the wife's age be 10u + t, where t and u are non-zero single digits with t > u.\nStep 2: Average age = 66 years ⇒ Sum of their ages = 2 × 66 = 132 years.\nStep 3: (10t + u) + (10u + t) = 11(t + u) = 132 ⇒ t + u = 12.\nStep 4: Age difference = (10t + u) - (10u + t) = 9(t - u) = 18 ⇒ t - u = 2.\nStep 5: Solve the system: Adding gives 2t = 14 ⇒ t = 7; subtracting gives 2u = 10 ⇒ u = 5.\nStep 6: Husband's age = 75 years. Statement 1 is CORRECT.\nStep 7: Wife's age = 57 years. The digits are 5 and 7. Product = 5 × 7 = 35. Statement 2 is CORRECT.\nStep 8: Both Statement 1 and Statement 2 are correct."
    },
    "hi": {
      "statement": "A person's age is a two-digit number. When the digits of his age are reversed, the number obtained is the age of his wife. The average of their ages is 66 years, and the person is older than his wife by 18 years.\nConsider the following statements:\nStatement 1: The husband is 75 years old.\nStatement 2: The product of the two digits of the wife's age is 35.\nWhich of the statements given above is/are correct?\n(a) 1 only\n(b) 2 only\n(c) Both 1 and 2\n(d) Neither 1 nor 2",
      "options": {
        "A": "1 only",
        "B": "2 only",
        "C": "Both 1 and 2",
        "D": "Neither 1 nor 2"
      },
      "explanation": "Step 1: Let the husband's age be 10t + u and the wife's age be 10u + t, where t and u are non-zero single digits with t > u.\nStep 2: Average age = 66 years ⇒ Sum of their ages = 2 × 66 = 132 years.\nStep 3: (10t + u) + (10u + t) = 11(t + u) = 132 ⇒ t + u = 12.\nStep 4: Age difference = (10t + u) - (10u + t) = 9(t - u) = 18 ⇒ t - u = 2.\nStep 5: Solve the system: Adding gives 2t = 14 ⇒ t = 7; subtracting gives 2u = 10 ⇒ u = 5.\nStep 6: Husband's age = 75 years. Statement 1 is CORRECT.\nStep 7: Wife's age = 57 years. The digits are 5 and 7. Product = 5 × 7 = 35. Statement 2 is CORRECT.\nStep 8: Both Statement 1 and Statement 2 are correct."
    },
    "correctAnswer": "C",
    "attemptRate": 52,
    "optionDistribution": {
      "A": 16,
      "B": 16,
      "C": 52,
      "D": 16
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 4,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Medium"
    }
  },
  {
    "id": 4,
    "chapter": "Number System, Divisibility, Factors & Remainder Theorems",
    "chapterHi": "संख्या पद्धति, विभाज्यता, गुणनखंड एवं शेषफल प्रमेय",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "L1",
    "en": {
      "statement": "What is the digit in the unit place of the product of all odd prime numbers less than 100?\n(a) 0\n(b) 1\n(c) 5\n(d) 9",
      "options": {
        "A": "0",
        "B": "1",
        "C": "5",
        "D": "9"
      },
      "explanation": "1. The set of all odd prime numbers less than 100 is: {3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97}.\n2. Notice that 5 is an element of this set.\n3. The product of 5 with any odd number always yields a number with unit digit 5.\n4. Since all the numbers in the set are odd, there is no even factor (such as 2) to produce a zero at the unit place.\n5. Therefore, the unit digit of the product is 5."
    },
    "hi": {
      "statement": "What is the digit in the unit place of the product of all odd prime numbers less than 100?\n(a) 0\n(b) 1\n(c) 5\n(d) 9",
      "options": {
        "A": "0",
        "B": "1",
        "C": "5",
        "D": "9"
      },
      "explanation": "1. The set of all odd prime numbers less than 100 is: {3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97}.\n2. Notice that 5 is an element of this set.\n3. The product of 5 with any odd number always yields a number with unit digit 5.\n4. Since all the numbers in the set are odd, there is no even factor (such as 2) to produce a zero at the unit place.\n5. Therefore, the unit digit of the product is 5."
    },
    "correctAnswer": "C",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 4,
      "B": 4,
      "C": 88,
      "D": 4
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 2,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Low"
    }
  },
  {
    "id": 5,
    "chapter": "Permutations, Combinations & Probability",
    "chapterHi": "क्रमचय, संचय एवं प्रायिकता",
    "category": "avoided",
    "categoryTitle": "Questions Which Should Have Been Avoided",
    "difficulty": "L5",
    "en": {
      "statement": "A formal dinner is hosted by a married couple (Host and Hostess) for 4 other married couples (a total of 5 men and 5 women). The 10 guests are seated around a circular table of 10 seats such that men and women alternate.\nConsider the following statements:\nStatement 1: If the Host and Hostess must sit directly opposite to each other across the diameter of the table, the total number of distinct seating arrangements is 576.\nStatement 2: If the Host and Hostess can sit anywhere as long as men and women alternate, the total number of distinct seating arrangements is 2,880.\nWhich of the statements given above is/are correct?\n(a) 1 only\n(b) 2 only\n(c) Both 1 and 2\n(d) Neither 1 nor 2",
      "options": {
        "A": "1 only",
        "B": "2 only",
        "C": "Both 1 and 2",
        "D": "Neither 1 nor 2"
      },
      "explanation": "Step 1: Analyze Statement 2 (Unrestricted alternating circular seating of 5 men and 5 women):\n- To break rotational symmetry in a circular arrangement, seat one person (say the Host) in a fixed seat (1 way).\n- This designates 5 alternating seats for men and 5 alternating seats for women.\n- The remaining 4 men can be seated in the remaining 4 male seats in 4! = 24 ways.\n- The 5 women can be seated in the 5 female seats in 5! = 120 ways.\n- Total distinct circular seating arrangements = 4! × 5! = 24 × 120 = 2,880. Statement 2 is correct.\nStep 2: Analyze Statement 1 (Host and Hostess sit directly opposite each other):\n- Number the 10 seats 1 to 10 sequentially in a circle: odd seats {1, 3, 5, 7, 9} are male seats; even seats {2, 4, 6, 8, 10} are female seats.\n- Seat the Host at Seat 1 (fixing rotation, 1 way).\n- The seat directly opposite Seat 1 is Seat (1 + 5) = Seat 6, which is an even (female) seat. The Hostess must sit at Seat 6 (1 way).\n- The remaining 4 men must be seated in the remaining 4 male seats {3, 5, 7, 9} in 4! = 24 ways.\n- The remaining 4 women must be seated in the remaining 4 female seats {2, 4, 8, 10} in 4! = 24 ways.\n- Total seating arrangements = 24 × 24 = 576. Statement 1 is correct.\nStep 3: Both Statement 1 and Statement 2 are correct."
    },
    "hi": {
      "statement": "A formal dinner is hosted by a married couple (Host and Hostess) for 4 other married couples (a total of 5 men and 5 women). The 10 guests are seated around a circular table of 10 seats such that men and women alternate.\nConsider the following statements:\nStatement 1: If the Host and Hostess must sit directly opposite to each other across the diameter of the table, the total number of distinct seating arrangements is 576.\nStatement 2: If the Host and Hostess can sit anywhere as long as men and women alternate, the total number of distinct seating arrangements is 2,880.\nWhich of the statements given above is/are correct?\n(a) 1 only\n(b) 2 only\n(c) Both 1 and 2\n(d) Neither 1 nor 2",
      "options": {
        "A": "1 only",
        "B": "2 only",
        "C": "Both 1 and 2",
        "D": "Neither 1 nor 2"
      },
      "explanation": "Step 1: Analyze Statement 2 (Unrestricted alternating circular seating of 5 men and 5 women):\n- To break rotational symmetry in a circular arrangement, seat one person (say the Host) in a fixed seat (1 way).\n- This designates 5 alternating seats for men and 5 alternating seats for women.\n- The remaining 4 men can be seated in the remaining 4 male seats in 4! = 24 ways.\n- The 5 women can be seated in the 5 female seats in 5! = 120 ways.\n- Total distinct circular seating arrangements = 4! × 5! = 24 × 120 = 2,880. Statement 2 is correct.\nStep 2: Analyze Statement 1 (Host and Hostess sit directly opposite each other):\n- Number the 10 seats 1 to 10 sequentially in a circle: odd seats {1, 3, 5, 7, 9} are male seats; even seats {2, 4, 6, 8, 10} are female seats.\n- Seat the Host at Seat 1 (fixing rotation, 1 way).\n- The seat directly opposite Seat 1 is Seat (1 + 5) = Seat 6, which is an even (female) seat. The Hostess must sit at Seat 6 (1 way).\n- The remaining 4 men must be seated in the remaining 4 male seats {3, 5, 7, 9} in 4! = 24 ways.\n- The remaining 4 women must be seated in the remaining 4 female seats {2, 4, 8, 10} in 4! = 24 ways.\n- Total seating arrangements = 24 × 24 = 576. Statement 1 is correct.\nStep 3: Both Statement 1 and Statement 2 are correct."
    },
    "correctAnswer": "C",
    "attemptRate": 38,
    "optionDistribution": {
      "A": 22,
      "B": 20,
      "C": 38,
      "D": 20
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 5,
      "scratchpadDemand": "High - Iterative / Modular Case Enumeration",
      "idealTimeVsHallTime": "50s / 110s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "High"
    }
  },
  {
    "id": 6,
    "chapter": "Algebra, Linear Equations & Inequalities",
    "chapterHi": "बीजगणित, रैखिक समीकरण एवं असमिकाएं",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "L2",
    "en": {
      "statement": "How many integer values of x satisfy the inequality |2x - 5| <= 9?\n(a) 8\n(b) 9\n(c) 10\n(d) 11",
      "options": {
        "A": "8",
        "B": "9",
        "C": "10",
        "D": "11"
      },
      "explanation": "Step 1: Unfold the absolute value inequality: -9 <= 2x - 5 <= 9.\nStep 2: Add 5 across the compound inequality: -9 + 5 <= 2x <= 9 + 5 ⇒ -4 <= 2x <= 14.\nStep 3: Divide by 2: -2 <= x <= 7.\nStep 4: The integers in this interval are: -2, -1, 0, 1, 2, 3, 4, 5, 6, 7.\nStep 5: Number of integers = 7 - (-2) + 1 = 10."
    },
    "hi": {
      "statement": "How many integer values of x satisfy the inequality |2x - 5| <= 9?\n(a) 8\n(b) 9\n(c) 10\n(d) 11",
      "options": {
        "A": "8",
        "B": "9",
        "C": "10",
        "D": "11"
      },
      "explanation": "Step 1: Unfold the absolute value inequality: -9 <= 2x - 5 <= 9.\nStep 2: Add 5 across the compound inequality: -9 + 5 <= 2x <= 9 + 5 ⇒ -4 <= 2x <= 14.\nStep 3: Divide by 2: -2 <= x <= 7.\nStep 4: The integers in this interval are: -2, -1, 0, 1, 2, 3, 4, 5, 6, 7.\nStep 5: Number of integers = 7 - (-2) + 1 = 10."
    },
    "correctAnswer": "C",
    "attemptRate": 78,
    "optionDistribution": {
      "A": 8,
      "B": 7,
      "C": 78,
      "D": 7
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 2,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Low"
    }
  },
  {
    "id": 7,
    "chapter": "Syllogisms & Deductive Logic",
    "chapterHi": "न्यायवाक्य एवं निगमनात्मक तर्कशक्ति",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "L1",
    "en": {
      "statement": "Consider the following Statements and Conclusions:\n\nStatements:\n1. All ministers are politicians.\n2. No politician is illiterate.\n\nConclusions:\nI. No minister is illiterate.\nII. Some politicians are ministers.\n\nWhich of the conclusion(s) logically follow(s) from the given statements?",
      "options": {
        "A": "Only Conclusion I follows",
        "B": "Only Conclusion II follows",
        "C": "Both Conclusion I and Conclusion II follow",
        "D": "Neither Conclusion I nor Conclusion II follows"
      },
      "explanation": "Step 1: Analyze Venn representations:\nLet M = Ministers, P = Politicians, I = Illiterate people.\nStatement 1: M ⊆ P (Ministers are entirely inside Politicians).\nStatement 2: P ∩ I = ∅ (Politicians and Illiterate people are mutually disjoint sets).\n\nStep 2: Evaluate Conclusion I ('No minister is illiterate'):\nSince M is inside P, and P has zero overlap with I, M can have zero overlap with I.\nM ∩ I = ∅.\nTherefore, no minister is illiterate. Conclusion I LOGICALLY FOLLOWS.\n\nStep 3: Evaluate Conclusion II ('Some politicians are ministers'):\nSince M ⊆ P and the set M is non-empty, the portion of P that contains M consists of ministers.\nTherefore, some politicians are definitely ministers (valid conversion of universal affirmative). Conclusion II LOGICALLY FOLLOWS.\n\nHence, both Conclusion I and Conclusion II follow."
    },
    "hi": {
      "statement": "Consider the following Statements and Conclusions:\n\nStatements:\n1. All ministers are politicians.\n2. No politician is illiterate.\n\nConclusions:\nI. No minister is illiterate.\nII. Some politicians are ministers.\n\nWhich of the conclusion(s) logically follow(s) from the given statements?",
      "options": {
        "A": "Only Conclusion I follows",
        "B": "Only Conclusion II follows",
        "C": "Both Conclusion I and Conclusion II follow",
        "D": "Neither Conclusion I nor Conclusion II follows"
      },
      "explanation": "Step 1: Analyze Venn representations:\nLet M = Ministers, P = Politicians, I = Illiterate people.\nStatement 1: M ⊆ P (Ministers are entirely inside Politicians).\nStatement 2: P ∩ I = ∅ (Politicians and Illiterate people are mutually disjoint sets).\n\nStep 2: Evaluate Conclusion I ('No minister is illiterate'):\nSince M is inside P, and P has zero overlap with I, M can have zero overlap with I.\nM ∩ I = ∅.\nTherefore, no minister is illiterate. Conclusion I LOGICALLY FOLLOWS.\n\nStep 3: Evaluate Conclusion II ('Some politicians are ministers'):\nSince M ⊆ P and the set M is non-empty, the portion of P that contains M consists of ministers.\nTherefore, some politicians are definitely ministers (valid conversion of universal affirmative). Conclusion II LOGICALLY FOLLOWS.\n\nHence, both Conclusion I and Conclusion II follow."
    },
    "correctAnswer": "C",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 4,
      "B": 4,
      "C": 88,
      "D": 4
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 2,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Low"
    }
  },
  {
    "id": 8,
    "chapter": "Direction Sense, Shortest Distance & Blood Relations",
    "chapterHi": "दिशा ज्ञान, न्यूनतम दूरी एवं रक्त सम्बन्ध",
    "category": "attempted",
    "categoryTitle": "Questions Which Should Be Attempted",
    "difficulty": "L3",
    "en": {
      "statement": "Symbols: 'P * Q' means P is father of Q; 'P + Q' means P is daughter of Q; 'P - Q' means P is son of Q; 'P / Q' means P is sister of Q.\n\nIn the expression 'A * B - C + D * E', how is A related to E?",
      "options": {
        "A": "Brother-in-law",
        "B": "Son",
        "C": "Nephew",
        "D": "Father"
      },
      "explanation": "Break down 'A * B - C + D * E':\n1. 'A * B' → A is the father of B (A is male).\n2. 'B - C' → B is the son of C. Since A is already B's father, C must be B's mother! Thus, A and C are married (A is husband, C is wife).\n3. 'C + D' → C is the daughter of D.\n4. 'D * E' → D is the father of E.\n\nSynthesize the relationship:\n- D is the father of both C and E (C and E are siblings).\n- C is female (daughter of D).\n- A is married to C (A is C's husband).\n- Since A is the husband of E's sister (C), A is the BROTHER-IN-LAW of E!\n\nTherefore, A is the brother-in-law of E."
    },
    "hi": {
      "statement": "Symbols: 'P * Q' means P is father of Q; 'P + Q' means P is daughter of Q; 'P - Q' means P is son of Q; 'P / Q' means P is sister of Q.\n\nIn the expression 'A * B - C + D * E', how is A related to E?",
      "options": {
        "A": "Brother-in-law",
        "B": "Son",
        "C": "Nephew",
        "D": "Father"
      },
      "explanation": "Break down 'A * B - C + D * E':\n1. 'A * B' → A is the father of B (A is male).\n2. 'B - C' → B is the son of C. Since A is already B's father, C must be B's mother! Thus, A and C are married (A is husband, C is wife).\n3. 'C + D' → C is the daughter of D.\n4. 'D * E' → D is the father of E.\n\nSynthesize the relationship:\n- D is the father of both C and E (C and E are siblings).\n- C is female (daughter of D).\n- A is married to C (A is C's husband).\n- Since A is the husband of E's sister (C), A is the BROTHER-IN-LAW of E!\n\nTherefore, A is the brother-in-law of E."
    },
    "correctAnswer": "A",
    "attemptRate": 65,
    "optionDistribution": {
      "A": 65,
      "B": 13,
      "C": 11,
      "D": 11
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 3,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Low"
    }
  },
  {
    "id": 9,
    "chapter": "Time and Work, Pipes & Cisterns, Work & Wages",
    "chapterHi": "कार्य एवं समय, नल एवं टंकी, मजदूरी",
    "category": "attempted",
    "categoryTitle": "Questions Which Should Be Attempted",
    "difficulty": "L4",
    "en": {
      "statement": "A piece of work can be completed by x men in y days. If there were 6 men more, the work could be finished in 4 days less. If there were 10 men less, the work would take 10 days more. What is the value of (x + y)?\n(a) 68\n(b) 72\n(c) 74\n(d) 80",
      "options": {
        "A": "68",
        "B": "72",
        "C": "74",
        "D": "80"
      },
      "explanation": "1. Let total work W = x × y.\n2. Condition 1: (x + 6)(y - 4) = xy\n   xy - 4x + 6y - 24 = xy\n   -4x + 6y = 24 => -2x + 3y = 12.  (Equation 1)\n3. Condition 2: (x - 10)(y + 10) = xy\n   xy + 10x - 10y - 100 = xy\n   10x - 10y = 100 => x - y = 10 => x = y + 10.  (Equation 2)\n4. Substitute Equation 2 into Equation 1:\n   -2(y + 10) + 3y = 12\n   -2y - 20 + 3y = 12\n   y = 32 days.\n5. Find x:\n   x = 32 + 10 = 42 men.\n6. Check work: W = 42 × 32 = 1,344 man-days.\n   (42 + 6)(32 - 4) = 48 × 28 = 1,344.\n   (42 - 10)(32 + 10) = 32 × 42 = 1,344. Perfect!\n7. Value of (x + y) = 42 + 32 = 74."
    },
    "hi": {
      "statement": "A piece of work can be completed by x men in y days. If there were 6 men more, the work could be finished in 4 days less. If there were 10 men less, the work would take 10 days more. What is the value of (x + y)?\n(a) 68\n(b) 72\n(c) 74\n(d) 80",
      "options": {
        "A": "68",
        "B": "72",
        "C": "74",
        "D": "80"
      },
      "explanation": "1. Let total work W = x × y.\n2. Condition 1: (x + 6)(y - 4) = xy\n   xy - 4x + 6y - 24 = xy\n   -4x + 6y = 24 => -2x + 3y = 12.  (Equation 1)\n3. Condition 2: (x - 10)(y + 10) = xy\n   xy + 10x - 10y - 100 = xy\n   10x - 10y = 100 => x - y = 10 => x = y + 10.  (Equation 2)\n4. Substitute Equation 2 into Equation 1:\n   -2(y + 10) + 3y = 12\n   -2y - 20 + 3y = 12\n   y = 32 days.\n5. Find x:\n   x = 32 + 10 = 42 men.\n6. Check work: W = 42 × 32 = 1,344 man-days.\n   (42 + 6)(32 - 4) = 48 × 28 = 1,344.\n   (42 - 10)(32 + 10) = 32 × 42 = 1,344. Perfect!\n7. Value of (x + y) = 42 + 32 = 74."
    },
    "correctAnswer": "C",
    "attemptRate": 52,
    "optionDistribution": {
      "A": 16,
      "B": 16,
      "C": 52,
      "D": 16
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 4,
      "scratchpadDemand": "Medium - Linear Scratchpad Work",
      "idealTimeVsHallTime": "35s / 65s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "Medium"
    }
  },
  {
    "id": 10,
    "chapter": "Letter & Number Series, Coding-Decoding",
    "chapterHi": "वर्णमाला एवं संख्या शृंखला, कूटलेखन",
    "category": "avoided",
    "categoryTitle": "Questions Which Should Have Been Avoided",
    "difficulty": "L5",
    "en": {
      "statement": "In the cryptarithmetic equation:\nABC + BCA + CAB = 2664\nwhere A, B, and C represent distinct non-zero single digits with A > B > C, what is the value of A² + B² + C²?",
      "options": {
        "A": "186",
        "B": "194",
        "C": "206",
        "D": "214"
      },
      "explanation": "Step 1: Expand the three-digit numbers in base 10:\n• ABC = 100A + 10B + C\n• BCA = 100B + 10C + A\n• CAB = 100C + 10A + B\n\nStep 2: Sum the three numbers:\nABC + BCA + CAB = (100A + 10A + A) + (100B + 10B + B) + (100C + 10C + C)\n= 111A + 111B + 111C = 111(A + B + C).\n\nStep 3: Solve for (A + B + C):\n111(A + B + C) = 2,664\nA + B + C = 2,664 / 111 = 24.\n\nStep 4: Find the unique single-digit triplet {A, B, C}:\nA, B, C are distinct single digits (1 ≤ C < B < A ≤ 9).\nThe maximum possible sum of three distinct single digits is 9 + 8 + 7 = 24.\nSince the required sum is exactly 24, the ONLY possible set of digits is:\nA = 9, B = 8, C = 7.\n\nStep 5: Compute A² + B² + C²:\nA² + B² + C² = 9² + 8² + 7²\n= 81 + 64 + 49 = 194.\n\nHence, 194 is the value."
    },
    "hi": {
      "statement": "In the cryptarithmetic equation:\nABC + BCA + CAB = 2664\nwhere A, B, and C represent distinct non-zero single digits with A > B > C, what is the value of A² + B² + C²?",
      "options": {
        "A": "186",
        "B": "194",
        "C": "206",
        "D": "214"
      },
      "explanation": "Step 1: Expand the three-digit numbers in base 10:\n• ABC = 100A + 10B + C\n• BCA = 100B + 10C + A\n• CAB = 100C + 10A + B\n\nStep 2: Sum the three numbers:\nABC + BCA + CAB = (100A + 10A + A) + (100B + 10B + B) + (100C + 10C + C)\n= 111A + 111B + 111C = 111(A + B + C).\n\nStep 3: Solve for (A + B + C):\n111(A + B + C) = 2,664\nA + B + C = 2,664 / 111 = 24.\n\nStep 4: Find the unique single-digit triplet {A, B, C}:\nA, B, C are distinct single digits (1 ≤ C < B < A ≤ 9).\nThe maximum possible sum of three distinct single digits is 9 + 8 + 7 = 24.\nSince the required sum is exactly 24, the ONLY possible set of digits is:\nA = 9, B = 8, C = 7.\n\nStep 5: Compute A² + B² + C²:\nA² + B² + C² = 9² + 8² + 7²\n= 81 + 64 + 49 = 194.\n\nHence, 194 is the value."
    },
    "correctAnswer": "B",
    "attemptRate": 38,
    "optionDistribution": {
      "A": 22,
      "B": 38,
      "C": 20,
      "D": 20
    },
    "recommendedTimeSec": 60,
    "forensicMeta": {
      "cognitiveLoadScore": 5,
      "scratchpadDemand": "High - Iterative / Modular Case Enumeration",
      "idealTimeVsHallTime": "50s / 110s",
      "primaryTrapArchetype": "Deceptive Boundary Miscalculation",
      "riskIndex": "High"
    }
  }
];

// Time Gating & Dynamic Date Logic
function getNowIST() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60 * 1000;
  return new Date(utc + istOffset);
}

function getTodayDateStr() {
  try {
    if (typeof window !== 'undefined' && window.location) {
      const urlParams = new URLSearchParams(window.location.search);
      const forced = urlParams.get("date") || urlParams.get("previewDate");
      if (forced && /^\d{4}-\d{2}-\d{2}$/.test(forced)) {
        return forced;
      }
    }
  } catch (e) {}
  const nowIST = getNowIST();
  const y = nowIST.getFullYear();
  const m = String(nowIST.getMonth() + 1).padStart(2, '0');
  const d = String(nowIST.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isDateUnlocked(dateStr) {
  if (!dateStr) return true;
  try {
    if (typeof window !== 'undefined' && window.location) {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("date") === dateStr || urlParams.get("preview") === "true") {
        return true;
      }
    }
  } catch (e) {}
  const targetUnlock = new Date(`${dateStr}T00:01:00+05:30`);
  if (isNaN(targetUnlock.getTime())) return true;
  return getNowIST().getTime() >= targetUnlock.getTime();
}

function is18thOctUnlocked() {
  return isDateUnlocked("2026-10-18");
}

function is19thOctUnlocked() {
  return isDateUnlocked("2026-10-19");
}

// ============================================================================
// 15TH OCTOBER 2026 - UPSC CSAT DAILY PRACTICE SET (10 QUESTIONS)
// ============================================================================
const CSAT_QUESTIONS_15OCT = [
  {
    "id": 1,
    "chapter": "Percentages & Expenditure Invariance",
    "chapterHi": "प्रतिशत और व्यय अपरिवर्तनीयता",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "Easy-Moderate",
    "en": {
      "statement": "Due to an increase of 25% in the price of cooking oil, a household decides to reduce its consumption of cooking oil so that the expenditure on cooking oil increases by only 10%. By what percentage should the household reduce its consumption of cooking oil?",
      "options": {
        "A": "10%",
        "B": "12%",
        "C": "15%",
        "D": "16%"
      },
      "explanation": "1. Let original price P₀ = ₹ 100 per unit and original consumption C₀ = 100 units.\n2. Original Expenditure E₀ = P₀ × C₀ = 100 × 100 = ₹ 10,000.\n3. After a 25% price increase, new price P₁ = ₹ 125.\n4. Expenditure is allowed to increase by only 10%, so new Expenditure E₁ = 110% of 10,000 = ₹ 11,000.\n5. New Consumption C₁ = E₁ / P₁ = 11,000 / 125 = 88 units.\n6. Percentage reduction in consumption = ((100 - 88) / 100) × 100% = 12%."
    },
    "hi": {
      "statement": "खाद्य तेल के मूल्य में 25% की वृद्धि के कारण, एक परिवार अपने उपभोग को कितना कम करे ताकि तेल पर व्यय में केवल 10% की वृद्धि हो?",
      "options": {
        "A": "10%",
        "B": "12%",
        "C": "15%",
        "D": "16%"
      },
      "explanation": "1. माना प्रारंभिक मूल्य = ₹ 100, उपभोग = 100 इकाई। कुल व्यय = 100 × 100 = ₹ 10,000।\n2. नया मूल्य = ₹ 125। नया व्यय = ₹ 11,000 (10% वृद्धि)।\n3. नया उपभोग = 11,000 / 125 = 88 इकाई।\n4. उपभोग में कमी = ((100 - 88) / 100) × 100% = 12%।"
    },
    "correctAnswer": "B",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 4,
      "B": 92,
      "C": 3,
      "D": 1
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 2,
    "chapter": "Coded Blood Relations & Family Tree Deduction",
    "chapterHi": "रक्त संबंध एवं पारिवारिक वृक्ष",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "Moderate",
    "en": {
      "statement": "Read the following information carefully:\n- 'P + Q' means 'P is the father of Q'.\n- 'P - Q' means 'P is the sister of Q'.\n- 'P × Q' means 'P is the brother of Q'.\n- 'P ÷ Q' means 'P is the mother of Q'.\n\nConsider the expression: M + N × R ÷ T - K.\nWhich of the following statements is definitely correct?",
      "options": {
        "A": "M is the maternal grandfather of K",
        "B": "T is the daughter of N",
        "C": "M is the paternal grandfather of K",
        "D": "K is the grandson of M"
      },
      "explanation": "1. Decode the expression from left to right:\n   - M + N: M is the father of N (M is male).\n   - N × R: N is the brother of R (N is male; R and N are siblings).\n   - R ÷ T: R is the mother of T (R is female; M is therefore R's father).\n   - T - K: T is the sister of K (T is female; T and K share the same mother R).\n2. Relationship deduction:\n   - R is the mother of K.\n   - M is the father of R.\n   - Therefore, M is the maternal grandfather of K. Statement (a) is definitely correct.\n3. Evaluating distractors:\n   - (b) T is the niece of N (since N is R's brother), not the daughter of N.\n   - (c) M is linked through K's mother R, making him the maternal grandfather, not paternal.\n   - (d) The gender of K is unspecified (K could be grandson or granddaughter)."
    },
    "hi": {
      "statement": "निम्नलिखित जानकारी को ध्यानपूर्वक पढ़ें:\n- 'P + Q' का अर्थ है 'P, Q का पिता है'।\n- 'P - Q' का अर्थ है 'P, Q की बहन है'।\n- 'P × Q' का अर्थ है 'P, Q का भाई है'।\n- 'P ÷ Q' का अर्थ है 'P, Q की माता है'।\n\nव्यंजक पर विचार करें: M + N × R ÷ T - K\nनिम्नलिखित में से कौन सा कथन निश्चित रूप से सही है?",
      "options": {
        "A": "M, K का नाना है",
        "B": "T, N की पुत्री है",
        "C": "M, K का दादा है",
        "D": "K, M का पोता है"
      },
      "explanation": "1. M + N: M, N का पिता है (पुरुष)।\n2. N × R: N, R का भाई है (R, N की बहन/भाई)।\n3. R ÷ T: R, T की माता है (R महिला है; M, R का पिता है)।\n4. T - K: T, K की बहन है (T और K दोनों R की संतान हैं)।\n5. R, K की माता है और M, R का पिता है → अतः M, K का नाना (maternal grandfather) है।"
    },
    "correctAnswer": "A",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 84,
      "B": 8,
      "C": 6,
      "D": 2
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 3,
    "chapter": "Linear Diophantine Equations & Integer Extremization",
    "chapterHi": "डायोफैंटाइन समीकरण एवं पूर्णांक समीकरण",
    "category": "avoided",
    "categoryTitle": "Questions Which Should Have Been Avoided",
    "difficulty": "Moderate-Hard",
    "en": {
      "statement": "A person spent exactly ₹ 1,000 to buy three types of items costing ₹ 20, ₹ 50 and ₹ 90 each. He bought at least one item of each type, and the total number of items bought was the maximum possible. What is the value of the difference between the number of ₹ 20 items and the number of ₹ 90 items purchased?",
      "options": {
        "A": "40",
        "B": "41",
        "C": "42",
        "D": "43"
      },
      "explanation": "1. Let x, y, and z denote the number of items purchased at ₹ 20, ₹ 50, and ₹ 90 respectively.\n2. Integer constraint: x ≥ 1, y ≥ 1, z ≥ 1.\n3. Total expenditure equation: 20x + 50y + 90z = 1000 ⇒ 2x + 5y + 9z = 100.\n4. We want to maximize the total number of items T = x + y + z. Since ₹ 20 is the least expensive item, maximizing T requires maximizing x and minimizing (y + z).\n5. Rearrange: 2x = 100 - (5y + 9z).\n   - For x to be an integer, 100 - (5y + 9z) must be even.\n   - Since 100 is even, (5y + 9z) must be even.\n   - This forces y and z to have the same parity (both odd or both even).\n6. To minimize expenditure on y and z with positive integers, test smallest odd positive integers: y = 1, z = 1.\n   - 5(1) + 9(1) = 14 (even).\n   - 2x = 100 - 14 = 86 ⇒ x = 43.\n   - Total items T = 43 + 1 + 1 = 45 items.\n   - (Testing both even: y = 2, z = 2 gives 2x = 100 - 28 = 72 ⇒ x = 36, T = 40 < 45).\n7. The maximum count is uniquely achieved at x = 43, y = 1, z = 1.\n8. Required difference = x - z = 43 - 1 = 42."
    },
    "hi": {
      "statement": "एक व्यक्ति ने क्रमशः ₹ 20, ₹ 50 और ₹ 90 मूल्य की तीन प्रकार की वस्तुएं खरीदने के लिए ठीक ₹ 1,000 खर्च किए। उसने प्रत्येक प्रकार की कम से कम एक वस्तु खरीदी, और खरीदी गई वस्तुओं की कुल संख्या अधिकतम संभव थी। खरीदी गई ₹ 20 की वस्तुओं और ₹ 90 की वस्तुओं की संख्या के बीच का अंतर क्या है?",
      "options": {
        "A": "40",
        "B": "41",
        "C": "42",
        "D": "43"
      },
      "explanation": "1. समीकरण: 20x + 50y + 90z = 1000 ⇒ 2x + 5y + 9z = 100, जहाँ x, y, z ≥ 1।\n2. वस्तुओं की संख्या (x + y + z) को अधिकतम करने के लिए सबसे सस्ती वस्तु (x) को अधिकतम और (y, z) को न्यूनतम करना होगा।\n3. 2x सम है, अतः 5y + 9z सम होना चाहिए। y और z दोनों की समता (parity) समान होनी चाहिए।\n4. न्यूनतम धनात्मक विषम मान: y = 1, z = 1 ⇒ 2x = 100 - 14 = 86 ⇒ x = 43।\n5. अंतर = x - z = 43 - 1 = 42।"
    },
    "correctAnswer": "C",
    "attemptRate": 68,
    "optionDistribution": {
      "A": 12,
      "B": 15,
      "C": 68,
      "D": 5
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 4,
    "chapter": "Direction Sense & Coordinate Geometry",
    "chapterHi": "दिशा ज्ञान एवं निर्देशांक ज्यामिति",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "Easy",
    "en": {
      "statement": "Two persons A and B start from the same point P. A walks 4 km towards North, then turns to his right and walks 3 km. B walks 3 km towards West, then turns to his right and walks 4 km. What is the distance between A and B, and in which direction is A with respect to B?",
      "options": {
        "A": "5 km towards East",
        "B": "6 km towards East",
        "C": "6 km towards North-East",
        "D": "8 km towards East"
      },
      "explanation": "1. Set the initial common point P at the origin (0, 0) on a Cartesian coordinate plane.\n2. Tracking Person A:\n   - Walks 4 km North: reaches (0, 4).\n   - Turns right (East) and walks 3 km: reaches final position A = (3, 4).\n3. Tracking Person B:\n   - Walks 3 km West: reaches (-3, 0).\n   - Turns right (facing West, turning right means facing North) and walks 4 km: reaches final position B = (-3, 4).\n4. Distance and relative direction:\n   - Both A and B have the same y-coordinate (y = 4).\n   - Distance AB = 3 - (-3) = 6 km along the horizontal line.\n   - Since A has an x-coordinate of +3 and B has -3, A lies directly to the East of B.\n5. Therefore, A is 6 km towards East with respect to B."
    },
    "hi": {
      "statement": "दो व्यक्ति A और B एक ही बिंदु P से चलना शुरू करते हैं। A उत्तर की ओर 4 किमी चलता है, फिर दाईं ओर मुड़कर 3 किमी चलता है। B पश्चिम की ओर 3 किमी चलता है, फिर दाईं ओर मुड़कर 4 किमी चलता है। A और B के बीच की दूरी क्या है, और B के सापेक्ष A किस दिशा में है?",
      "options": {
        "A": "पूर्व की ओर 5 किमी",
        "B": "पूर्व की ओर 6 किमी",
        "C": "उत्तर-पूर्व की ओर 6 किमी",
        "D": "पूर्व की ओर 8 किमी"
      },
      "explanation": "1. बिंदु P को मूल बिंदु (0, 0) मानें।\n2. A की स्थिति: उत्तर 4 किमी (0, 4) → दाएँ मुड़कर पूर्व 3 किमी → A = (3, 4)।\n3. B की स्थिति: पश्चिम 3 किमी (-3, 0) → दाएँ मुड़कर उत्तर 4 किमी → B = (-3, 4)।\n4. दोनों का y-निर्देशांक 4 है। क्षैतिज दूरी = 3 - (-3) = 6 किमी।\n5. B (-3, 4) के सापेक्ष A (3, 4) ठीक पूर्व दिशा में 6 किमी की दूरी पर है।"
    },
    "correctAnswer": "B",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 10,
      "B": 85,
      "C": 3,
      "D": 2
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 5,
    "chapter": "Combinatorial Number Theory & Non-Uniqueness Traps",
    "chapterHi": "संख्या सिद्धांत एवं अंक क्रमचय",
    "category": "avoided",
    "categoryTitle": "Questions Which Should Have Been Avoided",
    "difficulty": "Challenging",
    "en": {
      "statement": "A three-digit number ABC has distinct non-zero digits such that A > B > C. The sum of all possible two-digit numbers that can be formed using the digits A, B and C (without repetition in any two-digit number) is 484. What is the value of the digit A?",
      "options": {
        "A": "7",
        "B": "8",
        "C": "9",
        "D": "Cannot be determined uniquely"
      },
      "explanation": "1. From 3 distinct non-zero digits A, B, C, the possible two-digit numbers without repetition are 6 numbers: AB, BA, AC, CA, BC, CB.\n2. Express each number in base 10:\n   Sum = (10A + B) + (10B + A) + (10A + C) + (10C + A) + (10B + C) + (10C + B)\n       = 20(A + B + C) + 2(A + B + C) = 22(A + B + C).\n3. Given that the sum is 484:\n   22(A + B + C) = 484 ⇒ A + B + C = 484 / 22 = 22.\n4. Condition: 9 ≥ A > B > C ≥ 1.\n   - If A ≤ 8, then the maximum possible sum of the three distinct digits would be 8 + 7 + 6 = 21, which is strictly less than 22.\n   - Therefore, A cannot be 8 or less.\n   - Hence, A must be 9.\n5. (Verification: If A = 9, then B + C = 13. Possible valid pairs (B, C) with 9 > B > C ≥ 1 are (8, 5) and (7, 6). While B and C cannot be uniquely determined, the leading digit A is strictly and uniquely forced to be 9)."
    },
    "hi": {
      "statement": "तीन अंकों की संख्या ABC में विशिष्ट गैर-शून्य अंक इस प्रकार हैं कि A > B > C। अंकों A, B और C का उपयोग करके (बिना दोहराव के) बनाई जा सकने वाली सभी दो अंकों की संख्याओं का योग 484 है। अंक A का मान क्या है?",
      "options": {
        "A": "7",
        "B": "8",
        "C": "9",
        "D": "विशिष्ट रूप से निर्धारित नहीं किया जा सकता"
      },
      "explanation": "1. 3 अंकों से बनने वाली 2 अंकों की 6 संख्याएं होंगी: AB, BA, AC, CA, BC, CB।\n2. कुल योग = 22(A + B + C) = 484 ⇒ A + B + C = 22।\n3. यदि A ≤ 8 होता, तो अधिकतम संभव योग 8 + 7 + 6 = 21 होता, जो 22 से कम है।\n4. अतः A का मान अनिवार्य रूप से 9 होना चाहिए।"
    },
    "correctAnswer": "C",
    "attemptRate": 68,
    "optionDistribution": {
      "A": 8,
      "B": 12,
      "C": 64,
      "D": 16
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 6,
    "chapter": "Unit Digit & Modular Cyclicity",
    "chapterHi": "इकाई अंक एवं मॉड्यूलर चक्रियता",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "Easy",
    "en": {
      "statement": "What is the remainder when (17^2025 + 13^2025) is divided by 10?",
      "options": {
        "A": "0",
        "B": "2",
        "C": "5",
        "D": "8"
      },
      "explanation": "1. Finding the remainder when an integer is divided by 10 is identical to determining its unit digit.\n2. Unit digit of 17^2025 depends only on the cyclicity of 7:\n   - 7¹ = 7\n   - 7² = 49 ≡ 9 (mod 10)\n   - 7³ = 343 ≡ 3 (mod 10)\n   - 7⁴ = 2401 ≡ 1 (mod 10)\n   - Cyclicity is 4. Since 2025 = 4 × 506 + 1, 17^2025 has the same unit digit as 7¹ = 7.\n3. Unit digit of 13^2025 depends only on the cyclicity of 3:\n   - 3¹ = 3\n   - 3² = 9 (mod 10)\n   - 3³ = 27 ≡ 7 (mod 10)\n   - 3⁴ = 81 ≡ 1 (mod 10)\n   - Cyclicity is 4. Since 2025 = 4 × 506 + 1, 13^2025 has the same unit digit as 3¹ = 3.\n4. Sum of unit digits = 7 + 3 = 10 ≡ 0 (mod 10).\n5. Hence, the remainder is 0."
    },
    "hi": {
      "statement": "जब (17^2025 + 13^2025) को 10 से विभाजित किया जाता है, तो शेषफल क्या होगा?",
      "options": {
        "A": "0",
        "B": "2",
        "C": "5",
        "D": "8"
      },
      "explanation": "1. 10 से विभाजन पर शेषफल इकाई अंक के समान होता है।\n2. 7 की चक्रीयता 4 है। 2025 = 4 × 506 + 1, अतः 17^2025 का इकाई अंक 7¹ = 7 है।\n3. 3 की चक्रीयता 4 है। 13^2025 का इकाई अंक 3¹ = 3 है।\n4. इकाई अंकों का योग = 7 + 3 = 10, अतः इकाई अंक 0 है। शेषफल = 0।"
    },
    "correctAnswer": "A",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 90,
      "B": 4,
      "C": 3,
      "D": 3
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 7,
    "chapter": "Truth-Tellers, Liars & Alternators Logic Puzzle",
    "chapterHi": "सत्यवादी, झूठे और एकांतरवादी पहेली",
    "category": "avoided",
    "categoryTitle": "Questions Which Should Have Been Avoided",
    "difficulty": "Challenging",
    "en": {
      "statement": "Three persons A, B and C belong to three different tribes: Truth-tellers (who always speak the truth), Liars (who always tell lies), and Alternators (who alternate between truth and lie, in any order). Exactly one person belongs to each tribe.\nThey make the following statements:\n- A says:\n  1. 'I am a Liar.'\n  2. 'B is a Truth-teller.'\n- B says:\n  1. 'A is not a Liar.'\n  2. 'C is a Liar.'\n- C says:\n  1. 'I am a Truth-teller.'\n  2. 'B is an Alternator.'\n\nWho among them is the Truth-teller?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "Cannot be determined"
      },
      "explanation": "1. Analyze the statement 'I am a Liar' made by A:\n   - Can a Truth-teller say 'I am a Liar'? No, because that would be a lie.\n   - Can a Liar say 'I am a Liar'? No, because that would be the truth, which a Liar cannot utter.\n   - Therefore, only an Alternator can make the statement 'I am a Liar', and this statement must be FALSE.\n2. Consequence for A:\n   - A is definitively the Alternator.\n   - Since A's first statement is False (F), A's second statement must be TRUE (T).\n   - A's second statement is: 'B is a Truth-teller.'\n   - Since this is True, B is definitively the Truth-teller.\n3. Consequence for C:\n   - Since A is the Alternator and B is the Truth-teller, C must be the Liar.\n4. Consistency check on B and C:\n   - B (Truth-teller): Statement 1 ('A is not a Liar') is True (A is Alternator). Statement 2 ('C is a Liar') is True. (Both True: consistent).\n   - C (Liar): Statement 1 ('I am a Truth-teller') is False. Statement 2 ('B is an Alternator') is False (B is Truth-teller). (Both False: consistent).\n5. Hence, B is the Truth-teller."
    },
    "hi": {
      "statement": "तीन व्यक्ति A, B और C तीन अलग-अलग श्रेणियों से हैं: सत्यवादी (हमेशा सच बोलते हैं), झूठे (हमेशा झूठ बोलते हैं), और एकांतरवादी (सच और झूठ बारी-बारी बोलते हैं)। प्रत्येक श्रेणी में ठीक एक व्यक्ति है।\n- A कहता है: 1. 'मैं झूठा हूँ।' 2. 'B सत्यवादी है।'\n- B कहता है: 1. 'A झूठा नहीं है।' 2. 'C झूठा है।'\n- C कहता है: 1. 'मैं सत्यवादी हूँ।' 2. 'B एकांतरवादी है।'\n\nउनमें से सत्यवादी कौन है?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "निर्धारित नहीं किया जा सकता"
      },
      "explanation": "1. 'मैं झूठा हूँ' केवल एकांतरवादी ही कह सकता है (क्योंकि सत्यवादी झूठ नहीं बोल सकता और झूठा सच नहीं कह सकता)। अतः A का यह कथन असत्य (F) है।\n2. A एकांतरवादी है। उसका दूसरा कथन सत्य (T) होना चाहिए: 'B सत्यवादी है।' अतः B सत्यवादी है।"
    },
    "correctAnswer": "B",
    "attemptRate": 68,
    "optionDistribution": {
      "A": 14,
      "B": 71,
      "C": 9,
      "D": 6
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 8,
    "chapter": "Time & Work / Multi-Stage Work Tracking",
    "chapterHi": "समय और कार्य / चरणबद्ध कार्य",
    "category": "attempted",
    "categoryTitle": "Questions Which Should Be Attempted",
    "difficulty": "Moderate",
    "en": {
      "statement": "A and B working together can complete a work in 12 days. B and C working together can complete it in 15 days, while A and C working together can complete it in 20 days. They all start working together, but A leaves after 5 days. B and C continue working for 5 more days, after which B also leaves. C finishes the remaining work alone. How many days did C work in total from start to finish?",
      "options": {
        "A": "15 days",
        "B": "18 days",
        "C": "20 days",
        "D": "24 days"
      },
      "explanation": "1. Assume total work = LCM(12, 15, 20) = 60 units.\n2. Calculate pairwise daily efficiencies:\n   - (A + B) = 60 / 12 = 5 units/day\n   - (B + C) = 60 / 15 = 4 units/day\n   - (A + C) = 60 / 20 = 3 units/day\n3. Add all three equations:\n   2(A + B + C) = 5 + 4 + 3 = 12 ⇒ (A + B + C) = 6 units/day.\n4. Individual efficiencies:\n   - Efficiency of C = (A + B + C) - (A + B) = 6 - 5 = 1 unit/day\n   - Efficiency of A = (A + B + C) - (B + C) = 6 - 4 = 2 units/day\n   - Efficiency of B = (A + B + C) - (A + C) = 6 - 3 = 3 units/day\n5. Multi-stage execution:\n   - Stage 1 (A, B, C for 5 days): Work done = 5 × 6 = 30 units.\n   - Stage 2 (B, C for 5 days): Work done = 5 × 4 = 20 units.\n   - Total work done so far = 30 + 20 = 50 units.\n   - Remaining work = 60 - 50 = 10 units.\n   - Stage 3 (C alone): Days taken = 10 units / 1 unit/day = 10 days.\n6. Total days C worked = 5 (Stage 1) + 5 (Stage 2) + 10 (Stage 3) = 20 days."
    },
    "hi": {
      "statement": "A और B मिलकर एक कार्य को 12 दिनों में, B और C 15 दिनों में, तथा A और C 20 दिनों में पूरा कर सकते हैं। वे सभी एक साथ कार्य शुरू करते हैं, लेकिन 5 दिनों के बाद A छोड़ देता है। B और C अगले 5 दिनों तक कार्य करते हैं, जिसके बाद B भी छोड़ देता है। C शेष कार्य अकेले पूरा करता है। C ने शुरू से अंत तक कुल कितने दिन कार्य किया?",
      "options": {
        "A": "15 दिन",
        "B": "18 दिन",
        "C": "20 दिन",
        "D": "24 दिन"
      },
      "explanation": "1. कुल कार्य = LCM(12, 15, 20) = 60 इकाई।\n2. A+B = 5, B+C = 4, A+C = 3 ⇒ 2(A+B+C) = 12 ⇒ A+B+C = 6 इकाई/दिन।\n3. C की कार्यक्षमता = 6 - 5 = 1 इकाई/दिन।\n4. प्रथम 5 दिन (A+B+C): 5 × 6 = 30 इकाई।\n5. अगले 5 दिन (B+C): 5 × 4 = 20 इकाई। शेष = 60 - 50 = 10 इकाई।\n6. C अकेला 10 इकाई कार्य 10 दिन में करेगा। C के कुल दिन = 5 + 5 + 10 = 20 दिन।"
    },
    "correctAnswer": "C",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 11,
      "B": 9,
      "C": 76,
      "D": 4
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 9,
    "chapter": "Combinatorics & Restricted Gap Placements",
    "chapterHi": "क्रमचय एवं संचय / रिक्ति विधि",
    "category": "attempted",
    "categoryTitle": "Questions Which Should Be Attempted",
    "difficulty": "Moderate-Hard",
    "en": {
      "statement": "In how many different ways can 5 identical red balls and 4 identical black balls be arranged in a straight row such that no two black balls are placed adjacent to each other?",
      "options": {
        "A": "15",
        "B": "20",
        "C": "30",
        "D": "120"
      },
      "explanation": "1. Since the red balls are identical and the black balls are identical, order within the same color group does not create distinct arrangements.\n2. To ensure that no two black balls are adjacent, apply the Gap Method:\n   - First, arrange the 5 identical red balls in a straight line: _ R _ R _ R _ R _ R _\n   - There is only 1 distinct way to place the 5 identical red balls.\n3. The 5 red balls create 6 possible gap locations (one before the first red ball, four between consecutive red balls, and one after the last red ball):\n   Total gaps = 5 + 1 = 6 gaps.\n4. To guarantee that no two black balls are adjacent, each of the 4 black balls must occupy a different gap.\n5. Since all 4 black balls are identical, the number of ways is simply the number of ways to choose 4 gaps out of the 6 available gaps:\n   Number of ways = C(6, 4) = C(6, 2) = (6 × 5) / (2 × 1) = 15 ways.\n6. Hence, there are 15 distinct arrangements."
    },
    "hi": {
      "statement": "5 समान लाल गेंदों और 4 समान काली गेंदों को एक सीधी पंक्ति में कितने अलग-अलग तरीकों से व्यवस्थित किया जा सकता है ताकि कोई भी दो काली गेंदें एक साथ न हों?",
      "options": {
        "A": "15",
        "B": "20",
        "C": "30",
        "D": "120"
      },
      "explanation": "1. 5 समान लाल गेंदें 6 रिक्तियां (gaps) बनाती हैं: _ R _ R _ R _ R _ R _।\n2. कोई दो काली गेंदें एक साथ न होने के लिए 4 काली गेंदों को इन 6 रिक्तियों में से किन्हीं 4 में रखना होगा।\n3. चूंकि गेंदें समान हैं, तरीकों की संख्या = C(6, 4) = C(6, 2) = (6 × 5) / 2 = 15।"
    },
    "correctAnswer": "A",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 82,
      "B": 10,
      "C": 5,
      "D": 3
    },
    "recommendedTimeSec": 60
  },
  {
    "id": 10,
    "chapter": "Averages & Net Replacement Shifts",
    "chapterHi": "औसत एवं प्रतिस्थापन विचलन",
    "category": "not_wrong",
    "categoryTitle": "Questions Which Should Not Have Been Wrong",
    "difficulty": "Easy-Moderate",
    "en": {
      "statement": "The average age of a committee of 8 members increases by 2 years when two members whose ages are 35 years and 45 years are replaced by two new members. What is the average age of the two new members?",
      "options": {
        "A": "44 years",
        "B": "46 years",
        "C": "48 years",
        "D": "50 years"
      },
      "explanation": "1. Let original average age of the 8 committee members be A years.\n2. Total initial age of the committee = 8A.\n3. Sum of ages of the two outgoing members = 35 + 45 = 80 years.\n4. When replaced by two new members, the new average becomes (A + 2) years.\n5. New total age = 8(A + 2) = 8A + 16 years.\n6. Net increase in the committee's total age = (8A + 16) - 8A = 16 years.\n7. Therefore, the sum of ages of the two new incoming members = (Sum of outgoing ages) + (Net increase) = 80 + 16 = 96 years.\n8. Average age of the two new members = 96 / 2 = 48 years."
    },
    "hi": {
      "statement": "8 सदस्यों की एक समिति की औसत आयु 2 वर्ष बढ़ जाती है जब दो सदस्य जिनकी आयु 35 वर्ष और 45 वर्ष है, उनके स्थान पर दो नए सदस्य शामिल किए जाते हैं। दो नए सदस्यों की औसत आयु क्या है?",
      "options": {
        "A": "44 वर्ष",
        "B": "46 वर्ष",
        "C": "48 वर्ष",
        "D": "50 वर्ष"
      },
      "explanation": "1. कुल आयु में शुद्ध वृद्धि = 8 सदस्य × 2 वर्ष = 16 वर्ष।\n2. जाने वाले दोनों सदस्यों की कुल आयु = 35 + 45 = 80 वर्ष।\n3. नए सदस्यों की कुल आयु = 80 + 16 = 96 वर्ष।\n4. दो नए सदस्यों की औसत आयु = 96 / 2 = 48 वर्ष।"
    },
    "correctAnswer": "C",
    "attemptRate": 88,
    "optionDistribution": {
      "A": 5,
      "B": 7,
      "C": 86,
      "D": 2
    },
    "recommendedTimeSec": 60
  }
];

function getCSATQuestions(dateStr) {
  const target = dateStr || getTodayDateStr();
  if (target === "2026-10-19") return CSAT_QUESTIONS_19OCT;
  if (target === "2026-10-18") return CSAT_QUESTIONS_18OCT;
  if (target === "2026-10-17") return CSAT_QUESTIONS_17OCT;
  if (target === "2026-10-16") return CSAT_QUESTIONS_16OCT;
  if (target === "2026-10-15") return CSAT_QUESTIONS_15OCT;
  return CSAT_QUESTIONS_19OCT;
}

// Fallback questions based on active date
const CSAT_QUESTIONS = getCSATQuestions();

// Weekday names mapping
const CSAT_WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Benchmark baseline records for past tests (1 to 18)
const BASELINE_OCTOBER_DAYS = {
  18: { dayName: "Sunday", score: "22.5 / 25", accuracy: 89, questionsAttempted: 10, correct: 9, incorrect: 1, isCompleted: true },
  17: { dayName: "Saturday", score: "22.5 / 25", accuracy: 89, questionsAttempted: 10, correct: 9, incorrect: 1, isCompleted: true },
  16: { dayName: "Friday", score: "21.6 / 25", accuracy: 87, questionsAttempted: 10, correct: 8, incorrect: 1, isCompleted: true },
  15: { dayName: "Thursday", score: "22.5 / 25", accuracy: 88, questionsAttempted: 10, correct: 9, incorrect: 1, isCompleted: true },
  14: { dayName: "Wednesday", score: "20.0 / 25", accuracy: 80, questionsAttempted: 10, correct: 8, incorrect: 2, isCompleted: true },
  13: { dayName: "Tuesday", score: "17.5 / 25", accuracy: 72, questionsAttempted: 9, correct: 7, incorrect: 2, isCompleted: true },
  12: { dayName: "Monday", score: "22.5 / 25", accuracy: 89, questionsAttempted: 10, correct: 9, incorrect: 1, isCompleted: true },
  11: { dayName: "Sunday", score: "20.0 / 25", accuracy: 82, questionsAttempted: 10, correct: 8, incorrect: 2, isCompleted: true },
  10: { dayName: "Saturday", score: "18.3 / 25", accuracy: 76, questionsAttempted: 10, correct: 7, incorrect: 3, isCompleted: true },
  9:  { dayName: "Friday", score: "22.5 / 25", accuracy: 90, questionsAttempted: 10, correct: 9, incorrect: 1, isCompleted: true },
  8:  { dayName: "Thursday", score: "20.0 / 25", accuracy: 83, questionsAttempted: 10, correct: 8, incorrect: 2, isCompleted: true },
  7:  { dayName: "Wednesday", score: "17.5 / 25", accuracy: 74, questionsAttempted: 9, correct: 7, incorrect: 2, isCompleted: true },
  6:  { dayName: "Tuesday", score: "21.6 / 25", accuracy: 87, questionsAttempted: 10, correct: 8, incorrect: 1, isCompleted: true },
  5:  { dayName: "Monday", score: "19.1 / 25", accuracy: 79, questionsAttempted: 10, correct: 7, incorrect: 2, isCompleted: true },
  4:  { dayName: "Sunday", score: "20.8 / 25", accuracy: 84, questionsAttempted: 10, correct: 8, incorrect: 2, isCompleted: true },
  3:  { dayName: "Saturday", score: "18.3 / 25", accuracy: 75, questionsAttempted: 10, correct: 7, incorrect: 3, isCompleted: true },
  2:  { dayName: "Friday", score: "22.5 / 25", accuracy: 90, questionsAttempted: 10, correct: 9, incorrect: 1, isCompleted: true },
  1:  { dayName: "Thursday", score: "17.5 / 25", accuracy: 71, questionsAttempted: 9, correct: 7, incorrect: 2, isCompleted: true }
};

/**
 * Automatically builds the test tiles list for October 2026.
 * Dynamically determines today's active day (e.g. 19 Oct), marks it as Live Test,
 * and renders all prior test days (18 down to 1) as completed history.
 * Supports any future day (20, 21, ...) automatically as time advances.
 */
function buildOctoberHistoryData(customActiveDay) {
  const nowIST = getNowIST();
  let activeDay = customActiveDay;
  if (!activeDay) {
    if (nowIST.getFullYear() === 2026 && nowIST.getMonth() === 9) { // October 2026
      activeDay = nowIST.getDate();
    } else {
      activeDay = 19; // Default active today is 19th Oct
    }
  }

  // Ensure minimum active day is 19 since 19th Oct questions are uploaded
  if (activeDay < 19 && isDateUnlocked("2026-10-19")) {
    activeDay = 19;
  }

  const list = [];
  for (let d = activeDay; d >= 1; d--) {
    const dayPad = d < 10 ? `0${d}` : `${d}`;
    const dateStr = `${dayPad} Oct`;
    const fullDateStr = `2026-10-${dayPad}`;
    const dayOfWeek = new Date(2026, 9, d).getDay();
    const dayName = CSAT_WEEKDAYS[dayOfWeek];
    const isToday = (d === activeDay);

    if (isToday) {
      list.push({
        dayNum: d,
        dateStr,
        fullDateStr,
        dayName,
        score: "-- / 25",
        accuracy: "--",
        questionsAttempted: 0,
        correct: 0,
        incorrect: 0,
        isToday: true,
        isCompleted: false
      });
    } else if (BASELINE_OCTOBER_DAYS[d]) {
      list.push({
        dayNum: d,
        dateStr,
        fullDateStr,
        ...BASELINE_OCTOBER_DAYS[d]
      });
    } else {
      list.push({
        dayNum: d,
        dateStr,
        fullDateStr,
        dayName,
        score: "21.6 / 25",
        accuracy: 86,
        questionsAttempted: 10,
        correct: 8,
        incorrect: 1,
        isCompleted: true
      });
    }
  }
  return list;
}

const OCTOBER_HISTORY_DATA = buildOctoberHistoryData();

// Helper to save/load active quiz attempt
const CSAT_STORAGE_KEY = "csat_daily_test_state";
const CSAT_RESULT_KEY = "csat_daily_test_result";
const CSAT_LANG_KEY = "csat_selected_language";

if (typeof window !== "undefined") {
  window.getNowIST = getNowIST;
  window.getTodayDateStr = getTodayDateStr;
  window.isDateUnlocked = isDateUnlocked;
  window.is18thOctUnlocked = is18thOctUnlocked;
  window.is19thOctUnlocked = is19thOctUnlocked;
  window.buildOctoberHistoryData = buildOctoberHistoryData;
  window.OCTOBER_HISTORY_DATA = OCTOBER_HISTORY_DATA;
  window.getCSATQuestions = getCSATQuestions;
  window.CSAT_QUESTIONS = CSAT_QUESTIONS;
  window.CSAT_QUESTIONS_15OCT = CSAT_QUESTIONS_15OCT;
  window.CSAT_QUESTIONS_16OCT = CSAT_QUESTIONS_16OCT;
  window.CSAT_QUESTIONS_17OCT = CSAT_QUESTIONS_17OCT;
  window.CSAT_QUESTIONS_18OCT = CSAT_QUESTIONS_18OCT;
  window.CSAT_QUESTIONS_19OCT = CSAT_QUESTIONS_19OCT;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getNowIST,
    getTodayDateStr,
    isDateUnlocked,
    is18thOctUnlocked,
    is19thOctUnlocked,
    buildOctoberHistoryData,
    OCTOBER_HISTORY_DATA,
    getCSATQuestions,
    CSAT_QUESTIONS,
    CSAT_QUESTIONS_15OCT,
    CSAT_QUESTIONS_16OCT,
    CSAT_QUESTIONS_17OCT,
    CSAT_QUESTIONS_18OCT,
    CSAT_QUESTIONS_19OCT
  };
}


