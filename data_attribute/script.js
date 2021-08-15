const all_lists = document.querySelectorAll("li");



const species = function(arrayElement){ 
    console.log(arrayElement);
    //Note:: NodeList doesnt support addEventListener so its must be loop to apply addEventListener
    arrayElement.addEventListener('click', function(e){
        alert(arrayElement.dataset.animalType);

    })
}


//looping the nodelist with forEach
all_lists.forEach(species);