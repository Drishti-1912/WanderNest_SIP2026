const express = require("express");
const { generateItinerary } = require("../controllers/aiController");

const router = express.Router();

router.post("/itinerary", generateItinerary);

module.exports = router;