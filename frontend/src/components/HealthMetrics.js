import React, { useState } from "react";
import "./HealthMetrics.css";

const HealthMetrics = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    chronic_diseases: "",
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateMetrics = async () => {
    try {
      const response = await fetch("http://localhost:5000/health-metrics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: parseInt(formData.age),
          gender: formData.gender,
          height: parseFloat(formData.height),
          weight: parseFloat(formData.weight),
          chronic_diseases: formData.chronic_diseases,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Health Metrics Error:", error);
      setResult({ error: "Failed to calculate health metrics. Try again later." });
    }
  };

  return (
    <div className="healthmetrics-container">
      <h2>Health Metrics</h2>
      <div className="healthmetrics-form">
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter your age"
        />
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          placeholder="Height (cm)"
        />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Weight (kg)"
        />
        <input
          type="text"
          name="chronic_diseases"
          value={formData.chronic_diseases}
          onChange={handleInputChange}
          placeholder="Chronic diseases (if any)"
        />
        <button onClick={calculateMetrics}>Calculate</button>
      </div>

      {result && (
        <div className="healthmetrics-result">
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p><strong>BMI:</strong> {result.bmi} ({result.bmi_category})</p>
              <p><strong>Suggestions:</strong></p>
              <ul>
                {result.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HealthMetrics;

