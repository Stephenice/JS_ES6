'use strict';
const score0El = document.querySelector('#score--0');
const score1El  = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHOLD = document.querySelector('.btn--hold');

let currentScore = 0;

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

    }else{

    }

    //if true switch to next player


})