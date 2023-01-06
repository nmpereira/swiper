const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { logger } = require("./helpers/logger");
const { connectDB } = require("./models/db");
const chat = require("./routes/chatRoutes");
const path = require("path");
app.use(logger);
// cors
const cors = require("cors");
app.use(cors());

const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: false,
  secret: process.env.Auth0_secret,
  baseURL: "http://localhost:5000/",
  clientID: process.env.Auth0_clientID,
  issuerBaseURL: "https://100chats.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use(express.static(path.join(__dirname, "../client/build")));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    console.log("Not authenticated");
    res.json({ msg: "Not authenticated" });
  } else {
    // console.log("req.oidc.user", req.oidc.user);

    if (process.env.NODE_ENV === "production") {
      if (req.oidc.isAuthenticated()) {
        console.log("logged in");
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
      }
    } else {
      res.redirect("http://localhost:3000");
    }
  }
});

// is authenticated
app.get("/isAuthenticated", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.json({ msg: "Logged in", isAuthenticated: true });
  } else {
    res.json({ msg: "Logged out", isAuthenticated: false });
  }
});

// // dotenv setup
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library

connectDB();

app.use("/chat", chat);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/userCard", (req, res) => {
  // console.log("req.oidc.user", req.oidc.user);
  if (req.oidc.isAuthenticated()) {
    res.json({
      message: "Showing userCard!",
      name: req.oidc.user.name,
      age: 25,
      bio: "A student at the University of Washington, studying computer science.",
      hobbies: ["reading", "writing", "coding", "hiking", "traveling"],
      status: "Looking for a job",
      location: "Seattle, WA",
      title: "Software Engineer",
    });
  } else {
    res.json({ msg: "Not logged in" });
  }
});
