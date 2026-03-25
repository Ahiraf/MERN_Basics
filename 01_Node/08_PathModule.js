const path = require('path');
console.log(path);

const extensionName = path.extname("index.html"); // It returns the extension name of the file.
console.log(extensionName); // It will show ".html" which is the extension of this file.

/*
const joinName = path.join(__dirname + "/Cycle"); // It joins the root directory with "Cycle" folder to create a new path.
console.log(joinName);
*/


const joinName = path.join(__dirname + "../Cycle"); 
console.log(joinName); // Now it will show the path of the parent directory of the current file.



