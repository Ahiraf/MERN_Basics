// As there many repetitive code in HttpRouting.js, we can use functions to avoid this repetition.
const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res)=> {

    const handleReadFile = (statusCode, FileLocation) => { // As this two (status code and Html file name are different for the 4 files(Home, Order, Contact, Error).
        fs.readFile("FileLocation", (err, data) => {
            res.writeHead(statusCode, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }

    if(req.url === "/") {
        handleReadFile(200, "Home.html");
    }
    else if(req.url === "/order") {
        handleReadFile(200, "order.html");
    }
    else if(req.url === "/contact") {
        handleReadFile(200, "contact.html");
    }
    else{
        handleReadFile(404, "error.html");
    }
});

server.listen(PORT, hostName, ()=> {
    console.log(`Server is running at http://${hostName}:${PORT}/`);
});
