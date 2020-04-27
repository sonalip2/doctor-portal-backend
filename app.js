const createError = require("http-errors");
const cors = require("cors");
const express = require("express");

const indexRouter = require("./routes/index");
const patientsRouter = require("./routes/patients");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", indexRouter);
app.use("/patients", patientsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log("err", err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error paƒge
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
