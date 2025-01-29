const myCountry = {
    country: 'Ialy',
    capital: 'Rome',
    language: 'italian',
    population: 58.9,
    neighbours: ['France', 'Switzerland', 'Austria'],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },

    chekIsland: function() {
       this.isIsland = this.neighbours === 0 ? true : false;
    }
}

myCountry.describe();
myCountry.chekIsland();
console.log(myCountry.isIsland);
