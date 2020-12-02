/**
 * Now ES6 introduced three ways, which make it easier to write object literals like:
 */
const weekdays = ['mon','tue','wed','thu','fri'];
const openingHours = {
    [weekdays[0]]: {
        open:12,
        close: 20
    },
    [weekdays[1]]: {
        open:11,
        close: 21
    },
    [weekdays[2]]: {
        open:09,
        close: 22
    },
    [weekdays[3]]: {
        open:10,
        close: 23
    },
    [weekdays[4]]: {
        open:07,
        close: 24
    },
    sat: {
        open:06,
        close: 19
    },
    sun: {
        open:12,
        close: 18
    },
};


const restaurant = {
    name: 'Classico Italiano',
    categories: ['italian', 'Pizzeria', 'bread','salad'],
    startMenu: ['focaccia','bruschetta','vegetarian'],
    mainMenu: ['pizza', 'pasta','risotto'],
//openingHours:openingHours,

//ES6 enhanced
    openingHours,

    //2. ES6 enhanced on function expression
    order(startIndex, mainIndex){
        return [this.startMenu[startIndex],this.mainMenu[mainIndex]];
    },

    //old way of writing f(x) expression
    orderDelivery: function({time =['no time'], address, mainIndex, startIndex}){
        console.log(`Order recived! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} at ${time} to ${address}`);
    }
}


//1. Creating an object that is outside another object
/**
 * You want to put the openinghour object inside the restaurant object.
 * before ES6 you will have to put this code inside the object::: line 41.
 * ES6: ES6 enhanced: just put the name of the object: openingHours, in line 44
 */


//2. ES6 enhanced on function expression in line 47 to 49

//3. 
/*the third enhancement is
that we can now actually compute property names instead of having to write them out manually and literally. 
And compute just means like calculate. Line 4 to 22
*/

