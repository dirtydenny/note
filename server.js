const express = require('express');
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const path = require("path");
const app = express();
const PORT = process.env.port || 3001;

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//set server to listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
