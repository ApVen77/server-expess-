// Require/import the HTTP module
const http= require('https'); 
// Define a port to listen for incoming requests
const PORT= 8080; 

// Create a generic function to handle requests and responses
// Pass the handleRequest function to empower it with functionality.
  function handleRequest(request, response) {
    console.log("Request Made!");
    response.end(`It Works! Path hit: ${request.url}`); 
  }
//Send the string to the client when the user visits the PORT url 


// Use the Node HTTP package to create our server.
const server= http.createServer(handleRequest);


// Start our server so that it can begin listening to client requests.
server.listen(PORT, function(){
  console.log("Server listening on: http://localhost: " + PORT);
})
//localhost this domain name for the web 
//PORT # gateway to our computer 

  // Log (server-side) when our server has started
  

  
