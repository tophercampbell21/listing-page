const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { log } = require("console");
const app = express();

const PORT = process.env.PORT || 5000;

// *** MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
