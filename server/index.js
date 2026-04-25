const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});