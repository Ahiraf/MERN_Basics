/* 
Module is a set of funcitons . 

=> there are 3 types of module system in javascript :
    1. Local modules (own created module)
    2. Built-in modules (node.js er own modules) -> http, url, path, fs (no need to install)
    3. External modules (managed by npm -node package manager) -> lodash, express (need to install)
*/




/*   Commands :
    1. node file_name => example : node Module.js (Age js file run korar jonno html file lagto kintu node js dara ekhon run kora jabe)
    2. cls -> for cleaning terminal/ screen
    3. pwd -> present working directory
    4. ls -> list of files and folders in the current directory 
    5. cd file name -> change directory to the specified file name
*/



// run korte terminal a giye likhte hobe : node Module.js
const s1 = require('./student.js'); // Import use na kore require use kora hoi.
         // Shudu ekta function import korte chaile , 
          //const {name} = require('./student.js');
          //console.log("Name is: " + name);

console.log("Name is: " + s1.name());
//console.log("Age is: " + s1.age()); // As age function ta export kora hoi nai tai undefined ashbe.

// jodi "age" function tao export kora hoto tahole undefined ashto na.

console.log("The result is : " + s1.result); 
// As result function na tai ' () ' use kora hoi nai.

console.log("Age is: " + s1.age());



 
 
 
 


