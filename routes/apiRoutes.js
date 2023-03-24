const apiRoute = require('express').Router();

const { readFromFile, readAndAppend } = require("../db/hold");
// /notes GET POST

// localhost:3001/api/notes


apiRoute.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

apiRoute.post("/notes", (req, res) => {
  const newNote = {
    title: req.body.title, 
    text: req.body.text
  }

  readAndAppend(newNote, './db/db.json')
  res.json(newNote)
});

module.exports = apiRoute;

