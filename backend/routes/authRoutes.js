const express = require("express");
const passport = require("../config/passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const verifyToken = require("../middleware/verifyToken");
const authLimiter = require("../middleware/rateLimiter");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidation");

// ================= REGISTER =================
router.post(
  "/register",
  authLimiter,
  registerValidation,
  registerUser
);

// ================= LOGIN =================
router.post(
  "/login",
  authLimiter,
  loginValidation,
  loginUser
);

// ================= PROTECTED PROFILE =================
router.get(
  "/profile",
  verifyToken,
  async (req, res) => {
    res.status(200).json({
      success: true,
      message: "Protected Route Accessed Successfully",
      user: req.user,
    });
  }
);

// ================= CURRENT USER =================
router.get(
  "/me",
  verifyToken,
  async (req, res) => {
    res.status(200).json({
      success: true,
      message: "Current User Details",
      user: req.user,
    });
  }
);

// ================= GOOGLE LOGIN =================
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// ================= GOOGLE CALLBACK =================
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user.id,
        email: req.user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.redirect(
      `http://localhost:3000/login?token=${token}`
    );
  }
);

module.exports = router;