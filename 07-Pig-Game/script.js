'use strict';
const score0El = document.querySelector('#score--0');
const score1El  = document.getElementById('score--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHOLD = document.querySelector('.btn--hold');
const playerTurn0 = document.querySelector('.name--0');
const playerTurn1 = document.querySelector('.name--1');

let currentScore = 0;
const score = [0,0];
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//roll dice click btn
btnDice.addEventListener('click', function(){
    // generate random number for the dice
    let dice = Math.trunc(Math.random () * 6) +1;

    //display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    //check the dice 1
    if(dice !== 1){
        // add to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        //switch player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        let checkTurn0 = playerEl0.classList.toggle('player--active');
        let checkTurn1 =playerEl1.classList.toggle('player--active');
        // console.log(checkTurn0, checkTurn1);
        playerTurn(checkTurn0, checkTurn1);
    }

    //if true switch to next player
})

//Function to display turn of player
function playerTurn(turn0 , turn1){
    let check = true;
    if(turn0 === check ){
        document.querySelector('#name--0').textContent = 'Player 1 Turn';
        document.querySelector('#name--1').textContent = 'Player 2'
    }else if (turn1 === check){
        document.querySelector('#name--0').textContent = 'Player 1';
        document.querySelector('#name--1').textContent = 'Player 2 Turn';
    }
}