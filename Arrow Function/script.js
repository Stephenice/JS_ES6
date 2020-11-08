//Arrow f(x) => mostly is used for single line return. 
// Note: in Arrow f(x) This keyword cant be use.
const calcAge = birthYear => 2020 - birthYear;
console.log(calcAge(1989));

//Adding more parameter and block code in Arrow f(x)
// ( , ) use to add mulitple parameter and { block code} is to add more code in arrow f(x)
const calcAge2 = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const name = firstName;
    // return a string
    return `${firstName} age is ${age} 😀`;
}

console.log(calcAge2(1989, 'Steve'));