const express = require("express");
const cors = require("cors");
require("dotenv").config();

const homestayRoutes = require("./routes/homestayRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/homestays", homestayRoutes);

app.get("/", (req, res) => {
  res.send("WanderNest Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);