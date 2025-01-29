'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUsd = movements.map(function(mov) {
  return mov * eurToUsd;
});

const movementsUsdArrow = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);
console.log(movementsUsdArrow);