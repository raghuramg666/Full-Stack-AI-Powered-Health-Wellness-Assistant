import React, { useState } from "react";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleMoodSubmit = async () => {
    if (!mood) {
      alert("Please select your mood!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/mood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mood }),
      });

      const data = await response.json();
      console.log("Mood API Response:", data); // Debug response
      setSuggestion(data.suggestion || "No suggestion available.");
    } catch (error) {
      console.error("Mood Tracker Error:", error); // Debug errors
      setSuggestion("Error fetching suggestion. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        style={{ marginBottom: "10px" }}
      >
        <option value="">Select Your Mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="neutral">Neutral</option>
        <option value="stressed">Stressed</option>
      </select>
      <button onClick={handleMoodSubmit}>Submit</button>
      {suggestion && (
        <div style={{ marginTop: "10px", fontStyle: "italic" }}>
          Suggestion: {suggestion}
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
