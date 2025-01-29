const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const italy = percentageOfWorld1(58.9);
const germany = percentageOfWorld1(83.3);
const france = percentageOfWorld1(66.5);

console.log(`${italy.toFixed(1)}%\n${germany.toFixed(1)}%\n${france.toFixed(1)}%`);

const percentageOfWolrd2 = function(population) {
    return (population / worldPopulation) * 100;
}

const spain = percentageOfWolrd2(47.7);
const portugal = percentageOfWolrd2(10.4);
const switzerland = percentageOfWolrd2(8.77);

console.log(`${spain.toFixed(1)}%\n${portugal.toFixed(1)}%\n${switzerland.toFixed(1)}%`);