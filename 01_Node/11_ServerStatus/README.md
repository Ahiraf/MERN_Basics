Node.js HTTP Server: Basic Implementation
This project demonstrates how to create a simple web server using the built-in http module in Node.js. It covers setting up a hostname, a port, and sending HTML responses to a client.

🛠 Core Concepts
1. The http Module
Unlike external packages, the http module is built-in to Node.js. You do not need to run npm install to use it; you simply require it at the top of your script.

2. Creating the Server
The http.createServer() method turns your computer into an HTTP server. It takes a callback function with two critical objects:

req (Request): Information coming from the user/client.

res (Response): Information the server sends back to the user.

📝 Code Breakdown
Server Configuration
We define where the server will live:

Hostname: 127.0.0.1 (This is the "Loopback" address, meaning the local machine).

Port: 3000 (A common development port).

Sending the Response
To send data back to the browser, we follow these steps:

res.writeHead(202, ...): Sets the HTTP status code (202 Accepted) and the Content-Type. Using text/html tells the browser to render the text as HTML.

res.write(): Sends the actual body content (in this case, headers like <h1> and <h2>).

res.end(): Signals to the server that the response headers and body have been sent; the connection is then finalized.

🚀 Execution Steps
Start the Server:
Open your terminal and run:

Bash
node yourFileName.js
(Replace yourFileName.js with the actual name of your file).

Check the Output:
You should see the message: Server is running Successfully at http://127.0.0.1:3000.

View in Browser:
Open your web browser and navigate to http://127.0.0.1:3000 to see the rendered HTML.



🔍 Quick Summary
Module: http

Method: createServer

Listener: server.listen(port, hostname)

Response Type: text/html
