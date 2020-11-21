'use strict'

const containerMenu = document.querySelector('.myDIV');
const menu = document.querySelectorAll('.btn');

//console.log(menu);

for (let index = 0; index < menu.length; index++)
menu[index].addEventListener('click', function (){
const activeMenu = document.querySelectorAll('.active');
console.log(activeMenu);
activeMenu[0].classList.remove('active');
// Add the active class to the current/clicked button
this.classList += " active";
})

