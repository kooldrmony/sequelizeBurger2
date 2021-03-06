//This section requires all of the packages needed in this file. 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var hbs = require('express-hbs');

var PORT = process.env.PORT || 3000;

var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/burgers_controller.js")(app);

// app.use("/api/burgers", routes);

db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
  });
});
