const neighbours = ['France', 'Switzerland', 'Austria'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

!neighbours.includes('Germany') ? console.log('Probably not a central european country :D') : console.log('A central european country :D');

neighbours.splice(0, 1, 'Republic of Sweden');
console.log(neighbours);

//Soluzione alternativa dell'esercizio finale

// neighbours[neighbours.indexOf('France')] = 'Republic of Sweden';
// console.log(neighbours);