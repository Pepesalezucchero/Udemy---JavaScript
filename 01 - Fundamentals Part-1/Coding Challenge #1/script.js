/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 or BMI = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// Test Data 1

let markWeights = 78;
let markHeights = 1.69;

let johnWeights = 92;
let johnHeights = 1.95;

let markBMI = markWeights / markHeights ** 2;
let johnBMI = johnWeights / johnHeights ** 2;

console.log("L'indice di massa corporea di Mark è:", markBMI);
console.log("L'indice di massa corporea di John è:", johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log("Mark ha un indice di massa corporea più alto di john?", markHigherBMI);

// Test data 2

markWeights = 95;
markHeights = 1.88;

johnWeights = 85;
johnHeights = 1.76;

markBMI = markWeights / markHeights ** 2;
johnBMI = johnWeights / johnHeights ** 2;

console.log("L'indice di massa corporea di Mark è:", markBMI);
console.log("L'indice di massa corporea di John è:", johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log("Mark ha un indice di massa corporea più alto di john?", markHigherBMI);