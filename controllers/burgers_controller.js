//This is section requires the express npm package in this file. 
var express = require("express");
var router = express.Router();
var db = require("../models");
var hbs = require('express-hbs');

// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");
module.exports = function(app) {

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
 db.Burger.findAll({}).then(function(dbBurger) {

    res.json(dbBurger);
  });
 });

app.post("/", function(req, res) {
  // burger.create([
  //   "burger_name", "devoured"
  // ], [
  //   req.body.burger_name, req.body.devoured
  // ], function() {
  //   res.redirect("/");
  // });
   db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(dbBurger) {

    res.json(dbBurger);
  });
});

app.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });
db.Burger.update({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  },{

    where: {
      id: req.body.id
    }
  }).then(function(dbBurger){
    res.json(dbBurger);

  });
});

app.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

//   burger.delete(condition, function() {
//     res.redirect("/");
//   });
// });
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger){
    res.json(dbBurger);
  });
});
};

// Export routes for server.js to use.
// module.exports = router;