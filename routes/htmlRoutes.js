const htmlRoute = require("express").Router();
const path = require("path");

htmlRoute.get("/notes", (req, res) => {
  res.sendfile(path.join(__dirname, "../public/notes.html"));
});

htmlRoute.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "../public/index.html"));
});



module.exports = htmlRoute;