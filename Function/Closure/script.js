const greet =  (greeting) =>{

    return (name)=>{
        console.log(`${greeting} ${name}`);
    }
};

greet('hello')('steven');

//OR
/**
 */
const greeting = firstMsg => innerMsg =>{
    console.log(`${firstMsg} ${innerMsg}`);
}

greeting('hey')('jame');


//Arrow function
const x = ()=>{
    console.log(`hello`);
}

const y = hello=>{
    console.log(`${hello}`);
}


x();
y('Hey Hey')

