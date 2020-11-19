'use strict';
// create a secret number or Random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;


//eventlistener for the check button
document.querySelector('.check').addEventListener('click', function(){
    let guessNumber = Number(document.querySelector('.guess').value);

    if(!guessNumber){
        document.querySelector('.message').textContent = '🚫 No number ...'
    } else if (guessNumber === secretNumber){
        document.querySelector('.message').textContent = '🟢 👍 Correct Number ...'
    }else if (guessNumber > secretNumber){
        document.querySelector('.message').textContent = '📈 Too High ...'
        scoreUpdate();
    }else if (guessNumber < secretNumber){
        document.querySelector('.message').textContent = '📉 Too Low ...'
        scoreUpdate();
    }

})


// Update score 
function scoreUpdate(){
    if(score <= 0){
        document.querySelector('.message').textContent = ' Game Over'
    }else{
        score = score - 1;
    document.querySelector('.score').textContent = score;
    }
}

//Update Message
function messageUpdate(){
    
}