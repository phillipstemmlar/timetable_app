require("dotenv").config();
const express = require("express");

const {
  PORT = 5000,
  DB_STRING,
  SECRET = "my secret session string",
} = process.env;

const app = express();

app.get("/", (req, res) => {
  res.sendFile("Hello World!");
});

app.listen(PORT, console.log(`Server started at https://localhost:${PORT}`));
