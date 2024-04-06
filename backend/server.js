const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const userRoutes = require("./routers/userRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// api routes
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`connected to database successfully`);
    app.listen(PORT, () => {
      console.log(`server is up and running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`error connecting to database: ${err}`);
  });
