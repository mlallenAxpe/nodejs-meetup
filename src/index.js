const express = require("express");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/database')

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});