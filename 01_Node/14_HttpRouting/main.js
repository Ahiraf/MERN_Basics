// This means that the file "HttpRouting.js" is being used to run the server. The code in this file creates a simple HTTP server that listens on port 3000 and responds with "Welcome to the server" for any request made to it. 
// It also logs the URL of the request to the console, which can be useful for routing purposes. 
const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res)=> {
    //console.log(req.url); // This will print the Url of the request made to the server from the browser. For example, it I type /about in the browser, it will print "/about" in the terminal. This is useful for routing purposes. We can use this to determine which page the user is trying to access.
    //res.end("Welcome to the server");
    if(req.url === "/") {
        fs.readFile("Home.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/order") {
        fs.readFile("order.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/contact") {
        fs.readFile("contact.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    else{
        fs.readFile("Error.html", (err, data) => {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
});

server.listen(PORT, hostName, ()=> {
    console.log(`Server is running at http://${hostName}:${PORT}/`);
});
