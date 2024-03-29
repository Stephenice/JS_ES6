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
// const nav = document.querySelectorAll('.nav__link');
// nav.forEach(nav_el =>nav_el.addEventListener('click',function(e){
//   e.preventDefault();
// const id = nav_el.getAttribute('href');
// document.querySelector(id).scrollIntoView({behavior: 'smooth'});

// } ))

//page navigation new Using Event Delegation
//....Step 1. Add event to the common parent element 
//....Step 2. Determine what element originate the event 

 nav__parent_container.addEventListener('click', function(e){
   e.preventDefault();
  
  //matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
 })



//tabs 
 const tab_container = document.querySelector('.operations__tab-container');
 const tab_buttons = document.querySelectorAll('.operations__tab');
 const tab_contents = document.querySelectorAll('.operations__content');

 tab_container.addEventListener('click', function(e){
   const clicked = e.target.closest('.operations__tab')

//Guard clause
if(!clicked) return;

tab_buttons.forEach(tab_el => tab_el.classList.remove('operations__tab--active'));
tab_contents.forEach(tab_content => tab_content.classList.remove('operations__content--active'));

clicked.classList.add('operations__tab--active');

//activate the contents tabbed
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
 })


 //Menu fade animation 
const nav = document.querySelector('.nav');

const handleHover = function(e){
  console.log(this);
  if(e.target.classList.contains('nav__link')){
   const link = e.target;
   const sibling = link.closest('.nav').querySelectorAll('.nav__link');
   const logo = link.closest('.nav').querySelector('img');
 
   //fade 
   sibling.forEach(el => {
     if(el !== link) el.style.opacity = this;
   });
 
   logo.style.opacity = this;
 
  }
 
 };

nav.addEventListener('mouseover', handleHover.bind(0.5) );

nav.addEventListener('mouseout', handleHover.bind(1));


//sticky nav -----------

window.addEventListener('scroll', function(){
  
})

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const headerCallback = function(entries, observ){
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerOption ={
root: null,
threshold: 0,
rootMargin: `-${navHeight}px`
}

const headerObserver = new IntersectionObserver(headerCallback, headerOption);
headerObserver.observe(header);

//Revealing Elements on Scroll
const allSection = document.querySelectorAll('.section');

function sectionCallback(entries, observer){
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
}

const sectionOption = {
  root: null,
  threshold: 0.15
}

const sectionObserver = new IntersectionObserver(sectionCallback, sectionOption);
allSection.forEach(function(section){
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})

// Lazy Loading Images- good for performance

const targetImg = document.querySelectorAll('img[data-src]');

function lazyCallback(entries, observe){
const [entry] = entries;

if(!entry.isIntersecting) return;

console.log(entry.target.src);
entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load', function(){
  entry.target.classList.remove('lazy-img')
})

observe.unobserve(entry.target);
}

const lazyOption ={
  root: null,
  threshold: 0,
  rootMargin: '200px'
}

const lazyObserver = new IntersectionObserver(lazyCallback, lazyOption);

//loopin img
targetImg.forEach(function img(img){
  lazyObserver.observe(img);
})


//Slider Component
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//Dom trversing
//  const h1 = document.querySelector('h1')
// console.log(h1.parentNode);
// console.log(h1.parentElement);
