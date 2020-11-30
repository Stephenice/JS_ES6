'use strict'

const restaurant = {
    name: 'Classico Italiano',
    categories: ['italian', 'Pizzeria', 'bread','salad'],
    startMenu: ['focaccia','bruschetta','vegetarian'],
    mainMenu: ['pizza', 'pasta','risotto'],

    openingHours: {
        mon: {
            open:12,
            close: 20
        },
        tue: {
            open:11,
            close: 21
        },
        wed: {
            open:9,
            close: 22
        },
        thu: {
            open:10,
            close: 23
        },
        fri: {
            open:7,
            close: 24
        },
        sat: {
            open:6,
            close: 19
        },
        sun: {
            open:12,
            close: 18
        },
    },

    order: function(startIndex, mainIndex){
        return [this.startMenu[startIndex],this.mainMenu[mainIndex]];
    },

    orderDelivery: function({time =['no time'], address, mainIndex, startIndex}){
        console.log(`Order recived! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} at ${time} to ${address}`);
    }
}

//spread: used in the right on the assignment operator
/*We used the spread operator to build new arrays or to pass multiple values into a function.
So those are the two use cases of the spread operator and in both cases, we use the spread operator 
to expand an array into individual elements. */

// Rest pattern: use in the left on the assignment operator
/** the rest pattern uses the exact same syntax however, to collect multiple elements and condense 
them into an array. so that's really the opposite of spread The spread operator is to unpack an array 
while rest is to pack elements into an array */
const arr = [2,4,5,1];
//used destructuring and rest pattern to condense the rest of the element in the array
const [a, b, ...other] = arr;
//a,b,other are new variable
console.log(a,b,other);


/**note here that the rest syntax collects all the array after the last variable. the skip value will not be collected by the Rest pattern */
//there can only be one rest syntax and it must be place as the last variable
const [firstValue, ,thirdValue, ...restValues] = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(firstValue, thirdValue, restValues);


//Object
