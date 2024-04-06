const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");

const userRoutes = require("./routers/userRoutes");

__dirname = path.resolve();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// api routes
app.use("/api/v1/users", userRoutes);

// for deploy stuff
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5500;
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
