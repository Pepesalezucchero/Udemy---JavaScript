'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, -1300];

// Base settings page
clearInputs();
let currentAccount;

/////////////////////////////////////////////////

//create the username on all account to gain access for the app
function createUsernames(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map((str) => str[0])
    .join('');
  });
}

createUsernames(accounts);

//setting login
// let currentAccount; //this allow to change the page information based on the user logged
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  currentAccount = accounts.find((account) => account.username === inputLoginUsername.value)
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    clearInputs();
    inputLoginUsername.blur();
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

//display the correct movement on screen for user
function displayMovements(movements, sort = false) {

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements ;

  containerMovements.innerHTML = '';

  movs.forEach(function(mov, i) {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movType}">${i + 1} ${movType}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

//display the incomes, outcomes and interest for the current user
function calcDisplaySummary(account) {

  //incomes
  const incomes = account.movements
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  //outcomes
  const outcomes = account.movements
  .filter((mov) => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  //interest
  const interest = account.movements
  .filter((mov) => mov > 0 )
  .map((deposit) => deposit * account.interestRate / 100)
  .filter((int)=> int >= 1)
  .reduce((int, acc) => int + acc, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
}

//display the current user balance
function calcDisplayBalance(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
}

//display all data in page
function updateUI(account) {
  //display movements
  displayMovements(account.movements);
  //display balance
  calcDisplayBalance(account);
  //disply summary
  calcDisplaySummary(account);
}

//clear inputs
function clearInputs() {
  inputLoginUsername.value = inputLoginPin.value = '';
  inputTransferTo.value = inputTransferAmount.value = '';
  inputCloseUsername.value = inputClosePin.value = '';
  inputLoanAmount.value = inputLoanAmount.value = '';
}

//setting the transfer money
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find((account) => account.username === inputTransferTo.value);

  clearInputs();

  if(amount > 0 && amount <= currentAccount.balance && receiverAccount && receiverAccount?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  console.log(currentAccount, receiverAccount);
  
});

//setting request loan
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  clearInputs();
})

//setting close account
btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  
  if(!currentAccount) {
    console.log('accedi prima');
  } else if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    //finding account
    const index = accounts.findIndex((account) => account.username === currentAccount.username);
    //deleting account
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    console.log('account cancellato');
  } else {
    console.log('errore');
  }

  clearInputs();
});

//setting sort button
let sorted = false;
btnSort.addEventListener('click', function(e) {
 e.preventDefault();
 displayMovements(currentAccount.movements, !sorted);
 sorted = !sorted;
});




console.log('movements:', movements);
// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

// const movsCopy = movements.slice();
// console.log('copy of movements:', movsCopy);

// const sortedMovs = movsCopy.sort((a, b) => a - b);
// console.log('copy sorted', sortedMovs);

// const biggestMov = sortedMovs.findLast(mov => mov > 0);
// console.log('biggest moviment:', biggestMov);

// const movPos = movements.findIndex(mov => mov === biggestMov);
// console.log(movPos);

// console.log(`Your latest large movement (${biggestMov}$) was ${movPos + 1} movements ago`);

// console.log(Math.abs(-100));

const movementCopyAbs = movements.map(mov => Math.abs(mov));
console.log('copy of movements abs:', movementCopyAbs);

const sortedCopy = movementCopyAbs.slice().sort((a, b) => a - b);
console.log('copy sorted', sortedCopy);

const biggestMov = sortedCopy.findLast(mov => mov > 0);
console.log('biggest movement:', biggestMov);

const movPos = movementCopyAbs.findIndex(mov => mov === biggestMov);
console.log(movPos);

console.log(`Your latest large movement ${movements[movPos]}$ was ${movPos + 1} movements ago`);