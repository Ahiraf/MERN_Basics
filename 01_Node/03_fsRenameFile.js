const fs = require('fs');

fs.rename('demofile1.txt', 'demofile2.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfull");
    }
});
