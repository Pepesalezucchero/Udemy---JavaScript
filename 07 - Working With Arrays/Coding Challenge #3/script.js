'use strict';

/*
Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2,
but this time as an arrow function, and using chaining!

Test data:
Data 1: [5, 2, 4, 1, 15, 8, 3]
Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

function calcAverageHumanAge(arr) {
   const averageHumanAge = arr
   .map((age) => age <= 2 ? age * 2 : (age * 4) + 16)
   .filter((age) => age >= 18)
   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
 
   return averageHumanAge;
}

const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(Data1));
console.log(calcAverageHumanAge(Data2));