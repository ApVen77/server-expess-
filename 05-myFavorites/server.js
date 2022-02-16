// Require dependencies
var fs = require("fs")
var http = require("http");

var PORT = 8080;

// Set our port to 8080
var server = http.createServer(handleRequest);

  // Capture the url the request is made to

// function renderPage(fileName, res) {
//   fs.readFile(__dirname + fileName, function (err, data) {
//     if (err) throw err;
//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }
  // Start our server
  server.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
  });

  // Create a function which handles incoming requests and sends responses
  function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
    // console.log('current path, path')
    // Depending on the URL, display a different HTML file.
    switch (path) {

      case "/frameworks": return fs.readFile(__dirname + "/frameworks.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(data);
      })
      case "/food": return fs.readFile(__dirname + "/food.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(data);
      })
      case "/movies": return fs.readFile(__dirname + "/movies.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(data);
      });

      default:
        return renderPage("/index.html", res);
        return fs.readFile(__dirname + "/index.html", function (err, data) {
          if (err) throw err;
          // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
          // an html file.
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
    }
  }