const all_lists = document.querySelectorAll("li");

// // Array.from its use to create array eg. from Object and from scratch
// const lists_array = Array.from(all_lists);
// console.log(lists_array);


const species = function(arrayElement){ 
    console.log(arrayElement);
    //Note:: NodeList doesnt support addEventListener so its must loop for applying addEventListener
    arrayElement.addEventListener('click', function(e){
        console.log(arrayElement.dataset.animalType);
    })
}


//looping array with forEach
all_lists.forEach(species);