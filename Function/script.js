//function declaration
//Note: f(x) declaration can be call or invoke before the f(x) because of Hositing
/*
Every parameter in a f(x) is a local varable of that f(x)
*/
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


// f(x) calling a f(x)
// Dont repeat Yourself rule

function fruitCut(fruit){
    return 4 * fruit;
}

function fruits(apples, orange){
    //calling fruitCut function inside fruits function
    const applesPieces = fruitCut(apples);
    const orangesPieces = fruitCut(orange);
    const juices = `Apple pieces is ${applesPieces} and Orange pieces is ${orangesPieces}`;
    return juices;
}

console.log(fruits(4, 5));
