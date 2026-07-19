# Week 7 - AI Prompt Log

## Prompt 1

### Prompt

Generate a travel itinerary for the given destination.

### Example Input

Destination: Manali
Days: 3
Budget: 15000

### Output

Returned a generic itinerary.

### Observation

The response lacked detailed recommendations.

---

## Prompt 2

### Prompt

You are an expert travel planner.

Generate:
- Day-wise itinerary
- Budget estimate
- Packing tips
- Local food
- Travel tips

### Observation

Much more structured and useful.

---

## Prompt 3 (Best)

### Prompt

You are an expert travel planner.

Return ONLY valid JSON.

Include:
- tripTitle
- itinerary
- budgetEstimate
- packingTips
- localFood
- travelTips

### Observation

Best output because it returned structured JSON, making it easy to display in the frontend.

### System Role

Expert AI Travel Planner