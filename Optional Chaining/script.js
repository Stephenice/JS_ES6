/**
 * Optional Chaining (.?)
 *  ES2020introduced a great solution for this,which is a feature called optional chaining. 
 * And with optional chaining,if a certain property does not exist,
then undefined is returned immediately. And so that will then avoid that kind of error that we saw earlier.
 * 
 * is a way of setting a condition if a chain of object, method and array is exit in your project by
 * evaluating the chain and using nullish coalescing operator ??
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


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.categories?.[0]);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
//Note: in line 81 [day]
/**Because this is not an actual property name of the object.
And so remember if we want to use a variable name as the property name,
basically, we need to use the brackets notation. */
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');