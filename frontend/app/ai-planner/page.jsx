"use client";

import { useState } from "react";

import styles from "./page.module.css";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import Button from "../../components/ui/Button";

import { generateItinerary } from "../../services/api";

export default function AIPlanner() {
  const [form, setForm] = useState({
    destination: "",
    days: "2",
    budget: "₹5,000 - ₹10,000",
    interests: "",
    travelStyle: "Adventure",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
    if (
      !form.destination ||
      !form.days ||
      !form.budget ||
      !form.interests ||
      !form.travelStyle
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult("");

      const response = await generateItinerary(form);
      console.log(response);
      if (response.success) {
        setResult(response.itinerary);
      } else {
        setError(response.message);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate itinerary.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.content}>
        <Topbar />

        <div className={styles.header}>
          <h1>🤖 AI Travel Planner</h1>
          <p>
            Tell us your preferences and let AI create your perfect itinerary.
          </p>
        </div>

        <div className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label>Destination</label>

              <input
                type="text"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="e.g. Kasol"
              />
            </div>

            <div className={styles.field}>
              <label>Budget</label>

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
              >
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹20,000</option>
                <option>₹20,000+</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Duration</label>

              <select
                name="days"
                value={form.days}
                onChange={handleChange}
              >
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Travel Style</label>

              <select
                name="travelStyle"
                value={form.travelStyle}
                onChange={handleChange}
              >
                <option>Adventure</option>
                <option>Relaxation</option>
                <option>Nature</option>
                <option>Photography</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Interests</label>

              <input
                type="text"
                name="interests"
                value={form.interests}
                onChange={handleChange}
                placeholder="Trekking, Cafes, Nature"
              />
            </div>
          </div>

          <div className={styles.button}>
            <Button
              text={loading ? "Generating..." : "Generate AI Itinerary"}
              onClick={handleGenerate}
            />
          </div>
        </div>

        {error && (
          <div style={{ color: "red", marginTop: "20px" }}>
            {error}
          </div>
        )}

        {result && (
  <div className={styles.result}>
    <h2>{result.tripTitle}</h2>

    <div className={styles.dayCard}>
      <h3>Itinerary</h3>

      {result.itinerary?.map((day, index) => (
  <div
    key={index}
    style={{
      marginBottom: "20px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
    }}
  >
    <h4>{day.day}</h4>

    <ul>
      {day.activities?.map((activity, i) => (
        <li key={i}>{activity}</li>
      ))}
    </ul>
  </div>
))}

      <h3>Budget Estimate</h3>
      <p>{result.budgetEstimate}</p>

      <h3>Packing Tips</h3>
      <ul>
        {result.packingTips?.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      <h3>Local Food</h3>
      <ul>
        {result.localFood?.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <h3>Travel Tips</h3>
      <ul>
        {result.travelTips?.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  </div>
)}
      </main>
    </div>
  );
}