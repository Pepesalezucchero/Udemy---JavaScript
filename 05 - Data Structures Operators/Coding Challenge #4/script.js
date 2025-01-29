/*
Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase   ✅
firstName        ✅✅
someVariable     ✅✅✅
calculateAge     ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    const info = textarea.value;
    let infoCamelCase = info.toLowerCase().split('\n');
    console.log(infoCamelCase);
    let checkMark = 1;
    for(let i = 0; i < infoCamelCase.length; i++) {
        const singleVar = infoCamelCase[i];
        const undescorePos = singleVar.indexOf('_') + 1;
        let correctVar = singleVar.slice(0, undescorePos) + singleVar[undescorePos].toLocaleUpperCase() + singleVar.slice(undescorePos + 1);
        correctVar = correctVar.replace('_', '').trim();
        console.log(correctVar.padEnd(20, ' ') + '✅'.repeat(checkMark));
        checkMark++;
    }
});