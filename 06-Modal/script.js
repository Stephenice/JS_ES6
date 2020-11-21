'use strict';

const modal = document.querySelector('.modal');
const bntOpenModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//loop mutiple class with same class name ..Node
for (let index = 0; index < bntOpenModal.length; index++)
bntOpenModal[index].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

function closeModal(){
     //when using remove method you dont have to add dot with the class name
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// keyboard 
document.addEventListener('keydown',function(e){
   console.log(e);
   if(e.key === "Escape" && !modal.classList.contains('hidden')){
    closeModal()
   }
});