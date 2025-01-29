const populations = [58.9, 83.3, 66.5, 47.7];
const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

populations.length === 4 ? console.log(true) : console.log(false);

const percentages = [];

for(let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]).toFixed(1));
}

console.log(percentages);

//Soluzione alternativa dell'esercizio

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];

// console.log(percentages);