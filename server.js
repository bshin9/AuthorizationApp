require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
let uri = "";

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI; // connection string for Atlas here
} else {
  uri = process.env.ATLAS_URI; // connection string for localhost mongo here
}

// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live");
});

// register api catalogue
const products = require("./routes/products");
const contacts = require("./routes/contacts");

app.use("/products", products);
app.use("/contacts", contacts);

// Creating live connection to reactjs app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
