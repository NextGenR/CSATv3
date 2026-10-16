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
    if (typeof is18thOctUnlocked === 'function' && is18thOctUnlocked()) {
      return "2026-10-18";
    }
    return "2026-10-17";
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
      
      // If no rows found for exact date, fallback to any 10 available questions in the table
      if (!Array.isArray(rows) || rows.length === 0) {
        endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_QUESTIONS}?select=*&order=question_number.asc&limit=10`;
        response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json"
          }
        });
        rows = await response.json();
      }

      if (!Array.isArray(rows) || rows.length === 0) {
        console.warn("Supabase returned empty question list. Using fallback mock questions.");
        const fallbackSet = (typeof getCSATQuestions === 'function') ? getCSATQuestions(testDate) : CSAT_QUESTIONS;
        return transformFallback(fallbackSet);
      }

      console.log(`Successfully fetched ${rows.length} questions from Supabase!`);
      return normalizeSupabaseRows(rows);
    } catch (err) {
      console.warn("Error fetching questions from Supabase. Using fallback mock data:", err);
      const fallbackSet = (typeof getCSATQuestions === 'function') ? getCSATQuestions(testDate) : CSAT_QUESTIONS;
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
    return rows.map((row, idx) => {
      let opts = { A: "", B: "", C: "", D: "" };
      if (Array.isArray(row.options)) {
        opts.A = row.options[0] || "";
        opts.B = row.options[1] || "";
        opts.C = row.options[2] || "";
        opts.D = row.options[3] || "";
      } else if (typeof row.options === "object" && row.options !== null) {
        opts = row.options;
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
    // 1. Quick check local cache for in-progress attempt (supporting both CSAT_STORAGE_KEY & fallback)
    try {
      const localStr = localStorage.getItem("csat_daily_test_state") || localStorage.getItem("csat_active_quiz_state");
      if (localStr) {
        const local = JSON.parse(localStr);
        if (local && (local.testDate === testDate || !local.testDate)) {
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
      const resultStr = localStorage.getItem(`csat_result_${testDate}`) || localStorage.getItem("csat_daily_test_result");
      if (resultStr) {
        const result = JSON.parse(resultStr);
        if (result && (result.targetDate === testDate || !result.targetDate || result.testDate?.includes(testDate.slice(8)))) {
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
      localStorage.removeItem("csat_daily_test_result");
      localStorage.removeItem(`csat_result_${testDate}`);
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

  return {
    loadDailyQuestions,
    syncProgressToCloud,
    restoreProgressFromCloud,
    checkActiveAttempt,
    clearActiveAttempt,
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

