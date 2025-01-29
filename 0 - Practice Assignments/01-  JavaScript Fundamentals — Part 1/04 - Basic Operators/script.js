const continent = 'Europe';
const country = 'Italy';
let italyPopulation = 58.94;
let language;
language = 'Ialian';

const halfCountryPopulation = Math.trunc(italyPopulation / 2);
console.log(halfCountryPopulation);

italyPopulation++;
console.log(italyPopulation);

const finlandPopulation = 6;
italyPopulation > finlandPopulation ? console.log('Italy has more population than Finland') : console.log('Finland has more population tha Italy');

const averagePopulation = 33;
italyPopulation < averagePopulation ? console.log('Italy has less population than an average country') : console.log('Italy has more population than an average country');

const description = 
    country +
    ' is in ' +
    continent +
    ', and its ' + 
    italyPopulation +
    ' million people speak ' +
    language;

console.log(description);
