/**
 * CSAT Daily Practice Dataset & Logic
 * Traditional UPSC Terminology - Zero Buzzwords
 */

const CSAT_QUESTIONS = [
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

// October 2026 Past Test History Data (Oct 1 to Oct 16)
// Accuracy randomized strictly within 70% to 90% as requested!
const OCTOBER_HISTORY_DATA = [
  { dayNum: 16, dateStr: "16 Oct", dayName: "Friday", score: "-- / 25", accuracy: "--", questionsAttempted: 0, correct: 0, incorrect: 0, isToday: true, isCompleted: false },
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
