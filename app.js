require("dotenv").config();
require("./config/dbConfig");
require("express-async-errors");

const morgan = require("morgan");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

//routes
const sallaryRouters = require("./routes/sallery");
const middleware = require("./utils/middleware");


//middlewears
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", sallaryRouters);
//errroHandelers
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER IS WORKING AT PORT ${PORT}...`);
});
