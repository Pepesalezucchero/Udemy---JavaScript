const worldPopulation = 7900;

const percentageOfWolrd3 = population => (population / worldPopulation) * 100;

const italy = percentageOfWolrd3(58.9);
const germany = percentageOfWolrd3(83.3);
const france = percentageOfWolrd3(66.5);


console.log(`${italy.toFixed(1)}%\n${germany.toFixed(1)}%\n${france.toFixed(1)}%`);