const express = require("express");
const connectDB = require("./db");
// cors — a Node.js package that allows cross-origin resource sharing
const cors = require("cors");
require("dotenv").config();

const app = express();
// Connect to database
connectDB();

app.use(cors());
app.use(express.json());

// Log to confirm API running on root
app.get("/", (req, res) => {
  res.send("API is running...");
});

const noteRouter = require("./routes/noteRoutes");
app.use("/notes", noteRouter);

const PORT = process.env.PORT;
// Start Express server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
