'use strict'
const words = document.querySelector('textarea');
const btn = document.querySelector('button');
const cost = document.querySelector('.cost');
//console.log(words);

function wordsLength (words){
    const wordCount = words.length;
    costs(wordCount);
}

function costs (words){
    const totalCost = words * 5
    document.querySelector('.cost').innerHTML=totalCost;
}

function wordsFunction(){
    const wordsFormat = words.value.trim();
    wordsLength(wordsFormat);
    console.log(typeof(wordsFormat));
}

//wordsFunction(words.value);

btn.addEventListener('click', wordsFunction )

