const http = require('http');

//console.log(http);

/*
http.createServer((req, res) => { // req: request, res: response
    res.end("Hello. I am your first Server"); // end() method is used to send the response to the client and end the connection
}).listen(3000); // listen() method is used to start the server and listen for incoming requests on the specified port (3000 in this case)

//At this point go to your browser and type localhost: 3000 and this will display the message.
*/
 



/*
// or this can be done using separate varialbes as well like this: 
const port = 3000;
const myServer = http.createServer((req, res) => { 
    res.end("Hello. I am your first Server"); 
});
myServer.listen(port, () => {
    console.log("Server is running Successfully on port 3000");
}); 

/*



/*
🧩 Real-life analogy:
---------------------
Think of ports like seats in a classroom
👉 Port 3000 is already occupied
👉 Your server is trying to sit there → ❌ “Seat taken!”

*/

/*
🔴 ERROR: EADDRINUSE (Address already in use)
This error occurs when the port (e.g., 3000) is already being used by another process.
🧠 Possible reasons:
1. The server was already running and not stopped
2. Another application is using the same port

✅ Solutions:
1. Stop the running server:
   → Press Ctrl + C in terminal
2. Change the port:
   const port = 5000;
3. Kill the process using the port:
   → Run: lsof -i :3000
   → Then: kill -9 <PID>

💡 Tip:
If After pressing Ctrl + C, This line is showed : "Farihas-Laptop:Learnings of Node js _kodiko_$" then click on '💡' this icon above that line. Then click on stop the server.
Just remember,
Always stop the previous server before running again to avoid this error.
*/


// If I want to show the hostname : 

const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => { 
    res.end("<h1> Hello. I am your first Server </h1>"); // html tags can also be used here. 
});
myServer.listen(port, hostname, () => {
    console.log(`Server is running Successfully at http://${hostname}:${port}`);
}); 

// Be carefule here `` is not like '' . 
// `` is used for template literals in Js.