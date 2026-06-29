const homestays = require("../data/homestays");

// GET all
const getAllHomestays = (req, res) => {
  res.status(200).json(homestays);
};

// GET by ID
const getHomestayById = (req, res) => {
  const id = Number(req.params.id);

  const homestay = homestays.find((h) => h.id === id);

  if (!homestay) {
    return res.status(404).json({ message: "Homestay not found" });
  }

  res.status(200).json(homestay);
};

// POST
const addHomestay = (req, res) => {
  const newHomestay = {
    id: homestays.length + 1,
    ...req.body,
  };

  homestays.push(newHomestay);

  res.status(201).json(newHomestay);
};

// PUT
const updateHomestay = (req, res) => {
  const id = Number(req.params.id);

  const homestay = homestays.find((h) => h.id === id);

  if (!homestay) {
    return res.status(404).json({ message: "Homestay not found" });
  }

  Object.assign(homestay, req.body);

  res.status(200).json(homestay);
};

// DELETE
const deleteHomestay = (req, res) => {
  const id = Number(req.params.id);

  const index = homestays.findIndex((h) => h.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Homestay not found" });
  }

  homestays.splice(index, 1);

  res.status(200).json({
    message: "Homestay deleted successfully",
  });
};

// SEARCH
const searchHomestays = (req, res) => {
  const location = req.query.location?.toLowerCase();

  const result = homestays.filter((h) =>
    h.location.toLowerCase().includes(location)
  );

  res.status(200).json(result);
};

module.exports = {
  getAllHomestays,
  getHomestayById,
  addHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
};