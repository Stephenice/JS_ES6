'use strict';
// create a secret number or Random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;


//eventlistener for the check button
document.querySelector('.check').addEventListener('click', function(){
    let guessNumber = Number(document.querySelector('.guess').value);

    if(!guessNumber){
        document.querySelector('.message').textContent = '🚫 No number ...'
    } else if (guessNumber === secretNumber){
        document.querySelector('.message').textContent = '🟢 👍 Correct Number ...'
    }else if (guessNumber > secretNumber){
        document.querySelector('.message').textContent = ' Too High ...'
    }else if (guessNumber < secretNumber){
        document.querySelector('.message').textContent = ' Too Low ...'
    }

})
