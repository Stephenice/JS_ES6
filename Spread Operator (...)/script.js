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