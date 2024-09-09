const express = require("express");


require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

import grades from "./routes/grades.mjs";
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades);

// const connectToDB = require("./config/connectToDb")

// view engine
const ejs = require("ejs");

app.listen("3000", () => {
    console.log("server running")
});
// Telling our Express server the view engine that it'll be using and the type of files to associate
app.set('view engine', 'ejs')
// where to find the views
app.set('views', './views')
// where to find the static files
app.use(express.static("./styles"));

// route for base folder
app.get('/', (req, res) => {
    res.send("this is the base folder")
  });
  

// 404 Middleware
app.use((req, res) => {
    res.status(404).send("Resource Not Found");  // really basic error handling
  });

  app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });
  
// tell the server to listen for data requests
  app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
  });
  