'use strict'

// && and || operator can print out values of any type as a result

/**there are three properties about logical operators.
1st, they can use any data type. 
2nd, They can return any data type 
3rd, they do something called short circuiting, or as we also call it short circuit evaluation. */

//Short circuiting means that if the first value is a truthy value, it will immediately return that first value.
/* So that's exactly what we see here with the three which is a truthy value. So again, if the first operand is truthy here in the OR operator, then the other operand will not even be evaluated. */

//Short circuiting is base on Truthy and Falsy evaluation

// || operator: its evaluate the value from the left to the right looking for the truthy value but if no values is truthy the last falsy values will be the result.

console.log(3 || 'Steephen'); //result 3 because the first value is truthy
console.log(undefined || 'Steephen'); //result Steephen because the secound value is truthy
console.log(0 || null); //result null because both values are falsy values so the last falsy values will be the result

console.log('***********AND***********');
// && operator:
/* its evaluate the value from the left to the right, if all values are truthy print out the last value
if, any value if falsy, it will print out the falsy values 
*/
console.log(3 && 4); //4
console.log(3 && 0); //0 Note: 0 is a value but its falsy-to make its a value use Nullish Coalescing Operator(??)

console.log( undefined && 9); //undefined
console.log(3 && 4 && false && null); //0

//practical example
const restaurant = {
    name: 'Classico Italiano',
    categories: ['italian', 'Pizzeria', 'bread','salad'],
    startMenu: ['focaccia','bruschetta','vegetarian'],
    mainMenu: ['pizza', 'pasta','risotto'],
    orderPizza: function(mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
};

/**since we know that the AND operator need avlues to be true, so we can If restaurant.orderPizza exit or truthy call the function bcos both value are truthy*/
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
