const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(1)}% of the world`;
}

const italy = describePopulation('Italy', 58.9);
const germany = describePopulation('Germany', 83.3);
const france = describePopulation('France', 66.5);

console.log(`${italy}\n${germany}\n${france}`);

//Altro metodo fornito dalla soluzione

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//   console.log(description);
// }

// describePopulation('Italy', 58.9);
// describePopulation('Germany', 83.3);
// describePopulation('France', 66.5);