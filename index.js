// index.js
const express = require("express");
const mongoose = require("mongoose");
const Car = require("./models/Cars");
const app = express();
const port = 3000;
require("dotenv").config();
const mongo_Url = process.env.MONGO_URL;
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(mongo_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("Cars", async (req, res) => {
  const data = req.body;

  const newCar = new Car({
    make: "Nissan",
    model: "Maxima",
    engine: 3.5,
  });

  const savedCar = await newCar.save();
  console.log(savedCar);

  res.json(savedCar);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
