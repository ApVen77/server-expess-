// Dependencies
// We require/import the HTTP module
// fs is a core Node package for reading and writing files


// Set our port to 8080


// Create our server



// We then respond to the client with the HTML page by specifically telling the browser that we are delivering
// an html file.
function renderPage(fileName, res) {
  fs.readFile(__dirname + fileName, function (err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {
  
  // Capture the url the request is made to
  var path = req.url;
  // console.log('current path, path')
  // Depending on the URL, display a different HTML file.
  
  
  // Start our server
 
  
  
}