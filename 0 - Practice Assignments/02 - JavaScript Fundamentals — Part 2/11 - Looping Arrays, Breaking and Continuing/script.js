const populations = [58.9, 83.3, 66.5, 47.7];
const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];
const percentages2 = [];

for(i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
console.log(percentages2);