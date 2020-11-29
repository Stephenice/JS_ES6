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


