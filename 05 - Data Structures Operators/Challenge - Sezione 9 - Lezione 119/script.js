const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);

console.log(question.get('question'));
for(const [key, value] of question) {
    if(typeof key === 'number') {
        console.log(`Answer n°${key}: ${value}`);
    }
}
const answer = Number(prompt('Your answer'));
console.log(answer);

if(answer === question.get('correct')) {
    console.log(question.get(true));
} else {
    console.log(question.get(false));
}

answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false));