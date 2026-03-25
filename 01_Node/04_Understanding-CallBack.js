// The "Callback Hell" Problem : 
/*
While powerful, if one have to do five things in a row (read a file, then query a database, then send an email, etc.), 
code starts to crawl toward the right side of the screen. This is famously known as Callback Hell or the Pyramid of Doom.

JavaScript
// 🚩 Example of Callback Hell
fs.readFile('user.json', (err, user) => {
    getDatabase(user.id, (err, db) => {
        updateProfile(db, (err, result) => {
            sendEmail(result, (err) => {
                console.log("Finally done!");
            });
        });
    });
});

Look at how the code physically moves toward the right side of the editor with every new step.

Why this is a "Hell" for developers:
Readability: one has to scroll horizontally to read your logic.
Closing Brackets: one ends up with a "forest" of brackets at the bottom })})})}); and it’s very easy to delete one by mistake and break the whole script.
Error Handling: one has to handle if (err) at every single level, which makes the code 3x longer than it needs to be.

The Modern Fix: async/await
To stop the "crawl to the right," modern JavaScript lets us write code that stays neatly aligned on the left, 
even though it's still asynchronous:

*/

async function handleUser() {
    try {
        const user = await fs.readFile('user.json'); // Stays on the left
        const db = await getDatabase(user.id);       // Also on the left
        const result = await updateProfile(db);      // No nesting!
        await sendEmail(result);
        console.log("Finally finished!");
    } catch (err) {
        console.error(err); // One catch for everything!
    }
}
