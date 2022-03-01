// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Ports
//=============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Movie Characters (DATA) (an array of objects)
// =============================================================
var characters = [
  {
    routeName: "cady",
    name: "Cady",
    role: "New Girl",
    age: 17,
    popularityPoints: 1000
  },
  {
    routeName: "karen",
    name: "Karen",
    role: "Dumb Girl",
    age: 17,
    popularityPoints: 1000
  },
  {
    routeName: "regina",
    name: "Regina George",
    role: "Head Mean Girl",
    age: 18,
    popularityPoints: 1200
  },
  {
    routeName: "gret",
    name: "Gretchen Weiner",
    role: "The Follower",
    age: 17,
    popularityPoints: 1350
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the  Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen == characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);
  characters.pop(newCharacter)
  res.send(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
