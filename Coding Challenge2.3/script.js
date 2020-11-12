// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
'use strict'
const Mark = {
    firstname: 'mark',
    lastname:  'miller',
    height: 1.69, 
    mass: 78 ,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const John = {
    firstname: 'john',
    lastname:  'smith',
    height: 1.95, 
    mass: 92,
    calcBMI: function(){
       this.bmi = this.mass / this.height ** 2;
       return this.bmi;
    }
};

Mark.calcBMI();
John.calcBMI();

const BMIMark = Mark.bmi;
const BMIJohn = John.bmi;

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is ${BMIMark} higher than John's ${BMIJohn}!`);
}else if(BMIMark < BMIJohn) {
    console.log(`John's BMI is ${BMIJohn} higher than Mark's ${BMIMark}!`);
}else{
    console.log(`John's AND Mark's have same BMI!`);
}