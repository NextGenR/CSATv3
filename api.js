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

  // Get or initialize persistent candidate anonymous ID
  function getCandidateId() {
    let candidateId = localStorage.getItem("csat_candidate_id");
    if (!candidateId) {
      candidateId = "candidate_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("csat_candidate_id", candidateId);
    }
    return candidateId;
  }

  /**
   * Fetch daily questions from Supabase REST API for a specific date
   * Defaults to 15th October 2026
   */
  async function loadDailyQuestions(testDate = "2026-10-16") {
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
        return transformFallback(CSAT_QUESTIONS);
      }

      console.log(`Successfully fetched ${rows.length} questions from Supabase!`);
      return normalizeSupabaseRows(rows);
    } catch (err) {
      console.warn("Error fetching questions from Supabase. Using fallback mock data:", err);
      return transformFallback(CSAT_QUESTIONS);
    }
  }

  /**
   * Sync active quiz progress to Supabase
   * Saves answers, timers, question index, and review flags
   */
  async function syncProgressToCloud(progressPayload) {
    const candidateId = getCandidateId();
    const testDate = progressPayload.testDate || "2026-10-15";
    const recordId = `${candidateId}_${testDate}`;

    const body = {
      id: recordId,
      test_date: testDate,
      user_identifier: candidateId,
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
      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_ATTEMPTS}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify(body)
      });
      return response.ok;
    } catch (err) {
      console.warn("Cloud sync failed (offline / table pending):", err);
      return false;
    }
  }

  /**
   * Restore user progress from Supabase if local cache was cleared
   */
  async function restoreProgressFromCloud(testDate = "2026-10-15") {
    const candidateId = getCandidateId();
    const recordId = `${candidateId}_${testDate}`;

    try {
      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_ATTEMPTS}?id=eq.${recordId}&select=*`;
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

  return {
    loadDailyQuestions,
    syncProgressToCloud,
    restoreProgressFromCloud,
    getCandidateId,
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  };
})();
