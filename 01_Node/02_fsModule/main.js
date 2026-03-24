// fs = file system
const fs = require('fs');

console.log(fs); // fs er under a ki ki function ache shob dekha jabe .

/*fs.writeFile("demofile1.txt", "This is a sample text",(err) => {// function(err) is callback function.
    if(err) {
        console.log(err);
    }
    else {
        console.log("successfull");
    }
}
);*/
// now as demofile1.txt file doesn't exist so it will create the file and write the text in it. 
// If the file already would have existed it would have overwritten the content of the file with the new text. 
// So basically writeFile() method creates a new file if it doesn't exist and writes the specified content into the file. 

// If I use the text - "My name is Fariha" here , fs.writeFile("demofile1.txt", "My name is Fariha", function(err), then this will just overwrite the previous text . 
// so to append the new I have to use fs.appendFile() instead of fs.writeFile() method. 


fs.appendFile("demofile1.txt", "My name is Fariha.",(err) => {// function(err) is callback function.
    if(err) {
        console.log(err);
    }
    else {
        console.log("successfull");
    }
}
);

/*

if uncomment the fswriteFile() and run both writeFile() and appendFile() then,
What will happen?

=> writeFile() starts writing to the file
=> Without waiting for it to finish
=> appendFile() runs immediately
=> Sometimes append happens before write finishes

so the final file will only have the first text or becomes overwritten.
 So to solve this issue : 

const fs = require('fs');
fs.writeFile("demofile1.txt", "This is aaaaaa sample text\n", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("WRITE successful");

        fs.appendFile("demofile1.txt", "My name is Farihaaaaaaaa.\n", (err) => {
            if (err) console.log(err);
            else console.log("APPEND successful");
        });
    }
});
*/
