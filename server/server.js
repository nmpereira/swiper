const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { logger } = require("./helpers/logger");
const { connectDB } = require("./models/db");
const chat = require("./routes/chatRoutes");

// // dotenv setup
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library

app.use(logger);
connectDB();

app.use("/chat", chat);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/userCard", (req, res) => {
  res.json({
    message: "Showing userCard!",
    name: "Sara",
    age: 25,
    bio: "A student at the University of Washington, studying computer science.",
    hobbies: ["reading", "writing", "coding", "hiking", "traveling"],
    status: "Looking for a job",
    location: "Seattle, WA",
    title: "Software Engineer",
  });
});
