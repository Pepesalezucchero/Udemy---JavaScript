const myCountry = {
    country: 'Ialy',
    capital: 'Rome',
    language: 'italian',
    population: 58.9,
    neighbours: ['France', 'Switzerland', 'Austria']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);