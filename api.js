/**
 * Supabase API Service for CSAT Daily 10 Questions
 * Direct integration with Supabase REST API
 * Hybrid Architecture: Instant Local Cache + Asynchronous Supabase Cloud Sync
 */

const CSAT_API = (function () {
  const SUPABASE_URL = "https://wrzidtmqwjbnaimqnkuz.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyemlkdG1xd2pibmFpbXFua3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDc2NzgsImV4cCI6MjEwNzcyMzY3OH0.jCZSo0UPPa2eG6rKUBTwfGuLTvh3SjO_cNr9wzCoqYM";
  const TABLE_QUESTIONS = "daily_questions";
  const TABLE_ATTEMPTS = "user_test_attempts";

  // Candidate Name (default: 'Shri')
  function getCandidateName() {
    return localStorage.getItem("csat_candidate_name") || "Shri";
  }

  function setCandidateName(name) {
    if (name && name.trim()) {
      localStorage.setItem("csat_candidate_name", name.trim());
    }
  }

  function getDefaultDate() {
    if (typeof getTodayDateStr === 'function') {
      return getTodayDateStr();
    }
    return "2026-10-19";
  }

  /**
   * Fetch daily questions from Supabase REST API for a specific date
   * Defaults to 18th Oct if unlocked, else 17th Oct
   */
  async function loadDailyQuestions(testDate = getDefaultDate()) {
    try {
      // First try matching test_date, or order by question_number
      let endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_QUESTIONS}?test_date=eq.${testDate}&order=question_number.asc`;
      
      let response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        }
      });

      let rows = await response.json();
      
      // If rows found for this exact date in Supabase, deduplicate by question_number (max 10)
      if (Array.isArray(rows) && rows.length > 0) {
        console.log(`Successfully fetched ${rows.length} questions from Supabase for ${testDate}!`);
        const seen = new Set();
        const uniqueRows = [];
        for (const r of rows) {
          const qNum = r.question_number || (uniqueRows.length + 1);
          if (!seen.has(qNum) && uniqueRows.length < 10) {
            seen.add(qNum);
            uniqueRows.push(r);
          }
        }
        return normalizeSupabaseRows(uniqueRows.length > 0 ? uniqueRows : rows.slice(0, 10));
      }

      // If no rows found in Supabase for this date, fallback to curated offline mock questions for this exact date
      console.warn(`Supabase returned empty question list for ${testDate}. Using curated offline dataset.`);
      const fallbackSet = (typeof getCSATQuestions === 'function') ? getCSATQuestions(testDate) : (typeof CSAT_QUESTIONS !== 'undefined' ? CSAT_QUESTIONS : []);
      return transformFallback(fallbackSet);
    } catch (err) {
      console.warn("Error fetching questions from Supabase. Using fallback mock data:", err);
      const fallbackSet = (typeof getCSATQuestions === 'function') ? getCSATQuestions(testDate) : (typeof CSAT_QUESTIONS !== 'undefined' ? CSAT_QUESTIONS : []);
      return transformFallback(fallbackSet);
    }
  }

  /**
   * Sync active quiz progress to Supabase
   * Saves answers, timers, question index, and review flags under candidate name (e.g. 'Shri')
   */
  async function syncProgressToCloud(progressPayload) {
    const candidateName = getCandidateName();
    const testDate = progressPayload.testDate || getDefaultDate();
    const recordId = `${candidateName}_${testDate}`;

    const body = {
      id: recordId,
      user_name: candidateName,
      test_date: testDate,
      current_question_index: progressPayload.currentQuestionIndex || 0,
      answers: progressPayload.answers || {},
      time_per_question: progressPayload.timePerQuestion || {},
      marked_for_review: progressPayload.marked || [],
      status: progressPayload.status || "in_progress",
      total_time_seconds: progressPayload.totalTimeSeconds || 0,
      updated_at: new Date().toISOString()
    };

    if (progressPayload.finalResult) {
      body.score = parseFloat(progressPayload.finalResult.totalScore || 0);
      body.accuracy = parseInt(progressPayload.finalResult.accuracy || 0);
      body.correct_count = parseInt(progressPayload.finalResult.correctCount || 0);
      body.incorrect_count = parseInt(progressPayload.finalResult.incorrectCount || 0);
      body.unattempted_count = parseInt(progressPayload.finalResult.unattemptedCount || 0);
      body.result_payload = progressPayload.finalResult;
      body.status = "completed";
    }

    try {
      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_ATTEMPTS}?on_conflict=id`;
      const response = await fetch(endpoint, {
        method: "POST",
        keepalive: true,
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        const errText = await response.text();
        console.warn(`Supabase sync error [HTTP ${response.status}]:`, errText);
      }
      return response.ok;
    } catch (err) {
      console.warn("Cloud sync failed (offline / table pending):", err);
      return false;
    }
  }

  /**
   * Restore user progress from Supabase if local cache was cleared
   */
  async function restoreProgressFromCloud(testDate = getDefaultDate()) {
    const candidateName = getCandidateName();
    const recordId = `${candidateName}_${testDate}`;

    try {
      // 1. Direct query for specific user record
      let endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_ATTEMPTS}?id=eq.${recordId}&select=*`;
      let response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        }
      });
      let rows = await response.json();
      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0];
      }

      // 2. Fallback: check latest attempt for this test date
      endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_ATTEMPTS}?test_date=eq.${testDate}&order=updated_at.desc&limit=1`;
      response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        }
      });
      rows = await response.json();
      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0];
      }
    } catch (err) {
      console.warn("Could not retrieve cloud progress:", err);
    }
    return null;
  }

  /**
   * Normalize Supabase DB row format into standard app question model
   */
  function normalizeSupabaseRows(rows) {
    function cleanOpt(txt) {
      if (!txt) return "";
      return String(txt).replace(/^\([a-dA-D]\)\s*/, "").replace(/^[a-dA-D][\.\)]\s*/, "").trim();
    }

    return rows.map((row, idx) => {
      let opts = { A: "", B: "", C: "", D: "" };
      if (Array.isArray(row.options)) {
        opts.A = cleanOpt(row.options[0]);
        opts.B = cleanOpt(row.options[1]);
        opts.C = cleanOpt(row.options[2]);
        opts.D = cleanOpt(row.options[3]);
      } else if (typeof row.options === "object" && row.options !== null) {
        opts.A = cleanOpt(row.options.A);
        opts.B = cleanOpt(row.options.B);
        opts.C = cleanOpt(row.options.C);
        opts.D = cleanOpt(row.options.D);
      }

      const letters = ["A", "B", "C", "D"];
      let answerKey = row.answer_key || "A";
      if (!row.answer_key && row.correct_index !== undefined) {
        answerKey = letters[row.correct_index] || "A";
      }

      return {
        id: row.question_number || (idx + 1),
        dbId: row.id,
        chapter: row.topic || row.subject || "General Aptitude",
        chapterHi: row.topic || row.subject || "सामान्य अभिरुचि",
        category: row.category || (idx < 4 ? "not_wrong" : (idx < 8 ? "attempted" : "avoided")),
        categoryTitle: row.category_title || getCategoryTitle(row.category),
        difficulty: row.difficulty || "Moderate",
        en: {
          statement: row.question || "",
          options: opts,
          explanation: row.solution || row.trick || "Refer to standard solution methods."
        },
        hi: {
          statement: row.question || "",
          options: opts,
          explanation: row.solution || row.trick || "मानक समाधान विधि देखें।"
        },
        correctAnswer: answerKey,
        attemptRate: row.attempt_rate || 75,
        optionDistribution: row.option_distribution || { A: 25, B: 25, C: 25, D: 25 },
        recommendedTimeSec: 60,
        forensicMeta: row.forensic_meta || {}
      };
    });
  }

  function transformFallback(questions) {
    return questions;
  }

  function getCategoryTitle(cat) {
    if (cat === "avoided") return "Questions Which Should Have Been Avoided";
    if (cat === "not_wrong") return "Questions Which Should Not Have Been Wrong";
    return "Questions Which Should Be Attempted";
  }

  /**
   * Check if there is an active (in_progress) or saved attempt for a given test date
   * Combines instant local cache inspection and async Supabase cloud check.
   */
  async function checkActiveAttempt(testDate = getDefaultDate()) {
    // 1. Quick check local cache for in-progress attempt (supporting date-scoped and fallback keys)
    try {
      const localStr = localStorage.getItem(`csat_active_quiz_state_${testDate}`) || localStorage.getItem("csat_daily_test_state") || localStorage.getItem("csat_active_quiz_state");
      if (localStr) {
        const local = JSON.parse(localStr);
        if (local && (local.testDate === testDate)) {
          const answers = local.answers || {};
          const answersCount = Object.keys(answers).length;
          const hasProgress = (local.status === "in_progress") || (answersCount > 0) || (local.currentQuestionIndex && local.currentQuestionIndex > 0) || (local.totalTimeSeconds && local.totalTimeSeconds > 5);
          
          if (local.status === "completed") {
            return {
              hasActive: false,
              isCompleted: true,
              source: "local",
              score: local.totalScore || local.score || 0,
              accuracy: local.accuracy || 0,
              data: local
            };
          } else if (hasProgress) {
            return {
              hasActive: true,
              isCompleted: false,
              source: "local",
              answersCount: answersCount,
              currentQuestionIndex: local.currentQuestionIndex || 0,
              totalTimeSeconds: local.totalTimeSeconds || 0,
              answers: answers,
              data: local
            };
          }
        }
      }
    } catch (e) {
      console.warn("Local active attempt check failed", e);
    }

    // 2. Quick check local cache for completed result
    try {
      const resultStr = localStorage.getItem(`csat_test_result_${testDate}`) || localStorage.getItem(`csat_result_${testDate}`) || localStorage.getItem("csat_daily_test_result");
      if (resultStr) {
        const result = JSON.parse(resultStr);
        if (result && (result.testDate === testDate || result.targetDate === testDate || (result.testDate && result.testDate.includes(testDate.slice(-2))))) {
          return {
            hasActive: false,
            isCompleted: true,
            source: "local_result",
            score: result.totalScore || 0,
            accuracy: result.accuracy || 0,
            correctCount: result.correctCount || 0,
            incorrectCount: result.incorrectCount || 0,
            unattemptedCount: result.unattemptedCount || 0,
            data: result
          };
        }
      }
    } catch (e) {
      console.warn("Local result check failed", e);
    }

    // 3. Cloud check from Supabase
    try {
      const cloudAttempt = await restoreProgressFromCloud(testDate);
      if (cloudAttempt) {
        const answers = cloudAttempt.answers || {};
        const answersCount = Object.keys(answers).length;
        const isCompleted = cloudAttempt.status === "completed";
        if (!isCompleted && (answersCount > 0 || (cloudAttempt.current_question_index && cloudAttempt.current_question_index > 0))) {
          return {
            hasActive: true,
            isCompleted: false,
            source: "cloud",
            answersCount: answersCount,
            currentQuestionIndex: cloudAttempt.current_question_index || 0,
            totalTimeSeconds: cloudAttempt.total_time_seconds || 0,
            answers: answers,
            data: cloudAttempt
          };
        } else if (isCompleted) {
          return {
            hasActive: false,
            isCompleted: true,
            source: "cloud",
            score: cloudAttempt.score !== undefined ? cloudAttempt.score : (cloudAttempt.result_payload?.totalScore || 0),
            accuracy: cloudAttempt.accuracy !== undefined ? cloudAttempt.accuracy : (cloudAttempt.result_payload?.accuracy || 0),
            correctCount: cloudAttempt.correct_count || cloudAttempt.result_payload?.correctCount || 0,
            incorrectCount: cloudAttempt.incorrect_count || cloudAttempt.result_payload?.incorrectCount || 0,
            unattemptedCount: cloudAttempt.unattempted_count || cloudAttempt.result_payload?.unattemptedCount || 0,
            data: cloudAttempt
          };
        }
      }
    } catch (e) {
      console.warn("Cloud active attempt check failed", e);
    }

    return { hasActive: false, isCompleted: false };
  }

  /**
   * Clear active attempt for a given date (for fresh restart)
   */
  async function clearActiveAttempt(testDate = getDefaultDate()) {
    try {
      localStorage.removeItem("csat_daily_test_state");
      localStorage.removeItem("csat_active_quiz_state");
      localStorage.removeItem(`csat_active_quiz_state_${testDate}`);
      localStorage.removeItem("csat_daily_test_result");
      localStorage.removeItem(`csat_result_${testDate}`);
      localStorage.removeItem(`csat_test_result_${testDate}`);
    } catch (e) {}

    const candidateName = getCandidateName();
    const recordId = `${candidateName}_${testDate}`;
    try {
      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_ATTEMPTS}?id=eq.${recordId}`;
      await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        }
      });
    } catch (err) {
      console.warn("Could not delete cloud attempt:", err);
    }
  }

  /**
   * Fetch distinct dates available in Supabase daily_questions table
   */
  async function getAvailableDates() {
    try {
      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_QUESTIONS}?select=test_date&order=test_date.desc`;
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        }
      });
      const rows = await response.json();
      if (Array.isArray(rows) && rows.length > 0) {
        const unique = [...new Set(rows.map(r => r.test_date).filter(Boolean))].sort().reverse();
        try {
          localStorage.setItem("csat_available_dates", JSON.stringify(unique));
        } catch (e) {}
        return unique;
      }
    } catch (err) {
      console.warn("Could not query available dates:", err);
    }
    try {
      const cached = localStorage.getItem("csat_available_dates");
      if (cached) return JSON.parse(cached);
    } catch (e) {}
    return ["2026-10-19", "2026-10-18", "2026-10-17", "2026-10-16", "2026-10-15"];
  }

  const DAY_METADATA_MAP = {
    "2026-10-19": {
      mockNum: 19,
      dateTitle: "19 October 2026",
      shortDesc: "10 Curated CSAT Questions across Data Interpretation & Sets, Liquid Replacement, Age Digits Reversal, Factorial Divisibility, Probability & Permutations, Linear Cost Equations, Syllogisms, Direction Sense, Work & Wages Pipes, and Letter-Number Series. (+2.5, -0.83).",
      longTopics: "Includes curated high-yield questions on <strong>Data Interpretation & Set Theory</strong>, <strong>Successive Liquid Replacement & Alligations</strong>, <strong>Digit Reversal & Age Equations</strong>, <strong>Divisibility, Factors & Remainder Theorems</strong>, <strong>Permutations, Combinations & Probability</strong>, <strong>Algebra & Linear Expenditure Constraints</strong>, <strong>Syllogisms & Deductive Venn Logic</strong>, <strong>Orthogonal Direction Sense & Shortest Distance</strong>, <strong>Time and Work, Pipes & Cisterns</strong>, and <strong>Alphanumeric Series Coding-Decoding</strong>."
    },
    "2026-10-18": {
      mockNum: 18,
      dateTitle: "18 October 2026",
      shortDesc: "10 Curated CSAT Questions across Prime Diophantine Equations, Linear Seating Data Sufficiency, Dishonest Dealer Weights, Quadratic Residues mod 4, Simple Interest, Colored Cubes, Escalator Relative Speed, Percentage Invariance, Legendre Factorial Divisibility & Alphabetical Sorting. Follows standard UPSC marking scheme (+2.5, -0.83).",
      longTopics: "Includes curated high-yield questions on <strong>Prime Algebraic Diophantine Equation</strong>, <strong>Linear Seating Arrangement Data Sufficiency</strong>, <strong>Dishonest Dealer False Weights</strong>, <strong>Quadratic Residues & Modulo 4 Invariance</strong>, <strong>Simple Interest Capital Multipliers</strong>, <strong>Cubes & Colored Boundary Intersection</strong>, <strong>Moving Escalator Relative Speed</strong>, <strong>Expenditure Invariance</strong>, <strong>Legendre Formula Factorial Divisibility</strong>, and <strong>Alphabetical Sorting Invariance</strong>."
    },
    "2026-10-17": {
      mockNum: 17,
      dateTitle: "17 October 2026",
      shortDesc: "10 Curated CSAT Questions across Relative Speed, Blood Relations Data Sufficiency, Linear Diophantine Equations, Trailing Zeroes, Clocks & Knights-Knaves Logic. Follows standard UPSC marking scheme (+2.5, -0.83).",
      longTopics: "Includes curated high-yield questions on <strong>Relative Speed & Train Crossings</strong>, <strong>Kinship Gender Data Sufficiency</strong>, <strong>Linear Diophantine Integer Extremization</strong>, <strong>Trailing Zeroes in Factorial Powers</strong>, <strong>Divisibility by 72</strong>, and <strong>Knights & Knaves Logic</strong>."
    },
    "2026-10-16": {
      mockNum: 16,
      dateTitle: "16 October 2026",
      shortDesc: "10 Curated CSAT Questions across Remainder Theorems, Expenditure Invariance, Relative Speed, Circular Tracks, and Calendar Logic.",
      longTopics: "Includes curated high-yield questions on <strong>Binomial Remainder Theorem</strong>, <strong>Expenditure Invariance</strong>, <strong>Orthogonal Relative Motion</strong>, <strong>Circular Track Relative Velocity</strong>, <strong>Calendar Day Leap Invariance</strong>, and <strong>Conditional Syllogism</strong>."
    },
    "2026-10-15": {
      mockNum: 15,
      dateTitle: "15 October 2026",
      shortDesc: "10 Curated CSAT Questions across Percentages, Clocks Angle & Overlap, Coordinate Direction Sense, and Combinatorial Permutations.",
      longTopics: "Includes curated high-yield questions on <strong>Percentage & Expenditure Invariance</strong>, <strong>Clocks Angle & Overlap</strong>, <strong>Coordinate Geometry Direction Sense</strong>, and <strong>Digit Permutations & Divisibility</strong>."
    }
  };

  function getDayMetadata(testDate = getDefaultDate()) {
    if (DAY_METADATA_MAP[testDate]) {
      return DAY_METADATA_MAP[testDate];
    }
    const dayNum = parseInt(testDate.slice(-2), 10) || 19;
    return {
      mockNum: dayNum,
      dateTitle: `${dayNum} October 2026`,
      shortDesc: `10 Curated CSAT Practice Questions adhering strictly to the official UPSC standard marking scheme (+2.5, -0.83).`,
      longTopics: `Curated standard UPSC CSAT Mock Test covering Quantitative Aptitude, Logical Reasoning, and Data Interpretation.`
    };
  }

  return {
    loadDailyQuestions,
    syncProgressToCloud,
    restoreProgressFromCloud,
    checkActiveAttempt,
    clearActiveAttempt,
    getAvailableDates,
    getDayMetadata,
    getDefaultDate,
    getCandidateName,
    setCandidateName,
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  };
})();

if (typeof window !== "undefined") {
  window.CSAT_API = CSAT_API;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CSAT_API;
}

