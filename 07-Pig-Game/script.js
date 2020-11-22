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

let currentScore, score, activePlayer,playing;


init ()

//roll dice click btn
btnDice.addEventListener('click', function(){
    if(playing){
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
        switchPlayer();
    }

    //if true switch to next player
}
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


//switch to player
function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
    
    // console.log(checkTurn0, checkTurn1);
    //playerTurn(checkTurn0, checkTurn1);

}



//btn to hold
btnHOLD.addEventListener('click', function(){
    if(playing){
    //add current score to the active player
    score[activePlayer] +=  currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

    //check score if its 100
    //finish the game
    if(score[activePlayer] >= 10){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    }else{
    //switch 
    switchPlayer();
    }}
})


btnNew.addEventListener('click', init);

function init (){
    currentScore = 0;
    score = [0,0];
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    currentEl0.textContent= 0;
    currentEl1.textContent= 0;
    playerEl0.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');
    playerEl0.classList.add('player--active');
    playerEl1.classList.remove('player--active');
}