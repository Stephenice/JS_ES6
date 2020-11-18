// the while loop doesnt depend on the counter or iteration to know how many times its will loop
// Use:: used the while loop if your dont know how many times it will lterate or loop


// Random number

const Max = 6;
const Min = 1;

console.log(getRandomNumber(Max, Min));

function getRandomNumber (max, min){
    return Math.trunc(Math.random() * max) + min;
}


let dice = getRandomNumber(Max, Min);

while(dice !== 6){
console.log(`The dice number is ${dice}`)
// get a new random number to loop
dice = getRandomNumber(Max, Min);
console.log(`New dice number ${dice}`)
// end dice if its 6
dice === 6 ? console.log(`End dice number ${dice}`) : `new`;
}