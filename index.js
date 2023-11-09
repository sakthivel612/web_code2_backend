const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const UserRoutes = require("./routes/user.routes");

const PORT = 7000;
// middleware
app.use(express.json());

// mongoose connect
const Db_Url =
  "mongodb+srv://Sakthivel:Sakthivel612@cluster0.e915zlr.mongodb.net/webcode_baclend_db?retryWrites=true&w=majority";

mongoose.connect(Db_Url);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", UserRoutes);

// api
app.get("/", (req, res) => {
  res.send("hey there i am working here");
});

//  server listen
app.listen(PORT, () => console.log(`server start ${PORT}`));
