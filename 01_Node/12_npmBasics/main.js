// It is external Module or third party module which is not built in module of node js but we can use it by installing it using npm package manager

//   Link : https://www.npmjs.com/

// First I should initialize the npm by using the command npm init in the terminal and then I will get the package.json file in which all the dependencies and other information about the project is stored.
// To store all that information in package.json file I have to answer some questions like  package name, version, author...etc and I can always go to the next question by pressing enter key.
// After that I can install any package by using the command npm install package-name in the terminal and then I can use that package in my code by requiring it.
// This new created package.json file only stores all the basic information about a project.

// And now if I want to install any external package like "random fruits name" from npm website then will appear in the dependencies section of package.json file, which means that this project is dependent on that package and I can use that package in my code by requiring it.
// For installing that package I have to use this command -> 'npm i random-fruits-name' in the terminal. And after that a new folder named "node_modules" will automaitcally be created in the project directory.

// Now the installation of that package is successfull and I can use it : 
// All the code of the usage of it is already given in the documentation in npm website and anyone can copy and use it.

const getRandomFruitsName = require('random-fruits-name'); // Inside this require the package name should same as the one in the package.json file.
console.log(getRandomFruitsName());


/*
What is Automatic Semicolon Insertion (ASI)?
ASI is a JavaScript feature that automatically inserts semicolons where they are needed, 
even if one forgets to add them manually. This is part of the JavaScript specification and works in all JavaScript environments, 
including Node.js.
Even though there are no semicolons, JavaScript's ASI automatically inserts them and shows the output correctly
*/


/*
So, 

initialize -> install -> use


*/



