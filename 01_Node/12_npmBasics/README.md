# 📦 NPM Basics (Node Package Manager)

This section covers the basics of using **npm (Node Package Manager)** in Node.js, including how to initialise a project, install external packages, and use them in code.

---

## 🌐 What is NPM?

NPM is a package manager for JavaScript that allows us to use external (third-party) libraries in our projects.

🚀 The Core WorkflowThe general process for integrating any external package follows three simple steps:Initialize $\rightarrow$ Install $\rightarrow$ Use

🔗 Official Website: https://www.npmjs.com/

<img width="1268" height="715" alt="Screenshot 2026-03-26 at 9 53 27 PM" src="https://github.com/user-attachments/assets/2d34cddd-b956-4cd3-a8bd-5718844da2ca" />

---

## 🚀 Steps to Use NPM

### 1️⃣ Initialise a Project
Run the following command in the terminal:

```bash
npm initnpm
```

### 2️⃣ Install a Package
Example:
```
npm i random-fruits-name

```
### 3️⃣ Use the Package in Code
```
const getRandomFruitsName = require('random-fruits-name');
console.log(getRandomFruitsName());
```
require() is used to import the installed package
The package name must match the name in package.json

## Some Outputs : 

<img width="1234" height="321" alt="Screenshot 2026-03-26 at 9 42 58 PM" src="https://github.com/user-attachments/assets/79ed6613-a300-4ce3-a4e1-1241bdc995ff" />

