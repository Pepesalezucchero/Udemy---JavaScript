'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdrawals = movements.filter(function (wht) {
  return wht < 0;
});
console.log(withdrawals);

// const withdrawalsArrow = movements.filter((wht) => wht < 0);
// console.log(withdrawalsArrow);