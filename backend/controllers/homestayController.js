const prisma = require("../data/prismaClient");

// GET all
const getAllHomestays = async (req, res) => {
  try {
    const homestays = await prisma.homestay.findMany();

    res.status(200).json(homestays);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET by ID
const getHomestayById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const homestay = await prisma.homestay.findUnique({
      where: { id },
    });

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    res.status(200).json(homestay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST
const addHomestay = async (req, res) => {
  try {
    const homestay = await prisma.homestay.create({
      data: req.body,
    });

    res.status(201).json(homestay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT
const updateHomestay = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const homestay = await prisma.homestay.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json(homestay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteHomestay = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.homestay.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Homestay deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH
// SEARCH
const searchHomestays = async (req, res) => {
  try {
    const location = req.query.location;

    const homestays = await prisma.homestay.findMany({
      where: {
        location: {
          contains: location,
          mode: "insensitive",
        },
      },
    });

    res.status(200).json(homestays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllHomestays,
  getHomestayById,
  addHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
};