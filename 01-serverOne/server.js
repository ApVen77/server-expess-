// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {


console.log("request made!");
  // Send the below string to the client when the user visits the PORT URL
 response.end(`It works! Path hit: ${request.url}`);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
