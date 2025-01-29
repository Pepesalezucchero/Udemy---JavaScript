function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

describeCountry('Finland', 6, 'Helsinki');

const italy = describeCountry('Italy', 58.9, 'Rome');
const germany = describeCountry('Germany', 83.3, 'Berlin');
const france = describeCountry('France', 66.5, 'Paris');

console.log(`${italy}\n${germany}\n${france}`);
