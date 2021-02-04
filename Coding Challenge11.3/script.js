'use strict';

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const arr = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = ages=> 
ages
.map(dogAge=> (dogAge <= 2 ? 2 * dogAge : 16 + dogAge *4) )
 .filter(dogLess => dogLess >= 18)
.reduce((acc, values,i, arrE) => acc + values/arrE.length, 0 );


console.log(calcAverageHumanAge(arr));