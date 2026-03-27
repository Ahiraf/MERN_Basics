# 🌐 Simple Node.js HTTP Routing Server

This project demonstrates a basic HTTP server with routing using Node.js. It serves different HTML pages based on the URL requested by the user.

## 🚀 Features
Create a server using Node.js http module
Handle multiple routes (/, /order, /contact)
Serve HTML files dynamically using fs module
Show a custom 404 error page for unknown routes
Understand basic routing logic
## 🧠 How It Works
The server listens on port 3000
When a user visits a route:
/ → Loads Home.html
/order → Loads order.html
/contact → Loads contact.html
Any other route → Loads Error.html (404 page)
📂 Project Structure
📁 project-folder
│
├── HttpRouting.js
├── Home.html
├── order.html
├── contact.html
├── Error.html
└── README.md
## ⚙️ Installation & Setup
Make sure you have Node.js installed
Clone this repository or download the files
Open terminal in the project folder
Run the server:
```
node HttpRouting.js
```
Or, using nodemon:
```
npm start

```
<img width="479" height="174" alt="Screenshot 2026-03-27 at 5 38 33 PM" src="https://github.com/user-attachments/assets/03123bdc-7cb9-45b5-b9ab-378939238bb1" />

## 🌍 Usage
Open  browser and go to:
http://127.0.0.1:3000/
### Try different routes:(Without clicking on the Url's type '/' for home page, '/order' for order page, '/contact' for contact page or anything will show 404 error)
**http://127.0.0.1:3000/ → Home page**

<img width="506" height="180" alt="Screenshot 2026-03-27 at 5 37 49 PM" src="https://github.com/user-attachments/assets/fc0c5d7d-fa6e-4cf9-9994-9982ddc9face" />

**http://127.0.0.1:3000/order → Order page**

<img width="479" height="174" alt="Screenshot 2026-03-27 at 6 11 01 PM" src="https://github.com/user-attachments/assets/e8c00ffd-dfb6-4685-8208-e4e2e4165290" />


**http://127.0.0.1:3000/contact → Contact page**

<img width="506" height="180" alt="Screenshot 2026-03-27 at 5 37 30 PM" src="https://github.com/user-attachments/assets/229cabb2-34bf-4c9a-bebe-2fd815b667c4" />


**Any invalid route → Error page**

<img width="506" height="180" alt="Screenshot 2026-03-27 at 5 37 19 PM" src="https://github.com/user-attachments/assets/d373e937-fa9d-443e-9944-85d3c19dd44f" />


## 📝 Code Explanation
http.createServer() → Creates the server
req.url → Gets the requested URL
fs.readFile() → Reads HTML files
res.writeHead() → Sets response status & headers
res.end() → Sends response to browser

# 💡 Learning Outcome
From this project, one will understand:

Basic server creation in Node.js
Routing without frameworks
Serving static HTML files
Handling errors (404 pages)
