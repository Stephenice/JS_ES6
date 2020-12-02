
const menu = ['rice','pizza','meal','bean'];

/**
 * for-of will loop through properties value and similar to for loop
 * use it for array, maps, set etc
 * will can used the break and continue 
 */
for(let items of menu)
console.log(items); //values

//printing the index with desturcture 
for(const [index, element] of menu.entries())
console.log(index , element);


/**
 * for-in will loop through propertes name or print out the index in the array
 * use it for Object
 */
const restaurant = {
    name: 'Classico Italiano',
    categories: ['italian', 'Pizzeria', 'bread','salad'],
    startMenu: ['focaccia','bruschetta','vegetarian'],
    mainMenu: ['pizza', 'pasta','risotto'],
};

for(let item in restaurant)
console.log(item); //index of array and properties of object
