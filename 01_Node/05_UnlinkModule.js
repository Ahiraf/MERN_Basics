// it is use to delete a file.
const fs = require('fs');

fs.unlink('demofile1.txt', (err) => { // unlink() method is used to delete a file. It takes two parameters : file name and callback function.}
    if(err) {
        console.log(errr);
    }
    else{
        console.log("File deleted successfully");
    }
});
