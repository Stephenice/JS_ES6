const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    hasDriversLicense: true,
    friends: ['Michael', 'Peter', 'Steven'],
    getSummary: function(){
        return `${this.firstName} is a ${this.age} year old ${this.job} teacher, and he has ${this.hasDriversLicense === true ? 'a' : 'no'} driver's license`;
    }
  };

  // Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary())
