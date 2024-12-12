const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  make: { type: String },
  model: { type: String },
  engine: { type: Number },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
