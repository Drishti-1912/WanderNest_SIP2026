const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash",
});

const generateTripPlan = async (data) => {
  const prompt = `
You are an expert travel planner.

Generate a travel itinerary in VALID JSON ONLY.

IMPORTANT RULES:
- Return ONLY valid JSON.
- Do NOT write any explanation.
- Do NOT use markdown.
- Do NOT wrap the response inside \`\`\`json.
- Keep the itinerary practical and budget-friendly.

Return JSON in this exact format:

{
  "tripTitle": "",
  "itinerary": [
    {
      "day": 1,
      "activities": []
    }
  ],
  "budgetEstimate": "",
  "packingTips": [],
  "localFood": [],
  "travelTips": []
}

User Details:

Destination: ${data.destination}
Days: ${data.days}
Budget: ₹${data.budget}
Interests: ${data.interests}
Travel Style: ${data.travelStyle}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  // Remove markdown if Gemini accidentally returns it
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Gemini returned invalid JSON:\n" + cleaned);
  }
};

module.exports = {
  generateTripPlan,
};