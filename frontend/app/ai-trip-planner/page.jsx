"use client";

import { useState } from "react";

export default function AITripPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");
  const [travelStyle, setTravelStyle] = useState("Budget");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const response = await fetch("http://localhost:5000/api/ai/itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destination,
          days,
          budget,
          interests,
          travelStyle,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setResult(data.itinerary);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        🤖 AI Trip Planner
      </h1>

      <div className="space-y-4">

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3"
          type="number"
          placeholder="Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3"
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />

        <select
          className="w-full border rounded-lg p-3"
          value={travelStyle}
          onChange={(e) => setTravelStyle(e.target.value)}
        >
          <option>Budget</option>
          <option>Luxury</option>
          <option>Backpacking</option>
          <option>Family</option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate Trip"}
        </button>

      </div>

      {error && (
        <p className="text-red-600 mt-6">
          {error}
        </p>
      )}
    
    {loading && (
  <p className="mt-4 text-blue-600 font-semibold">
    🤖 AI is generating your itinerary...
  </p>
)}

      {result && (
        <div className="mt-8 p-6 border rounded-lg">

          <h2 className="text-2xl font-bold mb-4">
            {result.tripTitle}
          </h2>

          {result.itinerary.map((day) => (
            <div key={day.day} className="mb-4">
              <h3 className="font-semibold">
                Day {day.day}
              </h3>

              <ul className="list-disc ml-6">
                {day.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3 className="font-semibold mt-4">
            Budget
          </h3>
          <p>{result.budgetEstimate}</p>

          <h3 className="font-semibold mt-4">
            Packing Tips
          </h3>
          <ul className="list-disc ml-6">
            {result.packingTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>

          <h3 className="font-semibold mt-4">
            Local Food
          </h3>
          <ul className="list-disc ml-6">
            {result.localFood.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>

          <h3 className="font-semibold mt-4">
            Travel Tips
          </h3>
          <ul className="list-disc ml-6">
            {result.travelTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}