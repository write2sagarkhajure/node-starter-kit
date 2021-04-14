const createError = require("http-errors");
const express = require("express");
const cors = require('cors');
require('dotenv').config();

const apiRouter = require('./routes/api_route');

const {
  API_BASE_URL: api_base_url
} = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db connection
require('./db');

app.use(api_base_url, apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// global error handler
if (process.env.NODE_ENV === "production") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`Error occurred while handling the request: ${err.message}`);
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.send(err.message);
  });
}

module.exports = app;
