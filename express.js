const express = require("express");
const path = require("path");

const app = express();

// Middleware (runs for every request)
app.use(function (req, res, next) {
    console.log("Starting use");
    next();
});

// Home route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "design.html"));
});

// Signup route
app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "signup.html"));
});

// Middleware after routes
app.use(function (req, res, next) {
    console.log("After signup");
    next();
});

// Start server
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
