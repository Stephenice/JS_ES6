'use strict';
// create a secret number or Random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

//eventlistener for the check button
document.querySelector('.check').addEventListener('click', function(){
    let guessNumber = Number(document.querySelector('.guess').value);

    if(!guessNumber){
        messageUpdate('🚫 No number ...');
        // document.querySelector('.message').textContent = '🚫 No number ...'
    } else if (guessNumber === secretNumber){
        document.querySelector('.message').textContent = '🟢 👍 Correct Number ...'
        document.querySelector('body').style.backgroundColor ='';
    }else if (guessNumber > secretNumber){
        document.querySelector('.message').textContent = '📈 Too High ...'
        scoreUpdate();
    }else if (guessNumber < secretNumber){
        document.querySelector('.message').textContent = '📉 Too Low ...'
        scoreUpdate();
    }

})


// play again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = 'black';

})

// Update score 
function scoreUpdate(){
    if(score <= 1){
        document.querySelector('.message').textContent = ' Game Over';
        document.querySelector('body').style.backgroundColor ='red';
        // document.querySelector('check').removeAttribute("btn");
    }else{
        score = score - 1;
    document.querySelector('.score').textContent = score;
    }
}

//Update Message
function messageUpdate(text){
    let message =text;
    document.querySelector('.message').textContent = message;
}

// when player win styles
function win(){

}

// high score
function updateHighScore(){

}