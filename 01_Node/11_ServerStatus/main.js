const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => { 
    res.writeHead(202, {'Content-Type': 'text/html'}); // This is used to set the status code and content type of the response. or text/plain can also be used if we want to show plain text.
    res.write("<h1> Hello. I am Fariha </h1>"); // This is html text .
    res.write("<h2> I love Competitive Programming </h2>");
    res.write("<h3> I love cycling </h3>");
    res.end();
});
myServer.listen(port, hostname, () => {
    console.log(`Server is running Successfully at http://${hostname}:${port}`);
}); 
