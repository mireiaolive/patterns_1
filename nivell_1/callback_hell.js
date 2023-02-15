const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory
// Modularization - Making each callback into an independent function

const firstReadDir = readdir(inbox, (error, files) => {
    if (error) return console.log("Error: Folder inaccessible");
    //callback
    files.forEach((file) => secondReadWrite(file));
});

const secondReadWrite = (file) =>
    readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) return console.log("Error: File error");
        //callback
        lastWriteReverse(file, data);
    });

const lastWriteReverse = (file, data) =>
    writeFile(join(outbox, file), reverseText(data), (error) => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
    });
