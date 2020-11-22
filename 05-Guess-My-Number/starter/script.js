'use strict';
// create a secret number or Random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let playing = true;


// 

// Update score 
const scoreUpdate = function(){
    if(score <= 1){
        document.querySelector('.message').textContent = ' Game Over';
        document.querySelector('body').style.backgroundColor ='red';
    }else{
        score = score - 1;
    document.querySelector('.score').textContent = score;
    }
};

//Update Message
const messageUpdate = function (text){
    let message =text;
    document.querySelector('.message').textContent = message;
};


// high score
const updateHighScore = function (){
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

};




//eventlistener for the check button
document.querySelector('.check').addEventListener('click', function(){
    if(playing){
    let guessNumber = Number(document.querySelector('.guess').value);

    if(!guessNumber){
        messageUpdate('🚫 No number ...');
    } else if (guessNumber === secretNumber){
        updateHighScore();
        messageUpdate('🟢 👍 Correct Number ');
        document.querySelector('body').style.backgroundColor ='green';
        playing = false;
    }else if (guessNumber !== secretNumber){
        guessNumber > secretNumber ? messageUpdate('📈 Too High ') : messageUpdate('📉 Too Low  ');
        scoreUpdate();
    } else {
        messageUpdate('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
});


// play again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    playing = true;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    messageUpdate('Start guessing...');
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor='#222';

});