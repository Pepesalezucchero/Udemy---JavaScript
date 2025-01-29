let isIsland = false;
let population = 58.94;
let language = 'italian';
const country = 'Italy';


/*sara

language english
population 50m
not an island
*/

if(language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);    
}

population = 40;
language = 'english';

if(language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);    
}