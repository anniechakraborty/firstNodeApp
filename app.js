// App Goal : Creating a server that listens to a client request.
// Step 1 : Creating sever and assign it to listen on a certain port in our machine

// We are using the http module in node.js

const http = require('http');
// We now use the createServer method (a property of the http object we created )to create the server.
const server = http.createServer();
// server is the new object we have created which is an instance of the Server class

// to assign the server to listen to a certain port we need to call the listen() within the server object
const port = 5050;
server.listen(port, ()=>{
    // everything in here is executed
    console.log(`server listening on ${port}`);
    console.log(`server listening on ${port}`);
    console.log(`server listening on ${port}`);
});
// listen accepts to parameters => the port number and a callback function 
// which runs when server starts listening to port number


// to run all of this ... migrate to this file location in cmd and type :
// node app.js (enter)
// app.js is the entry point of our server application