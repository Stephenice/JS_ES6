// Random number

const Max = 10;
const Min = 1;

console.log(getRandomNumber(Max, Min));

function getRandomNumber (max, min){
    return Math.trunc(Math.random() * max) + min;
}
