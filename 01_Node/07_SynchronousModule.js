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


Feature                           Asynchronous (fs.writeFile)                                  Synchronous (fs.writeFileSync)
-----------------------------------------------------------------------------------------------------------------------------------
Arguments                      Data + Callback Function                                              Data only
Execution                   Non-blocking: Code continues while writing                   Blocking: Script waits until write finishes
Error Handling                Handled via (err) in callback                                  Handled via try...catch blocks
Return Value                       Returns undefined                                         Returns undefined (or data for read)



 Quick Tip: While these are great for scripts and CLI tools, try to avoid using the Sync methods in a high-traffic web server,
as they "block" the entire process until the operation finishes!  */
