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
            open:09,
            close: 22
        },
        thu: {
            open:10,
            close: 23
        },
        fri: {
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
    },

    order: function(startIndex, mainIndex){
        return [this.startMenu[startIndex],this.mainMenu[mainIndex]];
    },

    orderDelivery: function({time =['no time'], address, mainIndex, startIndex}){
        console.log(`Order recived! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} at ${time} to ${address}`);
    }
}

//spread ... operator
const arr = [1,2,3];
const newArr = [4,5,6, ...arr];
console.log(newArr);
console.log(...newArr);

//coping array
const menu = ['rice', ...restaurant.startMenu];
console.log(...menu);

//merge array
const newMenu = [...restaurant.startMenu, ...restaurant.mainMenu];
console.log(newMenu);

//to pass individual array in a function, use the spread operator b4 the array
//function
const ar=[23,24,2,4];
function orderFood(ar1, ar2, ar3){
    console.log(`${ar1} and ${ar2} and ${ar3}`);
}

orderFood(...ar);

//iterable : are array, string, map, set but Not Object
//individual string words
const str = 'stephen';
const letter = ['Mr',' ',...str];
console.log(letter);


//Object
const newRestaurant = {founder: 'Stephen', ...restaurant, year: 1990 };
console.log(newRestaurant);
console.log(restaurant);

// copy object: when coping is will be a shallow copy and its will not effect the original object
const copyRestaurant = {...restaurant};
copyRestaurant.name = 'Crocrodice';
console.log(restaurant);
console.log(copyRestaurant);
