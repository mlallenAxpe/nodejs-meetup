const express = require("express");
const mongoose = require('mongoose');
const httpStatus = require('http-status');

const ApiError = require('./utils/ApiError')
const routes = require('./routes')

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/database')

app.use(express.json())
app.use('/', routes)
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});