
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

//obj are not iterable but we can loop obj in an indirect way
//obj looping - properties name : Object.keys(object properties )
//Object name
let openday = '';
for(const days of Object.keys(openingHours)){
    
    openday += `${ days}`;
}
console.log(openday);
//

//Object values
 for(const dayVal of Object.values(openingHours.mon))
    console.log(dayVal);

  //Entries Obj
  //to loop everything in an object is entries
  for(const [day, {open, close}] of Object.entries(openingHours)){
  const openat = `on ${day} we open at ${open} and ${close}`; 
  console.log(openat); 
  }