const express = require("express");
const connectDB = require("./db");

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(3000, () => console.log("Server Started"));
