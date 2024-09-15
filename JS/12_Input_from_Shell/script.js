// import { createInterface } from "readline";   für .mjs dateien (man muss noch erweiterungen hinzufügen)
//
// const readline = createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// 
// 
// 
// const readLineAsync = () => {
//     return new Promise((resolve) => {
//         readline.question("", (userRes) => {
//             resolve(userRes);
//             readline.close();
//         });
//     });
// };

// console.log("Enter your name");
// let inputOfUser = await readLineAsync();
// console.log(inputOfUser);


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            readline.close();
        });
    });
};

console.log("Enter your name");
readLineAsync().then(inputOfUser => {
    console.log("Your name is", inputOfUser);
});
