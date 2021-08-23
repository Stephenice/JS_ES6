'use strict';

//element 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//element for smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
//for nav
const nav__parent_container = document.querySelector('.nav__links');


///////////////////////////////////////
// Modal window
const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( btn => btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//smooth scrolling
btnScrollTo.addEventListener('click', function(event){
  console.log(event);
event.preventDefault;
//console.log(event.target.getBoundingClientRect());

//old version for scrolling
const s1coords =section1.getBoundingClientRect();
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth"
// })

// new version for scrolling smoothly update
section1.scrollIntoView({behavior : 'smooth'});
})

//page navigation old 
const nav = document.querySelectorAll('.nav__link');
nav.forEach(nav_el =>nav_el.addEventListener('click',function(e){
  e.preventDefault();
const id = nav_el.getAttribute('href');
document.querySelector(id).scrollIntoView({behavior: 'smooth'});

} ))

//page navigation new Using Event Delegation
//....Step 1. Add event to the common parent element 
//....Step 2. Determine what element originate the event 

//  nav__parent_container.addEventListener('click', function(e){
//    e.preventDefault();
  
//   //matching strategy
//   if(e.target.classList.contains('nav__link')){
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   }
//  })




 //Dom trversing
