const fs = require('fs');

fs.rename('demofile1.txt', 'demofile2.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfull");
    }
});


/*
Think of a callback function as a "call me back when you're done" note you leave for a program.

In JavaScript, functions are "First-Class Citizens," meaning one can pass a function into another function just like one pass a string 
or a number. A callback is simply a function passed as an argument to be executed later.

But why ?....
JavaScript is single-threaded, meaning it can only do one thing at a time. If you ask it to read a massive 5GB file, the whole program would freeze 
until it's done. Callbacks solve this by saying: "Hey, go start reading this file. I'm going to keep running other code. When you're finished, 
run this specific function I'm giving you."
*/

