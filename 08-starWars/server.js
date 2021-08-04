// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

var obiWanKeobi= {
name: "Obi Wan Keobi",
role: "Jedi Master",
age: 1000,
forcePoints: 5000
};

var princessLeia= {
  name: "Princess Leia",
  role: "Jedi",
  age: 500,
  forcePoints: 1000
};
// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
//hey express when someone does a GET request, trigger this behavior//
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

app.get("/obiWanKeobi", function(req, res) {
  res.json(obiWanKeobi); 

  app.get("/princessLeia", function(req, res) {
    res.json(princessLeia);
  });

});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
