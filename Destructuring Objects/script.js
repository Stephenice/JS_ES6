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
    }
}


/***********/// Destructuring Array
//creating a DA
const [x,y,z] = restaurant.categories;
console.log(x,y,z);

//specific the values you want
const [a, ,b] = restaurant.categories;
console.log(a,b);

//switching variable
let [main, secondary] = restaurant.startMenu;
[main,secondary] = [secondary,main];
console.log(main, secondary);

//receiving 2 return values from a function
const [start, finish] = restaurant.order(1,2);
console.log(start,finish);

//nested array
const nestedArr = [3,1,5,[6,7,8]];
const [i, ,j, [e,f,g]] = nestedArr;
console.log(i,g,e,f);

//default values -if your doesnt know how element are there in the array
const [p=1 ,q=1,r='No value',s=1] = [8,9];
console.log(p,q,r,s);

/***********///Destructuring Object/************** */
// to Destructuring Object
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours,categories);  

//to change the properties name to variable
const {name : restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//to create a default values for a properties that doesnt exit in a Object
const {menu = ['no prpperties'], startMenu: starter = []} = restaurant;
console.log(menu, starter);

// Mutating variables
let value1 = 26;
let value2 = 30;
/* override the variables in the object */
const obj = {
    value1 : 122,
    value2 : 130,
};
/* used the () to wrap the mutate the object properties  */
/* there is no need to declare it */
({value1,value2} = obj);
console.log(value1,value2);


