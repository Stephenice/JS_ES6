//function declaration
//Note: f(x) declaration can be call or invoke before the f(x) because of Hositing
const age= calculateAge(1990);

function calculateAge(birthYear){
    return 2020 - birthYear;
}

//function expression produce result
const calculateAge2 = function (birthYear){
    return 2020 - birthYear;
}

const age2 = calculateAge2(1991)

console.log(`f() declaration Age is ${age}`);
console.log(`f() expression Age is ${age2}`);

