// ===============================DEPENDENCIES======================================
const express = require('express');
const path = require("path");
const app = express()
const PORT = 3000


// ===============================Basic Route======================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/april", function(req, res){
    res.redirect('https://www.google.com/')
});

app.get("/contact", function(req, res){
    res.send('This is my Contact Page')
});

app.get("/con", function(req, res){
    res.download(path.join(__dirname, "index.html"))
});

app.get("/hello", function(req, res){
    res.sendStatus(200)
});

app.get("/json", function(req, res){
    res.json("This is my name")
});


// =====================================Start Server==========================

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })

