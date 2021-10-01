'use strict';

const Person = function(firstName,lastName){
    this.first = firstName;
    this.last = lastName;

    //never create method inside the f() 
    //because of functioanilty
}

//towo object created
const steve = new Person('Steve', 'bill');
console.log(steve);
const john = new Person('John', 'william');

console.log(steve instanceof Person);
console.log(steve instanceof Person);