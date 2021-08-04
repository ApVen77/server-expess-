// Dependencies
// =============================================================

var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 

// Movie  Characters (DATA)
// =============================================================

var characters = [ 
    {
        routeName: "cher",
        name: "cher",
        role: "rich girl",
        age: 16,
        superPower: "rich girl"


    },

    {
        routeName: "dion",
        name: "dion",
        role: "token girl",
        age: 17,
        superPower: "rich girl's friend"


    },

    {
        routeName: "elliot",
        name: "elliot",
        role: "hot guy",
        age: 17,
        superPower: "big man on campus"


    }

]


// Routes
// =============================================================
// Basic route that sends the user first to the Pages

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});


app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});



// Displays all characters





// Displays a single character, or returns false






// Create New Characters - takes in JSON input

// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware




// Using a RegEx Pattern to remove spaces from newCharacter
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html






// Starts the server to begin listening
// =============================================================
