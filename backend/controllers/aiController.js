const { generateTripPlan } = require("../services/geminiService");

const generateItinerary = async (req, res) => {
  try {
    const {
      destination,
      days,
      budget,
      interests,
      travelStyle,
    } = req.body;

    // Basic validation
    if (!destination || !days || !budget || !interests || !travelStyle) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const itinerary = await generateTripPlan({
      destination,
      days,
      budget,
      interests,
      travelStyle,
    });

    return res.status(200).json({
      success: true,
      itinerary,
    });

  } catch (error) {
    console.error("AI Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate itinerary.",
      error: error.message,
    });
  }
};

module.exports = {
  generateItinerary,
};