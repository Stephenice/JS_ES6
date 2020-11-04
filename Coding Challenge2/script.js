/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉*/
'use strict'
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = Math.trunc( massMark / heightMark ** 2);
const BMIJohn = Math.trunc(massJohn / (heightJohn * heightJohn));
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is ${BMIMark} higher than John's!`);
}else if(BMIMark < BMIJohn) {
    console.log(`John's BMI is ${BMIJohn} higher than Mark's!`);
}else{
    console.log(`John's AND Mark's have same BMI!`);
}