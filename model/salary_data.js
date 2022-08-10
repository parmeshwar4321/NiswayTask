const mongoose = require("mongoose");
const schema = mongoose.Schema;
const salarySchema = new mongoose.Schema({
  job_title: {
    type: String,
  },
  age: {
    type: String,
  },
  industry: {
    type: String,
  },
  salary: {
    type: String,
  },
  currency: {
    type: String,
  },
  location: {
    type: String,
  },
  experience: {
    type: String,
  },
  time_stamp: {
    type: Date,
    default: new Date(),
  },
});

const sallary = mongoose.model("salary_data", salarySchema,"salary_data");
module.exports = sallary;
