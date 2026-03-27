const http = require('http');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res)=> {
    res.end("Welcome to the server");
});

server.listen(PORT, hostName, ()=> {
    console.log(`Server is running at http://${hostName}:${PORT}/`);
});


// Now if I edit anything it will not appear on the browser until I stop the server using Ctrl + C and start it again. 
// To avoid this or every time stopping and starting the server, we can use an external package or module called "nodemon". It will automatically restart the server whenever it detects any changes in the code. 
// To install nodemon, the comman is : npm install nodemon
// Now in the package.json file, we can see this nodemon in the dependencies.

// Now in the package.json file's "scripts" section, we can change the start script to use nodemon. I am changing it to "start": "nodemon nodemon.js"

// Finally if I edit the respond from "Welcome to the server" to "Welcome" and after that I relode the browser, I can see the changes. I don't need to stop and start the server every time I make changes in the code.
