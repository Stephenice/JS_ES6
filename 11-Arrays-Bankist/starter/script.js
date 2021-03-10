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


//function to display the tranaction 
const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML= '';

  const mov = sort ? movements.slice().sort((a,b)=> a-b) : movements;

    mov.forEach(function (mov, i){
      //condition for deposit and withdrawn
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov} €</div>
    </div>`;

    //method to insert html 
    containerMovements.insertAdjacentHTML('afterbegin', html);
    })
};



//dispaly balance
const calcDisplayBalance = function(account){
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance} EUR`;
}



//creating username and transforming information
const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
}

createUsernames(accounts);

//summary display
const calcDisplaySummary = function (account){
  const income = account.movements
  .filter(mov => mov > 0)
  .reduce((acc,mov)=> acc + mov,0);
  labelSumIn.textContent = `${income} €`;

  const outcome = account.movements
  .filter(mov => mov < 0)
  .reduce((acc,mov)=> acc + mov,0);
  labelSumOut.textContent = `${Math.abs(outcome) } €`;

  //interest rate
  const interest = account.movements
  .filter(mov => mov > 0)
  .map(mov => (mov * account.interestRate)/100)
  .filter (mov => mov > 1)
  .reduce((acc, mov)=> acc + mov,0);
  labelSumInterest.textContent = `${interest} €`;
}

const updateUI = function(acc){
  //display movements 
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);

}


//login
let currentAccount;
btnLogin.addEventListener('click', function(event){
  //to prevent 
  event.preventDefault();

  currentAccount = accounts.find( 
    acc => acc.username === inputLoginUsername.value
  );

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';

    //clear focus
    inputLoginPin.blur();
    
    updateUI(currentAccount);


  }


})




//transfer
btnTransfer.addEventListener('click', function(event){
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value );
  //check the balance b4 transfer
  if( amount  > 0 && amount <= currentAccount.balance
    && receiverAcc.username !== currentAccount.username
    && receiverAcc){

      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);  
      updateUI(currentAccount);  

  }

  //to clean the form input
  inputTransferAmount.value = inputTransferTo.value = '';
})



// Close account
btnClose.addEventListener('click', function(event){
  event.preventDefault();
  if(inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin){

      const index = accounts.findIndex( acc=> acc.username === currentAccount.username);
      console.log(index);
      accounts.splice(index, 1);

      //hide ui
      containerApp.style.opacity = 0;
  }

  //clear the inout form
  inputCloseUsername.value = inputClosePin.value = '';
   
})

//loan
btnLoan.addEventListener('click', function(event){
  event.preventDefault();

const amount = Number(inputLoanAmount);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);

    inputLoanAmount.value = ''; 

  }
})

//state variable
let sorted = false;

//sorting 
btnSort.addEventListener('click', function(event){
  event.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
                      

})

//console.log(sorted);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES 

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// practice
//1.
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(acc => acc >0)
.reduce((sum,value) => sum+value,0);

console.log(bankDepositSum);

//2.



