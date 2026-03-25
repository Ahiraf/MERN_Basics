/*const os = require('os');

console.log("Operating System Info:");
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());

console.log(os.totalmem()); // It returns the total amount of system memory in bytes.
console.log(os.freemem()); // It returns the amount of free system memory in bytes.

*/ 


// If I only want to get the total and free memory : 

const{totalmem, freemem} = require('os');
// Now I can directly use totalmem() and freemem() without "os."  prefix.
console.log(totalmem());
console.log(freemem());



console.log(__dirname); // It returns the directory name of the current file.
console.log(__filename); // It returns the file name of the current file. 