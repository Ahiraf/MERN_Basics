const fs = require('fs');

// Example of using a synchronous method to delete a file
try {
    fs.unlinkSync('demofile2.txt'); // unlinkSync() method is used to delete a file synchronously. It takes the file name as a parameter.
    console.log("File deleted successfully (synchronously)");
} catch (err) {
    console.error("Error deleting file (synchronously):", err);
}

  
/*
Core Synchronous FS Methods :

1) fs.writeFileSync() (Equivalent to write)
2) fs.readFileSync() (Equivalent to read)
3) fs.renameSync() (Equivalent to rename)
4) fs.unlinkSync() (Equivalent to unlink 
5) fs.existsSync() (Equivalent to exists)
*/

/* Quick Tip: While these are great for scripts and CLI tools, try to avoid using the Sync methods in a high-traffic web server,
as they "block" the entire process until the operation finishes!  */
