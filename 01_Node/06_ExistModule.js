fs.exists("demofile1.txt", (results) => { // It checks if a file exists or not.
    if(results){
        console.log("File exists");
    }
    else{
        console.log("File does not exist");
    }
})
