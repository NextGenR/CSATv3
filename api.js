/**
 * Supabase API Service for CSAT Daily 10 Questions
 * Direct integration with Supabase REST API
 */

const CSAT_API = (function () {
  const SUPABASE_URL = "https://wrzidtmqwjbnaimqnkuz.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyemlkdG1xd2pibmFpbXFua3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDc2NzgsImV4cCI6MjEwNzcyMzY3OH0.jCZSo0UPPa2eG6rKUBTwfGuLTvh3SjO_cNr9wzCoqYM";
  const TABLE_NAME = "daily_questions";

  /**
   * Fetch daily questions from Supabase REST API
   * Falls back gracefully to CSAT_QUESTIONS in csat_data.js if offline or table empty
   */
  async function loadDailyQuestions(testDate = "2026-10-16") {
    try {
      const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=*&order=question_number.asc`;
      
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        console.warn(`Supabase API responded with status ${response.status}. Using fallback questions.`);
        return transformFallback(CSAT_QUESTIONS);
      }

      const rows = await response.json();
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
   * Normalize Supabase DB row format into standard app question model
   */
  function normalizeSupabaseRows(rows) {
    return rows.map((row, idx) => {
      // Options can be an array ["opt1", "opt2", "opt3", "opt4"] or object
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
          statement: row.question || "", // Hindi fallback to statement or English
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
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  };
})();
