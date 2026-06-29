const express = require("express");

const router = express.Router();

const {
  getAllHomestays,
  getHomestayById,
  addHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
} = require("../controllers/homestayController");

router.get("/", getAllHomestays);

router.get("/search", searchHomestays);

router.get("/:id", getHomestayById);

router.post("/", addHomestay);

router.put("/:id", updateHomestay);

router.delete("/:id", deleteHomestay);

module.exports = router;