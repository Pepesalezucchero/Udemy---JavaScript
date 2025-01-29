/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/

//Task 1
// Test Data 1

let markWeights = 78;
let markHeights = 1.69;

let johnWeights = 92;
let johnHeights = 1.95;

let markBMI = markWeights / markHeights ** 2;
let johnBMI = johnWeights / johnHeights ** 2;

console.log("L'indice di massa corporea di Mark è:", markBMI);
console.log("L'indice di massa corporea di John è:", johnBMI);

if(markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

//Task 2

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
}

//Task 1
// Test data 2

markWeights = 95;
markHeights = 1.88;

johnWeights = 85;
johnHeights = 1.76;

markBMI = markWeights / markHeights ** 2;
johnBMI = johnWeights / johnHeights ** 2;

console.log("L'indice di massa corporea di Mark è:", markBMI);
console.log("L'indice di massa corporea di John è:", johnBMI);

if(markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

//Task 2

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
}