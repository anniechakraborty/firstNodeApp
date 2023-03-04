// App Goal : Creating a server that listens to a client request.
// Step 1 : Creating sever and assign it to listen on a certain port in our machine

// We are using the http module in node.js

const http = require('http');
// We now use the createServer method (a property of the http object we created )to create the server.

// ----------------------------------------------------------------
// an example of error handling
// suppose we face errors while DB connection and we need to exit the current process
// now for simplicity's sake we are using a boolean variable
const dbConnection = false;
if(!dbConnection){
    // process is a global object which we can use to end the current process
    // whatever number we pass to the exit function OTHER THAN 0, 
    // inidcates that the process ended due to some error and so we cannot restart the app from cmd
    process.exit(1);
    // instead of 1 if we pass 0 then after the process ends, we can restart it from our cmd as
    // as 0 indicates that the process exited successfully with no errors
}

// dbConnection = true;
// if(!dbConnection){
//     process.exit(1);
// }

// ----------------------------------------------------------------

const server = http.createServer(
    // for response, we need to pass a callback funtion as an argument to createServer()
    // this callback function expects two arguments - the client request and the "immature" response 
    // whose maturation will be done
    (requests, responses)=>{
        // the response object has a function called end() which will do two tasks :
        // 1. end the hanging state
        // 2. send something to our client (for example : here, 'done' string)
        // responses.end('done');


        // we can also send HTML code
        // responses.end(
        //     `<html>
        //         <head>
        //             <title>First node app</title>
        //         </head>
        //         <body>
        //             <h1>Hello world</h1>
        //         </body>
        //     </html>`
        // );

        // using switch cases :
        switch(requests.url){
            case '/' : 
            case 'http://localhost:5050':
            case '/home' :
            responses.end(
                `<html>
                    <head>
                        <title>First node app</title>
                    </head>
                    <body>
                        <h1>Hello world</h1>
                        <p> This is the home page </p>
                    </body>
                </html>`
            );
            break;
            case '/admin':
                responses.end('welcome to the admin page');
                break;
            case '/user':
                responses.end('welcome to the user page');
                break;
            default :
                responses.end('page does not exist');
                break;
        }
    }
);
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
// with every change in code, we need to restart our process